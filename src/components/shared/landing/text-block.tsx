import { Container } from "../container";

export default function LandingPageBlock() {
    return (
        <section className="w-full py-24 bg-[#e5e7eb]">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div className="relative h-auto lg:h-[420px]">
                    <div className="text-[72px] sm:text-[120px] md:text-[150px] font-bold select-none opacity-20 absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:bottom-1/7 bottom-[-10%] pointer-events-none">
                        <span className="text-[#ff3f81]">E</span>
                        truend
                        <span className="text-[#ff3f81]">E</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#131632] mb-6 leading-tight">
                        <span className="text-[#ff3f81]">Landing Pages</span>  Built for Clarity and Performance
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A landing page is a focused one-page website built around a single offer - a service, product, or campaign.
                            Its goal is simple: help visitors quickly understand the value and take one clear action.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We design landing pages with a clean structure, strong visual hierarchy, and an easy-to-follow layout, so the message is clear and the page feels trustworthy.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Performance matters. Our landing pages are mobile-first, fast-loading, and responsive across devices, so users get a smooth experience from ads, social media, or search.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We include essential setup such as forms, analytics (optional), and SEO best practices
                            (metadata, headings, sitemap/indexing when needed).
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            After launch, you can easily update content and iterate on the offer without rebuilding everything from scratch.
                        </p>

                    </div>
                </div>

            </Container>
        </section>
    );
}
