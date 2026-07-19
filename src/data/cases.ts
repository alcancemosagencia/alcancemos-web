export interface CaseMetric {
  label: string;
  value: string;
}

export interface CaseResult {
  summary: string;
  highlights?: CaseMetric[];
}

export interface CaseNarrative {
  challenge: string;
  strategy: string;
  result: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  service: string;
  problem: string;
  solution: readonly string[];
  result: CaseResult;
  metrics: readonly CaseMetric[];
  testimonial: string;
  person: string;
  role: string;
  period?: string;
  placeholder: boolean;
  authorized: boolean;
  featured?: boolean;
  shortResult: string;
  theme?: "dark" | "light";
  narrative?: CaseNarrative;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "casa-telas",
    company: "Casa & Telas",
    industry: "Empresa Textil",
    logo: "/cases/casa-telas-dark.png",
    logoWidth: 1536,
    logoHeight: 1024,
    service: "Meta Ads Avanzado",
    featured: true,
    theme: "dark",
    shortResult: "De ventas locales a una estrategia comercial fuera de Talca.",
    narrative: {
      challenge: "Casa & Telas dependía principalmente de sus tiendas físicas y necesitaba llegar a compradores mayoristas y empresas fuera de Talca.",
      strategy: "Diseñamos un sistema de captación B2B con segmentación estratégica, calificación de prospectos y un embudo enfocado en oportunidades de mayor valor.",
      result: "La campaña transformó una inversión publicitaria de $400.000 CLP en $10.540.000 CLP en ventas durante el periodo analizado.",
    },
    problem: "Vendían principalmente en tiendas físicas y necesitaban llegar a empresas y compradores mayoristas fuera de Talca.",
    solution: ["Calificación de Leads con IA", "Segmentación B2B", "Embudos de Conversión", "Optimización continua"],
    result: {
      summary: "Con una inversión publicitaria de $400.000 CLP se generaron $10.540.000 CLP en ventas.",
      highlights: [
        { label: "Inversión publicitaria", value: "$400.000 CLP" },
        { label: "Ventas generadas", value: "$10.540.000 CLP" },
      ],
    },
    metrics: [{ label: "ROAS", value: "26.35x" }],
    testimonial: "Desde el primer día nos hicieron sentir como su prioridad. Llegaron en un momento muy difícil para nuestra empresa y hoy seguimos trabajando juntos porque los resultados hablan por sí solos.",
    person: "Soledad",
    role: "Área Comercial",
    period: "Mayo — julio de 2025",
    placeholder: false,
    authorized: true,
  },
  {
    id: "tecnocell",
    company: "Tecnocell",
    industry: "Retail Tecnología",
    logo: "/cases/tecnocell-placeholder.png",
    logoWidth: 2172,
    logoHeight: 724,
    service: "Meta Ads + Landing Page",
    shortResult: "Más oportunidades calificadas con una captación comercial ordenada.",
    problem: "Las campañas generaban muchas consultas, pero pocas terminaban en venta.",
    solution: ["Rediseño del embudo", "Landing optimizada", "Remarketing", "Optimización semanal"],
    result: { summary: "Incremento sostenido de oportunidades calificadas y reducción del costo por adquisición." },
    metrics: [
      { label: "ROAS", value: "8.4x" },
      { label: "CPA", value: "-41%" },
      { label: "Conversión", value: "+132%" },
    ],
    testimonial: "Logramos ordenar completamente nuestra captación de clientes y ahora cada campaña tiene objetivos mucho más claros.",
    person: "Carlos",
    role: "Administrador",
    placeholder: true,
    authorized: false,
  },
  {
    id: "constructora-andes",
    company: "Constructora Andes",
    industry: "Construcción",
    logo: "/cases/construccion-placeholder.png",
    logoWidth: 2172,
    logoHeight: 724,
    service: "Google Ads",
    shortResult: "Un flujo más constante de prospectos para estabilizar la captación.",
    problem: "Dependían únicamente de recomendaciones y no tenían un flujo constante de nuevos clientes.",
    solution: ["Google Ads", "Landing", "Seguimiento de conversiones", "Optimización"],
    result: { summary: "Mayor estabilidad comercial y generación constante de prospectos." },
    metrics: [
      { label: "Leads", value: "+185%" },
      { label: "Costo por Lead", value: "-38%" },
      { label: "Conversión", value: "+76%" },
    ],
    testimonial: "Por primera vez sentimos que nuestra inversión en publicidad realmente tenía una estrategia detrás.",
    person: "María",
    role: "Gerente Comercial",
    placeholder: true,
    authorized: false,
  },
] as const;
