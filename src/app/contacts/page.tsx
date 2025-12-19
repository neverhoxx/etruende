import type { Metadata } from "next";
import ContactSectionPage from "@/components/shared/contact/contact";

export const metadata: Metadata = {
    title: "Contact Us | EtruendE - Web Development & SEO Agency",
    description:
        "Contact EtruendE to discuss web development, SEO promotion, and digital growth. Get a free consultation and start building high-performing digital solutions.",
    openGraph: {
        title: "Contact EtruendE",
        description:
            "Get in touch with EtruendE for web development, SEO promotion, and digital strategy.",
        url: "https://etruende.com/contact",
        siteName: "EtruendE",
        type: "website",
    },
    alternates: {
        canonical: "https://etruende.com/contact",
    },
};

export default function ContactPage() {
    return <ContactSectionPage />;
}
