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
                                    E-commerce
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                E-commerce Website Development for Business
                            </h1>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
                                What Is an E-commerce Website and How It Drives Sales
                            </h2>


                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                An e-commerce website is a powerful digital sales channel that
                                works for your business 24/7. It allows companies to sell
                                products and services online, automate processes, scale faster,
                                and reach a global audience without geographical limitations.
                                <br /><br />
                                A professionally developed online store builds customer trust,
                                increases conversion rates, and provides a seamless shopping
                                experience across all devices. From intuitive navigation and
                                secure payment systems to fast loading speeds and SEO-friendly
                                architecture - every detail directly impacts revenue.
                                <br /><br />
                                Investing in a modern e-commerce platform means investing in
                                long-term growth, brand authority, and measurable results.
                                Create a scalable and high-performing online store together
                                with{" "}
                                <span className="text-[#ff3f81] underline font-bold opacity-100">
                                    EtruendE
                                </span>.
                            </p>

                            <Link
                                href=""
                                className="inline-block select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition"
                            >
                                Get a Custom E-commerce Website
                            </Link>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-col gap-6 select-none">
                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    52+
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    ONLINE STORES LAUNCHED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    We have successfully launched e-commerce projects in various
                                    niches, from startups to large-scale businesses.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    100%
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CLIENT SATISFACTION
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Our clients value reliability, transparency, and measurable
                                    business results.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    3-4x
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    SALES GROWTH
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    A well-built e-commerce website increases sales performance
                                    and returns investment multiple times over.
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

            <p className="sr-only">
                E-commerce website development services by EtruendE.
                We create custom online stores, scalable ecommerce platforms,
                SEO optimized shopping websites, Shopify and custom solutions
                for businesses worldwide. Our ecommerce websites focus on
                conversion optimization, fast loading speed, secure payments,
                and long-term growth.
            </p>

        </section>
    );
}
