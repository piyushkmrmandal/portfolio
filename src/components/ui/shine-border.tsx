"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description An animated gradient-border effect. Adapted for this project's
 * Tailwind v4 setup: the visual lives in `portfolio.css` under `.shine-border`
 * and is configured purely through CSS variables, so it works without the
 * v3-style tailwind.config `animate-shine` / `bg-shine-size` utilities.
 * @param borderRadius radius of the border (px). If the element already sets
 *   its own border-radius (e.g. a design-system class), that wins via `inherit`.
 * @param borderWidth width of the shining border (px).
 * @param duration animation duration applied to the shine sweep (s).
 * @param color a string or string array defining the shine color stops.
 * @param className extra classes (compose with design-system classes here).
 * @param children content rendered inside the bordered surface.
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#ffffff",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--shine-border-radius": `${borderRadius}px`,
          "--shine-border-width": `${borderWidth}px`,
          "--shine-duration": `${duration}s`,
          "--shine-color": Array.isArray(color) ? color.join(",") : color,
        } as React.CSSProperties
      }
      className={cn("shine-border", className)}
    >
      {children}
    </div>
  );
}
