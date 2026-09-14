export interface ImplementationStage {
  number: string;
  name: string;
  stateBadge: string;
  summary: string;
  detail: string;
  milestone: string;
}

export const implementationStages: ImplementationStage[] = [
  {
    number: "01",
    name: "Diagnóstico",
    stateBadge: "Mapa operativo",
    summary: "Encontramos dónde se rompe la operación actual.",
    detail: "Auditamos la oferta, adquisición, atención y seguimiento para identificar exactamente qué piezas y flujos deben intervenirse.",
    milestone: "Mapeo de arquitectura y alcance técnico",
  },
  {
    number: "02",
    name: "Arquitectura",
    stateBadge: "Sistema definido",
    summary: "Diseñamos la operación antes de construir.",
    detail: "Modelamos la interacción entre personas, herramientas, agentes IA y CRM para asegurar continuidad en cada contacto.",
    milestone: "Blueprint integral de conversión y datos",
  },
  {
    number: "03",
    name: "Implementación",
    stateBadge: "Infraestructura conectada",
    summary: "Construimos y conectamos la infraestructura definida.",
    detail: "Desarrollamos embudos, configuramos campañas Meta Ads, integramos el CRM y programamos agentes IA de calificación.",
    milestone: "Ecosistema configurado y testeado",
  },
  {
    number: "04",
    name: "Activación",
    stateBadge: "Operación activa",
    summary: "Probamos el sistema con operación real.",
    detail: "Encendemos el enrutamiento con demanda en vivo, validando tiempos de respuesta, handoff a ventas y captura de datos.",
    milestone: "Calibración en vivo y handoff validado",
  },
  {
    number: "05",
    name: "Optimización",
    stateBadge: "Medición continua",
    summary: "Medimos el rendimiento y optimizamos sobre evidencia.",
    detail: "Analizamos el pipeline comercial de punta a punta para ajustar creativos, atención y seguimiento según ventas reales.",
    milestone: "Iteración sobre retorno y eficiencia",
  },
];
