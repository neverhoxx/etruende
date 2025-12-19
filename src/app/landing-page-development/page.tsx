import LandingHero from "@/components/shared/landing/hero";
import { LandingSection } from "@/components/shared/landing/whyYouNeedIt";
import LandingPortfolio from "@/components/shared/landing/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import LandingPageBlock from "@/components/shared/landing/text-block";
import LandingFAQ from "@/components/shared/landing/faq";
import { LandingFAQSchema } from "@/components/shared/landing/FAQSchema";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Landing Page Development Services | High-Converting Landing Pages - EtruendE",
    description:
        "Professional landing page development focused on conversions. We design fast, SEO-optimized landing pages that generate leads, increase sales, and maximize ROI for businesses worldwide.",

    keywords: [
        "landing page development",
        "landing page design",
        "landing page services",
        "conversion focused landing page",
        "SEO landing page",
        "landing page for business",
        "custom landing page",
        "high converting landing page",
    ],

    openGraph: {
        title: "Landing Page Development Services - EtruendE",
        description:
            "We create high-converting landing pages optimized for SEO, performance, and marketing campaigns. Turn traffic into leads and sales with EtruendE.",
        url: "https://etruende.com/landing-page-development",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og/landing-page.jpg",
                width: 1200,
                height: 630,
                alt: "Landing Page Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Landing Page Development | EtruendE",
        description:
            "High-performing landing pages designed to convert visitors into customers. SEO-friendly, fast, and conversion-focused.",
        images: ["https://etruende.com/og/landing-page.jpg"],
    },

    alternates: {
        canonical: "https://etruende.com/landing-page-development",
    },
};


export default function Landing() {
    return (
        <>
            <LandingFAQSchema />
            <LandingHero />
            <LandingSection />
            <LandingPortfolio />
            <CorporateContact />
            <LandingPageBlock />
            <LandingFAQ />
        </>
    );
}