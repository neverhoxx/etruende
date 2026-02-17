"use client";

import { Container } from "@/components/shared/container";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Instagram,
    Facebook,
    Send,
} from "lucide-react";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import Link from "next/link";

export default function ContactSectionPage() {
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
        <section className="relative py-30 min-h-screen flex justify-center items-center bg-[#131632] overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#ff3f81]/30 rounded-full blur-[120px]" />
            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">

                <div className="text-white">
                    <span className="uppercase tracking-widest text-sm text-[#ff3f81] font-semibold">
                        Contact
                    </span>

                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                        Let’s discuss
                        <span className="text-[#ff3f81]"> your website</span>
                    </h2>

                    <p className="mt-6 text-white/80 max-w-xl text-lg">
                        Tell us what you need and we’ll reply with a clear plan, timeline, and estimate.
                        No pressure - just a quick, honest conversation.
                    </p>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 text-white/80">

                        <div className="flex items-center gap-4">
                            <Phone className="text-[#ff3f81]" />
                            <div>
                                <p className="font-semibold text-white">Phone</p>
                                <p>+372 5364 5159</p>
                            </div>
                        </div>

                        <div className="flex tems-center gap-4">
                            <Mail className="text-[#ff3f81]" />
                            <div>
                                <p className="font-semibold text-white">Email</p>
                                <p>etruendewebstudio@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <MapPin className="text-[#ff3f81]" />
                            <div>
                                <p className="font-semibold text-white">Location</p>
                                <p>Tallinn, Estonia</p>
                            </div>
                        </div>

                        <div className="flex tems-center gap-4">
                            <Clock className="text-[#ff3f81]" />
                            <div>
                                <p className="font-semibold text-white">Working Hours</p>
                                <p>Mon–Fri · 10:00-20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14">
                        <p className="font-semibold text-white mb-4">
                            Follow us
                        </p>

                        <div className="flex gap-6 text-white/70">
                            <Link target="_blank" href="https://www.instagram.com/etruende_webstudio/">
                                <Instagram className="hover:text-[#ff3f81] transition cursor-pointer" />
                            </Link>
                            <Facebook className="hover:text-[#ff3f81] transition cursor-pointer" />
                            <Send className="hover:text-[#ff3f81] transition cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-[0_0_60px_rgba(255,63,129,0.25)]">
                    <h3 className="text-3xl font-bold text-[#131632] mb-10">
                        Get in Touch
                    </h3>

                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="space-y-8 select-none"
                    >


                        <div>
                            <label className="text-sm text-gray-600">
                                Your name
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                placeholder="How should we call you?"
                                className="w-full border-b border-gray-300 py-3 outline-none
                                focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Phone number (optional)
                            </label>
                            <input
                                name="user_phone"
                                type="tel"
                                placeholder="Your contact phone"
                                className="w-full border-b border-gray-300 py-3 outline-none
                                focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Email address
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                placeholder="Your business email"
                                className="w-full border-b border-gray-300 py-3 outline-none
                                focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Project details</label>
                            <textarea
                                name="message"
                                placeholder="What do you need? (type of website, pages, examples, deadline)"
                                rows={5}
                                className="w-full border-b border-gray-300 py-3 outline-none resize-none
               focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Current website (optional)</label>
                            <input
                                name="website"
                                type="url"
                                placeholder="https://..."
                                className="w-full border-b border-gray-300 py-3 outline-none
               focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full py-4 rounded-full cursor-pointer
                            bg-[#ff3f81] text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,63,129,0.6)]
                            transition-all"
                        >
                            {loading ? "Sending..." : "Request a Consultation"}
                        </button>
                        <p>
                            We usually reply within 24 hours (Mon–Fri).
                        </p>
                    </form>
                </div>

            </Container>
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
