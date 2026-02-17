"use client";

import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";

const points = [
    { k: "Direct communication", v: "You talk to the developer" },
    { k: "Fast iterations", v: "Clear feedback loops" },
    { k: "Quality control", v: "Clean structure and code" },
    { k: "Full responsibility", v: "One owner of the result" },
];

export default function FocusOverScale() {
    return (
        <section className="py-16 sm:py-20 bg-[#131632] text-white">
            <Container>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="w-full lg:w-[60%]">
                        <div className="flex items-center gap-2 mb-3 select-none">
                            <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]" />
                            <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                                Focus over scale
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-bold text-white">
                            Small studio - so we can care about details.
                        </h2>

                        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-[760px]">
                            EtruendE is a small, focused studio. This allows us to work closely with every client,
                            move fast, and care about details that large agencies often ignore.
                        </p>
                    </div>

                    <div className="w-full lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {points.map((x) => (
                            <div key={x.k} className="rounded-2xl bg-white/10 border border-white/15 p-4">
                                <p className="text-white font-semibold">{x.k}</p>
                                <p className="text-white/70 text-sm mt-1">{x.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
