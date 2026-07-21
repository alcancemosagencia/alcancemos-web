import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { emoji: "🎯", title: "Cada acción debe tener un propósito.", visualClass: "lg:col-span-5" },
  { emoji: "📊", title: "Todo debe poder medirse.", visualClass: "lg:col-span-3 lg:translate-y-8" },
  { emoji: "🤖", title: "La automatización libera tiempo para vender.", visualClass: "lg:col-span-4" },
  { emoji: "📈", title: "El marketing existe para generar negocio.", visualClass: "lg:col-span-4 lg:ml-10" },
  { emoji: "🧠", title: "La estrategia siempre va antes que la publicidad.", visualClass: "lg:col-span-5 lg:translate-y-8" },
  { emoji: "🚀", title: "El crecimiento debe ser sostenible.", visualClass: "lg:col-span-3" },
] as const;

export function PhilosophySection() {
  return (
    <section id="nosotros" className="philosophy-section scroll-mt-24">
      <Container className="max-w-[1328px]">
        <Reveal className="philosophy-section__heading">
          <p>Filosofía</p>
          <h2>No gestionamos anuncios.<span>Construimos <em>sistemas para crecer</em><i>.</i></span></h2>
          <div><span>Las campañas pueden generar clics.</span><strong>Los sistemas generan empresas más rentables.</strong></div>
        </Reveal>

        <div className="philosophy-principles">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06} className={principle.visualClass}>
              <article className="philosophy-principle">
                <div aria-hidden="true">{principle.emoji}</div>
                <h3>{principle.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="philosophy-closing">
          <p>No vendemos campañas.</p>
          <h3>Construimos empresas <em>más rentables</em><i>.</i></h3>
        </Reveal>
      </Container>
    </section>
  );
}
