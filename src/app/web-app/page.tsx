import WebApplicationHero from "@/components/shared/web-app/hero";
import { WebApplicationSection } from "@/components/shared/web-app/whyYouNeedIt";
import WebAppPortfolio from "@/components/shared/web-app/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import WebApplicationBlock from "@/components/shared/web-app/text-block";

export default function WebApplication() {
    return (
        <>
            <WebApplicationHero />
            <WebApplicationSection />
            <WebAppPortfolio />
            <CorporateContact />
            <WebApplicationBlock />
        </>
    );
}