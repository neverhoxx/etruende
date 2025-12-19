'use client';

import { IoIosRocket, IoIosColorPalette, IoIosTrendingUp, IoIosFlash } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { Container } from "../container";

export default function WhatYouGetBlock() {
    return (
        <div
            className="py-20"
            style={{
                background: "linear-gradient(180deg, #2a2f55 0%, #F9F9FF 10%)"
            }}
        >
            <Container>
                <div
                    className="w-full flex flex-col items-center md:items-start gap-3"
                >
                    <div
                        className="flex items-center gap-2 justify-center md:justify-start"
                        data-aos="fade-up"
                    >
                        <HiOutlineSparkles
                            className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125"
                        />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            What You Get
                        </span>
                    </div>

                    <h2
                        data-aos="fade-up"
                        className="text-4xl md:text-5xl font-bold text-[#1a1a1a] md:text-left text-center"
                    >
                        What You Get with{" "}
                        <span className="text-[#ff3f81]">EtruendE Web Development & SEO</span>
                    </h2>

                    <div
                        className="
                            origin-left
                            md:max-w-[639px] 
                            md:w-full
                            w-1/2
                            h-[3px] 
                            rounded 
                            bg-gradient-to-r 
                            from-[#ff3f81] 
                            to-[#131632] 
                            shadow-[0_0_12px_rgba(255,63,129,0.6)]
                        "

                        data-aos="fade-up"
                    />
                </div>

                <div
                    className="flex flex-wrap justify-center gap-2 md:gap-6 mt-7"
                >
                    {[
                        {
                            icon: IoIosRocket,
                            text: "High-converting websites built to generate leads, sales, and real business growth."
                        },
                        {
                            icon: FaMagnifyingGlassChart,
                            text: "Advanced SEO optimization that improves Google rankings and drives organic traffic."
                        },
                        {
                            icon: IoIosColorPalette,
                            text: "Custom UI/UX design crafted for your brand, audience, and conversion goals."
                        },
                        {
                            icon: IoIosTrendingUp,
                            text: "Marketing-focused website structure designed to increase sales and engagement."
                        },
                        {
                            icon: IoIosFlash,
                            text: "Fast-loading websites with clean, optimized code and top performance scores."
                        },
                        {
                            icon: HiOutlineSparkles,
                            text: "Ongoing website support, improvements, SEO consulting, and growth strategy."
                        },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                className="
                                    transform-gpu will-change-transform
                                    w-[45%] sm:w-[48%] lg:w-[32%]
                                    text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                                    px-3 py-6 md:p-6 rounded-2xl 
                                    bg-[#131632] border border-white/20 backdrop-blur-xl
                                    hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                    transition-transform duration-300 ease-out
                                    text-center
                                "

                            >
                                <Icon className="text-[#ff3f81] text-4xl" />
                                <p className="text-[14px] md:text-[18px]">{item.text}</p>
                            </div>
                        );
                    })}
                    <p className="sr-only">
                        EtruendE provides professional web development and SEO services for businesses
                        looking to grow online. Our websites are built with modern UI/UX design,
                        performance optimization, and search engine optimization to drive traffic,
                        improve rankings, and increase conversions.
                    </p>

                </div>
            </Container>
        </div>
    );
}
