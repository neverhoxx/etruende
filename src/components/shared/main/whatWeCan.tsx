'use client';

import { Container } from "../container";

import { HiOutlineSparkles } from "react-icons/hi2";
import { ImCart } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

export default function WhatWeCanBlock() {
    return (
        <div className='py-20 bg-[#F4F8FD] border-y border-[#cae0fc]'>
            <Container>
                <div
                    className="w-full flex flex-col items-center md:items-start gap-3"
                >

                    <div className="flex items-center gap-2" data-aos="fade-up">
                        <HiOutlineSparkles
                            className="
                                text-[#ff3f81] 
                                text-3xl
                                drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]
                                brightness-125
                            "
                        />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#131632] text-center"
                        data-aos="fade-up">
                        What <span className="text-[#ff3f81]">we</span> create for business growth
                    </h2>

                    <p className="text-center md:text-left" data-aos="fade-up">
                        From planning to launch,{" "}
                        <span className="text-[#ff3f81]">we build modern websites designed to support your business as it grows.</span>
                    </p>

                    <div className="
                        md:max-w-[811px] 
                        md:w-full
                        w-1/2
                        h-[3px] 
                        rounded 
                        bg-gradient-to-r 
                        from-[#ff3f81] 
                        to-[#131632] 
                        shadow-[0_0_12px_rgba(255,63,129,0.6)]
                    "></div>
                </div>

                <div className="flex flex-wrap gap-5 mt-10">
                    <div
                        data-aos="fade-bottom"
                        className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300"
                    >
                        <div className="w-15 h-15 bg-[#ff3f81] flex items-center justify-center mb-5">
                            <BsFillRocketTakeoffFill className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            Landing Page Development
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            A focused one-page website that clearly explains your offer and makes it easy for customers to contact you.
                            Fast, mobile-first, and ready to launch.
                        </p>

                        <ul className="list-disc marker:text-[#ff3f81] list-inside">
                            <li>
                                Clear structure and copy-ready sections
                            </li>
                            <li>
                                Mobile-first layout
                            </li>
                            <li>
                                Contact form / WhatsApp / Instagram link
                            </li>
                            <li>
                                Admin panel
                            </li>
                        </ul>

                        <p className="font-semibold mt-5">Typical timeline: 1-5 days</p>
                    </div>

                    <div
                        className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_#131632]
                        transition-all duration-300"
                        data-aos="fade-bottom"
                    >
                        <div className="w-15 h-15 bg-[#131632] flex items-center justify-center mb-5">
                            <ImCart className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            E-commerce Websites
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            Simple and reliable online stores for small catalogs - products, cart, and a smooth checkout.
                            Built with performance and maintainability in mind.
                        </p>

                        <ul className="list-disc marker:text-[#131632] list-inside">
                            <li>
                                Product catalog and categories
                            </li>
                            <li>
                                Cart + checkout setup
                            </li>
                            <li>
                                Payments / delivery integrations(if needed)
                            </li>
                            <li>
                                Admin panel
                            </li>
                        </ul>

                        <p className="font-semibold mt-5">Typical timeline: 1-3 weeks</p>
                    </div>

                    <div
                        className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_#131632]
                        transition-all duration-300"
                        data-aos="fade-up"
                    >
                        <div className="w-15 h-15 bg-[#131632] flex items-center justify-center mb-5">
                            <BsFillRocketTakeoffFill className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            SEO Setup
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            We set up the technical foundation for search visibility: clean structure, metadata, indexing, and performance basics.
                        </p>

                        <ul className="list-disc marker:text-[#131632] list-inside">
                            <li>
                                Technical SEO basics (structure, metadata, sitemap)
                            </li>
                            <li>
                                Google Search Console setup
                            </li>
                            <li>
                                Recommendations for content and keywords
                            </li>
                        </ul>

                        <p className="font-semibold mt-5">Typical timeline: 1-2 days</p>

                    </div>

                    <div
                        className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300"
                        data-aos="fade-up"
                    >
                        <div className="w-15 h-15 bg-[#ff3f81] flex items-center justify-center mb-5">
                            <FaBriefcase className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            Business Websites
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            Multi-page websites that build trust and clearly show what you do: services, pricing, portfolio, and contact.
                            Clean design, strong structure, and mobile-first layout.
                        </p>

                        <ul className="list-disc marker:text-[#ff3f81] list-inside">
                            <li>4-7 pages (services, about, contact, etc.)</li>
                            <li>Clear navigation and content structure</li>
                            <li>Basic SEO setup included</li>
                            <li>
                                Admin panel
                            </li>
                        </ul>

                        <p className="font-semibold mt-5">Typical timeline: 7-14 days</p>
                    </div>

                    <p className="sr-only">
                        EtruendE is a professional web development and SEO agency
                        providing landing page development, e-commerce solutions,
                        corporate websites, and SEO promotion services.
                        We help businesses grow online through high-performance,
                        SEO-optimized websites and digital solutions.
                    </p>

                </div>
            </Container>
        </div>
    );
}