"use client";

import type { PointerEvent } from "react";
import { SKILLS } from "./data";
import { icons } from "./icons";

// Per-card spotlight: track the cursor in the card's own local coordinates so
// the glow follows the pointer on that card only (CSS gates it to :hover).
function handleMove(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", x.toFixed(1));
  el.style.setProperty("--my", y.toFixed(1));
  el.style.setProperty("--mxp", (x / r.width).toFixed(3));
}

export function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
            </svg>{" "}
            Capabilities
          </div>
          <h2 className="section-title">The engineering toolkit</h2>
          <p>
            Eight years of Java &amp; Spring microservices, cloud-native
            platforms and delivery automation — the stack behind
            mission-critical systems.
          </p>
        </div>
        <div className="skills-grid spotlight-grid" id="skillsGrid">
          {SKILLS.map((s, i) => (
            <div
              className={`skill-card reveal d${(i % 3) + 1}`}
              key={s.t}
              onPointerMove={handleMove}
            >
              <div className="sc-ic">{icons[s.ic]}</div>
              <h4>{s.t}</h4>
              <div className="pills">
                {s.items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
