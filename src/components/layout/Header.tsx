"use client";

import { Menu, X } from "lucide-react";
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

  return (
    <header className="fixed left-1/2 top-0 z-50 w-[calc(100%-24px)] max-w-container -translate-x-1/2 sm:w-[calc(100%-40px)]">
      <div className={cn("rounded-b-[24px] border border-white/70 bg-[rgba(248,248,248,0.72)] shadow-[0_18px_60px_rgba(4,1,18,0.07)] backdrop-blur-[28px] backdrop-saturate-[180%] transition-[background-color,backdrop-filter,padding] duration-300", scrolled ? "bg-[rgba(248,248,248,0.9)] py-2.5 backdrop-blur-[34px]" : "py-3.5 sm:py-4")}>
        <nav aria-label="Navegación principal" className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#inicio" onClick={closeMenu} aria-label="Alcancemos, ir al inicio" className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <Image src="/brand/alcancemos-logo-dark.png" alt="Alcancemos" width={2757} height={500} priority className="h-auto w-[185px] sm:w-[205px]" />
          </Link>
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-muted transition hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{item.label}</Link>)}
          </div>
          <div className="hidden lg:block"><Button href="#contacto">Hablemos</Button></div>
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex rounded-full border border-border bg-white p-2 text-heading shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden">
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>
        {open ? <div id="mobile-navigation" className="border-t border-border/70 px-4 pb-4 pt-4 lg:hidden">
          <div className="flex max-h-[calc(100vh-110px)] flex-col gap-1 overflow-y-auto">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl px-3 py-2.5 text-base font-medium text-heading transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{item.label}</Link>)}
            <Button href="#contacto" className="mt-3" onClick={closeMenu}>Hablemos</Button>
          </div>
        </div> : null}
      </div>
    </header>
  );
}
