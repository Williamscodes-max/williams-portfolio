import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import brandLogo from "../assets/logo.png";
import heroImg from "../assets/hero.png"; // using an existing image

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" }, // ← add your real links
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaXTwitter, label: "Twitter / X", href: "#" },
];

const SKILL_BARS = [
  { name: "React / Next.js", level: 88, color: "#3B82F6" },
  { name: "TypeScript / JavaScript", level: 85, color: "#7c3aed" },
  { name: "HTML / CSS / Tailwind", level: 90, color: "#9333ea" },
  { name: "Python / Django / DRF", level: 80, color: "#a21caf" },
  { name: "Node.js / Express", level: 75, color: "#c026d3" },
  { name: "PostgreSQL / SQLite", level: 78, color: "#3B82F6" },
];

const SKILL_CARDS = [
  {
    category: "Frontend",
    color: "#3B82F6",
    icon: "◈",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    color: "#7c3aed",
    icon: "⌨",
    skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs", "CRUD APIs"],
  },
  {
    category: "Databases",
    color: "#9333ea",
    icon: "⬡",
    skills: ["PostgreSQL", "SQLite", "Database Modelling", "ERDs", "Data Validation", "CRUD Operations"],
  },
  {
    category: "UX/UI Design",
    color: "#a21caf",
    icon: "◎",
    skills: ["Figma", "Wireframing", "Prototyping", "Dashboard Design", "Mobile UI", "Design Systems"],
  },
  {
    category: "Auth & Payments",
    color: "#c026d3",
    icon: "◑",
    skills: ["Clerk", "JWT", "Role-based Access", "Protected Routes", "Stripe", "Subscription Flows"],
  },
  {
    category: "Tools",
    color: "#3B82F6",
    icon: "✍",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Figma"],
  },
];

const TAG_CLOUD = [
  { tag: "React", weight: 3 },
  { tag: "Next.js", weight: 3 },
  { tag: "TypeScript", weight: 3 },
  { tag: "Tailwind CSS", weight: 2 },
  { tag: "Django", weight: 3 },
  { tag: "Django REST Framework", weight: 2 },
  { tag: "Node.js", weight: 2 },
  { tag: "Express.js", weight: 2 },
  { tag: "PostgreSQL", weight: 2 },
  { tag: "Figma", weight: 3 },
  { tag: "Clerk", weight: 2 },
  { tag: "Stripe", weight: 2 },
  { tag: "JWT", weight: 1 },
  { tag: "Git", weight: 2 },
  { tag: "REST APIs", weight: 2 },
  { tag: "UX Design", weight: 2 },
  { tag: "UI Design", weight: 2 },
  { tag: "Responsive Design", weight: 2 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function SkillBar({ skill, index }: { skill: (typeof SKILL_BARS)[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ marginBottom: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", color: "#C5C6C7", fontWeight: 500 }}>{skill.name}</span>
        <span style={{ fontSize: "12px", color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div style={{ height: "6px", background: "#1a2332", borderRadius: "10px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "10px",
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0B0C10",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#C5C6C7",
      }}
    >
      {/* TOP NAV */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 40px",
          borderBottom: "1px solid #1a2332",
          background: "#0B0C10",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            color: "#3d4f63",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4f63")}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <img
          src={brandLogo}
          alt="Williams"
          style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "8px" }}
        />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>
          Skills
        </span>
      </motion.div>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "380px",
          overflow: "hidden",
          borderBottom: "1px solid #1a2332",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.2) saturate(0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(11,12,16,0.7) 0%, rgba(107,33,168,0.3) 50%, rgba(11,12,16,0.9) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "60px 64px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "#3B82F6" }} />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#3B82F6",
                fontWeight: 500,
              }}
            >
              Technical Skills & Toolkit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-2px",
              marginBottom: "16px",
              maxWidth: "600px",
            }}
          >
            Tools I use.
            <br />
            <span style={{ color: "#3B82F6" }}>Products I build with.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{
              fontSize: "14px",
              color: "#8a9bb0",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}
          >
            Full-stack development and UX/UI design — from clean interfaces in Figma to reliable APIs and databases.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "80px 64px" }}>
        {/* Skill Bars + Tag Cloud */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginBottom: "80px" }}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
            >
              <div style={{ width: "24px", height: "1px", background: "#3B82F6" }} />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#3B82F6",
                  fontWeight: 500,
                }}
              >
                Proficiency
              </span>
            </motion.div>
            {SKILL_BARS.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
            >
              <div style={{ width: "24px", height: "1px", background: "#3B82F6" }} />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#3B82F6",
                  fontWeight: 500,
                }}
              >
                Skill Cloud
              </span>
            </motion.div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "flex-start" }}>
              {TAG_CLOUD.map((item, i) => (
                <motion.span
                  key={item.tag}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, borderColor: "#3B82F6", color: "#3B82F6" }}
                  style={{
                    padding: item.weight === 3 ? "8px 18px" : item.weight === 2 ? "6px 14px" : "5px 12px",
                    borderRadius: "20px",
                    fontSize: item.weight === 3 ? "13px" : item.weight === 2 ? "12px" : "11px",
                    fontWeight: item.weight === 3 ? 700 : item.weight === 2 ? 500 : 400,
                    background: item.weight === 3 ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.06)",
                    color: item.weight === 3 ? "#3B82F6" : item.weight === 2 ? "#8a9bb0" : "#3d4f63",
                    border: `1px solid ${
                      item.weight === 3 ? "rgba(59,130,246,0.4)" : "rgba(59,130,246,0.15)"
                    }`,
                    cursor: "default",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#3B82F6" }} />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3B82F6",
              fontWeight: 500,
            }}
          >
            Categories
          </span>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 600,
              background: activeCategory === null ? "#3B82F6" : "transparent",
              color: activeCategory === null ? "#fff" : "#3d4f63",
              border: `1px solid ${activeCategory === null ? "#3B82F6" : "#1a2332"}`,
              cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s",
            }}
          >
            All
          </button>
          {SKILL_CARDS.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              style={{
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                background: activeCategory === cat.category ? cat.color : "transparent",
                color: activeCategory === cat.category ? "#fff" : "#3d4f63",
                border: `1px solid ${activeCategory === cat.category ? cat.color : "#1a2332"}`,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {SKILL_CARDS.filter((cat) => activeCategory === null || cat.category === activeCategory).map(
            (cat, i) => (
              <motion.div
                key={cat.category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{
                  background: "#0f1520",
                  border: "1px solid #1a2332",
                  borderRadius: "16px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = cat.color;
                  el.style.boxShadow = `0 0 24px ${cat.color}20`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#1a2332";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: 500,
                        background: `${cat.color}10`,
                        color: cat.color,
                        border: `1px solid ${cat.color}25`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderTop: "1px solid #1a2332",
          marginTop: "auto",
        }}
      >
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>© 2026 Williams. All rights reserved.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              title={label}
              style={{ color: "#3d4f63", display: "flex", alignItems: "center" }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>Lagos, NG</span>
      </motion.footer>
    </div>
  );
}