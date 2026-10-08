export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alcancemos.com/#organization",
  name: "Alcancemos",
  url: "https://alcancemos.com",
  logo: {
    "@type": "ImageObject",
    url: "https://alcancemos.com/assets/v3/branding/alcancemos-logo-dark.png",
    width: 2757,
    height: 500,
  },
  description:
    "Diseño e implementación de sistemas comerciales, automatización de ventas e infraestructura comercial conectada con Inteligencia Artificial.",
  email: "contacto@alcancemos.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  sameAs: [
    "https://alcancemos.com",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alcancemos.com/#website",
  url: "https://alcancemos.com",
  name: "Alcancemos",
  description:
    "Construimos sistemas comerciales para convertir más oportunidades en ventas.",
  publisher: {
    "@id": "https://alcancemos.com/#organization",
  },
  inLanguage: "es",
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://alcancemos.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué tipo de empresas atienden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos principalmente con empresas B2B, servicios profesionales y marcas con venta consultiva que ya cuentan con tracción comercial o inversión publicitaria activa, y necesitan estructurar su proceso de prospección, calificación y cierre para no perder oportunidades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Reemplazan a nuestro equipo comercial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nuestro sistema automatiza las etapas repetitivas y mecánicas: captura de datos, primer contacto instantáneo, calificación previa y agendamiento. Esto permite que tus ejecutivos comerciales concentren el 100% de su tiempo en prospectos calificados y negociaciones de alto valor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma la implementación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un despliegue típico toma entre 2 y 4 semanas, dependiendo de la cantidad de canales de entrada, la complejidad de las reglas de calificación y las integraciones requeridas con tu CRM actual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué herramientas y tecnologías utilizan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integramos canales como Meta Ads, Google Ads y WhatsApp Cloud API con motores de automatización (Make, n8n, webhooks personalizados), CRMs líderes (HubSpot, Salesforce, Pipedrive o desarrollos a medida) y modelos de IA avanzados ajustados con las reglas específicas de tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo garantizan los resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diseñamos el sistema con trazabilidad completa de extremo a extremo. Cada conversación, lead y venta cuenta con atribución clara, lo que permite medir con precisión el retorno sobre la inversión publicitaria y optimizar el rendimiento comercial en base a datos reales.",
      },
    },
  ],
};
