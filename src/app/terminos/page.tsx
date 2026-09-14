import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio | Alcancemos",
  description: "Términos de Servicio y condiciones de uso del sitio web de Alcancemos Media SpA.",
  alternates: {
    canonical: "https://alcancemos.com/terminos",
  },
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0B] pt-32 pb-24 text-[#E4E4E7]">
        <Container className="max-w-[800px]">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-[#A1A1AA] hover:text-white transition"
            >
              ← Volver al inicio
            </Link>
            <h1 className="mt-6 text-[32px] sm:text-[40px] font-medium tracking-tight text-[#F4F4F6]">
              Términos de Servicio
            </h1>
            <p className="mt-2 text-[14px] text-[#71717A]">
              Última actualización: Enero de 2026
            </p>
          </div>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#9E9CA8] border-t border-white/[0.08] pt-8">
            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar este sitio web, aceptas los presentes Términos de Servicio. Si no estás de acuerdo con alguno de los términos, te sugerimos no utilizar este sitio ni enviar tus datos de contacto.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                2. Naturaleza de los Servicios
              </h2>
              <p>
                Alcancemos Media SpA diseña e implementa arquitecturas de sistemas comerciales, flujos de automatización e integración con modelos de inteligencia artificial para empresas. La información presentada en este sitio es informativa y de referencia comercial.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                3. Propiedad Intelectual
              </h2>
              <p>
                Todos los contenidos, diseños, código, logotipos, textos y elementos visuales presentados en este sitio web son propiedad exclusiva de Alcancemos Media SpA o de sus respectivos titulares bajo autorización expresa. Queda prohibida su reproducción sin consentimiento previo por escrito.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                4. Limitación de Responsabilidad
              </h2>
              <p>
                Los resultados comerciales de cada cliente dependen de múltiples factores de negocio, mercado, oferta y ejecución comercial propia. Los casos de estudio presentados reflejan resultados específicos autorizados y no constituyen una garantía de resultados idénticos para todo negocio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                5. Contacto
              </h2>
              <p>
                Para cualquier consulta referente a estos términos, puedes comunicarte a{" "}
                <a href="mailto:hola@alcancemos.com" className="text-[#FF0769] hover:underline">
                  hola@alcancemos.com
                </a>.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
