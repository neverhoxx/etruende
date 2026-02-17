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

export default function CorporateHero() {
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
                                    Business Website
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Modern business websites built for clarity and performance
                            </h1>

                            <p className="sr-only">
                                EtruendE provides corporate website development services for businesses worldwide.
                                We design and build professional corporate websites focused on brand authority,
                                trust, SEO optimization and long-term business growth.
                            </p>


                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white">
                                A clear multi-page website that explains what you do, builds trust, and makes it easy for customers to contact you.
                                <br /><br />
                                We handle structure, design, development, and launch - with a transparent process and honest estimates.
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
                                    13
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    PROJECTS DELIVERED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Websites for small businesses, services, and local brands.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CLEAR PROCESS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Design approval → development → launch. You always see progress.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    FAST DELIVERY
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Most business websites are delivered in 7-14 days.
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
