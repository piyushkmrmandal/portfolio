"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface CardCarouselItem {
  title: string;
  desc: string;
  pills: string[];
  stages: string[];
  repo?: string;
}

interface CardCarouselProps {
  items: CardCarouselItem[];
  autoplayDelay?: number;
}

const KEYFRAMES = `
  @keyframes ccTermCursor { 0%,49%{opacity:1} 50%,100%{opacity:0} }
  @keyframes ccSlideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ccPropCard { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
  @keyframes ccLineDraw { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
  @keyframes ccRateIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ccContentIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ccVisualLift { from{transform:translateY(4px)} to{transform:translateY(-4px)} }
`;

// ── AlgoVerse: Monaco IDE + gVisor sandbox ────────────────────────────────
function AlgoVerseVisual() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0d1117", borderRadius: 10, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: "'SF Mono','Fira Code',monospace" }}>
      <div style={{ background: "#161b22", padding: "7px 12px", display: "flex", gap: 7, alignItems: "center", borderBottom: "1px solid #30363d", flexShrink: 0 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "block" }} />)}
        <span style={{ fontSize: 10, color: "#8b949e", marginLeft: 8 }}>Solution.java — AlgoVerse IDE</span>
      </div>
      <div style={{ flex: 1, padding: "10px 14px", display: "flex", flexDirection: "column", gap: 4, overflow: "hidden" }}>
        {[
          [{ c: "#ff7b72", t: "public class " }, { c: "#e6edf3", t: "Solution {" }],
          [{ c: "#79c0ff", t: "  int " }, { c: "#e6edf3", t: "twoSum(" }, { c: "#79c0ff", t: "int" }, { c: "#e6edf3", t: "[] nums, " }, { c: "#79c0ff", t: "int " }, { c: "#e6edf3", t: "target) {" }],
          [{ c: "#8b949e", t: "    // O(n) — gVisor sandbox" }],
          [{ c: "#79c0ff", t: "    Map" }, { c: "#e6edf3", t: "<Integer,Integer> m = " }, { c: "#ff7b72", t: "new " }, { c: "#e6edf3", t: "HashMap<>();" }],
          [{ c: "#d2a8ff", t: "    return " }, { c: "#e6edf3", t: "ans;" }],
        ].map((tokens, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, animation: `ccSlideIn 0.3s ${i * 0.07}s both` }}>
            <span style={{ color: "#3d444d", fontSize: 10, minWidth: 18, userSelect: "none" }}>{i + 1}</span>
            <span style={{ fontSize: 11 }}>{tokens.map((tk, j) => <span key={j} style={{ color: tk.c }}>{tk.t}</span>)}</span>
          </div>
        ))}
      </div>
      <div style={{ background: "#010409", padding: "7px 12px", borderTop: "1px solid #30363d", flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: "#3fb950", display: "flex", gap: 6, alignItems: "center", marginBottom: 3 }}>
          <span>✓</span><span style={{ fontWeight: 600 }}>Accepted · 12ms</span>
          <span style={{ marginLeft: "auto", color: "#8b949e" }}>gVisor · Ollama AI</span>
        </div>
        <div style={{ fontSize: 10, color: "#8b949e", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: "#79c0ff" }}>$</span>
          <span>kafka.dispatch(submissionEvent)</span>
          <span style={{ display: "inline-block", width: 6, height: 12, background: "#8b949e", animation: "ccTermCursor 1s step-end infinite", verticalAlign: "middle", marginLeft: 2 }} />
        </div>
      </div>
    </div>
  );
}

// ── StaySync: AI property listings ────────────────────────────────────────
function StaySyncVisual() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#f0f2ff", borderRadius: 10, overflow: "hidden", padding: 12, display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#4258e6", letterSpacing: "0.06em" }}>STAYSYNC</span>
        <span style={{ fontSize: 9, background: "#4258e6", color: "#fff", padding: "2px 7px", borderRadius: 999, fontWeight: 700 }}>AI Builder ✦</span>
      </div>
      {[
        { e: "🏠", n: "2BR · Shoreditch", p: "£1,200", s: 5 },
        { e: "🏢", n: "Studio · Canary Wharf", p: "£895", s: 4 },
        { e: "🏡", n: "3BR · Kensington", p: "£2,400", s: 5 },
      ].map((l, i) => (
        <div key={i} style={{ background: "#fff", borderRadius: 9, padding: "9px 11px", border: "1px solid #e8ecff", display: "flex", gap: 9, alignItems: "center", animation: `ccPropCard 0.35s ${i * 0.1}s both` }}>
          <div style={{ width: 38, height: 38, borderRadius: 8, background: `hsl(${225 + i * 18},55%,${91 + i * 2}%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{l.e}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: "#0f172a", marginBottom: 1 }}>{l.n}</div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>{l.p}/mo · {"⭐".repeat(l.s)}</div>
          </div>
          <span style={{ fontSize: 9, fontWeight: 700, color: "#4258e6", background: "#4258e612", padding: "2px 6px", borderRadius: 6 }}>AI ✓</span>
        </div>
      ))}
    </div>
  );
}

// ── MSSC Brewery: Higgsfield-generated cinematic brewery video ─────────────
function BreweryVisual() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", borderRadius: 10, overflow: "hidden", background: "#060d1a" }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/videos/brewery.mp4" type="video/mp4" />
      </video>
      {/* Tech overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,13,26,0.85) 0%, rgba(6,13,26,0.15) 60%, transparent 100%)" }} />
      <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", fontWeight: 600 }}>Spring Boot · JMS · Spring Cloud</span>
      </div>
    </div>
  );
}

// ── Currency Exchange: Zuul + Feign + Hystrix ──────────────────────────────
function CurrencyVisual() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0c1a2e", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 10 }}>
      <svg width="100%" height="100%" viewBox="0 0 300 185" fill="none">
        {[
          { x: 32,  y: 72, w: 52, label: "CLIENT",  sub: "HTTP",    col: "#64748b" },
          { x: 118, y: 72, w: 72, label: "ZUUL GW", sub: "Gateway", col: "#4258e6" },
          { x: 218, y: 40, w: 68, label: "EXCHANGE", sub: "Service", col: "#7c3aed" },
          { x: 218, y: 104, w: 68, label: "CONVERT", sub: "Feign",  col: "#0e7490" },
        ].map((n, i) => (
          <g key={n.label} style={{ animation: `ccSlideIn 0.3s ${i * 0.09}s both` }}>
            <rect x={n.x - n.w / 2} y={n.y - 20} width={n.w} height={40} rx={9} fill={`${n.col}1a`} stroke={n.col} strokeWidth={1.4} />
            <text x={n.x} y={n.y - 3} textAnchor="middle" fill={n.col} fontSize={9} fontWeight={700}>{n.label}</text>
            <text x={n.x} y={n.y + 11} textAnchor="middle" fill={`${n.col}99`} fontSize={8}>{n.sub}</text>
          </g>
        ))}
        {[
          { d: "M 58 72 L 82 72",      delay: 0.4 },
          { d: "M 154 66 L 184 48",    delay: 0.5 },
          { d: "M 154 78 L 184 96",    delay: 0.6 },
        ].map((l, i) => (
          <path key={i} d={l.d} stroke="rgba(255,255,255,0.13)" strokeWidth={1.5} strokeDasharray="120" strokeDashoffset="120"
            style={{ animation: `ccLineDraw 0.5s ${l.delay}s cubic-bezier(0.22,1,0.36,1) forwards` }} />
        ))}
        <g style={{ animation: "ccRateIn 0.5s 0.9s both" }}>
          <rect x={65} y={124} width={108} height={24} rx={7} fill="#4258e614" stroke="#4258e635" strokeWidth={1} />
          <text x={119} y={140} textAnchor="middle" fill="#93c5fd" fontSize={10} fontWeight={700}>USD → EUR · 0.9234</text>
        </g>
        <g style={{ animation: "ccRateIn 0.5s 1.1s both" }}>
          <rect x={65} y={153} width={108} height={20} rx={6} fill="#7c3aed15" stroke="#7c3aed35" strokeWidth={1} />
          <text x={119} y={167} textAnchor="middle" fill="#a78bfa" fontSize={8.5}>Hystrix Circuit Breaker</text>
        </g>
        <text x={150} y={180} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize={8}>Feign · Eureka · Spring Cloud</text>
      </svg>
    </div>
  );
}

const PROJECT_VISUALS: Record<string, React.FC> = {
  "AlgoVerse": AlgoVerseVisual,
  "StaySync — AI Property Platform": StaySyncVisual,
  "MSSC Brewery Microservices": BreweryVisual,
  "Currency Exchange Microservice": CurrencyVisual,
};

function cardStyle(offset: number, isCenter: boolean): React.CSSProperties {
  const abs = Math.abs(offset);
  const ease = "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)";

  const base: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    background: "var(--surface, #fff)",
    border: "1px solid var(--line, #e5e7eb)",
    borderRadius: 20,
    overflow: "hidden",
    transition: ease,
    willChange: "transform",
  };

  if (isCenter) {
    return {
      ...base,
      width: 420,
      transform: "translateX(-50%) translateY(calc(-50% - 16px)) scale(1.05)",
      zIndex: 10,
      opacity: 1,
      cursor: "default",
      boxShadow: "0 40px 90px -16px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.5)",
    };
  }

  const xMap: Record<number, number> = { 1: 330, 2: 570 };
  const zMap: Record<number, number> = { 1: -70, 2: -200 };
  const rotMap: Record<number, number> = { 1: -14, 2: -26 };
  const scaleMap: Record<number, number> = { 1: 0.84, 2: 0.65 };

  const sign = offset < 0 ? -1 : 1;
  const x = sign * (xMap[abs] ?? 570);
  const rot = -sign * (rotMap[abs] ?? 26);
  const z = zMap[abs] ?? -200;
  const sc = scaleMap[abs] ?? 0.65;

  return {
    ...base,
    width: 320,
    transform: `translateX(calc(-50% + ${x}px)) translateY(-50%) translateZ(${z}px) rotateY(${rot}deg) scale(${sc})`,
    zIndex: 10 - abs,
    opacity: abs === 1 ? 0.88 : 0.58,
    cursor: "pointer",
    boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
  };
}

export function CardCarousel({ items, autoplayDelay = 4200 }: CardCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setActiveIdx(i => (i + 1) % items.length), autoplayDelay);
    return () => clearInterval(t);
  }, [isPaused, items.length, autoplayDelay]);

  const goTo = useCallback((idx: number) => {
    setActiveIdx(((idx % items.length) + items.length) % items.length);
  }, [items.length]);

  function getOffset(idx: number): number {
    const n = items.length;
    let d = idx - activeIdx;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  const navBtnBase: React.CSSProperties = {
    position: "absolute",
    top: 265,
    transform: "translateY(-50%)",
    zIndex: 50,
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "var(--surface, #fff)",
    border: "1px solid var(--line, #e5e7eb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    color: "var(--ink, #0f172a)",
    outline: "none",
    padding: 0,
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{KEYFRAMES}</style>

      {/* Nav buttons sit OUTSIDE the clip container so cards can never overlap them */}
      <button aria-label="Previous project" onClick={() => goTo(activeIdx - 1)} style={{ ...navBtnBase, left: 0 }}>
        <ChevronLeft size={18} strokeWidth={2.5} />
      </button>
      <button aria-label="Next project" onClick={() => goTo(activeIdx + 1)} style={{ ...navBtnBase, right: 0 }}>
        <ChevronRight size={18} strokeWidth={2.5} />
      </button>

      {/* Clip wrapper — side margin reserves space for the arrow buttons */}
      <div style={{ overflow: "hidden", margin: "0 56px", borderRadius: 4 }}>
        {/* 3-D stage */}
        <div style={{ position: "relative", height: 530, perspective: "1300px", perspectiveOrigin: "50% 42%" }}>
          {items.map((item, idx) => {
            const offset = getOffset(idx);
            const isCenter = offset === 0;
            const abs = Math.abs(offset);
            if (abs > 1) return null; // only center + ±1 — keeps cards inside the clipped stage

          const Visual = PROJECT_VISUALS[item.title] ?? BreweryVisual;

          return (
            <div key={item.title} style={cardStyle(offset, isCenter)} onClick={() => !isCenter && goTo(idx)}>
              {/* Visual — remounts when becoming center, restarting CSS animations */}
              <div style={{ height: isCenter ? 218 : 180, flexShrink: 0, overflow: "hidden", animation: isCenter ? "ccVisualLift 0.55s 0.12s cubic-bezier(0.22,1,0.36,1) both" : undefined }}>
                {isCenter ? <Visual /> : <div style={{ height: "100%", opacity: 0.82 }}><Visual /></div>}
              </div>

              {/* Side card: title + pill summary */}
              {!isCenter && (
                <div style={{ padding: "10px 14px 14px" }}>
                  <p style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink, #0f172a)", margin: "0 0 4px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{item.title}</p>
                  <p style={{ fontSize: 10.5, color: "var(--muted, #6b7280)", margin: 0, lineHeight: 1.4 }}>{item.pills.slice(0, 3).join(" · ")}</p>
                </div>
              )}

              {/* Center card: full content */}
              {isCenter && (
                <div style={{ padding: "18px 24px 24px", animation: "ccContentIn 0.45s 0.2s both" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: "var(--ink, #0f172a)", letterSpacing: "-0.025em", margin: "0 0 10px", lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.68, color: "var(--muted, #6b7280)", margin: "0 0 16px" }}>
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {item.pills.map(p => (
                      <span key={p} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, border: "1px solid var(--line, #e5e7eb)", color: "var(--ink-2, #374151)", fontWeight: 500 }}>
                        {p}
                      </span>
                    ))}
                  </div>
                  {item.repo && (
                    <a href={item.repo} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--accent, #4258e6)", textDecoration: "none" }}>
                      <ExternalLink size={14} strokeWidth={2} /> View on GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          );
          })}
        </div>{/* end 3-D stage */}
      </div>{/* end clip wrapper */}

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 14 }}>
        {items.map((_, i) => (
          <span
            key={i}
            role="button"
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              display: "block",
              width: i === activeIdx ? 22 : 6,
              height: 6,
              borderRadius: 999,
              background: i === activeIdx ? "var(--accent, #4258e6)" : "var(--line-2, #d1d5db)",
              cursor: "pointer",
              transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
