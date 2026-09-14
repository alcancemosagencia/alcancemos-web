"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contactConfig } from "@/config/contact";
import { navigationItems } from "@/data/navigation";
import { useLeadModal } from "@/context/LeadModalContext";

const capabilities = [
  { label: "Adquisición cualificada", href: "#sistema" },
  { label: "Agentes IA conversacionales", href: "#sistema" },
  { label: "Seguimiento y cierre CRM", href: "#sistema" },
  { label: "Atribución comercial", href: "#casos" },
] as const;

export function Footer() {
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0B] pb-12 pt-20 text-[#E4E4E7] sm:pb-16 sm:pt-24 border-t border-white/[0.06]">
      <Container className="max-w-[1200px]">
        <div className="grid gap-12 border-b border-white/[0.06] pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pb-20">
          <div>
            <Image
              src="/brand/alcancemos-logo-light.png"
              alt="Alcancemos"
              width={2757}
              height={500}
              className="h-auto w-[150px] sm:w-[170px]"
            />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-[#9E9CA8]">
              Sistemas comerciales integrados con Inteligencia Artificial para empresas que exigen retornos y conversiones medibles.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => openLeadModal("footer")}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#FF0769] hover:underline underline-offset-4"
              >
                Solicitar evaluación de sistema →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Navegación">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/privacidad"
                className="transition hover:text-white"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="transition hover:text-white"
              >
                Términos
              </Link>
            </FooterColumn>

            <FooterColumn title="Sistema">
              {capabilities.map((cap) => (
                <Link
                  key={cap.label}
                  href={cap.href}
                  className="transition hover:text-white"
                >
                  {cap.label}
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title="Contacto" className="col-span-2 sm:col-span-1">
              {contactConfig.whatsappUrl ? (
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp directo
                </a>
              ) : null}
              {contactConfig.email ? (
                <a href={`mailto:${contactConfig.email}`} className="transition hover:text-white">
                  {contactConfig.email}
                </a>
              ) : null}
              <span className="text-[#71717A] text-[12px] mt-1">Santiago, Chile</span>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[12.5px] text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alcancemos Media SpA. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 text-[#71717A]">
            <Link href="/privacidad" className="hover:text-white transition">
              Política de Privacidad
            </Link>
            <span>•</span>
            <Link href="/terminos" className="hover:text-white transition">
              Términos de Servicio
            </Link>
          </div>
        </div>

        {/* Subtle bottom typography watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-12 sm:mt-16 text-center select-none opacity-[0.03] font-display font-bold text-[clamp(3.5rem,14vw,10.5rem)] tracking-wider leading-none text-white"
        >
          ALCANCEMOS
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[12px] font-mono uppercase tracking-wider text-[#A1A1AA]">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-2.5 text-[13px] text-[#9E9CA8]">
        {children}
      </div>
    </div>
  );
}
