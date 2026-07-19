import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, SHOW_PLACEHOLDER_CASE_BADGES } from "@/data/cases";

export function CasesSection() {
  return (
    <section id="casos" className="scroll-mt-28 py-[var(--section-spacing)]">
      <Container>
        <SectionHeading
          eyebrow="Casos de éxito"
          title="Resultados que hablan por sí solos."
          highlight="hablan por sí solos"
          description="Cada negocio tiene objetivos distintos, pero todos comparten algo en común: una estrategia basada en datos, optimización continua y foco en resultados."
        />

        <div className="mt-12 grid auto-rows-fr gap-5 lg:mt-16 lg:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <Reveal key={caseStudy.id} delay={index * 0.08} className={index === 0 ? "h-full lg:col-span-2" : "h-full"}>
              <article className="flex h-full flex-col overflow-hidden rounded-brand border border-border bg-card shadow-[0_22px_76px_rgba(4,1,18,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_88px_rgba(4,1,18,0.09)]">
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-[#fbfbfb] p-6 sm:h-52 sm:p-8">
                  <Image
                    src={caseStudy.logo}
                    alt={`Logo de ${caseStudy.company}`}
                    width={caseStudy.logoWidth}
                    height={caseStudy.logoHeight}
                    className="max-h-full w-auto max-w-full object-contain"
                    sizes="(min-width: 1024px) 520px, (min-width: 640px) 640px, calc(100vw - 72px)"
                  />
                  {caseStudy.placeholder && SHOW_PLACEHOLDER_CASE_BADGES ? (
                    <span className="absolute right-4 top-4 rounded-full border border-accent/20 bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur">Caso demostrativo</span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                    <span className="rounded-full bg-accent/[0.07] px-3 py-1.5 text-accent">{caseStudy.industry}</span>
                    <span className="rounded-full border border-border px-3 py-1.5 text-heading/65">{caseStudy.service}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-heading sm:text-4xl">{caseStudy.company}</h3>
                    {caseStudy.period ? <p className="text-xs font-medium text-muted">{caseStudy.period}</p> : null}
                  </div>

                  <div className="mt-7 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Problema inicial</p>
                      <p className="mt-3 text-sm leading-6 text-muted">{caseStudy.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Qué hicimos</p>
                      <ul className="mt-3 space-y-2">
                        {caseStudy.solution.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-heading/75">
                            <Check className="mt-1 shrink-0 text-accent" size={14} strokeWidth={2} aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 rounded-[20px] border border-accent/10 bg-accent/[0.035] p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Resultado</p>
                    <p className="mt-3 text-sm leading-6 text-heading/75">{caseStudy.result.summary}</p>
                    {caseStudy.result.highlights ? (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {caseStudy.result.highlights.map((highlight) => (
                          <div key={highlight.label} className="rounded-2xl bg-white p-4">
                            <p className="text-xs leading-5 text-muted">{highlight.label}</p>
                            <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-heading">{highlight.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <dl className={`mt-5 grid gap-3 ${caseStudy.metrics.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-border bg-background p-4">
                        <dt className="text-xs leading-5 text-muted">{metric.label}</dt>
                        <dd className="mt-1 font-display text-2xl font-medium italic text-heading sm:text-3xl">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <figure className="mt-7 border-l-2 border-accent pl-5">
                    <blockquote className="text-pretty text-base italic leading-7 text-heading/75">“{caseStudy.testimonial}”</blockquote>
                    <figcaption className="mt-4 text-sm">
                      <span className="font-semibold text-heading">{caseStudy.person}</span>
                      <span className="text-muted"> · {caseStudy.role}</span>
                    </figcaption>
                  </figure>

                  <div className="mt-auto pt-8">
                    <Link href="#contacto" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-heading px-5 py-2.5 text-sm font-semibold text-heading transition hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                      Ver caso <ArrowUpRight size={17} aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
