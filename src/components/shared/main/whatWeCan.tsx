import { Container } from "../container";

import { HiOutlineSparkles } from "react-icons/hi2";
import { ImCart } from "react-icons/im";
import { TbWorldSearch } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

// <BsFillRocketTakeoffFill />

export default function WhatWeCanBlock() {
    return (
        <div className='py-20 bg-[#F4F8FD] border-y border-[#cae0fc]'>
            <Container>
                <div className="w-full flex flex-col items-center md:items-start  gap-3 ">

                    <div className="flex items-center gap-2">
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

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center">
                        What <span className="text-[#ff3f81]">we</span> create
                    </h2>

                    <p className="text-center md:text-left">
                        From concept to deployment, we build{" "}
                        <span className="text-[#ff3f81]">Digital Solutions That Win Markets</span>
                    </p>

                    <div className="
                        md:max-w-[350px] 
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
                    <div className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300">
                        <div className="w-15 h-15 bg-[#ff3f81] flex items-center justify-center mb-5">
                            <BsFillRocketTakeoffFill className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            Landing Page Development
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            High-converting landing pages built with modern UI/UX practices. We create fast, responsive, and engaging pages designed to turn your visitors into customers.
                        </p>

                        <ul className="list-disc marker:text-[#ff3f81] list-inside">
                            <li>
                                Custom Landing Pages
                            </li>
                            <li>
                                Conversion-Optimized Design
                            </li>
                            <li>
                                A/B Tested Page Structures
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_#131632]
                        transition-all duration-300">
                        <div className="w-15 h-15 bg-[#131632] flex items-center justify-center mb-5">
                            <ImCart className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            E-commerce Development
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            We build high-performance e-commerce platforms designed to convert, scale, and deliver seamless shopping experiences. From product pages to checkout, every detail is optimized for growth.
                        </p>

                        <ul className="list-disc marker:text-[#131632] list-inside">
                            <li>
                                Custom Online Stores
                            </li>
                            <li>
                                High-Conversion Product Pages
                            </li>
                            <li>
                                Secure & Optimized Checkout Flows
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_#131632]
                        transition-all duration-300">
                        <div className="w-15 h-15 bg-[#131632] flex items-center justify-center mb-5">
                            <BsFillRocketTakeoffFill className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            SEO Promotion
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            Comprehensive SEO strategies designed to increase visibility, boost organic traffic, and improve search engine rankings. We optimize every element to ensure long-term, sustainable growth.
                        </p>

                        <ul className="list-disc marker:text-[#131632] list-inside">
                            <li>Full On-Page & Technical Optimization</li>
                            <li>Keyword Research & Content Strategy</li>
                            <li>Long-Term Organic Traffic Growth</li>
                        </ul>

                    </div>

                    <div className="w-full md:w-[48%] p-4 md:p-8 bg-white border border-[#2a2f552f] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300">
                        <div className="w-15 h-15 bg-[#ff3f81] flex items-center justify-center mb-5">
                            <FaBriefcase className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl mb-5">
                            Corporate Page Development
                        </h3>

                        <p className="text-[14px] md:text-[18px] text-[#919191] mb-5">
                            Professional corporate websites built to strengthen your brand credibility. We create clean, modern, and well-structured pages that clearly communicate your values and help you build trust with your audience.
                        </p>

                        <ul className="list-disc marker:text-[#ff3f81] list-inside">
                            <li>Custom Corporate Website Design</li>
                            <li>Brand-Focused UI/UX Architecture</li>
                            <li>Clear, Well-Structured Content Layouts</li>
                        </ul>
                    </div>


                </div>
            </Container>
        </div>
    );
}