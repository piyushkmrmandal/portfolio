"use client";

import type { PointerEvent } from "react";

function handleMove(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", x.toFixed(1));
  el.style.setProperty("--my", y.toFixed(1));
  el.style.setProperty("--mxp", (x / r.width).toFixed(3));
}

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const CopilotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
    <path d="M8 12h8M12 8v8" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 2 3.5 6.5L22 10l-5 4.5 1.5 7L12 18l-6.5 3.5L7 14.5 2 10l6.5-1.5L12 2Z" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" opacity="0.7" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M7 12h3M14 12l3.5-5M14 12l3.5 5" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AI_TOOLS = [
  {
    icon: <BrainIcon />,
    name: "Claude Code",
    pills: ["Anthropic", "Agentic", "Code Generation", "Multi-file Edits"],
  },
  {
    icon: <CopilotIcon />,
    name: "GitHub Copilot",
    pills: ["Microsoft", "IDE Integration", "Autocomplete", "PR Summaries"],
  },
  {
    icon: <DiamondIcon />,
    name: "Microsoft Copilot",
    pills: ["M365", "Workflow AI", "Documentation", "Enterprise"],
  },
  {
    icon: <VideoIcon />,
    name: "Higgsfield AI",
    pills: ["Generative Video", "Cinematic", "Motion AI", "Content"],
  },
  {
    icon: <NetworkIcon />,
    name: "Multi AI",
    pills: ["Orchestration", "Multi-model", "Parallel Agents", "Research"],
  },
  {
    icon: <GridIcon />,
    name: "Numerous AI",
    pills: ["Spreadsheet AI", "Automation", "Bulk Processing", "Formulas"],
  },
  {
    icon: <SparkleIcon />,
    name: "AI-Augmented Dev",
    pills: ["Code Review", "Architecture", "System Design", "Daily Use"],
  },
];

export function AICapabilities() {
  return (
    <section className="section" id="ai-capabilities" data-screen-label="AI Fluency">
      <div className="wrap">
        <div className="section-head reveal">
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
        <div className="skills-grid spotlight-grid" id="aiCapabilitiesGrid">
          {AI_TOOLS.map((tool, i) => (
            <div
              className={`skill-card reveal d${(i % 3) + 1}`}
              key={tool.name}
              onPointerMove={handleMove}
            >
              <div className="sc-ic">{tool.icon}</div>
              <h4>{tool.name}</h4>
              <div className="pills">
                {tool.pills.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
