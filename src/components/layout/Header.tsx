"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const desktopItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de éxito", href: "#casos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Recursos", href: "#proceso" },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 sm:px-8 lg:px-12">
      <div className={cn("mx-auto max-w-[1440px] transition-[background-color,backdrop-filter,box-shadow,border-radius] duration-300", scrolled || open ? "rounded-b-2xl bg-[rgba(248,248,248,0.92)] shadow-[0_10px_35px_rgba(4,1,18,0.04)] backdrop-blur-xl" : "bg-transparent")}>
        <nav aria-label="Navegación principal" className={cn("flex h-[100px] items-center transition-[height] duration-300", scrolled ? "h-[72px]" : "h-[100px]")}>
          <Link href="#inicio" onClick={closeMenu} aria-label="Alcancemos, ir al inicio" className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <Image src="/brand/alcancemos-logo-dark.png" alt="Alcancemos" width={2757} height={500} priority className="h-auto w-[178px] sm:w-[210px]" />
          </Link>
          <div className="ml-auto hidden items-center gap-12 lg:flex xl:gap-[3.75rem]">
            {desktopItems.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap text-[15px] font-medium tracking-[-0.025em] text-heading transition-opacity hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{item.label}</Link>)}
          </div>
          <div className="ml-auto hidden lg:block lg:ml-[clamp(3rem,10vw,15rem)]"><Button href="#contacto" icon={<ArrowUpRight size={17} strokeWidth={1.7} aria-hidden />} className="rounded-xl border-accent px-6 py-3.5 text-base shadow-none">Hablemos</Button></div>
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="ml-7 inline-flex h-11 w-11 items-center justify-center text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            {open ? <X size={25} strokeWidth={1.4} aria-hidden /> : <span className="header-menu" aria-hidden="true"><i /><i /><i /></span>}
          </button>
        </nav>
        {open ? <div id="mobile-navigation" className="border-t border-border/70 px-4 pb-5 pt-4">
          <div className="flex max-h-[calc(100vh-110px)] flex-col gap-1 overflow-y-auto">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl px-3 py-2.5 text-base font-medium text-heading transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{item.label}</Link>)}
            <Button href="#contacto" className="mt-3" onClick={closeMenu}>Hablemos</Button>
          </div>
        </div> : null}
      </div>
    </header>
  );
}
