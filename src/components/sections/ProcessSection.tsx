import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="proceso" className="scroll-mt-28 border-y border-border bg-white pb-[clamp(8rem,13vw,12rem)] pt-[clamp(7rem,11vw,10rem)]">
      <Container>
        <SectionHeading eyebrow="Cómo trabajamos" title="Una metodología clara desde la estrategia hasta los resultados." highlight="hasta los resultados" description="Cada proyecto sigue un proceso simple, colaborativo y medible para reducir improvisaciones y avanzar con objetivos definidos." />
        <div className="relative mt-20 lg:mt-32">
          <span aria-hidden className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-heading/10 lg:block" />
          <ol className="space-y-4 sm:space-y-7 lg:space-y-0">
            {processSteps.map((step, index) => (
              <li key={step.number} className={`relative lg:flex ${index % 2 ? "lg:justify-end lg:pt-10" : index === 2 ? "lg:-mt-3 lg:justify-start" : "lg:justify-start"}`}>
                <span aria-hidden className={`absolute left-1/2 z-10 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-accent lg:block ${index % 2 ? "top-24" : "top-16"}`} />
                <Reveal delay={index * 0.08} className={`w-full lg:w-[43%] ${index % 2 ? "lg:ml-auto" : ""}`}>
                  <article className={`grid grid-cols-[64px_1fr] gap-5 border-t border-heading/[0.16] py-9 lg:grid-cols-[90px_1fr] lg:gap-8 ${index % 2 ? "lg:pb-16 lg:pr-8 lg:pt-14" : "lg:pb-20 lg:pl-8 lg:pt-14"}`}>
                    <div className="font-display text-5xl font-medium italic leading-none text-accent/65 lg:text-7xl">{step.number}</div>
                    <div className="pt-1"><h3 className="text-xl font-semibold tracking-[-0.03em] text-heading lg:text-3xl">{step.title}</h3><p className="mt-3 leading-7 text-muted">{step.description}</p></div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <Reveal delay={0.12} className="mt-14 lg:mt-20"><p className="mx-auto max-w-xl border-l-2 border-accent pl-5 text-lg font-medium leading-8 text-heading/70">Sabes qué estamos haciendo, por qué lo hacemos y qué sigue después.</p></Reveal>
      </Container>
    </section>
  );
}
