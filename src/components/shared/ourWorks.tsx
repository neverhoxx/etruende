"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import voltampPic from "@/images/projects/voltamp.png";
import paikesemajadPic from "@/images/projects/solantra-solarhome.png";
import LandingDemo1 from "@/images/projects/LandingDemo1.png";
import fusion from "@/images/projects/fusion.png";
import pic3dsdom from "@/images/projects/3dsdom.png";
import ralest from "@/images/projects/ralest.png";

import barber from "@/images/projects/etruende-demo-barber.vercel.app_.png";
import voltamp from "@/images/projects/voltamp.ee_et.png"
import solantra from "@/images/projects/paikesemajad.vercel.app_en.png";

type Category = "All" | "Landing Page" | "Business Website" | "E-commerce" | "SEO";

const tabs: Category[] = ["All", "Landing Page", "Business Website", "E-commerce", "SEO"];

const items = [
    {
        title: "Voltamp",
        subtitle: "Business Website",
        description: "Corporate website for an electrical engineering company with SEO setup.",
        image: voltamp,
        alt: "Voltamp corporate website developed by EtruendE Studio",
        category: "Business Website" as Category,
        link: "/portfolio/voltamp",
        year: "2024",
        tags: ["Next.js", "SEO"],
    },
    {
        title: "Solantra Solarhome",
        subtitle: "Landing Page",
        description: "Landing page for a solar energy company focused on lead generation.",
        image: solantra,
        alt: "Solantra Solarhome landing page developed by EtruendE Studio",
        category: "Landing Page" as Category,
        link: "/portfolio/solantra-solarhome",
        year: "2024",
        tags: ["Next.js", "SEO"],
    },
    {
        title: "Landing Page Demo",
        subtitle: "Landing Page",
        description: "Demo landing page showcasing modern design and conversion-focused layout.",
        image: LandingDemo1,
        alt: "Landing page demo developed by EtruendE Studio",
        category: "Landing Page" as Category,
        link: "https://neverhoxx.github.io/etruende-demo/",
        year: "2024",
        tags: ["HTML", "CSS"],
    },
    {
        title: "Fusionoff",
        subtitle: "E-commerce",
        description: "Online store with product catalog, cart and checkout flow.",
        image: fusion,
        alt: "Fusionoff e-commerce developed by EtruendE Studio",
        category: "E-commerce" as Category,
        link: "https://fusionoff.ru/",
        year: "2024",
        tags: ["Next.js", "Stripe"],
    },
    {
        title: "3dsdom",
        subtitle: "Business Website",
        description: "Corporate site for a 3D printing and modeling studio.",
        image: pic3dsdom,
        alt: "3dsdom landing page developed by EtruendE Studio",
        category: "Business Website" as Category,
        link: "https://neverhoxx.github.io/3dsdom/en",
        year: "2024",
        tags: ["HTML", "CSS"],
    },
    {
        title: "Ral Est",
        subtitle: "SEO",
        description: "Technical SEO setup, metadata, sitemap and Google Search Console.",
        image: ralest,
        alt: "Ral Est SEO project by EtruendE Studio",
        category: "SEO" as Category,
        link: "https://ralest.ee/",
        year: "2024",
        tags: ["SEO", "Analytics"],
    },
    {
        title: "Barbershop Demo",
        subtitle: "Landing Page",
        description: "Landing page for a barber service focused on lead generation.",
        image: barber,
        alt: "Barbershop Demo project by EtruendE Studio",
        category: "Landing Page" as Category,
        link: "/portfolio/barbershop-demo",
        year: "2024",
        tags: ["Landing Page", "Beauty"],
    },
];

const stats = [
    { number: "13+", label: "Projects" },
    { number: "3", label: "Countries" },
    { number: "100%", label: "Fixed price" },
];

export default function OurWorks() {
    const [activeTab, setActiveTab] = useState<Category>("All");

    const filteredItems = activeTab === "All"
        ? items
        : items.filter((item) => item.category === activeTab);

    const getCount = (tab: Category) =>
        tab === "All" ? items.length : items.filter((i) => i.category === tab).length;

    return (
        <section className="min-h-screen">

            <div
                className="w-full pt-[100px] pb-16 relative overflow-hidden"
                style={{ background: "linear-gradient(140deg, #131632 30%, #2a1f3d 100%)" }}
            >
                <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#ff3f81] opacity-[0.06] blur-3xl pointer-events-none" />
                <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#ff3f81] opacity-[0.04] blur-3xl pointer-events-none" />

                <Container>
                    <Breadcrumb className="select-none mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="hover:text-[#ff3f81] text-white/50 text-sm" href="/">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white/20" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[#ff3f81] text-sm">Portfolio</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <HiOutlineSparkles className="text-[#ff3f81] text-2xl drop-shadow-[0_0_12px_rgba(255,63,129,0.9)]" />
                                <span className="uppercase tracking-widest text-xs text-[#ff3f81] font-semibold">
                                    Our Portfolio
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Projects that{" "}
                                <span className="text-[#ff3f81]">deliver results</span>
                            </h1>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Real websites for real businesses — built for performance, usability, and growth.
                            </p>
                        </div>

                        <div className="flex gap-8 shrink-0">
                            {stats.map(({ number, label }) => (
                                <div key={label} className="text-center">
                                    <p className="text-3xl font-bold text-[#ff3f81]">{number}</p>
                                    <p className="text-xs text-white/40 uppercase tracking-wide mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-white border-b border-[#f0f0f0] sticky top-[85px] z-40">
                <Container>
                    <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeTab === tab
                                    ? "text-[#ff3f81]"
                                    : "text-gray-400 hover:text-[#131632]"
                                    }`}
                            >
                                {tab}
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition-colors duration-200 ${activeTab === tab
                                    ? "bg-[#ff3f81]/10 text-[#ff3f81]"
                                    : "bg-gray-100 text-gray-400"
                                    }`}>
                                    {getCount(tab)}
                                </span>
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff3f81] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="py-16 bg-[#F4F8FD]">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <Link
                                href={item.link}
                                key={item.title}
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl overflow-hidden border border-[#e8eef5] hover:border-[#ff3f81] hover:shadow-[0_0_30px_rgba(255,63,129,0.15)] transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-16/10 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-[#131632] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center gap-2 bg-white text-[#131632] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            <FiExternalLink className="text-[#ff3f81]" />
                                            View project
                                        </div>
                                    </div>

                                    <div className="absolute top-3 left-3">
                                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#131632]/80 backdrop-blur text-white font-medium">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col gap-2 flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-[#131632] group-hover:text-[#ff3f81] transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs text-gray-300 shrink-0 mt-0.5">{item.year}</span>
                                    </div>

                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4F8FD] text-[#919191] border border-[#e8eef5]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-24 text-gray-300 text-lg">
                            No projects in this category yet.
                        </div>
                    )}
                </Container>
            </div>

            <div className="py-16 bg-[#131632]">
                <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white font-semibold text-xl">Want something like this?</p>
                        <p className="text-white/40 text-sm mt-1">Fixed quote within 24 hours. No calls required.</p>
                    </div>
                    <Link
                        href="/contacts"
                        className="px-8 py-3.5 rounded-xl bg-[#ff3f81] text-white font-semibold hover:bg-[#e8336f] transition-all duration-300 whitespace-nowrap"
                    >
                        Start a project →
                    </Link>
                </Container>
            </div>

            <p className="sr-only">
                EtruendE portfolio: landing pages, business websites, e-commerce stores and SEO projects.
                Professional web development studio based in Tallinn, Estonia.
            </p>
        </section>
    );
}