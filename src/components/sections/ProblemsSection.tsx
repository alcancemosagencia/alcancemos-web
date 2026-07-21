import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/data/problems";

export function ProblemsSection() {
  return (
    <section id="problemas" className="growth-problems scroll-mt-24">
      <Container className="max-w-[1328px]">
        <Reveal className="growth-problems__heading">
          <p>El problema</p>
          <h2>Tu empresa no necesita <em>más herramientas.</em><span>Necesita un sistema<i>.</i></span></h2>
          <div className="growth-problems__intro">
            <p>La mayoría de las empresas no deja de crecer por falta de publicidad.</p>
            <p>Deja de crecer porque sus procesos comerciales están desconectados.</p>
          </div>
        </Reveal>

        <div className="growth-problems__grid">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.06} className={problem.visualClass}>
              <article className="growth-problem-card">
                <div className="growth-problem-card__emoji" aria-hidden="true">{problem.emoji}</div>
                <div>
                  <h3>{problem.title}</h3>
                  {problem.description ? <p>{problem.description}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="growth-problems__transition" delay={0.24}>
          <span>El problema no es una pieza aislada.</span>
          <p>Por eso el crecimiento necesita un sistema conectado.</p>
        </Reveal>
      </Container>
    </section>
  );
}
