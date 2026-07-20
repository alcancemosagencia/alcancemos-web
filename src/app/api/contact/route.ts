import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactBudgets, contactConfig, contactServices } from "@/config/contact";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 20_000;

type RateLimitEntry = { count: number; resetAt: number };
type RateLimitStore = Map<string, RateLimitEntry>;

const globalRateLimit = globalThis as typeof globalThis & { contactRateLimit?: RateLimitStore };
const rateLimitStore = globalRateLimit.contactRateLimit ?? new Map<string, RateLimitEntry>();
globalRateLimit.contactRateLimit = rateLimitStore;

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

type ValidContact = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

export async function POST(request: Request) {
  const requestHeaders = await headers();
  const ip = getClientIp(requestHeaders);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta nuevamente más tarde." }, { status: 429 });
  }

  const contentLength = Number(requestHeaders.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Solicitud demasiado grande." }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const validation = validateContact(payload);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "El servicio de correo no está configurado." }, { status: 503 });
  }

  const userAgent = requestHeaders.get("user-agent")?.slice(0, 500) ?? "No disponible";
  const submittedAt = new Date().toISOString();
  const contact = validation.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Alcancemos Web <${contactConfig.email}>`,
      to: [contactConfig.email],
      replyTo: contact.email,
      subject: "Nuevo contacto desde Alcancemos.com",
      text: createTextEmail(contact, submittedAt, ip, userAgent),
      html: createHtmlEmail(contact, submittedAt, ip, userAgent),
    });

    if (error) {
      console.error("Resend rejected the contact email:", error.name);
      return NextResponse.json({ error: "No fue posible enviar la solicitud." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "No fue posible enviar la solicitud." }, { status: 502 });
  }
}

function validateContact(payload: ContactPayload): { ok: true; data: ValidContact } | { ok: false; error: string } {
  const fields = {
    name: normalizeString(payload.name, 100),
    company: normalizeString(payload.company, 120),
    email: normalizeString(payload.email, 254),
    phone: normalizeString(payload.phone, 40),
    service: normalizeString(payload.service, 80),
    budget: normalizeString(payload.budget, 80),
    message: normalizeString(payload.message, 2_000),
  };

  if (Object.values(fields).some((value) => value === null)) {
    return { ok: false, error: "Revisa los campos obligatorios y sus longitudes." };
  }

  const contact = fields as ValidContact;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(contact.email)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }
  if (!contactServices.includes(contact.service as (typeof contactServices)[number])) {
    return { ok: false, error: "Selecciona un servicio válido." };
  }
  if (!contactBudgets.includes(contact.budget as (typeof contactBudgets)[number])) {
    return { ok: false, error: "Selecciona un presupuesto válido." };
  }
  if (payload.consent !== true) {
    return { ok: false, error: "Debes autorizar el contacto para continuar." };
  }

  return { ok: true, data: contact };
}

function normalizeString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().replace(/\u0000/g, "");
  if (normalized.length === 0 || normalized.length > maxLength) return null;
  return normalized;
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(requestHeaders: Headers) {
  return requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim()
    || requestHeaders.get("x-real-ip")?.trim()
    || "No disponible";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

function createTextEmail(contact: ValidContact, date: string, ip: string, userAgent: string) {
  return `Nombre: ${contact.name}\nEmpresa: ${contact.company}\nCorreo: ${contact.email}\nTeléfono: ${contact.phone}\nServicio: ${contact.service}\nPresupuesto: ${contact.budget}\nMensaje: ${contact.message}\nFecha: ${date}\nIP: ${ip}\nUser-Agent: ${userAgent}`;
}

function createHtmlEmail(contact: ValidContact, date: string, ip: string, userAgent: string) {
  const rows = [
    ["Nombre", contact.name], ["Empresa", contact.company], ["Correo", contact.email],
    ["Teléfono", contact.phone], ["Servicio", contact.service], ["Presupuesto", contact.budget],
    ["Mensaje", contact.message], ["Fecha", date], ["IP", ip], ["User-Agent", userAgent],
  ];
  return `<h1>Nuevo contacto desde Alcancemos.com</h1><table>${rows.map(([label, value]) => `<tr><th style="padding:8px;text-align:left;vertical-align:top">${label}</th><td style="padding:8px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table>`;
}
