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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#131632] mb-6 leading-tight">
                        <span className="text-[#ff3f81]">E</span>
                        truend
                        <span className="text-[#ff3f81]">E</span> <br /> Online Stores Built for Performance and Clarity
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            An online store is more than a product list - it’s a website where customers browse items,
                            understand your offer, and place orders on any device.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            We build modern stores with a clear structure, fast performance, and a smooth user experience —
                            using a transparent process from planning to launch.
                        </p>

                        <h3 className="text-xl font-semibold text-[#131632] mb-3">
                            What’s included
                        </h3>

                        <ul className="text-base md:text-lg text-gray-700 mb-6 list-disc list-inside">
                            <li>Product catalog and category structure</li>
                            <li>Product pages with clear layout and images</li>
                            <li>Cart and checkout setup (based on your requirements)</li>
                            <li>Mobile-first responsive design</li>
                            <li>Performance optimization (fast loading)</li>
                            <li>Basic SEO setup (metadata, sitemap, indexing)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#131632] mb-3">
                            SEO best practices
                        </h3>

                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            We set up a clean structure that’s easy to index and maintain: proper headings, metadata,
                            sitemap, and consistent URLs - so your store is ready for future content and product updates.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            Need payments, delivery, or other integrations? We’ll confirm everything in the brief and include it in the estimate.
                        </p>

                    </div>
                </div>

            </Container>

            <p className="sr-only">
                EtruendE builds modern online stores with a focus on clear structure, performance, and SEO best practices.
                Online store features such as catalog, cart, and checkout depend on project requirements.
            </p>

        </section>
    );
}
