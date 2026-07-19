import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/data/problems";

export function ProblemsSection() {
  return (
    <section id="problemas" className="scroll-mt-28 border-y border-border bg-white/55 py-[var(--section-spacing)]">
      <Container>
        <SectionHeading
          eyebrow="¿Te pasa esto?"
          title="Invertir en publicidad no debería sentirse como apostar."
          highlight="sentirse como apostar"
          description="Muchas empresas invierten sin una estrategia clara, reciben consultas que no convierten o dependen de campañas que no pueden medir ni escalar."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-16">
          {problems.map((problem, index) => (
            <Reveal key={problem.number} delay={index * 0.06}>
              <article className="group relative min-h-full overflow-hidden rounded-brand border border-border bg-card p-6 shadow-[0_18px_60px_rgba(4,1,18,0.035)] transition duration-300 hover:-translate-y-1 hover:border-heading/10 hover:shadow-[0_24px_70px_rgba(4,1,18,0.07)] sm:p-8">
                {index === 1 ? <span aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-accent/[0.06] transition-transform duration-300 group-hover:scale-110" /> : null}
                <div className="relative flex items-start gap-5 sm:gap-7">
                  <span className="font-display text-3xl font-medium italic leading-none text-accent sm:text-4xl">{problem.number}</span>
                  <div>
                    <h3 className="text-balance text-xl font-semibold leading-snug tracking-[-0.03em] text-heading sm:text-2xl">{problem.title}</h3>
                    <p className="mt-4 leading-7 text-muted">{problem.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
