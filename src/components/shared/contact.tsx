"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { Container } from "./container";

import {
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

export default function ContactForm() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setToast({ show: true, message: "Message sent successfully!", type: "success" });
            formRef.current.reset();
        }).catch(() => {
            setToast({ show: true, message: "Something went wrong. Try again.", type: "error" });
        }).finally(() => {
            setLoading(false);
            setTimeout(() => {
                setToast({ show: false, message: "", type: "success" });
            }, 3000);
        });

    };

    return (
        <div className="py-20 bg-[#ff3f81] second-scroll">
            <Container className="flex flex-col md:flex-row gap-14 md:gap-20">

                <div className="md:w-1/2 flex flex-col items-start gap-2">

                    <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold">
                        Let’s talk
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Let’s create digital experiences<br />that truly stand out
                    </h2>

                    <p className="text-[16px] md:text-[20px] text-[#131632]">
                        We design and build high-performance websites that attract clients,
                        strengthen your brand, and bring real results.
                        Tell us about your project — we’ll help you turn it into something exceptional.
                    </p>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 text-white/80">

                        <div className="flex items-center gap-4">
                            <Phone className="text-white" />
                            <div>
                                <p className="font-semibold text-white">Phone</p>
                                <p>+372 5364 5159</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-white" />
                            <div>
                                <p className="font-semibold text-white">Email</p>
                                <p>hello@etruende.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin className="text-white" />
                            <div>
                                <p className="font-semibold text-white">Location</p>
                                <p>Tallinn, Estonia</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock className="text-white" />
                            <div>
                                <p className="font-semibold text-white">Working Hours</p>
                                <p>Mon–Fri · 10:00–20:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form ref={formRef} onSubmit={sendEmail} encType="multipart/form-data" aria-label="Contact form" className="md:w-1/2 backdrop-blur-xl bg-white/80 rounded-2xl p-8 flex flex-col gap-7 text-[#131632] shadow-2xl border border-white/40">

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Name *</label>
                        <input
                            name="user_name"
                            type="text"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">E-mail *</label>
                        <input
                            name="user_email"
                            type="email"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Phone *</label>
                        <input
                            name="user_phone"
                            type="tel"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Which service are you interested in?</label>
                        <input
                            name="service"
                            type="text"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Message</label>
                        <textarea
                            name="user_msg"
                            rows={4}
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 resize-none focus:border-[#131632] transition-all"
                        />
                    </div>

                    <button disabled={loading} type="submit" className="mt-4 bg-[#131632] hover:bg-[#0e1027] transition-all text-white py-4 rounded-xl w-full font-semibold text-lg shadow-lg hover:shadow-2xl active:scale-[0.98]">
                        {loading ? "Sending..." : "Send Request"}
                    </button>
                </form>

            </Container>

            {toast.show && (
                <div
                    className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999]
                        px-6 py-3 rounded-full text-white font-medium shadow-lg
                        transition-all duration-500
                        ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
}
