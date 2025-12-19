import CorporateHero from "@/components/shared/corporate/hero";
import { CorporateSection } from "@/components/shared/corporate/whatYouGet";
import CorporatePortfolio from "@/components/shared/corporate/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import CorporateWebsiteBlock from "@/components/shared/corporate/text-block";
import CorporateFAQ from "@/components/shared/corporate/CorporateFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Corporate Website Development Services | Scalable Business Websites - EtruendE",
    description:
        "Corporate website development services focused on trust, performance, and SEO. We build scalable, high-performance corporate websites that strengthen brands and grow businesses.",

    keywords: [
        "corporate website development",
        "corporate website design",
        "business website development",
        "corporate web design services",
        "SEO corporate website",
        "professional corporate website",
    ],

    alternates: {
        canonical: "https://etruende.com/corporate-website-development",
    },

    openGraph: {
        title: "Corporate Website Development Services - EtruendE",
        description:
            "We design and develop professional corporate websites focused on performance, SEO, and brand trust. Scalable solutions for growing businesses.",
        url: "https://etruende.com/corporate-website-development",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og/corporate-website.jpg",
                width: 1200,
                height: 630,
                alt: "Corporate Website Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Corporate Website Development | EtruendE",
        description:
            "Scalable corporate websites built for performance, SEO, and business growth.",
        images: ["https://etruende.com/og/corporate-website.jpg"],
    },
};

export default function Corporate() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is a corporate website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A corporate website is an official online platform that represents a company, its services, values, and brand identity."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why does my business need a corporate website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A corporate website increases credibility, improves online visibility, and helps generate leads."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does a corporate website cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost depends on design complexity, functionality, and project requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to build a corporate website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Corporate website development usually takes from 3 to 8 weeks depending on project scope."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is SEO included in corporate website development?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, SEO-friendly structure and optimization are included in every corporate website we build."
                                }
                            }
                        ]
                    })
                }}
            />

            <CorporateHero />
            <CorporateSection />
            <CorporatePortfolio />
            <CorporateContact />
            <CorporateWebsiteBlock />
            <CorporateFAQ />
        </>
    );
}