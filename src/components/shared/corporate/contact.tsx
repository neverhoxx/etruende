"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function CorporateContact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "success" });

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
                setToast({ show: true, message: "Message sent! We'll get back to you shortly.", type: "success" });
                formRef.current?.reset();
            })
            .catch(() => {
                setToast({ show: true, message: "Something went wrong. Please try again.", type: "error" });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
            });
    };

    return (
        <section
            className="py-16 sm:py-20 bg-[linear-gradient(to_bottom,#F4F8FD_50%,#e5e7eb_50%)]"
            aria-labelledby="corporate-contact-title"
        >
            <div className="max-w-[1140px] w-full px-6 sm:px-10 lg:px-[95px] py-10 sm:py-14 lg:py-[65px] mx-auto bg-[#ff3f81] rounded-2xl shadow-[0_0_60px_rgba(255,63,129,0.25)]">

                <div className="flex items-center gap-2 mb-3">
                    <HiOutlineSparkles className="text-[#131632] text-2xl" />
                    <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold">
                        Contact EtruendE
                    </span>
                </div>

                <h2
                    id="corporate-contact-title"
                    className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Let's discuss your website
                </h2>

                <p className="text-base sm:text-lg text-white/80 mb-10 max-w-[680px]">
                    Tell us what you need. We'll reply with a clear plan, timeline, and estimate.
                    No pressure, just an honest conversation.
                </p>

                <form ref={formRef} onSubmit={sendEmail} className="select-none" aria-label="Corporate website contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                                Name *
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                required
                                placeholder="John Smith"
                                className="border-b border-white/40 bg-transparent outline-none py-3 text-white placeholder:text-white/40 focus:border-white transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                                Phone
                            </label>
                            <input
                                name="user_phone"
                                type="tel"
                                placeholder="+372 000 0000"
                                className="border-b border-white/40 bg-transparent outline-none py-3 text-white placeholder:text-white/40 focus:border-white transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                                Email *
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                required
                                placeholder="john@company.com"
                                className="border-b border-white/40 bg-transparent outline-none py-3 text-white placeholder:text-white/40 focus:border-white transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-6">
                        <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                            Project description
                        </label>
                        <input
                            name="user_msg"
                            type="text"
                            placeholder="Describe your project or paste a Google Drive / Dropbox link"
                            className="border-b border-white/40 bg-transparent outline-none py-3 text-white placeholder:text-white/40 focus:border-white focus:placeholder:text-white/60 transition-colors"
                        />
                    </div>

                    <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <label className="flex items-center gap-3 text-sm text-white/80 cursor-pointer">
                            <input type="checkbox" required className="accent-[#131632] w-4 h-4" />
                            I consent to the processing of personal data
                        </label>

                        <p className="text-sm text-white/60 lg:order-last">
                            We reply within 24 hours · Mon–Fri
                        </p>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full lg:w-auto px-8 py-3 rounded-xl bg-white text-[#ff3f81] font-semibold hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-200"
                        >
                            {loading ? "Sending..." : "Get a Quote →"}
                        </button>
                    </div>
                </form>
            </div>

            {toast.show && (
                <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-white text-sm font-medium shadow-xl transition-all duration-500 whitespace-nowrap ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                    {toast.message}
                </div>
            )}
        </section>
    );
}