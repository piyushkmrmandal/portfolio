"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while deleting */
  deleteSpeed?: number;
  /** pause after the full text is typed, before deleting */
  holdAfterType?: number;
  /** pause after fully deleted, before retyping */
  holdAfterDelete?: number;
  className?: string;
};

export function Typewriter({
  text,
  typeSpeed = 120,
  deleteSpeed = 70,
  holdAfterType = 1800,
  holdAfterDelete = 600,
  className,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      return;
    }

    let delay: number;
    if (phase === "typing") {
      if (count < text.length) {
        delay = typeSpeed;
      } else {
        delay = holdAfterType;
      }
    } else {
      delay = count > 0 ? deleteSpeed : holdAfterDelete;
    }

    const id = window.setTimeout(() => {
      if (phase === "typing") {
        if (count < text.length) setCount((c) => c + 1);
        else setPhase("deleting");
      } else {
        if (count > 0) setCount((c) => c - 1);
        else setPhase("typing");
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [count, phase, text, typeSpeed, deleteSpeed, holdAfterType, holdAfterDelete]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="tw-caret" aria-hidden="true" />
    </span>
  );
}
