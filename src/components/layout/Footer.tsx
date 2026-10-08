import Image from "next/image";
import Link from "next/link";
import { contactConfig } from "@/config/contact";
import { LeadCta } from "@/components/ui/LeadCta";

export function Footer() {
  return <footer className="v3-footer"><div className="v3-footer-panel"><div className="v3-footer-columns">
    <div className="v3-footer-brand"><Image src="/assets/v3/branding/alcancemos-logo-dark.png" width={2757} height={500} sizes="235px" alt="Alcancemos" /><p>Sistemas comerciales integrados<br />con Inteligencia Artificial</p></div>
    <nav aria-label="Navegación del pie"><h2>Navegación</h2><Link href="/#sistema">Sistemas</Link><Link href="/#casos">Resultados</Link><Link href="/#proceso">Procesos</Link><Link href="/#faq">Preguntas<br />Frecuentes</Link></nav>
    <nav aria-label="Componentes del sistema"><h2>Sistema</h2><Link href="/#capacidades">Anuncios</Link><Link href="/#capacidades">Página web</Link><Link href="/#sistema">WhatsApp</Link><Link href="/#capacidades">Contenido</Link></nav>
    <div className="v3-footer-contact"><h2>Contacto</h2>{contactConfig.whatsappUrl ? <a href={contactConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp directo</a> : <LeadCta source="footer" label="WhatsApp directo" textOnly />}<a href={"mailto:" + contactConfig.email}>{contactConfig.email}</a><p>Santiago, Chile</p></div>
  </div><div className="v3-footer-bottom"><p>© {new Date().getFullYear()} Alcancemos Media SpA. Todos los derechos reservados.</p><div><Link href="/privacidad">Política de Privacidad</Link><span aria-hidden="true">·</span><Link href="/terminos">Términos de Servicio</Link></div></div></div><div className="v3-wordmark" aria-hidden="true">Alcancemos</div></footer>;
}
