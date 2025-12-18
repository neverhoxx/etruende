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
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                        High-Converting <br />
                        <span className="text-[#ff3f81]">Landing Pages</span> That Generate Leads
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A landing page is not just a website - it is a focused marketing tool
                            designed to convert visitors into leads and customers. At EtruendE,
                            we create landing pages that communicate value instantly and guide users
                            toward a single clear action.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We design landing pages with a strong visual hierarchy, persuasive copy,
                            and conversion-driven layouts. Every element - headlines, visuals,
                            call-to-action buttons, and forms - works together to increase engagement
                            and maximize conversion rates.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Performance matters. Our landing pages are fast, responsive, and optimized
                            for all devices. Whether your audience comes from paid ads, social media,
                            or organic search, users get a seamless experience on desktop, tablet,
                            and mobile.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            SEO and marketing optimization are built in from the start. We structure
                            landing pages for search engines, integrate analytics, and ensure your
                            page is ready for A/B testing and advertising campaigns.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Our landing pages are scalable and adaptable. You can easily update
                            content, launch new campaigns, test offers, and optimize performance
                            without rebuilding everything from scratch.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            Choosing EtruendE means choosing measurable results. We don’t just design
                            landing pages - we build conversion systems that help businesses capture
                            leads, grow revenue, and scale marketing efforts effectively.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
