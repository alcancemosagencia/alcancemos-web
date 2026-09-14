"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroCase } from "@/data/cases";

export function CasesSection() {
  return (
    <section
      id="casos"
      className="relative scroll-mt-24 overflow-hidden bg-[#0F0F10] py-24 sm:py-32 border-t border-white/[0.06]"
    >
      {/* Anchor for resultados */}
      <span id="resultados" className="sr-only" />

      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-white/[0.015] blur-[140px]"
      />

      <Container className="max-w-[1200px]">
        {/* Editorial Header */}
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#161618] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11.5px] font-medium tracking-wide uppercase text-[#E4E4E7]">
              Evidencia Comercial
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F4F4F6]">
            Los sistemas se miden por resultados.
          </h2>

          <p className="mt-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.65] text-[#9E9CA8]">
            Caso real con datos comerciales autorizados para publicación.
          </p>
        </Reveal>

        {/* HERO CASE LEDGER: CASA & TELAS */}
        <Reveal delay={0.15} className="mt-16 sm:mt-20 max-w-[1040px] mx-auto">
          <article className="relative rounded-[28px] sm:rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#18181B]/90 via-[#141416]/95 to-[#0F0F10] p-6 sm:p-10 lg:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
            {/* Top Row: Client Brand & Period */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-6 sm:pb-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-32 sm:h-12 sm:w-40 overflow-hidden">
                  <Image
                    src={heroCase.logo}
                    alt={`Logo de ${heroCase.company}`}
                    width={heroCase.logoWidth}
                    height={heroCase.logoHeight}
                    className="h-full w-full object-contain object-left invert"
                    priority
                  />
                </div>
                <div className="border-l border-white/[0.08] pl-4">
                  <h3 className="text-[16px] sm:text-[18px] font-medium tracking-tight text-[#F4F4F6]">
                    {heroCase.company}
                  </h3>
                  <span className="text-[12px] text-[#71717A]">
                    {heroCase.industry}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#161618] px-3.5 py-1.5 text-[12px] font-medium text-[#A1A1AA]">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Periodo:</span>
                <strong className="font-semibold text-[#E4E4E7]">{heroCase.period}</strong>
              </div>
            </div>

            {/* Central Block: Massive ROAS Highlight */}
            <div className="my-10 sm:my-14 text-center">
              <span className="block text-[12px] sm:text-[13px] font-medium tracking-wider uppercase text-[#71717A]">
                Retorno sobre inversión publicitaria
              </span>
              <div className="mt-3 font-display text-[clamp(4.5rem,10vw,8rem)] font-medium leading-none tracking-tight text-[#F4F4F6]">
                {heroCase.roas}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-emerald-400">
                <TrendingUp size={15} /> ROAS comercial atribuible
              </span>
            </div>

            {/* Financial Ledger Grid: Inversión vs Ventas */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] sm:items-center border-t border-white/[0.06] pt-8">
              {/* Inversión */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#1A1A1D]/70 p-5 text-left">
                <span className="block text-[12px] font-medium text-[#71717A]">
                  Inversión publicitaria gestionada
                </span>
                <strong className="mt-1.5 block text-[20px] sm:text-[22px] font-medium tracking-tight text-[#E4E4E7]">
                  {heroCase.investment}
                </strong>
              </div>

              {/* Desktop Transition Arrow */}
              <div className="hidden lg:flex items-center justify-center px-2 text-white/20">
                <ArrowRight size={20} />
              </div>

              {/* Ventas Generadas */}
              <div className="rounded-2xl border border-white/[0.12] bg-[#1A1A1D] p-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <span className="block text-[12px] font-medium text-[#71717A]">
                  Facturación comercial atribuible
                </span>
                <strong className="mt-1.5 block text-[22px] sm:text-[26px] font-semibold tracking-tight text-[#F4F4F6]">
                  {heroCase.revenue}
                </strong>
              </div>
            </div>

            {/* Context & Mechanism */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/[0.06] pt-5 text-left text-[13px] text-[#9E9CA8]">
              <p className="max-w-2xl">
                <span className="font-medium text-[#E4E4E7]">Mecanismo instalado: </span>
                {heroCase.contextSummary}
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-[12px] shrink-0 font-medium">
                <CheckCircle2 size={14} />
                <span>Datos comerciales autorizados</span>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
