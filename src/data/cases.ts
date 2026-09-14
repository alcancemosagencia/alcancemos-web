export type CaseStatus = "real" | "provisional" | "placeholder";

export interface CaseMetric {
  label: string;
  value: string;
  isPrimary?: boolean;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  status: CaseStatus;
  authorized: boolean;
  featured: boolean;
  period: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  investment: string;
  revenue: string;
  roas: string;
  contextSummary: string;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "casa-telas",
    company: "Casa & Telas",
    industry: "Empresa Textil",
    status: "real",
    authorized: true,
    featured: true,
    period: "Mayo — julio de 2025",
    logo: "/cases/casa-telas-dark.png",
    logoWidth: 1536,
    logoHeight: 1024,
    investment: "$400.000 CLP",
    revenue: "$10.540.000 CLP",
    roas: "26.35x",
    contextSummary: "Expansión comercial y captación de clientes de mayor volumen fuera de venta local.",
  },
  {
    id: "tecnocell",
    company: "Tecnocell",
    industry: "Retail Tecnología",
    status: "placeholder",
    authorized: false,
    featured: false,
    period: "2025",
    logo: "/cases/tecnocell-placeholder.png",
    logoWidth: 2172,
    logoHeight: 724,
    investment: "$1.200.000 CLP",
    revenue: "$10.080.000 CLP",
    roas: "8.4x",
    contextSummary: "Placeholder interno para pruebas de maquetación.",
  },
  {
    id: "constructora-andes",
    company: "Constructora Andes",
    industry: "Construcción",
    status: "placeholder",
    authorized: false,
    featured: false,
    period: "2025",
    logo: "/cases/construccion-placeholder.png",
    logoWidth: 2172,
    logoHeight: 724,
    investment: "$850.000 CLP",
    revenue: "$6.800.000 CLP",
    roas: "8.0x",
    contextSummary: "Placeholder interno para pruebas de maquetación.",
  },
];

export const heroCase = caseStudies.find((c) => c.status === "real" && c.featured) ?? caseStudies[0];
