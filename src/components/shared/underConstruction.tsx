import { HiOutlineSparkles } from "react-icons/hi2";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCode, FaRocket } from "react-icons/fa";

export default function UnderConstructionPage() {

    return (
        <div className="min-h-screen bg-[#131632] flex items-center justify-center px-6 relative overflow-hidden select-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff3f81]/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff3f81]/10 blur-[120px]" />

            <div className="relative z-10 max-w-3xl text-center text-white">

                <div
                    data-aos="fade-down"
                    className="inline-flex items-center gap-2 px-4 py-2"
                >
                    <HiOutlineSparkles className="text-[#ff3f81] text-lg" />
                    <span className="text-sm tracking-wide uppercase text-white/80">
                        Under Development
                    </span>
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    We’re Building <br />
                    <span className="text-[#ff3f81] drop-shadow-[0_0_25px_rgba(255,63,129,0.6)]">
                        Something Powerful
                    </span>
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-6 text-lg md:text-xl text-white/80"
                >
                    EtruendE is crafting a next-level digital experience.
                    Clean code. Strong branding. Real results.
                </p>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-10 flex flex-wrap justify-center gap-6"
                >
                    <Feature icon={<FaCode />} text="Modern Web Development" />
                    <Feature icon={<FaRocket />} text="High-Conversion Design" />
                    <Feature icon={<BsLightningChargeFill />} text="Speed & Performance" />
                </div>

                <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="mt-14 text-sm text-white/50"
                >
                    © {new Date().getFullYear()} EtruendE Web Studio
                    <br />
                    Launching soon.
                </p>
            </div>
        </div>
    );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-[#ff3f81] text-xl">
                {icon}
            </div>
            <span className="text-sm md:text-base text-white/90">
                {text}
            </span>
        </div>
    );
}
