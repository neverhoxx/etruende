import heroPic from "@/images/Decor.png";

import { Container } from "../container";

import { BsLightningChargeFill } from "react-icons/bs";
import { FaCode, FaRocket } from "react-icons/fa";

import Link from "next/link";

export default function AboutHero() {
    return (
        <div
            className="w-full min-h-screen pt-[90px] sm:pt-[100px] bg-[#131632]"
            style={{
                backgroundImage: `
                    linear-gradient(
                        to bottom,
                        rgba(19, 22, 50, 0.5),
                        rgba(19, 22, 50, 0) 40%
                    ),
                    url(${heroPic.src})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container className="text-white min-h-screen">
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
                        We Build Websites That Actually Work for

                        <span className="text-[#ff3f81]"> Business</span>
                    </h1>
                    <p className="text-lg sm:text-xl opacity-80 mb-6 text-center">
                        EtruendE is an independent web development studio focused on performance, SEO, and conversion - not templates or visual noise.
                    </p>

                    <div className="flex gap-5 mb-10 flex-wrap justify-center">
                        <div className="select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 min-w-[300px] md:min-w-[400px] flex flex-col items-center gap-2">
                            <FaCode className="text-[#ff3f81] text-2xl" /> Performance-first development
                        </div>

                        <div className="select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 min-w-[300px] md:min-w-[400px] flex flex-col items-center gap-2">
                            <FaRocket className="text-[#ff3f81] text-2xl" /> SEO-ready architecture
                        </div>

                        <div className="select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 min-w-[300px] md:min-w-[400px] flex flex-col items-center gap-2">
                            <BsLightningChargeFill className="text-[#ff3f81] text-2xl" /> Conversion-focused UX
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/portfolio" className="select-none px-10 py-3 rounded-xl bg-white text-[#131632] font-semibold shadow-xl hover:bg-gray-200 transition">
                            View projects
                        </Link>
                    </div>

                    <p className="sr-only">
                        EtruendE is a professional web development and SEO studio specializing in
                        custom websites, landing pages, e-commerce platforms, and SEO promotion.
                        We help businesses grow traffic, improve Google rankings, and increase
                        conversions through modern web technologies and performance-driven design.
                    </p>
                </div>
            </Container>
        </div>
    );
}
