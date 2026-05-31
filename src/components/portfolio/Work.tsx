"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { WORK, type Work as WorkItem } from "./data";
import { ArchitectureFlow } from "./ArchitectureFlow";

/**
 * Each work card is pinned (sticky) and scales down as later cards scroll
 * over it — the "stacking cards" scroll transition from motion/react.
 * The blue panel shows a live icon ecosystem (ArchitectureFlow).
 */
function WorkCard({
  w,
  i,
  total,
  progress,
}: {
  w: WorkItem;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - i) * 0.05;
  const scale = useTransform(progress, [i * 0.25, 1], [1, targetScale]);

  return (
    <div className="work-sticky">
      <motion.div
        className={`work-item${i % 2 === 1 ? " alt" : ""}`}
        style={{ scale, top: `${i * 22}px` }}
      >
        <div className={`work-visual v${(i % 5) + 1}`}>
          <div className="wv-label">Architecture flow</div>
          <ArchitectureFlow stages={w.stages} />
        </div>
        <div className="work-body">
          <div className="wnum">
            0{i + 1} / 0{total}
          </div>
          <div className="wtag">{w.tag}</div>
          <h3>{w.title}</h3>
          <p>{w.desc}</p>
          <div className="wpills">
            {w.pills.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
          <div className="wmetrics">
            {w.metrics.map((m) => (
              <div className="m" key={m[1]}>
                <b>{m[0]}</b>
                <span>{m[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Work() {
  const container = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Reveal the section header locally so it is reliable on mount and HMR
  // (rather than depending on the global runtime's one-shot observer).
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="work" data-screen-label="Work">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
            </svg>{" "}
            Selected Work
          </div>
          <h2 className="section-title">Projects that delivered real impact</h2>
          <p>
            Enterprise systems told as engineering stories — the problem, the
            architecture and the measurable outcome.
          </p>
        </div>
        <div className="work-list work-stack" id="workList" ref={container}>
          {WORK.map((w, i) => (
            <WorkCard
              key={w.title}
              w={w}
              i={i}
              total={WORK.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
