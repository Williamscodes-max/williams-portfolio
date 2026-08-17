import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import brandLogo from "../assets/logo.png";
import heroImg from "../assets/hero.png"; // using existing image

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/williams-alayode/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Williamscodes-max" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Utd_Williams" },
];

const DOMAINS = [
  { label: "Full-Stack Development", color: "#3B82F6" },
  { label: "Frontend Development", color: "#7c3aed" },
  { label: "Backend & APIs", color: "#9333ea" },
  { label: "UX/UI Design", color: "#a21caf" },
  { label: "Databases", color: "#c026d3" },
];

const EXPERIENCES = [
  {
    category: "Full-Stack Development",
    accent: "#3B82F6",
    icon: "⌨",
    items: [
      {
        role: "Full-Stack Developer",
        org: "Personal & Client Projects",
        period: "Recent",
        description:
          "Building complete web applications that cover frontend interfaces, backend APIs, authentication, and databases. Focused on creating clean, maintainable, and scalable solutions.",
        tags: ["React", "Next.js", "Django", "Node.js", "PostgreSQL"],
      },
      {
        role: "SaaS Feature Development",
        org: "Application Projects",
        period: "Recent",
        description:
          "Worked on SaaS-style features including user authentication, protected dashboards, subscription plans, plan-based access control, and payment integration with tools like Clerk and Stripe.",
        tags: ["Clerk", "Stripe", "JWT", "Protected Routes", "Next.js"],
      },
    ],
  },
  {
    category: "Frontend Development",
    accent: "#7c3aed",
    icon: "◈",
    items: [
      {
        role: "Frontend Developer",
        org: "Web Applications",
        period: "Recent",
        description:
          "Building modern, responsive interfaces using React, Next.js, TypeScript and Tailwind CSS. Creating dashboards, landing pages, business websites and component-based UIs.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        role: "UI Implementation",
        org: "Design-to-Code",
        period: "Recent",
        description:
          "Translating Figma designs into clean, functional React and Next.js interfaces while maintaining visual consistency and good user experience.",
        tags: ["Figma", "React", "Responsive Design", "Components"],
      },
    ],
  },
  {
    category: "Backend & API Development",
    accent: "#9333ea",
    icon: "⬡",
    items: [
      {
        role: "Backend Developer",
        org: "API Projects",
        period: "Recent",
        description:
          "Developed REST APIs and backend systems using Python, Django, and Django REST Framework. Focused on clean architecture, serializers, CRUD operations and database modelling.",
        tags: ["Python", "Django", "DRF", "REST APIs"],
      },
      {
        role: "Inventory Management API",
        org: "Key Project",
        period: "Recent",
        description:
          "Built a complete inventory management backend with database modelling, serializers, full CRUD functionality and clean API endpoints ready for frontend integration.",
        tags: ["Django", "PostgreSQL", "CRUD", "Serializers"],
      },
    ],
  },
  {
    category: "UX/UI Design",
    accent: "#a21caf",
    icon: "◎",
    items: [
      {
        role: "UX/UI Designer",
        org: "Product Design",
        period: "Recent",
        description:
          "Designing clean, modern and user-focused interfaces in Figma. Creating wireframes, prototypes, dashboards, mobile interfaces and reusable design systems.",
        tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
      },
      {
        role: "Product Thinking",
        org: "Design + Development",
        period: "Recent",
        description:
          "Approaching products from both design and engineering perspectives — ensuring interfaces are visually clear while remaining technically practical to build and maintain.",
        tags: ["UX Design", "UI Design", "User Flows", "Figma"],
      },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Work() {
  const navigate = useNavigate();

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
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#3d4f63",
          }}
        >
          Experience
        </span>
      </motion.div>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "420px",
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
            backgroundPosition: "center top",
            filter: "brightness(0.25) saturate(0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(107,33,168,0.4) 0%, rgba(11,12,16,0.8) 60%, #0B0C10 100%)",
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
              Experience & Work
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
            What I build.
            <br />
            <span style={{ color: "#3B82F6" }}>How I work.</span>
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
              marginBottom: "40px",
            }}
          >
            Full-stack development and UX/UI design — building modern, user-focused digital products from idea to working application.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
          >
            {DOMAINS.map((d) => (
              <span
                key={d.label}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: `1px solid ${d.color}`,
                  color: d.color,
                  background: `${d.color}15`,
                }}
              >
                {d.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTIONS */}
      <section
        style={{
          padding: "80px 64px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {EXPERIENCES.map((domain, di) => (
          <motion.div
            key={domain.category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: di * 0.1, duration: 0.6 }}
            style={{ marginBottom: "72px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "28px",
                paddingBottom: "20px",
                borderBottom: `1px solid ${domain.accent}30`,
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${domain.accent}15`,
                  border: `1px solid ${domain.accent}40`,
                  borderRadius: "10px",
                  fontSize: "18px",
                }}
              >
                {domain.icon}
              </div>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                {domain.category}
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {domain.items.map((item, ii) => (
                <motion.div
                  key={item.role}
                  custom={ii}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  style={{
                    background: "#0f1520",
                    border: "1px solid #1a2332",
                    borderRadius: "16px",
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = domain.accent;
                    el.style.boxShadow = `0 0 24px ${domain.accent}20`;
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
                      background: `linear-gradient(90deg, ${domain.accent}, transparent)`,
                    }}
                  />

                  <div style={{ marginBottom: "12px" }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#fff",
                        margin: "0 0 4px",
                      }}
                    >
                      {item.role}
                    </h3>
                    <p style={{ fontSize: "12px", color: domain.accent, margin: 0, fontWeight: 500 }}>
                      {item.org}
                    </p>
                  </div>

                  <p
                    style={{
                      fontSize: "11px",
                      color: "#3d4f63",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {item.period}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#8a9bb0",
                      lineHeight: 1.75,
                      marginBottom: "20px",
                    }}
                  >
                    {item.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "3px 10px",
                          borderRadius: "20px",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          background: "#131b24",
                          color: "#3d4f63",
                          border: "1px solid #1e2a36",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

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
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>
          © 2026 Williams. All rights reserved.
        </span>
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