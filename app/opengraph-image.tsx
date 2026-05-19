import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Skerdi - Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const OpenGraphImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 18% 18%, rgba(203,172,249,0.34), transparent 30%), radial-gradient(circle at 82% 22%, rgba(96,165,250,0.22), transparent 28%), linear-gradient(135deg, #04071D 0%, #080B28 58%, #111936 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: 30,
              fontWeight: 700,
              color: "#E4ECFF",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                border: "2px solid rgba(203,172,249,0.7)",
                background: "#04071D",
                color: "#CBACF9",
                fontSize: 38,
                fontWeight: 800,
              }}
            >
              S
            </div>
            Skerdi
          </div>
          <div
            style={{
              border: "1px solid rgba(228,236,255,0.16)",
              borderRadius: 999,
              padding: "12px 22px",
              color: "#CBACF9",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              maxWidth: 930,
              fontSize: 78,
              lineHeight: 1.02,
              fontWeight: 850,
              letterSpacing: "-0.02em",
            }}
          >
            Full-Stack Developer for clean products and AI workflows.
          </div>
          <div
            style={{
              maxWidth: 820,
              color: "#C1C2D3",
              fontSize: 30,
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            Next.js, dashboards, auth, data, product logic, and practical AI
            integrations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            color: "#E4ECFF",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {["SaaS MVPs", "Dashboards", "AI Tools"].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                border: "1px solid rgba(203,172,249,0.24)",
                background: "rgba(16,19,46,0.82)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
};

export default OpenGraphImage;
