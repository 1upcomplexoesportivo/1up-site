import { ImageResponse } from "next/og";

export const alt = "1UP Complexo Esportivo — Natal/RN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -220,
            width: 720,
            height: 720,
            background: "#F7941D",
            opacity: 0.22,
            filter: "blur(160px)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div style={{ width: 52, height: 3, background: "#F7941D" }} />
          <div
            style={{
              color: "#F7941D",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "6px",
            }}
          >
            COMPLEXO ESPORTIVO · NATAL / RN
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 260,
            fontWeight: 900,
            letterSpacing: "-12px",
            lineHeight: 0.9,
            color: "white",
          }}
        >
          1<span style={{ color: "#F7941D" }}>UP</span>
        </div>

        <div
          style={{
            fontSize: 34,
            fontWeight: 400,
            color: "#d4d4d4",
            marginTop: 32,
            lineHeight: 1.25,
            maxWidth: 1000,
          }}
        >
          CrossFit · HYROX · Natação · Hidroginástica · Pilates
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#F7941D",
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: "4px",
          }}
        >
          AGENDE UMA AULA EXPERIMENTAL →
        </div>
      </div>
    ),
    { ...size },
  );
}
