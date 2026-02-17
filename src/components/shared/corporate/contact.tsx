"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function CorporateContact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                setToast({ show: true, message: "Message sent successfully!", type: "success" });
                formRef.current?.reset();
            })
            .catch(() => {
                setToast({ show: true, message: "Something went wrong. Try again.", type: "error" });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
            });
    };

    return (
        <section
            className="py-16 sm:py-20 second-scroll bg-[linear-gradient(to_bottom,#F4F8FD_50%,#e5e7eb_50%)]"
            aria-labelledby="corporate-contact-title"
        >
            <div
                className="
          max-w-[1140px] w-full
          px-6 sm:px-10 lg:px-[95px]
          py-10 sm:py-14 lg:py-[65px]
          mx-auto
          bg-[#ff3f81]
          rounded-2xl
        "
            >
                <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold block mb-2">
                    Contact EtruendE
                </span>

                <h2
                    id="corporate-contact-title"
                    className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                    Let’s discuss your website
                </h2>

                <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-10 max-w-[750px] text-white">
                    Tell us what you need and we’ll reply with a clear plan, timeline, and estimate.
                    No pressure - just a quick and honest conversation.
                </p>

                <form ref={formRef} onSubmit={sendEmail} encType="multipart/form-data" className="select-none" aria-label="Corporate website contact form">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-white">
                                Name *
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                required
                                className="
                                        border-b border-white/70
                                        bg-transparent outline-none py-3
                                        text-white
                                        focus:border-white
                                        transition-all
                                    "
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-white">
                                Phone (optional)
                            </label>
                            <input
                                name="user_phone"
                                type="tel"
                                className="
                                        border-b border-white/70
                                        bg-transparent outline-none py-3
                                        text-white
                                        focus:border-white
                                        transition-all
                                    "
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-white">
                                Email *
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                required
                                className="
                                        border-b border-white/70
                                        bg-transparent outline-none py-3
                                        text-white
                                        focus:border-white
                                        transition-all
                                    "
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-5">
                        <label className="sr-only">Project description or link to file</label>
                        <input
                            name="user_msg"
                            type="text"
                            placeholder="Describe your project or paste a Google Drive / Dropbox link"
                            className="
                                border-b border-white/70
                                bg-transparent outline-none py-3
                                text-white
                                placeholder:text-white/70
                                focus:border-white
                                focus:placeholder:text-white
                                transition-all
                            "
                        />
                    </div>

                    <div
                        className="
                            mt-6
                            flex flex-col gap-4
                            lg:flex-row lg:items-center lg:justify-between
                        "
                    >
                        <label className="flex items-center gap-3 text-sm text-white cursor-pointer">
                            <input type="checkbox" required className="accent-[#131632]" />
                            I consent to the processing of personal data
                        </label>



                        <button
                            disabled={loading}
                            type="submit"
                            className="
                                w-full lg:w-auto
                                px-6 py-3 rounded-xl
                                bg-white text-[#ff3f81]
                                font-semibold
                                hover:bg-white/90
                                transition
                            "
                        >
                            {loading ? "Sending..." : "Get a Quote"}
                        </button>

                        <p>
                            We usually reply within 24 hours (Mon–Fri).
                        </p>
                    </div>
                </form>
            </div>

            {toast.show && (
                <div
                    className={`fixed top-6 left-1/2 -translate-x-1/2 z-999
                        px-6 py-3 rounded-full text-white font-medium shadow-lg
                        transition-all duration-500
                        ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                >
                    {toast.message}
                </div>
            )}
        </section>
    );
}
