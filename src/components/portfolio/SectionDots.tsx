"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function SectionDots() {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState("");
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState("");

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-screen-label]")
    );
    const secs: Section[] = els
      .filter((el) => el.id)
      .map((el) => ({ id: el.id, label: el.dataset.screenLabel || "" }));
    setSections(secs);
    if (secs.length) setActiveId(secs[0].id);

    // Track active section via IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        const hitting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (hitting.length) setActiveId(hitting[0].target.id);
      },
      { threshold: 0.25, rootMargin: "0px 0px -40% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!sections.length) return null;

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: "fixed",
        right: 22,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 89,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 13,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {sections.map((sec) => {
        const isActive = sec.id === activeId;
        const isHovered = sec.id === hoveredId;
        const showLabel = isActive || isHovered;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={sec.label}
            aria-current={isActive ? "true" : undefined}
            onMouseEnter={() => setHoveredId(sec.id)}
            onMouseLeave={() => setHoveredId("")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              outline: "none",
            }}
          >
            {/* Label appears to the left, slides in on active/hover */}
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: isActive ? "var(--accent)" : "var(--ink-2)",
                opacity: showLabel ? 1 : 0,
                transform: showLabel ? "translateX(0)" : "translateX(6px)",
                transition: "opacity 0.2s ease, transform 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {sec.label}
            </span>

            {/* Dot */}
            <span
              style={{
                display: "block",
                flexShrink: 0,
                width: isActive ? 8 : 5,
                height: isActive ? 8 : 5,
                borderRadius: "50%",
                background: isActive
                  ? "var(--accent)"
                  : isHovered
                  ? "var(--ink-2)"
                  : "rgba(0,0,0,0.2)",
                boxShadow: isActive ? "0 0 0 3px rgba(42,69,214,0.18)" : "none",
                transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
