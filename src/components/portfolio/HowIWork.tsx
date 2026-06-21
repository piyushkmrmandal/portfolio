"use client";

import { motion } from "framer-motion";
import styles from "./HowIWork.module.css";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start with a 30-minute call to understand your business, what you need, and whether I'm the right fit. No obligation.",
  },
  {
    num: "02",
    title: "Proposal",
    desc: "You receive a written proposal within 48 hours — fixed scope, fixed price, clear timeline. No surprises.",
  },
  {
    num: "03",
    title: "Build",
    desc: "I build in stages and share a live preview link so you can see progress. Two rounds of revisions included.",
  },
  {
    num: "04",
    title: "Launch & Handover",
    desc: "I handle deployment and give you everything you need to own and manage the site. 30-day post-launch support included.",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function HowIWork() {
  return (
    <section className="section" id="how-i-work" data-screen-label="How I Work">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">Process</div>
          <h2 className="section-title">How I Work</h2>
        </div>

        <motion.div
          className={styles.grid}
          initial="rest"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              variants={{
                rest: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.07 }}
            >
              <span className={styles.num} aria-hidden="true">
                {step.num}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
