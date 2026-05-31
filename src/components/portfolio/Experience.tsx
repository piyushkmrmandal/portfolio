"use client";

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";
import { XP } from "./data";

// Roadmap reads as a journey: oldest milestone first → current role last.
const JOURNEY = [...XP].reverse();
const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section className="section on-dark" id="experience" data-screen-label="Experience">
      <div className="xp-glow"></div>
      <div className="wrap">
        <div className="section-head reveal xp-head">
          <div className="eyebrow center">Career</div>
          <h2 className="section-title">Eight years, five global enterprises</h2>
          <p>
            A path from systems engineer to engineering lead across Infosys,
            Alten Calasoft, Cognizant and EXL.
          </p>
        </div>

        <motion.div
          className="xp-road"
          initial="rest"
          whileInView="show"
          /* Fire only once the road has climbed well into view (negative bottom
             margin shrinks the trigger zone from the bottom). The section gets a
             cinematic scroll-zoom blur/fade as it enters (FolioRuntime initZoom);
             triggering early made the left→right sweep play *under* that blur and
             finish before the section settled — so it was never seen. */
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -40% 0px" }}
        >
          {/* base track + animated progress fill */}
          <div className="xp-road-track" aria-hidden="true" />
          <motion.div
            className="xp-road-fill"
            aria-hidden="true"
            variants={{
              rest: { scaleX: 0 },
              show: { scaleX: 1 },
            }}
            transition={{ duration: 1.4, ease, delay: 0.15 }}
          />

          <div className="xp-road-stops">
            {JOURNEY.map((x, i) => {
              const current = /PRESENT/i.test(x.when);
              return (
                <motion.div
                  key={x.when}
                  className={`xp-stop${current ? " current" : ""}`}
                  variants={{
                    rest: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease, delay: 0.25 + i * 0.16 }}
                >
                  <motion.span
                    className="xp-dot"
                    whileHover={{ scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  >
                    <span className="xp-dot-core" />
                  </motion.span>

                  <span className="xp-step">{`0${i + 1}`}</span>
                  <div className="xp-when">{x.when}</div>
                  <h4>{x.co}</h4>
                  <div className="xrole">{x.role}</div>
                  <div className="xvia">{x.via}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <ShineBorder
          className="xp-cta reveal d2"
          borderRadius={22}
          borderWidth={1.5}
          duration={12}
          color={["#9db4ff", "#ffffff", "#c4d0ff"]}
        >
          <div>
            <h4>Let&apos;s build resilient systems together.</h4>
            <p>Open to senior &amp; lead engineering roles.</p>
          </div>
          <a href="#contact" className="btn btn-white">
            Get In Touch <span className="pip">↗</span>
          </a>
        </ShineBorder>
      </div>
    </section>
  );
}
