import SeoPromotionHero from "@/components/shared/seo-promotion/hero";
import { SeoPromotionSection } from "@/components/shared/seo-promotion/whyYouNeedIt";
import SeoPortfolio from "@/components/shared/seo-promotion/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import SeoPromotionBlock from "@/components/shared/seo-promotion/text-block";
import SeoPromotionFAQ from "@/components/shared/seo-promotion/faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Promotion Services | EtruendE - Grow Traffic & Rankings",
    description:
        "Professional SEO promotion by EtruendE. We help businesses grow organic traffic, improve Google rankings, and generate qualified leads through technical SEO, content optimization, and link building.",
    keywords: [
        "SEO promotion",
        "SEO services",
        "SEO agency",
        "search engine optimization",
        "website SEO",
        "organic traffic growth",
        "Google SEO",
        "SEO optimization services",
        "EtruendE",
    ],
    openGraph: {
        title: "SEO Promotion Services | EtruendE",
        description:
            "Data-driven SEO promotion that delivers sustainable traffic growth, higher rankings, and real business results.",
        url: "https://etruende.com/seo-promotion",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "SEO Promotion Services by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SEO Promotion Services | EtruendE",
        description:
            "Full-cycle SEO promotion for businesses that want long-term organic growth and top Google rankings.",
        images: ["https://etruende.com/og-image.png"],
    },
    alternates: {
        canonical: "https://etruende.com/seo-promotion",
    },
};

export default function SeoPromotion() {
    return (
        <>
            <SeoPromotionHero />
            <SeoPromotionSection />
            <SeoPortfolio />
            <CorporateContact />
            <SeoPromotionBlock />
            <SeoPromotionFAQ />
        </>
    );
}
