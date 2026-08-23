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
  Kubernetes:          "/logos/skills/kubernetes.svg",
  Terraform:           "/logos/skills/terraform.svg",
  "App Engine":        "/logos/skills/gcp.svg",
  Docker:              "/logos/skills/docker.svg",
  "Cloud SQL":         "/logos/skills/gcp.svg",
  "REST / OAS":        "/logos/skills/openapi.svg",
  Microservices:       "/logos/skills/spring.svg",
  "Apache Kafka":      "/logos/skills/kafka.svg",
  RabbitMQ:            "/logos/skills/rabbitmq.svg",
  OAuth:               "/logos/skills/swagger.svg",
  Swagger:             "/logos/skills/swagger.svg",
  PostgreSQL:          "/logos/skills/postgresql.svg",
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

/* 3-column staggered layout matching team-showcase offset pattern */
const COL_OFFSETS = ["0px", "88px", "42px"] as const;

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SKILLS[activeIdx];

  const col0 = SKILLS.filter((_, i) => i % 3 === 0);
  const col1 = SKILLS.filter((_, i) => i % 3 === 1);
  const col2 = SKILLS.filter((_, i) => i % 3 === 2);
  const cols = [col0, col1, col2];

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
          {/* Left: scattered category cards in 3 staggered columns */}
          <div className="sk-card-grid">
            {cols.map((col, ci) => (
              <div
                key={ci}
                className="sk-col"
                style={{ marginTop: COL_OFFSETS[ci] }}
              >
                {col.map((s) => {
                  const idx = SKILLS.indexOf(s);
                  const isActive = idx === activeIdx;
                  const isDimmed = !isActive;
                  return (
                    <button
                      key={s.t}
                      className={`sk-card${isActive ? " sk-card--active" : ""}${isDimmed ? " sk-card--dimmed" : ""}`}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <div className="sk-card-icon">{icons[s.ic]}</div>
                      <p className="sk-card-name">{s.t}</p>
                      <span className="sk-card-count">{s.items.length} skills</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right: items as a list */}
          <div className="sk-panel">
            <p className="sk-panel-heading">{active.t}</p>
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.t}
                className="sk-list"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {active.items.map((item) => (
                  <motion.li
                    key={item}
                    className="sk-item"
                    variants={{
                      hidden: { opacity: 0, x: 12 },
                      show:   { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
                    }}
                  >
                    <span className="sk-item-indicator" />
                    <div className="sk-item-logo">
                      <Image
                        src={LOGO_MAP[item] ?? "/logos/skills/spring.svg"}
                        alt={item}
                        width={22}
                        height={22}
                        className="sk-item-img"
                        unoptimized
                      />
                    </div>
                    <span className="sk-item-name">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
