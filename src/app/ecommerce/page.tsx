import EcommerceHero from "@/components/shared/ecommerce/hero";
import { EcommerceSection } from "@/components/shared/ecommerce/whyYouNeedIt";
import EcommercePortfolio from "@/components/shared/ecommerce/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import EcommerceWebsiteBlock from "@/components/shared/ecommerce/text-block";

export default function Ecommerce() {
    return (
        <>
            <EcommerceHero />
            <EcommerceSection />
            <EcommercePortfolio />
            <CorporateContact />
            <EcommerceWebsiteBlock />
        </>
    );
}