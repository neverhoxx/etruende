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

import fullWebSitePic from "@/images/projects/paikesemajad.vercel.app_en.png";

const stack = [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Vercel",
];

const deliverables = [
    {
        title: "Multi-page website",
        text: "Home, project catalog, references, construction info, about, and contact. Structured for clarity and easy navigation.",
    },
    {
        title: "Multilingual support",
        text: "Full ET / EN language support with Next.js i18n routing. Each page fully translated and indexed separately.",
    },
    {
        title: "Project catalog",
        text: "Individual model pages with floor plans, room counts, square footage, and detailed specifications for each solar home.",
    },
    {
        title: "BIPV showcase",
        text: "Dedicated sections explaining the Solantra SolarHome concept. Energy production, savings, and aesthetic integration.",
    },
    {
        title: "SEO setup",
        text: "Metadata, sitemap, structured data, and Google Search Console. All set up and indexed from day one.",
    },
    {
        title: "Contact & lead forms",
        text: "Consultation booking form with qualifying questions to help the team better prepare for client meetings.",
    },
];

const results = [
    { number: "6+", label: "Pages built" },
    { number: "2", label: "Languages" },
    { number: "4+", label: "Home models" },
    { number: "<2s", label: "Load time" },
];

export default function PaikesemajadCase() {
    return (
        <article className="min-h-screen bg-white">

            <div
                className="w-full pt-[100px] pb-20 relative overflow-hidden"
                style={{ background: "linear-gradient(140deg, #131632 30%, #0d1f10 100%)" }}
            >
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-emerald-500 opacity-[0.05] blur-3xl pointer-events-none" />
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
                                <BreadcrumbPage className="text-[#ff3f81] text-sm">Solantra / Päikesemajad</BreadcrumbPage>
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
                            Solantra Solarhome / Päikesemajad
                        </h1>

                        <p className="text-white/60 text-lg leading-relaxed">
                            A multilingual business website and project catalog for an Estonian
                            solar home construction company built to educate, inspire, and convert.
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
                                href="https://paikesemajad.vercel.app/"
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
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-[#e8eef5] w-full md:w-[70%] mx-auto">
                        <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-white/5 rounded px-3 py-1 text-xs text-white/40 font-mono">
                                    https://paikesemajad.vercel.app/
                                </div>
                            </div>
                        </div>
                        <Image
                            src={fullWebSitePic}
                            alt="Päikesemajad website preview"
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
                                Solantra (Päikesemajad) is an Estonian company that designs and builds
                                solar-integrated homes, houses where the roof itself is a BIPV energy
                                source. They needed a modern website that could present their catalog of
                                home models, explain their unique SolarHome concept, and generate qualified leads.
                            </p>
                            <p>
                                We built a full-scale Next.js website with multilingual support (Estonian
                                and English), a detailed project catalog with individual model pages, and
                                a consultation booking flow with qualifying questions to streamline
                                the sales process.
                            </p>
                            <p>
                                SEO was treated as a core requirement from the start proper metadata,
                                sitemap, structured data, and Google Search Console setup. Both language
                                versions are indexed separately for maximum visibility in Estonian and
                                international markets.
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
                            Client info
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2" data-aos="fade-up">
                        {[
                            { label: "Client", value: "Solantra OÜ" },
                            { label: "Industry", value: "Solar Homes & Construction" },
                            { label: "Location", value: "Viljandi, Estonia" },
                            { label: "Website", value: "paikesemajad.vercel.app/", href: "https://paikesemajad.vercel.app/" },
                            { label: "Year", value: "2025" },
                            { label: "Type", value: "Business Website + Catalog" },
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