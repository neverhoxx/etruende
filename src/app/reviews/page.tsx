import type { Metadata } from "next";
import UnderConstructionPage from "@/components/shared/underConstruction";

export const metadata: Metadata = {
    title: "Reviews - Coming Soon | EtruendE",
    description: "EtruendE Reviews is currently under development. Launching soon.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ReviewsPage() {
    return <UnderConstructionPage />;
}
