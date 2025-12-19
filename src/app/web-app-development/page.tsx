import WebApplicationHero from "@/components/shared/web-app/hero";
import { WebApplicationSection } from "@/components/shared/web-app/whyYouNeedIt";
import WebAppPortfolio from "@/components/shared/web-app/portfolio";
import CorporateContact from "@/components/shared/corporate/contact";
import WebApplicationBlock from "@/components/shared/web-app/text-block";
import WebApplicationFAQ from "@/components/shared/web-app/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Application Development Services | Custom Web Apps - EtruendE",
    description:
        "Custom web application development services by EtruendE. We build scalable, secure, and high-performance web applications for startups and businesses.",

    keywords: [
        "web application development",
        "custom web application",
        "web app development services",
        "SaaS development",
        "business web applications",
        "enterprise web applications",
        "custom software development",
    ],

    alternates: {
        canonical: "https://etruende.com/web-application-development",
    },

    openGraph: {
        title: "Web Application Development Services - EtruendE",
        description:
            "We develop scalable and secure web applications, SaaS platforms, dashboards, and business systems tailored to your needs.",
        url: "https://etruende.com/web-application-development",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og/web-application.jpg",
                width: 1200,
                height: 630,
                alt: "Web Application Development by EtruendE",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Web Application Development | EtruendE",
        description:
            "Custom web applications built for performance, scalability, and business growth.",
        images: ["https://etruende.com/og/web-application.jpg"],
    },
};

export default function WebApplication() {
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
                                "name": "What is a web application?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A web application is a dynamic software solution accessed through a browser that allows users to interact with data, perform actions, and use advanced functionality."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What types of web applications do you develop?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We develop SaaS platforms, dashboards, admin panels, client portals, booking systems, marketplaces, and enterprise web applications."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are your web applications scalable?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, our web applications are built with scalable architectures that support business growth and increasing user demand."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you develop secure web applications?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We implement security best practices including authentication, authorization, data protection, and secure APIs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you integrate third-party services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we integrate payment gateways, CRM systems, analytics tools, marketing platforms, and external APIs."
                                }
                            }
                        ]
                    })
                }}
            />

            <WebApplicationHero />
            <WebApplicationSection />
            <WebAppPortfolio />
            <CorporateContact />
            <WebApplicationBlock />
            <WebApplicationFAQ />
        </>
    );
}