import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { services } from "@/data/services";

const accentStyles = ["left-7 w-16", "left-1/2 w-20 -translate-x-1/2", "right-7 w-12"] as const;

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-28 py-[var(--section-spacing)]">
      <Container>
        <div className="relative max-w-4xl">
          <SectionHeading
            eyebrow="Lo que hacemos"
            title="Un sistema completo para atraer, convertir y crecer."
            highlight="atraer, convertir y crecer"
            description="No ejecutamos piezas aisladas. Diseñamos una estrategia conectada entre publicidad, páginas y medición para transformar inversión en oportunidades reales de venta."
          />
          <DecorativeEmoji src="/decorations/target-3d.webp" size="md" rotate={-4} className="absolute right-0 top-8 hidden sm:inline-flex" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} className={index === 2 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <article className="group relative flex min-h-full flex-col overflow-hidden rounded-brand border border-border bg-card p-7 shadow-[0_20px_70px_rgba(4,1,18,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(4,1,18,0.08)] sm:p-8">
                <span aria-hidden="true" className={`absolute top-0 h-1 rounded-b-full bg-accent ${accentStyles[index]}`} />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Servicio {service.number}</span>
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent/30 transition-colors duration-300 group-hover:bg-accent" />
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.description}</p>
                <ul className="mt-7 space-y-3" aria-label={`Incluye ${service.title}`}>
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-heading/80">
                      <Check className="mt-1 shrink-0 text-accent" size={15} strokeWidth={2} aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contacto" className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-heading transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  Conocer el servicio <ArrowUpRight size={17} aria-hidden />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
