"use client";

import { Container } from "../container";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const faqs = [
    {
        q: "What is a landing page?",
        a: "A landing page is a focused one-page website designed around a single offer or action - for example: request a quote, book a call, or leave contact details."
    },
    {
        q: "How is a landing page different from a regular website?",
        a: "A landing page focuses on one message and one call-to-action. A regular website usually has multiple pages and goals (about, services, contacts, etc.)."
    },
    {
        q: "When should I choose a landing page?",
        a: "Landing pages work best for a single service, product, or campaign - when you want visitors to quickly understand the offer and take action."
    },
    {
        q: "How long does it take to build a landing page?",
        a: "Most landing pages take from a few days to 1–2 weeks depending on content readiness, design complexity, and integrations."
    },
    {
        q: "Is SEO included?",
        a: "Yes. We include SEO best practices such as clean structure, headings, metadata, and fast performance. For long-term SEO growth, content strategy matters too."
    },
    {
        q: "How much does a landing page cost?",
        a: "Pricing depends on design complexity, number of sections, and integrations (forms, analytics, tracking). After a short brief, we provide a fixed quote and timeline."
    },
];


export default function LandingFAQ() {
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
                    Landing Page Development FAQ
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
            <p className="sr-only">
                Landing page development FAQ by EtruendE. Answers about landing pages, timelines, pricing,
                and what is included in development (design, performance, and SEO best practices).
            </p>
        </section>
    );
}


