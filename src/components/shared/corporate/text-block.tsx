import { Container } from "../container";

export default function CorporateWebsiteBlock() {
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
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                        <span className="text-[#ff3f81]">E</span>
                        truend
                        <span className="text-[#ff3f81]">E</span> — Web Studio That Builds the Digital Face of Your Business
                    </h2>


                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            EtruendE is a professional web studio focused on creating modern, effective,
                            and high-performance websites for businesses of all sizes. In today’s digital
                            world, a website is not just an online presence — it is the foundation of your
                            brand, your reputation, and your growth strategy.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Our team specializes in corporate websites, landing pages, e-commerce platforms,
                            and custom web solutions that help companies stand out in competitive markets.
                            We combine strategy, design, and development to create digital products that
                            convert visitors into clients.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A well-designed corporate website builds trust, communicates your values, and
                            clearly presents your services. At EtruendE, we analyze your business goals,
                            target audience, and competitors to deliver a solution that works not only
                            visually, but strategically.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Our web development process includes UX/UI design, responsive layout,
                            performance optimization, SEO-friendly structure, and clean scalable code.
                            Every project is built with future growth in mind, ensuring fast loading
                            speed, accessibility, and adaptability across all devices.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Search engine optimization is a core part of our workflow. We create websites
                            that are easy to index, logically structured, and optimized for relevant
                            keywords. This helps your business gain visibility, attract organic traffic,
                            and achieve long-term results.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            EtruendE works with startups, small businesses, and established companies.
                            Whether you need a new website from scratch or a redesign of an existing
                            project, we deliver solutions that reflect your brand identity and support
                            business growth.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            By choosing EtruendE, you choose reliability, transparency, and a strategic
                            approach to web development. We don’t just build websites — we create digital
                            tools that help businesses grow, scale, and succeed online.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
