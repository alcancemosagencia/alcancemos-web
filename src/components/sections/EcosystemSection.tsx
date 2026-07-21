import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystemPieces } from "@/data/ecosystem";

export function EcosystemSection() {
  return (
    <section id="servicios" className="ecosystem-section scroll-mt-24">
      <Container className="max-w-[1344px]">
        <Reveal className="mx-auto max-w-[1000px] text-center">
          <p className="ecosystem-section__eyebrow">El ecosistema</p>
          <h2 className="ecosystem-section__title">
            Más que marketing.
            <span>Construimos el <em>sistema</em> que hace crecer tu empresa<i>.</i></span>
          </h2>
          <p className="ecosystem-section__description">
            Estrategia, adquisición, conversión, automatización e inteligencia artificial trabajando como un solo sistema comercial.
          </p>
        </Reveal>

        <div className="ecosystem-stage">
          <svg className="ecosystem-connectors" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
            <path d="M465 160 C535 160 520 125 600 125" />
            <path d="M895 150 C970 150 970 190 1040 190" />
            <path d="M465 470 C540 470 515 510 605 510" />
            <path d="M845 500 C920 500 915 470 985 470" />
            <circle cx="500" cy="160" r="4" />
            <circle cx="932" cy="171" r="4" />
            <circle cx="520" cy="486" r="4" />
            <circle cx="905" cy="478" r="4" />
          </svg>

          <div className="ecosystem-grid">
            {ecosystemPieces.map((piece, index) => (
              <Reveal key={piece.id} delay={index * 0.07} className={piece.visualClass}>
                <article className="ecosystem-piece group" data-size={piece.size}>
                  <div className="ecosystem-piece__topline">
                    <span className="ecosystem-piece__role">{piece.role}</span>
                    <span className="ecosystem-piece__order" aria-hidden="true">0{piece.order}</span>
                  </div>
                  <div className="ecosystem-piece__emoji" aria-hidden="true">{piece.emoji}</div>
                  <div className="ecosystem-piece__copy">
                    <h3>{piece.title}</h3>
                    <p>{piece.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.36} className="ecosystem-result">
          <div>
            <p>Todo conectado. Todo medido.</p>
            <span>Todo orientado a crecer.</span>
          </div>
          <h3>Crecimiento Comercial <em>Medible</em><i>.</i></h3>
        </Reveal>
      </Container>
    </section>
  );
}
