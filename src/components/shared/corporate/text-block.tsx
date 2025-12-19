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
                        <span className="text-[#ff3f81]">E</span>truend
                        <span className="text-[#ff3f81]">E</span> - Corporate Website Development That Builds Trust
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            EtruendE is a professional web studio specializing in
                            <strong> corporate website development </strong>
                            for businesses that want to build a strong digital presence.
                            A modern website is not just an online brochure - it is the
                            foundation of your brand, reputation, and growth strategy.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We design and develop corporate websites, landing pages,
                            e-commerce platforms, and custom web solutions that help companies
                            stand out in competitive markets and convert visitors into clients.
                        </p>

                        <h3 className="text-xl font-semibold text-[#131632]">
                            Strategic Approach to Corporate Websites
                        </h3>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A well-built corporate website communicates your values,
                            highlights your services, and builds trust with your audience.
                            We analyze your business goals, competitors, and target users
                            to deliver solutions that work strategically, not just visually.
                        </p>

                        <h3 className="text-xl font-semibold text-[#131632]">
                            Performance, SEO & Scalability
                        </h3>

                        <p className="text-base md:text-lg text-gray-700">
                            Our development process includes UX/UI design, responsive layouts,
                            performance optimization, SEO-friendly structure, and clean,
                            scalable code. Every website is built for speed, accessibility,
                            and future growth.
                        </p>

                        <p className="text-base md:text-lg text-gray-700">
                            SEO is a core part of our workflow. We create websites that are
                            easy to index, logically structured, and optimized for relevant
                            search queries to help your business attract organic traffic
                            and achieve long-term results.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            By choosing EtruendE, you choose a reliable web development partner
                            focused on transparency, strategy, and measurable business growth.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
