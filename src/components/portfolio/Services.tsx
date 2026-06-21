"use client";

import { useState } from "react";
import { Globe, Layers, Server, Rocket, ArrowUpRight } from "lucide-react";
import styles from "./Services.module.css";

/* ─── Shared keyframes injected once ─────────────────────────── */
const KEYFRAMES = `
  @keyframes svcFadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes svcScaleY {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes svcLineDraw {
    from { stroke-dashoffset: 400; }
    to   { stroke-dashoffset: 0;   }
  }
  @keyframes svcPulse {
    0%, 100% { opacity: 0.35; }
    50%       { opacity: 0.9;  }
  }
  @keyframes svcCountUp {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
`;

const du = (s: number): React.CSSProperties => ({
  animationDelay: `${s}s`,
  animationFillMode: "both",
});

/* ─── Website Visual ─────────────────────────────────────────── */
function WebsiteVisual({ accent }: { accent: string }) {
  return (
    <div className={styles.visualCanvas}>
      <div className={styles.browser}>
        <div className={styles.browserChrome}>
          <span className={styles.dot} style={{ background: "#ff5f57" }} />
          <span className={styles.dot} style={{ background: "#febc2e" }} />
          <span className={styles.dot} style={{ background: "#28c840" }} />
          <div className={styles.urlBar}>
            <span style={{ color: accent, fontSize: 8 }}>https://</span>
            <span style={{ fontSize: 8, opacity: 0.55 }}>yoursite.com</span>
          </div>
        </div>
        <div className={styles.browserBody}>
          <div className={styles.bNav}>
            <div style={{ width: 28, height: 8, borderRadius: 4, background: accent, animation: "svcFadeUp .4s ease", ...du(0.05) }} />
            <div style={{ display: "flex", gap: 8 }}>
              {[34, 28, 40, 26].map((w, i) => (
                <div key={i} style={{ width: w, height: 5, borderRadius: 3, background: "#dde1f0", animation: "svcFadeUp .4s ease", ...du(0.1 + i * 0.05) }} />
              ))}
            </div>
          </div>
          <div className={styles.bHero}>
            <div style={{ height: 11, borderRadius: 6, background: "#1e2041", width: "88%", animation: "svcFadeUp .4s ease", ...du(0.18) }} />
            <div style={{ height: 7, borderRadius: 4, background: "#9aa3c0", width: "60%", animation: "svcFadeUp .4s ease", ...du(0.25), marginTop: 7 }} />
            <div style={{ height: 20, borderRadius: 999, background: accent, width: 64, animation: "svcFadeUp .4s ease", ...du(0.32), marginTop: 12 }} />
          </div>
          <div className={styles.bCards}>
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.bCard} style={{ animation: "svcFadeUp .4s ease", ...du(0.38 + i * 0.07) }}>
                <div style={{ height: 22, borderRadius: 6, background: `${accent}22`, marginBottom: 6 }} />
                <div style={{ height: 5, borderRadius: 3, background: "#dde1f0" }} />
                <div style={{ height: 5, borderRadius: 3, background: "#dde1f0", width: "70%", marginTop: 4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobile} style={{ borderColor: `${accent}40`, animation: "svcFadeUp .5s ease", ...du(0.55) }}>
        <div style={{ height: 8, background: accent, borderRadius: "8px 8px 0 0" }} />
        <div style={{ padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ height: 20, borderRadius: 5, background: `${accent}18` }} />
          <div style={{ height: 8, borderRadius: 4, background: "#eef0f8" }} />
          <div style={{ height: 8, borderRadius: 4, background: "#eef0f8", width: "65%" }} />
          <div style={{ height: 14, borderRadius: 999, background: accent, width: "80%", margin: "3px auto 0" }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Web App Visual ─────────────────────────────────────────── */
function WebAppVisual({ accent }: { accent: string }) {
  const bars = [52, 78, 44, 92, 60, 82, 68];
  return (
    <div className={styles.visualCanvas}>
      <div className={styles.dashFrame}>
        <div className={styles.dashSidebar} style={{ borderColor: `${accent}22` }}>
          {[100, 60, 80, 65, 70].map((w, i) => (
            <div key={i} style={{
              height: 8, borderRadius: 4, width: `${w}%`,
              background: i === 1 ? accent : `${accent}28`,
              animation: "svcFadeUp .35s ease", ...du(0.08 + i * 0.06),
            }} />
          ))}
        </div>
        <div className={styles.dashMain}>
          <div style={{ display: "flex", gap: 7, marginBottom: 10 }}>
            {[["MRR", "£4.2k", "+18%"], ["Users", "1,284", "+124"], ["CAC", "£18", "−£3"]].map(([label, val, delta], i) => (
              <div key={label} style={{
                flex: 1, padding: "6px 9px", borderRadius: 8,
                background: `${accent}12`, border: `1px solid ${accent}28`,
                animation: "svcFadeUp .35s ease", ...du(0.15 + i * 0.07),
              }}>
                <div style={{ fontSize: 7, color: accent, fontWeight: 700, letterSpacing: "0.06em" }}>{label}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3, marginTop: 2 }}>{val}</div>
                <div style={{ fontSize: 7, color: "#22c55e", marginTop: 1 }}>{delta}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 5 }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`, borderRadius: "5px 5px 0 0",
                background: `linear-gradient(to top, ${accent}, ${accent}99)`,
                transformOrigin: "bottom",
                animation: "svcScaleY .55s cubic-bezier(0.22,1,0.36,1)", ...du(0.22 + i * 0.06),
              }} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.floatNotif} style={{ borderColor: `${accent}30`, animation: "svcFadeUp .4s ease", ...du(0.75) }}>
        <div style={{ width: 22, height: 22, borderRadius: 7, background: accent, display: "grid", placeItems: "center", flexShrink: 0 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a2e" }}>Deploy successful</div>
          <div style={{ fontSize: 7.5, color: "#94a3b8", marginTop: 1 }}>v2.4.1 → production</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Backend & API Visual ─────────────────────────────────────── */
function BackendVisual({ accent }: { accent: string }) {
  return (
    <div className={styles.visualCanvas}>
      <svg viewBox="0 0 240 130" fill="none" className={styles.flowSvg}>
        <rect x="8" y="50" width="46" height="28" rx="7" fill={`${accent}18`} stroke={accent} strokeWidth="1.2"
          style={{ animation: "svcFadeUp .35s ease", ...du(0.05) } as React.CSSProperties} />
        <text x="31" y="62" textAnchor="middle" fontSize="6.5" fill={accent} fontWeight="700"
          style={{ animation: "svcFadeUp .35s ease", ...du(0.08) } as React.CSSProperties}>CLIENT</text>
        <text x="31" y="72" textAnchor="middle" fontSize="5.5" fill={accent} opacity={0.7}
          style={{ animation: "svcFadeUp .35s ease", ...du(0.1) } as React.CSSProperties}>browser</text>

        <line x1="54" y1="64" x2="86" y2="64" stroke={accent} strokeWidth="1.5"
          strokeDasharray="40" strokeDashoffset="40"
          style={{ animation: "svcLineDraw .5s ease", ...du(0.2) } as React.CSSProperties} />
        <polygon points="86,60 94,64 86,68" fill={accent}
          style={{ animation: "svcFadeUp .3s ease", ...du(0.65) } as React.CSSProperties} />

        <rect x="94" y="42" width="50" height="44" rx="9" fill={`${accent}18`} stroke={accent} strokeWidth="1.8"
          style={{ animation: "svcFadeUp .35s ease", ...du(0.3) } as React.CSSProperties} />
        <text x="119" y="62" textAnchor="middle" fontSize="7" fill={accent} fontWeight="800"
          style={{ animation: "svcFadeUp .3s ease", ...du(0.35) } as React.CSSProperties}>API</text>
        <text x="119" y="74" textAnchor="middle" fontSize="6" fill={accent} opacity={0.75}
          style={{ animation: "svcFadeUp .3s ease", ...du(0.38) } as React.CSSProperties}>GATEWAY</text>

        {[32, 64, 96].map((y, i) => (
          <line key={i} x1="144" y1={64} x2="168" y2={y} stroke={accent} strokeWidth="1.1" opacity={0.7}
            strokeDasharray="60" strokeDashoffset="60"
            style={{ animation: "svcLineDraw .4s ease", ...du(0.5 + i * 0.06) } as React.CSSProperties} />
        ))}

        {[["AUTH", 32], ["ORDER", 64], ["NOTIFY", 96]].map(([label, cy], i) => (
          <g key={label as string}>
            <rect x="168" y={(cy as number) - 14} width="46" height="26" rx="6"
              fill={`${accent}14`} stroke={accent} strokeWidth="1"
              style={{ animation: "svcFadeUp .3s ease", ...du(0.58 + i * 0.07) } as React.CSSProperties} />
            <text x="191" y={(cy as number) + 4} textAnchor="middle" fontSize="7" fill={accent} fontWeight="700"
              style={{ animation: "svcFadeUp .3s ease", ...du(0.61 + i * 0.07) } as React.CSSProperties}>{label}</text>
          </g>
        ))}

        <circle r="3.5" fill={accent} opacity={0.85}
          style={{ animation: "svcPulse 1.8s ease 0.9s infinite" } as React.CSSProperties}>
          <animateMotion dur="1.6s" begin="0.9s" repeatCount="indefinite"
            path="M54,64 L86,64 L94,64" />
        </circle>
      </svg>

      <div className={styles.codeChip} style={{ borderColor: `${accent}30`, animation: "svcFadeUp .4s ease", ...du(0.85) }}>
        <span style={{ color: "#22c55e", fontSize: 9 }}>POST</span>
        <span style={{ color: "#94a3b8", fontSize: 9 }}> /api/v2/orders</span>
        <span style={{ color: "#4ade80", fontSize: 9 }}> · 200 OK · 48ms</span>
      </div>
    </div>
  );
}

/* ─── SaaS Visual ────────────────────────────────────────────── */
function SaaSVisual({ accent }: { accent: string }) {
  return (
    <div className={styles.visualCanvas}>
      <svg viewBox="0 0 240 100" fill="none" className={styles.flowSvg} style={{ height: 100 }}>
        <defs>
          <linearGradient id="saasGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 45, 70, 90].map((y) => (
          <line key={y} x1="20" y1={y} x2="232" y2={y} stroke="#e2e8f0" strokeWidth="0.6" />
        ))}
        {["£0", "£5k", "£10k", "£15k"].map((l, i) => (
          <text key={l} x="16" y={90 - i * 23} textAnchor="end" fontSize="6" fill="#94a3b8">{l}</text>
        ))}
        <path d="M20,88 C60,78 90,64 120,48 S170,24 210,8 L232,6 L232,90 Z" fill="url(#saasGrad)" />
        <path d="M20,88 C60,78 90,64 120,48 S170,24 210,8 L232,6"
          stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="400" strokeDashoffset="400"
          style={{ animation: "svcLineDraw 1.1s cubic-bezier(0.22,1,0.36,1)", ...du(0.15) } as React.CSSProperties} />
        <circle cx="232" cy="6" r="4.5" fill={accent}
          style={{ animation: "svcFadeUp .3s ease", ...du(1.2) } as React.CSSProperties} />
        <circle cx="232" cy="6" r="8" fill={accent} opacity={0.2}
          style={{ animation: "svcPulse 2s ease 1.3s infinite" } as React.CSSProperties} />
      </svg>

      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        {[["MRR", "£12,400", "+18%"], ["Users", "3,847", "+124"], ["Churn", "1.2%", "−0.3%"]].map(([label, val, delta], i) => (
          <div key={label} style={{
            flex: 1, padding: "8px 10px", borderRadius: 10,
            background: `${accent}12`, border: `1px solid ${accent}30`,
            animation: "svcCountUp .4s ease", ...du(0.5 + i * 0.08),
          }}>
            <div style={{ fontSize: 7, color: accent, fontWeight: 700, letterSpacing: "0.06em" }}>{label}</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3, marginTop: 2 }}>{val}</div>
            <div style={{ fontSize: 7.5, color: "#22c55e", marginTop: 1 }}>{delta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Service definitions ──────────────────────────────────────── */
const SERVICES = [
  {
    Icon: Globe,
    label: "WEBSITES",
    title: "Websites",
    desc: "Clean, fast, mobile-first websites for local businesses and professionals. Delivered in 2–3 weeks at a fixed price.",
    price: "From £499",
    accent: "#4f63e7",
    bgFrom: "#f0f2ff",
    bgTo: "#e8ecff",
    Visual: WebsiteVisual,
  },
  {
    Icon: Layers,
    label: "WEB APPLICATIONS",
    title: "Web Applications",
    desc: "Custom web apps — booking systems, client portals, dashboards, inventory tools. Built with React/Next.js and Java/Spring Boot.",
    price: "£2,000 – £8,000",
    accent: "#7c3aed",
    bgFrom: "#f5f0ff",
    bgTo: "#ede8ff",
    Visual: WebAppVisual,
  },
  {
    Icon: Server,
    label: "BACKEND & API",
    title: "Backend & API",
    desc: "Senior Java/Spring Boot engineering for startups and tech teams. API design, microservices, cloud migration, performance optimisation.",
    price: "Day rate or fixed-scope",
    accent: "#0e7490",
    bgFrom: "#f0faff",
    bgTo: "#e3f6ff",
    Visual: BackendVisual,
  },
  {
    Icon: Rocket,
    label: "SAAS PRODUCTS",
    title: "SaaS MVP & Products",
    desc: "From zero to launched — auth, billing, dashboards, onboarding flows. Full-stack Spring Boot + React, deployed to cloud. MVP in 4–6 weeks.",
    price: "From £5,000",
    accent: "#059669",
    bgFrom: "#f0fdf8",
    bgTo: "#dcfce7",
    Visual: SaaSVisual,
  },
] as const;

/* ─── Main Component ───────────────────────────────────────────── */
export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="services" data-screen-label="Services">
      <style>{KEYFRAMES}</style>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">Freelance Services</div>
          <h2 className="section-title">What I build for you</h2>
          <p>
            I take on a small number of freelance projects each month across
            four service tiers.
          </p>
        </div>

        <div className={`${styles.panelRow} reveal`}>
          {SERVICES.map(({ Icon, label, title, desc, price, accent, bgFrom, bgTo, Visual }, i) => {
            const isActive = active === i;
            return (
              <div
                key={label}
                className={`${styles.panel} ${isActive ? styles.panelActive : ""}`}
                style={
                  isActive
                    ? ({
                        "--panel-accent": accent,
                        "--panel-bg-from": bgFrom,
                        "--panel-bg-to": bgTo,
                        "--panel-border": accent,
                      } as React.CSSProperties)
                    : {}
                }
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(i);
                }}
              >
                {/* Always-visible left strip */}
                <div className={styles.panelStrip}>
                  <div
                    className={styles.panelIconWrap}
                    style={{ color: accent }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span
                    className={styles.panelLabelRotated}
                    style={{ color: accent }}
                  >
                    {label}
                  </span>
                </div>

                {/* Expanded: text left + visual right */}
                <div className={styles.panelContent}>
                  <div className={styles.panelText}>
                    <div className={styles.panelMeta}>
                      <h3 className={styles.panelTitle}>{title}</h3>
                    </div>
                    <p className={styles.panelDesc}>{desc}</p>
                    <div className={styles.panelFooter}>
                      <span
                        className={styles.panelPrice}
                        style={{
                          color: accent,
                          borderColor: `color-mix(in oklch, ${accent} 30%, transparent)`,
                          background: `color-mix(in oklch, ${accent} 8%, transparent)`,
                        }}
                      >
                        {price}
                      </span>
                      <a
                        href="#contact"
                        className={styles.panelCta}
                        style={{ background: accent }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get in touch
                        <span className={styles.panelCtaIcon}>
                          <ArrowUpRight size={14} strokeWidth={2.5} />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Visual mounts fresh on activation so CSS anims restart */}
                  <div className={styles.panelVisual}>
                    {isActive && <Visual accent={accent} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
