import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DecorativeEmoji } from "@/components/ui/DecorativeEmoji";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, type CaseStudy } from "@/data/cases";

const SHOW_PLACEHOLDERS = process.env.NODE_ENV === "development";

function FeaturedCase({ caseStudy }: { caseStudy: CaseStudy }) {
  const metrics = [
    caseStudy.metrics[0],
    ...(caseStudy.result.highlights?.slice().reverse() ?? []),
  ];
  const narrative = caseStudy.narrative;

  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-[20px] bg-heading text-white shadow-[0_38px_110px_rgba(4,1,18,0.16)] sm:rounded-[24px]">
        <div aria-hidden className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-10 lg:px-14 lg:py-16 xl:px-[4.5rem] xl:py-20">
            <div className="flex flex-col gap-7 border-b border-white/12 pb-9 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative h-20 w-40 overflow-hidden bg-white sm:h-24 sm:w-48">
                <Image src={caseStudy.logo} alt={`Logo de ${caseStudy.company}`} fill sizes="192px" className="object-contain" />
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-semibold tracking-[0.14em] text-white/65">{caseStudy.industry} · {caseStudy.service}</p>
                <p className="mt-2 text-sm text-white/45">{caseStudy.period}</p>
              </div>
            </div>

            <h3 className="mt-12 max-w-2xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.048em] sm:text-4xl lg:text-[2.9rem]">{caseStudy.shortResult}</h3>

            {narrative ? <div className="mt-12 space-y-9">
              <div><p className="text-xs font-semibold tracking-[0.18em] text-accent">DESAFÍO</p><p className="mt-3 max-w-2xl leading-7 text-white/68">{narrative.challenge}</p></div>
              <div><p className="text-xs font-semibold tracking-[0.18em] text-accent">ESTRATEGIA</p><p className="mt-3 max-w-2xl leading-7 text-white/68">{narrative.strategy}</p></div>
              <div><p className="text-xs font-semibold tracking-[0.18em] text-accent">RESULTADO</p><p className="mt-3 max-w-2xl leading-7 text-white/82">{narrative.result}</p></div>
            </div> : null}
          </div>

          <div className="flex flex-col border-t border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-16 xl:px-14 xl:py-20">
            <dl className="grid grid-cols-2 gap-x-5 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric, index) => metric ? (
                <div key={metric.label} className={`py-6 sm:py-7 lg:py-8 ${index > 0 ? "border-t border-white/12 sm:border-l sm:border-t-0 sm:pl-5 lg:border-l-0 lg:border-t lg:pl-0" : "col-span-2 sm:col-span-1"}`}>
                  <dd className={`font-display font-medium italic leading-none tracking-[-0.06em] ${index === 0 ? "text-[clamp(2.65rem,6vw,5rem)] text-accent" : "text-[clamp(2.25rem,4.7vw,4.2rem)] text-white"}`}>{metric.value.replace(" CLP", "")}</dd>
                  <dt className="mt-3 text-xs font-medium tracking-[0.12em] text-white/52">{metric.label}</dt>
                </div>
              ) : null)}
            </dl>

            <figure className="relative mt-8 border-l-2 border-accent pl-6 sm:pl-8 lg:mt-12">
              <span aria-hidden className="absolute -left-1 top-0 -translate-x-full pr-4 font-display text-6xl italic leading-none text-accent/40">“</span>
              <blockquote className="text-pretty font-display text-xl italic leading-8 text-white/86 sm:text-2xl sm:leading-9">“{caseStudy.testimonial}”</blockquote>
              <figcaption className="mt-6 text-sm"><span className="font-semibold text-white">{caseStudy.person}</span><span className="block pt-1 text-white/48">{caseStudy.role} · {caseStudy.company}</span></figcaption>
            </figure>

            <Link href="#contacto" className="mt-10 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-heading transition hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              Quiero resultados como estos <ArrowUpRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SecondaryCase({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Reveal className="h-full">
      <article className="relative flex h-full flex-col rounded-[20px] bg-white p-6 shadow-[0_22px_70px_rgba(4,1,18,0.06)] sm:p-8">
        <span className="absolute right-5 top-5 rounded-full bg-accent/[0.08] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent">Caso demostrativo</span>
        <div className="relative h-16 w-36"><Image src={caseStudy.logo} alt={`Logo de ${caseStudy.company}`} fill sizes="144px" className="object-contain object-left" /></div>
        <p className="mt-7 text-xs font-semibold tracking-[0.16em] text-accent">{caseStudy.industry}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-heading">{caseStudy.company}</h3>
        <p className="mt-4 leading-7 text-muted">{caseStudy.shortResult}</p>
        <dl className="mt-8 grid grid-cols-3 border-y border-border py-5">
          {caseStudy.metrics.map((metric, index) => <div key={metric.label} className={index > 0 ? "border-l border-border pl-4" : "pr-4"}><dd className="text-xl font-semibold tracking-[-0.03em] text-heading sm:text-2xl">{metric.value}</dd><dt className="mt-1 text-[0.68rem] text-muted">{metric.label}</dt></div>)}
        </dl>
        <figure className="mt-7"><blockquote className="text-sm italic leading-6 text-heading/70">“{caseStudy.testimonial}”</blockquote><figcaption className="mt-3 text-xs font-semibold text-heading">{caseStudy.person} · {caseStudy.role}</figcaption></figure>
      </article>
    </Reveal>
  );
}

export function CasesSection() {
  const featured = caseStudies.find((caseStudy) => caseStudy.featured && !caseStudy.placeholder);
  const secondary = caseStudies.filter((caseStudy) => !caseStudy.featured && (!caseStudy.placeholder || SHOW_PLACEHOLDERS));

  return (
    <section id="casos" className="scroll-mt-28 pb-[clamp(8rem,12vw,11rem)] pt-[clamp(7rem,10vw,9rem)]">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">Casos de éxito</p>
            <div className="mt-4 flex items-start gap-3 sm:items-center sm:gap-5">
              <h2 className="text-balance text-[clamp(2.35rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-heading">Resultados reales que <em className="font-display font-medium italic">impulsan negocios</em>.</h2>
              <DecorativeEmoji src="/decorations/trophy-3d.webp" size="md" rotate={4} />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Estrategia, publicidad y optimización trabajando juntas para convertir inversión en crecimiento medible.</p>
          </div>
        </Reveal>

        <div className="mt-14 lg:mt-20">{featured ? <FeaturedCase caseStudy={featured} /> : null}</div>
        {secondary.length > 0 ? <div className="mt-6 grid gap-6 md:grid-cols-2">{secondary.map((caseStudy) => <SecondaryCase key={caseStudy.id} caseStudy={caseStudy} />)}</div> : null}
      </Container>
    </section>
  );
}
