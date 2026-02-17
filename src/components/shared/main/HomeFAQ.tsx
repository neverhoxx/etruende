"use client";

import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useState } from "react";

const faqs = [
    {
        q: "What do you build?",
        a: "We build modern websites for growing businesses: landing pages, business websites (4-7 pages), and simple catalogs. We focus on clear structure, mobile-first design, and fast performance."
    },
    {
        q: "How much does a website cost?",
        a: "Pricing depends on the number of pages, design complexity, and integrations. After a short call or brief, we send a fixed quote with what’s included and the timeline."
    },
    {
        q: "How long does it take?",
        a: "Most landing pages take 7-10 days. Business websites usually take 10–14 days. Larger projects can take 2–4 weeks depending on content and requirements."
    },
    {
        q: "Do you require an upfront payment?",
        a: "We don’t require full payment upfront. Usually we work in steps: first we agree on structure and design, then we continue with development. Payment can be split by stages so it feels safe and transparent."
    },
    {
        q: "What do you need from me to start?",
        a: "A short description of your business, services, contact details, and any photos/logos you have. If you don’t have text content yet, we can help you structure it and suggest what to include."
    },
    {
        q: "Can you redesign my existing website?",
        a: "Yes. We can refresh design, improve structure, update content blocks, and optimize performance. We’ll first review your current site and suggest the best approach."
    },
    {
        q: "Is SEO included?",
        a: "Yes! We include SEO best practices: clean structure, headings, metadata, sitemap, and indexing setup. Ongoing SEO work (content strategy, long-term optimization) can be added if needed."
    },
    {
        q: "How many revisions are included?",
        a: "We include 1–2 revision rounds during the design stage. This keeps the process fast and predictable. Extra changes can be added if needed."
    },
    {
        q: "Do you help with domain and hosting?",
        a: "Yes. We can help you connect a domain, set up hosting (Vercel), and publish the website. If you already have hosting, we can work with that too."
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

                <div className="flex flex-col select-none gap-1 max-w-[1200px] my-0 mx-auto">
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
