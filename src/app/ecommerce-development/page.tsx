import EcommerceHero from "@/components/shared/ecommerce/hero";
import { EcommerceSection } from "@/components/shared/ecommerce/whyYouNeedIt";
import EcommercePortfolio from "@/components/shared/ecommerce/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import EcommerceWebsiteBlock from "@/components/shared/ecommerce/text-block";
import EcommerceFAQ from "@/components/shared/ecommerce/faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-commerce Website Development | Online Store Creation - EtruendE",
    description:
        "Professional e-commerce website development by EtruendE. We build fast, scalable, SEO-optimized online stores that increase sales and conversions. Custom design, payments, integrations, and growth-focused architecture.",
    keywords: [
        "e-commerce website development",
        "online store development",
        "ecommerce web design",
        "shopify development",
        "custom ecommerce website",
        "seo ecommerce website",
        "online shop creation",
        "ecommerce agency",
        "ecommerce development services",
        "etrunde"
    ],
    openGraph: {
        title: "E-commerce Website Development – EtruendE",
        description:
            "High-performance e-commerce websites that sell. Custom online stores with SEO, speed optimization, and scalable architecture by EtruendE.",
        url: "https://etrunde.com/ecommerce-development",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etrunde.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "E-commerce Website Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-commerce Website Development - EtruendE",
        description:
            "We create scalable, SEO-friendly e-commerce websites that drive sales and growth.",
        images: ["https://etrunde.com/og-image.png"],
    },
    alternates: {
        canonical: "https://etrunde.com/ecommerce-development",
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
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "E-commerce Website Development",
                        "description":
                            "Professional e-commerce website development services including custom online stores, SEO optimization, payment integration, and scalable architecture.",
                        "provider": {
                            "@type": "Organization",
                            "name": "EtruendE",
                            "url": "https://etrunde.com",
                            "logo": "https://etrunde.com/web-app-manifest-192x192.png"
                        },
                        "areaServed": "Worldwide",
                        "serviceType": [
                            "E-commerce Website Development",
                            "Online Store Creation",
                            "Ecommerce SEO Optimization"
                        ]
                    })
                }}
            />

        </>
    );
}