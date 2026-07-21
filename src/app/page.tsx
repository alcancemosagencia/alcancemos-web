import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroEditorial } from "@/components/sections/HeroEditorial";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroEditorial />
        <EcosystemSection />
        <ProblemsSection />
        <ProcessSection />
        <CasesSection />
        <PhilosophySection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
