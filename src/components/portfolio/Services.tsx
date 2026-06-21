"use client";

import { useState } from "react";
import { Globe, Layers, Server, ArrowUpRight } from "lucide-react";
import styles from "./Services.module.css";

const SERVICES = [
  {
    Icon: Globe,
    label: "WEBSITES",
    title: "Websites",
    desc: "Clean, fast, mobile-first websites for local businesses and professionals. Delivered in 2–3 weeks at a fixed price.",
    price: "From £499",
    accentColor: "#4f63e7",
    bgFrom: "#f0f2ff",
    bgTo: "#e8ecff",
  },
  {
    Icon: Layers,
    label: "WEB APPLICATIONS",
    title: "Web Applications",
    desc: "Custom web apps — booking systems, client portals, dashboards, inventory tools. Built with React/Next.js and Java/Spring Boot.",
    price: "£2,000–£8,000",
    accentColor: "#7c3aed",
    bgFrom: "#f5f0ff",
    bgTo: "#ede8ff",
  },
  {
    Icon: Server,
    label: "BACKEND & API",
    title: "Backend & API Development",
    desc: "Senior Java/Spring Boot engineering for startups and tech teams. API design, microservices, cloud migration, performance optimisation.",
    price: "Day rate or fixed-scope",
    accentColor: "#0e7490",
    bgFrom: "#f0faff",
    bgTo: "#e3f6ff",
  },
] as const;

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="services" data-screen-label="Services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">Freelance Services</div>
          <h2 className="section-title">What I build for you</h2>
          <p>
            I take on a small number of freelance projects each month across
            three service tiers.
          </p>
        </div>

        <div className={styles.panelRow}>
          {SERVICES.map(({ Icon, label, title, desc, price, accentColor, bgFrom, bgTo }, i) => {
            const isActive = active === i;
            return (
              <div
                key={label}
                className={`${styles.panel} ${isActive ? styles.panelActive : ""} reveal`}
                style={
                  isActive
                    ? ({
                        "--panel-accent": accentColor,
                        "--panel-bg-from": bgFrom,
                        "--panel-bg-to": bgTo,
                        "--panel-border": accentColor,
                      } as React.CSSProperties)
                    : ({} as React.CSSProperties)
                }
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActive(i); }}
              >
                {/* Collapsed state: icon + rotated label */}
                <div className={styles.panelCollapsed}>
                  <div
                    className={styles.panelIconWrap}
                    style={{ color: isActive ? accentColor : "var(--muted)" }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span
                    className={styles.panelLabelRotated}
                    style={{ color: isActive ? accentColor : "var(--muted-2)" }}
                  >
                    {label}
                  </span>
                </div>

                {/* Expanded content */}
                <div className={styles.panelContent}>
                  <div className={styles.panelContentInner}>
                    <div className={styles.panelIconLarge} style={{ color: accentColor }}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <div className={styles.panelMeta}>
                      <span className={styles.panelEyebrow} style={{ color: accentColor }}>
                        {label}
                      </span>
                      <h3 className={styles.panelTitle}>{title}</h3>
                    </div>

                    <p className={styles.panelDesc}>{desc}</p>

                    <div className={styles.panelFooter}>
                      <span
                        className={styles.panelPrice}
                        style={{
                          color: accentColor,
                          borderColor: `color-mix(in oklch, ${accentColor} 30%, transparent)`,
                          background: `color-mix(in oklch, ${accentColor} 8%, transparent)`,
                        }}
                      >
                        {price}
                      </span>
                      <a
                        href="#contact"
                        className={styles.panelCta}
                        style={{ background: accentColor }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get in touch
                        <span className={styles.panelCtaIcon}>
                          <ArrowUpRight size={14} strokeWidth={2.5} />
                        </span>
                      </a>
                    </div>
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
