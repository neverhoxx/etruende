import { IoIosRocket, IoIosColorPalette, IoIosTrendingUp, IoIosFlash } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { Container } from "../container";

export default function WhatYouGetBlock() {
    return (
        <div
            className="py-20"
            style={{
                background: "linear-gradient(180deg, #2a2f55 0%, #F9F9FF 10%)"
            }}
        >
            <Container>
                <div className="w-full flex flex-col items-center md:items-start gap-3">

                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <HiOutlineSparkles
                            className="
                                text-[#ff3f81] 
                                text-3xl
                                drop-shadow-[0_0_18px_rgba(255,63,129,0.9)]
                                brightness-125
                            "
                        />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            What You Get
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] md:text-left text-center">
                        What You Get with{" "}
                        <span className="text-[#ff3f81]">EtruendE</span>
                    </h2>

                    <div className="
                        md:max-w-[639px] 
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

                <div className="flex flex-wrap justify-center gap-2 md:gap-6 mt-7">

                    <div className="
                        w-[48%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <IoIosRocket className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">A high-converting website designed to turn visitors into leads & sales.</p>
                    </div>

                    <div className="
                        w-[45%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <FaMagnifyingGlassChart className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">Deep SEO optimization that brings real organic traffic and rankings.</p>
                    </div>

                    <div className="
                        w-[45%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <IoIosColorPalette className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">Custom UI/UX design tailored for your brand and audience.</p>
                    </div>


                    <div className="
                        w-[45%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <IoIosTrendingUp className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">Marketing-focused structure that boosts sales and conversions.</p>
                    </div>

                    <div className="
                        w-[45%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <IoIosFlash className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">Fast load speed and clean optimized code for maximum performance.</p>
                    </div>

                    <div className="
                        w-[45%] sm:w-[48%] lg:w-[32%]
                        text-white flex flex-wrap justify-center items-start gap-4 select-none text-lg 
                        px-3 py-6 md:p-6 rounded-2xl 
                        bg-[#131632] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300 text-center
                    ">
                        <HiOutlineSparkles className="text-[#ff3f81] text-4xl" />
                        <p className="text-[14px] md:text-[18px]">Ongoing support, revisions, improvements & marketing consulting.</p>
                    </div>

                </div>

            </Container>
        </div>
    );
}
