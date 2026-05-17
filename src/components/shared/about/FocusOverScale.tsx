"use client";

import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";
import Link from "next/link";

const points = [
    { k: "Direct communication", v: "You talk to the developer, not a manager." },
    { k: "Fast iterations", v: "Clear feedback loops, no waiting weeks." },
    { k: "Quality control", v: "Clean structure and code on every project." },
    { k: "Full responsibility", v: "One owner of the result - start to finish." },
];

export default function FocusOverScale() {
    return (
        <section className="py-16 sm:py-24 bg-[#131632] text-white relative overflow-hidden">

            <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[#ff3f81] opacity-[0.05] blur-3xl pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                    <div className="w-full lg:w-[55%] flex flex-col gap-5" data-aos="fade-up">
                        <div className="flex items-center gap-2 select-none">
                            <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]" />
                            <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                                Focus over scale
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Small studio -<br />
                            <span className="text-[#ff3f81]">big attention</span> to detail
                        </h2>

                        <div className="w-[200px] h-[3px] rounded bg-linear-to-r from-[#ff3f81] to-white/20" />

                        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-[560px]">
                            EtruendE is a small, focused studio. This allows us to work closely
                            with every client, move fast, and care about details that large
                            agencies often ignore.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                            <Link
                                href="/contacts"
                                className="px-7 py-3.5 rounded-xl bg-[#ff3f81] text-white font-semibold hover:bg-[#e8336f] transition-all duration-300 active:scale-[0.98]"
                            >
                                Work with us →
                            </Link>
                            <p className="text-white/30 text-xs">
                                Fixed quote · Reply within 24h
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {points.map((x, i) => (
                            <div
                                key={x.k}
                                className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#ff3f81]/40 hover:shadow-[0_0_20px_rgba(255,63,129,0.1)] transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <p className="text-white font-semibold mb-1">{x.k}</p>
                                <p className="text-white/50 text-sm leading-relaxed">{x.v}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}