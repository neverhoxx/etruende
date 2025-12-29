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
                                    Corporate Website
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Corporate Website Development for Business Growth
                            </h1>

                            <p className="sr-only">
                                EtruendE provides corporate website development services for businesses worldwide.
                                We design and build professional corporate websites focused on brand authority,
                                trust, SEO optimization and long-term business growth.
                            </p>


                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
                                What Is a Corporate Website and Why Your Business Needs One
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white">
                                A corporate website is a company’s full-fledged
                                presence in the digital world - the true face of
                                your business online.
                                <br /><br />
                                It represents your brand, builds trust, communicates
                                authority, and helps clients understand your values,
                                services, and expertise.
                                <br /><br />
                                Invest in professional corporate website development
                                with{" "}
                                <span className="text-[#ff3f81] underline font-bold">
                                    EtruendE
                                </span>{" "}
                                and turn your website into a powerful business asset.
                            </p>


                            <Link
                                href=""
                                className="inline-block select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition"
                            >
                                Start your project with us
                            </Link>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-col gap-6 select-none">
                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    67
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    WEBSITES IMPLEMENTED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Our extensive experience has taught us to
                                    create the best corporate websites in any
                                    niche.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    100%
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    SATISFIED CLIENTS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Satisfied customers aren't statistics.
                                    They're people who our website has helped in
                                    their business.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    3× ROI
                                </p>

                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    RETURN ON INVESTMENT
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Website development is an investment. And
                                    the return on investment is measured by its
                                    results.
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
