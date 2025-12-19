"use client";

import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useState } from "react";

const faqs = [
    {
        q: "What services does EtruendE provide?",
        a: "EtruendE is a full-cycle web development and SEO studio. We create corporate websites, landing pages, e-commerce platforms, and provide SEO optimization to help businesses grow online."
    },
    {
        q: "How much does it cost to build a website?",
        a: "The cost depends on the project type, design complexity, and functionality. We calculate each project individually based on your business goals."
    },
    {
        q: "How long does website development take?",
        a: "On average, website development takes from 2 to 8 weeks depending on the scope and requirements of the project."
    },
    {
        q: "Do you offer SEO services?",
        a: "Yes. We build SEO-friendly websites and offer ongoing SEO optimization to improve visibility, traffic, and conversions."
    },
    {
        q: "Can you redesign an existing website?",
        a: "Absolutely. We redesign websites to improve design, performance, SEO, and conversion rates."
    }
];

export default function HomeFAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-10 bg-[#F4F8FD]">
            <Container>
                <div className="flex flex-col items-center gap-3 mb-14 text-center">
                    <div className="flex items-center gap-2">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#131632]">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[#444] max-w-[700px]">
                        Everything you need to know about working with{" "}
                        <span className="text-[#ff3f81] font-semibold">EtruendE</span>
                    </p>
                </div>

                <div className="flex flex-col select-none">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-xl bg-white overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#131632]"
                                >
                                    {item.q}
                                    <span
                                        className={`text-[#ff3f81] transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
                                            {item.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
