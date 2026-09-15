"use client";

import { useState } from "react";
import { Bot, Database, Target } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    id: "acquisition",
    number: "01",
    title: "Adquisición cualificada",
    description: "Meta Ads orientado a demanda con intención real.",
    icon: Target,
  },
  {
    id: "ai-agents",
    number: "02",
    title: "IA + Conversación",
    description: "Responde, califica y hace avanzar cada oportunidad.",
    icon: Bot,
  },
  {
    id: "crm-closing",
    number: "03",
    title: "Seguimiento en CRM",
    description: "Centraliza oportunidades y mantiene el seguimiento activo.",
    icon: Database,
  },
];

export function EcosystemSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="sistema"
      className="relative overflow-hidden bg-[#0F0F10] py-24 sm:py-32 border-t border-white/[0.06]"
    >
      {/* Anchor for backward compatibility */}
      <span id="ecosistema" className="sr-only" />

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[150px]"
      />

      <Container className="max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#161618] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11.5px] font-medium tracking-wide uppercase text-[#E4E4E7]">
                Cómo funciona el sistema
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F4F4F6]">
              De un lead a una venta.{" "}
              <span className="text-[#F4F4F6]">Todo conectado.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.65] text-[#9E9CA8]">
              Un sistema conecta adquisición, conversación y seguimiento.
            </p>
          </Reveal>
        </div>

        {/* 3 Capabilities Grid */}
        <div className="mt-16 sm:mt-20 grid gap-6 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeTab === index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`group relative cursor-pointer rounded-[24px] border p-6 sm:p-8 transition-all duration-300 ${
                  isSelected
                    ? "border-white/[0.18] bg-gradient-to-b from-[#1C1C20] to-[#141416] shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                    : "border-white/[0.06] bg-[#141416]/60 hover:border-white/[0.12] hover:bg-[#18181B]"
                }`}
              >
                {/* Active Indicator Top Light */}
                {isSelected && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono font-medium text-[#71717A]">
                    {item.number}
                  </span>
                  <div className={`rounded-xl border p-2.5 ${isSelected ? "border-white/20 bg-white/10 text-white" : "border-white/[0.08] bg-white/[0.03] text-[#A1A1AA]"}`}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="mt-5 text-[20px] sm:text-[22px] font-medium leading-[1.2] text-[#F4F4F6]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#9E9CA8]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live System Pipeline Showcase */}
        <div className="mt-8 rounded-[24px] border border-white/[0.08] bg-[#141416] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                Arquitectura de flujo continuo
              </span>
              <h4 className="text-[17px] font-medium text-[#F4F4F6]">
                Circuito de conversión comercial
              </h4>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[12px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Flujo automatizado
            </div>
          </div>

          {/* Pipeline Steps Flow */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/[0.06] bg-[#1A1A1D]/80 p-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>PASO 01</span>
                <span className="text-[#E4E4E7]">META ADS</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-[#F4F4F6]">
                Captación
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#1A1A1D]/80 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>PASO 02</span>
                <span className="text-[#FF0769]">AGENTE IA</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-[#F4F4F6]">
                Calificación
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-[#1A1A1D]/80 p-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>PASO 03</span>
                <span className="text-[#E4E4E7]">CRM</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-[#F4F4F6]">
                Seguimiento
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-[#1A1A1D]/80 p-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>PASO 04</span>
                <span className="text-emerald-400">REVENUE</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-[#F4F4F6]">
                Venta + medición
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
