"use client";

import { Container } from "../container";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const faqs = [
    {
        q: "What is a landing page?",
        a:
            "A landing page is a focused web page designed to convert visitors into leads or customers. Unlike a traditional website, a landing page is built around a single goal - such as collecting contact information, promoting a product, or driving sales. Every element is optimized for conversion.",
    },
    {
        q: "How is a landing page different from a regular website?",
        a:
            "A landing page focuses on one specific action, while a regular website contains multiple pages and goals. Landing pages eliminate distractions, guide users through a clear message, and are commonly used for marketing campaigns, advertising, and lead generation.",
    },
    {
        q: "Do landing pages really increase conversions?",
        a:
            "Yes. A professionally designed landing page significantly improves conversion rates by presenting a clear value proposition, strong call to action, and optimized user flow. Landing pages are proven tools for increasing leads, sales, and marketing campaign efficiency.",
    },
    {
        q: "How long does it take to build a landing page?",
        a:
            "The development time for a landing page depends on complexity, content, and integrations. On average, a high-quality landing page takes from a few days to two weeks, including design, development, optimization, and testing.",
    },
    {
        q: "Is a landing page optimized for SEO?",
        a:
            "Yes. We build landing pages with SEO-friendly structure, fast loading speed, clean code, and optimized content. This helps landing pages rank in search engines and attract organic traffic in addition to paid advertising.",
    },
    {
        q: "How much does a landing page cost?",
        a:
            "The cost of a landing page depends on design complexity, functionality, and business goals. We offer custom landing page development tailored to your needs, ensuring maximum performance, conversion, and return on investment.",
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
                Landing page development FAQ by EtruendE.
                We answer common questions about landing pages,
                conversion optimization, landing page pricing,
                SEO optimization, and professional landing page design.
            </p>
        </section>
    );
}


