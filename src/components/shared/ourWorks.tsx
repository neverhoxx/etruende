"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import voltampPic from "@/images/projects/voltamp.png";

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
        title: "RED ROCKS SHUTTLE",
        subtitle: "Корпоративный сайт",
        image: voltampPic,
        category: "Developed",
    },
    {
        title: "LIVINGSTON",
        subtitle: "Корпоративный сайт",
        image: voltampPic,
        category: "Developed",
    },
    {
        title: "ONLY WINE",
        subtitle: "Интернет-магазин",
        image: voltampPic,
        category: "Designed",
    },
    {
        title: "SMART LIFE COMFORT",
        subtitle: "Landing Page",
        image: voltampPic,
        category: "Promoted",
    },
    {
        title: "DOCTOR KIDS",
        subtitle: "Корпоративный сайт",
        image: voltampPic,
        category: "Promoted",
    },
];

export default function OurWorks() {
    const [activeTab, setActiveTab] = useState<Category>("Developed");

    const filteredItems = items.filter(
        (item) => item.category === activeTab
    );

    return (
        <section className="min-h-screen flex flex-col justify-center">

            <Container >
                <Breadcrumb className="select-none mb-6">
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
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Results-Oriented Projects
                    </h2>
                    <p className="mt-3 text-gray-500">
                        Digital solutions designed to increase revenue, strengthen brands, and stay ahead of the market
                    </p>
                </div>


                <div className="mt-10 flex justify-center gap-10 select-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative text-lg font-medium transition-colors cursor-pointer
                ${activeTab === tab
                                    ? "text-[#ff3f81]"
                                    : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ff3f81]" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-16 select-none">
                    {filteredItems.map((item, i) => (
                        <Link
                            href="#"
                            key={i}
                            className="w-[260px] text-center"
                        >
                            <div className="mx-auto aspect-square w-[220px] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={220}
                                    height={220}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h3 className="mt-6 font-semibold tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#ff3f81]">
                                {item.subtitle}
                            </p>
                        </Link>
                    ))}
                </div>
            </Container>
            <p className="sr-only">
                EtruendE portfolio showcases professional web development, UI/UX design,
                and SEO promotion projects. Our results-oriented digital solutions help
                businesses grow traffic, conversions, and revenue through scalable and
                modern technologies.
            </p>

        </section>
    );
}
