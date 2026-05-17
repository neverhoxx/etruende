"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Container } from "./container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { HiOutlineSparkles } from "react-icons/hi2";

const contactInfo = [
    { icon: Phone, label: "Phone", value: "+372 5364 5159", href: "tel:+37253645159" },
    { icon: Mail, label: "Email", value: "etruendewebstudio@gmail.com", href: "mailto:etruendewebstudio@gmail.com" },
    { icon: MapPin, label: "Location", value: "Tallinn, Estonia", href: null },
    { icon: Clock, label: "Working Hours", value: "Mon–Fri · 10:00–20:00", href: null },
];

const services = [
    "Landing Page",
    "Business Website",
    "E-commerce Store",
    "SEO Setup",
    "Website Redesign",
    "Other",
];

export default function ContactForm() {
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
        <div className="py-20 bg-[#ff3f81] second-scroll">
            <Container className="flex flex-col md:flex-row gap-14 md:gap-20">

                <div className="md:w-1/2 flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#131632] text-3xl" />
                        <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold">
                            Let's talk
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        data-aos="fade-up"
                    >
                        Let's create digital experiences
                        <br />that truly <span className="text-[#131632]">stand out</span>
                    </h2>

                    <p
                        className="text-[16px] md:text-[18px] text-white/80 leading-relaxed"
                        data-aos="fade-up"
                    >
                        Tell us about your project - we'll send you a fixed quote within 24 hours.
                        No calls required, no obligations.
                    </p>

                    <div className="mt-10 flex flex-col gap-6 w-full">
                        {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                                    <Icon className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-white/50 font-semibold">{label}</p>
                                    {href ? (
                                        <a href={href} className="text-white font-medium hover:text-[#131632] transition-colors">
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    aria-label="Contact form"
                    data-aos="fade-up"
                    className="select-none md:w-1/2 backdrop-blur-xl bg-white/90 rounded-2xl p-8 flex flex-col gap-6 text-[#131632] shadow-2xl border border-white/40"
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-[#919191]">Name *</label>
                        <input
                            name="user_name"
                            type="text"
                            required
                            placeholder="John Smith"
                            className="border-b border-[#131632]/20 bg-transparent outline-none py-2.5 text-[#131632] placeholder:text-[#ccc] focus:border-[#ff3f81] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-[#919191]">E-mail *</label>
                        <input
                            name="user_email"
                            type="email"
                            required
                            placeholder="john@company.com"
                            className="border-b border-[#131632]/20 bg-transparent outline-none py-2.5 text-[#131632] placeholder:text-[#ccc] focus:border-[#ff3f81] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-[#919191]">Phone</label>
                        <input
                            name="user_phone"
                            type="tel"
                            placeholder="+372 000 0000"
                            className="border-b border-[#131632]/20 bg-transparent outline-none py-2.5 text-[#131632] placeholder:text-[#ccc] focus:border-[#ff3f81] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-[#919191]">Service</label>
                        <select
                            name="service"
                            defaultValue=""
                            className="border-b border-[#131632]/20 bg-transparent outline-none py-2.5 text-[#131632] focus:border-[#ff3f81] transition-colors cursor-pointer"
                        >
                            <option value="" disabled>Select a service...</option>
                            {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold uppercase tracking-wide text-[#919191]">Message</label>
                        <textarea
                            name="user_msg"
                            rows={3}
                            placeholder="Tell us about your project..."
                            className="border-b border-[#131632]/20 bg-transparent outline-none py-2.5 resize-none text-[#131632] placeholder:text-[#ccc] focus:border-[#ff3f81] transition-colors"
                        />
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="mt-2 bg-[#131632] hover:bg-[#0e1027] disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white py-4 rounded-xl w-full font-semibold text-base shadow-lg active:scale-[0.98]"
                    >
                        {loading ? "Sending..." : "Send Request →"}
                    </button>

                    <p className="text-center text-xs text-[#919191]">
                        We reply within 24 hours · No spam, ever
                    </p>
                </form>
            </Container>

            {toast.show && (
                <div className={`
                    fixed top-6 left-1/2 -translate-x-1/2 z-50
                    px-6 py-3 rounded-full text-white text-sm font-medium shadow-xl
                    transition-all duration-500 whitespace-nowrap
                    ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}
                `}>
                    {toast.message}
                </div>
            )}
        </div>
    );
}