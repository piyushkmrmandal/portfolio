# Graph Report - portfolio  (2026-05-30)

## Corpus Check
- 68 files · ~348,461 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 456 nodes · 511 edges · 44 communities (29 shown, 15 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5b55a49b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 47|Community 47]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `cn()` - 15 edges
3. `UI/UX Pro Max - Design Intelligence` - 13 edges
4. `DesignSystemGenerator` - 11 edges
5. `Quick Reference` - 9 edges
6. `_search_csv()` - 8 edges
7. `generate_design_system()` - 7 edges
8. `BM25` - 7 edges
9. `search()` - 7 edges
10. `Approved Patterns` - 7 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  src/lib/utils.ts → package.json
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .claude/skills/ui-ux-pro-max/scripts/design_system.py → .claude/skills/ui-ux-pro-max/scripts/core.py
- `ShineBorder()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/shine-border.tsx → src/lib/utils.ts
- `AnimatedGridPattern()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/animated-grid-pattern.tsx → src/lib/utils.ts
- `Badge()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/badge.tsx → src/lib/utils.ts

## Communities (44 total, 15 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (35): About(), ACCELERATE_ITEMS, BUILD_ITEMS, EXPERTISE_ITEMS, ArchitectureFlow(), IconCmp, Pt, STAGE_ICON (+27 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (35): 1. Accessibility (CRITICAL), 2. Touch & Interaction (CRITICAL), 3. Performance (HIGH), 4. Layout & Responsive (HIGH), 5. Typography & Color (MEDIUM), 6. Animation (MEDIUM), 7. Style Selection (MEDIUM), 8. Charts & Data (LOW) (+27 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (25): DesignSystemGenerator, _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides() (+17 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (11): Badge(), BadgeProps, badgeVariants, Card, CardContent, CardDescription, CardFooter, CardHeader (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (41): dependencies, class-variance-authority, embla-carousel-auto-scroll, embla-carousel-react, framer-motion, gsap, lenis, lucide-react (+33 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts, Core search function using BM25 (+7 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (12): code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" -), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "<product_typ), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa w), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --d), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --d), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" -), How to Use This Skill, Step 1: Analyze User Requirements (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (9): COMPONENT RULES, DESIGN PHILOSOPHY, DESIGN REFERENCES, ENGINEERING RULES, FORBIDDEN, Git, Graphify, MOTION SYSTEM (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.20
Nodes (9): Approved Patterns, Buttons, Cards, Empty States, Forms, Hero Sections, Navigation, Patterns to Avoid (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.25
Nodes (8): code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa w), code:bash (# Get UX guidelines for animation and accessibility), code:bash (python3 skills/ui-ux-pro-max/scripts/search.py "layout respo), Example Workflow, Step 1: Analyze Requirements, Step 2: Generate Design System (REQUIRED), Step 3: Supplement with Detailed Searches (as needed), Step 4: Stack Guidelines

### Community 13 - "Community 13"
Cohesion: 0.29
Nodes (6): Component Patterns, Layout Patterns, Motion Patterns, REJECTED PATTERNS, Typography Patterns, Visual Patterns

### Community 14 - "Community 14"
Cohesion: 0.33
Nodes (5): Always, Avoid, COMPONENT RULES, Component Structure, Preferred Sources

### Community 15 - "Community 15"
Cohesion: 0.33
Nodes (5): BORDER RADIUS, DESIGN SYSTEM, LAYOUTS, SPACING, TYPOGRAPHY

### Community 16 - "Community 16"
Cohesion: 0.33
Nodes (5): Avoid, Duration, Easing, Motion Rules, Rules

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (5): Avoid, Base Grid, Rules, Scale, Spacing Rules

### Community 18 - "Community 18"
Cohesion: 0.33
Nodes (5): Avoid, Rules, Scale, Typography Rules, Weights

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (4): Design Rules, Layout, Motion, SaaS App Prompt

### Community 20 - "Community 20"
Cohesion: 0.40
Nodes (4): BRAND RULES, Do Not, Tone, Visual Identity

### Community 21 - "Community 21"
Cohesion: 0.40
Nodes (4): code:bash (npm run dev), Deploy on Vercel, Getting Started, Learn More

### Community 22 - "Community 22"
Cohesion: 0.40
Nodes (4): Dashboard Prompt, Design Rules, Layout, Motion

### Community 23 - "Community 23"
Cohesion: 0.40
Nodes (4): Design Rules, Landing Page Prompt, Motion, Structure

### Community 24 - "Community 24"
Cohesion: 0.40
Nodes (4): Design Rules, Motion, Portfolio Prompt, Structure

### Community 25 - "Community 25"
Cohesion: 0.50
Nodes (3): effortLevel, hooks, PreToolUse

### Community 41 - "Community 41"
Cohesion: 0.33
Nodes (3): DockItem, DockItemProps, dockItems

### Community 42 - "Community 42"
Cohesion: 0.40
Nodes (3): GlowCardProps, glowColorMap, sizeMap

### Community 43 - "Community 43"
Cohesion: 0.07
Nodes (33): cn(), COMPANIES, Company, TRACK, clsx, Project, PROJECTS, AnimatedGridPattern() (+25 more)

### Community 47 - "Community 47"
Cohesion: 0.20
Nodes (9): XP, cardAnimation, ease, Experience(), JOURNEY, transition, ShineBorder(), ShineBorderProps (+1 more)

## Knowledge Gaps
- **245 isolated node(s):** `setup.sh script`, `config`, `name`, `version`, `private` (+240 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 43` to `Community 3`, `Community 47`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 4` to `Community 43`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `clsx` connect `Community 43` to `Community 4`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `setup.sh script`, `config`, `name` to the rest of the system?**
  _271 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05064935064935065 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0855614973262032 - nodes in this community are weakly interconnected._