"use client";

import { Container } from "../container";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const faqs = [
    {
        q: "What is a web application?",
        a: "A web application is a dynamic software solution accessed through a browser. Unlike a regular website, it allows users to interact with data, perform actions, and use complex functionality such as dashboards, SaaS platforms, CRM systems, and online services.",
    },
    {
        q: "What types of web applications do you develop?",
        a: "We develop custom web applications including SaaS platforms, business dashboards, internal systems, admin panels, client portals, booking systems, marketplaces, and enterprise-level web solutions.",
    },
    {
        q: "Are your web applications scalable?",
        a: "Yes. All our web applications are built with scalability in mind. We design architectures that allow your product to grow in users, features, and traffic without performance issues.",
    },
    {
        q: "Do you develop secure web applications?",
        a: "Security is a core part of our development process. We implement authentication, authorization, data protection, secure APIs, and best practices to protect your application and users.",
    },
    {
        q: "Can you integrate third-party services and APIs?",
        a: "Absolutely. We integrate payment systems, CRM tools, analytics platforms, marketing services, external APIs, and custom integrations tailored to your business needs.",
    },
    {
        q: "How long does it take to build a web application?",
        a: "Project timelines depend on complexity and requirements. A basic web application may take 4–6 weeks, while advanced platforms and SaaS products typically take several months.",
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. We offer ongoing support, maintenance, updates, and feature enhancements to ensure your web application remains secure, stable, and competitive.",
    },
];

export default function WebApplicationFAQ() {
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
                    Web Application Development FAQ
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
