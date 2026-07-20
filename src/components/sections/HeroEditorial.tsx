import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function HeroEditorial() {
  return (
    <section id="inicio" className="hero-editorial">
      <Container className="hero-editorial__container">
        <Reveal className="hero-editorial__intro">
          <p className="hero-editorial__eyebrow">Estrategia, medios y conversión</p>
          <h1 className="hero-editorial__title">
            <span className="hero-editorial__title-line hero-editorial__title-line--first">Convertimos <em>inversión digital</em></span>
            <span className="hero-editorial__title-line">en crecimiento <em>medible</em><i aria-hidden="true">.</i></span>
          </h1>
          <p className="hero-editorial__description">
            Diseñamos sistemas de captación y conversión
            <br className="hidden sm:block" /> para empresas que quieren vender más.
          </p>
          <div className="hero-editorial__actions">
            <a href="#contacto" className="hero-editorial__primary">
              Evaluar mi estrategia <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a href="#casos" className="hero-editorial__secondary">
              Ver resultados <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="hero-evidence" aria-label="Resultado real de Casa & Telas">
          <div className="hero-evidence__case">
            <p>Resultado real</p>
            <strong>Casa &amp; Telas</strong>
            <span>Mayo — julio de 2025</span>
          </div>
          <div className="hero-evidence__metric hero-evidence__metric--accent">
            <strong>26.35x</strong>
            <span>ROAS</span>
          </div>
          <div className="hero-evidence__metric">
            <strong>$400.000 CLP</strong>
            <span>Inversión</span>
          </div>
          <div className="hero-evidence__metric">
            <strong>$10.540.000 CLP</strong>
            <span>Ventas</span>
          </div>
        </Reveal>
      </Container>

      <div className="hero-editorial__platforms">
        <Container className="max-w-[1306px]">
          <p>Trabajamos con las mejores plataformas para conectar estrategia, datos y resultados.</p>
          <div className="platform-row" aria-label="Plataformas con las que trabajamos">
            <span className="platform-brand"><b className="platform-brand__meta">∞</b> Meta</span>
            <span className="platform-brand"><b className="platform-brand__google" aria-hidden="true" />Google Ads</span>
            <span className="platform-brand"><b className="platform-brand__analytics" aria-hidden="true"><i /><i /><i /></b>Analytics</span>
            <span className="platform-brand platform-brand--shopify"><b aria-hidden="true">S</b> shopify</span>
            <span className="platform-brand platform-brand--wordpress"><b aria-hidden="true">W</b> WordPress</span>
            <span className="platform-brand platform-brand--whatsapp"><b aria-hidden="true">◔</b><span>WhatsApp<small>Business</small></span></span>
          </div>
          <a href="#proceso" className="hero-editorial__discover">
            <ArrowDown size={19} strokeWidth={1.5} aria-hidden="true" /> Descubre cómo lo hacemos
          </a>
        </Container>
      </div>
    </section>
  );
}
