import { CheckCircle2, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemsSection() {
  return (
    <section
      id="problemas"
      className="relative scroll-mt-24 overflow-hidden bg-background py-28 sm:py-36 lg:py-44"
    >
      {/* Sistema de líneas de fondo arquitectónicas tenues */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full stroke-[rgba(4,1,18,0.025)]"
        fill="none"
      >
        <circle cx="50%" cy="30%" r="580" strokeDasharray="3 9" />
        <circle cx="50%" cy="30%" r="840" strokeDasharray="4 12" />
        <path d="M 15% 0 L 15% 100%" strokeDasharray="2 8" />
        <path d="M 85% 0 L 85% 100%" strokeDasharray="2 8" />
      </svg>

      <Container className="max-w-[1320px]">
        {/* Cabecera Editorial Diagnóstica */}
        <Reveal className="mx-auto max-w-[840px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-[11.5px] font-medium text-heading shadow-[0_1px_3px_rgba(4,1,18,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E57A00]" />
            <span>Diagnóstico Operativo</span>
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.4vw,3.9rem)] font-medium leading-[1.06] tracking-[-0.035em] text-heading">
            No necesitas más herramientas.
            <span className="mt-1 block text-heading">
              Necesitas que trabajen <span className="text-accent">juntas</span>.
            </span>
          </h2>

          <p className="mt-5 text-[clamp(1.02rem,1.25vw,1.15rem)] font-normal leading-[1.65] text-muted">
            Cuando adquisición, atención y seguimiento operan por separado, las oportunidades pierden contexto, continuidad y trazabilidad.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* DESKTOP FRAGMENTATION SCENE (1024px+)                                    */}
        {/* ========================================================================= */}
        <div className="relative mt-20 hidden lg:block">
          <div className="relative mx-auto max-w-[1240px] rounded-[32px] border border-[rgba(4,1,18,0.035)] bg-white/30 p-10 xl:p-14 shadow-[0_4px_24px_rgba(4,1,18,0.012)] backdrop-blur-sm">
            {/* SVG Broken Circuit Overlay */}
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full stroke-[rgba(4,1,18,0.06)]"
              fill="none"
              viewBox="0 0 1100 320"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 220 70 L 330 70" strokeDasharray="3 5" />
              <path d="M 470 70 L 580 70" strokeDasharray="3 5" />
              <path d="M 720 70 L 830 70" strokeDasharray="3 5" />
              <path d="M 550 110 L 550 190" strokeDasharray="3 5" strokeOpacity="0.4" />
            </svg>

            {/* Fila de Herramientas y Rupturas Integradas */}
            <div className="relative z-10 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 xl:gap-4">
              {/* 1. Meta Ads */}
              <SystemSiloNode
                category="Adquisición"
                name="Meta Ads"
                detail="Lead generado"
              />

              {/* Ruptura 1: Respuesta tardía */}
              <RuptureNode
                badge="Sin respuesta a tiempo"
                label="Demora de horas"
              />

              {/* 2. WhatsApp */}
              <SystemSiloNode
                category="Conversación"
                name="WhatsApp"
                detail="Chat sin clasificar"
                isWarning
              />

              {/* Ruptura 2: Seguimiento manual */}
              <RuptureNode
                badge="Seguimiento pendiente"
                label="Memoria del vendedor"
              />

              {/* 3. CRM */}
              <SystemSiloNode
                category="Pipeline"
                name="CRM"
                detail="Contexto incompleto"
                isWarning
              />

              {/* Ruptura 3: Sin atribución */}
              <RuptureNode
                badge="Datos fragmentados"
                label="Sin atribución clara"
              />

              {/* 4. Dirección */}
              <SystemSiloNode
                category="Cierre y Control"
                name="Dirección"
                detail="Resultado incierto"
                isDanger
              />
            </div>

            {/* NÚCLEO NARRATIVO: EL COSTO DE LA DESCONEXIÓN (Opportunity Token Detenido) */}
            <Reveal delay={0.25} className="relative z-10 mt-14">
              <div className="mx-auto flex max-w-[620px] items-center justify-between rounded-2xl border border-[rgba(229,122,0,0.22)] bg-white px-7 py-4.5 shadow-[0_8px_24px_rgba(229,122,0,0.05),0_2px_6px_rgba(4,1,18,0.015)]">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#E57A00]/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E57A00]" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[11px] font-medium text-muted">
                      Punto de fuga comercial
                    </span>
                    <p className="text-[14.5px] font-medium text-heading">
                      Oportunidad detenida entre sistemas
                    </p>
                  </div>
                </div>
                <span className="rounded-lg border border-[rgba(229,122,0,0.18)] bg-[#FFFBF7] px-3 py-1 text-[11.5px] font-medium text-[#C46500]">
                  Sin continuidad comercial
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE FRAGMENTATION JOURNEY (<1024px)                                   */}
        {/* ========================================================================= */}
        <div className="relative mt-16 block lg:hidden">
          {/* Línea Central Continua */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-4 bottom-20 w-px -translate-x-1/2 bg-[rgba(4,1,18,0.08)]"
          />

          <div className="flex flex-col gap-6">
            {/* 1. Meta Ads */}
            <Reveal delay={0.05} className="relative flex justify-start">
              <div className="w-[82%] rounded-2xl border border-border bg-white p-4 shadow-subtle text-left">
                <span className="text-[10.5px] font-medium text-muted">Adquisición</span>
                <h3 className="mt-0.5 text-[15px] font-medium text-heading">Meta Ads</h3>
                <p className="mt-1 text-[12.5px] text-muted">Lead generado con intención.</p>
              </div>
            </Reveal>

            {/* Ruptura 1 */}
            <Reveal delay={0.1} className="relative flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-red-50/80 px-3 py-1 text-[10.5px] font-medium text-red-700">
                <X size={11} strokeWidth={2.5} />
                <span>Sin respuesta a tiempo</span>
              </span>
            </Reveal>

            {/* 2. WhatsApp */}
            <Reveal delay={0.15} className="relative flex justify-end">
              <div className="w-[82%] rounded-2xl border border-border bg-white p-4 shadow-subtle text-left">
                <span className="text-[10.5px] font-medium text-muted">Conversación</span>
                <h3 className="mt-0.5 text-[15px] font-medium text-heading">WhatsApp</h3>
                <p className="mt-1 text-[12.5px] text-muted">Conversación abierta sin clasificar.</p>
              </div>
            </Reveal>

            {/* TOKEN DETENIDO EN MOBILE */}
            <Reveal delay={0.2} className="relative flex justify-center py-1">
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[rgba(229,122,0,0.3)] bg-white px-4 py-1.5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#E57A00]" />
                <span className="text-[11.5px] font-medium text-heading">
                  Oportunidad detenida en el limbo
                </span>
              </div>
            </Reveal>

            {/* Ruptura 2 */}
            <Reveal delay={0.25} className="relative flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-red-50/80 px-3 py-1 text-[10.5px] font-medium text-red-700">
                <X size={11} strokeWidth={2.5} />
                <span>Seguimiento manual pendiente</span>
              </span>
            </Reveal>

            {/* 3. CRM */}
            <Reveal delay={0.3} className="relative flex justify-start">
              <div className="w-[82%] rounded-2xl border border-border bg-white p-4 shadow-subtle text-left">
                <span className="text-[10.5px] font-medium text-muted">Pipeline</span>
                <h3 className="mt-0.5 text-[15px] font-medium text-heading">CRM</h3>
                <p className="mt-1 text-[12.5px] text-muted">Historial desactualizado y disperso.</p>
              </div>
            </Reveal>

            {/* Ruptura 3 */}
            <Reveal delay={0.35} className="relative flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-red-50/80 px-3 py-1 text-[10.5px] font-medium text-red-700">
                <X size={11} strokeWidth={2.5} />
                <span>Sin trazabilidad comercial</span>
              </span>
            </Reveal>

            {/* 4. Dirección */}
            <Reveal delay={0.4} className="relative flex justify-end">
              <div className="w-[82%] rounded-2xl border border-border bg-white p-4 shadow-subtle text-left">
                <span className="text-[10.5px] font-medium text-muted">Control</span>
                <h3 className="mt-0.5 text-[15px] font-medium text-heading">Dirección</h3>
                <p className="mt-1 text-[12.5px] text-muted">Ventas cerradas sin atribución clara.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEGUNDA MITAD: CONVERGENCIA OPERATIVA (RESOLUCIÓN LIMPIA)                */}
        {/* ========================================================================= */}
        <Reveal delay={0.3} className="mt-16 sm:mt-24 max-w-[1240px] mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgba(4,1,18,0.025)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-[200px] w-[320px] bg-accent/[0.03] blur-[70px]"
            />

            <div className="max-w-3xl text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-heading">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Convergencia Operativa</span>
              </div>

              <h3 className="mt-4 text-[clamp(1.75rem,2.7vw,2.4rem)] font-medium leading-[1.14] tracking-[-0.03em] text-heading">
                Cuando la operación se conecta, cada oportunidad recupera{" "}
                <span className="text-accent">contexto, continuidad y trazabilidad</span>.
              </h3>

              <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-muted">
                Eliminamos los vacíos entre herramientas para que el tráfico publicitario, la atención de los agentes IA y el CRM operen como un solo motor predecible.
              </p>

              {/* 3 Pilares Limpios de la Operación Conectada */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-6 text-[13px] font-medium text-heading/85">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Contexto unificado</span>
                </span>
                <span className="text-heading/30">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Seguimiento sistemático</span>
                </span>
                <span className="text-heading/30">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Trazabilidad comercial</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SystemSiloNode({
  category,
  name,
  detail,
  isWarning,
  isDanger,
}: {
  category: string;
  name: string;
  detail: string;
  isWarning?: boolean;
  isDanger?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-subtle text-left">
      <span className="block text-[10.5px] font-medium text-muted">{category}</span>
      <h4 className="mt-0.5 text-[15px] font-medium text-heading">{name}</h4>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-muted">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isDanger ? "bg-red-500" : isWarning ? "bg-[#E57A00]" : "bg-heading/40"
          }`}
        />
        <span>{detail}</span>
      </div>
    </div>
  );
}

function RuptureNode({ badge, label }: { badge: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-1 text-center">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 shadow-sm">
        <X size={12} strokeWidth={2.5} />
      </div>
      <span className="mt-1.5 block text-[10.5px] font-medium text-red-700/90">{badge}</span>
      <span className="block text-[9px] text-muted/70">{label}</span>
    </div>
  );
}
