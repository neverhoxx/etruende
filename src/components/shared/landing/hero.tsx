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
            className="w-full min-h-screen overflow-hidden px-4 sm:px-6 pt-[90px] sm:pt-[100px]"
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
                        {/* Left */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Landing Page
                            </h1>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
                                What is it?
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                A landing page is a focused marketing tool designed to convert
                                visitors into leads or customers. Unlike a traditional website,
                                it is built around a single goal — capturing attention and
                                driving action.
                                <br /><br />
                                A professionally designed landing page delivers a clear message,
                                highlights value, and guides users toward a specific action:
                                purchase, registration, request, or contact. Every element —
                                copy, visuals, structure, and speed — is optimized for
                                conversion.
                                <br /><br />
                                Launch high-performing landing pages that generate leads,
                                increase conversion rates, and maximize ROI together with{" "}
                                <span className="text-[#ff3f81] underline font-bold opacity-100">
                                    EtruendE
                                </span>.
                            </p>

                            <Link
                                href=""
                                className="inline-block select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition"
                            >
                                Launch your landing page
                            </Link>
                        </div>

                        {/* Right */}
                        <div className="w-full md:w-[45%] flex flex-col gap-6 select-none">
                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    80+
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    LANDING PAGES BUILT
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    We’ve launched landing pages for products, services, startups,
                                    and marketing campaigns across multiple industries.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    95%
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CONVERSION-FOCUSED DESIGN
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Every landing page is designed with user behavior,
                                    psychology, and performance metrics in mind.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    2–5x
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    LEAD INCREASE
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Optimized landing pages significantly increase lead generation
                                    and marketing campaign efficiency.
                                </p>
                            </div>

                            <Link
                                href=""
                                className="select-none mb-5 lg:mb-0 px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-xl hover:bg-gray-200 transition text-center"
                            >
                                View case studies
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
