import HeroParticles from "@/components/shared/main/hero";
import WhatYouGetBlock from "@/components/shared/main/whatYouGet";
import WhatWeCanBlock from "@/components/shared/main/whatWeCan";
import PortfolioBlock from "@/components/shared/main/portfolio";
import OurProcces from "@/components/shared/main/procces";
import ContactForm from "@/components/shared/contact";

export default function Home() {
  return (
    <>
      <HeroParticles />
      <WhatYouGetBlock />
      <WhatWeCanBlock />
      <PortfolioBlock />
      <OurProcces />
      <ContactForm />
    </>
  );
}
