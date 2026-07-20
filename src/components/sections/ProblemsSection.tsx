import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/data/problems";

export function ProblemsSection() {
  return (
    <section id="problemas" className="scroll-mt-28 bg-white pb-[clamp(7rem,12vw,11rem)] pt-[clamp(8rem,14vw,13rem)]">
      <Container>
        <SectionHeading eyebrow="¿Te pasa esto?" title="Invertir en publicidad no debería sentirse como apostar." highlight="sentirse como apostar" description="Muchas empresas invierten sin una estrategia clara, reciben consultas que no convierten o dependen de campañas que no pueden medir ni escalar." />
        <div className="mt-[4.5rem] lg:mt-28">
          {problems.map((problem, index) => (
            <Reveal key={problem.number} delay={index * 0.06} className={index === 0 ? "md:w-[91%]" : index === 1 ? "md:ml-auto md:w-[73%]" : index === 2 ? "md:ml-[7%] md:w-[82%]" : "md:ml-auto md:w-[88%]"}>
              <article className={`relative border-t border-heading/[0.16] ${index === 0 ? "pb-14 pt-11 md:grid md:grid-cols-[0.72fr_1.28fr] md:gap-20" : index === 1 ? "py-14 md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-16" : index === 2 ? "py-12 md:grid md:grid-cols-[0.86fr_1.14fr] md:gap-24" : "pb-4 pt-16 md:grid md:grid-cols-[1.3fr_0.7fr] md:gap-16"}`}>
                <div className={index % 2 ? "md:order-2" : ""}>
                  <span className="font-display text-3xl font-medium italic leading-none text-accent/70 sm:text-4xl">{problem.number}</span>
                  <h3 className={`mt-4 max-w-2xl text-balance font-semibold leading-[1.02] tracking-[-0.045em] text-heading ${index === 0 || index === 3 ? "text-3xl sm:text-5xl" : "text-2xl sm:text-4xl"}`}>{problem.title}</h3>
                </div>
                <p className={`mt-6 max-w-md self-end leading-7 text-muted md:mt-0 ${index % 2 ? "md:order-1" : "md:justify-self-end"}`}>{problem.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
