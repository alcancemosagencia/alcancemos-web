const platforms = ["Meta", "Google Ads", "Analytics", "Shopify", "WordPress", "Elementor", "Tag Manager", "WhatsApp Business", "Google", "Merchant Center"] as const;

export function EcosystemStrip() {
  const items = [...platforms, ...platforms];
  return (
    <section aria-labelledby="ecosystem-title" className="overflow-hidden border-y border-heading/[0.08] bg-white pb-14 pt-11 sm:pb-[4.75rem] sm:pt-16">
      <h2 id="ecosystem-title" className="mx-auto max-w-2xl px-6 text-center text-sm font-medium leading-6 tracking-[-0.01em] text-muted sm:text-base">Trabajamos con el ecosistema que impulsa el crecimiento digital.</h2>
      <div className="ecosystem-mask mt-10 overflow-hidden py-2 sm:mt-12">
        <div className="ecosystem-track flex w-max items-center gap-12 pr-12 sm:gap-[4.5rem] sm:pr-[4.5rem]">
          {items.map((platform, index) => <span key={`${platform}-${index}`} aria-hidden={index >= platforms.length || undefined} className={`shrink-0 whitespace-nowrap font-semibold tracking-[-0.04em] ${index % 5 === 0 ? "text-2xl text-heading/70 sm:text-3xl" : index % 4 === 0 ? "translate-y-2 scale-[0.85] text-xl text-heading/35" : index % 3 === 0 ? "-translate-y-1 scale-110 text-lg text-heading/60 sm:text-xl" : "text-xl text-heading/45 sm:text-2xl"}`}>{platform}</span>)}
        </div>
      </div>
    </section>
  );
}
