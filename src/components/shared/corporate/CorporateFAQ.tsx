"use client";

import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useState } from "react";

const faqs = [
    {
        q: "What is a corporate website?",
        a: "A corporate website is an official digital platform that represents a company, its services, values, and brand identity, helping build trust and attract clients."
    },
    {
        q: "Why does my business need a corporate website?",
        a: "A corporate website increases credibility, improves online visibility, and serves as a powerful tool for lead generation and brand positioning."
    },
    {
        q: "Is SEO included in corporate website development?",
        a: "Yes. Every corporate website we build includes SEO-friendly structure, optimized content, and performance best practices."
    },
    {
        q: "How long does corporate website development take?",
        a: "Development usually takes from 3 to 8 weeks depending on the size and complexity of the project."
    },
    {
        q: "Can you redesign an existing corporate website?",
        a: "Yes. We redesign corporate websites to improve design, usability, SEO performance, and conversions."
    },
    {
        q: "Do you provide support after launch?",
        a: "Absolutely. We offer ongoing support, updates, and scaling options after the website goes live."
    }
];

export default function CorporateFAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="pb-5 bg-[#e5e7eb]">
            <Container className="max-w-[900px]">
                <div className="flex items-center gap-2 justify-center">
                    <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]" />
                    <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                        FAQ
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#131632] mb-10 text-center">
                    Corporate Website Development FAQ
                </h2>

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
