import SeoPromotionHero from "@/components/shared/seo-promotion/hero";
import { SeoPromotionSection } from "@/components/shared/seo-promotion/whyYouNeedIt";
import SeoPortfolio from "@/components/shared/seo-promotion/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import SeoPromotionBlock from "@/components/shared/seo-promotion/text-block";

export default function SeoPromotion() {
    return (
        <>
            <SeoPromotionHero />
            <SeoPromotionSection />
            <SeoPortfolio />
            <CorporateContact />
            <SeoPromotionBlock />
        </>
    );
}