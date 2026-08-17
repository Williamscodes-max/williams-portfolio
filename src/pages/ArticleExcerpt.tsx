import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PortalNav, { type PortalTheme } from "../components/PortalNav";
import { ARTICLES, CATEGORY_SLUGS } from "../data/articles";

const theme: PortalTheme = {
  bg: "#F4EFE4",
  text: "#2B2620",
  dim: "#7A7060",
  accent: "#7A3B2E",
  accent2: "#B08D57",
  border: "#DDD3BE",
  displayFont: "'Playfair Display', serif",
  bodyFont: "'IBM Plex Mono', monospace",
};

export default function ArticleExcerpt() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: theme.bg,
          color: theme.text,
          fontFamily: "'Source Serif 4', serif",
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
            Piece not found.
          </h1>
          <button
            onClick={() => navigate("/writing-desk")}
            style={{
              color: theme.accent,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: theme.bodyFont,
              fontSize: "13px",
            }}
          >
            ← Back to Case Studies
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
        fontFamily: "'Source Serif 4', serif",
      }}
    >
      <PortalNav theme={theme} />
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "70px 40px 100px" }}>
        <Link
          to={`/writing-desk/category/${CATEGORY_SLUGS[article.category]}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: theme.bodyFont,
            fontSize: "12px",
            color: theme.dim,
            marginBottom: "28px",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={12} /> {article.category}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "10.5px",
              letterSpacing: "0.08em",
              color: theme.accent2,
              textTransform: "uppercase",
            }}
          >
            {article.category}
          </span>

          <h1
            style={{
              fontFamily: theme.displayFont,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              lineHeight: 1.15,
              margin: "14px 0 16px",
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "11.5px",
              color: theme.dim,
              marginBottom: "36px",
            }}
          >
            {article.date} · {article.readTime} read
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.85, color: theme.text }}>
            {article.excerpt}
          </p>

          {article.externalUrl ? (
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "40px",
                padding: "12px 22px",
                borderRadius: "6px",
                border: `1.5px solid ${theme.accent}`,
                color: theme.accent,
                fontFamily: theme.bodyFont,
                fontSize: "12.5px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              Continue Reading <ArrowUpRight size={14} />
            </a>
          ) : (
            <p
              style={{
                marginTop: "40px",
                fontFamily: theme.bodyFont,
                fontSize: "12px",
                color: theme.dim,
              }}
            >
              — End —
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}