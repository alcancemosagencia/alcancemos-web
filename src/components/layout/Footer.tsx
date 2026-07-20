import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contactConfig } from "@/config/contact";
import { navigationItems } from "@/data/navigation";

const footerServices = ["Meta Ads", "Google Ads", "Landing Pages"] as const;

export function Footer() {
  return (
    <footer className="bg-heading pb-16 pt-14 text-background sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid gap-16 border-b border-white/[0.08] pb-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-28 lg:pb-24">
          <div>
            <Image src="/brand/alcancemos-logo-light.png" alt="Alcancemos" width={2757} height={500} className="h-auto w-[220px] sm:w-[260px]" />
            <h2 className="mt-11 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.048em] sm:text-5xl">Alcancemos lo que <em className="font-display font-medium italic">Tú Competencia</em> no puede</h2>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Navegación">{navigationItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{item.label}</Link>)}</FooterColumn>
            <FooterColumn title="Servicios">{footerServices.map((service) => <span key={service}>{service}</span>)}</FooterColumn>
            <FooterColumn title="Contacto" className="col-span-2 sm:col-span-1">
              {contactConfig.whatsappUrl ? <a href={contactConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a> : <span>WhatsApp · Próximamente</span>}
              {contactConfig.email ? <a href={`mailto:${contactConfig.email}`}>Correo</a> : <span>Correo · Próximamente</span>}
            </FooterColumn>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-9 text-sm text-white/42 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Alcancemos Media SpA. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4"><span>Política de privacidad · Próximamente</span><span>Términos y condiciones · Próximamente</span></div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) { return <div className={className}><h3 className="text-sm font-semibold text-white">{title}</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/55">{children}</div></div>; }
