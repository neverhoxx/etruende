import HeroParticles from "@/components/shared/main/hero";
import WhatYouGetBlock from "@/components/shared/main/whatYouGet";
import WhatWeCanBlock from "@/components/shared/main/whatWeCan";
import PortfolioBlock from "@/components/shared/main/portfolio";
import OurProcces from "@/components/shared/main/procces";
import ContactForm from "@/components/shared/contact";
import HomeFAQ from "@/components/shared/main/HomeFAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EtruendE - Web Development Studio",
  description:
    "EtruendE is an independent web development studio. We design and build modern, fast websites with a clear process, honest estimates, and reliable delivery.",
  keywords: [
    "web development studio",
    "next.js development",
    "react development",
    "website design",
    "landing page",
    "business website",
    "online store",
    "estonian web studio",
    "EtruendE",
  ],
  other: {
    freelancehunt: "b6196dfb59ba679",
  },
  openGraph: {
    title: "EtruendE - Web Development Studio",
    description:
      "Modern websites built with clarity, performance, and a transparent process.",
    url: "https://etruende.com",
    siteName: "EtruendE",
    images: [
      {
        url: "https://etruende.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "EtruendE Web Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EtruendE - Web Development Studio",
    description:
      "We build modern, fast websites with a clear process and reliable delivery.",
    images: ["https://etruende.com/og-image.png"],
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
                "logo": "https://etruende.com/web-app-manifest-192x192.png",
                "sameAs": [
                  "https://www.instagram.com/etruende_webstudio/"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://etruende.com/#website",
                "url": "https://etruende.com",
                "name": "EtruendE",
                "publisher": { "@id": "https://etruende.com/#organization" }
              },
              {
                "@type": "Service",
                "@id": "https://etruende.com/#service-web-development",
                "name": "Web Development",
                "serviceType": [
                  "Web Development",
                  "UI/UX Design",
                  "Landing Page Development",
                  "Business Websites",
                  "Online Stores",
                  "SEO Setup"
                ],
                "provider": { "@id": "https://etruende.com/#organization" },
                "areaServed": "Worldwide"
              }
            ]
          }
          ),
        }}
      />

      <HeroParticles />
      <WhatWeCanBlock />
      <WhatYouGetBlock />
      <PortfolioBlock />
      <OurProcces />
      <HomeFAQ />
      <ContactForm />
    </>
  );
}
