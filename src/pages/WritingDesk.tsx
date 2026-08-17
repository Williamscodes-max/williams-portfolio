import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PortalNav, { type PortalTheme } from "../components/PortalNav";
import { ARTICLES, CATEGORIES, CATEGORY_SLUGS } from "../data/articles";

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

export default function WritingDesk() {
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

      {/* Masthead */}
      <div
        style={{
          textAlign: "center",
          padding: "70px 40px 30px",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <span
          style={{
            fontFamily: theme.bodyFont,
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: theme.accent,
          }}
        >
          CASE STUDIES
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: theme.displayFont,
            fontWeight: 700,
            fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
            margin: "18px 0 14px",
            letterSpacing: "-0.5px",
          }}
        >
          Selected work.
        </motion.h1>

        <p
          style={{
            maxWidth: "440px",
            margin: "0 auto",
            color: theme.dim,
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          Project write-ups covering full-stack development, APIs, UX/UI design, and product thinking.
        </p>
      </div>

      {/* Torn-paper divider */}
      <svg
        width="100%"
        height="18"
        viewBox="0 0 1200 18"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <polygon
          points="0,0 40,14 80,2 120,16 160,4 200,12 240,0 280,14 320,3 360,17 400,5 440,11 480,1 520,15 560,4 600,10 640,0 680,13 720,2 760,16 800,4 840,12 880,0 920,14 960,3 1000,17 1040,5 1080,11 1120,1 1160,15 1200,0 1200,18 0,18"
          fill={theme.bg}
          stroke="none"
        />
      </svg>

      {/* Category stamps */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "30px 40px 10px",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat}
            to={`/writing-desk/category/${CATEGORY_SLUGS[cat]}`}
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "10.5px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "7px 14px",
              borderRadius: "3px",
              border: `1.5px solid ${theme.border}`,
              color: theme.dim,
              background: "transparent",
              cursor: "pointer",
              transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              transition: "all 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Article / Case Study grid */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 40px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "28px",
        }}
      >
        {ARTICLES.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                <span
                  style={{
                    fontFamily: theme.bodyFont,
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    color: theme.accent2,
                  }}
                >
                  {a.category.toUpperCase()}
                </span>
                <h3
                  style={{
                    fontFamily: theme.displayFont,
                    fontSize: "22px",
                    fontWeight: 700,
                    margin: "8px 0 10px",
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
      </div>
    </div>
  );
}