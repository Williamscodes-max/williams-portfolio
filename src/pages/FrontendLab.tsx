import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import PortalNav, { type PortalTheme } from "../components/PortalNav";

const theme: PortalTheme = {
  bg: "#0A0F0C",
  text: "#D7F5E3",
  dim: "#5C7A67",
  accent: "#39FF88",
  accent2: "#1E8E4F",
  border: "#16261C",
  displayFont: "'JetBrains Mono', monospace",
  bodyFont: "'JetBrains Mono', monospace",
};

const PROJECTS = [
  {
    name: "Inventory Management API",
    stack: ["Python", "Django", "DRF", "PostgreSQL"],
    github: "https://github.com/Williamscodes-max/inventory-management-api", // ← replace with your real GitHub link
    demo: "#",
    log: [
      { label: "Problem", line: "Businesses needed a reliable backend to track products, stock levels and transactions." },
      { label: "Research", line: "Mapped core inventory flows and defined clear data relationships." },
      { label: "Design", line: "Modelled the database with proper entities, relationships and validation rules." },
      { label: "Development", line: "Built full CRUD APIs with Django REST Framework, serializers and clean endpoints." },
      { label: "Result", line: "A solid, reusable inventory backend ready for frontend or mobile integration." },
    ],
  },
  {
  name: "EduNaija",
  stack: ["Next.js", "Node.js", "Clerk", "Stripe", "PostgreSQL"],
  github: "https://github.com/Williamscodes-max/edunaija",
  demo: "https://edunaija-kohl.vercel.app/",
  log: [
    {
      label: "Problem",
      line: "Learners needed a simple and accessible platform to discover courses, learn online, and track their educational progress."
    },
    {
      label: "Research",
      line: "Focused on understanding the core needs of online learners, including course discovery, secure authentication, structured learning and assessment."
    },
    {
      label: "Design",
      line: "Designed a clean learning experience with intuitive course navigation, structured lesson content, learner dashboards and assessment flows."
    },
    {
      label: "Development",
      line: "Built the LMS using Next.js, Node.js and PostgreSQL, with Clerk for authentication and Stripe for secure course and subscription payments."
    },
    {
      label: "Result",
      line: "Developed a functional learning platform that brings courses, learner accounts, assessments and educational experiences together in one place."
    },
  ],
},
 {
  name: "Ojawa",
  stack: ["React", "Next.js", "TypeScript", "Tailwind"],
  github: "https://github.com/Williamscodes-max/Ojawa",
  demo: "https://ojawa-mart.vercel.app/",
  log: [
    {
      label: "Problem",
      line: "Online shoppers needed a simple, modern and responsive platform for discovering products and making purchases."
    },
    {
      label: "Research",
      line: "Focused on creating a smooth shopping experience around product discovery, product details, cart management and checkout."
    },
    {
      label: "Design",
      line: "Designed a clean e-commerce interface with intuitive navigation, clear product presentation and a responsive shopping experience."
    },
    {
      label: "Development",
      line: "Built the e-commerce platform with React, Next.js, TypeScript and Tailwind CSS, implementing reusable components and responsive layouts."
    },
    {
      label: "Result",
      line: "Delivered a modern, mobile-friendly e-commerce storefront that provides users with a smooth and intuitive online shopping experience."
    },
  ],
},
  {
    name: "UX/UI Design Systems",
    stack: ["Figma", "React", "Design Systems"],
    behance: "https://www.behance.net/williamsalayode007",
    demo: "https://www.behance.net/gallery/211793335/Umera-Investment-Mobile-App",
    log: [
      { label: "Problem", line: "Products needed consistent, intuitive interfaces across screens." },
      { label: "Research", line: "Mapped user flows and identified friction points in existing experiences." },
      { label: "Design", line: "Designed wireframes, high-fidelity screens and reusable components in Figma." },
      { label: "Development", line: "Translated designs into clean React/Next.js interfaces." },
      { label: "Result", line: "Cohesive design language that speeds up development and improves usability." },
    ],
  },
  {
    name: "Inventory Management System",
    stack: ["Django", "React", "PostgreSQL", "REST APIs"],
    github: "https://github.com/Williamscodes-max/inventory-management-api",
    demo: "#",
    log: [
      { label: "Problem", line: "Needed database-driven applications for products, users and transactions." },
      { label: "Research", line: "Defined core entities and business rules for the domain." },
      { label: "Design", line: "Created ERDs and planned clean API contracts." },
      { label: "Development", line: "Built backend models, APIs and connected frontend interfaces." },
      { label: "Result", line: "Functional, data-driven applications supporting real business workflows." },
    ],
  },
];

function CaseStudy({ project }: { project: (typeof PROJECTS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: `1px solid ${theme.border}`, borderRadius: "10px", overflow: "hidden", background: "#0D1410" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: theme.text,
          fontFamily: theme.bodyFont,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <span style={{ color: theme.accent, fontSize: "13px" }}>$</span>
          <span style={{ fontWeight: 700, fontSize: "15px" }}>{project.name}</span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: "10px",
                  color: theme.dim,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "4px",
                  padding: "2px 6px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={16} color={theme.dim} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${theme.border}` }}>
              {project.log.map((entry, i) => (
                <div key={entry.label} style={{ display: "flex", gap: "12px", padding: "10px 0", fontSize: "13px" }}>
                  <span style={{ color: theme.accent2, width: "18px" }}>{i % 2 === 0 ? "+" : " "}</span>
                  <span style={{ color: theme.dim, width: "110px", flexShrink: 0 }}>{entry.label}</span>
                  <span style={{ color: theme.text }}>{entry.line}</span>
                </div>
              ))}
              <div style={{ display: "flex", gap: "18px", marginTop: "12px" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: theme.dim, fontSize: "12px" }}
                >
                  <FaGithub size={13} /> Source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: theme.accent, fontSize: "12px" }}
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FrontendLab() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.bg,
        color: theme.text,
        fontFamily: theme.bodyFont,
        backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }}
    >
      <PortalNav theme={theme} />

      <div style={{ padding: "80px 40px 40px", textAlign: "center" }}>
        <span style={{ color: theme.accent, fontSize: "12px", letterSpacing: "0.15em" }}>~/engineering-lab</span>
        <h1
          style={{
            fontFamily: theme.displayFont,
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            margin: "14px 0 10px",
          }}
        >
          Problem → Result.
        </h1>
        <p style={{ maxWidth: "480px", margin: "0 auto", color: theme.dim, fontSize: "13.5px", lineHeight: 1.7 }}>
          Selected projects that show how I move from problem to research, design, development and a working result.
        </p>
      </div>

      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 40px 100px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {PROJECTS.map((p) => (
          <CaseStudy key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}