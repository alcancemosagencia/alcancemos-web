"use client";

import { ArrowDown, ArrowUpRight, CheckCircle2, Cpu, Activity } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLeadModal } from "@/context/LeadModalContext";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { openLeadModal } = useLeadModal();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0F0F10] pb-20 pt-[115px] sm:pb-28 sm:pt-[140px] lg:pb-36 lg:pt-[160px]"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-white/[0.02] blur-[140px]"
      />

      <Container className="max-w-[1200px]">
        {/* Encabezado Principal Centrado */}
        <div className="mx-auto max-w-[880px] text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#161618]/80 px-3.5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11.5px] font-medium tracking-wide uppercase text-[#E4E4E7]">
                Sistemas Comerciales + IA
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-[#F4F4F6]">
              No te faltan leads.
              <span className="mt-1 block text-[#F4F4F6]">
                Te falta un sistema comercial.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-[620px] text-[clamp(1.05rem,1.3vw,1.2rem)] font-normal leading-[1.65] text-[#9E9CA8]">
              Conectamos adquisición, Inteligencia Artificial y seguimiento para convertir oportunidades en ventas medibles.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
              <Button
                onClick={() => openLeadModal("hero_cta")}
                size="large"
                icon={<ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />}
              >
                Hablemos
              </Button>

              <Button
                href="#sistema"
                size="large"
                variant="secondary"
                icon={<ArrowDown size={15} strokeWidth={2} className="text-[#A1A1AA]" aria-hidden />}
              >
                Ver cómo funciona
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Product System Scene / Central Dashboard with 3D Robot */}
        <div className="relative mx-auto mt-14 sm:mt-18 lg:mt-20 max-w-[1040px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#18181B]/90 via-[#141416]/95 to-[#0F0F10] p-4 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full bg-white/[0.03] blur-[80px]"
            />

            {/* Top telemetry bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4 text-[12px] font-medium text-[#71717A]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="text-[#E4E4E7]">Pipeline comercial activo</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[#A1A1AA]">
                  <Activity size={13} className="text-emerald-400" /> Flujo en tiempo real
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-[#A1A1AA] border border-white/[0.04]">
                  <Cpu size={12} className="text-[#E4E4E7]" /> Agente IA v2.4
                </span>
              </div>
            </div>

            {/* Central visual stage: Robot 3D + Floating Activity Nodes */}
            <div className="relative mt-6 sm:mt-8 flex min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] items-center justify-center">
              {/* Radial backdrop */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] rounded-full border border-white/[0.04] bg-radial from-white/[0.03] to-transparent" />
                <div className="absolute h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] rounded-full border border-dashed border-white/[0.03]" />
              </div>

              {/* Robot Image with sleek bottom gradient mask */}
              <div className="relative z-10 flex w-full items-center justify-center">
                <div
                  className="w-[260px] sm:w-[360px] md:w-[420px] lg:w-[480px]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.4) 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.4) 90%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/robot/robot-hero.png"
                    alt="Robot oficial de Alcancemos sosteniendo tablet comercial"
                    width={900}
                    height={900}
                    priority
                    className="h-auto w-full object-contain filter drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Event Card 1 (Top-Left): Lead Calificado */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-2 top-4 sm:left-6 sm:top-12 z-20 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#1A1A1D]/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                <div className="text-left">
                  <span className="block text-[10px] font-medium tracking-wide uppercase text-[#71717A]">
                    Lead Calificado
                  </span>
                  <p className="text-[13px] font-medium text-[#F4F4F6]">
                    Distribuidora B2B
                  </p>
                </div>
              </motion.div>

              {/* Event Card 2 (Bottom-Left / Mid-Left): IA Calificación */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute left-2 bottom-12 sm:left-4 sm:bottom-20 z-20 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#1A1A1D]/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF0769] shadow-[0_0_8px_rgba(255,7,105,0.7)]" />
                <div className="text-left">
                  <span className="block text-[10px] font-medium tracking-wide uppercase text-[#71717A]">
                    IA Conversacional
                  </span>
                  <p className="text-[13px] font-medium text-[#F4F4F6]">
                    Oportunidad calificada
                  </p>
                </div>
              </motion.div>

              {/* Event Card 3 (Right): Reunión Agendada */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute right-2 top-16 sm:right-6 sm:top-24 z-20 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#1A1A1D]/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="text-left">
                  <span className="block text-[10px] font-medium tracking-wide uppercase text-[#71717A]">
                    Reunión Agendada
                  </span>
                  <p className="text-[13px] font-medium text-[#F4F4F6]">
                    Martes · 10:30
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-around gap-4 border-t border-white/[0.06] pt-5 text-[12.5px] text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Meta Ads + Agentes IA + CRM</span>
              </div>
              <div className="hidden h-3 w-px bg-white/[0.08] sm:block" />
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[#E4E4E7]">Instalación comercial llave en mano</span>
              </div>
              <div className="hidden h-3 w-px bg-white/[0.08] sm:block" />
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[#E4E4E7]" />
                <span className="text-[#E4E4E7]">Retorno 100% medible</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
