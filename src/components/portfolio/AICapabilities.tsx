"use client";

const AI_TOOLS = [
  {
    name: "Claude Code",
    bg: "#c96442",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M27.18 9L36 39H29.52L27.84 33.12H19.44L17.76 39H11.28L20.1 9H27.18ZM23.64 16.2L20.88 27.72H26.4L23.64 16.2Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "GitHub Copilot",
    bg: "#161b22",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="24" cy="18" r="9" stroke="white" strokeWidth="2.2" fill="none"/>
        <circle cx="17" cy="21" r="2.5" fill="white"/>
        <circle cx="31" cy="21" r="2.5" fill="white"/>
        <path d="M17 28c0 0 2 3 7 3s7-3 7-3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 18c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M10 36c0-4 6.27-7 14-7s14 3 14 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Copilot",
    bg: "#0f0f0f",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="8" y="8" width="14" height="14" rx="1" fill="#f25022"/>
        <rect x="26" y="8" width="14" height="14" rx="1" fill="#7fba00"/>
        <rect x="8" y="26" width="14" height="14" rx="1" fill="#00a4ef"/>
        <rect x="26" y="26" width="14" height="14" rx="1" fill="#ffb900"/>
      </svg>
    ),
  },
  {
    name: "Higgsfield AI",
    bg: "#0d0d0d",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M10 10h6v28h-6z" fill="white"/>
        <path d="M32 10h6v28h-6z" fill="white"/>
        <rect x="10" y="21" width="28" height="6" rx="1" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Multi AI",
    bg: "#1a0533",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="24" cy="24" r="4" fill="white"/>
        <circle cx="10" cy="14" r="3" fill="white" opacity="0.85"/>
        <circle cx="38" cy="14" r="3" fill="white" opacity="0.85"/>
        <circle cx="10" cy="34" r="3" fill="white" opacity="0.7"/>
        <circle cx="38" cy="34" r="3" fill="white" opacity="0.7"/>
        <path d="M13 16l8 6M35 16l-8 6M13 32l8-6M35 32l-8-6" stroke="white" strokeWidth="1.6" strokeOpacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Numerous AI",
    bg: "#0a1628",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="8" y="8" width="8" height="8" rx="2" fill="white"/>
        <rect x="20" y="8" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
        <rect x="32" y="8" width="8" height="8" rx="2" fill="white" opacity="0.6"/>
        <rect x="8" y="20" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
        <rect x="20" y="20" width="8" height="8" rx="2" fill="white"/>
        <rect x="32" y="20" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
        <rect x="8" y="32" width="8" height="8" rx="2" fill="white" opacity="0.6"/>
        <rect x="20" y="32" width="8" height="8" rx="2" fill="white" opacity="0.8"/>
        <rect x="32" y="32" width="8" height="8" rx="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    bg: "#ea5b0c",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <text x="3" y="33" fontSize="22" fontWeight="800" fontFamily="system-ui, sans-serif" fill="white" letterSpacing="-1">n8n</text>
      </svg>
    ),
  },
  {
    name: "Openclaw",
    bg: "#1a1a2e",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M24 8c-3 0-6 2-7 5.5C15 17 16 20 18 22l-6 14h5l4-9 4 9h5L24 22c2-2 3-5 1-8.5C24.2 10 24 8 24 8Z" fill="white" opacity="0.9"/>
        <path d="M17 14c-2 1-3.5 3-3 5.5L8 30h4l4-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M31 14c2 1 3.5 3 3 5.5L40 30h-4l-4-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "AI-Augmented Dev",
    bg: "#0b2240",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M10.1 10.1l4.24 4.24M33.66 33.66l4.24 4.24M10.1 37.9l4.24-4.24M33.66 14.34l4.24-4.24" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.2" fill="none"/>
        <circle cx="24" cy="24" r="2.5" fill="white"/>
      </svg>
    ),
  },
];

const MARQUEE_ITEMS = [...AI_TOOLS, ...AI_TOOLS];

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
        .ai-marquee-inner {
          background: #0c0c14;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 40px 0;
          overflow: hidden;
          position: relative;
        }
        .ai-marquee-inner::before,
        .ai-marquee-inner::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .ai-marquee-inner::before {
          left: 0;
          background: linear-gradient(to right, #0c0c14 0%, transparent 100%);
        }
        .ai-marquee-inner::after {
          right: 0;
          background: linear-gradient(to left, #0c0c14 0%, transparent 100%);
        }
        .ai-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: aiMarqueeScroll 40s linear infinite;
        }
        .ai-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes aiMarqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ai-marquee-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 0 36px;
          transition: transform 0.2s ease;
        }
        .ai-marquee-item:hover {
          transform: translateY(-3px);
        }
        .ai-logo-tile {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
        }
        .ai-tool-name {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          white-space: nowrap;
          letter-spacing: 0.01em;
          font-family: inherit;
          text-align: center;
        }
        .ai-marquee-sep {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.06);
          flex-shrink: 0;
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
          <div className="ai-marquee-inner">
            <div className="ai-marquee-track">
              {MARQUEE_ITEMS.map((tool, i) => (
                <div key={`${tool.name}-${i}`} style={{ display: "flex", alignItems: "center" }}>
                  <div className="ai-marquee-item">
                    <div className="ai-logo-tile" style={{ background: tool.bg }}>
                      {tool.logo}
                    </div>
                    <span className="ai-tool-name">{tool.name}</span>
                  </div>
                  {i < MARQUEE_ITEMS.length - 1 && (
                    <div className="ai-marquee-sep" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
