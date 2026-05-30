/* Content data ported verbatim from the design's folio.js */

export type Skill = { ic: string; t: string; items: string[] };
export const SKILLS: Skill[] = [
  { ic: "code", t: "Languages & Core", items: ["Java 8 / 17 / 21", "J2EE", "Python", "JavaScript", "DSA", "SQL"] },
  { ic: "layers", t: "Frameworks", items: ["Spring Boot", "Spring Cloud", "Spring Data JPA", "Hibernate", "Spring MVC", "Thymeleaf"] },
  { ic: "cloud", t: "Cloud & Platforms", items: ["AWS", "GCP", "OpenShift V4", "App Engine", "Docker", "Cloud SQL"] },
  { ic: "api", t: "APIs & Messaging", items: ["REST / OAS", "Microservices", "Apache Kafka", "RabbitMQ", "OAuth", "Swagger"] },
  { ic: "db", t: "Data Stores", items: ["MySQL", "Oracle", "MongoDB", "Couchbase"] },
  { ic: "pipe", t: "DevOps & Observability", items: ["GitLab CI/CD", "Jenkins", "ELK", "Grafana", "AppDynamics", "JUnit · Mockito"] },
];

export type Work = {
  tag: string;
  title: string;
  desc: string;
  pills: string[];
  metrics: [string, string][];
  stages: string[];
};
export const WORK: Work[] = [
  {
    tag: "Barclays · USCB Cards",
    title: "Enterprise Credit Decisioning Platform",
    desc: "RFT decides the credit issued to a card applicant — combining bureau data and fraud signals, then applying partner-specific strategies. I refactored the microservices and decisioning flows behind it.",
    pills: ["Java", "Spring Boot", "REST", "Experian", "Microservices"],
    metrics: [["Real-time", "Decisioning"], ["End-to-end", "USCB APIs"]],
    stages: ["Applicant", "Decision", "Bureau", "Fraud", "Response"],
  },
  {
    tag: "Barclays · Platform",
    title: "Cloud-Native Migration to OpenShift V4",
    desc: "Re-platformed a legacy application onto the OpenShift V4 template — highly available, fault-tolerant and auto-scalable — introducing OAuth as part of the transition.",
    pills: ["OpenShift V4", "AWS", "Docker", "OAuth"],
    metrics: [["24/7", "Availability"], ["Auto-scale", "Elastic"]],
    stages: ["Legacy", "Containerize", "OpenShift", "Scale", "Resilient"],
  },
  {
    tag: "Barclays · DevOps",
    title: "Intelligent CI/CD Transformation",
    desc: "Migrated delivery from Stash & Jenkins to GitLab CI/CD, automating cross-environment promotion and giving teams the flexibility to ship safely and fast.",
    pills: ["GitLab CI/CD", "Jenkins", "Docker", "XLR"],
    metrics: [["4h → 15m", "Promotion"], ["+60%", "Speed"]],
    stages: ["Commit", "Build", "Test", "Promote", "Deploy"],
  },
  {
    tag: "Barclays · Observability",
    title: "Real-Time Monitoring & Observability",
    desc: "A unified view of application logs and system health built on the ELK stack and AppDynamics, so production issues surface fast and root-cause is immediate.",
    pills: ["ELK", "AppDynamics", "Grafana", "Splunk"],
    metrics: [["Live", "Dashboards"], ["APM", "Health"]],
    stages: ["Services", "Logstash", "Search", "Kibana", "Alert"],
  },
  {
    tag: "Google · Trust & Safety",
    title: "Google Devshop Automation Ecosystem",
    desc: "Browser extensions and dashboards that automate Google Trust & Safety operations — a JS frontend with a Python backend and Cloud SQL, deployed on App Engine.",
    pills: ["JavaScript", "Python", "GCP", "App Engine", "Cloud SQL"],
    metrics: [["Team 15", "Devshop"], ["Automated", "Operations"]],
    stages: ["Extension", "Operator", "Backend", "App Engine", "SQL"],
  },
];

export type Experience = { when: string; co: string; role: string; via: string };
export const XP: Experience[] = [
  { when: "AUG 2025 — PRESENT", co: "EXL Services UK", role: "Lead Assistant Manager", via: "Client · Barclays USA — GFED, USCB Cards" },
  { when: "JUN 2022 — JUN 2024", co: "EXL Services", role: "Senior Software Engineer", via: "Client · Barclays USA — OpenShift & CI/CD" },
  { when: "JUL 2021 — MAY 2022", co: "Cognizant", role: "Associate Projects", via: "Google Trust & Safety Devshop" },
  { when: "OCT 2020 — APR 2021", co: "Infosys", role: "Senior Systems Engineer", via: "Client · American Express — TPDG" },
  { when: "NOV 2017 — SEP 2020", co: "Infosys", role: "Systems Engineer", via: "The Hartford — Ability Advantage" },
];

export type Testimonial = { q: string; n: string; r: string; grad: string; img: string };
export const TST: Testimonial[] = [
  {
    q: "Piyush designed our transaction processing pipeline to handle peak loads without degradation. His attention to scalability and production readiness made a real difference in our platform reliability.",
    n: "Chetan Kumar",
    r: "Senior Tech Lead, I-Exceed",
    grad: "linear-gradient(150deg, #2a45d6, #0e1640)",
    img: "/portfolio/testimonials/chetan.jpeg",
  },
  {
    q: "Working with Piyush on our microservices migration was seamless. He anticipated bottlenecks, documented decisions clearly, and mentored our team through the transition without service interruptions.",
    n: "Bibby George",
    r: "Delivery Lead, Infosys",
    grad: "linear-gradient(150deg, #3850e0, #5b73ef)",
    img: "/portfolio/testimonials/bibby.jpeg",
  },
  {
    q: "Piyush brought structured thinking to our CI/CD pipeline overhaul. He reduced deployment time by identifying root causes, not just symptoms, and built processes our team could own long-term.",
    n: "Mandar Namdas",
    r: "AVP, Barclays",
    grad: "linear-gradient(150deg, #16245f, #2a45d6)",
    img: "/portfolio/testimonials/mandar.jpeg",
  },
  {
    q: "His Kafka expertise solved our message ordering and durability issues that had plagued us for months. Beyond the technical fix, he explained the trade-offs so we could make informed decisions.",
    n: "Gunjan Sharma",
    r: "AVP, EXL Services",
    grad: "linear-gradient(150deg, #2a45d6, #131d52)",
    img: "/portfolio/testimonials/gunjan.jpeg",
  },
  {
    q: "Piyush's code reviews weren't just about correctness. He coached junior developers on security patterns and system design thinking. We're a stronger team because of his leadership.",
    n: "Kishor Marathe",
    r: "Project Manager, EXL Services",
    grad: "linear-gradient(150deg, #4258e6, #2a45d6)",
    img: "/portfolio/testimonials/kishore.jpeg",
  },
  {
    q: "When our Kubernetes cluster faced resource contention, Piyush diagnosed the issue, proposed solutions with clear cost-benefit analysis, and implemented the fix with zero downtime.",
    n: "Nikhila Reddy Mettu",
    r: "Senior Project Manager, Cognizant",
    grad: "linear-gradient(150deg, #1b2664, #3850e0)",
    img: "/portfolio/testimonials/nikhila.jpeg",
  },
];

export type Award = { year: string; t: string; by: string; d: string };
export const AWARDS: Award[] = [
  { year: "2020", t: "Insta Award", by: "Infosys Limited", d: "Recognised for outstanding contribution and delivery excellence on enterprise engagements." },
  { year: "2023", t: "Emerging Talent at EXL", by: "EXL", d: "Awarded for fast impact and technical leadership as a rising engineer within the organisation." },
  { year: "2025", t: "Analytics Oscar Award", by: "EXL · Northampton", d: "Honoured for excellence in engineering and data-driven delivery on the Barclays programme." },
];
