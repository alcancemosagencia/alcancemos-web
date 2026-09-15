import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { resultCases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Resultados Comerciales | Alcancemos",
  description: "Evidencia comercial y resultados obtenidos con los sistemas de Alcancemos.",
  alternates: {
    canonical: "https://alcancemos.com/resultados",
  },
};

export default function ResultadosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0B] pt-32 pb-24 text-[#E4E4E7]">
        <Container className="max-w-[1100px]">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A1A1AA] hover:text-white transition"
            >
              <ArrowLeft size={14} /> Volver al inicio
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#E4E4E7]">
                Evidencia Comercial
              </span>
            </div>
            <h1 className="mt-4 text-[36px] sm:text-[48px] font-medium tracking-tight text-[#F4F4F6]">
              Resultados de Sistemas Comerciales
            </h1>
            <p className="mt-3 max-w-2xl text-[16px] text-[#9E9CA8] leading-relaxed">
              Datos comerciales reales en adquisición, automatización y conversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {resultCases.map((c) => (
              <article
                key={c.id}
                className="flex flex-col justify-between rounded-[24px] border border-white/[0.08] bg-[#121214] p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] p-2">
                        <Image
                          src={c.logo}
                          alt={`Logo de ${c.company}`}
                          width={c.logoWidth}
                          height={c.logoHeight}
                          className="h-full w-full object-contain brightness-0 invert opacity-90"
                        />
                      </div>
                      <div>
                        <h2 className="text-[16px] font-medium tracking-tight text-[#F4F4F6]">
                          {c.company}
                        </h2>
                        <span className="text-[12px] text-[#71717A]">
                          {c.industry}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <TrendingUp size={15} />
                    </div>
                  </div>

                  <div className="my-8">
                    {c.metrics.length === 1 ? (
                      <div>
                        <div className="font-display text-[2.75rem] font-medium leading-none tracking-tight text-[#F4F4F6]">
                          {c.metrics[0].value}
                        </div>
                        <div className="mt-2 text-[12px] font-medium uppercase tracking-wider text-[#71717A]">
                          {c.metrics[0].label}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        <div>
                          <div className="font-display text-[2rem] font-medium leading-none tracking-tight text-[#F4F4F6]">
                            {c.metrics[0].value}
                          </div>
                          <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-[#71717A]">
                            {c.metrics[0].label}
                          </div>
                        </div>
                        <div className="h-10 w-px bg-white/[0.08]" aria-hidden="true" />
                        <div>
                          <div className="font-display text-[2rem] font-medium leading-none tracking-tight text-[#F4F4F6]">
                            {c.metrics[1].value}
                          </div>
                          <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-[#71717A]">
                            {c.metrics[1].label}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-[13px] font-medium text-[#9E9CA8]">
                    {c.phrase}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
