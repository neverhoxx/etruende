import CorporateHero from "@/components/shared/corporate/hero";
import { CorporateSection } from "@/components/shared/corporate/whatYouGet";
import CorporatePortfolio from "@/components/shared/corporate/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import CorporateWebsiteBlock from "@/components/shared/corporate/text-block";
import CorporateFAQ from "@/components/shared/corporate/CorporateFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Website Development | EtruendE - Web Development Studio",
    description:
        "EtruendE builds modern business websites - clear structure, clean design, mobile-first layout, and strong performance with SEO best practices included.",
    keywords: [
        "business website development",
        "company website",
        "website design",
        "next.js website",
        "react website",
        "service business website",
        "EtruendE",
    ],
    alternates: {
        canonical: "https://etruende.com/business-website",
    },
    openGraph: {
        title: "Business Website Development | EtruendE",
        description:
            "Modern business websites built with clarity, performance, and a transparent process.",
        url: "https://etruende.com/business-website",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Business Website Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Business Website Development | EtruendE",
        description:
            "Modern business websites built with a clear process and reliable delivery.",
        images: ["https://etruende.com/og-image.png"],
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
                                "name": "What is a business website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A business website is a multi-page site that presents your company, services, and contact details in a clear and professional way."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why does my business need a website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A website builds trust, helps customers understand what you do, and makes it easy for them to contact you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is SEO included?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We include SEO best practices: clean structure, headings, metadata, sitemap, and indexing setup."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most business websites take around 10–14 days. Larger projects can take 2–4 weeks depending on requirements and content."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you redesign an existing website?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We can refresh design, improve structure, update content blocks, and optimize performance."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide support after launch?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We can help with updates and improvements after launch when you need it."
                                }
                            }
                        ]
                    }),
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