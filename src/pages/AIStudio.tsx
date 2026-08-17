import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const PROCESS = ["Brief", "Research", "Design", "Build", "Test", "Ship"];

const PROMPTS = [
  "Design a clean dashboard layout for inventory management...",
  "Create a responsive landing page with strong visual hierarchy...",
  "Build a protected route system with role-based access control...",
];

function TypingPrompt() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PROMPTS[index];
    const speed = deleting ? 20 : 35;
    const timeout = setTimeout(() => {
      if (!deleting && display.length < full.length) {
        setDisplay(full.slice(0, display.length + 1));
      } else if (!deleting && display.length === full.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && display.length > 0) {
        setDisplay(display.slice(0, -1));
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % PROMPTS.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, index]);

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "15px",
        color: theme.accent,
        background: "#120a1e",
        border: `1px solid ${theme.border}`,
        borderRadius: "10px",
        padding: "18px 22px",
        minHeight: "24px",
      }}
    >
      <span style={{ color: theme.dim }}>{"> "}</span>
      {display}
      <span style={{ opacity: 0.7 }}>|</span>
    </div>
  );
}

export default function AIStudio() {
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

      {/* Hero */}
      <div
        style={{
          position: "relative",
          padding: "90px 40px 60px",
          textAlign: "center",
          background: `radial-gradient(ellipse at 50% 0%, ${theme.accent}14 0%, transparent 60%)`,
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontSize: "12px", letterSpacing: "0.2em", color: theme.accent }}
        >
          PRODUCT STUDIO
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontFamily: theme.displayFont,
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            margin: "16px 0 12px",
            letterSpacing: "-1.5px",
          }}
        >
          From idea to product.
        </motion.h1>

        <p
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            color: theme.dim,
            fontSize: "14.5px",
            lineHeight: 1.7,
          }}
        >
          UX/UI design, product thinking, and full-stack development — turning
          concepts into working digital products.
        </p>
      </div>

      {/* Process steps */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "20px 40px 70px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {PROCESS.map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${theme.accent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: theme.accent,
                    margin: "0 auto 8px",
                    fontFamily: "monospace",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span style={{ fontSize: "12px", color: theme.dim }}>{step}</span>
              </div>
              {i < PROCESS.length - 1 && (
                <div style={{ width: "24px", height: "1px", background: theme.border }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Behind the Process */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 40px 70px" }}>
        <h2 style={{ fontFamily: theme.displayFont, fontSize: "20px", marginBottom: "16px" }}>
          Behind the Process
        </h2>
        <TypingPrompt />
      </div>

      {/* Featured Work */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px 100px" }}>
        <h2 style={{ fontFamily: theme.displayFont, fontSize: "20px", marginBottom: "24px" }}>
          Featured Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {CAMPAIGNS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <Link to={`/ai-studio/${c.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  style={{
                    aspectRatio: "4 / 3",
                    borderRadius: "14px",
                    border: `1px solid ${theme.border}`,
                    background: c.posterSrc
                      ? `#120a1e url(${c.posterSrc}) center/cover`
                      : "#120a1e",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: theme.accent,
                      border: `1px solid ${theme.accent}`,
                      borderRadius: "999px",
                      padding: "3px 10px",
                      width: "fit-content",
                      marginBottom: "10px",
                      background: theme.bg,
                    }}
                  >
                    {c.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: theme.displayFont,
                      fontSize: "15px",
                      fontWeight: 600,
                      textShadow: "0 1px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {c.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}