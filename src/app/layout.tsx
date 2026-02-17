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
    default: "EtruendE - Web Development Studio",
    template: "%s | EtruendE",
  },

  description:
    "EtruendE is an independent web development studio. We design and build modern, fast websites with a clear process and honest estimates.",

  keywords: [
    "web development studio",
    "next.js development",
    "react development",
    "website design",
    "landing page",
    "business website",
    "online store",
    "EtruendE",
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
    title: "EtruendE — Web Development Studio",
    description: "Modern websites built with clarity, performance, and a transparent process.",
    siteName: "EtruendE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EtruendE — Web Development Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EtruendE — Web Development Studio",
    description: "We build modern, fast websites with a clear process and reliable delivery.",
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
                  "publisher": {
                    "@id": "https://etruende.com/#organization"
                  }
                }
              ]
            }
            ),
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
