"use client";

import { ExternalLink } from "lucide-react";

import { CardCarousel } from "@/components/ui/card-carousel";
import { ArchitectureFlow } from "./ArchitectureFlow";
import styles from "./Projects.module.css";
import demoStyles from "./Projects.demo.module.css";

type DemoProject = {
  title: string;
  type: string;
  desc: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

// Populated when demo projects are deployed — leave empty for now
const DEMO_PROJECTS: DemoProject[] = [];

type Project = {
  title: string;
  desc: string;
  repo: string;
  pills: string[];
  stages: string[];
};

/* Personal / open-source work pulled from github.com/piyushkmrmandal —
   real repositories, each card visualises that project's architecture. */
const PROJECTS: Project[] = [
  {
    title: "AlgoVerse",
    desc: "An AI-powered DSA & system-design platform — a Monaco IDE behind an Nginx gateway runs each submission in a Docker/gVisor sandbox, with an Ollama AI mentor and Kafka-driven analytics.",
    repo: "https://github.com/piyushkmrmandal/algo-verse",
    pills: ["Java", "Spring Boot", "React", "Kafka", "Ollama"],
    stages: ["IDE", "Gateway", "Sandbox", "Mentor", "Kafka"],
  },
  {
    title: "StaySync — AI Property Platform",
    desc: "A full-stack property rental platform powered by AI — a React UI calls a Spring Boot REST API where an AI builder scaffolds listings on demand, persisted to a managed database. Inspired by modern rental marketplace architecture.",
    repo: "https://github.com/piyushkmrmandal/airbnb-project",
    pills: ["Java", "Spring Boot", "React", "AI"],
    stages: ["UI", "API", "AI Builder", "Database", "Listings"],
  },
  {
    title: "MSSC Brewery Microservices",
    desc: "The MSSC Brewery microservices are Spring Boot services that use JMS messaging, Docker, and Spring Cloud to simulate an automated beer ordering system, handling ordering, payment, confirmation, and delivery workflows.",
    repo: "https://github.com/piyushkmrmandal/springmicroservice-advance",
    pills: ["Spring Boot", "JMS", "Docker", "Spring Cloud"],
    stages: ["API", "Service", "Messaging", "Docker", "Cloud"],
  },
  {
    title: "Currency Exchange Microservice",
    desc: "A Spring Cloud currency stack — a Zuul gateway fronts a currency-exchange service that a conversion service calls over Feign, guarded by Hystrix fault tolerance.",
    repo: "https://github.com/piyushkmrmandal/currency-exchange-microservice",
    pills: ["Spring Boot", "Feign", "Eureka", "Hystrix"],
    stages: ["Client", "Gateway", "Exchange", "Convert", "Resilient"],
  },
];

export function Projects() {
  return (
    <section className="section" id="projects" data-screen-label="Projects">
      <div className="wrap">

        {/* ── Web Projects (client/demo work) ── */}
        <div className={`${demoStyles.webSection} reveal`}>
          <div className={demoStyles.webHead}>
            <div className="eyebrow">Client Work</div>
            <h2 className="section-title" style={{ marginTop: 12 }}>Web Projects</h2>
          </div>

          {DEMO_PROJECTS.length === 0 ? (
            <p className={demoStyles.placeholder}>
              Sample projects coming soon — see my enterprise work below.
            </p>
          ) : (
            <div className={demoStyles.grid}>
              {DEMO_PROJECTS.map((p) => (
                <article key={p.title} className={demoStyles.card}>
                  <div className={demoStyles.cardTop}>
                    <span className={demoStyles.typeTag}>{p.type}</span>
                    <h3 className={demoStyles.cardTitle}>{p.title}</h3>
                    <p className={demoStyles.cardDesc}>{p.desc}</p>
                  </div>
                  <div className={demoStyles.cardBottom}>
                    <div className={styles.pills}>
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <div className={demoStyles.actions}>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={demoStyles.actionBtn}
                        >
                          Live ↗
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${demoStyles.actionBtn} ${demoStyles.actionBtnGhost}`}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className={demoStyles.divider} />
        </div>

        <div className={`section-head reveal ${styles.head}`}>
          <div className={styles.headText}>
            <div className="eyebrow">Open Source</div>
            <h2 className="section-title">Selected Projects</h2>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 17 }}>
              Personal and open-source work — small, focused systems that
              explore the cloud-native, event-driven and AI tooling I build with.
            </p>
          </div>
        </div>

        <div className="reveal d1">
          <CardCarousel items={PROJECTS} />
        </div>

      </div>
    </section>
  );
}
