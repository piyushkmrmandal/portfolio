"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "./data";
import { icons } from "./icons";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const LOGO_MAP: Record<string, string> = {
  "Java 8 / 17 / 21": "/logos/skills/java.svg",
  Python:              "/logos/skills/python.svg",
  JavaScript:          "/logos/skills/javascript.svg",
  SQL:                 "/logos/skills/mysql.svg",
  J2EE:                "/logos/skills/java.svg",
  DSA:                 "/logos/skills/java.svg",
  "Spring Boot":       "/logos/skills/spring.svg",
  "Spring Cloud":      "/logos/skills/spring.svg",
  "Spring Data JPA":   "/logos/skills/spring.svg",
  Hibernate:           "/logos/skills/hibernate.svg",
  "Spring MVC":        "/logos/skills/spring.svg",
  Thymeleaf:           "/logos/skills/thymeleaf.svg",
  AWS:                 "/logos/skills/aws.svg",
  GCP:                 "/logos/skills/gcp.svg",
  "OpenShift V4":      "/logos/skills/openshift.svg",
  "App Engine":        "/logos/skills/gcp.svg",
  Docker:              "/logos/skills/docker.svg",
  "Cloud SQL":         "/logos/skills/gcp.svg",
  "REST / OAS":        "/logos/skills/openapi.svg",
  Microservices:       "/logos/skills/spring.svg",
  "Apache Kafka":      "/logos/skills/kafka.svg",
  RabbitMQ:            "/logos/skills/rabbitmq.svg",
  OAuth:               "/logos/skills/swagger.svg",
  Swagger:             "/logos/skills/swagger.svg",
  MySQL:               "/logos/skills/mysql.svg",
  Oracle:              "/logos/skills/oracle.svg",
  MongoDB:             "/logos/skills/mongodb.svg",
  Couchbase:           "/logos/skills/couchbase.svg",
  "GitLab CI/CD":      "/logos/skills/gitlab.svg",
  Jenkins:             "/logos/skills/jenkins.svg",
  ELK:                 "/logos/skills/elasticsearch.svg",
  Grafana:             "/logos/skills/grafana.svg",
  AppDynamics:         "/logos/skills/appdynamics.svg",
  "JUnit · Mockito":   "/logos/skills/junit.svg",
};

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SKILLS[activeIdx];

  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
            </svg>{" "}
            Capabilities
          </div>
          <h2 className="section-title">The engineering toolkit</h2>
          <p>
            Eight years of Java &amp; Spring microservices, cloud-native
            platforms and delivery automation — the stack behind
            mission-critical systems.
          </p>
        </div>

        <div className="sk-showcase reveal">
          {/* Left: category list */}
          <div className="sk-list">
            {SKILLS.map((s, i) => {
              const isActive = i === activeIdx;
              const isDimmed = !isActive;
              return (
                <button
                  key={s.t}
                  className={`sk-row${isActive ? " sk-row--active" : ""}${isDimmed ? " sk-row--dimmed" : ""}`}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                >
                  <span className="sk-pill" aria-hidden="true" />
                  <span className="sk-cat-icon">{icons[s.ic]}</span>
                  <span className="sk-label">{s.t}</span>
                  <span className="sk-count">{s.items.length}</span>
                </button>
              );
            })}
          </div>

          {/* Right: items grid */}
          <div className="sk-panel">
            <p className="sk-panel-heading">{active.t}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.t}
                className="sk-grid"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {active.items.map((item) => (
                  <motion.div
                    key={item}
                    className="sk-tile"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease } },
                    }}
                  >
                    <div className="sk-tile-logo">
                      <Image
                        src={LOGO_MAP[item] ?? "/logos/skills/spring.svg"}
                        alt={item}
                        width={26}
                        height={26}
                        className="sk-tile-img"
                      />
                    </div>
                    <span className="sk-tile-name">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
