"use client";

import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useState } from "react";

const faqs = [
    {
        q: "What is a business website?",
        a: "A business website is a multi-page site that presents your company, services, and contact details in a clear and professional way."
    },
    {
        q: "Why does my business need a website?",
        a: "A website builds trust, helps customers understand what you do, and makes it easy for them to contact you."
    },
    {
        q: "Is SEO included?",
        a: "Yes. We include SEO best practices: clean structure, headings, metadata, sitemap, and indexing setup."
    },
    {
        q: "How long does it take?",
        a: "Most business websites take around 10–14 days. Larger projects can take 2–4 weeks depending on requirements and content."
    },
    {
        q: "Can you redesign an existing website?",
        a: "Yes. We can refresh design, improve structure, update content blocks, and optimize performance."
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. We can help with updates and improvements after launch when you need it."
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
                    Business Website Development FAQ
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
