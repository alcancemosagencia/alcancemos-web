import Image from "next/image";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

const capabilities = [
  { title: "Adquisición", text: "Generamos y capturamos demanda en los canales adecuados.", file: "Adquisición.png", width: 1254, height: 1254, kind: "acquisition", alt: "Ads, landing y contenido alimentan un embudo que genera oportunidades." },
  { title: "Conversación", text: "Conectamos conversaciones y contexto comercial en los canales directos.", file: "Conversación.png", width: 1254, height: 1254, kind: "conversation", alt: "WhatsApp, mensaje, respuesta y lead conectados." },
  { title: "Inteligencia Artificial", text: "Agentes que pueden participar en tareas del proceso comercial.", file: "Inteligencia Artificial.png", width: 1983, height: 793, kind: "ai", alt: "Un lead pasa por IA y un filtro de calificación." },
  { title: "CRM + Seguimiento", text: "CRM, responsables y operación comercial conectados.", file: "crm-seguimiento.png", width: 2172, height: 724, kind: "crm", alt: "Una oportunidad en CRM se conecta con seguimiento, asignación y pipeline." },
  { title: "Venta + Medición", text: "Medimos el rendimiento del sistema para decidir con datos reales.", file: "ventas-medición.png", width: 2172, height: 724, kind: "sales", alt: "Oportunidad, venta, medición de ROAS y resultado." },
] as const;

export function CapabilitiesSection() {
  return <section id="capacidades" className="v3-capabilities">
    <FidelityHeading label="Qué implementamos">La infraestructura depende de<br />lo que tu empresa necesita.</FidelityHeading>
    <div className="v3-capability-grid">{capabilities.map(item => <article key={item.kind} className={"v3-capability v3-capability-" + item.kind}><figure><Image src={"/assets/v3/capabilities/" + item.file} width={item.width} height={item.height} sizes={item.kind === "crm" || item.kind === "sales" ? "550px" : "360px"} alt={item.alt} /></figure><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
  </section>;
}
