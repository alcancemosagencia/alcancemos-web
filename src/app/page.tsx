import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="v3-home">
      <Header />
      <main>
        <HeroSection />
        <SystemSection />
        <ProblemSection />
        <CapabilitiesSection />
        <ResultsSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
