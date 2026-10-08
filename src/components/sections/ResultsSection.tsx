import Image from "next/image";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

const evidence = [
  { id: "casa-telas", name: "CASA & TELAS", value: "26.35x ROAS", period: "MAYO / JULIO 2025" },
  { id: "golds-gym", name: "GOLD’S GYM", value: "150 SUSCRIPCIONES", period: "SEPTIEMBRE 2026" },
  { id: "sevenpos", name: "SEVEN POS SOFTWARE", value: "+100 SUSCRIPCIONES", period: "1ER DÍA DE LANZAMIENTO" },
] as const;

export function ResultsSection() {
  return <section id="resultados" className="v3-results"><span id="casos" />
    <div className="v3-result-orbits" aria-hidden="true"><i /><i /><i /></div>
    <div className="v3-results-content">
      <FidelityHeading label="Resultados">Evidencia de nuestro<br />sistema en <em>operación</em></FidelityHeading>
      <ul className="v3-result-list">{evidence.map(item => <li key={item.id}><div className="v3-case-logo"><Image src={"/assets/v3/cases/" + item.id + "-logo.png"} alt={"Logo de " + item.name} width={11811} height={11811} sizes="120px" /></div><div className="v3-case-copy"><h3>{item.name}</h3><p>{item.value}<br />{item.period}</p></div></li>)}</ul>
    </div>
  </section>;
}
