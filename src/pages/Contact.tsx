import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import brandLogo from "../assets/logo.png";

// ─── EMAILJS CONFIG ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_msgxgmc";
const EMAILJS_TEMPLATE_ID = "template_mchwoke";
const EMAILJS_PUBLIC_KEY = "ez0Rr8wEIo1FGB1X_";
// ──────────────────────────────────────────────────────────────────

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "linkedin.com/in/williams-alayode/" }, // ← add your real links
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Williamscodes-max" },
  { icon: FaXTwitter, label: "Twitter / X", href: "https://x.com/Utd_Williams" },
];

const SERVICES = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend / API Development",
  "UX/UI Design",
  "SaaS Development",
  "Database Design",
  "Authentication & Payments",
  "Website / Landing Page",
  "Other",
];

const INFO_ITEMS = [
  { icon: <MapPin size={15} />, label: "Location", value: "Lagos, Nigeria" },
  {
    icon: <Mail size={15} />,
    label: "Email",
    value: "walayode@gmail.com", // ← replace with your real email
    href: "mailto:your.email@example.com",
  },
  {
    icon: <Phone size={15} />,
    label: "Phone",
    value: "+234 8146212556", // ← replace with your real number
    href: "tel:+2348146212556",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const inputStyle = (focused: boolean) => ({
  width: "100%",
  background: focused ? "#131b24" : "#0f1520",
  border: `1px solid ${focused ? "#3B82F6" : "#1a2332"}`,
  borderRadius: "10px",
  padding: "12px 16px",
  color: "#C5C6C7",
  fontSize: "13px",
  fontFamily: "'Space Grotesk', sans-serif",
  outline: "none",
  transition: "all 0.2s ease",
  boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.1)" : "none",
  boxSizing: "border-box" as const,
});

const labelStyle = {
  fontSize: "11px",
  color: "#3d4f63",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  fontWeight: 600,
  marginBottom: "6px",
  display: "block",
};

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          service: form.service,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

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
          Contact
        </span>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "72px 64px",
          gap: "80px",
        }}
      >
        {/* LEFT — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            flex: "0 0 42%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
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
              Get in touch
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.0,
              color: "#fff",
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            Let's build
            <br />
            something
            <br />
            <span style={{ color: "#3B82F6" }}>useful.</span>
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "#8a9bb0",
              lineHeight: 1.85,
              marginBottom: "48px",
              maxWidth: "360px",
            }}
          >
            Whether you need a full-stack application, a clean interface design, an API, or a complete digital product — I’m ready to help. Drop a message and let’s talk.
          </p>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
            {INFO_ITEMS.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3B82F6",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#3d4f63",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      margin: "0 0 2px",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ fontSize: "13px", color: "#C5C6C7", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C6C7")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "13px", color: "#C5C6C7", margin: 0 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "10px",
              padding: "12px 20px",
              marginBottom: "40px",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e80",
              }}
            />
            <span style={{ fontSize: "12px", color: "#C5C6C7", fontWeight: 500 }}>
              Available for new projects
            </span>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "16px" }}>
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                title={label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#0f1520",
                  border: "1px solid #1a2332",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3d4f63",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3B82F6";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#3B82F6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1a2332";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#3d4f63";
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <div
            style={{
              background: "#0f1520",
              border: "1px solid #1a2332",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#fff",
                marginBottom: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Send a message
            </h2>
            <p style={{ fontSize: "13px", color: "#3d4f63", marginBottom: "32px" }}>
              I’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle(focused === "name")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+234 814 621 2556"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle(focused === "phone")}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle(focused === "email")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle(focused === "service"), appearance: "none" as const }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>Subject *</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle(focused === "subject")}
                />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project or what you need help with..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  style={{
                    ...inputStyle(focused === "message"),
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#22c55e" }} />
                  <span style={{ fontSize: "13px", color: "#22c55e" }}>
                    Message sent! I’ll be in touch soon.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <AlertCircle size={16} style={{ color: "#ef4444" }} />
                  <span style={{ fontSize: "13px", color: "#ef4444" }}>
                    Something went wrong. Please try again or email me directly.
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  background:
                    status === "sending"
                      ? "#2a1f40"
                      : "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
                  color: status === "sending" ? "#3B82F6" : "#fff",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: status === "sending" ? "none" : "0 0 20px rgba(59,130,246,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      style={{
                        width: "14px",
                        height: "14px",
                        border: "2px solid #3B82F6",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
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