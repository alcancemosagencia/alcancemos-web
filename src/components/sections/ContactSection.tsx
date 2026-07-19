"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactConfig } from "@/config/contact";

const services = ["Meta Ads", "Google Ads", "Landing Page", "Estrategia integral", "Otro"] as const;
const budgets = ["Menos de $300.000 CLP", "$300.000 a $600.000 CLP", "$600.000 a $1.000.000 CLP", "Más de $1.000.000 CLP", "Aún no lo tengo definido"] as const;
const inputClass = "mt-2 min-h-12 w-full rounded-[14px] border border-border bg-white px-4 py-3 text-base text-heading outline-none transition placeholder:text-muted/55 focus:border-accent focus:ring-2 focus:ring-accent/15";

export function ContactSection() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setNotice("El formulario todavía se encuentra en etapa de integración. Puedes contactarnos directamente por WhatsApp.");
  }

  return (
    <section id="contacto" className="scroll-mt-28 py-[var(--section-spacing)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Hablemos</p>
            <h2 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-heading">Cuéntanos qué <em className="font-display font-medium italic">quieres alcanzar</em>.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Completa tus datos y conversemos sobre los objetivos, desafíos y oportunidades de tu negocio.</p>
            <div className="mt-10 border-l-2 border-accent pl-5">
              <p className="text-sm font-semibold text-heading">Contacto directo</p>
              {contactConfig.whatsappUrl ? <a href={contactConfig.whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"><MessageCircle size={18} aria-hidden /> WhatsApp</a> : <span className="mt-3 inline-flex items-center gap-2 text-sm text-muted"><MessageCircle size={18} aria-hidden /> WhatsApp · Próximamente</span>}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="rounded-[24px] bg-white p-5 shadow-[0_28px_90px_rgba(4,1,18,0.07)] sm:p-8 lg:p-10" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" id="name"><input className={inputClass} id="name" name="name" type="text" autoComplete="name" required aria-describedby="name-help" /><Help id="name-help">Ingresa tu nombre.</Help></Field>
                <Field label="Empresa" id="company"><input className={inputClass} id="company" name="company" type="text" autoComplete="organization" required aria-describedby="company-help" /><Help id="company-help">Indica el nombre de tu empresa.</Help></Field>
                <Field label="Correo electrónico" id="email"><input className={inputClass} id="email" name="email" type="email" autoComplete="email" required aria-describedby="email-help" /><Help id="email-help">Usaremos este correo para responder tu solicitud.</Help></Field>
                <Field label="Teléfono o WhatsApp" id="phone"><input className={inputClass} id="phone" name="phone" type="tel" autoComplete="tel" required aria-describedby="phone-help" /><Help id="phone-help">Incluye el código de país.</Help></Field>
                <Field label="Servicio de interés" id="service"><select className={inputClass} id="service" name="service" required defaultValue="" aria-describedby="service-help"><option value="" disabled>Selecciona una opción</option>{services.map((service) => <option key={service}>{service}</option>)}</select><Help id="service-help">Selecciona el servicio más cercano a tu necesidad.</Help></Field>
                <Field label="Presupuesto mensual estimado" id="budget"><select className={inputClass} id="budget" name="budget" required defaultValue="" aria-describedby="budget-help"><option value="" disabled>Selecciona un rango</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select><Help id="budget-help">Este dato nos ayuda a orientar la conversación.</Help></Field>
              </div>
              <div className="mt-5"><Field label="Mensaje" id="message"><textarea className={`${inputClass} min-h-36 resize-y`} id="message" name="message" required aria-describedby="message-help" /><Help id="message-help">Cuéntanos brevemente qué quieres mejorar.</Help></Field></div>
              <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-heading"><input type="checkbox" name="consent" required aria-describedby="consent-help" className="mt-1 h-5 w-5 shrink-0 accent-[#FF0769] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" /><span>Acepto ser contactado por Alcancemos para responder esta solicitud.</span></label>
              <Help id="consent-help">Tu autorización es necesaria para responderte.</Help>
              <button type="submit" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-[#e8065f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto">Enviar solicitud <Send size={17} aria-hidden /></button>
              {notice ? <p role="status" aria-live="polite" className="mt-6 rounded-[14px] border border-accent/15 bg-accent/[0.045] p-4 text-sm leading-6 text-heading">{notice}</p> : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) { return <div><label htmlFor={id} className="text-sm font-semibold text-heading">{label}</label>{children}</div>; }
function Help({ id, children }: { id: string; children: React.ReactNode }) { return <p id={id} className="mt-1.5 text-xs leading-5 text-muted">{children}</p>; }
