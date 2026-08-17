import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import brandLogo from "../assets/logo.png";
import photo1 from "../assets/image01.jpeg";
import photo2 from "../assets/image02.jpeg";
import photo3 from "../assets/image01.jpeg";

const SERVICES = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications from frontend interfaces to backend APIs, databases, and authentication systems.",
    icon: "⌨",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, modern interfaces with React, Next.js, TypeScript and Tailwind CSS — from landing pages to complex dashboards.",
    icon: "◈",
  },
  {
    title: "Backend & API Development",
    description:
      "Designing and building REST APIs, business logic, and database-driven systems using Django, Django REST Framework, Node.js and Express.",
    icon: "⬡",
  },
  {
    title: "UX/UI Design",
    description:
      "Designing clean, intuitive interfaces in Figma — wireframes, prototypes, dashboards and mobile interfaces that translate directly into code.",
    icon: "◎",
  },
  {
    title: "Database Design",
    description:
      "Modelling relational databases, creating ERDs, and building data-driven applications with PostgreSQL and SQLite.",
    icon: "📡",
  },
  {
    title: "Authentication & Payments",
    description:
      "Implementing secure authentication (JWT, Clerk), role-based access, protected routes, and Stripe subscription workflows.",
    icon: "✍",
  },
];

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" }, // ← add your LinkedIn
  { icon: FaGithub, label: "GitHub", href: "#" },     // ← add your GitHub
  { icon: FaXTwitter, label: "Twitter / X", href: "#" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function About() {
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
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4f63")}
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <img
          src={brandLogo}
          alt="Williams"
          style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "8px" }}
        />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d4f63" }}>
          About
        </span>
      </motion.div>

      {/* HERO SECTION */}
      <section style={{ padding: "72px 64px 0", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#3B82F6" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3B82F6", fontWeight: 500 }}>
            The person behind the work
          </span>
        </motion.div>

        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
          {/* LEFT — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ flex: "0 0 42%" }}
          >
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-2px",
                marginBottom: "28px",
              }}
            >
              I'm Williams<span style={{ color: "#3B82F6" }}>.</span>
            </h1>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "16px" }}>
              I’m a Full-Stack Software Developer and UX/UI Designer focused on building modern, scalable, and user-friendly digital products. I work across frontend development, backend engineering, API development, database design, and interface design to turn ideas and business requirements into functional digital solutions.
            </p>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "16px" }}>
              My work spans React, Next.js and TypeScript on the frontend, Python, Django and Node.js on the backend, REST APIs, PostgreSQL, authentication systems, and clean UX/UI design in Figma.
            </p>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#8a9bb0", marginBottom: "40px" }}>
              I enjoy solving real-world problems through technology and creating applications that are not only functional but also simple and enjoyable to use. Whether I’m designing an interface, developing an API, modelling a database, or connecting different parts of an application, I focus on building clean and maintainable solutions.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "transparent",
                color: "#3B82F6",
                border: "1px solid #3B82F6",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Let's work together <ArrowUpRight size={14} />
            </motion.button>
          </motion.div>

          {/* RIGHT — Photo collage (keep your existing images for now) */}
          <div style={{ flex: 1, position: "relative", height: "480px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: -1, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "220px",
                height: "280px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #1a2332",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 3,
              }}
            >
              <img src={photo1} alt="Williams" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,12,16,0.4) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 2, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "30px",
                left: "200px",
                width: "180px",
                height: "230px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #1a2332",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              <img src={photo2} alt="Williams" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,12,16,0.3) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
              style={{
                position: "absolute",
                top: "220px",
                left: "100px",
                width: "200px",
                height: "240px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #3B82F6",
                boxShadow: "0 0 32px rgba(59,130,246,0.2), 0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                zIndex: 4,
              }}
            >
              <img src={photo3} alt="Williams" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(59,130,246,0.15) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: "16px",
                right: "0px",
                background: "#161d27",
                border: "1px solid #1e2a36",
                borderRadius: "10px",
                padding: "10px 16px",
                zIndex: 5,
              }}
            >
              <p style={{ fontSize: "10px", color: "#3d4f63", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                Based in
              </p>
              <p style={{ fontSize: "13px", color: "#C5C6C7", fontWeight: 600, margin: "2px 0 0" }}>
                Lagos, Nigeria 🌍
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "0px",
                background: "linear-gradient(135deg, #1a0d2e, #161d27)",
                border: "1px solid #3B82F6",
                borderRadius: "10px",
                padding: "10px 16px",
                zIndex: 5,
              }}
            >
              <p style={{ fontSize: "10px", color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
                Focus
              </p>
              <p style={{ fontSize: "13px", color: "#fff", fontWeight: 600, margin: "2px 0 0" }}>
                Full-Stack × Design
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "96px 64px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "#3B82F6" }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3B82F6", fontWeight: 500 }}>
            What I do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "-1px",
            marginBottom: "56px",
          }}
        >
          How I can help
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: "#3B82F6" }}
              style={{
                background: "#0f1520",
                border: "1px solid #1a2332",
                borderRadius: "16px",
                padding: "28px 24px",
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(59,130,246,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "16px",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #1a0d2e, #1F2833)",
                  borderRadius: "10px",
                  border: "1px solid #2a1f40",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#fff",
                  marginBottom: "10px",
                  letterSpacing: "-0.3px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#3d4f63",
                  lineHeight: 1.75,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
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
        <span style={{ fontSize: "12px", color: "#1e2a36" }}>© 2026 Williams. All rights reserved.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3B82F6" }}
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