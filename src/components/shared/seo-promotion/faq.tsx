"use client";

import { Container } from "../container";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const faqs = [
    {
        q: "What is SEO promotion?",
        a: "SEO promotion is the process of optimizing a website to increase its visibility in search engines like Google. It includes technical SEO, content optimization, keyword strategy, and link building to attract organic traffic and grow long-term results.",
    },
    {
        q: "Why does my business need SEO promotion?",
        a: "SEO promotion helps your business get consistent, high-quality traffic without relying solely on paid ads. It improves brand visibility, increases trust, and brings users who are actively searching for your services.",
    },
    {
        q: "How long does SEO promotion take to show results?",
        a: "SEO is a long-term strategy. First improvements usually appear within 1–3 months, while stable growth and strong rankings typically take 3–6 months depending on competition, niche, and website condition.",
    },
    {
        q: "What is included in your SEO promotion services?",
        a: "Our SEO promotion services include website audit, technical SEO, keyword research, on-page optimization, content strategy, link building, performance tracking, and continuous optimization.",
    },
    {
        q: "Do you work with competitive niches?",
        a: "Yes. EtruendE works with competitive industries by building strong SEO foundations, high-quality content, and safe backlink strategies that allow businesses to compete for top rankings.",
    },
    {
        q: "Is SEO promotion safe for my website?",
        a: "Absolutely. We use only white-hat SEO techniques that comply with Google guidelines. Our approach focuses on sustainable growth without risks of penalties or ranking drops.",
    },
    {
        q: "How much does SEO promotion cost?",
        a: "SEO promotion cost depends on your goals, competition level, and website condition. We offer custom SEO strategies tailored to your business to ensure maximum ROI.",
    },
];

export default function SeoPromotionFAQ() {
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
                    SEO Promotion FAQ
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
                                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
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
                SEO promotion services by EtruendE. We provide professional search
                engine optimization, organic traffic growth, Google ranking
                improvements, technical SEO, content optimization, and link
                building for businesses worldwide.
            </p>
        </section>
    );
}
