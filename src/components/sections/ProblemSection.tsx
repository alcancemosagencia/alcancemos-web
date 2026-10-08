import Image from "next/image";
import { FidelityHeading } from "@/components/ui/FidelityHeading";

export function ProblemSection() {
  return <section id="problema" className="v3-problem">
    <FidelityHeading label="El problema" description={<>El contexto se pierde, el seguimiento se rompe<br />y cada oportunidad depende de tareas manuales</>}>Tus herramientas pueden<br />funcionar. <span>El problema es cuando<br />no funcionan juntas.</span></FidelityHeading>
    <figure className="v3-problem-render"><Image src="/assets/v3/problem/problem.png" width={2172} height={724} sizes="1100px" alt="Marketing, WhatsApp, Ventas y CRM desconectados: leads sin contexto, oportunidades que se enfrían e información dispersa." /><figcaption className="sr-only">Marketing: canales aislados, Ads, Redes sociales, Email. WhatsApp: conversaciones sin contexto, Consultas, Interés, Soporte. Ventas: seguimiento manual, Tareas, Recordatorios, Notas. CRM: datos desconectados, Contactos, Oportunidades, Reportes.</figcaption></figure>
  </section>;
}
