import { Container } from "../container";

export default function WebApplicationBlock() {
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
                        Custom <br />
                        <span className="text-[#ff3f81]">Web Applications</span> for Business Growth
                    </h2>

                    <div className="max-h-[420px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            A web application is not just software - it is a digital system that
                            automates processes, centralizes data, and improves how your business
                            operates. At EtruendE, we build custom web applications tailored to your
                            workflows, goals, and technical requirements.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We develop web applications that solve real business problems. From
                            dashboards, CRM and ERP systems to SaaS platforms and customer portals,
                            every solution is designed with usability, performance, and scalability
                            in mind.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Our web applications feature clean architecture, responsive interfaces,
                            and seamless user experiences across desktop, tablet, and mobile devices.
                            This ensures your team and users can work efficiently anytime, anywhere.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            Security and reliability are core priorities. We implement modern
                            authentication systems, role-based access, and data protection measures
                            to keep your application stable, secure, and compliant with industry
                            standards.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 mb-5">
                            We also build with growth in mind. Our web applications are scalable and
                            future-ready, allowing you to add new features, integrate third-party
                            services, and support increasing user loads without rebuilding the
                            entire system.
                        </p>

                        <p className="text-base md:text-lg text-gray-500">
                            By choosing EtruendE, you gain a technology partner focused on long-term
                            success. We don’t just build web applications - we create digital tools
                            that increase efficiency, support growth, and give businesses a
                            competitive advantage.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}
