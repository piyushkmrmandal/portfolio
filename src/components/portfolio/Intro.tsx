"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import styles from "./Intro.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAME_WORDS = ["Piyush", "Kumar", "Mandal"];

const wordVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.35 + i * 0.11, ease: EASE },
  }),
};

export function Intro() {
  // Start hidden; decide on mount (client-only) whether to play.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Play the cinematic intro on every full page load (the reduced-motion
    // preference still skips it for accessibility).
    if (prefersReduced) {
      return; // never lock scroll, never show
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => setVisible(false), 3000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="folio-intro"
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: EASE, delay: 0.55 } }}
          onAnimationComplete={() => {
            // Safety: ensure scroll is restored once the exit finishes.
            document.body.style.overflow = "";
          }}
        >
          {/* soft glow */}
          <motion.div
            className={styles.glow}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
          />

          <div className={styles.stage}>
            <motion.div
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            >
              Cloud-Native Engineering
            </motion.div>

            <h1 className={styles.name} aria-label="Piyush Kumar Mandal">
              {NAME_WORDS.map((word, i) => (
                <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
                  <motion.span
                    className={styles.word}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                    custom={i}
                    aria-hidden="true"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className={styles.lineWrap}>
              <motion.div
                className={styles.line}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.9, ease: EASE }}
              />
            </div>

            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.15, ease: EASE }}
            >
              Engineering resilient platforms
            </motion.p>
          </div>

          <div className={styles.vignette} />

          {/* cinematic curtain wipe — slides up first, then the overlay fades */}
          <motion.div
            className={styles.curtain}
            initial={{ scaleY: 0 }}
            exit={{
              scaleY: 1,
              transition: { duration: 0.55, ease: EASE },
            }}
            style={{ transformOrigin: "bottom center" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
