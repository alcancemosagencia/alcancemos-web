import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="proceso" className="ecosystem-workflow scroll-mt-24">
      <Container className="max-w-[1328px]">
        <Reveal className="ecosystem-workflow__heading">
          <p>Nuestro método</p>
          <h2>Cinco piezas.<span>Un solo <em>sistema</em><i>.</i></span></h2>
          <div>Cada etapa alimenta la siguiente para construir un crecimiento comercial sostenible.</div>
        </Reveal>

        <div className="workflow-path">
          <svg viewBox="0 0 1100 940" preserveAspectRatio="none" aria-hidden="true">
            <path d="M300 95 C520 95 505 260 760 260 S885 430 590 440 S300 600 470 620 S820 740 690 850" />
          </svg>
          <ol>
            {processSteps.map((step, index) => (
              <li key={step.number} className={step.visualClass}>
                <Reveal delay={index * 0.08}>
                  <article className="workflow-step">
                    <div className="workflow-step__marker"><span>{step.emoji}</span><i>{step.number}</i></div>
                    <div><h3>{step.title}</h3><p>{step.description}</p></div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="workflow-result" delay={0.3}>
          <p>El resultado no es una campaña.</p>
          <h3>Es un sistema comercial que sigue creciendo incluso mientras tú trabajas en tu empresa<i>.</i></h3>
        </Reveal>
      </Container>
    </section>
  );
}
