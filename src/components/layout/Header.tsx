"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const handleOpenLeadModal = () => {
    closeMenu();
    openLeadModal("header_cta");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto max-w-[1180px] transition-all duration-300",
          scrolled || open
            ? "mt-3 rounded-2xl border border-white/[0.08] bg-[#141416]/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "mt-3 sm:mt-4 rounded-2xl border border-white/[0.04] bg-[#141416]/50 backdrop-blur-md"
        )}
      >
        <nav
          aria-label="Navegación principal"
          className={cn(
            "flex items-center px-4 sm:px-6 transition-[height] duration-300",
            scrolled ? "h-[58px]" : "h-[64px] sm:h-[70px]"
          )}
        >
          <Link
            href="#inicio"
            onClick={closeMenu}
            aria-label="Alcancemos, ir al inicio"
            className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image
              src="/brand/alcancemos-logo-light.png"
              alt="Alcancemos"
              width={2757}
              height={500}
              priority
              className="h-auto w-[140px] sm:w-[155px]"
            />
          </Link>

          <div className="ml-auto hidden items-center gap-8 lg:flex xl:gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[13.5px] font-medium tracking-[-0.01em] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto hidden items-center lg:flex lg:ml-8">
            <Button
              onClick={handleOpenLeadModal}
              size="normal"
              icon={<ArrowUpRight size={14} strokeWidth={2.2} aria-hidden />}
            >
              Hablemos
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden"
          >
            {open ? (
              <X size={22} strokeWidth={2} aria-hidden />
            ) : (
              <span className="header-menu" aria-hidden="true">
                <i className="!bg-white" />
                <i className="!bg-white" />
                <i className="!bg-white" />
              </span>
            )}
          </button>
        </nav>

        {open ? (
          <div id="mobile-navigation" className="border-t border-white/[0.08] px-4 pb-6 pt-4 lg:hidden">
            <div className="flex max-h-[calc(100vh-120px)] flex-col gap-1.5 overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-[#E4E4E7] transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              ))}
              <Button onClick={handleOpenLeadModal} className="mt-3 w-full py-3 text-base">
                Hablemos
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
