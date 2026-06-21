"use client";

const AI_TOOLS = [
  {
    name: "Claude Code",
    bg: "#c96442",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/claude-code.svg"
        alt="Claude Code"
        width={30}
        height={30}
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
        width={30}
        height={30}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
      />
    ),
  },
  {
    name: "Microsoft Copilot",
    bg: "#0f0f0f",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/microsoft-copilot.svg"
        alt="Microsoft Copilot"
        width={32}
        height={32}
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
        src="/logos/ai/higgsfield.png"
        alt="Higgsfield AI"
        width={36}
        height={36}
        style={{ objectFit: "contain", borderRadius: "8px" }}
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
        width={30}
        height={30}
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
        width={36}
        height={36}
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
        width={30}
        height={30}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
      />
    ),
  },
  {
    name: "Openclaw",
    bg: "#c0392b",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/ai/openclaw.png"
        alt="Openclaw"
        width={42}
        height={42}
        style={{ objectFit: "contain" }}
      />
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
