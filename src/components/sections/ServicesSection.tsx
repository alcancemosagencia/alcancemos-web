import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-background pb-[clamp(7rem,10vw,10rem)] pt-[clamp(6.5rem,9vw,9rem)]">
      <Container className="max-w-[1304px]">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">Lo que hacemos</p>
          <h2 className="mt-6 text-balance text-[clamp(2.75rem,4.6vw,4.45rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-heading">
            Estrategia que transforma
            <span className="block font-display font-normal italic tracking-[-0.04em]">inversión en resultados<i className="not-italic text-accent">.</i></span>
          </h2>
          <p className="mx-auto mt-7 max-w-[690px] text-pretty text-lg leading-8 tracking-[-0.02em] text-muted sm:text-xl">
            Diseñamos sistemas de captación y conversión para empresas que quieren crecer con datos, no con intuición.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-[3.75rem] lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} className={index === 2 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <article className="group flex min-h-[470px] h-full flex-col rounded-[22px] border border-heading/[0.065] bg-white px-8 pb-8 pt-9 shadow-[0_18px_55px_rgba(4,1,18,0.035)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-heading/[0.11] hover:shadow-[0_25px_65px_rgba(4,1,18,0.055)] sm:px-9 sm:pb-9 sm:pt-9 lg:min-h-[472px]">
                <div className="flex h-[106px] w-[106px] items-center justify-center rounded-[22px] bg-[#f5f5f5] text-[3.7rem] leading-none" aria-hidden="true">
                  {service.emoji}
                </div>
                <h3 className="mt-8 max-w-[320px] text-[clamp(1.65rem,2vw,2rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-heading">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[340px] text-[1.02rem] leading-[1.75] tracking-[-0.015em] text-muted">
                  {service.description}
                </p>
                <Link href="#contacto" aria-label={`Ver servicio: ${service.title}`} className="mt-auto inline-flex min-h-11 w-fit items-center pt-7 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  <span className="sr-only">Ver servicio</span>
                  <ArrowRight size={28} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
