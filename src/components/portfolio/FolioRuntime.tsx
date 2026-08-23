"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Client-side interactions ported from the design's folio.js:
 * nav scrollspy + burger, scroll reveals, Apple-style section zoom,
 * spring rotating-word headlines, the 3D testimonial carousel, and the
 * canvas "architecture flow" visuals on the work cards. Content is
 * server-rendered; this only wires behaviour onto the existing DOM.
 */
export function FolioRuntime() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Lenis — cinematic momentum smooth scroll ---------- */
    (function initSmooth() {
      if (reduce) return;
      const lenis = new Lenis({
        duration: 1.15,
        // expo-out: heavy start, long graceful settle — gives the cinematic glide
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });
      // Lenis drives the real scroll position; disable native smooth so they don't fight.
      document.documentElement.style.scrollBehavior = "auto";

      let rafId = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Route in-page anchor clicks through Lenis for a weighted glide to each section.
      const onAnchor = (e: MouseEvent) => {
        const a = (e.target as HTMLElement | null)?.closest?.(
          'a[href^="#"]'
        ) as HTMLAnchorElement | null;
        if (!a) return;
        const hash = a.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -78, duration: 1.4 });
      };
      document.addEventListener("click", onAnchor);

      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        document.removeEventListener("click", onAnchor);
        document.documentElement.style.scrollBehavior = "";
        lenis.destroy();
      });
    })();

    /* ---------- NAV + scrollspy + burger ---------- */
    (function initNav() {
      const nav = document.getElementById("nav");
      if (!nav) return;
      const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav-links a")];
      const secs = links
        .map((l) => document.getElementById(l.dataset.sec || ""))
        .filter((s): s is HTMLElement => !!s);
      let ticking = false;
      let lastScrollY = window.scrollY;
      function onScroll() {
        const y = window.scrollY;
        nav!.classList.toggle("scrolled", y > 30);
        // Hide on scroll-down, reveal on scroll-up; always show near top
        if (y < 100) {
          nav!.classList.remove("nav-hidden");
        } else if (y > lastScrollY + 4) {
          nav!.classList.add("nav-hidden");
        } else if (y < lastScrollY - 4) {
          nav!.classList.remove("nav-hidden");
        }
        lastScrollY = y;
        let cur: HTMLElement | undefined = secs[0];
        for (const s of secs) if (s.getBoundingClientRect().top <= 140) cur = s;
        const id = cur && cur.id;
        links.forEach((l) => l.classList.toggle("active", l.dataset.sec === id));
        ticking = false;
      }
      const handler = () => {
        if (!ticking) {
          requestAnimationFrame(onScroll);
          ticking = true;
        }
      };
      window.addEventListener("scroll", handler, { passive: true });
      onScroll();
      const burger = document.getElementById("burger");
      const mnav = document.getElementById("mnav");
      const onBurger = () => mnav?.classList.toggle("open");
      const mLinks = mnav ? [...mnav.querySelectorAll("a")] : [];
      const onMLink = () => mnav?.classList.remove("open");
      burger?.addEventListener("click", onBurger);
      mLinks.forEach((a) => a.addEventListener("click", onMLink));
      cleanups.push(() => {
        window.removeEventListener("scroll", handler);
        burger?.removeEventListener("click", onBurger);
        mLinks.forEach((a) => a.removeEventListener("click", onMLink));
      });
    })();

    /* ---------- reveals ---------- */
    (function initReveals() {
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.12 }
      );
      document
        .querySelectorAll(".reveal, .hero-marquee.from-right")
        .forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    })();

    /* ---------- Apple-style scroll zoom ---------- */
    (function initZoom() {
      if (reduce || window.innerWidth < 760) return;
      // #work is now a tall sticky "stacking cards" section; exclude it so the
      // section-level zoom doesn't fight the per-card scroll-scale transforms.
      const secs = [...document.querySelectorAll<HTMLElement>("main > section")].filter(
        (s) => s.id !== "work"
      );
      secs.forEach((s) => s.classList.add("zoomable"));
      let ticking = false;
      function upd() {
        const vh = window.innerHeight;
        const vc = vh / 2;
        for (const s of secs) {
          const r = s.getBoundingClientRect();
          if (r.bottom < -240 || r.top > vh + 240) continue;
          const center = r.top + r.height / 2;
          const dist = (center - vc) / vh;
          // k = how far the section still sits below the viewport centre (0 = settled).
          const k = dist > 0 ? Math.min(dist, 1) : 0;
          // eased so the reveal accelerates as the section climbs into frame.
          const e = k * k * (3 - 2 * k); // smoothstep
          const scale = (1 - e * 0.13).toFixed(4); // 1.00 → 0.87 — clear depth pop
          const ty = (e * 46).toFixed(1); // rises up into place
          const op = (1 - e * 0.55).toFixed(3); // fades in
          s.style.transform = `translate3d(0, ${ty}px, 0) scale(${scale})`;
          s.style.opacity = op;
        }
        ticking = false;
      }
      const handler = () => {
        if (!ticking) {
          requestAnimationFrame(upd);
          ticking = true;
        }
      };
      window.addEventListener("scroll", handler, { passive: true });
      window.addEventListener("resize", upd);
      upd();
      cleanups.push(() => {
        window.removeEventListener("scroll", handler);
        window.removeEventListener("resize", upd);
      });
    })();

    /* ---------- rotating-word headline (spring) ---------- */
    function initRotator(el: HTMLElement | null, interval: number) {
      if (!el) return;
      const words = [...el.querySelectorAll<HTMLElement>(".rw")];
      if (!words.length) return;
      words[0].classList.add("is-active");
      if (words.length < 2 || reduce) return;
      let idx = 0;
      const timer = setInterval(() => {
        const cur = words[idx];
        idx = (idx + 1) % words.length;
        const nxt = words[idx];
        nxt.classList.remove("is-active");
        nxt.style.transition = "none";
        nxt.style.transform = "translateY(112%)";
        nxt.style.opacity = "0";
        void nxt.offsetWidth; // force reflow
        nxt.style.transition = "";
        cur.classList.remove("is-active");
        cur.style.transform = "translateY(-112%)";
        cur.style.opacity = "0";
        nxt.classList.add("is-active");
        nxt.style.transform = "";
        nxt.style.opacity = "";
      }, interval);
      cleanups.push(() => clearInterval(timer));
    }
    initRotator(document.getElementById("rotator"), 2200);
    initRotator(document.getElementById("rotatorCta"), 2600);

    /* ---------- testimonials: 3D carousel ---------- */
    (function initTst() {
      const stage = document.getElementById("ctStage");
      const nameEl = document.getElementById("ctName");
      const desgEl = document.getElementById("ctDesg");
      const quoteEl = document.getElementById("ctQuote");
      const idxEl = document.getElementById("ctIdx");
      if (!stage || !nameEl || !desgEl || !quoteEl) return;
      const cards = [...stage.querySelectorAll<HTMLElement>(".ct-card")];
      const len = cards.length;
      if (!len) return;
      let idx = 0;
      let timer: ReturnType<typeof setInterval>;

      function layout() {
        const w = stage!.offsetWidth || 460;
        const gap = Math.max(44, Math.min(96, w * 0.2));
        const stick = gap * 0.6;
        cards.forEach((c, i) => {
          const isA = i === idx;
          const isL = (idx - 1 + len) % len === i;
          const isR = (idx + 1) % len === i;
          let z = 1,
            op = 0,
            pe = "none",
            tf = "translateX(0) scale(.78)";
          if (isA) {
            z = 3;
            op = 1;
            pe = "auto";
            tf = "translateX(0) translateY(0) scale(1) rotateY(0deg)";
          } else if (isL) {
            z = 2;
            op = 1;
            pe = "auto";
            tf = `translateX(-${gap}px) translateY(-${stick}px) scale(.85) rotateY(14deg)`;
          } else if (isR) {
            z = 2;
            op = 1;
            pe = "auto";
            tf = `translateX(${gap}px) translateY(-${stick}px) scale(.85) rotateY(-14deg)`;
          }
          c.style.zIndex = String(z);
          c.style.opacity = String(op);
          c.style.pointerEvents = pe;
          c.style.transform = tf;
        });
      }
      function content() {
        const card = cards[idx];
        const n = card.dataset.n || "";
        const r = card.dataset.r || "";
        const q = card.dataset.q || "";
        nameEl!.textContent = n;
        desgEl!.textContent = r;
        if (idxEl) idxEl.textContent = idx + 1 + " / " + len;
        quoteEl!.innerHTML = q
          .split(" ")
          .map(
            (w, k) =>
              `<span class="tw" style="transition-delay:${(0.028 * k).toFixed(
                3
              )}s">${w}&nbsp;</span>`
          )
          .join("");
        if (reduce) {
          quoteEl!.querySelectorAll(".tw").forEach((s) => s.classList.add("in"));
          return;
        }
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            quoteEl!.querySelectorAll(".tw").forEach((s) => s.classList.add("in"))
          )
        );
      }
      function schedule() {
        clearInterval(timer);
        timer = setInterval(() => go(idx + 1), 5000);
      }
      function go(n: number) {
        idx = (n + len) % len;
        layout();
        content();
        schedule();
      }
      const cardHandlers = cards.map((c, i) => {
        const h = () => {
          if (i !== idx) go(i);
        };
        c.addEventListener("click", h);
        return h;
      });
      const prev = document.getElementById("ctPrev");
      const next = document.getElementById("ctNext");
      const onPrev = () => go(idx - 1);
      const onNext = () => go(idx + 1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      window.addEventListener("resize", layout);
      layout();
      content();
      schedule();
      cleanups.push(() => {
        clearInterval(timer);
        window.removeEventListener("resize", layout);
        cards.forEach((c, i) => c.removeEventListener("click", cardHandlers[i]));
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
      });
    })();

    /* work card canvas flow viz now lives inside the Work component
       (src/components/portfolio/Work.tsx) so each card owns its own
       lifecycle and survives Fast Refresh. */

    /* reveal-safe fallback */
    const safe = setTimeout(() => document.body.classList.add("reveal-safe"), 6000);
    cleanups.push(() => clearTimeout(safe));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
