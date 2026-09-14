export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  return raw.replace(/\D/g, "");
}

export const contactConfig = {
  get whatsappUrl(): string | null {
    const num = getWhatsAppNumber();
    if (!num || num.length < 8 || num.length > 16) return null;
    const defaultMsg = encodeURIComponent("Hola, me gustaría conversar sobre cómo Alcancemos puede ayudarnos con nuestro sistema comercial.");
    return `https://wa.me/${num}?text=${defaultMsg}`;
  },
  email: "contacto@alcancemos.com",
} as const;

export const contactServices = ["Meta Ads", "Google Ads", "Landing Page", "Estrategia integral", "Otro"] as const;

export const contactBudgets = [
  "Menos de $300.000 CLP",
  "$300.000 a $600.000 CLP",
  "$600.000 a $1.000.000 CLP",
  "Más de $1.000.000 CLP",
  "Aún no lo tengo definido",
] as const;
