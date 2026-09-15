export interface ResultMetric {
  value: string;
  label: string;
}

export interface ResultCase {
  id: string;
  company: string;
  industry: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  metrics: ResultMetric[];
  phrase: string;
  slug: string;
}

export const resultCases: ResultCase[] = [
  {
    id: "casa-telas",
    company: "Casa & Telas",
    industry: "Textil",
    logo: "/cases/casa-telas-logo.png",
    logoWidth: 74,
    logoHeight: 33,
    metrics: [
      {
        value: "26.35x",
        label: "ROAS",
      },
    ],
    phrase: "De inversión a ventas.",
    slug: "casa-y-telas",
  },
  {
    id: "golds-gym",
    company: "GOLD'S GYM",
    industry: "Fitness",
    logo: "/cases/golds-gym-logo.png",
    logoWidth: 66,
    logoHeight: 45,
    metrics: [
      {
        value: "150",
        label: "Suscripciones",
      },
      {
        value: "485",
        label: "En lista de espera",
      },
    ],
    phrase: "Preventa de apertura.",
    slug: "golds-gym",
  },
  {
    id: "sevenpos",
    company: "SevenPOS",
    industry: "Tecnología",
    logo: "/cases/sevenpos-logo.png",
    logoWidth: 37,
    logoHeight: 43,
    metrics: [
      {
        value: "+100",
        label: "Suscripciones primer día",
      },
      {
        value: "50",
        label: "Nuevas mensuales",
      },
    ],
    phrase: "Software que impulsa negocios.",
    slug: "sevenpos",
  },
];
