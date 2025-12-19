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
  title: {
    default: "EtruendE - Web Development & SEO Agency",
    template: "%s | EtruendE",
  },
  description:
    "EtruendE is a professional web development and SEO agency creating high-performing websites, landing pages, e-commerce platforms, and SEO strategies that drive traffic and sales.",
  alternates: {
    canonical: "https://etruende.com",
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
                  "logo": "https://etruende.com/logo.png",
                  "sameAs": [
                    "https://www.instagram.com/etruende",
                    "https://www.linkedin.com/company/etruende",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://etruende.com/#website",
                  "url": "https://etruende.com",
                  "name": "EtruendE",
                  "publisher": {
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
