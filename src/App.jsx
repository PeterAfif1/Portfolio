import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import backbeatIcon from "./assets/backbeat/icon.png";
import backbeatEditor from "./assets/backbeat/01-groove-editor.jpg";
import backbeatGenerate from "./assets/backbeat/02-generate.jpg";
import backbeatAnalytics from "./assets/backbeat/03-analytics.jpg";

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
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-16 md:py-6"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(10, 10, 10, 0.85)",
      }}
    >
      <span
        className="whitespace-nowrap md:px-8"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
        }}
      >
        Peter Afif Portfolio
      </span>
      <div
        className="hidden md:flex gap-8"
        style={{ fontSize: "0.85rem", letterSpacing: "0.08em", color: "#888" }}
      >
        {["Backbeat", "Work", "Experience", "Music", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              display: "inline-block",
              padding: "12px 0",
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
        SOFTWARE ENGINEER · IRVINE, CA
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
        className="flex flex-wrap gap-x-6 gap-y-1 md:gap-x-8 justify-center"
        style={{ fontSize: "0.85rem", marginTop: "calc(3rem - 10px)" }}
      >
        {[
          { label: "GitHub", href: "https://github.com/PeterAfif1" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/peterafif/",
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
              display: "inline-block",
              padding: "10px 4px",
              whiteSpace: "nowrap",
              color: "#888",
              textDecoration: "underline",
              textDecorationColor: "#333",
              textUnderlineOffset: "6px",
              letterSpacing: "0.08em",
              transition: "color 0.2s, text-decoration-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f0ede6";
              e.currentTarget.style.textDecorationColor = "#f0ede6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.textDecorationColor = "#333";
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
        Computer Science graduate from Cal State Fullerton building full-stack
        and AI-powered apps across web, iOS, and backend, from LLM agents with
        evals and CI gates to an iOS app on the App Store. Outside of code, I'm
        a drummer and violinist with 20K+ followers across TikTok, Instagram,
        and YouTube, and I've taught drums for seven years. Currently looking
        for software engineering roles in full-stack and AI.
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
          padding: "clamp(1.25rem, 5vw, 2rem)",
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

// ── Backbeat Feature Section ───────────────────────────────────────────────
function Backbeat() {
  const highlights = [
    {
      label: "AI groove generator",
      text: "Gemini 2.5 Flash turns a prompt like \"ghost notes\" into a playable, notated drum pattern.",
    },
    {
      label: "16-step sequencer",
      text: "AVAudioEngine drum synthesis with mixed subdivisions, swing, and real staff notation.",
    },
    {
      label: "Practice analytics",
      text: "BPM tracking, streaks, and a 28-day activity heatmap to show you're getting faster.",
    },
  ];

  const screenshots = [
    { src: backbeatEditor, alt: "Backbeat groove editor with drum notation" },
    { src: backbeatGenerate, alt: "Backbeat AI groove generator" },
    { src: backbeatAnalytics, alt: "Backbeat practice analytics" },
  ];

  const links = [
    {
      label: "App Store",
      href: "https://apps.apple.com/app/id6792944827",
      primary: true,
    },
    { label: "Website", href: "https://backbeat-app.com" },
  ];

  return (
    <section
      id="backbeat"
      style={{ padding: "clamp(4rem, 10vw, 6rem) clamp(1rem, 4vw, 2rem)", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#444",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          FEATURED · LIVE ON THE APP STORE
        </p>
      </FadeUp>

      <div
        className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] items-center"
        style={{
          gap: "3rem",
          border: "1px solid #1e1e1e",
          borderRadius: "16px",
          padding: "clamp(1.25rem, 4vw, 3rem)",
          background:
            "radial-gradient(ellipse at 80% 100%, rgba(229, 56, 59, 0.08), transparent 60%), #0f0f0f",
        }}
      >
        <FadeUp>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <img
              src={backbeatIcon}
              alt="Backbeat app icon"
              style={{ width: "64px", height: "64px", borderRadius: "14px" }}
            />
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                Backbeat
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  color: "#888",
                }}
              >
                iOS · Drum Practice
              </p>
            </div>
          </div>

          <p
            style={{
              color: "#888",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            An iOS app that helps drummers create, practice, and track grooves
            and rudiments in one place. I designed and built it end to end,
            beta tested it on real devices through TestFlight, and shipped
            version 1.0 to the App Store.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                style={{ borderLeft: "2px solid #e5383b", paddingLeft: "1rem" }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    color: "#f0ede6",
                    marginBottom: "0.25rem",
                  }}
                >
                  {h.label}
                </p>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {h.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {[
              "SwiftUI",
              "Node.js",
              "PostgreSQL",
              "Gemini API",
              "AVAudioEngine",
              "JWT",
            ].map((tag) => (
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

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  padding: "0.8rem 1.4rem",
                  borderRadius: "999px",
                  flex: "1 1 0",
                  maxWidth: "200px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  border: l.primary ? "1px solid #e5383b" : "1px solid #333",
                  background: l.primary ? "#e5383b" : "transparent",
                  color: "#f0ede6",
                  transition: "opacity 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  l.primary
                    ? (e.currentTarget.style.opacity = "0.85")
                    : (e.currentTarget.style.borderColor = "#f0ede6")
                }
                onMouseLeave={(e) =>
                  l.primary
                    ? (e.currentTarget.style.opacity = "1")
                    : (e.currentTarget.style.borderColor = "#333")
                }
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory lg:overflow-visible"
            style={{ paddingBottom: "4px" }}
          >
            {screenshots.map((shot, i) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="snap-center shrink-0 w-[58%] sm:w-[31%] lg:w-[32%]"
                style={{
                  borderRadius: "14px",
                  border: "1px solid #1e1e1e",
                  marginTop: i === 1 ? "0" : "2rem",
                }}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Work Section ───────────────────────────────────────────────────────────
function Work() {
  const projects = [
    {
      title: "Foreman",
      description:
        "AI intake system for contractors that turns messy emails, texts, and call notes into structured leads, with a tool-calling chat agent, reply drafts, and RAG estimates from past quotes. Cut extraction hallucinations from 5.9% to 1.4% (97.3% field accuracy) by moving date math and name checks from the prompt into code, with eval suites and a CI gate that fails the build on regressions. Stress-tested the agent against 26 simulated customers and 8 adversarial attacks: 0 lost leads, 24/24 attacks blocked.",
      tags: [
        "Python",
        "FastAPI",
        "React",
        "OpenAI API",
        "RAG",
        "Docker",
        "GitHub Actions",
      ],
      link: "https://github.com/PeterAfif1/foreman",
    },
    {
      title: "JobAgent",
      description:
        "AI agent that scores resume-to-job fit from 0–100, finds skill gaps, and rewrites weak bullets. A five-node LangGraph workflow rewrites and re-scores until it hits a target fit score or iteration cap, using GPT-4o for rewrites and GPT-4o-mini for repeated scoring to control API cost. Streams workflow steps over Server-Sent Events with in-browser PDF parsing and per-pass score updates; deployed on Render.",
      tags: ["Python", "LangGraph", "FastAPI", "React", "OpenAI API", "SSE"],
      link: "https://jobagent-x8qe.onrender.com",
    },
  ];

  return (
    <section
      id="work"
      style={{ padding: "4rem clamp(1rem, 4vw, 2rem)", maxWidth: "1100px", margin: "0 auto" }}
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

// ── Experience Section ─────────────────────────────────────────────────────
function Experience() {
  const roles = [
    {
      title: "Technical Consultant Intern",
      company: "TECHVITIS",
      location: "Beirut, Lebanon",
      dates: "Oct 2026 – Present",
      points: [
        "Completing a structured consultant training track covering IT infrastructure, cloud, and containerization (Docker), preparing for client-facing technical work.",
        "Deployed a highly available Dockerized web app on AWS across two Availability Zones behind an Application Load Balancer, verified by a live failover test; built an NGINX reverse proxy with SSL over private subnets.",
      ],
    },
    {
      title: "Music Instructor",
      company: "McCormick Music, Kidz Rock, Drum Path",
      location: "Orange County, CA",
      dates: "2019 – Present",
      points: [
        "Taught drums to 50+ students over seven years, adapting lessons to different ages, goals, and skill levels.",
        "Explained complex rhythms in clear, practical terms, helping students build confidence and make steady progress.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{ padding: "clamp(4rem, 12vw, 8rem) clamp(1rem, 4vw, 2rem) 0", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#444",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          WHERE I'VE WORKED
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          Experience
        </h2>
      </FadeUp>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {roles.map((r, i) => (
          <FadeUp key={r.title} delay={i * 0.1}>
            <div
              style={{
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                padding: "clamp(1.25rem, 5vw, 2rem)",
                background: "#0f0f0f",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "0.5rem 1rem",
                  marginBottom: "0.4rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                  }}
                >
                  {r.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    color: "#555",
                  }}
                >
                  {r.dates}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  color: "#888",
                  marginBottom: "1.25rem",
                }}
              >
                {r.company} · {r.location}
              </p>
              <ul
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  paddingLeft: "1.1rem",
                  listStyle: "disc",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
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
        padding: "clamp(4rem, 12vw, 8rem) clamp(1rem, 4vw, 2rem)",
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
              width: "min(325px, 100%)",
              aspectRatio: "325 / 560",
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
              width: "min(325px, 100%)",
              aspectRatio: "325 / 560",
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
        padding: "clamp(4rem, 12vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(4rem, 10vw, 6rem)",
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
            padding: "10px 4px",
            color: "#f0ede6",
            textDecoration: "underline",
            textDecorationColor: "#333",
            textUnderlineOffset: "8px",
            letterSpacing: "0.03em",
            transition: "text-decoration-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textDecorationColor = "#f0ede6")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.textDecorationColor = "#333")
          }
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
      <Backbeat />
      <Work />
      <Experience />
      <Music />
      <Contact />
      <Footer />
    </>
  );
}
