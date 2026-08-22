"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AWARDS, HONORS, CERTS } from "./data";
import { icons } from "./icons";

export function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll relative to the awards grid entering the viewport.
  // 0 = grid top hits viewport bottom; 1 = grid center hits viewport center.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "center 58%"],
  });

  // Side cards fan out from behind the middle card as scroll progresses.
  const leftX  = useTransform(scrollYProgress, [0, 1], ["50%",  "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const sideScale   = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 0.5, 1]);

  return (
    <section className="section" id="awards" data-screen-label="Awards">
      {/* clip overflow so stacked cards don't cause horizontal scroll */}
      <div style={{ overflow: "hidden" }}>
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

          <div className="awards-grid" id="awardsGrid" ref={containerRef}>
            {AWARDS.map((a, i) => {
              const isLeft  = i === 0;
              const isRight = i === 2;
              const isMid   = i === 1;

              return (
                /* Outer motion.div — scroll-driven fan-out transform */
                <motion.div
                  key={a.t}
                  className="award-motion-wrap"
                  style={{
                    x:       isLeft ? leftX : isRight ? rightX : undefined,
                    scale:   !isMid ? sideScale   : undefined,
                    opacity: !isMid ? sideOpacity : undefined,
                    zIndex:  isMid  ? 2 : 1,
                    position: "relative",
                  }}
                >
                  {/* Inner motion.div — hover lift, isolated from scroll scale */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{ height: "100%" }}
                  >
                    <div
                      className={`award-card reveal d${(i % 3) + 1}${
                        i % 2 === 1 ? " alt" : ""
                      }`}
                    >
                      <span className="ayear">{a.year}</span>
                      <div className="trophy">{icons.trophy}</div>
                      <h4>{a.t}</h4>
                      <div className="aby">{a.by}</div>
                      <p>{a.d}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="recognition-lists reveal">
            <div className="recognition-col">
              <h3 className="recognition-h">Honours</h3>
              <ul className="recognition-list">
                {HONORS.map((h) => (
                  <li key={h.t}>
                    <span className="rl-t">{h.t}</span>
                    {h.by && <span className="rl-by">{h.by}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="recognition-col">
              <h3 className="recognition-h">Certifications</h3>
              <ul className="recognition-list">
                {CERTS.map((c) => (
                  <li key={c.t}>
                    <span className="rl-t">{c.t}</span>
                    {c.by && <span className="rl-by">{c.by}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
