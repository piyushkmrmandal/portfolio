"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";

const BUILD_ITEMS = [
  "Enterprise Apps",
  "SaaS Platforms",
  "Backend APIs",
  "Microservices",
  "Cloud Platforms",
];

const ACCELERATE_ITEMS = [
  "AI Agents",
  "RAG Applications",
  "Workflow Automation",
  "Developer Productivity",
  "LLM Integrations",
];

const EXPERTISE_ITEMS = [
  "Distributed Systems",
  "Cloud Architecture",
  "Microservices",
  "Event-Driven Systems",
  "Kafka & Streaming",
  "OpenShift / Kubernetes",
  "Platform Engineering",
  "DevOps & CI/CD",
  "AI Product Development",
  "Engineering Leadership",
];

function glowMove(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", (e.clientX - r.left).toFixed(1));
  el.style.setProperty("--my", (e.clientY - r.top).toFixed(1));
}

export function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="wrap">

        {/* ── Introduction ── */}
        <div className="about-intro reveal">
          <div className="eyebrow">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
            About Me
          </div>
          <h2 className="about-headline reveal d1">
            I architect <span style={{ color: "var(--accent)" }}>resilient cloud-native</span> platforms that scale globally and deliver measurable business impact.
          </h2>
          <p className="about-support reveal d2">
            With nearly a decade of experience building distributed systems across banking and technology domains, I help organizations transform complex engineering challenges into scalable products, intelligent platforms, and high-performing technology ecosystems.
          </p>
          <div className="reveal d3">
            <a href="#contact" className="btn btn-dark">
              Let&apos;s Build Something Exceptional <span className="pip">↗</span>
            </a>
          </div>
        </div>

        {/* ── 3-column capability grid ── */}
        <div className="about-caps-grid">

          {/* Card 1 — What I Build */}
          <div className="about-cap-card light reveal d1" onPointerMove={glowMove}>
            <div className="acc-glow" />
            <div className="acc-body">
              <h3 className="acc-title">What I Build</h3>
              <p className="acc-desc">Enterprise-grade digital products engineered for scale, resilience and growth.</p>
              <ul className="acc-list arrow">
                {BUILD_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="acc-hover-reveal">
              <p>&ldquo;From concept to production-ready systems handling enterprise scale.&rdquo;</p>
            </div>
          </div>

          {/* Card 2 — How I Accelerate Teams */}
          <div className="about-cap-card light reveal d2" onPointerMove={glowMove}>
            <div className="acc-glow" />
            <div className="acc-body">
              <h3 className="acc-title">How I Accelerate Teams</h3>
              <p className="acc-desc">Combining cloud engineering with AI workflows to improve delivery velocity.</p>
              <ul className="acc-list arrow">
                {ACCELERATE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="acc-hover-reveal">
              <p>&ldquo;Transforming AI from experimentation into measurable business value.&rdquo;</p>
            </div>
          </div>

          {/* Card 3 — Core Expertise (dark) */}
          <div className="about-cap-card dark reveal d3" onPointerMove={glowMove}>
            <div className="acc-glow" />
            <div className="acc-body">
              <h3 className="acc-title">Core Expertise</h3>
              <ul className="acc-list check">
                {EXPERTISE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
