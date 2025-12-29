import Hero from "@/components/shared/portfolio/voltamp/hero";
import VoltampWhatWeBuilt from "@/components/shared/portfolio/voltamp/whatWeBuilt";
import VoltampBigInfoBlock from "@/components/shared/portfolio/voltamp/BigInfo";
import PortContact from "@/components/shared/portfolio/voltamp/contact";

export const metadata = {
    title: "Voltamp Case Study — Corporate Website & SEO | EtruendE Studio",
    description:
        "Voltamp case study. Premium corporate website and SEO strategy that increased trust, visibility, and lead generation in the energy sector.",
};

export default function VoltampCasePage() {
    return (
        <>
            <Hero />
            <VoltampBigInfoBlock />
            <VoltampWhatWeBuilt />
            <PortContact />


            <p className="sr-only">
                Voltamp case study by EtruendE Studio. Premium corporate website
                development and SEO strategy for energy companies.
            </p>
        </>
    );
}


