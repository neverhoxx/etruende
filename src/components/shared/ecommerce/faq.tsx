"use client";

import { HiOutlineSparkles } from "react-icons/hi2";
import { Container } from "../container";
import { useState } from "react";

const faqItems = [
    {
        q: "What is an online store website?",
        a: "An online store is a website where customers can browse products and place orders. Depending on your needs, it can include payments, delivery options, and an admin panel."
    },
    {
        q: "How much does an online store cost?",
        a: "Pricing depends on the number of products, design complexity, and integrations (payments, delivery, CRM). After a short brief, we provide a fixed quote and timeline."
    },
    {
        q: "How long does it take to build?",
        a: "Simple stores usually take 1-3 weeks. More complex projects can take longer depending on features and content readiness."
    },
    {
        q: "Is SEO included?",
        a: "Yes. We include SEO best practices: clean structure, metadata, sitemap, and indexing setup. Product pages are built to be easy to crawl and maintain."
    },
    {
        q: "Can you redesign an existing store?",
        a: "Yes. We can refresh design, improve structure, and optimize performance. We’ll first review your current website and suggest the best approach."
    },
    {
        q: "Do you build with Shopify or custom solutions?",
        a: "We can work with Shopify or build custom online stores using modern stacks (Next.js + headless CMS) depending on your goals and budget."
    },
    {
        q: "Will the store work well on mobile?",
        a: "Absolutely. All stores we build are mobile-first and responsive for phones, tablets, and desktops."
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. We can help with updates, improvements, and maintenance after launch when you need it."
    }
];


export default function EcommerceFAQ() {
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
                    Online Store FAQ
                </h2>

                <div className="flex flex-col select-none">
                    {faqItems.map((item, i) => {
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    })
                }}
            />

        </section>
    );
}
