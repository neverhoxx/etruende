"use client";

import { HiOutlineSparkles } from "react-icons/hi2";
import { Container } from "../container";
import { useState } from "react";

const faqItems = [
    {
        q: "What is an e-commerce website?",
        a: "An e-commerce website is an online platform that allows businesses to sell products or services directly to customers with integrated payments, product catalogs, and order management."
    },
    {
        q: "How much does e-commerce website development cost?",
        a: "The cost depends on project complexity, features, and integrations. EtruendE builds scalable e-commerce solutions tailored to your business goals and budget."
    },
    {
        q: "How long does it take to build an online store?",
        a: "On average, e-commerce website development takes 4–8 weeks depending on design, functionality, and integrations."
    },
    {
        q: "Will my e-commerce website be SEO optimized?",
        a: "Yes. We build SEO-friendly e-commerce websites with clean architecture, fast loading speed, and technical SEO best practices."
    },
    {
        q: "Can you redesign an existing e-commerce website?",
        a: "Yes. We improve existing online stores by optimizing performance, SEO, user experience, and conversion rates."
    },
    {
        q: "What platforms do you use for e-commerce development?",
        a: "We develop custom e-commerce websites and work with platforms like Shopify, headless CMS solutions, and custom stacks."
    },
    {
        q: "Is the e-commerce website mobile-friendly?",
        a: "Absolutely. All e-commerce websites we build are fully responsive and optimized for all devices."
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. We offer ongoing support, updates, maintenance, and growth consulting after launch."
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
                    Corporate Website Development FAQ
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
