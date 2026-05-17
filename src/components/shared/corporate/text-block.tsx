'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Container } from "../container";
import { CheckCircle } from 'lucide-react';

const included = [
    "Clear site structure and navigation",
    "Mobile-first responsive layout",
    "Fast loading and performance optimization",
    "Contact form and quick-contact buttons",
    "Basic SEO setup (metadata, sitemap, indexing)",
    "Analytics setup (optional)",
];

const stats = [
    { number: "13+", label: "Projects delivered" },
    { number: "7-14", label: "Days to launch" },
    { number: "100%", label: "Fixed price, no surprises" },
];

export default function CorporateWebsiteBlock() {
    const contentRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const dragStartY = useRef(0);
    const initialThumbTop = useRef(0);

    const updateThumb = useCallback(() => {
        const el = contentRef.current;
        const thumb = thumbRef.current;
        const track = trackRef.current;
        if (!el || !thumb || !track) return;

        const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight);
        const maxThumb = track.clientHeight - thumb.clientHeight;
        thumb.style.top = `${scrollRatio * maxThumb}px`;

        track.style.opacity = el.scrollHeight > el.clientHeight ? '1' : '0';
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        const thumb = thumbRef.current;
        if (!thumb) return;
        setIsDragging(true);
        dragStartY.current = e.clientY;
        initialThumbTop.current = parseFloat(thumb.style.top || '0');
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        const track = trackRef.current;
        const thumb = thumbRef.current;
        const el = contentRef.current;
        if (!track || !thumb || !el) return;

        let newTop = initialThumbTop.current + (e.clientY - dragStartY.current);
        newTop = Math.max(0, Math.min(newTop, track.clientHeight - thumb.clientHeight));
        thumb.style.top = `${newTop}px`;

        const maxThumb = track.clientHeight - thumb.clientHeight;
        const maxScroll = el.scrollHeight - el.clientHeight;
        el.scrollTop = (newTop / maxThumb) * maxScroll;
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

    useEffect(() => {
        updateThumb();
    }, [updateThumb]);

    return (
        <section className="w-full py-24 bg-[#e5e7eb]" aria-labelledby="corporate-about-title">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div className="relative flex flex-col gap-8">
                    <div className="text-[80px] sm:text-[120px] font-bold select-none opacity-[0.07] pointer-events-none leading-none">
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl px-6 py-5 border border-[#cae0fc]"
                            >
                                <p className="text-3xl font-bold text-[#ff3f81] mb-1">{stat.number}</p>
                                <p className="text-sm text-[#7a7a7a] font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-up">
                    <h2
                        id="corporate-about-title"
                        className="text-3xl md:text-4xl font-bold text-[#131632] mb-6 leading-tight"
                    >
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>{" "}
                        - business websites that <span className="text-[#ff3f81]">build trust</span>
                    </h2>

                    <div className="relative flex gap-3">
                        <div
                            ref={contentRef}
                            onScroll={updateThumb}
                            className="max-h-[380px] overflow-y-auto pr-4 flex-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                        >
                            <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                                A business website is your main online presence. It explains what you do,
                                builds trust, and makes it easy for customers to contact you.
                            </p>

                            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                                We design and develop modern multi-page websites with a clear structure,
                                clean design, and fast performance with a transparent process from start to launch.
                            </p>

                            <h3 className="text-xl font-semibold text-[#131632] mb-4">
                                What's included
                            </h3>

                            <ul className="flex flex-col gap-3 mb-6">
                                {included.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                                        <CheckCircle className="text-[#ff3f81] w-5 h-5 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-[#131632] mb-3">
                                SEO best practices (no hype)
                            </h3>

                            <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                                We set up the technical foundation for search visibility: proper headings,
                                metadata, sitemap, and clean structure. So your website is easy to index
                                and ready for future content.
                            </p>

                            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                                You always see progress step by step. First structure and design,
                                then development and launch.
                            </p>
                        </div>

                        <div
                            ref={trackRef}
                            className="relative w-[3px] bg-[#e5e7eb] rounded-full shrink-0 transition-opacity duration-300"
                            style={{ minHeight: '380px' }}
                        >
                            <div
                                ref={thumbRef}
                                onMouseDown={handleMouseDown}
                                className="absolute w-[3px] h-[60px] bg-[#ff3f81] rounded-full cursor-grab active:cursor-grabbing left-0"
                                style={{ top: 0 }}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}