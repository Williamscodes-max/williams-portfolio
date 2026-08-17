import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, MapPin, Mail, Phone, ExternalLink, Link } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import brandLogo from "../assets/logo.png";

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/williams-alayode/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Williamscodes-max" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Utd_Williams" },
];

const SKILLS = [
  {
    category: "Frontend",
    color: "#3B82F6",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    color: "#7c3aed",
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs", "CRUD APIs"],
  },
  {
    category: "Databases",
    color: "#9333ea",
    items: ["PostgreSQL", "SQLite", "Database Modelling", "ERDs", "Data Validation"],
  },
  {
    category: "UX/UI Design",
    color: "#a21caf",
    items: ["Figma", "Wireframing", "Prototyping", "Dashboard Design", "Mobile UI", "Design Systems"],
  },
  {
    category: "Auth & Payments",
    color: "#c026d3",
    items: ["Clerk", "JWT", "Role-based Access", "Protected Routes", "Stripe"],
  },
  {
    category: "Tools",
    color: "#3B82F6",
    items: ["Git", "GitHub", "VS Code", "Postman", "Render", "Figma"],
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    org: "Personal & Client Projects",
    period: "Recent",
    color: "#3B82F6",
    points: [
      "Building complete web applications covering frontend, backend APIs, authentication and databases.",
      "Developed an Inventory Management API using Python, Django and Django REST Framework with full CRUD functionality.",
      "Worked on SaaS-style features including user authentication, protected dashboards, subscription plans and plan-based access control.",
      "Integrated tools such as Clerk for authentication and Stripe for payment/subscription workflows.",
    ],
  },
  {
    role: "Frontend Developer & UI Implementation",
    org: "Web Applications",
    period: "Recent",
    color: "#7c3aed",
    points: [
      "Building modern, responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.",
      "Creating dashboards, landing pages, business websites and component-based UIs.",
      "Translating Figma designs into clean, functional React/Next.js interfaces.",
    ],
  },
  {
    role: "UX/UI Designer",
    org: "Product Design",
    period: "Recent",
    color: "#9333ea",
    points: [
      "Designing clean, modern and user-focused interfaces in Figma.",
      "Creating wireframes, prototypes, dashboards, mobile interfaces and reusable design systems.",
      "Approaching products from both design and engineering perspectives to ensure practical, usable outcomes.",
    ],
  },
  {
    role: "Backend & API Development",
    org: "API Projects",
    period: "Recent",
    color: "#a21caf",
    points: [
      "Building REST APIs and backend systems with Django, Django REST Framework and Node.js/Express.",
      "Focusing on clean architecture, serializers, database modelling and maintainable code.",
      "Developing database-driven applications with PostgreSQL and SQLite.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Full-Stack & Frontend Development",
    institution: "Self-directed + Project-based learning",
    period: "Ongoing",
    color: "#3B82F6",
  },
];

const CONTACT_INFO = [
  { icon: <MapPin size={13} />, text: "Lagos, Nigeria" },
  {
    icon: <Mail size={13} />,
    text: "walayode@gmail.com",
    href: "mailto:walayode@gmail.com",
  },
  {
    icon: <Phone size={13} />,
    text: "+234 814 621 2556",
    href: "tel:+2348146212556",
  },
  {
    icon: <Link size={13} />,
    text: "linkedin.com/in/williams-alayode",
    href: "https://www.linkedin.com/in/williams-alayode/",
  },
  {
    icon: <ExternalLink size={13} />,
    text: "github.com/Williamscodes-max",
    href: "https://github.com/Williamscodes-max",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Resume() {
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
          Resume
        </span>
      </motion.div>

      {/* HERO */}
      <section
        style={{
          padding: "64px 64px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          borderBottom: "1px solid #1a2332",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
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
            Resume & Qualifications
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-2px",
              marginBottom: "12px",
            }}
          >
            Williams<span style={{ color: "#3B82F6" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#3B82F6",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Full-Stack Software Developer & UX/UI Designer
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#8a9bb0",
              maxWidth: "600px",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            I build modern, user-focused digital products that combine thoughtful UX/UI design
            with reliable full-stack development. I work across frontend, backend, APIs,
            databases and interface design to turn ideas into functional solutions.
          </p>

          {/* Contact info */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              marginBottom: "32px",
            }}
          >
            {CONTACT_INFO.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#3d4f63",
                  fontSize: "12px",
                }}
              >
                <span style={{ color: "#3B82F6" }}>{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#3d4f63", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4f63")}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* DOWNLOAD BUTTON - more visible */}
          <motion.a
            href="/mytechresume.pdf"
            download="Williams_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 0 24px rgba(59,130,246,0.35)",
            }}
          >
            <Download size={16} /> Download PDF
          </motion.a>
        </motion.div>
      </section>

      {/* REST OF THE PAGE (Experience + Skills) */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "64px 64px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
          {/* LEFT — Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginBottom: "56px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "28px",
                }}
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
                  Experience & Projects
                </span>
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "7px",
                    top: "8px",
                    bottom: "8px",
                    width: "1px",
                    background: "linear-gradient(to bottom, #3B82F6, #1a2332)",
                  }}
                />
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                      paddingLeft: "28px",
                      marginBottom: "32px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "6px",
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        background: exp.color,
                        border: "2px solid #0B0C10",
                        boxShadow: `0 0 8px ${exp.color}60`,
                      }}
                    />
                    <div
                      style={{
                        background: "#0f1520",
                        border: "1px solid #1a2332",
                        borderRadius: "12px",
                        padding: "20px",
                        borderLeft: `2px solid ${exp.color}`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "8px",
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontWeight: 700,
                              fontSize: "14px",
                              color: "#fff",
                              margin: "0 0 2px",
                            }}
                          >
                            {exp.role}
                          </h3>
                          <p
                            style={{
                              fontSize: "12px",
                              color: exp.color,
                              margin: 0,
                              fontWeight: 500,
                            }}
                          >
                            {exp.org}
                          </p>
                        </div>
                        <span
                          style={{
                            fontSize: "10px",
                            color: "#3d4f63",
                            background: "#131b24",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            border: "1px solid #1e2a36",
                            whiteSpace: "nowrap",
                            marginLeft: "8px",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: "16px" }}>
                        {exp.points.map((pt, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: "12px",
                              color: "#8a9bb0",
                              lineHeight: 1.7,
                              marginBottom: "4px",
                            }}
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Skills + Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginBottom: "48px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
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
                  Core Skills
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {SKILLS.map((group, i) => (
                  <motion.div
                    key={group.category}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: group.color,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {group.category}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "11px",
                            fontWeight: 500,
                            background: `${group.color}15`,
                            color: group.color,
                            border: `1px solid ${group.color}30`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginBottom: "48px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
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
                  Education & Learning
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                      background: "#0f1520",
                      border: "1px solid #1a2332",
                      borderLeft: `2px solid ${edu.color}`,
                      borderRadius: "10px",
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontWeight: 700,
                            fontSize: "13px",
                            color: "#fff",
                            margin: "0 0 4px",
                          }}
                        >
                          {edu.degree}
                        </h4>
                        <p style={{ fontSize: "12px", color: edu.color, margin: 0 }}>
                          {edu.institution}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#3d4f63",
                          whiteSpace: "nowrap",
                          marginLeft: "8px",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                background: "#0f1520",
                border: "1px solid #1a2332",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
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
                  Additional Info
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Focus", value: "Full-Stack Development × UX/UI Design" },
                  { label: "Location", value: "Lagos, Nigeria 🌍" },
                  { label: "Availability", value: "Open to new projects" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "12px" }}>
                    <span style={{ fontSize: "12px", color: "#3d4f63", minWidth: "90px" }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "12px", color: "#C5C6C7" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          margin: "0 auto 64px",
          borderRadius: "20px",
          padding: "48px 56px",
          background: "linear-gradient(135deg, #1a0d2e 0%, #0f1520 100%)",
          border: "1px solid #3B82F640",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "1072px",
          width: "calc(100% - 128px)",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              color: "#fff",
              letterSpacing: "-1px",
              marginBottom: "8px",
            }}
          >
            Interested in working together?
          </h2>
          <p style={{ fontSize: "14px", color: "#8a9bb0", margin: 0 }}>
            Let’s build something useful.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/contact")}
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Let’s Talk <ExternalLink size={14} />
        </motion.button>
      </motion.section>

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