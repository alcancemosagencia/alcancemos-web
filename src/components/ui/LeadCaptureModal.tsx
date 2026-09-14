"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { X, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useLeadModal } from "@/context/LeadModalContext";
import { trackLeadEvent } from "@/lib/analytics";

interface FormErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  interest?: string;
}

export function LeadCaptureModal() {
  const { isOpen, closeLeadModal, source } = useLeadModal();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: "",
    marketingSpend: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) {
      setServerError("");
      return;
    }

    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLeadModal();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousActive?.focus();
    };
  }, [isOpen, closeLeadModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    trackLeadEvent("lead_form_start", { field: name, source });
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Por favor ingresa tu nombre.";
    }

    if (!formData.company.trim()) {
      nextErrors.company = "Por favor ingresa el nombre de tu empresa.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Por favor ingresa tu número de WhatsApp.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Por favor ingresa tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Por favor ingresa un correo válido.";
    }

    if (!formData.interest) {
      nextErrors.interest = "Por favor selecciona qué deseas mejorar.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check honeypot
    if (formData.website) {
      closeLeadModal();
      return;
    }

    setServerError("");

    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const cleanNumber = rawNumber.replace(/\D/g, "");

    if (!cleanNumber || cleanNumber.length < 8 || cleanNumber.length > 16) {
      setServerError("No pudimos abrir WhatsApp en este momento. Inténtalo nuevamente.");
      trackLeadEvent("lead_form_error", { error: "invalid_whatsapp_number", source });
      return;
    }

    // Build dynamic message
    const inversionLine = formData.marketingSpend.trim()
      ? `\n\nInversión mensual en marketing: ${formData.marketingSpend.trim()}.`
      : "";

    const message = `Hola, soy ${formData.name.trim()} de ${formData.company.trim()}.\n\nMe interesa mejorar: ${formData.interest.trim()}.${inversionLine}\n\nMe gustaría conversar sobre cómo Alcancemos puede ayudarnos.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    // Fire analytics without blocking popup opening
    trackLeadEvent("whatsapp_intent", {
      source,
      interest: formData.interest,
      hasMarketingSpend: Boolean(formData.marketingSpend),
    });

    // Direct synchronous window.open in user click context to prevent iOS/Safari popup blocking
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    trackLeadEvent("whatsapp_open", { source });

    // Close modal gracefully
    closeLeadModal();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0"
        aria-hidden="true"
        onClick={closeLeadModal}
      />

      {/* Modal Container: Bottom sheet on mobile, centered modal on desktop */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] border border-white/[0.12] bg-[#141416] p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-5">
          <div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400">
              Diagnóstico comercial
            </span>
            <h2
              id="lead-modal-title"
              className="mt-1 text-[20px] sm:text-[22px] font-medium tracking-tight text-[#F4F4F6]"
            >
              Hablemos de tu operación
            </h2>
            <p className="mt-1 text-[13px] text-[#9E9CA8]">
              Analizamos tu proceso y diseñamos una arquitectura a medida.
            </p>
          </div>

          <button
            type="button"
            onClick={closeLeadModal}
            aria-label="Cerrar modal"
            className="rounded-lg border border-white/[0.08] p-1.5 text-[#A1A1AA] hover:bg-white/[0.06] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div className="mt-5">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Honeypot field (hidden from real users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="modal-website">Website</label>
              <input
                type="text"
                id="modal-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* Row 1: Nombre & Empresa */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="modal-name" className="block text-[12px] font-medium text-[#E4E4E7]">
                  Nombre y apellido <span className="text-[#FF0769]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  placeholder="Ej. Martín Soto"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#71717A] outline-none focus:border-white/30 transition-colors"
                />
                {errors.name && (
                  <span className="mt-1 block text-[11.5px] text-red-400">{errors.name}</span>
                )}
              </div>

              <div>
                <label htmlFor="modal-company" className="block text-[12px] font-medium text-[#E4E4E7]">
                  Empresa <span className="text-[#FF0769]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  required
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#71717A] outline-none focus:border-white/30 transition-colors"
                />
                {errors.company && (
                  <span className="mt-1 block text-[11.5px] text-red-400">{errors.company}</span>
                )}
              </div>
            </div>

            {/* Row 2: WhatsApp & Email */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="modal-phone" className="block text-[12px] font-medium text-[#E4E4E7]">
                  WhatsApp (con código de país) <span className="text-[#FF0769]">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  placeholder="+56 9 1234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#71717A] outline-none focus:border-white/30 transition-colors"
                />
                {errors.phone && (
                  <span className="mt-1 block text-[11.5px] text-red-400">{errors.phone}</span>
                )}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-[12px] font-medium text-[#E4E4E7]">
                  Correo electrónico <span className="text-[#FF0769]">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder="nombre@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#71717A] outline-none focus:border-white/30 transition-colors"
                />
                {errors.email && (
                  <span className="mt-1 block text-[11.5px] text-red-400">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Select: ¿Qué quieres mejorar? */}
            <div>
              <label htmlFor="modal-interest" className="block text-[12px] font-medium text-[#E4E4E7]">
                ¿Qué quieres mejorar? <span className="text-[#FF0769]">*</span>
              </label>
              <select
                id="modal-interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-white/30 transition-colors cursor-pointer"
              >
                <option value="" className="text-[#71717A]">
                  Selecciona una opción
                </option>
                <option value="Generación de leads">Generación de leads</option>
                <option value="Seguimiento comercial">Seguimiento comercial</option>
                <option value="Automatización e IA">Automatización e IA</option>
                <option value="Todo el sistema comercial">Todo el sistema comercial</option>
              </select>
              {errors.interest && (
                <span className="mt-1 block text-[11.5px] text-red-400">{errors.interest}</span>
              )}
            </div>

            {/* Select: Inversión mensual en marketing */}
            <div>
              <label htmlFor="modal-spend" className="block text-[12px] font-medium text-[#A1A1AA]">
                Inversión mensual en marketing (Opcional)
              </label>
              <select
                id="modal-spend"
                name="marketingSpend"
                value={formData.marketingSpend}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#1A1A1D] px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-white/30 transition-colors cursor-pointer"
              >
                <option value="" className="text-[#71717A]">
                  Selecciona un rango
                </option>
                <option value="Aún no invertimos">Aún no invertimos</option>
                <option value="Menos de $500 USD">Menos de $500 USD</option>
                <option value="$500 – $1.500 USD">$500 – $1.500 USD</option>
                <option value="$1.500 – $5.000 USD">$1.500 – $5.000 USD</option>
                <option value="Más de $5.000 USD">Más de $5.000 USD</option>
              </select>
            </div>

            {/* Error banner */}
            {serverError && (
              <p role="alert" className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-[12.5px] text-red-300">
                {serverError}
              </p>
            )}

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0F0F10] hover:bg-neutral-100 active:scale-[0.99] transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare size={16} className="text-[#0F0F10]" aria-hidden />
                <span>Continuar por WhatsApp</span>
                <ArrowRight size={15} aria-hidden />
              </button>
            </div>

            {/* Privacy note */}
            <p className="pt-1 text-center text-[11.5px] text-[#71717A] leading-relaxed">
              Al continuar, se abrirá WhatsApp con la información preparada para que puedas enviarla.{" "}
              <Link href="/privacidad" className="text-[#A1A1AA] underline underline-offset-2 hover:text-white">
                Política de Privacidad
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
