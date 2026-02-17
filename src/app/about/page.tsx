import type { Metadata } from "next";

import AboutHero from "@/components/shared/about/hero";
import AboutFirstBlock from "@/components/shared/about/text-block";
import OurApproach from "@/components/shared/about/ourApproach";
import WhatWeDo from "@/components/shared/about/WhatWeDo";
import OurProcess from "@/components/shared/main/procces";
import FocusOverScale from "@/components/shared/about/FocusOverScale";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutFirstBlock />
            <OurApproach />
            <WhatWeDo />
            <OurProcess />
            <FocusOverScale />
        </>
    );
}