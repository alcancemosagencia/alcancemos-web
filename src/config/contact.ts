const whatsappMessage = `Hola 👋

Quiero información sobre los servicios de Alcancemos.

Vengo desde la página web.`;

const whatsappParams = new URLSearchParams({ text: whatsappMessage });

export const contactConfig = {
  whatsappUrl: `https://wa.me/56949662838?${whatsappParams.toString()}`,
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
