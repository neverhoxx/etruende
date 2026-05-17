import heroPic from "@/images/Decor.png";
import { Container } from "../container";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCode, FaRocket } from "react-icons/fa";
import Link from "next/link";

const badges = [
    { icon: FaCode, label: "Performance-first development" },
    { icon: FaRocket, label: "SEO-ready architecture" },
    { icon: BsLightningChargeFill, label: "Conversion-focused UX" },
];

export default function AboutHero() {
    return (
        <div
            className="w-full min-h-screen pt-[90px]"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(19,22,50,0.7), rgba(19,22,50,0.3) 40%),
                    url(${heroPic.src})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#131632",
            }}
        >
            <Container className="text-white min-h-screen">
                <div className="flex flex-col justify-center items-center min-h-screen gap-6">

                    <h1 className="text-4xl sm:text-6xl font-bold text-center leading-tight ">
                        We build websites that actually work for
                        <span className="text-[#ff3f81]"> business</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/70 text-center max-w-2xl leading-relaxed">
                        EtruendE is an independent web development studio focused on performance,
                        SEO, and conversion. Not templates or visual noise.
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center">
                        {badges.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 flex items-center gap-3 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                            >
                                <Icon className="text-[#ff3f81] text-xl shrink-0" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                        <Link
                            href="/contacts"
                            className="select-none px-8 py-3.5 rounded-xl bg-[#ff3f81] text-white font-semibold hover:bg-[#e8336f] transition-all duration-300"
                        >
                            Start a project →
                        </Link>
                        <Link
                            href="/portfolio"
                            className="select-none px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            View projects
                        </Link>
                    </div>

                </div>
            </Container>

            <p className="sr-only">
                EtruendE is a professional web development and SEO studio specializing in
                custom websites, landing pages, e-commerce platforms, and SEO promotion.
                We help businesses grow traffic, improve Google rankings, and increase
                conversions through modern web technologies and performance-driven design.
            </p>
        </div>
    );
}