import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import fullWebSitePic from "@/images/projects/etruende-demo-barber.vercel.app_.png";

const stack = [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
];

const deliverables = [
    {
        title: "Landing page",
        text: "Single-page layout with hero, services, about, why us, and contact sections structured for fast scanning and conversion.",
    },
    {
        title: "Services catalog",
        text: "Clean service cards with icons, descriptions, and pricing for all 6 barbershop services.",
    },
    {
        title: "Booking form",
        text: "Appointment request form with name, phone, email, subject, and message fields ready to connect to any backend or email service.",
    },
    {
        title: "Mobile-first design",
        text: "Fully responsive layout optimized for mobile users who book appointments on the go.",
    },
    {
        title: "Performance optimization",
        text: "Image optimization via next/image, static generation, and minimal JS for lightning-fast load times.",
    },
    {
        title: "Brand-ready UI",
        text: "Dark, premium aesthetic with consistent typography, iconography, and a cohesive color palette tailored for a luxury barbershop feel.",
    },
];

const results = [
    { number: "6+", label: "Services listed" },
    { number: "1", label: "Page / fast load" },
    { number: "99%", label: "Satisfaction score" },
    { number: "<2s", label: "Load time" },
];

export default function BarberCase() {
    return (
        <article className="min-h-screen bg-white">
            <div
                className="w-full pt-[100px] pb-20 relative overflow-hidden"
                style={{ background: "linear-gradient(140deg, #131632 30%, #1a1209 100%)" }}
            >
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-amber-500 opacity-[0.05] blur-3xl pointer-events-none" />
                <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#ff3f81] opacity-[0.04] blur-3xl pointer-events-none" />

                <Container>
                    <Breadcrumb className="select-none mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="hover:text-[#ff3f81] text-white/50 text-sm" href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/20" />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="hover:text-[#ff3f81] text-white/50 text-sm" href="/portfolio">Portfolio</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/20" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[#ff3f81] text-sm">Barbershop Demo</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col gap-6 max-w-3xl">
                        <div className="flex items-center gap-2">
                            <HiOutlineSparkles className="text-[#ff3f81] text-xl drop-shadow-[0_0_12px_rgba(255,63,129,0.9)]" />
                            <span className="uppercase tracking-widest text-xs text-[#ff3f81] font-semibold">
                                Case Study
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            Barbershop Demo
                        </h1>

                        <p className="text-white/60 text-lg leading-relaxed">
                            A modern, high-converting landing page for a premium in-home
                            barber service built for bookings, built for mobile.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {stack.map((s) => (
                                <span
                                    key={s}
                                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-medium"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="https://etruende-demo-barber.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3f81] text-white font-semibold text-sm shadow-[0_0_20px_rgba(255,63,129,0.4)] hover:bg-[#e8336f] hover:shadow-[0_0_30px_rgba(255,63,129,0.6)] transition-all duration-300"
                            >
                                <FiExternalLink />
                                Visit website
                            </Link>
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200"
                            >
                                <FiArrowLeft />
                                Back to portfolio
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-[#F4F8FD] border-b border-[#cae0fc]">
                <Container>
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#cae0fc]">
                        {results.map(({ number, label }) => (
                            <div key={label} className="text-center py-8 px-4">
                                <p className="text-3xl sm:text-4xl font-bold text-[#ff3f81]">{number}</p>
                                <p className="text-xs text-[#919191] uppercase tracking-wide mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="py-16 bg-white border-b border-[#f0f0f0]">
                <Container>
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-[#e8eef5] w-[70%] mx-auto">
                        <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-white/5 rounded px-3 py-1 text-xs text-white/40 font-mono">
                                    etruende-demo-barber.vercel.app
                                </div>
                            </div>
                        </div>
                        <Image
                            src={fullWebSitePic}
                            alt="Barbershop demo website preview"
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </Container>
            </div>

            <div className="py-20 bg-[#F4F8FD] border-b border-[#cae0fc]">
                <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div data-aos="fade-up">
                        <div className="flex items-center gap-2 mb-4">
                            <HiOutlineSparkles className="text-[#ff3f81] text-2xl drop-shadow-[0_0_12px_rgba(255,63,129,0.8)]" />
                            <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                                About the project
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#131632] mb-4 leading-tight">
                            What we <span className="text-[#ff3f81]">built</span>
                        </h2>

                        <div className="w-[200px] h-[3px] rounded bg-linear-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)] mb-6" />

                        <div className="flex flex-col gap-4 text-[#7a7a7a] text-base leading-relaxed">
                            <p>
                                This is a demo project for a premium in-home barber service — targeting
                                busy professionals who want a quality haircut without leaving their home.
                                The goal was to build a clean, trust-building landing page that converts
                                visitors into bookings.
                            </p>
                            <p>
                                We designed and developed a single-page Next.js site with a full services
                                section, a "Why choose us" block, and an appointment form — all wrapped in
                                a dark, upscale aesthetic that matches the premium positioning of the brand.
                            </p>
                            <p>
                                Performance and mobile experience were treated as first-class priorities.
                                The site loads in under 2 seconds and is fully optimized for the smartphone
                                users who make up the majority of barbershop bookings.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
                        {deliverables.map(({ title, text }, i) => (
                            <div
                                key={title}
                                className="bg-white rounded-2xl p-5 border border-[#e8eef5] hover:border-[#ff3f81] hover:shadow-[0_0_20px_rgba(255,63,129,0.12)] transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 60}
                            >
                                <p className="font-semibold text-[#131632] mb-2 text-sm">{title}</p>
                                <p className="text-xs text-[#919191] leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="py-20 bg-white border-b border-[#f0f0f0]">
                <Container>
                    <div className="flex items-center gap-2 mb-4" data-aos="fade-up">
                        <HiOutlineSparkles className="text-[#ff3f81] text-2xl drop-shadow-[0_0_12px_rgba(255,63,129,0.8)]" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Project info
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2" data-aos="fade-up">
                        {[
                            { label: "Project", value: "Barbershop Demo" },
                            { label: "Industry", value: "Beauty & Grooming" },
                            { label: "Format", value: "Demo / Template" },
                            { label: "Website", value: "etruende-demo-barber.vercel.app", href: "https://etruende-demo-barber.vercel.app/" },
                            { label: "Year", value: "2025" },
                            { label: "Type", value: "Landing Page" },
                        ].map(({ label, value, href }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <p className="text-xs uppercase tracking-widest text-[#919191] font-semibold">{label}</p>
                                {href ? (
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#ff3f81] font-medium hover:underline underline-offset-4">
                                        {value}
                                    </a>
                                ) : (
                                    <p className="text-[#131632] font-medium">{value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="py-16 bg-[#131632]">
                <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white font-semibold text-xl">Want something like this?</p>
                        <p className="text-white/40 text-sm mt-1">Fixed quote within 24 hours. No calls required.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/portfolio"
                            className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                        >
                            ← All projects
                        </Link>
                        <Link
                            href="/contacts"
                            className="px-8 py-3 rounded-xl bg-[#ff3f81] text-white font-semibold hover:bg-[#e8336f] transition-all duration-300 text-sm whitespace-nowrap"
                        >
                            Start a project →
                        </Link>
                    </div>
                </Container>
            </div>

        </article>
    );
}