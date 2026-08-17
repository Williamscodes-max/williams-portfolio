import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PortalNav, { type PortalTheme } from "../components/PortalNav";
import { ARTICLES, CATEGORY_SLUGS, type Category } from "../data/articles";

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

export default function WritingCategory() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const category = (Object.keys(CATEGORY_SLUGS) as Category[]).find(
    (c) => CATEGORY_SLUGS[c] === categorySlug
  );

  const articles = category
    ? ARTICLES.filter((a) => a.category === category)
    : [];

  if (!category) {
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
            Category not found.
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

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "70px 40px 30px" }}>
        <Link
          to="/writing-desk"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: theme.bodyFont,
            fontSize: "12px",
            color: theme.dim,
            marginBottom: "24px",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={12} /> Case Studies
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: theme.displayFont,
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            margin: "0 0 12px",
          }}
        >
          {category}
        </motion.h1>

        <p style={{ color: theme.dim, fontSize: "14px", marginBottom: "20px" }}>
          {articles.length} {articles.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "10px 40px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "28px",
        }}
      >
        {articles.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link
              to={`/writing-desk/${a.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  borderTop: `2px solid ${theme.text}`,
                  paddingTop: "16px",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontFamily: theme.displayFont,
                    fontSize: "22px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                    lineHeight: 1.25,
                  }}
                >
                  {a.title}
                </h3>
                <span
                  style={{
                    fontFamily: theme.bodyFont,
                    fontSize: "11px",
                    color: theme.dim,
                  }}
                >
                  {a.date} · {a.readTime} read
                </span>
              </article>
            </Link>
          </motion.div>
        ))}

        {articles.length === 0 && (
          <p
            style={{
              color: theme.dim,
              fontFamily: theme.bodyFont,
              fontSize: "13px",
            }}
          >
            Nothing filed under {category} yet.
          </p>
        )}
      </div>
    </div>
  );
}