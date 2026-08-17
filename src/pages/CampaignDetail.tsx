import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PortalNav, { type PortalTheme } from "../components/PortalNav";
import { CAMPAIGNS } from "../data/campaigns";

const theme: PortalTheme = {
  bg: "#0B0714",
  text: "#E5E1F0",
  dim: "#8a7fa8",
  accent: "#3B82F6",
  accent2: "#1D4ED8",
  border: "#231a35",
  displayFont: "'Syne', sans-serif",
  bodyFont: "'Space Grotesk', sans-serif",
};

export default function CampaignDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const campaign = CAMPAIGNS.find((c) => c.slug === slug);

  if (!campaign) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: theme.bg,
          color: theme.text,
          fontFamily: theme.bodyFont,
        }}
      >
        <PortalNav theme={theme} />
        <div style={{ textAlign: "center", padding: "100px 40px" }}>
          <h1
            style={{
              fontFamily: theme.displayFont,
              fontSize: "28px",
              marginBottom: "16px",
            }}
          >
            Project not found.
          </h1>
          <button
            onClick={() => navigate("/ai-studio")}
            style={{
              color: theme.accent,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            ← Back to Product Studio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.bg,
        color: theme.text,
        fontFamily: theme.bodyFont,
      }}
    >
      <PortalNav theme={theme} />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 40px 100px" }}>
        <Link
          to="/ai-studio"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            color: theme.dim,
            marginBottom: "28px",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={12} /> Product Studio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: theme.accent,
              border: `1px solid ${theme.accent}`,
              borderRadius: "999px",
              padding: "3px 10px",
            }}
          >
            {campaign.tag}
          </span>

          <h1
            style={{
              fontFamily: theme.displayFont,
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              margin: "16px 0 20px",
              letterSpacing: "-1px",
            }}
          >
            {campaign.name}
          </h1>

          {/* Video (only shows if you provide a videoSrc) */}
          {campaign.videoSrc && (
            <video
              src={campaign.videoSrc}
              poster={campaign.posterSrc || undefined}
              controls
              preload="metadata"
              style={{
                width: "100%",
                borderRadius: "12px",
                border: `1px solid ${theme.border}`,
                marginBottom: "36px",
                background: "#000",
              }}
            />
          )}

          {/* Brief */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                color: theme.dim,
                marginBottom: "10px",
              }}
            >
              OVERVIEW
            </h2>
            <p style={{ fontSize: "15.5px", lineHeight: 1.75, color: theme.text }}>
              {campaign.brief}
            </p>
          </div>

          {/* Process / Key points */}
          {campaign.prompts.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: theme.dim,
                  marginBottom: "12px",
                }}
              >
                KEY DETAILS
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {campaign.prompts.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "monospace",
                      fontSize: "13.5px",
                      color: theme.accent,
                      background: "#120a1e",
                      border: `1px solid ${theme.border}`,
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <span style={{ color: theme.dim }}>{"> "}</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stills */}
          {campaign.stills.length > 0 && (
            <div style={{ marginTop: "36px" }}>
              <h2
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: theme.dim,
                  marginBottom: "12px",
                }}
              >
                VISUALS
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "10px",
                }}
              >
                {campaign.stills.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: `1px solid ${theme.border}`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}