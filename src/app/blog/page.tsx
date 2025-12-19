import type { Metadata } from "next";
import UnderConstructionPage from "@/components/shared/underConstruction";

export const metadata: Metadata = {
    title: "Blog - Coming Soon | EtruendE",
    description: "EtruendE blog is currently under development. Launching soon.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function BlogPage() {
    return <UnderConstructionPage />;
}
