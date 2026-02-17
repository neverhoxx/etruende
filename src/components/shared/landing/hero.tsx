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

export default function LandingHero() {
    return (
        <section
            className="w-full min-h-screen overflow-hidden px-4 pb-5 sm:px-6 pt-[90px] sm:pt-[100px]"
            style={{
                background: "linear-gradient(140deg, #131632 20%, #ff3f82b8 100%)",
            }}
        >
            <Container>
                <div>
                    <Breadcrumb className="select-none mb-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    className="hover:text-[#ff3f81] text-white text-sm sm:text-base"
                                    href="/"
                                >
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[#ff3f81] text-sm sm:text-base">
                                    Landing Page
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Landing Page Development
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                A landing page is a focused one-page website built around a single offer(for example: a service, product, or campaign).
                                It helps visitors quickly understand the value and take action.
                                <br /><br />
                                We build mobile-first landing pages with a clear structure, clean design, and fast performance.
                                SEO best practices are included during development (metadata, headings, and indexing setup).
                            </p>

                            <Link
                                href="/contacts"
                                className="inline-block select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition"
                            >
                                Get a quote
                            </Link>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-col gap-6 select-none">
                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    80+
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    PAGES DELIVERED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Landing pages for services, products, and campaigns.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CLEAR STRUCTURE
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    One offer, one message, one call-to-action without distractions.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    FAST PERFORMANCE
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Mobile-first layout and optimized loading speed.
                                </p>
                            </div>

                            <Link
                                href="/portfolio"
                                className="select-none mb-5 lg:mb-0 px-6 py-3 rounded-xl bg-white text-[#131632] font-semibold shadow-xl hover:bg-gray-200 transition text-center"
                            >
                                View portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
