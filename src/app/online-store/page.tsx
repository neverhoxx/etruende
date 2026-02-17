import EcommerceHero from "@/components/shared/ecommerce/hero";
import { EcommerceSection } from "@/components/shared/ecommerce/whyYouNeedIt";
import EcommercePortfolio from "@/components/shared/ecommerce/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import EcommerceWebsiteBlock from "@/components/shared/ecommerce/text-block";
import EcommerceFAQ from "@/components/shared/ecommerce/faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Online Store Development | EtruendE - Web Development Studio",
    description:
        "EtruendE builds modern online stores for growing businesses - product catalog, cart, checkout setup, and a fast mobile-first experience.",
    keywords: [
        "online store development",
        "ecommerce website development",
        "next.js ecommerce",
        "custom online store",
        "product catalog website",
        "checkout setup",
        "web development studio",
        "EtruendE",
    ],
    openGraph: {
        title: "Online Store Development | EtruendE",
        description:
            "Modern online stores built with clarity, performance, and a transparent process.",
        url: "https://etruende.com/ecommerce-development",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Online Store Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Online Store Development | EtruendE",
        description:
            "Modern online stores built with a clear process and reliable delivery.",
        images: ["https://etruende.com/og-image.png"],
    },
    alternates: {
        canonical: "https://etruende.com/ecommerce-development",
    },
};


export default function Ecommerce() {
    return (
        <>
            <EcommerceHero />
            <EcommerceSection />
            <EcommercePortfolio />
            <CorporateContact />
            <EcommerceWebsiteBlock />
            <EcommerceFAQ />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(<script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Online Store Development",
                                "description":
                                    "Online store development including product catalog, cart, checkout setup, and performance-focused implementation.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "EtruendE",
                                    "url": "https://etruende.com",
                                    "logo": "https://etruende.com/web-app-manifest-192x192.png"
                                },
                                "areaServed": "Worldwide",
                                "serviceType": [
                                    "Online Store Development",
                                    "E-commerce Website Development",
                                    "Checkout Setup"
                                ]
                            }),
                        }}
                    />
                    )
                }}
            />

        </>
    );
}