import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./fidelity.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { organizationSchema, websiteSchema, faqPageSchema } from "@/data/schema";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alcancemos.com"),
  alternates: { canonical: "/" },
  title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
  description:
    "Diseñamos e implementamos sistemas comerciales que conectan adquisición, automatización, inteligencia artificial y CRM para convertir más oportunidades en ventas.",
  openGraph: {
    title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
    description:
      "Diseñamos e implementamos sistemas comerciales que conectan adquisición, automatización, inteligencia artificial y CRM para convertir más oportunidades en ventas.",
    url: "https://alcancemos.com",
    siteName: "Alcancemos",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
    description:
      "Diseñamos e implementamos sistemas comerciales que conectan adquisición, automatización, inteligencia artificial y CRM para convertir más oportunidades en ventas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/assets/v3/branding/alcancemos-favicon.png", type: "image/png", sizes: "500x500" }],
    shortcut: "/assets/v3/branding/alcancemos-favicon.png",
    apple: [{ url: "/assets/v3/branding/alcancemos-favicon.png", sizes: "500x500", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFFFFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-[#FF0769]/10 selection:text-[#FF0769]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
