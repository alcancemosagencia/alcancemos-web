import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-heading pt-20 text-white sm:pt-32 lg:pt-40">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden border-b border-white/[0.08] px-0 pb-24 pt-8 sm:pb-32 lg:pb-40">
            <div aria-hidden className="absolute -right-16 -top-28 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <div className="max-w-5xl">
                <h2 id="final-cta-title" className="text-balance text-[clamp(2.7rem,6.5vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.06em]">Tu próximo crecimiento no debería <em className="font-display font-medium italic">depender de la suerte</em>.</h2>
                <p className="mt-8 max-w-2xl text-lg leading-8 tracking-[-0.01em] text-white/62">Construyamos una estrategia clara para atraer mejores clientes, convertir más oportunidades y escalar con decisiones medibles.</p>
                <div className="mt-11 flex flex-col gap-3.5 sm:flex-row"><Button href="#contacto" size="large" icon={<ArrowRight size={18} aria-hidden />}>Quiero hacer crecer mi negocio</Button><Button href="#servicios" size="large" variant="secondary" className="border-white/18 bg-white/[0.045] text-white hover:border-white/35 hover:bg-white/[0.075]">Ver nuestros servicios</Button></div>
              </div>
              <DecorativeEmoji src="/decorations/fire-3d.webp" size="lg" rotate={4} className="absolute bottom-0 right-0 hidden sm:inline-flex lg:bottom-4 lg:right-12 lg:scale-150" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
