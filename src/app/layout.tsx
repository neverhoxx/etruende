import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import AOSProvider from "@/components/shared/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etruende.com"),

  title: {
    default: "EtruendE – Web Development & SEO Agency",
    template: "%s | EtruendE",
  },

  description:
    "EtruendE is a web development and SEO agency creating fast, conversion-focused websites, landing pages, and e-commerce solutions that help businesses grow.",

  keywords: [
    "web development agency",
    "SEO agency",
    "Next.js development",
    "website design",
    "e-commerce development",
    "landing page development",
    "digital agency",
  ],

  alternates: {
    canonical: "https://etruende.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://etruende.com",
    title: "EtruendE – Web Development & SEO Agency",
    description:
      "High-performing websites, SEO, and e-commerce solutions for growing businesses.",
    siteName: "EtruendE",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 1080,
        alt: "EtruendE – Web Development & SEO Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EtruendE – Web Development & SEO Agency",
    description:
      "Web development & SEO agency focused on performance and conversions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://etruende.com/#organization",
                  name: "EtruendE",
                  url: "https://etruende.com",
                  logo: "https://etruende.com/logo.png",
                  sameAs: [
                    "https://www.instagram.com/etruende_webstudio/",
                    "https://www.linkedin.com/in/etruende-studio",
                  ],
                  icons: {
                    icon: "/favicon.ico",
                    apple: "/apple-icon.png",
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://etruende.com/#website",
                  url: "https://etruende.com",
                  name: "EtruendE",
                  publisher: {
                    "@id": "https://etruende.com/#organization",
                  },
                },
              ],
            }),
          }}
        />


        <AOSProvider />

        <div className="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
