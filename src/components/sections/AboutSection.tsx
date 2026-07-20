import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { title: "Estrategia antes que ejecución", description: "No activamos campañas sin entender primero el negocio, la oferta y el objetivo comercial." },
  { title: "Claridad en cada etapa", description: "Explicamos qué hacemos, por qué lo hacemos y qué resultados estamos observando." },
  { title: "Optimización constante", description: "Analizamos el rendimiento y ajustamos continuamente para encontrar mejores oportunidades de crecimiento." },
] as const;

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-28 overflow-hidden bg-white pb-[clamp(8rem,13vw,12rem)] pt-[clamp(8rem,12vw,11rem)]">
      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Sobre Alcancemos</p>
            <h2 className="mt-4 text-balance text-[clamp(2.35rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-heading">No gestionamos anuncios. Construimos <em className="font-display font-medium italic">sistemas para crecer</em>.</h2>
          </Reveal>
          <Reveal delay={0.08} className="relative lg:pt-32">
            <span aria-hidden className="pointer-events-none absolute -left-24 -top-24 hidden font-display text-[21rem] italic leading-none text-accent/[0.07] lg:block">A</span>
            <p className="text-pretty text-xl leading-9 text-heading">Alcancemos es una agencia de performance marketing enfocada en conectar estrategia, publicidad y conversión para ayudar a empresas a vender más de forma medible.</p>
            <p className="mt-6 max-w-2xl leading-8 text-muted">Trabajamos de manera cercana, con procesos claros y decisiones basadas en datos. Cada acción debe tener un propósito: atraer mejores oportunidades, convertirlas y mejorar continuamente el rendimiento.</p>
          </Reveal>
        </div>

        <div className="relative mt-24 border-y border-heading/15 py-12 lg:mt-36 lg:py-20">
          <span aria-hidden className="absolute left-0 top-0 h-px w-24 bg-accent" />
          <p className="max-w-4xl text-balance text-[clamp(2rem,4.6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-heading">“Cada acción debe tener un propósito: <em className="font-display font-medium italic text-accent">atraer, convertir y mejorar</em>.”</p>
        </div>
        <div className="relative mt-14 space-y-0 md:mt-20">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.07} className={index === 1 ? "md:ml-[28%]" : index === 2 ? "md:ml-[56%]" : ""}>
              <article className="grid max-w-xl grid-cols-[54px_1fr] gap-5 border-t border-border py-8 md:grid-cols-[72px_1fr] md:py-10">
                <p className="font-display text-2xl italic text-accent/55">0{index + 1}</p>
                <div><h3 className="text-2xl font-semibold tracking-[-0.035em] text-heading">{principle.title}</h3><p className="mt-4 leading-7 text-muted">{principle.description}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
