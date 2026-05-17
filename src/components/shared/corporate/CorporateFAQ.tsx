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
        a: "Most business websites take around 10-14 days. Larger projects can take 2-4 weeks depending on requirements and content."
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
        <section className="py-20 bg-[#F4F8FD] border-t border-[#cae0fc]">
            <Container>
                <div className="flex flex-col items-center gap-3 mb-14 text-center">
                    <div className="flex items-center gap-2" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            FAQ
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#131632]"
                        data-aos="fade-up"
                    >
                        Business Website Development {" "}
                        <span className="text-[#ff3f81]">FAQ</span>
                    </h2>

                    <p className="text-[#444] max-w-xl" data-aos="fade-up">
                        Everything you need to know before working with{" "}
                        <span className="text-[#ff3f81] font-semibold">EtruendE</span>
                    </p>

                    <div
                        className="md:max-w-[480px] md:w-full w-1/2 h-[3px] rounded bg-gradient-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)]"
                        data-aos="fade-up"
                    />
                </div>

                <div className="flex flex-col gap-2 max-w-[860px] mx-auto select-none">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen
                                    ? "border-[#ff3f81] shadow-[0_0_20px_rgba(255,63,129,0.15)]"
                                    : "border-gray-200 hover:border-[#f1c4d6]"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
                                >
                                    <span className={`font-semibold text-[15px] md:text-[17px] transition-colors duration-200 ${isOpen ? "text-[#ff3f81]" : "text-[#131632]"}`}>
                                        {item.q}
                                    </span>
                                    <span
                                        className={`text-[#ff3f81] text-2xl font-light shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-5 text-[#7a7a7a] text-[15px] leading-relaxed border-t border-[#f1c4d6] pt-4">
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
