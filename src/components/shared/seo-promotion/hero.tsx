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

export default function SeoPromotionHero() {
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
                                    SEO Promotion
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                SEO Promotion
                            </h1>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
                                What is it?
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                SEO promotion is a long-term digital marketing strategy focused on
                                increasing your website’s visibility in search engines and attracting
                                high-quality organic traffic.
                                <br /><br />
                                Through technical optimization, keyword strategy, content development,
                                and authority building, SEO helps your business rank higher, reach the
                                right audience, and generate consistent leads without paid advertising.
                                <br /><br />
                                Invest in sustainable growth, brand trust, and measurable results with{" "}
                                <span className="text-[#ff3f81] underline font-bold opacity-100">
                                    EtruendE
                                </span>.
                            </p>

                            <Link
                                href=""
                                className="inline-block select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition"
                            >
                                Start SEO promotion
                            </Link>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-col gap-6 select-none">
                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    120+
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    SEO PROJECTS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Successful SEO campaigns for businesses across competitive
                                    industries and markets.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    TOP 10
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    SEARCH ENGINE RESULTS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    We help websites reach top positions for high-value keywords
                                    that drive real business traffic.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    3-6x
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    ORGANIC TRAFFIC GROWTH
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Strategic SEO delivers sustainable traffic growth and long-term ROI.
                                </p>
                            </div>

                            <Link
                                href=""
                                className="select-none mb-5 lg:mb-0 px-6 py-3 rounded-xl bg-white text-[#131632] font-semibold shadow-xl hover:bg-gray-200 transition text-center"
                            >
                                Testimonials
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
