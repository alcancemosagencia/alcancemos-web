import Image from "next/image";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

const stages = [
  { name: "Diagnóstico", text: "Identificamos puntos de fuga y cuellos de botella en tu proceso comercial.", file: "Diagnostico.png", kind: "diagnostic" },
  { name: "Arquitectura", text: "Diseñamos el flujo comercial, los criterios de calificación y las reglas de IA.", file: "Arquitectura.png", kind: "architecture" },
  { name: "Implementación", text: "Conectamos canales publicitarios, WhatsApp API, agentes inteligentes y tu CRM.", file: "Implementación.png", kind: "implementation" },
  { name: "Activación", text: "Probamos y calibramos el sistema con tu equipo antes de ponerlo en marcha.", file: "Activación.png", kind: "activation" },
  { name: "Optimización", text: "Optimizamos conversión, costos de adquisición y rendimiento de los modelos con datos reales.", file: "Optimización.png", kind: "optimization" },
] as const;

export function ProcessSection() {
  return <section id="proceso" className="v3-process"><span id="implementacion" />
    <FidelityHeading label="Procesos">Como instalamos el<br />sistema en <em>tu empresa</em></FidelityHeading>
    <div className="v3-process-grid">{stages.map(stage => <article key={stage.kind} className={"v3-stage v3-stage-" + stage.kind}><Image src={"/assets/v3/process/" + stage.file} width={1254} height={1254} sizes={stage.kind === "diagnostic" ? "380px" : "180px"} alt="" /><div><h3>{stage.name}</h3><p>{stage.text}</p></div></article>)}</div>
  </section>;
}
