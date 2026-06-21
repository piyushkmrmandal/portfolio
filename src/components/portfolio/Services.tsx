"use client";

import type { PointerEvent } from "react";
import { Globe, Layers, Server } from "lucide-react";
import styles from "./Services.module.css";

function handleMove(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", x.toFixed(1));
  el.style.setProperty("--my", y.toFixed(1));
  el.style.setProperty("--mxp", (x / r.width).toFixed(3));
}

const SERVICES = [
  {
    Icon: Globe,
    label: "WEBSITES",
    title: "Websites",
    desc: "Clean, fast, mobile-first websites for local businesses and professionals. Delivered in 2–3 weeks at a fixed price.",
    price: "From £499",
  },
  {
    Icon: Layers,
    label: "WEB APPLICATIONS",
    title: "Web Applications",
    desc: "Custom web apps — booking systems, client portals, dashboards, inventory tools. Built with React/Next.js and Java/Spring Boot.",
    price: "£2,000–£8,000",
  },
  {
    Icon: Server,
    label: "BACKEND & API",
    title: "Backend & API Development",
    desc: "Senior Java/Spring Boot engineering for startups and tech teams. API design, microservices, cloud migration, performance optimisation.",
    price: "Day rate or fixed-scope",
  },
] as const;

export function Services() {
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

        <div className="skills-grid spotlight-grid">
          {SERVICES.map(({ Icon, label, title, desc, price }, i) => (
            <div
              key={label}
              className={`skill-card reveal d${i + 1} ${styles.card}`}
              onPointerMove={handleMove}
            >
              <div className="sc-ic">
                <Icon size={22} />
              </div>
              <div className={styles.serviceLabel}>{label}</div>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDesc}>{desc}</p>
              <span className={styles.price}>{price}</span>
              <a href="#contact" className={`btn btn-dark ${styles.cta}`}>
                Get in touch <span className="pip">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
