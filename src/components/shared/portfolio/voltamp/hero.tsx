import { Container } from "../../container";
import Image from "next/image";
import Link from "next/link";

import heroPic from "@/images/projects/hero-voltamp.png";

export default function VoltampHero() {
    return (
        <div className="relative bg-[#131632] pt-28 pb-5 min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff3f81]/10 via-transparent to-transparent" />

            <Container>
                <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[#ff3f81] uppercase tracking-[0.2em] text-sm select-none">
                            Case Study
                        </p>

                        <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            Building Trust & <br />
                            Visibility for <br />
                            an Energy Brand
                        </h1>

                        <p className="mt-8 text-zinc-300 text-lg max-w-xl">
                            Voltamp needed a corporate website that would
                            instantly communicate expertise, reliability,
                            and scale - while becoming a long-term SEO asset.
                        </p>

                        <p className="text-white mt-5 text-lg">
                            Website: <Link target="_blank" className="underline text-[#ff3f81]" href="https://voltamp.ee">voltamp.ee</Link>
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3 select-none">
                            {["Web Development", "SEO Strategy", "Corporate UX"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="px-5 py-2 rounded-full border border-white/10 text-sm text-white/80"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    <div className="relative">

                        <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden shadow-2xl">
                            <Image
                                src={heroPic}
                                alt="Voltamp corporate website case study"
                                fill
                                className="object-cover select-none"
                                priority
                            />
                        </div>


                    </div>
                </div>
            </Container>
        </div>
    );
}