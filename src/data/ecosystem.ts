export interface ArchitectureNode {
  id: string;
  name: string;
  tagline: string;
  iconType: "engineering" | "ads" | "funnels" | "ai" | "followup";
}

export const architectureNodes: Record<string, ArchitectureNode> = {
  engineering: {
    id: "engineering",
    name: "Ingeniería comercial",
    tagline: "Diseña la arquitectura y oferta",
    iconType: "engineering",
  },
  ads: {
    id: "ads",
    name: "Meta Ads",
    tagline: "Genera demanda calificada",
    iconType: "ads",
  },
  funnels: {
    id: "funnels",
    name: "Embudos",
    tagline: "Convierte atención en diálogo",
    iconType: "funnels",
  },
  ai: {
    id: "ai",
    name: "Agentes IA",
    tagline: "Atienden y califican oportunidades",
    iconType: "ai",
  },
  followup: {
    id: "followup",
    name: "Seguimiento",
    tagline: "Mantiene el avance en CRM",
    iconType: "followup",
  },
};
