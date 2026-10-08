import Image from "next/image";
import { LeadCta } from "@/components/ui/LeadCta";

export function HeroSection() {
  return (
    <section id="inicio" className="v3-hero">
      <div className="v3-hero-copy">
        <h1>Construimos sistemas<br />comerciales para convertir<br /><em>oportunidades en ventas</em></h1>
        <p>Conectamos adquisición, conversación, IA, automatización y<br />seguimiento comercial en un sistema diseñado para crecer</p>
        <div className="v3-hero-actions">
          <LeadCta source="hero_cta" label="Agendar evaluación" direction="right" />
          <a className="v3-secondary" href="#sistema"><span aria-hidden="true">▶</span>Ver cómo funciona</a>
        </div>
      </div>
      <figure className="v3-crm"><Image src="/assets/v3/hero/gráfica de CRM.png" alt="Interfaz del sistema Alcancemos: leads, conversación, calificación IA y CRM con seguimiento." width={1266} height={610} sizes="1010px" priority unoptimized /></figure>
    </section>
  );
}
