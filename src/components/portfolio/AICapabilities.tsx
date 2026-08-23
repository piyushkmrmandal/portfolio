"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const AI_TOOLS = [
  {
    name: "Claude Code",
    bg: "#c96442",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/claude-code.svg"
        alt="Claude Code"
        width={26}
        height={26}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
      />
    ),
  },
  {
    name: "GitHub Copilot",
    bg: "#161b22",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/github-copilot.svg"
        alt="GitHub Copilot"
        width={26}
        height={26}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
      />
    ),
  },
  {
    name: "MS Copilot",
    bg: "#0f0f0f",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/microsoft-copilot.svg"
        alt="MS Copilot"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Higgsfield AI",
    bg: "#0d0d0d",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/higgsfield-ai.svg"
        alt="Higgsfield AI"
        width={21}
        height={21}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Multi AI",
    bg: "#1a0533",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/multi-ai.svg"
        alt="Multi AI"
        width={26}
        height={26}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    name: "Numerous AI",
    bg: "#0a0a18",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/numerous-ai.png"
        alt="Numerous AI"
        width={30}
        height={30}
        style={{ objectFit: "contain", borderRadius: "6px" }}
      />
    ),
  },
  {
    name: "n8n",
    bg: "#1a0a10",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/n8n.svg"
        alt="n8n"
        width={26}
        height={26}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
      />
    ),
  },
  {
    name: "Openclaw",
    bg: "#1a0a0a",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/openclaw.png"
        alt="Openclaw"
        width={35}
        height={35}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    name: "GitLab Duo",
    bg: "#2a1a0a",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/gitlab-duo.svg"
        alt="GitLab Duo"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
  },
  {
    name: "AI Dev",
    bg: "#0b2240",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24M10.1 37.9l4.24-4.24M33.66 14.34l4.24-4.24" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.2" fill="none"/>
        <circle cx="24" cy="24" r="2.5" fill="white"/>
      </svg>
    ),
  },
];

const SPRING = { type: "spring" as const, stiffness: 260, damping: 24 };
const REST_ROT = [-10, -5, -1, 4, 9, -7, 3, -4, 6, -2];
const HOVER_ROT = [-6, -3, -1, 2, 5, -4, 2, -3, 3, -1];

function arcY(i: number, total: number, px: number): number {
  if (total <= 1) return 0;
  const mid = (total - 1) / 2;
  const t = (i - mid) / mid;
  return t * t * (px * 0.18);
}

function AIToolsCluster({ tools }: { tools: typeof AI_TOOLS }) {
  const [hovered, setHovered] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [touchDevice] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );
  const reduced = useReducedMotion();

  const spread = hovered || touchDevice || !!reduced;

  const px = 54;
  const gap = 28;
  const maxVisible = 4;
  const total = tools.length;
  const peekPx = Math.round(px * 0.34);
  const collapsedW = px + (Math.min(maxVisible, total) - 1) * peekPx;
  const spreadW = total * px + (total - 1) * gap;

  const spreadX = (i: number) => i * (px + gap);
  const collapsedX = (i: number) => (i < maxVisible ? i * peekPx : (maxVisible - 1) * peekPx);

  return (
    <div
      className="ai-cluster-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="ai-cluster-track"
        style={{ height: px }}
        animate={{ width: spread ? spreadW : collapsedW }}
        transition={SPRING}
      >
        {tools.map((tool, i) => {
          const isHidden = i >= maxVisible;
          const tx = spread ? spreadX(i) : collapsedX(i);
          const ty = spread ? arcY(i, total, px) : 0;
          const rotate = reduced ? 0 : spread ? (HOVER_ROT[i] ?? 0) : (REST_ROT[i] ?? 0);
          const opacity = isHidden ? (spread ? 1 : 0) : 1;
          const isItemHovered = !touchDevice && spread && hoveredIndex === i;
          const scale = (isHidden ? (spread ? 1 : 0.6) : 1) * (isItemHovered ? 1.12 : 1);
          const zIdx = isItemHovered ? total + 1 : spread ? i + 1 : total - i;
          const showName = touchDevice || reduced ? spread : isItemHovered;

          return (
            <motion.div
              key={tool.name}
              className="ai-cluster-item"
              style={{ width: px + gap, zIndex: zIdx }}
              animate={{ x: tx, y: ty, rotate, opacity, scale }}
              transition={{ ...SPRING, delay: !reduced && isHidden ? (i - maxVisible) * 0.05 : 0 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((cur) => (cur === i ? null : cur))}
            >
              <div className="ai-logo-tile" style={{ width: px, height: px, background: tool.bg }}>
                {tool.logo}
              </div>
              <motion.span
                className="ai-tool-name"
                animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 4 }}
                transition={{ duration: 0.2, delay: showName ? 0.05 : 0 }}
              >
                {tool.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="ai-impact-pill-wrap"
        style={{ overflow: "hidden", flexShrink: 0 }}
        animate={{ width: spread ? 0 : 640, marginLeft: spread ? 0 : 24 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="ai-impact-pill"
          style={{ pointerEvents: spread ? "none" : "auto" }}
          animate={{ opacity: spread ? 0 : 1, x: spread ? -16 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="ai-impact-dot" />
          Augmenting every phase of delivery — from code to deployment
        </motion.div>
      </motion.div>
    </div>
  );
}

export function AICapabilities() {
  return (
    <>
      <style>{`
        .ai-marquee-section {
          padding: 0 0 96px;
        }
        .ai-marquee-head {
          text-align: center;
          padding: 96px 80px 56px;
        }
        @media (max-width: 768px) {
          .ai-marquee-head {
            padding: 64px 24px 48px;
          }
        }
        .ai-marquee-card {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 80px;
        }
        @media (max-width: 768px) {
          .ai-marquee-card {
            padding: 0 24px;
          }
        }
        .ai-cluster-inner {
          padding: 48px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: auto;
        }
        .ai-cluster-row {
          position: relative;
          display: flex;
          align-items: center;
          cursor: default;
        }
        .ai-cluster-track {
          position: relative;
        }
        .ai-impact-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          white-space: nowrap;
          background: #0c0c14;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 14px 24px 14px 18px;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        }
        .ai-impact-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.15);
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .ai-impact-pill-wrap {
            display: none;
          }
        }
        .ai-cluster-item {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .ai-logo-tile {
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.35);
          flex-shrink: 0;
        }
        .ai-tool-name {
          font-size: 11px;
          font-weight: 600;
          color: var(--ink, #131726);
          text-align: center;
          max-width: 76px;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 768px) {
          .ai-cluster-inner {
            padding: 48px 16px;
          }
        }
      `}</style>

      <section className="ai-marquee-section" id="ai-capabilities" data-screen-label="AI Fluency">
        <div className="ai-marquee-head wrap">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
              <circle cx="12" cy="12" r="3" />
            </svg>{" "}
            AI Fluency
          </div>
          <h2 className="section-title">AI-Augmented Engineering</h2>
          <p>
            Daily use of frontier AI agents and tools — from autonomous coding
            to multi-model orchestration across enterprise workflows.
          </p>
        </div>

        <div className="ai-marquee-card">
          <div className="ai-cluster-inner">
            <AIToolsCluster tools={AI_TOOLS} />
          </div>
        </div>
      </section>
    </>
  );
}
