import type { Metadata } from "next";
import OurWorks from "@/components/shared/ourWorks";

export const metadata: Metadata = {
    title: "Portfolio | EtruendE - Web Development, Design & SEO Results",
    description:
        "Explore EtruendE portfolio: web development, UI/UX design, and SEO promotion projects. Real business results, scalable solutions, and growth-focused digital products.",
    keywords: [
        "EtruendE portfolio",
        "web development portfolio",
        "SEO promotion case studies",
        "website design portfolio",
        "digital agency projects",
        "SaaS development",
        "landing page results",
        "SEO results",
    ],
    openGraph: {
        title: "EtruendE Portfolio - Digital Projects That Drive Results",
        description:
            "Results-oriented projects by EtruendE. Web development, design, and SEO promotion focused on growth and performance.",
        url: "https://etruende.com/portfolio",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og/portfolio.jpg",
                width: 1200,
                height: 630,
                alt: "EtruendE Portfolio Projects",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EtruendE Portfolio - Real Digital Results",
        description:
            "Web development, design, and SEO projects built to scale businesses and increase revenue.",
        images: ["https://etruende.com/og/portfolio.jpg"],
    },
    alternates: {
        canonical: "https://etruende.com/portfolio",
    },
};

export default function PortfolioPage() {
    return <OurWorks />;
}
