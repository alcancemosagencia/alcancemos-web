export interface ImplementationStage {
  number: string;
  name: string;
  summary: string;
}

export const implementationStages: ImplementationStage[] = [
  {
    number: "01",
    name: "Diagnóstico",
    summary: "Mapeamos canales, procesos y puntos de fuga.",
  },
  {
    number: "02",
    name: "Arquitectura",
    summary: "Diseñamos el flujo comercial y la lógica de IA.",
  },
  {
    number: "03",
    name: "Implementación",
    summary: "Conectamos canales, automatizaciones y CRM.",
  },
  {
    number: "04",
    name: "Activación",
    summary: "Probamos el sistema y lo ponemos en marcha.",
  },
  {
    number: "05",
    name: "Optimización",
    summary: "Medimos, ajustamos y mejoramos continuamente.",
  },
];
