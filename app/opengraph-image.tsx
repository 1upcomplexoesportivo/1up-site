import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "1UP Complexo Esportivo — Natal/RN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/logo-dark.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

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
            marginBottom: 48,
          }}
        >
          <div style={{ width: 52, height: 3, background: "#F7941D" }} />
          <div
            style={{
              color: "#F7941D",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "8px",
            }}
          >
            NATAL / RN
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src={logoSrc} height="320" alt="1UP Complexo Esportivo" />
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#d4d4d4",
            marginTop: 40,
            lineHeight: 1.25,
            maxWidth: 1040,
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
