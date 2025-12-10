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
                <div className="w-full flex flex-col items-start gap-3">

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
                            What You Get
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        What You Get with{" "}
                        <span className="text-[#ff3f81]">EtruendE</span>
                    </h2>

                    <div className="
                        w-[100px] 
                        h-[3px] 
                        rounded 
                        bg-gradient-to-r 
                        from-[#ff3f81] 
                        to-[#131632] 
                        shadow-[0_0_12px_rgba(255,63,129,0.6)]
                    "></div>


                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-7">

                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <IoIosRocket className="text-[#ff3f81] text-4xl" />
                        <p>A high-converting website designed to turn visitors into leads & sales.</p>
                    </div>

                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <FaMagnifyingGlassChart className="text-[#ff3f81] text-4xl" />
                        <p>Deep SEO optimization that brings real organic traffic and rankings.</p>
                    </div>

                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <IoIosColorPalette className="text-[#ff3f81] text-4xl" />
                        <p>Custom UI/UX design tailored for your brand and audience.</p>
                    </div>


                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <IoIosTrendingUp className="text-[#ff3f81] text-4xl" />
                        <p>Marketing-focused structure that boosts sales and conversions.</p>
                    </div>

                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <IoIosFlash className="text-[#ff3f81] text-4xl" />
                        <p>Fast load speed and clean optimized code for maximum performance.</p>
                    </div>

                    <div className="
                        w-full sm:w-[48%] lg:w-[32%]
                        text-white flex items-start gap-4 select-none text-lg 
                        p-6 rounded-2xl 
                        bg-[#13163290] border border-white/20 backdrop-blur-xl
                        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,63,129,0.35)]
                        transition-all duration-300
                    ">
                        <HiOutlineSparkles className="text-[#ff3f81] text-4xl" />
                        <p>Ongoing support, revisions, improvements & marketing consulting.</p>
                    </div>

                </div>

            </Container>
        </div>
    );
}
