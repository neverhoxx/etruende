import { Container } from "../container";

export default function CorporateWebsiteBlock() {
    return (
        <section
            className="w-full py-24 bg-[#e5e7eb]"
            aria-labelledby="corporate-about-title"
        >
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                <div className="relative h-auto lg:h-[420px]">
                    <div className="text-[72px] sm:text-[120px] md:text-[150px] font-bold select-none opacity-20 absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:bottom-1/7 bottom-[-10%] pointer-events-none">
                        <span className="text-[#ff3f81]">E</span>truend
                        <span className="text-[#ff3f81]">E</span>
                    </div>
                </div>

                <div>
                    <h2
                        id="corporate-about-title"
                        className="text-3xl md:text-4xl font-bold text-[#131632] mb-6 leading-tight"
                    >
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span> - Business Websites That Build Trust
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A business website is your main online presence - it explains what you do, builds trust,
                            and makes it easy for customers to contact you.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            We design and develop modern multi-page websites with a clear structure, clean design,
                            and fast performance - with a transparent process from start to launch.
                        </p>

                        <h3 className="text-xl font-semibold text-[#131632] mb-3">
                            What’s included
                        </h3>

                        <ul className="text-base md:text-lg text-gray-700 mb-6 list-disc list-inside">
                            <li>Clear site structure and navigation</li>
                            <li>Mobile-first responsive layout</li>
                            <li>Fast loading and performance optimization</li>
                            <li>Contact form and quick-contact buttons</li>
                            <li>Basic SEO setup (metadata, sitemap, indexing)</li>
                            <li>Analytics setup (optional)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#131632] mb-3">
                            SEO best practices (no hype)
                        </h3>

                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            We set up the technical foundation for search visibility: proper headings, metadata,
                            sitemap, and clean structure - so your website is easy to index and ready for future content.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            You always see progress step by step - first structure and design, then development and launch.
                        </p>

                    </div>
                </div>

            </Container>
        </section>
    );
}
