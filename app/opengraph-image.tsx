import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "AgroLink — Personal Rural Verificado en 48 horas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0d2b0a 0%, #154212 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          color: "#bcf0ae",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 24,
          letterSpacing: 4,
        }}
      >
        🌾 AGROLINK
      </div>
      <div
        style={{
          color: "white",
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: 900,
          marginBottom: 32,
        }}
      >
        Personal rural verificado en 48 horas
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: 30,
        }}
      >
        Noroeste bonaerense · Referencias chequeadas
      </div>
    </div>
  );
}
