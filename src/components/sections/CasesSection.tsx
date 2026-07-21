import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, type CaseStudy } from "@/data/cases";

function EvidenceCase({ caseStudy }: { caseStudy: CaseStudy }) {
  const investment = caseStudy.result.highlights?.find((metric) => metric.label.toLowerCase().includes("inversión"))?.value.replace(" CLP", "") ?? "—";
  const sales = caseStudy.result.highlights?.find((metric) => metric.label.toLowerCase().includes("ventas"))?.value.replace(" CLP", "") ?? "—";
  const roas = caseStudy.metrics.find((metric) => metric.label === "ROAS")?.value.replace(/x$/i, "") ?? "—";

  return (
    <Reveal>
      <article id={`caso-${caseStudy.id}`} className="evidence-case">
        <div className="evidence-case__identity">
          <div className="evidence-case__logo">
            <Image src={caseStudy.logo} alt={`Logo de ${caseStudy.company}`} width={caseStudy.logoWidth} height={caseStudy.logoHeight} sizes="190px" />
          </div>
          <div>
            <h3>{caseStudy.company}</h3>
            <p>{caseStudy.industry}</p>
            <span>{caseStudy.period}</span>
          </div>
        </div>

        <div className="evidence-case__roas">
          <strong>{roas}<i>×</i></strong>
          <span>ROAS</span>
        </div>

        <div className="evidence-case__movement" aria-label={`${investment} de inversión generaron ${sales} en ventas`}>
          <div><span>Inversión</span><strong>{investment}</strong></div>
          <i aria-hidden="true">↓</i>
          <div><span>Ventas</span><strong>{sales}</strong></div>
        </div>

        <div className="evidence-case__action"><span>Ver caso completo</span><i aria-hidden="true">→</i></div>
      </article>
    </Reveal>
  );
}

export function CasesSection() {
  const cases = caseStudies.filter((caseStudy) => caseStudy.authorized && !caseStudy.placeholder);

  return (
    <section id="casos" className="case-evidence-section scroll-mt-24">
      <Container className="max-w-[1328px]">
        <Reveal className="case-evidence-section__heading">
          <p>Resultados</p>
          <h2>Resultados que hablan <em>por sí solos</em><i>.</i></h2>
          <div><span>No prometemos crecimiento.</span><strong>Lo demostramos con datos.</strong></div>
        </Reveal>

        <div className="case-evidence-section__list">
          {cases.map((caseStudy) => <EvidenceCase key={caseStudy.id} caseStudy={caseStudy} />)}
        </div>
      </Container>
    </section>
  );
}
