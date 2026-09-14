"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

interface Principle {
  number: string;
  title: string;
  statement: string;
}

const engineeringPrinciples: Principle[] = [
  {
    number: "01",
    title: "Sistemas antes que tácticas",
    statement: "Una campaña aislada puede rendir temporalmente. Un sistema comercial permite entender qué funciona, repetirlo con precisión y escalarlo sobre bases sólidas.",
  },
  {
    number: "02",
    title: "Evidencia antes que opinión",
    statement: "Tomamos decisiones sobre comportamiento real de prospectos, salud del pipeline y ventas atribuibles; no sobre intuición o métricas de vanidad.",
  },
  {
    number: "03",
    title: "Automatizar sin perder criterio humano",
    statement: "La IA debe reducir fricciones operativas, acelerar la respuesta y mantener continuidad sin convertir la relación con el cliente en una conversación fría o mecánica.",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="filosofia"
      className="relative scroll-mt-24 overflow-hidden bg-background py-28 sm:py-36 lg:py-44"
    >
      <Container className="max-w-[1200px]">
        {/* Cabecera Editorial */}
        <Reveal className="max-w-[840px] text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-[11.5px] font-medium text-heading shadow-[0_1px_3px_rgba(4,1,18,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Criterio de ingeniería</span>
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.4vw,3.9rem)] font-medium leading-[1.06] tracking-[-0.035em] text-heading">
            No administramos herramientas.
            <span className="mt-1 block text-heading">
              Diseñamos criterio <span className="text-accent">operativo</span>.
            </span>
          </h2>

          <p className="mt-5 text-[clamp(1.02rem,1.25vw,1.15rem)] font-normal leading-[1.65] text-muted max-w-2xl">
            Cómo decidimos qué automatizar, qué medir y dónde intervenir para que la tecnología trabaje con propósito a favor del negocio.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* LOS TRES PRINCIPIOS DE INGENIERÍA (SEPARADORES FINOS / EDITORIAL)        */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28 divide-y divide-border/80 border-y border-border/80">
          {engineeringPrinciples.map((principle, index) => (
            <Reveal key={principle.number} delay={0.06 * index}>
              <article className="py-10 sm:py-14 lg:py-16">
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 lg:items-baseline">
                  {/* Número y Título del Principio */}
                  <div className="lg:col-span-5 flex items-baseline gap-4">
                    <span className="text-[13px] font-mono font-medium text-accent">
                      {principle.number}
                    </span>
                    <h3 className="text-[21px] sm:text-[24px] lg:text-[26px] font-medium tracking-[-0.025em] text-heading">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Explicación / Criterio Operativo */}
                  <div className="lg:col-span-7">
                    <p className="text-[15px] sm:text-[16.5px] leading-[1.7] text-muted max-w-2xl">
                      {principle.statement}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* STATEMENT FINAL DE POSTURA Y TRANSICIÓN A CONTACTO                      */}
        {/* ========================================================================= */}
        <Reveal delay={0.25} className="mt-20 sm:mt-28">
          <div className="rounded-[32px] border border-[rgba(4,1,18,0.04)] bg-white/40 p-8 sm:p-14 lg:p-20 text-left shadow-[0_4px_24px_rgba(4,1,18,0.012)] backdrop-blur-sm">
            <span className="block text-[12px] font-medium tracking-wide text-muted">
              Postura de diseño comercial
            </span>

            <blockquote className="mt-4 text-[clamp(1.6rem,2.8vw,2.5rem)] font-medium leading-[1.18] tracking-[-0.03em] text-heading max-w-3xl">
              “Si una herramienta no mejora la velocidad de respuesta, el contexto o la trazabilidad de una venta, solo añade complejidad innecesaria.”
            </blockquote>

            <div className="mt-8 border-t border-border/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-muted max-w-xl">
                Diseñamos la infraestructura técnica para que tu equipo comercial dedique su tiempo a lo verdaderamente insustituible: negociar y cerrar.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
