import type { Metadata } from "next";
import OurWorks from "@/components/shared/ourWorks";

export const metadata: Metadata = {
    title: "Portfolio | EtruendE - Web Development Studio",
    description:
        "Explore selected projects by EtruendE - modern websites and web apps built with a clear structure, clean design, and strong performance.",
    keywords: [
        "EtruendE portfolio",
        "web development portfolio",
        "next.js portfolio",
        "react portfolio",
        "website design portfolio",
        "landing page portfolio",
        "business website examples",
        "web studio projects",
    ],
    openGraph: {
        title: "EtruendE Portfolio",
        description:
            "Selected projects by EtruendE - modern websites built with clarity and performance in mind.",
        url: "https://etruende.com/portfolio",
        siteName: "EtruendE",
        images: [
            {
                url: "https://etruende.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "EtruendE Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EtruendE Portfolio",
        description:
            "Selected projects — modern websites built with a clear process and reliable delivery.",
        images: ["https://etruende.com/og-image.png"],
    },
    alternates: {
        canonical: "https://etruende.com/portfolio",
    },
};

export default function PortfolioPage() {
    return <OurWorks />;
}
