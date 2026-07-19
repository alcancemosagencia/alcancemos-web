import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="py-8 sm:py-12">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[24px] bg-heading px-6 py-14 text-white shadow-[0_30px_100px_rgba(4,1,18,0.16)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div aria-hidden className="absolute -right-16 -top-28 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <div className="flex items-start gap-3 sm:items-center sm:gap-5"><h2 id="final-cta-title" className="text-balance text-[clamp(2.35rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Tu próximo crecimiento no debería <em className="font-display font-medium italic">depender de la suerte</em>.</h2><DecorativeEmoji src="/decorations/fire-3d.webp" size="lg" rotate={4} /></div>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">Construyamos una estrategia clara para atraer mejores clientes, convertir más oportunidades y escalar con decisiones medibles.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#contacto" size="large" icon={<ArrowRight size={18} aria-hidden />}>Quiero hacer crecer mi negocio</Button><Button href="#servicios" size="large" variant="secondary" className="border-white/18 bg-white/[0.06] text-white hover:border-white/40 hover:bg-white/10">Ver nuestros servicios</Button></div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
