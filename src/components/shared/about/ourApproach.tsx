"use client";

import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiTarget, FiZap, FiTrendingUp, FiLayers } from "react-icons/fi";

const items = [
    { title: "Strategy first", text: "We start with business goals, not design trends.", icon: FiTarget },
    { title: "Performance & SEO", text: "Clean code, fast loading, search-friendly structure from day one.", icon: FiZap },
    { title: "Conversion-focused UX", text: "Every page is built to guide users toward a clear action.", icon: FiTrendingUp },
    { title: "Scalability", text: "Websites that grow with your business — easy to extend and improve.", icon: FiLayers },
];

export default function OurApproach() {
    return (
        <section className="py-16 sm:py-20 bg-[#F4F8FD] text-[#131632]">
            <Container>
                <div className="flex flex-col items-center lg:items-start gap-3">
                    <div className="flex items-center gap-2 select-none" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.6)]" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Our approach
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left" data-aos="fade-up">
                        Built like a product - not <span className="text-[#ff3f81]">"just a website"</span>
                    </h2>

                    <div className="md:max-w-[520px] md:w-full w-1/2 h-[3px] rounded bg-gradient-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.25)]" />
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((it, i) => {
                        const Icon = it.icon;
                        return (
                            <div
                                key={it.title}
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                className="relative rounded-2xl bg-white border border-[#2a2f5520] p-6 sm:p-7
                hover:shadow-[0_0_25px_rgba(255,63,129,0.25)] transition"
                            >
                                <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#ff3f81] text-[#ff3f81] flex items-center justify-center font-semibold select-none">
                                    {i + 1}
                                </div>

                                <div className="w-14 h-14 rounded-xl bg-[#131632] flex items-center justify-center mb-5">
                                    <Icon className="text-white text-2xl" />
                                </div>

                                <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#ff3f81]">{it.title}</h3>
                                <p className="text-[#4b4b4b] text-sm sm:text-base leading-relaxed">{it.text}</p>


                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
