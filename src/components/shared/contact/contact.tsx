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

import Link from "next/link";

export default function ContactSectionPage() {
    return (
        <section className="relative py-30 min-h-screen flex justify-center items-center bg-[#131632] overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#ff3f81]/30 rounded-full blur-[120px]" />
            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">

                <div className="text-white">
                    <span className="uppercase tracking-widest text-sm text-[#ff3f81] font-semibold">
                        Contact
                    </span>

                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                        Let’s Build Something <br />
                        <span className="text-[#ff3f81]">Exceptional</span>
                    </h2>

                    <p className="mt-6 text-white/80 max-w-xl text-lg">
                        Whether you’re planning a new project, scaling your business,
                        or improving digital performance - our team is ready to help.
                        Let’s talk strategy, design, and results.
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
                                <p>hello@etruende.com</p>
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

                    <form className="space-y-8 select-none">

                        <div>
                            <label className="text-sm text-gray-600">
                                Your name
                            </label>
                            <input
                                type="text"
                                placeholder="How should we call you?"
                                className="w-full border-b border-gray-300 py-3 outline-none
                                focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Phone number
                            </label>
                            <input
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
                                type="email"
                                placeholder="Your business email"
                                className="w-full border-b border-gray-300 py-3 outline-none
                                focus:border-[#ff3f81] transition"
                            />
                        </div>

                        <label className="flex items-start gap-3 text-sm text-gray-500 cursor-pointer">
                            <input type="checkbox" className="mt-1 accent-[#ff3f81]" />
                            I agree to the processing of my personal data
                        </label>

                        <button
                            type="submit"
                            className="w-full mt-6 py-4 rounded-full
                            bg-[#ff3f81] text-white font-semibold text-lg
                            hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,63,129,0.6)]
                            transition-all"
                        >
                            Request a Consultation
                        </button>
                    </form>
                </div>

            </Container>
        </section>
    );
}
