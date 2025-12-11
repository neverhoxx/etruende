import { Container } from "./container";
import Link from "next/link";

export default function ContactForm() {
    return (
        <div className="py-20 bg-[#ff3f81] second-scroll">
            <Container className="flex flex-col md:flex-row gap-14 md:gap-20">

                <div className="md:w-1/2 flex flex-col items-start gap-2">

                    <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold">
                        Let’s talk
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Let’s create digital experiences<br />that truly stand out
                    </h2>

                    <p className="text-[16px] md:text-[20px] text-[#131632]">
                        We design and build high-performance websites that attract clients,
                        strengthen your brand, and bring real results.
                        Tell us about your project — we’ll help you turn it into something exceptional.
                    </p>

                    <p className="text-white text-lg font-semibold mt-2">
                        EtruendE Web Studio
                    </p>

                    <Link href="" className="text-white underline text-lg">
                        +372 5364 5159
                    </Link>

                    <Link href="" className="text-white underline text-lg">
                        info@etruende.com
                    </Link>
                </div>

                <div className="md:w-1/2 backdrop-blur-xl bg-white/80 rounded-2xl p-8 flex flex-col gap-7 text-[#131632] shadow-2xl border border-white/40">

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Name *</label>
                        <input
                            type="text"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">E-mail *</label>
                        <input
                            type="email"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Phone *</label>
                        <input
                            type="tel"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Which service are you interested in? *</label>
                        <input
                            type="text"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 focus:border-[#131632] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Message *</label>
                        <textarea
                            rows="4"
                            className="border-b border-[#131632]/40 bg-transparent outline-none py-3 resize-none focus:border-[#131632] transition-all"
                        />
                    </div>

                    <button className="mt-4 bg-[#131632] hover:bg-[#0e1027] transition-all text-white py-4 rounded-xl w-full font-semibold text-lg shadow-lg hover:shadow-2xl active:scale-[0.98]">
                        Send Request
                    </button>
                </div>

            </Container>
        </div>
    );
}
