import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-heading py-16 text-background">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.24em] text-background/60">Alcancemos</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Alcancemos lo que <em className="font-display font-medium italic">Tú Competencia</em> no puede</h2>
          </div>
          <nav aria-label="Enlaces del footer" className="flex flex-wrap gap-4 text-sm text-background/70">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-background">{item.label}</Link>)}
          </nav>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-background/50">© {new Date().getFullYear()} Alcancemos. Todos los derechos reservados.</div>
      </Container>
    </footer>
  );
}
