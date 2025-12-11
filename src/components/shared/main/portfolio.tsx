"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Container } from "../container";

import { HiOutlineSparkles } from "react-icons/hi2";

import Link from "next/link";

const items = [
    {
        title: "Voltamp",
        subtitle: "Landing Page",
        image: "/images/life-comfort.png",
    },
    {
        title: "Päikesemajad",
        subtitle: "SEO promotion",
        image: "/images/lazurit.png",
    },
    {
        title: "Some site",
        subtitle: "Интернет-магазин",
        image: "/images/only-wine.png",
    },
    {
        title: "Some site",
        subtitle: "Корпоративный сайт",
        image: "/images/livingston.png",
    },
    {
        title: "Some site",
        subtitle: "Корпоративный сайт",
        image: "/images/livingston.png",
    },
    {
        title: "Some site",
        subtitle: "Корпоративный сайт",
        image: "/images/livingston.png",
    },
    {
        title: "Some site",
        subtitle: "Корпоративный сайт",
        image: "/images/livingston.png",
    },
];

export default function PortfolioScrollCustom() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [initialThumbLeft, setInitialThumbLeft] = useState(0);

    const handleScroll = () => {
        const el = scrollRef.current;
        const thumb = thumbRef.current;
        const bar = barRef.current;
        if (!el || !thumb || !bar) return;

        const maxScroll = el.scrollWidth - el.clientWidth;
        const maxThumb = bar.clientWidth - thumb.clientWidth;

        const thumbLeft = (el.scrollLeft / maxScroll) * maxThumb;
        thumb.style.left = `${thumbLeft}px`;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const thumb = thumbRef.current;
        if (!thumb) return;

        setIsDragging(true);
        setDragStartX(e.clientX);
        setInitialThumbLeft(parseFloat(thumb.style.left || "0"));
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;

        const bar = barRef.current;
        const thumb = thumbRef.current;
        const el = scrollRef.current;
        if (!bar || !thumb || !el) return;

        const delta = e.clientX - dragStartX;

        let newLeft = initialThumbLeft + delta;
        newLeft = Math.max(0, Math.min(newLeft, bar.clientWidth - thumb.clientWidth));

        thumb.style.left = `${newLeft}px`;

        const maxThumb = bar.clientWidth - thumb.clientWidth;
        const maxScroll = el.scrollWidth - el.clientWidth;

        el.scrollLeft = (newLeft / maxThumb) * maxScroll;
    };

    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    });

    return (
        <div className="py-20 bg-[#131632]">
            <Container>
                <div className="w-full flex flex-col items-center gap-3">

                    <div className="flex items-center gap-2 justify-center">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            What You Get
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#fff] text-center">
                        Built by{" "}
                        <span className="text-[#ff3f81]">EtruendE</span>
                    </h2>

                    <div className="md:max-w-[639px] md:w-full w-1/2 h-[3px] rounded bg-gradient-to-r from-[#ff3f81] to-[#fff] shadow-[0_0_12px_rgba(255,63,129,0.6)]"></div>
                </div>

                {/* ADAPTIVE WRAPPER */}
                <div className="w-full sm:w-[85%] md:w-[70%] my-0 mx-auto select-none">

                    {/* SCROLL AREA */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="
                            flex gap-8 sm:gap-12 md:gap-16 
                            p-4 sm:p-6 md:p-10 
                            overflow-x-scroll 
                            pb-6 sm:pb-8 
                            [&::-webkit-scrollbar]:hidden 
                            [scrollbar-width:none] 
                            -ms-overflow-style:none
                        "
                    >
                        {items.map((item, i) => (
                            <Link
                                href=""
                                key={i}
                                className="
                                    text-center 
                                    w-[85%] 
                                    sm:w-52 
                                    md:w-64 
                                    shrink-0 
                                    mx-auto
                                "
                            >
                                <div
                                    className="
                                        w-full aspect-square
                                        sm:w-52 sm:h-52
                                        md:w-64 md:h-64
                                        rounded-full 
                                        overflow-hidden 
                                        shadow-lg 
                                        transition-all 
                                        duration-300
                                        hover:scale-[1.03] 
                                        hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                    "
                                >
                                    <Image
                                        src={item.image}
                                        width={300}
                                        height={300}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <h3 className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-[#ff3f81] text-sm">
                                    {item.subtitle}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* CUSTOM SCROLLBAR */}
                    <div className="relative w-full flex justify-center mt-6">
                        <div
                            ref={barRef}
                            className="relative w-[85%] sm:w-[70%] md:w-[60%] h-1 bg-[#2a2f55] rounded-full"
                        >
                            <div
                                ref={thumbRef}
                                onMouseDown={handleMouseDown}
                                className="
                                    absolute 
                                    top-1/2 
                                    -translate-y-1/2 
                                    h-3 
                                    bg-[#ff3f81] 
                                    rounded-full 
                                    cursor-pointer
                                "
                                style={{
                                    width: "70px", // phone
                                    left: 0
                                }}
                            ></div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
