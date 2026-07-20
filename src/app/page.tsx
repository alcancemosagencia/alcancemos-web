import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroEditorial } from "@/components/sections/HeroEditorial";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroEditorial />
        <ServicesSection />
        <ProblemsSection />
        <ProcessSection />
        <CasesSection />
        <AboutSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
