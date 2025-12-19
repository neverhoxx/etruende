import { Container } from "../container";

export default function SeoPromotionBlock() {
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
                        Result-Driven <br />
                        <span className="text-[#ff3f81]">SEO Promotion</span> That Grows Traffic
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            SEO promotion is not just about rankings - it is a long-term strategy
                            focused on sustainable traffic growth and business visibility. At
                            EtruendE, we help brands appear exactly where their customers are
                            searching.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We build SEO strategies based on deep keyword research, competitor
                            analysis, and user intent. From technical optimization to content and
                            link building, every step is designed to increase search engine trust
                            and authority.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Technical SEO plays a critical role. We optimize site structure,
                            loading speed, mobile performance, and indexing to ensure search
                            engines can properly crawl and rank your website.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Content optimization is at the core of successful SEO. We create and
                            optimize content that answers user queries, improves engagement, and
                            drives qualified organic traffic to your business.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            SEO is an ongoing process. We continuously analyze performance,
                            track rankings, monitor competitors, and adjust strategy to ensure
                            stable growth and long-term results.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            Choosing EtruendE means investing in measurable growth. We don’t just
                            improve rankings - we build SEO systems that generate leads, increase
                            conversions, and strengthen your brand’s online presence.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
