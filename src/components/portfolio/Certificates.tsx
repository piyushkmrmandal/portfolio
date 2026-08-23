"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Bot,
  BrainCircuit,
  Cpu,
  ExternalLink,
  GraduationCap,
  Layers,
  Network,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  blurb: string;
  icon: React.ElementType;
  href?: string;
  logo: string;
  thumb?: string;
  thumbShape?: "rect" | "badge";
};

const ANTHROPIC_LOGO = "/portfolio/logos/anthropic.svg";
const SKILLSOFT_LOGO = "/portfolio/logos/skillsoft.png";

const CERTS: Cert[] = [
  {
    id: 1,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Apr 2026",
    blurb: "Foundations of working with Claude — capabilities, prompting, and safe usage patterns.",
    icon: GraduationCap,
    href: "/portfolio/certificates/anthropic-claude-101.pdf",
    logo: ANTHROPIC_LOGO,
    thumb: "/portfolio/certificates/thumbs/anthropic-claude-101.png",
  },
  {
    id: 2,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    blurb: "Applied, hands-on workflows using Claude Code for real engineering tasks.",
    icon: Terminal,
    href: "/portfolio/certificates/anthropic-claude-code-in-action.pdf",
    logo: ANTHROPIC_LOGO,
    thumb: "/portfolio/certificates/thumbs/anthropic-claude-code-in-action.png",
  },
  {
    id: 3,
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "2026",
    blurb: "Designing and orchestrating specialised subagents within an agentic workflow.",
    icon: Bot,
    href: "/portfolio/certificates/anthropic-subagents.pdf",
    logo: ANTHROPIC_LOGO,
    thumb: "/portfolio/certificates/thumbs/anthropic-subagents.png",
  },
  {
    id: 4,
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2026",
    blurb: "Packaging reusable, invocable skills to extend agent behaviour.",
    icon: Layers,
    href: "/portfolio/certificates/anthropic-agent-skills.pdf",
    logo: ANTHROPIC_LOGO,
    thumb: "/portfolio/certificates/thumbs/anthropic-agent-skills.png",
  },
  {
    id: 5,
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "May 2026",
    blurb: "Connecting agents to external tools and data sources via MCP.",
    icon: Network,
    href: "/portfolio/certificates/anthropic-mcp.pdf",
    logo: ANTHROPIC_LOGO,
    thumb: "/portfolio/certificates/thumbs/anthropic-mcp.png",
  },
  {
    id: 6,
    title: "LLM Deployment: Agentic Workflows Using the OpenAI Agent Builder",
    issuer: "Skillsoft",
    date: "Course completion",
    blurb: "Building and deploying agentic workflows with the OpenAI Agent Builder.",
    icon: Cpu,
    logo: SKILLSOFT_LOGO,
    thumb: "/portfolio/certificates/thumbs/skillsoft-llm-deployment.png",
    thumbShape: "badge",
  },
  {
    id: 7,
    title: "Agentic AI in Action: RAG with LangChain",
    issuer: "Skillsoft",
    date: "Course completion",
    blurb: "Retrieval-augmented generation patterns implemented with LangChain.",
    icon: BookOpen,
    logo: SKILLSOFT_LOGO,
    thumb: "/portfolio/certificates/thumbs/skillsoft-rag-langchain.png",
    thumbShape: "badge",
  },
  {
    id: 8,
    title: "Agentic AI in Action: Hands-On with LangChain",
    issuer: "Skillsoft",
    date: "Course completion",
    blurb: "Practical, end-to-end agent construction using the LangChain framework.",
    icon: Wrench,
    logo: SKILLSOFT_LOGO,
    thumb: "/portfolio/certificates/thumbs/skillsoft-handson-langchain.png",
    thumbShape: "badge",
  },
  {
    id: 9,
    title: "Agentic AI in Action: Tool Use with LangChain",
    issuer: "Skillsoft",
    date: "Course completion",
    blurb: "Equipping LangChain agents with external tool-calling capabilities.",
    icon: Sparkles,
    logo: SKILLSOFT_LOGO,
    thumb: "/portfolio/certificates/thumbs/skillsoft-tooluse-langchain.png",
    thumbShape: "badge",
  },
  {
    id: 10,
    title: "Inside Agentic AI: Foundations and Frontiers",
    issuer: "Skillsoft",
    date: "Course completion",
    blurb: "Core concepts and emerging frontiers shaping agentic AI systems.",
    icon: Network,
    logo: SKILLSOFT_LOGO,
    thumb: "/portfolio/certificates/thumbs/skillsoft-inside-agentic-ai.png",
    thumbShape: "badge",
  },
];

const RADIUS = 190;

export function Certificates() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [angle, setAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    const t = setInterval(() => {
      setAngle((a) => (a + 0.25) % 360);
    }, 50);
    return () => clearInterval(t);
  }, [autoRotate]);

  const active = CERTS.find((c) => c.id === activeId) ?? null;

  const handlePreview = (id: number) => {
    setActiveId(id);
    setAutoRotate(false);
  };

  const clearPreview = () => {
    setActiveId(null);
    setAutoRotate(true);
  };

  return (
    <>
      <style>{`
        .cert-section { padding: 0 0 96px; }
        .cert-head { text-align: center; padding: 96px 80px 56px; }
        @media (max-width: 768px) { .cert-head { padding: 64px 24px 48px; } }
        .cert-card { padding-top: 8px; padding-bottom: 8px; }
        .cert-inner {
          position: relative;
          overflow: hidden;
        }
        .cert-orbit-wrap {
          position: relative;
          width: 100%;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cert-orbit-core {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at 32% 28%, var(--blue-soft), var(--blue) 55%, var(--blue-700));
          box-shadow: var(--sh-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          z-index: 5;
        }
        .cert-orbit-core::before,
        .cert-orbit-core::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(42,69,214,0.22);
          animation: certPing 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .cert-orbit-core::before { inset: -16px; }
        .cert-orbit-core::after { inset: -32px; animation-delay: .6s; }
        @keyframes certPing {
          0% { transform: scale(0.9); opacity: .55; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .cert-ring {
          position: absolute;
          width: ${RADIUS * 2 + 40}px;
          height: ${RADIUS * 2 + 40}px;
          border-radius: 50%;
        }
        .cert-node {
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 0;
          border: 0;
          background: transparent;
          font: inherit;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
          cursor: pointer;
        }
        .cert-node:focus-visible { outline: 2px solid var(--blue); outline-offset: 5px; border-radius: var(--r-sm); }
        .cert-node-dot {
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 2px solid var(--line-2);
          color: var(--muted);
          box-shadow: var(--sh-sm);
          transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cert-node.active .cert-node-dot {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
          box-shadow: var(--sh-blue);
          transform: scale(1.15);
        }
        .cert-node-label {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          text-align: center;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--muted);
          line-height: 1.35;
          pointer-events: none;
        }
        .cert-node.active .cert-node-label { color: var(--ink); }
        .cert-detail {
          position: relative;
          z-index: 6;
          max-width: 640px;
          margin: 40px auto 0;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          box-shadow: var(--sh-md);
          padding: 24px;
          animation: certDetailIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes certDetailIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cert-detail-body {
          display: flex;
          gap: 20px;
        }
        .cert-detail-preview {
          flex: 0 0 168px;
          width: 168px;
          height: 130px;
          border-radius: var(--r-sm);
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--surface-2);
        }
        .cert-detail-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cert-detail-preview.placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--lav-3);
          color: var(--blue-700);
        }
        .cert-detail-preview.badge {
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cert-detail-preview.badge img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .cert-detail-main { flex: 1; min-width: 0; }
        .cert-detail-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .cert-detail-issuer {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cert-detail-issuer img {
          height: 16px;
          width: auto;
          max-width: 84px;
          object-fit: contain;
        }
        .cert-detail-issuer span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .cert-detail-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .cert-detail-date {
          font-size: 11px;
          font-family: "SF Mono", "Fira Code", monospace;
          color: var(--muted-2);
        }
        .cert-detail h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .cert-detail p {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--muted);
          margin-bottom: 16px;
        }
        @media (max-width: 560px) {
          .cert-detail-body { flex-direction: column; }
          .cert-detail-preview { width: 100%; flex-basis: auto; height: 150px; }
        }
        .cert-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--blue);
          text-decoration: none;
          border: 1px solid var(--line-2);
          border-radius: 999px;
          padding: 8px 16px;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .cert-detail-link:hover {
          border-color: var(--blue);
          background: var(--lav);
        }
        @media (max-width: 900px) {
          .cert-orbit-wrap { display: none; }
          .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
          .cert-grid-item {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: var(--r-md);
            box-shadow: var(--sh-sm);
            padding: 22px;
            transition: box-shadow 0.28s ease, transform 0.28s ease, border-color 0.28s ease;
          }
          .cert-grid-item:hover {
            box-shadow: var(--sh-md);
            border-color: var(--line-2);
            transform: translateY(-2px);
          }
          .cert-grid-item .cert-detail-preview {
            width: 100%;
            height: 110px;
            margin-bottom: 14px;
          }
          .cert-grid-item .cert-node-dot {
            position: static;
            margin: 0 0 14px;
            background: var(--lav);
            border: none;
            color: var(--blue-700);
            box-shadow: none;
          }
          .cert-grid-item h4 { font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
          .cert-grid-item .cert-detail-issuer { margin-bottom: 6px; }
          .cert-grid-item p { font-size: 12.5px; color: var(--muted); margin: 6px 0 10px; }
        }
        @media (min-width: 901px) {
          .cert-grid { display: none; }
        }
      `}</style>

      <section className="cert-section" id="certificates" data-screen-label="Certifications">
        <div className="cert-head wrap">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.4 6.6L21 10l-5.4 4.2L17 21l-5-3.6L7 21l1.4-6.8L3 10l6.6-1.4z" />
            </svg>{" "}
            Certifications
          </div>
          <h2 className="section-title">Agentic AI credentials</h2>
          <p>
            Applied certifications in agent orchestration, MCP, and LLM-powered
            workflows — from Anthropic and Skillsoft.
          </p>
        </div>

        <div className="cert-card wrap">
          <div
            className="cert-inner"
            onMouseLeave={clearPreview}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) clearPreview();
            }}
          >
            <div className="cert-orbit-wrap" ref={containerRef}>
              <div className="cert-ring" />
              <div className="cert-orbit-core">
                <BrainCircuit size={34} strokeWidth={1.75} />
              </div>
              {CERTS.map((c, i) => {
                const a = ((i / CERTS.length) * 360 + angle) % 360;
                const rad = (a * Math.PI) / 180;
                const x = RADIUS * Math.cos(rad);
                const y = RADIUS * Math.sin(rad);
                const isActive = activeId === c.id;
                const Icon = c.icon;
                return (
                  <button
                    type="button"
                    key={c.id}
                    className={`cert-node${isActive ? " active" : ""}`}
                    aria-label={`Preview ${c.title}`}
                    aria-expanded={isActive}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      opacity: activeId && !isActive ? 0.45 : 1,
                      zIndex: isActive ? 20 : 10,
                    }}
                    onMouseEnter={() => handlePreview(c.id)}
                    onFocus={() => handlePreview(c.id)}
                  >
                    <div className="cert-node-dot">
                      <Icon size={17} />
                    </div>
                    <div className="cert-node-label">{c.title}</div>
                  </button>
                );
              })}
            </div>

            <div className="cert-grid">
              {CERTS.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.id} className="cert-grid-item">
                    {c.thumb ? (
                      <div className={`cert-detail-preview${c.thumbShape === "badge" ? " badge" : ""}`}>
                        <img src={c.thumb} alt={`${c.title} certificate`} />
                      </div>
                    ) : (
                      <div className="cert-detail-preview placeholder">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="cert-detail-issuer">
                      <img src={c.logo} alt={`${c.issuer} logo`} />
                      <span>{c.issuer}</span>
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.blurb}</p>
                    {c.href && (
                      <a className="cert-detail-link" href={c.href} target="_blank" rel="noopener noreferrer">
                        View certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {active && (
              <div className="cert-detail">
                <div className="cert-detail-body">
                  {active.thumb ? (
                    <div className={`cert-detail-preview${active.thumbShape === "badge" ? " badge" : ""}`}>
                      <img src={active.thumb} alt={`${active.title} certificate`} />
                    </div>
                  ) : (
                    <div className="cert-detail-preview placeholder">
                      <active.icon size={30} strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="cert-detail-main">
                    <div className="cert-detail-head">
                      <div className="cert-detail-issuer">
                        <img src={active.logo} alt={`${active.issuer} logo`} />
                        <span>{active.issuer}</span>
                      </div>
                      <span className="cert-detail-date">{active.date}</span>
                    </div>
                    <h4>{active.title}</h4>
                    <p>{active.blurb}</p>
                    {active.href && (
                      <a className="cert-detail-link" href={active.href} target="_blank" rel="noopener noreferrer">
                        View certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
