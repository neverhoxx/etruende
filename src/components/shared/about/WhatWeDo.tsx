"use client";

import Link from "next/link";
import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";

const services = [
    "Business & corporate websites",
    "Landing pages",
    "E-commerce websites",
    "Website redesign & optimization",
    "SEO-ready website architecture",
];

export default function WhatWeDo() {
    return (
        <section className="py-16 sm:py-20 bg-[#F4F8FD] text-[#131632]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-3 select-none" data-aos="fade-up">
                            <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.6)]" />
                            <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                                What we do
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" data-aos="fade-up">
                            Clear services. <span className="text-[#ff3f81]">No buzzwords</span>.
                        </h2>

                        <p className="mt-6 text-[#3b3b3b] text-base sm:text-lg max-w-[720px]" data-aos="fade-up" data-aos-delay="100">
                            We build clean, fast, and maintainable websites with a structure that supports growth.
                            Everything is designed for real users and real business goals.
                        </p>

                        <div className="mt-8 flex gap-3 flex-col sm:flex-row" data-aos="fade-up" data-aos-delay="150">
                            <Link
                                href="/contacts"
                                className="select-none inline-flex justify-center items-center px-6 py-3 rounded-xl
                bg-[#ff3f81] text-white font-semibold hover:opacity-90 transition"
                            >
                                Request an estimate
                            </Link>

                            <Link
                                href="/portfolio"
                                className="select-none inline-flex justify-center items-center px-6 py-3 rounded-xl
                bg-[#131632] text-white font-semibold hover:opacity-90 transition"
                            >
                                See projects
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white border border-[#2a2f5520] p-6 sm:p-8 shadow-sm" data-aos="fade-up" data-aos-delay="200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {services.map((s) => (
                                <div key={s} className="flex items-start gap-3">
                                    <FiCheckCircle className="text-[#ff3f81] mt-1" />
                                    <p className="text-sm sm:text-base text-[#333]">{s}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 rounded-2xl border border-[#ff3f81]/25 bg-[#ff3f81]/10 p-4">
                            <p className="text-sm sm:text-base text-[#131632]">
                                Tip: if you’re not sure what you need — we’ll help choose the best format and structure.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
