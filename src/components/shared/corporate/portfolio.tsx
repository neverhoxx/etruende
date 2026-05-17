'use client';

import Image from 'next/image';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Container } from '../container';
import { HiOutlineSparkles } from 'react-icons/hi2';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import voltampPic from "@/images/projects/voltamp.png";
import paikesemajadPic from "@/images/projects/solantra-solarhome.png";

const items = [
    {
        title: 'Voltamp',
        subtitle: 'Business website',
        image: voltampPic,
        alt: 'Voltamp business website developed by EtruendE Studio',
        href: '/portfolio/voltamp',
    },
    {
        title: 'Solantra Solarhome',
        subtitle: 'Business website',
        image: paikesemajadPic,
        alt: 'Solantra Solarhome business website developed by EtruendE Studio',
        href: '/portfolio/solantra-solarhome',
    },
];

interface ScrollItem {
    title: string;
    subtitle: string;
    image: StaticImageData;
    alt: string;
    href: string;
}

export function PortfolioScroll({ items }: { items: ScrollItem[] }) {
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
        thumb.style.left = `${(el.scrollLeft / maxScroll) * maxThumb}px`;
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        const thumb = thumbRef.current;
        if (!thumb) return;
        setIsDragging(true);
        dragStartX.current = e.clientX;
        initialThumbLeft.current = parseFloat(thumb.style.left || '0');
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        const bar = barRef.current;
        const thumb = thumbRef.current;
        const el = scrollRef.current;
        if (!bar || !thumb || !el) return;

        let newLeft = initialThumbLeft.current + (e.clientX - dragStartX.current);
        newLeft = Math.max(0, Math.min(newLeft, bar.clientWidth - thumb.clientWidth));
        thumb.style.left = `${newLeft}px`;

        const maxThumb = bar.clientWidth - thumb.clientWidth;
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollLeft = (newLeft / maxThumb) * maxScroll;
    }, [isDragging]);

    const handleMouseUp = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div className="w-full sm:w-[90%] md:w-[80%] mx-auto select-none">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-8 sm:gap-10 md:gap-12 px-4 py-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
            >
                {items.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="group shrink-0 text-center w-[280px] md:w-[320px]"
                    >
                        <div className="w-full h-[200px] md:h-[220px] rounded-t-[40px] overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(255,63,129,0.4)]">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                                priority={i === 0}
                            />
                        </div>
                        <div className="mt-4 px-1">
                            <h3 className="text-lg font-semibold text-[#131632] group-hover:text-[#ff3f81] transition-colors duration-200">
                                {item.title}
                            </h3>
                            <p className="text-[#ff3f81] text-sm mt-1">{item.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="relative w-full flex justify-center mt-4">
                <div ref={barRef} className="relative w-[70%] sm:w-[55%] md:w-[45%] h-[3px] bg-[#cae0fc] rounded-full">
                    <div
                        ref={thumbRef}
                        onMouseDown={handleMouseDown}
                        className="absolute top-1/2 -translate-y-1/2 h-[6px] w-[60px] bg-[#ff3f81] rounded-full cursor-grab active:cursor-grabbing"
                        style={{ left: 0 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default function CorporatePortfolio() {
    return (
        <section className="py-20 bg-white border-b border-[#cae0fc]">
            <Container>
                <div className="w-full flex flex-col items-center gap-3 mb-10">
                    <div className="flex items-center gap-2 justify-center" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Selected projects
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#131632] text-center"
                        data-aos="fade-up"
                    >
                        Business websites by{' '}
                        <span className="text-[#ff3f81]">EtruendE</span>
                    </h2>

                    <p
                        className="text-center max-w-[600px] text-[#7a7a7a] text-[15px]"
                        data-aos="fade-up"
                    >
                        Real projects for real businesses. Clear structure, clean design, fast performance.
                    </p>

                    <div
                        className="md:max-w-[390px] md:w-full w-1/2 h-[3px] rounded bg-gradient-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)]"
                        data-aos="fade-up"
                    />
                </div>

                <PortfolioScroll items={items} />

                <div className="flex justify-center mt-10" data-aos="fade-up">
                    <Link
                        href="/portfolio"
                        className="px-8 py-3 border border-[#ff3f81] text-[#ff3f81] text-sm font-semibold tracking-wide hover:bg-[#ff3f81] hover:text-white transition-all duration-300"
                    >
                        View all projects →
                    </Link>
                </div>
            </Container>
        </section>
    );
}