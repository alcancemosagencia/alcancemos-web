import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-28 pb-[clamp(8rem,13vw,12rem)] pt-[clamp(6.5rem,10vw,9rem)]">
      <Container>
        <div className="relative max-w-5xl">
          <SectionHeading eyebrow="Lo que hacemos" title="Un sistema completo para atraer, convertir y crecer." highlight="atraer, convertir y crecer" description="No ejecutamos piezas aisladas. Diseñamos una estrategia conectada entre publicidad, páginas y medición para transformar inversión en oportunidades reales de venta." />
          <DecorativeEmoji src="/decorations/target-3d.webp" size="md" rotate={-4} className="absolute -right-2 -top-4 hidden sm:inline-flex lg:right-0" />
        </div>
        <div className="relative mt-16 overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.045),transparent_32%),linear-gradient(135deg,#08051a_0%,#040112_58%,#070218_100%)] text-white shadow-[0_40px_110px_rgba(4,1,18,0.16)] lg:mt-24">
          <span aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/20" />
          <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08} className={index === 0 ? "h-full lg:row-span-2" : "h-full lg:col-start-2"}>
                <article className={`group relative flex min-h-full flex-col p-8 sm:p-10 ${index === 0 ? "lg:min-h-[760px] lg:p-[4.25rem]" : "border-t border-white/[0.085] lg:min-h-[380px] lg:border-l lg:p-11"}`}>
                  <div className="flex items-center justify-between"><span className="font-display text-4xl font-medium italic text-accent">{service.number}</span><span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent/30 transition-colors group-hover:bg-accent" /></div>
                  <p className={index === 0 ? "mt-28 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/40 lg:mt-40" : "mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/40"}>Servicio {service.number}</p>
                  <h3 className={`mt-3 font-semibold tracking-[-0.05em] text-white ${index === 0 ? "text-5xl sm:text-6xl" : "text-4xl"}`}>{service.title}</h3>
                  <p className="mt-5 leading-7 text-white/55">{service.description}</p>
                  <ul className={`${index === 0 ? "mt-12 grid gap-3 sm:grid-cols-2" : "mt-7 space-y-2"}`} aria-label={`Incluye ${service.title}`}>
                    {service.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-white/70"><Check className="mt-1 shrink-0 text-accent" size={15} strokeWidth={2} aria-hidden /><span>{point}</span></li>)}
                  </ul>
                  <Link href="#contacto" className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-8 text-sm font-semibold text-white transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Conocer el servicio <ArrowUpRight size={17} aria-hidden /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
