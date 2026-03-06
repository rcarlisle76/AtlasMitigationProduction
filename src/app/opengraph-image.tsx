import { ImageResponse } from "next/og"
import fs from "node:fs"
import path from "node:path"

export const alt =
  "Atlas Mitigation - Professional Fire & Water Damage Restoration in Metro Atlanta"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  const logoPath = path.join(process.cwd(), "public", "logo.png")
  const logoData = fs.readFileSync(logoPath)
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f2440 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            width={120}
            height={120}
            alt=""
            style={{ marginBottom: "10px" }}
          />
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Atlas Mitigation
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#60a5fa",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Professional Fire & Water Damage Restoration
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Serving Metro Atlanta
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "30px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span>Emergency Service</span>
            <span style={{ color: "#60a5fa" }}>|</span>
            <span>Certified Technicians</span>
            <span style={{ color: "#60a5fa" }}>|</span>
            <span>(404) 808-3677</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
