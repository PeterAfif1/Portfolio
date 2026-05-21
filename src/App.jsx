import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// ── Fade-up animation wrapper ──────────────────────────────────────────────
function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(10, 10, 10, 0.85)",
        padding: "1.5rem 4rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
          padding: "2rem 2rem",
        }}
      >
        Peter Afif Portfolio
      </span>
      <div
        className="flex gap-8"
        style={{ fontSize: "0.85rem", letterSpacing: "0.08em", color: "#888" }}
      >
        {["Work", "Music", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f0ede6")}
            onMouseLeave={(e) => (e.target.style.color = "#888")}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

// ── Hero  Section ───────────────────────────────────────────────────────────
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <motion.section
      style={{ y, opacity }}
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24"
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          color: "#666",
          marginBottom: "1.5rem",
        }}
        className="text-center"
      >
        CS MAJOR · FULLERTON, CA
      </motion.p>

      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
          className="text-center"
        >
          Peter
        </motion.h1>
      </div>

      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.05,
            letterSpacing: "0.05em",
            color: "#666",
            paddingBottom: "2px",
          }}
          className="text-center"
        >
          Afif
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex gap-10 bottom-0 justify-center"
        style={{ fontSize: "0.85rem", marginTop: "3rem" }}
      >
        {[
          { label: "GitHub", href: "https://github.com/PeterAfif1" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/peter-afif-4ba131264/",
          },
          {
            label: "Resume",
            href: "/Peter_Afif_Resume.pdf",
            target: "_blank",
            download: true,
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.target || "_blank"}
            download={link.download || false}
            rel="noreferrer"
            style={{
              color: "#888",
              textDecoration: "none",
              borderBottom: "1px solid #333",
              paddingBottom: "2px",
              letterSpacing: "0.08em",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#f0ede6";
              e.target.style.borderColor = "#f0ede6";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#888";
              e.target.style.borderColor = "#333";
            }}
          >
            {link.label} ↗
          </a>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center"
        style={{
          fontSize: "0.95rem",
          color: "#666",
          marginTop: "2.5rem",
          maxWidth: "560px",
          margin: "2.5rem auto 0",
          lineHeight: 1.7,
          letterSpacing: "0.02em",
        }}
      >
        CS student at Cal State Fullerton (graduating July 2026) building
full-stack web apps and ML tools; 3 deployed projects spanning Python,
React, Node.js, PostgreSQL, and GPT-4o. Outside of code, I'm a
drummer and violinist with 20K+ followers across TikTok, Instagram, and
YouTube. Currently looking for software engineering roles in web
development and AI.
      </motion.p>
    </motion.section>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────
function ProjectCard({ title, description, tags, link, index }) {
  return (
    <FadeUp delay={index * 0.1}>
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          border: "1px solid #1e1e1e",
          borderRadius: "12px",
          padding: "2rem",
          background: "#0f0f0f",
          cursor: "pointer",
          transition: "border-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#333")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
            }}
          >
            {title}
          </h3>
          <span style={{ color: "#444", fontSize: "1.2rem" }}>↗</span>
        </div>
        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "#555",
                border: "1px solid #222",
                borderRadius: "4px",
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.a>
    </FadeUp>
  );
}

// ── Work Section ───────────────────────────────────────────────────────────
function Work() {
  const projects = [
    {
      title: "ResumeShift",
      description:
          "AI-powered resume analyzer with a 5-phase stateful multi-turn conversation engine using GPT-4o. Built a GPT-4o-mini intent classifier to detect phase completion, replacing brittle regex. Supports optional job description grounding to extract role-specific keywords absent from the resume. Designed a custom eval framework measuring keyword hit rate — improved from 0.10 → 0.81 across 4 prompt iterations on 10 labeled test cases.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "GPT-4o",
        "OpenAI API",
        "Vite",
        "JavaScript",
      ],
      link: "https://resume-shift.vercel.app",
    },
    {
      title: "Groove Vault",
      description:
        "Full-stack TypeScript practice tracker for drummers with a RAG-powered AI assistant. PDFs are chunked, embedded with OpenAI text-embedding-3-small, stored in pgvector, and retrieved via cosine similarity for grounded GPT-4o responses. Features a RESTful API with window function CTEs for BPM trend tracking, gap-and-island SQL for streak calculation, a Web Audio API metronome, and CI/CD with 5 parallel GitHub Actions jobs.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "pgvector",
        "OpenAI API",
        "GitHub Actions",
      ],
      link: "https://groove-vault-f1b2.onrender.com",
    },
    {
  title: "Backbeat AI",
  description:
    "ML-powered drum practice analyzer. A Python pipeline uses Librosa to extract 16 rhythm features and a Scikit-learn GradientBoostingClassifier to classify live drumming into 4 timing states. Trained on 57k augmented samples with class-weighted training, improving minority class recall from 0.16 to 0.45. Deployed via Docker with server-side FFmpeg audio conversion and WebSocket real-time prediction streaming.",
  tags: [
    "Python",
    "Scikit-learn",
    "Librosa",
    "React",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "WebSocket",
  ],
  link: "https://backbeatai.vercel.app/",
},
  ];

  return (
    <section
      id="work"
      style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#444",
            marginBottom: "1rem",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          SELECTED WORK
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            marginBottom: "4rem",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Projects
        </h2>
      </FadeUp>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── Music Section ──────────────────────────────────────────────────────────

function Music() {
  useEffect(() => {
    if (window.tiktokEmbed) {
      window.tiktokEmbed.lib.render();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="music"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#444",
            marginBottom: "1rem",
          }}
        >
          BEYOND THE CODE
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            marginBottom: "1rem",
          }}
        >
          Music
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: "520px",
            marginBottom: "3rem",
            justifyContent: "center",
            display: "inline-block",
          }}
        >
          Drummer and violinist. I post covers, practice clips, and original
          content on TikTok, Instagram, and YouTube.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/G3zFpQyWsn4?si=9ohT1_2jIl3-8N39"
            title="Drum video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "325px",
              height: "560px",
              border: "none",
              borderRadius: "12px",
            }}
          />

          <iframe
            src="https://www.youtube.com/embed/BB_B053V6UU"
            title="Drum video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "325px",
              height: "560px",
              border: "none",
              borderRadius: "12px",
            }}
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              label: "TikTok",
              handle: "@Afifdrums",
              href: "https://tiktok.com/@Afifdrums",
            },
            {
              label: "Instagram",
              handle: "@peter_afif",
              href: "https://instagram.com/peter_afif",
            },
            {
              label: "YouTube",
              handle: "@afifdrums",
              href: "https://youtube.com/@afifdrums",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                border: "1px solid #1e1e1e",
                borderRadius: "8px",
                padding: "1rem 1.5rem",
                color: "#888",
                fontSize: "0.85rem",
                transition: "border-color 0.2s, color 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "200px",
                height: "120px",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.color = "#f0ede6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e1e1e";
                e.currentTarget.style.color = "#888";
              }}
            >
              <span
                style={{
                  color: "#444",
                  fontSize: "1.25rem",
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </span>
              <span style={{ fontSize: "1.0rem" }}>
                {s.handle} {"↗"}
              </span>
            </a>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem 6rem",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#444",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          GET IN TOUCH
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          Let's work
          <br />
          <span style={{ fontStyle: "italic", color: "#555" }}>together.</span>
        </h2>
        <a
          href="mailto:peterafif19@gmail.com"
          style={{
            display: "inline-block",
            fontSize: "1rem",
            color: "#f0ede6",
            textDecoration: "none",
            borderBottom: "1px solid #333",
            paddingBottom: "4px",
            letterSpacing: "0.03em",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#f0ede6")}
          onMouseLeave={(e) => (e.target.style.borderColor = "#333")}
        >
          peterafif19@gmail.com {"↗"}
        </a>
      </FadeUp>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        color: "#333",
        fontSize: "0.8rem",
      }}
    >
      <span>Peter Afif © 2026</span>
      <span>Cal State Fullerton · CS</span>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <Music />
      <Contact />
      <Footer />
    </>
  );
}
