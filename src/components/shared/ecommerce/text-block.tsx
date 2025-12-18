import { Container } from "../container";

export default function EcommerceWebsiteBlock() {
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
                        <span className="text-[#ff3f81]">E</span> <br /> E-commerce Development That Drives Sales
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            EtruendE is a web studio specializing in professional e-commerce website
                            development for businesses that want to sell online effectively. In modern
                            digital commerce, an online store is not just a catalog — it is a complete
                            sales system designed to attract customers, build trust, and generate revenue.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We create high-performance e-commerce websites that combine clean design,
                            intuitive user experience, and powerful functionality. From product catalogs
                            and secure payment systems to order management and integrations, every detail
                            is built to support smooth customer journeys and higher conversion rates.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A successful e-commerce website must be fast, reliable, and easy to use.
                            Our team focuses on responsive design, optimized loading speed, and clear
                            navigation that works flawlessly on desktop, tablet, and mobile devices.
                            This ensures your customers can shop comfortably anytime, anywhere.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            SEO is an essential part of e-commerce growth. We build online stores with
                            SEO-friendly architecture, clean URLs, structured data, and optimized content
                            that helps your products rank higher in search engines and attract organic
                            traffic ready to buy.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Our e-commerce solutions are scalable and future-proof. Whether you are
                            launching a new online store, expanding your product range, or entering
                            new markets, we develop platforms that grow together with your business
                            and adapt to changing demands.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            By choosing EtruendE, you choose a strategic partner focused on results.
                            We don’t just build e-commerce websites — we create digital sales engines
                            that help businesses increase revenue, strengthen their brand, and succeed
                            in competitive online markets.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
