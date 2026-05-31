# Piyush Kumar Mandal — Portfolio

A cinematic, scroll-driven personal portfolio built with **Next.js 15**, **Framer Motion**, and **TypeScript**. Designed to feel handcrafted — not templated — with weighted motion, intentional typography, and layered depth.

![Hero Section](./public/hero-screenshot.png)

---

## What this is

This is the source code for [piyushkmrmandal.com](https://github.com/piyushkmrmandal/portfolio) — the portfolio of Piyush Kumar Mandal, Lead Backend Engineer with 8+ years across Infosys, Alten Calasoft, Cognizant and EXL Services, delivering enterprise-scale systems for clients including Barclays, Google, American Express, and Anglo Gulf Trade Bank.

The site tells a career story through:

- **Cinematic intro reveal** — full-screen name animation with curtain wipe on every load
- **Hero** — asymmetric layout with headline, photo, and brand logos (Google, AmEx, The Hartford, AGTB)
- **Work** — sticky-pinned project cards with architecture flow diagrams, scroll-stacked
- **Skills** — categorised technology grid across languages, frameworks, cloud, APIs, data and DevOps
- **Experience** — horizontal roadmap timeline, oldest → current, scroll-triggered left-to-right sweep
- **Awards** — scroll-driven fan-out reveal: three cards stack behind the centre card then spread to a row
- **Testimonials** — peer and leadership quotes with a side stats panel
- **About** — professional bio with layered card layout
- **Contact** — direct email / LinkedIn / GitHub / WhatsApp links

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript |
| Animation | Framer Motion |
| Fonts | Plus Jakarta Sans (Google Fonts) |
| Styling | CSS Modules + global portfolio.css |
| Icons | Custom inline SVG set |
| Components | shadcn/ui, Magic UI (ShineBorder) |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build locally
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # metadata, fonts
│   ├── page.tsx            # root page, section order
│   ├── portfolio.css       # all component styles
│   └── icon.svg            # favicon (P monogram)
└── components/
    └── portfolio/
        ├── data.ts         # all content (XP, skills, work, testimonials, awards)
        ├── Intro.tsx       # cinematic intro overlay
        ├── Hero.tsx        # landing hero
        ├── Work.tsx        # project cards (sticky scroll)
        ├── Skills.tsx      # skills grid
        ├── Experience.tsx  # roadmap timeline
        ├── Awards.tsx      # fan-out award cards
        ├── Testimonials.tsx
        ├── About.tsx
        ├── Footer.tsx
        └── Nav.tsx
```

---

## License

Personal portfolio — all content (name, photo, work history) belongs to Piyush Kumar Mandal. Code structure is open for reference.
