/* eslint-disable @next/next/no-img-element */
import { HeroMarquee } from "./HeroMarquee";
import { Typewriter } from "./Typewriter";


export function Hero() {
  return (
    <header id="hero" data-screen-label="Hero">
      <div className="hero-ghost">ENGINEER</div>
      <div className="wrap">
        <div className="hero-top">
          <div className="hero-hey reveal">
            <Typewriter text="Hey, I'm Piyush..." />
          </div>
        </div>
        <div className="hero-main">
          {/* ── 65% — typography ── */}
          <div className="hero-title reveal d2">
            <h1 className="rot-h1">
              <span className="ht-line">Engineering</span>
              <span
                className="rotator"
                id="rotator"
                aria-label="resilient, cloud-native, scalable, distributed and intelligent platforms"
              >
                <span className="rw">Resilient</span>
                <span className="rw">Cloud-Native</span>
                <span className="rw">Scalable</span>
                <span className="rw">Distributed</span>
                <span className="rw">Intelligent</span>
              </span>
              <span className="ht-line">Platforms</span>
            </h1>
          </div>

          {/* ── 35% — portrait + expertise chips ── */}
          <div className="hero-portrait-col reveal d1">
            <div className="hero-portrait">
              <img
                src="/portfolio/portrait.jpg"
                alt="Piyush Kumar Mandal — Cloud Architect & Engineering Leader"
              />
            </div>
          </div>
        </div>

        <div className="hero-foot reveal d3">
          <p>
            I design fault-tolerant architectures, intelligent APIs and
            cloud-native ecosystems for global enterprises.
          </p>
          <div className="hf-cta">
            <a href="#contact" className="btn btn-blue">
              Let&apos;s Build Together <span className="pip">↗</span>
            </a>
            <a href="#work" className="btn btn-ghost">View Work</a>
          </div>
        </div>

        <HeroMarquee />
      </div>
    </header>
  );
}
