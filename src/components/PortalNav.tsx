import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export type PortalTheme = {
  bg: string;
  text: string;
  dim: string;
  accent: string;
  accent2: string;
  border: string;
  displayFont: string;
  bodyFont: string;
};

const ROOMS = [
  { id: "ai-studio", label: "Product Studio", path: "/ai-studio" },
  { id: "writing-desk", label: "Case Studies", path: "/writing-desk" },
  { id: "frontend-lab", label: "Engineering Lab", path: "/frontend-lab" },
];

export default function PortalNav({ theme }: { theme: PortalTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        borderBottom: `1px solid ${theme.border}`,
        background: theme.bg,
        fontFamily: theme.bodyFont,
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: theme.dim,
          fontSize: "13px",
          fontFamily: theme.bodyFont,
        }}
      >
        <ArrowLeft size={14} />
        Portfolio
      </button>

      <div style={{ display: "flex", gap: "6px" }}>
        {ROOMS.map((room) => {
          const active = location.pathname === room.path;
          return (
            <button
              key={room.id}
              onClick={() => navigate(room.path)}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: `1px solid ${active ? theme.accent : theme.border}`,
                background: active ? `${theme.accent}1a` : "transparent",
                color: active ? theme.accent : theme.dim,
                fontSize: "12px",
                fontFamily: theme.bodyFont,
                fontWeight: 600,
                letterSpacing: "0.03em",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {room.label}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "18px" }}>
        <button
          onClick={() => navigate("/about")}
          style={{ background: "none", border: "none", color: theme.dim, fontSize: "12px", cursor: "pointer", fontFamily: theme.bodyFont }}
        >
          About
        </button>
        <button
          onClick={() => navigate("/contact")}
          style={{ background: "none", border: "none", color: theme.accent, fontSize: "12px", cursor: "pointer", fontFamily: theme.bodyFont, fontWeight: 600 }}
        >
          Contact
        </button>
      </div>
    </motion.div>
  );
}