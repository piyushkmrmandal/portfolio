"use client";

import { motion } from "framer-motion";
import { AWARDS } from "./data";
import { icons } from "./icons";

const hoverAnim = { scale: 1.03, y: -5 };
const hoverTransition = { type: "spring" as const, stiffness: 300, damping: 15 };

export function Awards() {
  return (
    <section className="section" id="awards" data-screen-label="Awards">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 4H4v2a3 3 0 0 0 3 3M17 4h3v2a3 3 0 0 1-3 3" />
            </svg>{" "}
            Recognition
          </div>
          <h2 className="section-title">Awards &amp; honours</h2>
        </div>
        <div className="awards-grid" id="awardsGrid">
          {AWARDS.map((a, i) => (
            // motion.div is the staircase wrapper — CSS nth-child targets .award-motion-wrap
            // The inner .award-card keeps its reveal animation untouched
            <motion.div
              key={a.t}
              className="award-motion-wrap"
              whileHover={hoverAnim}
              transition={hoverTransition}
            >
              <div
                className={`award-card reveal d${(i % 3) + 1}${i % 2 === 1 ? " alt" : ""}`}
              >
                <span className="ayear">{a.year}</span>
                <div className="trophy">{icons.trophy}</div>
                <h4>{a.t}</h4>
                <div className="aby">{a.by}</div>
                <p>{a.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
