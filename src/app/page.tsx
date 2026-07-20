import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroOrbit } from "@/components/sections/HeroOrbit";
import { EcosystemStrip } from "@/components/sections/EcosystemStrip";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          <div aria-hidden="true" className="soft-noise absolute inset-0 -z-20 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
          <Container className="pb-20 pt-14 sm:pb-32 sm:pt-24 lg:pb-36 lg:pt-28">
            <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
              <div className="mb-7 flex items-center justify-center gap-3"><p className="min-w-0 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.24em]">Agencia de Performance Marketing</p><DecorativeEmoji src="/decorations/rocket-3d.webp" size="sm" rotate={5} priority className="hidden sm:inline-flex" /></div>
              <h1 className="text-balance text-[clamp(2.65rem,7.2vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-heading sm:leading-[0.89] sm:tracking-[-0.07em]">Hacemos que tu negocio venda más con publicidad que <em className="font-display font-medium italic">sí funciona</em>.</h1>
              <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-8 tracking-[-0.012em] text-muted sm:mt-9 sm:text-xl">Creamos campañas en Meta Ads, Google Ads y páginas de alta conversión para atraer clientes, aumentar ventas y escalar con una estrategia medible.</p>
              <div className="mt-10 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center">
                <Button href="#contacto" size="large" icon={<ArrowRight size={18} aria-hidden />} className="w-full px-5 text-sm sm:w-auto sm:px-7 sm:text-base">Quiero hacer crecer mi negocio</Button>
                <Button href="#proceso" size="large" variant="secondary" className="w-full px-5 text-sm sm:w-auto sm:px-7 sm:text-base">Ver cómo trabajamos</Button>
              </div>
            </Reveal>
            <Reveal delay={0.12}><HeroOrbit /></Reveal>
          </Container>
        </section>
        <EcosystemStrip />
        <ProblemsSection />
        <ServicesSection />
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
