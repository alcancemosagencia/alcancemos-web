"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openLeadModal } = useLeadModal();

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
    <header
      className="v3-header relative z-40 bg-white"
    >
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <nav
          aria-label="Navegación principal"
          className="flex h-16 sm:h-[68px] items-center justify-between gap-4"
        >
          {/* Logo */}
          <Link
            href={pathname === "/" ? "#inicio" : "/#inicio"}
            onClick={closeMenu}
            aria-label="Alcancemos, ir al inicio"
            className="shrink-0 rounded-md py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            <Image
              src="/assets/v3/branding/alcancemos-logo-dark.png"
              alt="Alcancemos"
              width={2757}
              height={500}
              priority
              className="h-auto w-[130px] sm:w-[145px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={pathname === "/" ? item.href : "/" + item.href}
                className="text-[13.5px] font-medium tracking-[-0.01em] text-[#6B7280] transition-colors hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Button
              onClick={handleOpenLeadModal}
              size="normal"
              icon={<ArrowUpRight size={14} strokeWidth={2.2} aria-hidden />}
            >
              Evaluar mi empresa
            </Button>
          </div>

          {/* Mobile Right Controls: CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              onClick={handleOpenLeadModal}
              size="normal"
              className="h-9 px-3 text-[13px] sm:px-4"
            >
              Evaluar
            </Button>

            <button
              type="button"
              aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#111111] hover:bg-[#F8F8F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] cursor-pointer transition-colors"
            >
              {open ? (
                <X size={18} strokeWidth={2} aria-hidden />
              ) : (
                <span className="header-menu" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div
            id="mobile-navigation"
            className="border-t border-black/[0.06] bg-white px-2 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={pathname === "/" ? item.href : "/" + item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3.5 py-2.5 text-[15px] font-medium text-[#111111] hover:bg-[#F8F8F9] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#111111]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  onClick={handleOpenLeadModal}
                  size="large"
                  className="w-full justify-center"
                  icon={<ArrowUpRight size={15} strokeWidth={2.2} aria-hidden />}
                >
                  Evaluar mi empresa
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
