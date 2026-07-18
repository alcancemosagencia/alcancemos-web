"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-1/2 top-0 z-50 w-[calc(100%-40px)] max-w-container -translate-x-1/2">
      <div className={cn("rounded-b-[24px] border border-white/60 bg-[rgba(248,248,248,0.72)] shadow-[0_18px_60px_rgba(4,1,18,0.08)] backdrop-blur-[28px] backdrop-saturate-[180%] transition-all duration-300", scrolled ? "bg-[rgba(248,248,248,0.88)] py-3 backdrop-blur-[34px]" : "py-4")}>
        <nav aria-label="Navegación principal" className="flex items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-[-0.03em] text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Alcancemos</Link>
          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{item.label}</Link>)}
          </div>
          <div className="hidden md:block"><Button href="#contacto">Hablemos</Button></div>
          <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="inline-flex rounded-full border border-border bg-white p-2 text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden">
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>
        {open ? <div className="border-t border-border/70 px-5 pb-4 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navigationItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-2 text-base font-medium text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{item.label}</Link>)}
            <Button href="#contacto" className="mt-2" onClick={() => setOpen(false)}>Hablemos</Button>
          </div>
        </div> : null}
      </div>
    </header>
  );
}
