import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:min-h-[860px] lg:pt-36">
          <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0)_70%)]" />
          <Container className="grid items-center gap-12 pb-20 pt-10 sm:pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-32 lg:pt-20">
            <Reveal className="relative z-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">Agencia de Performance Marketing</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-heading">Hacemos que tu negocio venda más con publicidad que <em className="font-display font-medium italic">sí funciona</em>.</h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:mt-8 sm:text-xl">Creamos campañas en Meta Ads, Google Ads y páginas de alta conversión para atraer clientes, aumentar ventas y escalar con una estrategia medible.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#contacto" size="large" icon={<ArrowRight size={18} aria-hidden />}>Quiero hacer crecer mi negocio</Button>
                <Button href="#proceso" size="large" variant="secondary">Ver cómo trabajamos</Button>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative"><HeroVisual /></Reveal>
          </Container>
        </section>
        <ProblemsSection />
        <ServicesSection />
        <ProcessSection />
      </main>
      <div id="contacto"><Footer /></div>
    </>
  );
}
