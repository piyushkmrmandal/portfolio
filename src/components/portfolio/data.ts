/* Content data ported verbatim from the design's folio.js */

const CAREER_START = new Date(2017, 10, 6); // 6 Nov 2017

export function experienceYears(): number {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const hadAnniversary =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() >= CAREER_START.getDate());
  if (!hadAnniversary) years -= 1;
  return years;
}

export type Skill = { ic: string; t: string; items: string[] };
export const SKILLS: Skill[] = [
  { ic: "code", t: "Languages & Core", items: ["Java 8 / 17 / 21", "J2EE", "Python", "JavaScript", "DSA", "SQL"] },
  { ic: "layers", t: "Frameworks", items: ["Spring Boot", "Spring Cloud", "Spring Data JPA", "Hibernate", "Spring MVC", "Thymeleaf"] },
  { ic: "cloud", t: "Cloud & Platforms", items: ["AWS", "GCP", "OpenShift V4", "Kubernetes", "Terraform", "App Engine", "Docker", "Cloud SQL"] },
  { ic: "api", t: "APIs & Messaging", items: ["REST / OAS", "Microservices", "Apache Kafka", "RabbitMQ", "OAuth", "Swagger"] },
  { ic: "db", t: "Data Stores", items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Couchbase"] },
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
    desc: "RFT decides the credit issued to a card applicant — combining bureau data and fraud signals, then applying partner-specific strategies. I refactored the microservices and decisioning flows, lifting daily throughput from 15K to 25–30K applications in production.",
    pills: ["Java", "Spring Boot", "REST", "Experian", "Microservices"],
    metrics: [["15K → 30K", "Applications/day"], ["Real-time", "End-to-end"]],
    stages: ["Applicant", "Decision", "Bureau", "Fraud", "Response"],
  },
  {
    tag: "Barclays · Platform",
    title: "Cloud-Native Migration to OpenShift V4",
    desc: "Re-platformed a legacy application onto the OpenShift V4 template — highly available, fault-tolerant and auto-scalable — introducing OAuth as part of the transition.",
    pills: ["OpenShift V4", "AWS", "Docker", "OAuth"],
    metrics: [["45 TPS", "Zero Downtime"], ["24/7", "Auto-scale"]],
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
    desc: "A unified view of application logs and system health built on the ELK stack and AppDynamics. Reduced analysis and report creation time from 1–2 days to under 15 minutes, with flexible report formats and on-demand alerts for proactive monitoring.",
    pills: ["ELK", "AppDynamics", "Grafana", "Splunk"],
    metrics: [["Days → 15 min", "Report Creation"], ["On-demand", "Proactive Alerts"]],
    stages: ["Services", "Logstash", "Search", "Kibana", "Alert"],
  },
  {
    tag: "Google · Trust & Safety",
    title: "Google Devshop Automation Ecosystem",
    desc: "Browser extensions and dashboards that automate Google Trust & Safety operations — a JS frontend with a Python backend and Cloud SQL, deployed on App Engine. Reduced overnight manual efforts to 5–10 minute automated execution for the team.",
    pills: ["JavaScript", "Python", "GCP", "App Engine", "Cloud SQL"],
    metrics: [["Overnight → 5 min", "Execution Time"], ["Team 15", "Automated"]],
    stages: ["Extension", "Operator", "Backend", "App Engine", "SQL"],
  },
];

export type Experience = { when: string; co: string; role: string; via: string };
export const XP: Experience[] = [
  { when: "AUG 2025 — PRESENT", co: "EXL Services UK", role: "Lead Assistant Manager — Lead Software Engineer", via: "Client · Barclays USA — GFED, USCB Cards" },
  { when: "JUL 2024 — JUL 2025", co: "EXL Services", role: "Lead Assistant Manager — Lead Software Engineer", via: "Client · Barclays USA — GitLab CI/CD & Observability" },
  { when: "JUN 2022 — JUN 2024", co: "EXL Services", role: "Assistant Manager — Senior Software Engineer", via: "Client · Barclays USA — OpenShift & CI/CD" },
  { when: "JUL 2021 — JUN 2022", co: "Cognizant", role: "Associate Projects", via: "Google Trust & Safety Devshop" },
  { when: "APR 2021 — JUL 2021", co: "ACL Digital", role: "Senior Software Engineer", via: "Client · Anglo Gulf Trade Bank — Corporate Onboarding" },
  { when: "JAN 2020 — APR 2021", co: "Infosys", role: "Senior System Engineer", via: "Client · American Express — TPHG" },
  { when: "NOV 2017 — JAN 2020", co: "Infosys", role: "System Engineer", via: "The Hartford — Ability Advantage" },
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

export type Award = { year: string; t: string; by: string; d: string; img?: string };
export const AWARDS: Award[] = [
  { year: "2020", t: "Insta Award", by: "Infosys Limited", d: "Recognised for outstanding contribution and delivery excellence on enterprise engagements, reflecting consistent ownership and dependable execution across client-facing releases." },
  { year: "2023", t: "Emerging Talent at EXL", by: "EXL", d: "Awarded for fast impact and technical leadership as a rising engineer within the organisation.", img: "/portfolio/awards/emerging-talent.png" },
  { year: "2025", t: "Analytics Oscar Award", by: "EXL · Northampton", d: "Honoured for excellence in engineering and data-driven delivery on the Barclays programme.", img: "/portfolio/awards/analytics-oscar.png" },
  { year: "2026", t: "Stellar Performer Award", by: "EXL · Data Management", d: "Awarded for high-impact contributions through strong ownership, disciplined execution, and a solution-oriented approach to complex challenges.", img: "/portfolio/awards/stellar-performer.png" },
];

