import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="proceso" className="scroll-mt-28 border-t border-border bg-white/55 py-[var(--section-spacing)]">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Una metodología clara desde la estrategia hasta los resultados."
          highlight="hasta los resultados"
          description="Cada proyecto sigue un proceso simple, colaborativo y medible para reducir improvisaciones y avanzar con objetivos definidos."
        />
        <div className="relative mt-14 lg:mt-20">
          <div aria-hidden="true" className="absolute bottom-0 left-[23px] top-0 w-px bg-border lg:bottom-auto lg:left-0 lg:right-0 lg:top-8 lg:h-px lg:w-auto" />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * 0.08}>
                  <article className="relative grid grid-cols-[48px_1fr] gap-5 lg:block">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-background font-display text-xl font-medium italic text-accent shadow-[0_12px_30px_rgba(255,7,105,0.08)] lg:h-16 lg:w-16 lg:text-2xl">{step.number}</div>
                    <div className="pt-1 lg:pt-8">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-heading lg:text-2xl">{step.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{step.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <Reveal delay={0.12} className="mt-14 lg:mt-16">
          <p className="border-l-2 border-accent pl-5 text-sm font-medium leading-6 text-heading/70 sm:text-base">Sabes qué estamos haciendo, por qué lo hacemos y qué sigue después.</p>
        </Reveal>
      </Container>
    </section>
  );
}
