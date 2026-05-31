"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import {
  User,
  UserCog,
  Scale,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Send,
  Server,
  Container,
  Hexagon,
  TrendingUp,
  GitCommitHorizontal,
  Hammer,
  FlaskConical,
  Rocket,
  UploadCloud,
  Boxes,
  Filter,
  Search,
  BarChart3,
  BellRing,
  Puzzle,
  Cloud,
  Database,
  Workflow,
  MonitorSmartphone,
  Network,
  Cog,
  Zap,
  Waves,
  Gauge,
  HardDrive,
  Inbox,
  Brain,
  MessageSquare,
  Bot,
  Sparkles,
  KeyRound,
  LayoutDashboard,
  Plug,
  Package,
  Clock,
  GitBranch,
  Bell,
  Code,
  Terminal,
  GraduationCap,
  Activity,
  Wand2,
  Home,
  Blocks,
  Layers,
  Aperture,
  Radar,
  Route,
  MessagesSquare,
  ArrowLeftRight,
  Repeat,
} from "lucide-react";

type IconCmp = ComponentType<{ className?: string; strokeWidth?: number }>;

/** Each flow stage → a real icon that represents it. */
const STAGE_ICON: Record<string, IconCmp> = {
  // Credit decisioning
  Applicant: User,
  Decision: Scale,
  Bureau: Landmark,
  Fraud: ShieldAlert,
  Response: Send,
  // OpenShift migration
  Legacy: Server,
  Containerize: Container,
  OpenShift: Hexagon,
  Scale: TrendingUp,
  Resilient: ShieldCheck,
  // CI/CD
  Commit: GitCommitHorizontal,
  Build: Hammer,
  Test: FlaskConical,
  Promote: Rocket,
  Deploy: UploadCloud,
  // Observability
  Services: Boxes,
  Logstash: Filter,
  Search: Search,
  Kibana: BarChart3,
  Alert: BellRing,
  // Google devshop
  Extension: Puzzle,
  Operator: UserCog,
  Backend: Server,
  "App Engine": Cloud,
  SQL: Database,
  // Personal / open-source project stages
  Client: MonitorSmartphone,
  UI: LayoutDashboard,
  Gateway: Network,
  API: Plug,
  Auth: KeyRound,
  Service: Cog,
  Event: Zap,
  Stream: Waves,
  Queue: Inbox,
  Cache: Gauge,
  Storage: HardDrive,
  Registry: Package,
  Pod: Hexagon,
  Pipeline: GitBranch,
  Schedule: Clock,
  Model: Brain,
  Prompt: MessageSquare,
  Agent: Bot,
  Embed: Sparkles,
  Vector: BarChart3,
  Notify: Bell,
  Monitor: Gauge,
  // Project-specific stages (match each repo's real architecture)
  IDE: Code,
  Sandbox: Terminal,
  Mentor: GraduationCap,
  Kafka: Activity,
  "AI Builder": Wand2,
  Database: Database,
  Listings: Home,
  Components: Blocks,
  App: Layers,
  Motion: Aperture,
  Discovery: Radar,
  Tracing: Route,
  Messaging: MessagesSquare,
  Docker: Container,
  Cloud: Cloud,
  Exchange: ArrowLeftRight,
  Convert: Repeat,
};

type Pt = { x: number; y: number; label: string };

/**
 * A "live ecosystem" view of a project's architecture flow: each stage is an
 * icon node, connected by curved paths with signal dots streaming between them.
 * Replaces the earlier plain-label canvas; same stages, richer visualization.
 */
export function ArchitectureFlow({ stages }: { stages: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const uid = useId().replace(/[:]/g, "");

  // measure the panel so the SVG coordinate space matches the DOM node chips
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  // pause SVG signal animations while the card is off-screen (cheap + tidy)
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          try {
            if (e.isIntersecting) svg.unpauseAnimations();
            else svg.pauseAnimations();
          } catch {
            /* unsupported — animations just keep running */
          }
        }),
      { threshold: 0.05 }
    );
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  const { w, h } = size;
  const n = stages.length;
  const pad = Math.min(54, w * 0.14);
  const pts: Pt[] = stages.map((s, i) => ({
    x: n > 1 ? pad + (w - pad * 2) * (i / (n - 1)) : w / 2,
    y: h * 0.5 + Math.sin(i * 1.15) * Math.min(40, h * 0.17),
    label: s,
  }));

  const R = 25; // node radius
  const off = R + 7; // trim connectors to the node edge

  const segPath = (a: Pt, b: Pt) => {
    const mx = (a.x + b.x) / 2;
    return `M ${a.x + off} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x - off} ${b.y}`;
  };

  return (
    <div className="ax-flow" ref={wrapRef}>
      {w > 0 && (
        <>
          <svg
            ref={svgRef}
            className="ax-svg"
            width={w}
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            fill="none"
          >
            <defs>
              {pts.slice(0, -1).map((a, i) => (
                <path key={i} id={`${uid}-seg-${i}`} d={segPath(a, pts[i + 1])} />
              ))}
            </defs>

            {/* connectors */}
            {pts.slice(0, -1).map((_, i) => (
              <use
                key={i}
                href={`#${uid}-seg-${i}`}
                className="ax-link"
              />
            ))}

            {/* flowing signal dots (two staggered per connector) */}
            {pts.slice(0, -1).flatMap((_, i) =>
              [0, 1].map((k) => (
                <circle key={`${i}-${k}`} r={2.6} className="ax-sig">
                  <animateMotion
                    dur={`${2.1 + (i % 2) * 0.5}s`}
                    begin={`${k * (1.05 + (i % 2) * 0.25)}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href={`#${uid}-seg-${i}`} />
                  </animateMotion>
                </circle>
              ))
            )}
          </svg>

          {/* icon nodes */}
          {pts.map((p, i) => {
            const Icon = STAGE_ICON[p.label] ?? Workflow;
            return (
              <div
                key={i}
                className="ax-node"
                style={{ left: p.x, top: p.y, animationDelay: `${i * 0.45}s` }}
              >
                <span className="ax-chip">
                  <Icon className="ax-ic" strokeWidth={1.8} />
                </span>
                <span className="ax-label">{p.label}</span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
