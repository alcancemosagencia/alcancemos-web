"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { resultCases } from "@/data/cases";

export function CasesSection() {
  return (
    <section
      id="casos"
      className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0B] py-24 sm:py-32 border-t border-white/[0.06]"
    >
      {/* Anchor for resultados */}
      <span id="resultados" className="sr-only" />

      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-white/[0.015] blur-[140px]"
      />

      <Container className="max-w-[1200px]">
        {/* Editorial Header */}
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span className="text-[11.5px] font-semibold tracking-wider uppercase text-[#E4E4E7]">
              RESULTADOS
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F4F4F6]">
            Más empresas.
            <br />
            Más ventas.
          </h2>

          <p className="mt-5 max-w-[620px] mx-auto text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.6] text-[#9E9CA8]">
            Resultados reales con nuestro sistema completo de adquisición, conversación y seguimiento.
          </p>
        </Reveal>

        {/* 3-CARD RESULTS GRID */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {resultCases.map((c, i) => (
            <Reveal key={c.id} delay={0.1 * (i + 1)} className="h-full">
              <article className="group relative flex h-full flex-col justify-between rounded-[24px] border border-white/[0.08] bg-[#121214]/90 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-[#151518] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                {/* Top Row: Client Info & Trending Indicator */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 items-center justify-center shrink-0">
                      <Image
                        src={c.logo}
                        alt={`Logo de ${c.company}`}
                        width={c.logoWidth}
                        height={c.logoHeight}
                        className="h-8 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] sm:text-[16px] font-medium tracking-tight text-[#F4F4F6]">
                        {c.company}
                      </h3>
                      <span className="text-[12px] text-[#71717A]">
                        {c.industry}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex shrink-0 text-emerald-400 pt-1"
                    aria-label="Resultados comerciales"
                  >
                    <TrendingUp size={20} strokeWidth={2} />
                  </div>
                </div>

                {/* Metrics Area */}
                <div className="my-8 sm:my-10">
                  {c.metrics.length === 1 ? (
                    <div>
                      <div className="font-display text-[clamp(2.75rem,3.8vw,3.5rem)] font-medium leading-none tracking-tight text-[#F4F4F6]">
                        {c.metrics[0].value}
                      </div>
                      <div className="mt-2 text-[12px] font-medium uppercase tracking-wider text-[#71717A]">
                        {c.metrics[0].label}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
                      <div>
                        <div className="font-display text-[clamp(2rem,2.6vw,2.75rem)] font-medium leading-none tracking-tight text-[#F4F4F6]">
                          {c.metrics[0].value}
                        </div>
                        <div className="mt-2 text-[11.5px] font-medium uppercase tracking-wider text-[#71717A] line-clamp-2">
                          {c.metrics[0].label}
                        </div>
                      </div>
                      <div className="h-10 w-px bg-white/[0.08]" aria-hidden="true" />
                      <div>
                        <div className="font-display text-[clamp(2rem,2.6vw,2.75rem)] font-medium leading-none tracking-tight text-[#F4F4F6]">
                          {c.metrics[1].value}
                        </div>
                        <div className="mt-2 text-[11.5px] font-medium uppercase tracking-wider text-[#71717A] line-clamp-2">
                          {c.metrics[1].label}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Phrase */}
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-[13px] font-medium text-[#9E9CA8]">
                    {c.phrase}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM CTA: Editorial link to /resultados */}
        <Reveal delay={0.4} className="mt-12 sm:mt-14 text-center">
          <Link
            href="/resultados"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-[#141416]/80 px-6 py-3 text-[13.5px] font-medium text-[#E4E4E7] shadow-[0_2px_12px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-200 hover:border-white/[0.2] hover:bg-[#1A1A1E] hover:text-white"
          >
            <span>Ver más resultados</span>
            <ArrowRight size={15} className="text-[#9E9CA8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
