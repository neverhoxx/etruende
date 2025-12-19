import HeroParticles from "@/components/shared/main/hero";
import WhatYouGetBlock from "@/components/shared/main/whatYouGet";
import WhatWeCanBlock from "@/components/shared/main/whatWeCan";
import PortfolioBlock from "@/components/shared/main/portfolio";
import OurProcces from "@/components/shared/main/procces";
import ContactForm from "@/components/shared/contact";
import HomeFAQ from "@/components/shared/main/HomeFAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EtruendE - Web Development, Design & SEO Agency",
  description:
    "EtruendE is a full-cycle digital agency specializing in web development, UI/UX design, and SEO promotion. We build high-performing websites that drive traffic, leads, and revenue.",
  keywords: [
    "web development agency",
    "SEO agency",
    "website development",
    "landing page development",
    "e-commerce development",
    "corporate websites",
    "SEO promotion",
    "digital agency",
    "EtruendE",
  ],
  openGraph: {
    title: "EtruendE - Digital Solutions That Drive Growth",
    description:
      "Web development, design, and SEO promotion focused on business growth, conversions, and long-term results.",
    url: "https://etruende.com",
    siteName: "EtruendE",
    images: [
      {
        url: "https://etruende.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "EtruendE Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EtruendE - Web Development & SEO Agency",
    description:
      "We create scalable websites and SEO strategies that increase traffic, conversions, and revenue.",
    images: ["https://etruende.com/og/home.jpg"],
  },
  alternates: {
    canonical: "https://etruende.com",
  },
};



export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://etruende.com/#organization",
                "name": "EtruendE",
                "url": "https://etruende.com",
                "logo": "https://etruende.com/logo.png",
                "sameAs": [
                  "https://www.linkedin.com/company/etruende",
                  "https://www.instagram.com/etruende"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://etruende.com/#website",
                "url": "https://etruende.com",
                "name": "EtruendE",
                "publisher": {
                  "@id": "https://etruende.com/#organization"
                }
              },
              {
                "@type": "Service",
                "@id": "https://etruende.com/#services",
                "serviceType": [
                  "Web Development",
                  "UI/UX Design",
                  "Landing Page Development",
                  "E-commerce Development",
                  "SEO Promotion",
                  "Corporate Websites"
                ],
                "provider": {
                  "@id": "https://etruende.com/#organization"
                },
                "areaServed": "Worldwide"
              }
            ]
          }),
        }}
      />

      <HeroParticles />
      <WhatYouGetBlock />
      <WhatWeCanBlock />
      <PortfolioBlock />
      <OurProcces />
      <ContactForm />
      <HomeFAQ />
    </>
  );
}
