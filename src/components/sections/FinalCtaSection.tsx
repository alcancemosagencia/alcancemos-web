"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLeadModal } from "@/context/LeadModalContext";

export function FinalCtaSection() {
  const { openLeadModal } = useLeadModal();

  return (
    <section
      id="contacto"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-[#0F0F10] py-24 sm:py-32 border-t border-white/[0.06]"
    >
      <Container className="max-w-[1200px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-gradient-to-b from-[#18181B] via-[#141416] to-[#0F0F10] p-8 sm:p-14 lg:p-18 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full bg-white/[0.02] blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-white/[0.01] blur-[120px]"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#161618] px-3.5 py-1.5 text-[11.5px] font-medium tracking-wide uppercase text-[#E4E4E7]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Instalación Comercial</span>
              </div>

              <h2
                id="final-cta-title"
                className="mt-6 text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[#F4F4F6]"
              >
                Tu empresa ya genera oportunidades.{" "}
                <span className="block text-[#F4F4F6]">Hagamos que ninguna se pierda.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] leading-[1.65] text-[#9E9CA8]">
                Conversemos sobre cómo funciona hoy tu proceso comercial y dónde podemos mejorarlo con una arquitectura conectada.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={() => openLeadModal("final_cta")}
                  size="large"
                  icon={<ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />}
                >
                  Hablemos
                </Button>

                <Button
                  href="#sistema"
                  size="large"
                  variant="secondary"
                  icon={<ArrowDown size={15} className="text-[#A1A1AA]" aria-hidden />}
                >
                  Ver cómo funciona
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
