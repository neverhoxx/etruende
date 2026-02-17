import LandingHero from "@/components/shared/landing/hero";
import { LandingSection } from "@/components/shared/landing/whyYouNeedIt";
import LandingPortfolio from "@/components/shared/landing/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import LandingPageBlock from "@/components/shared/landing/text-block";
import LandingFAQ from "@/components/shared/landing/faq";
import { LandingFAQSchema } from "@/components/shared/landing/FAQSchema";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Landing Page Development | EtruendE - Web Development Studio",
    description:
        "EtruendE builds modern landing pages in 1-5 days - clear structure, mobile-first design, and fast performance.",
    keywords: [
        "landing page development",
        "landing page design",
        "next.js landing page",
        "react landing page",
        "business landing page",
        "mobile-first landing page",
        "fast landing page",
        "EtruendE",
    ],
    openGraph: {
        title: "Landing Page Development | EtruendE",
        description:
            "Modern landing pages built with clarity, speed, and a transparent process.",
        url: "https://etruende.com/landing-page",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og-image.png",
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
            "Modern landing pages built with a clear process, fast performance, and SEO best practices.",
        images: ["https://etruende.com/og-image.png"],
    },
    alternates: {
        canonical: "https://etruende.com/landing-page",
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