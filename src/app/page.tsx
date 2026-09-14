import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EcosystemSection />
        <CasesSection />
        <ProcessSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
