import type { Metadata } from "next";
import ContactSectionPage from "@/components/shared/contact/contact";

export const metadata: Metadata = {
    title: "Contact | EtruendE - Web Development Studio",
    description:
        "Contact EtruendE to discuss your website project. We build modern websites with a clear process, timeline, and honest estimates.",
    openGraph: {
        title: "Contact EtruendE",
        description:
            "Get in touch with EtruendE to discuss your website, timeline, and project requirements.",
        url: "https://etruende.com/contacts",
        siteName: "EtruendE",
        type: "website",
    },
    alternates: {
        canonical: "https://etruende.com/contacts",
    },
};


export default function ContactPage() {
    return <ContactSectionPage />;
}
