import CorporateHero from "@/components/shared/corporate/hero";
import { CorporateSection } from "@/components/shared/corporate/whatYouGet";
import CorporatePortfolio from "@/components/shared/corporate/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import CorporateWebsiteBlock from "@/components/shared/corporate/text-block";

export default function Corporate() {
    return (
        <>
            <CorporateHero />
            <CorporateSection />
            <CorporatePortfolio />
            <CorporateContact />
            <CorporateWebsiteBlock />
        </>
    );
}