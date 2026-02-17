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

export default function EcommerceHero() {
    return (
        <section
            className="w-full min-h-screen overflow-hidden pb-5 px-4 sm:px-6 pt-[90px] sm:pt-[100px]"
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
                                    Online Store
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Online Store Development
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                An online store lets customers browse products and place orders - on any device.
                                We build fast, mobile-first stores with a clean structure, clear product pages, and a smooth checkout setup.
                                <br /><br />
                                You get a transparent process: planning → design approval → development → launch.
                                We also include performance optimization and SEO best practices (without unrealistic promises).
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
                                    7
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    STORES DELIVERED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Online stores for small catalogs, services, and local brands.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CLEAR PROCESS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    You approve design first, then we build and launch step by step.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl text-white
                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                transition-all duration-300">
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    MOBILE-FIRST
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Responsive layout and fast loading for a smooth shopping experience.

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

            <p className="sr-only">
                EtruendE builds modern online stores with a focus on clear structure, performance, and SEO best practices.
                We can set up product catalog, cart, and checkout depending on project requirements.
            </p>

        </section>
    );
}
