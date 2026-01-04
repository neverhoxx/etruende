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

export default function WebApplicationHero() {
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
                                    Web Application Development
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-6">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                                Web Application Development Services
                            </h1>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-white">
                                Custom Web Applications for Business Growth
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-full md:max-w-[750px] text-white mx-auto md:mx-0">
                                We build custom web applications that automate business processes,
                                handle complex data, and scale together with your company. Our web
                                application development services are designed for startups,
                                growing businesses, and enterprises that need reliable and
                                high-performance digital systems.
                                <br /><br />
                                From SaaS platforms and dashboards to CRM systems, internal tools,
                                and client portals - we develop secure, scalable, and fast web
                                applications tailored to your workflows and business goals.
                                <br /><br />
                                Partner with{" "}
                                <span className="text-[#ff3f81] underline font-bold opacity-100">
                                    EtruendE
                                </span>{" "}
                                to create a future-ready web application that drives efficiency,
                                reduces costs, and supports long-term growth.
                            </p>


                            <Link
                                href="/contacts"
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
                                    40+
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    WEB APPS DELIVERED
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Custom web applications built for startups, enterprises,
                                    and growing businesses.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    100%
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    CUSTOM SOLUTIONS
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Every application is tailored to business goals, workflows,
                                    and technical requirements.
                                </p>
                            </div>

                            <div className="bg-[#131632d7] shadow-md backdrop-blur w-full px-4 py-6 sm:p-6 rounded-2xl min-h-[180px] text-white
                                hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                                transition-all duration-300">
                                <p className="text-4xl sm:text-5xl font-bold text-[#ff3f81] mb-4">
                                    3–5x
                                </p>
                                <p className="mb-2 font-bold text-lg sm:text-xl">
                                    PROCESS EFFICIENCY
                                </p>
                                <p className="text-base sm:text-lg opacity-80">
                                    Automation and smart systems significantly reduce manual work
                                    and operational errors.
                                </p>
                            </div>

                            <Link
                                href="/reviews"
                                className="select-none mb-5 lg:mb-0 px-6 py-3 rounded-xl bg-white text-[#131632] font-semibold shadow-xl hover:bg-gray-200 transition text-center"
                            >
                                Testimonials
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            <p className="sr-only">
                Web application development services by EtruendE.
                We create custom web applications, SaaS platforms,
                dashboards, CRM systems, internal business tools,
                and scalable enterprise web solutions.
                Our web apps are secure, high-performance,
                SEO-friendly, and designed for long-term growth.
            </p>

        </section>
    );
}
