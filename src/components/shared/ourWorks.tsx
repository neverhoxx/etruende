"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import voltampPic from "@/images/projects/voltamp.png";
import paikesemajadPic from "@/images/projects/solantra-solarhome.png";
import LandingDemo1 from "@/images/projects/LandingDemo1.png";
import fusion from "@/images/projects/fusion.png";
import pic3dsdom from "@/images/projects/3dsdom.png";
import ralest from "@/images/projects/ralest.png";

import { Container } from "@/components/shared/container";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Category = "Developed" | "Designed" | "Promoted";

const tabs: Category[] = ["Developed", "Designed", "Promoted"];

const items = [
    {
        title: "Voltamp",
        subtitle: "Corporate Website & SEO Promotion",
        image: voltampPic,
        alt: "Voltamp corporate website with SEO Promotion developed by EtruendE Studio",
        categories: ["Developed", "Promoted", "Designed"],
        link: "/portfolio/voltamp"
    },
    {
        title: "Solantra Solarhome",
        subtitle: "Corporate Landing Page",
        image: paikesemajadPic,
        alt: "Solantra Home corporate landing page developed by EtruendE Studio",
        categories: ["Developed", "Promoted", "Designed"],
        link: "https://paikesemajad.vercel.app/"
    },
    {
        title: "Landing Page Demo Project",
        subtitle: "Landing Page",
        image: LandingDemo1,
        alt: "Landing page developed by EtruendE Studio",
        categories: ["Developed"],
        link: "https://neverhoxx.github.io/etruende-demo/"
    },
    {
        title: "Fusionoff",
        subtitle: "E-commerce",
        image: fusion,
        alt: "Fusion E-commerce developed by EtruendE Studio",
        categories: ["Developed", "Designed"],
        link: "https://fusionoff.ru/"
    },
    {
        title: "3dsdom",
        subtitle: "Corporate Landing Page",
        image: pic3dsdom,
        alt: "3dsdom corporate landing page developed by EtruendE Studio",
        categories: ["Developed", "Designed"],
        link: "https://neverhoxx.github.io/3dsdom/en"
    },
    {
        title: "Ral Est",
        subtitle: "SEO Promotion",
        image: ralest,
        alt: "Ral Est SEO Promotion developed by EtruendE Studio",
        categories: ["Promoted"],
        link: "https://ralest.ee/"
    },
];

export default function OurWorks() {
    const [activeTab, setActiveTab] = useState<Category>("Developed");

    const filteredItems = items.filter((item) =>
        item.categories.includes(activeTab)
    );

    return (
        <section className="min-h-screen py-20">
            <Container>
                <Breadcrumb className="select-none mb-8 mt-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="hover:text-[#ff3f81] text-[#131632] text-sm sm:text-base"
                                href="/"
                            >
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-[#131632]" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[#ff3f81] text-sm sm:text-base">
                                Portfolio
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Results-Oriented Projects
                    </h2>
                    <p className="mt-4 text-gray-500 text-sm sm:text-base">
                        Digital solutions designed to increase revenue,
                        strengthen brands, and stay ahead of the market
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 select-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative text-base sm:text-lg font-medium transition-colors
                                ${activeTab === tab
                                    ? "text-[#ff3f81]"
                                    : "text-gray-500 hover:text-[#131632]"
                                }
                            `}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ff3f81]" />
                            )}
                        </button>
                    ))}
                </div>

                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        gap-x-8
                        gap-y-16
                    "
                >
                    {filteredItems.map((item, index) => (
                        <Link
                            href={item.link}
                            key={item.title}
                            className="group mx-auto w-full max-w-[320px] text-center"
                            target="_blank"
                        >
                            <div
                                className="
                                    relative
                                    aspect-[16/10]
                                    overflow-hidden
                                    rounded-t-[36px]
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    group-hover:scale-[1.03]
                                    group-hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                "
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>

                            <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#131632]">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-[#ff3f81]">
                                {item.subtitle}
                            </p>
                        </Link>
                    ))}
                </div>
            </Container>

            <p className="sr-only">
                EtruendE portfolio showcases professional web development,
                UI/UX design, and SEO promotion projects. Our results-oriented
                digital solutions help businesses grow traffic, conversions,
                and revenue through scalable and modern technologies.
            </p>
        </section>
    );
}
