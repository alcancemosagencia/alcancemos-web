"use client";

import { useState } from "react";
import { Activity, Cpu, FileSearch, Layers, LineChart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  {
    number: "01",
    name: "Diagnóstico",
    description: "Mapeamos canales, procesos y puntos de fuga.",
    icon: FileSearch,
  },
  {
    number: "02",
    name: "Arquitectura",
    description: "Diseñamos el flujo comercial y la lógica de IA.",
    icon: Layers,
  },
  {
    number: "03",
    name: "Implementación",
    description: "Conectamos canales, automatizaciones y CRM.",
    icon: Cpu,
  },
  {
    number: "04",
    name: "Activación",
    description: "Probamos el sistema y lo ponemos en marcha.",
    icon: Activity,
  },
  {
    number: "05",
    name: "Optimización",
    description: "Medimos, ajustamos y mejoramos continuamente.",
    icon: LineChart,
  },
];

export function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="implementacion"
      className="relative scroll-mt-24 overflow-hidden bg-[#0F0F10] py-24 sm:py-32 border-t border-white/[0.06]"
    >
      {/* Anchor for proceso */}
      <span id="proceso" className="sr-only" />

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[150px]"
      />

      <Container className="max-w-[1200px]">
        {/* Header */}
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#161618] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11.5px] font-medium tracking-wide uppercase text-[#E4E4E7]">
              Sistema de Implementación
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#F4F4F6]">
            Diseñamos el sistema.{" "}
            <span className="text-[#F4F4F6]">Después lo ponemos a trabajar.</span>
          </h2>
        </Reveal>

        {/* 5 Stages Interactive Roadmap Grid */}
        <div className="mt-16 sm:mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isSelected = activeStage === index;

            return (
              <div
                key={stage.number}
                onClick={() => setActiveStage(index)}
                className={`group relative cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                  isSelected
                    ? "border-white/[0.2] bg-gradient-to-b from-[#1C1C20] to-[#141416] shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                    : "border-white/[0.06] bg-[#141416]/70 hover:border-white/[0.12] hover:bg-[#18181B]"
                }`}
              >
                {/* Active light top indicator */}
                {isSelected && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-px left-4 right-4 h-px bg-white/40"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono font-medium text-[#71717A]">
                      FASE {stage.number}
                    </span>
                    <div
                      className={`rounded-lg p-2 transition-colors ${
                        isSelected
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-white/[0.04] text-[#A1A1AA] group-hover:text-white"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-[17px] font-medium text-[#F4F4F6]">
                    {stage.name}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-[1.6] text-[#9E9CA8]">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
