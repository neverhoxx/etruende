import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Container } from "../container";
import Link from "next/link";

const stats = [
    {
        number: "13+",
        title: "Projects delivered",
        text: "Websites for small businesses, services, and local brands.",
        big: true,
    },
    {
        number: null,
        title: "Clear process",
        text: "Design approval → development → launch. You always see progress and know what's next.",
        big: false,
    },
    {
        number: null,
        title: "Fast delivery",
        text: "Most business websites are live in 7-14 days from the first brief.",
        big: false,
    },
];

export default function CorporateHero() {
    return (
        <section
            className="w-full min-h-screen overflow-hidden px-4 pb-10 sm:px-6 pt-[90px] sm:pt-[100px]"
            style={{
                background: "linear-gradient(140deg, #131632 20%, #ff3f82b8 100%)",
            }}
        >
            <Container>
                <Breadcrumb className="select-none mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="hover:text-[#ff3f81] text-white/60 text-sm"
                                href="/"
                            >
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/30" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[#ff3f81] text-sm">
                                Business Website
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">

                    <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            A website that builds trust and{" "}
                            <span className="text-[#ff3f81]">brings clients</span>
                        </h1>

                        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-[580px]">
                            A clear multi-page website that explains what you do, builds trust,
                            and makes it easy for customers to reach you.
                            We handle structure, design, development, and launch
                            with a transparent process and honest estimates.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                            <Link
                                href="/contacts"
                                className="select-none px-7 py-3.5 rounded-xl bg-[#ff3f81] text-white font-semibold hover:bg-[#e8336f] transition-all duration-300"
                            >
                                Get a quote →
                            </Link>
                            <Link
                                href="/portfolio"
                                className="select-none px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                View portfolio
                            </Link>
                        </div>

                        <p className="text-white/30 text-xs">
                            Fixed quote after brief · No hidden fees · Reply within 24h
                        </p>
                    </div>

                    <div className="w-full md:w-[42%] flex flex-col gap-4 select-none">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-[#131632cc] backdrop-blur w-full px-5 py-6 rounded-2xl text-white border border-white/10
                                    hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,63,129,0.3)]
                                    transition-all duration-300"
                            >
                                {stat.big && stat.number && (
                                    <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-2">
                                        {stat.number}
                                    </p>
                                )}
                                <p className="font-bold text-base sm:text-lg uppercase tracking-wide mb-1">
                                    {stat.title}
                                </p>
                                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                    {stat.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <p className="sr-only">
                EtruendE provides corporate website development services for businesses worldwide.
                We design and build professional corporate websites focused on brand authority,
                trust, SEO optimization and long-term business growth.
            </p>
        </section>
    );
}