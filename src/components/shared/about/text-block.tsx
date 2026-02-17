import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function AboutFirstBlock() {
    return (
        <section
            className="w-full py-24 bg-[#e5e7eb]"
            aria-labelledby="corporate-about-title"
        >
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div>
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
                            EtruendE
                        </span>
                    </div>
                    <h2
                        id="corporate-about-title"
                        className="text-4xl md:text-5xl font-bold text-[#131632] mb-6 leading-tight"
                    >
                        Who <span className="text-[#ff3f81]">We</span> Are
                    </h2>

                    <div className="">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            EtruendE is an independent web development studio based in Estonia, working with clients worldwide.
                            <br /><br />
                            We build modern websites, landing pages, and e-commerce solutions focused on performance, usability, and business growth. Our work combines clean design, structured development, and a strong focus on how users interact with digital products.
                            <br /><br />
                            We believe a website is more than a visual asset, it is a business tool. That’s why we focus on speed, clarity, scalability, and SEO-ready architecture from the start.
                            <br /><br />
                            Each project is approached individually. We adapt our process to the client’s goals, industry, and stage of growth, delivering reliable digital solutions built for long-term results.
                        </p>
                    </div>
                </div>

                <div className="relative h-auto lg:h-[420px]">
                    <div className="text-[72px] sm:text-[120px] md:text-[150px] font-bold select-none opacity-20 absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:bottom-1/7 bottom-[-10%] pointer-events-none">
                        <span className="text-[#ff3f81]">E</span>truend
                        <span className="text-[#ff3f81]">E</span>
                    </div>
                </div>
            </Container>
        </section >
    );
}
