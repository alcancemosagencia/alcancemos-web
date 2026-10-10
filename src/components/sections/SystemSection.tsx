import Image from "next/image";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

export function SystemSection() {
  return <section id="sistema" className="v3-system">
    <ul className="v3-service-tags" aria-label="Componentes del sistema">{["Landing Pages", "Agentes IA", "Automatización", "Calificación IA", "Sitio Web"].map(item => <li key={item}>{item}</li>)}</ul>
    <FidelityHeading wordReveal label="El sistema" description={<>Diseñamos la arquitectura y automatización<br />de los puntos críticos</>}>Conectamos las piezas<br /><em>de tu proceso comercial</em></FidelityHeading>
    <figure className="v3-system-render"><Image src="/assets/v3/system/system.png" width={2048} height={768} sizes="900px" alt="Ads, Contenido, Web y WhatsApp conectados al Sistema Alcancemos, que organiza CRM, Equipo y Venta." /><figcaption><div><h3>Entrada</h3><p>Atrae oportunidades</p></div><div><h3>Sistema Alcancemos</h3><p>Organiza, conecta y automatiza</p></div><div><h3>Resultado</h3><p>Más oportunidades en ventas.</p></div></figcaption></figure>
  </section>;
}
