"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import Link from "next/link";

import voltampPic from "@/images/projects/voltamp.png";
import paikesemajadPic from "@/images/projects/solantra-solarhome.png";
import LandingDemo1 from "@/images/projects/LandingDemo1.png";
import fusion from "@/images/projects/fusion.png";
import pic3dsdom from "@/images/projects/3dsdom.png";
import ralest from "@/images/projects/ralest.png";

const items = [
    {
        title: "Voltamp",
        subtitle: "Business website",
        image: voltampPic,
        alt: "Voltamp business website built by EtruendE",
        href: "/portfolio/voltamp",
    },
    {
        title: "Solantra Solarhome",
        subtitle: "Landing page",
        image: paikesemajadPic,
        alt: "Solantra Solarhome landing page built by EtruendE",
        href: "/portfolio/solantra-solarhome",
    },
    {
        title: "Landing Page Demo",
        subtitle: "Landing page concept",
        image: LandingDemo1,
        alt: "Landing page concept built by EtruendE",
        href: "/portfolio",
    },
    {
        title: "Fusionoff",
        subtitle: "Online store",
        image: fusion,
        alt: "Fusionoff online store built by EtruendE",
        href: "/portfolio/fusionoff",
    },
    {
        title: "3dsdom",
        subtitle: "Landing page",
        image: pic3dsdom,
        alt: "3dsdom landing page built by EtruendE",
        href: "/portfolio/3dsdom",
    },
    {
        title: "Ral Est",
        subtitle: "SEO setup",
        image: ralest,
        alt: "Ral Est SEO setup project by EtruendE",
        href: "/portfolio",
    },
];

export default function PortfolioScrollCustom() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const initialThumbLeft = useRef(0);

    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        const thumb = thumbRef.current;
        const bar = barRef.current;
        if (!el || !thumb || !bar) return;

        const maxScroll = el.scrollWidth - el.clientWidth;
        const maxThumb = bar.clientWidth - thumb.clientWidth;
        const thumbLeft = (el.scrollLeft / maxScroll) * maxThumb;
        thumb.style.left = `${thumbLeft}px`;
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        const thumb = thumbRef.current;
        if (!thumb) return;
        setIsDragging(true);
        dragStartX.current = e.clientX;
        initialThumbLeft.current = parseFloat(thumb.style.left || "0");
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        const bar = barRef.current;
        const thumb = thumbRef.current;
        const el = scrollRef.current;
        if (!bar || !thumb || !el) return;

        const delta = e.clientX - dragStartX.current;
        let newLeft = initialThumbLeft.current + delta;
        newLeft = Math.max(0, Math.min(newLeft, bar.clientWidth - thumb.clientWidth));
        thumb.style.left = `${newLeft}px`;

        const maxThumb = bar.clientWidth - thumb.clientWidth;
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollLeft = (newLeft / maxThumb) * maxScroll;
    }, [isDragging]);

    const handleMouseUp = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div className="py-20 bg-[#131632]">
            <Container>
                <div className="w-full flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 justify-center" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold select-none">
                            Our Portfolio
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold text-white text-center"
                        data-aos="fade-up"
                    >
                        Selected projects by{" "}
                        <span className="text-[#ff3f81]">EtruendE</span>
                    </h2>

                    <p
                        className="text-white/50 text-center max-w-lg text-[15px]"
                        data-aos="fade-up"
                    >
                        Real projects for real businesses - landing pages, online stores, and business websites.
                    </p>

                    <div
                        className="md:max-w-[390px] md:w-full w-1/2 h-[3px] rounded bg-linear-to-r from-[#ff3f81] to-white shadow-[0_0_12px_rgba(255,63,129,0.6)]"
                        data-aos="fade-up"
                    />
                </div>

                <div className="w-full sm:w-[90%] md:w-[80%] mx-auto mt-10 select-none">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="
                            flex gap-8 sm:gap-10 md:gap-12
                            px-4 py-6
                            overflow-x-scroll
                            [&::-webkit-scrollbar]:hidden
                            [scrollbar-width:none]
                            [-ms-overflow-style:none]
                        "
                    >
                        {items.map((item, i) => (
                            <Link
                                href={item.href}
                                key={i}
                                className="group shrink-0 text-center w-[280px] md:w-[320px]"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <div className="
                                    w-full h-[200px] md:h-[220px]
                                    rounded-t-[40px] overflow-hidden
                                    shadow-lg
                                    transition-all duration-300
                                    group-hover:scale-[1.03]
                                    group-hover:shadow-[0_0_30px_rgba(255,63,129,0.4)]
                                ">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                        priority={i === 0}
                                    />
                                </div>

                                <div className="mt-4 px-1">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-[#ff3f81] transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#ff3f81] text-sm mt-1">{item.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="relative w-full flex justify-center mt-4">
                        <div
                            ref={barRef}
                            className="relative w-[70%] sm:w-[55%] md:w-[45%] h-[3px] bg-white/10 rounded-full"
                        >
                            <div
                                ref={thumbRef}
                                onMouseDown={handleMouseDown}
                                className="absolute top-1/2 -translate-y-1/2 h-1.5 w-[60px] bg-[#ff3f81] rounded-full cursor-grab active:cursor-grabbing transition-colors"
                                style={{ left: 0 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10 select-none" data-aos="fade-up">
                    <Link
                        href="/portfolio"
                        className="
                            px-8 py-3 border border-[#ff3f81] text-[#ff3f81]
                            text-sm font-semibold tracking-wide
                            hover:bg-[#ff3f81] hover:text-white
                            transition-all duration-300
                        "
                    >
                        View all projects →
                    </Link>
                </div>

            </Container>

            <p className="sr-only">
                Portfolio of websites built by EtruendE: business websites, landing pages, and online stores.
                Explore website projects by EtruendE: landing pages, online stores, and business websites.
            </p>
        </div>
    );
}