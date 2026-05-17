import { Container } from "../container";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaCode, FaRocket, FaGlobe } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const values = [
    {
        icon: FaCode,
        title: "Clean code",
        text: "Every project is built with maintainability in mind. No spaghetti, no shortcuts.",
    },
    {
        icon: FaRocket,
        title: "Fast delivery",
        text: "We move quickly without sacrificing quality. Most projects launch in 1–3 weeks.",
    },
    {
        icon: BsLightningChargeFill,
        title: "Performance first",
        text: "Speed and SEO are not afterthoughts. They're built in from day one.",
    },
    {
        icon: FaGlobe,
        title: "Global mindset",
        text: "Based in Estonia, working with clients across Europe and beyond.",
    },
];

export default function AboutFirstBlock() {
    return (
        <section className="w-full py-24 bg-[#e5e7eb]" aria-labelledby="about-who-title">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div data-aos="fade-up">
                    <div className="flex items-center gap-2 mb-4">
                        <HiOutlineSparkles className="text-[#ff3f81] text-3xl drop-shadow-[0_0_18px_rgba(255,63,129,0.9)] brightness-125" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            EtruendE
                        </span>
                    </div>

                    <h2
                        id="about-who-title"
                        className="text-4xl md:text-5xl font-bold text-[#131632] mb-4 leading-tight"
                    >
                        Who <span className="text-[#ff3f81]">we</span> are
                    </h2>

                    <div className="w-1/2 md:w-[320px] h-[3px] rounded bg-linear-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)] mb-6" />

                    <div className="flex flex-col gap-4 text-base md:text-lg text-gray-600 leading-relaxed">
                        <p>
                            EtruendE is an independent web development studio based in Estonia,
                            working with clients worldwide.
                        </p>
                        <p>
                            We build modern websites, landing pages, and e-commerce solutions
                            focused on performance, usability, and business growth. Our work combines
                            clean design, structured development, and a strong focus on how users
                            interact with digital products.
                        </p>
                        <p>
                            We believe a website is more than a visual asset it is a business tool.
                            That's why we focus on speed, clarity, scalability, and SEO-ready
                            architecture from the start.
                        </p>
                        <p>
                            Each project is approached individually. We adapt to the client's goals,
                            industry, and stage of growth. Delivering reliable digital solutions
                            built for long-term results.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="sm:col-span-2 text-[80px] font-bold select-none opacity-[0.07] pointer-events-none leading-none text-center sm:text-left">
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                    </div>

                    {values.map(({ icon: Icon, title, text }, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff3f81] hover:shadow-[0_0_20px_rgba(255,63,129,0.15)] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#131632] flex items-center justify-center mb-4">
                                <Icon className="text-[#ff3f81] text-lg" />
                            </div>
                            <p className="font-semibold text-[#131632] mb-1">{title}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}