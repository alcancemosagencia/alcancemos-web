export interface FragmentationStep {
  id: string;
  tool: string;
  role: string;
  state: string;
  ruptureBadge: string;
  ruptureDetail: string;
}

export const fragmentationSteps: FragmentationStep[] = [
  {
    id: "ads-to-whatsapp",
    tool: "Meta Ads",
    role: "Adquisición",
    state: "Lead generado",
    ruptureBadge: "Sin respuesta a tiempo",
    ruptureDetail: "Demora en el primer contacto",
  },
  {
    id: "whatsapp-to-crm",
    tool: "WhatsApp",
    role: "Conversación",
    state: "Chat sin clasificar",
    ruptureBadge: "Seguimiento pendiente",
    ruptureDetail: "Depende de memoria y notas",
  },
  {
    id: "crm-to-sales",
    tool: "CRM",
    role: "Pipeline",
    state: "Contexto incompleto",
    ruptureBadge: "Datos fragmentados",
    ruptureDetail: "Historial disperso",
  },
  {
    id: "sales-to-direction",
    tool: "Dirección",
    role: "Control comercial",
    state: "Resultado incierto",
    ruptureBadge: "Sin atribución",
    ruptureDetail: "Inversión no correlacionada",
  },
];
