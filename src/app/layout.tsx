import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alcancemos.com"),
  alternates: { canonical: "/" },
  title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
  description: "Diseñamos e instalamos el sistema comercial que conecta adquisición cualificada, agentes de IA conversacionales y sincronización con CRM para escalar conversiones.",
  openGraph: {
    title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
    description: "Diseñamos e instalamos el sistema comercial que conecta adquisición cualificada, agentes de IA conversacionales y sincronización con CRM para escalar conversiones.",
    url: "https://alcancemos.com",
    siteName: "Alcancemos",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcancemos | Sistemas Comerciales, Automatización e IA",
    description: "Diseñamos e instalamos el sistema comercial que conecta adquisición cualificada, agentes de IA conversacionales y sincronización con CRM para escalar conversiones.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/brand/alcancemos-favicon.png", type: "image/png", sizes: "500x500" }],
    shortcut: "/brand/alcancemos-favicon.png",
    apple: [{ url: "/brand/alcancemos-favicon.png", sizes: "500x500", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0F0F10" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-white/20 selection:text-white">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
