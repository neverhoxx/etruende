import { Container } from "../../container";
import Link from "next/link";

export default function PortContact() {
    return (
        <div className="py-20 select-none bg-[#131632] relative border-b border-[#ff3f81]">
            <Container>
                <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#ff3f81]/20 blur-[120px]" />

                <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl text-white leading-tight">
                    This Website Is Not Just a Design - <span className="text-[#ff3f81]">It’s a Sales Tool</span>
                </h2>

                <p className="mt-6 text-white/80 text-xl max-w-3xl leading-relaxed">
                    Voltamp now has a digital presence that builds trust, strengthens authority,
                    and actively converts visitors into leads. Every element - from UX to SEO -
                    works together to support business growth and long-term online visibility.
                </p>

                <p className="mt-4 text-white/70 text-lg max-w-3xl">
                    With a clear structure, responsive design, and performance-optimized code,
                    the website doesn't just look good - it generates measurable results,
                    helping Voltamp dominate the energy market and attract high-value clients.
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-white pt-16">
                    Want a Website That <br /> Actually Sells?
                </h2>

                <p className="mt-4 text-zinc-300 text-lg max-w-3xl">
                    We create premium websites that not only impress visually but also deliver real business impact -
                    more leads, more conversions, more growth.
                </p>

                <Link
                    href="/contacts"
                    className="
                        inline-flex
                        items-center
                        gap-3
                        mt-10
                        px-10
                        py-5
                        rounded-full
                        bg-[#ff3f81]
                        text-white
                        font-semibold
                        text-lg
                        transition
                        hover:scale-105
                        hover:shadow-[0_0_40px_rgba(255,63,129,0.5)]
                    "
                >
                    Start a Project →
                </Link>
            </Container>
        </div>
    );
}
