"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
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
    title: "Airbnb Clone",
    desc: "A Spring Boot + React Airbnb replica that uses AI to scaffold applications on demand — a React UI calls a REST API where an AI builder generates listings persisted to the database.",
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

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

          <div className={styles.nav}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Previous project"
              className={styles.navBtn}
              disabled={!canPrev}
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Next project"
              className={styles.navBtn}
              disabled={!canNext}
              onClick={() => api?.scrollNext()}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="reveal d1">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", containScroll: "trimSnaps" }}
          >
            <CarouselContent className={styles.track}>
              {PROJECTS.map((p) => (
                <CarouselItem key={p.repo} className={styles.item}>
                  <article className={styles.card}>
                    <div className={styles.visual}>
                      <span className={styles.visualLabel}>Architecture</span>
                      <ArchitectureFlow stages={p.stages} />
                    </div>
                    <div className={styles.body}>
                      <h3 className={styles.title}>{p.title}</h3>
                      <p className={styles.desc}>{p.desc}</p>
                      <div className={styles.pills}>
                        {p.pills.map((pill) => (
                          <span key={pill}>{pill}</span>
                        ))}
                      </div>
                      <a
                        className={styles.link}
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        View on GitHub ↗
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className={styles.dots}>
          {PROJECTS.map((p, i) => (
            <button
              key={p.repo}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              aria-current={current === i}
              className={`${styles.dot} ${current === i ? styles.dotActive : ""}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
