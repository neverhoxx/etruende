import LandingHero from "@/components/shared/landing/hero";
import { LandingSection } from "@/components/shared/landing/whyYouNeedIt";
import LandingPortfolio from "@/components/shared/landing/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import LandingPageBlock from "@/components/shared/landing/text-block";

export default function Landing() {
    return (
        <>
            <LandingHero />
            <LandingSection />
            <LandingPortfolio />
            <CorporateContact />
            <LandingPageBlock />
        </>
    );
}