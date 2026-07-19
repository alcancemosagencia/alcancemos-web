import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alcancemos.com"),
  title: "Alcancemos | Agencia de Performance Marketing",
  description: "Ayudamos a empresas a crecer con Meta Ads, Google Ads y páginas de alta conversión.",
  openGraph: { title: "Alcancemos | Agencia de Performance Marketing", description: "Ayudamos a empresas a crecer con Meta Ads, Google Ads y páginas de alta conversión.", url: "https://alcancemos.com", siteName: "Alcancemos", locale: "es_ES", type: "website" },
  twitter: { card: "summary_large_image", title: "Alcancemos | Agencia de Performance Marketing", description: "Ayudamos a empresas a crecer con Meta Ads, Google Ads y páginas de alta conversión." },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/brand/alcancemos-favicon.png", type: "image/png", sizes: "500x500" }],
    shortcut: "/brand/alcancemos-favicon.png",
    apple: [{ url: "/brand/alcancemos-favicon.png", sizes: "500x500", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8F8F8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={playfair.variable}><body>{children}</body></html>;
}
