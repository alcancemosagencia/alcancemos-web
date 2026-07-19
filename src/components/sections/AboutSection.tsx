import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { title: "Estrategia antes que ejecución", description: "No activamos campañas sin entender primero el negocio, la oferta y el objetivo comercial." },
  { title: "Claridad en cada etapa", description: "Explicamos qué hacemos, por qué lo hacemos y qué resultados estamos observando." },
  { title: "Optimización constante", description: "Analizamos el rendimiento y ajustamos continuamente para encontrar mejores oportunidades de crecimiento." },
] as const;

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-28 py-[var(--section-spacing)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Sobre Alcancemos</p>
            <h2 className="mt-4 text-balance text-[clamp(2.35rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-heading">No gestionamos anuncios. Construimos <em className="font-display font-medium italic">sistemas para crecer</em>.</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pt-10">
            <p className="text-pretty text-xl leading-9 text-heading">Alcancemos es una agencia de performance marketing enfocada en conectar estrategia, publicidad y conversión para ayudar a empresas a vender más de forma medible.</p>
            <p className="mt-6 max-w-2xl leading-8 text-muted">Trabajamos de manera cercana, con procesos claros y decisiones basadas en datos. Cada acción debe tener un propósito: atraer mejores oportunidades, convertirlas y mejorar continuamente el rendimiento.</p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3 lg:mt-24 lg:gap-14 lg:pt-14">
          <span aria-hidden className="absolute left-0 top-0 h-px w-24 bg-accent" />
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.07}>
              <article>
                <p className="font-display text-2xl italic text-accent/55">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-heading">{principle.title}</h3>
                <p className="mt-4 leading-7 text-muted">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
