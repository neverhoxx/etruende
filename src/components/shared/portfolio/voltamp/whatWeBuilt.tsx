import { Container } from "@/components/shared/container";

export default function VoltampWhatWeBuilt() {
    return (
        <div className="py-20 bg-[#F4F8FD]">
            <Container>
                <h2 className="text-4xl font-bold text-center leading-tight">
                    What <span className="text-[#ff3f81]">We</span> Actually Built
                </h2>

                <div className="mt-12 flex flex-wrap justify-center gap-10 text-lg text-zinc-700">
                    {[
                        "Corporate website tailored to energy-sector credibility",
                        "Responsive UX focused on clarity and trust",
                        "SEO-ready structure for sustainable traffic growth",
                        "Fast, clean, and scalable front-end architecture",
                        "Conversion-focused content hierarchy",
                        "Technical SEO foundation for long-term results",
                    ].map((item) => (
                        <div key={item} className="border-b border-[#ff3f81]">
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}