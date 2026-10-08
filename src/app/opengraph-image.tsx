import { ImageResponse } from "next/og";

export const alt = "Alcancemos — Sistemas Comerciales, Automatización e IA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar: Brand + Tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#111111",
            }}
          >
            <span>Alcancemos</span>
            <span style={{ color: "#FF0769" }}>.</span>
          </div>
          <div
            style={{
              height: 20,
              width: 1,
              backgroundColor: "rgba(0,0,0,0.15)",
              margin: "0 12px",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#6B7280",
              letterSpacing: "-0.01em",
            }}
          >
            Sistemas Comerciales
          </span>
        </div>

        {/* Center: Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#6B7280",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FF0769",
              }}
            />
            <span>Infraestructura Comercial e IA</span>
          </div>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
              color: "#111111",
              margin: 0,
            }}
          >
            Construimos sistemas comerciales para convertir más oportunidades en ventas.
          </h1>
          <p
            style={{
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#6B7280",
              margin: 0,
            }}
          >
            Adquisición cualificada, agentes de IA conversacionales y sincronización con CRM.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: 16, color: "#9CA3AF", fontWeight: 500 }}>
            alcancemos.com
          </span>
          <div style={{ display: "flex", gap: "24px", fontSize: 15, color: "#4B5563", fontWeight: 500 }}>
            <span>Adquisición</span>
            <span>·</span>
            <span>WhatsApp IA</span>
            <span>·</span>
            <span>CRM</span>
            <span>·</span>
            <span>Atribución</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
