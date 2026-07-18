import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 sm:pt-44">
          <Container className="pb-[var(--section-spacing)] pt-10">
            <Reveal>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Agencia de Performance Marketing</p>
              <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-heading sm:text-7xl lg:text-8xl">Convertimos inversión publicitaria en <em className="font-display font-medium italic">crecimiento real</em>.</h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">Estrategia, anuncios y páginas de alta conversión para atraer clientes y aumentar ventas de forma medible.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button href="#contacto" size="large" icon={<ArrowRight size={18} aria-hidden />}>Hablemos</Button><Button href="#proceso" size="large" variant="secondary">Conoce nuestro proceso</Button></div>
            </Reveal>
          </Container>
        </section>
        <section id="servicios" className="py-[var(--section-spacing)]">
          <Container>
            <SectionHeading eyebrow="Base visual" title="Sistema flexible para una presencia premium." highlight="presencia premium" description="Componentes iniciales, espaciado amplio y una dirección visual clara para evolucionar la web sin inventar contenido comercial." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => <Reveal key={service.title} delay={index * 0.08}><article className="min-h-56 rounded-brand border border-border bg-card p-7 shadow-[0_20px_70px_rgba(4,1,18,0.04)]"><h3 className="text-2xl font-semibold tracking-[-0.03em] text-heading">{service.title}</h3><p className="mt-4 leading-7 text-muted">{service.description}</p></article></Reveal>)}
            </div>
          </Container>
        </section>
        <section id="proceso" className="py-[var(--section-spacing)]"><Container><div className="rounded-[32px] border border-border bg-white p-8 sm:p-12"><SectionHeading align="center" eyebrow="Prueba de scroll" title="Una zona amplia para validar navegación, ritmo y responsive." highlight="validar" description="Este bloque provisional ayuda a revisar el comportamiento del header glass al hacer scroll en escritorio y móvil." /><div className="h-[55vh]" /></div></Container></section>
      </main>
      <div id="contacto" />
      <Footer />
    </>
  );
}
