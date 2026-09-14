import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Alcancemos",
  description: "Política de Privacidad y tratamiento de datos de Alcancemos Media SpA.",
  alternates: {
    canonical: "https://alcancemos.com/privacidad",
  },
};

export default function PrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="mt-2 text-[14px] text-[#71717A]">
              Última actualización: Enero de 2026
            </p>
          </div>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#9E9CA8] border-t border-white/[0.08] pt-8">
            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                1. Identificación del Responsable
              </h2>
              <p>
                Alcancemos Media SpA (en adelante, &quot;Alcancemos&quot;), con domicilio en Santiago, Chile, es responsable del canal web oficial alcancemos.com y sus medios de comunicación comercial directa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                2. Flujo de Contacto y Tratamiento de Información (V1)
              </h2>
              <p>
                En esta versión del sitio web, los datos proporcionados voluntariamente en el formulario de contacto (nombre, empresa, interés y rango estimado de inversión) son procesados exclusivamente de forma local en el navegador del usuario para componer un mensaje estructurado.
              </p>
              <p>
                Al pulsar &quot;Continuar por WhatsApp&quot;, el usuario es redirigido a la plataforma WhatsApp (operada por Meta Platforms, Inc.), donde la conversación y el intercambio de información se regirán bajo los términos de servicio y políticas de privacidad de dicha plataforma. Alcancemos no almacena registros de estos datos en bases de datos web ni servidores intermediarios en este sitio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                3. Finalidad del Contacto
              </h2>
              <p>
                La información compartida a través de WhatsApp se utiliza con el único propósito de:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#D4D4D8]">
                <li>Evaluar el contexto comercial y de sistemas de tu empresa.</li>
                <li>Responder a consultas técnicas, de alcance o comerciales.</li>
                <li>Coordinar reuniones diagnósticas o demostraciones de sistemas.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                4. Confidencialidad y No Cesión a Terceros
              </h2>
              <p>
                Alcancemos no comercializa, no transfiere ni comparte datos personales o comerciales de prospectos ni clientes con terceras partes para fines publicitarios ajenos a la relación comercial directa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[18px] font-medium text-[#F4F4F6]">
                5. Derechos del Titular y Contacto
              </h2>
              <p>
                Para cualquier consulta respecto al tratamiento de tus datos o para ejercer tus derechos de acceso, rectificación o cancelación, puedes contactarnos en cualquier momento a{" "}
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
