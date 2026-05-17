"use client";

import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";

const steps = [
    {
        id: 1,
        title: "Brief & Planning",
        text: "We learn about your business, goals, and content. Then we confirm the site pages, structure, and timeline.",
        timeline: "1–2 days",
    },
    {
        id: 2,
        title: "Design & Structure",
        text: "We prepare the layout and visual style and send it for your approval before development starts.",
        timeline: "2–7 days",
    },
    {
        id: 3,
        title: "Development",
        text: "We build the website in Next.js, make it mobile-friendly, and optimize for speed and performance.",
        timeline: "2–14 days",
    },
    {
        id: 4,
        title: "Launch & Handover",
        text: "We test everything, publish the site, connect analytics, and support you through the first updates.",
        timeline: "1–2 days",
    },
];

export default function OurProcess() {
    return (
        <div className="py-20 bg-[#F4F8FD] border-y border-[#cae0fc]">
            <Container>

                <div className="w-full flex flex-col items-center md:items-start gap-3">
                    <div className="flex items-center gap-2" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Our Process
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center md:text-left"
                        data-aos="fade-up"
                    >
                        How we build{" "}
                        <span className="text-[#ff3f81]">your website</span>
                    </h2>

                    <p className="text-center md:text-left text-[#444]" data-aos="fade-up">
                        A clear step-by-step process —{" "}
                        <span className="text-[#ff3f81]">
                            you always see progress and know what's next.
                        </span>
                    </p>

                    <div
                        className="md:max-w-[613px] md:w-full w-1/2 h-[3px] rounded bg-linear-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)]"
                        data-aos="fade-up"
                    />

                    <p className="sr-only">
                        EtruendE follows a clear workflow: brief, design, development, testing and launch.
                        We focus on structure, performance and SEO best practices.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative md:gap-10 gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative flex flex-col select-none"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="
                                bg-white p-6 pt-8 rounded-xl
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                shadow-[0_0_12px_rgba(255,63,129,0.2)]
                                border border-[#f1c4d6]
                                h-full flex flex-col
                            ">
                                <div className="
                                    w-10 h-10 mb-4 rounded-full
                                    flex items-center justify-center
                                    font-semibold text-[#ff3f81]
                                    border border-[#ff3f81]
                                    bg-white shrink-0
                                ">
                                    {step.id}
                                </div>

                                <h3 className="text-xl md:text-2xl mb-3 font-semibold text-[#1a1a1a]">
                                    {step.title}
                                </h3>

                                <p className="text-[15px] text-[#7a7a7a] leading-relaxed flex-1">
                                    {step.text}
                                </p>

                                <div className="mt-5 pt-4 border-t border-[#f1c4d6] flex items-center gap-2">
                                    <span className="text-xs text-[#919191] uppercase tracking-wide">Timeline</span>
                                    <span className="text-sm font-semibold text-[#ff3f81]">{step.timeline}</span>
                                </div>

                                <p className="sr-only">
                                    {step.title} is part of EtruendE web development workflow focused on
                                    performance, SEO optimization and business growth.
                                </p>
                            </div>

                            <Arrow index={index} />
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    );
}

function Arrow({ index }: { index: number }) {
    const isLast = index === 3;

    return (
        <>

            {!isLast && (
                <div className="flex sm:hidden justify-center">
                    <div className="flex flex-col items-center">
                        <div className="w-[3px] h-6 bg-linear-to-b from-[#131632] to-[#ff3f81]" />
                        <div className="w-3 h-3 rounded-full bg-[#ff3f81]" />
                    </div>
                </div>
            )}


            <div className="hidden sm:flex lg:hidden">
                {(index === 0 || index === 2) && (
                    <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 flex items-center">
                        <TabletArrowRight />
                    </div>
                )}
                {index === 1 && (
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex items-center">
                        <TabletArrowDown />
                    </div>
                )}
            </div>


            {!isLast && (
                <div className="hidden lg:flex items-center absolute -right-10 top-1/2 -translate-y-1/2">
                    <DesktopArrow />
                </div>
            )}
        </>
    );
}

function DesktopArrow() {
    return (
        <div className="flex items-center">
            <div className="w-10 h-[3px] bg-linear-to-r from-[#131632] to-[#ff3f81]" />
            <div className="w-3 h-3 rounded-full bg-[#ff3f81]" />
        </div>
    );
}

function TabletArrowRight() {
    return (
        <div className="flex items-center">
            <div className="w-8 h-[3px] bg-linear-to-r from-[#131632] to-[#ff3f81]" />
            <div className="w-3 h-3 rounded-full bg-[#ff3f81]" />
        </div>
    );
}

function TabletArrowDown() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-8 w-[3px] bg-linear-to-b from-[#131632] to-[#ff3f81]" />
            <div className="w-3 h-3 rounded-full bg-[#ff3f81]" />
        </div>
    );
}