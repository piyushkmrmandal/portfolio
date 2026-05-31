/* eslint-disable @next/next/no-img-element */
import { TST } from "./data";

export function Testimonials() {
  const first = TST[0];
  return (
    <section className="section" id="testimonials" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow center">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>{" "}
            Testimonials
          </div>
          <h2 className="section-title">Trusted by the teams I build with</h2>
        </div>
        <div className="ct reveal d1">
          <div className="ct-stage" id="ctStage">
            {TST.map((t, i) => (
              <div
                className="ct-card"
                data-i={i}
                data-q={t.q}
                data-n={t.n}
                data-r={t.r}
                key={t.n}
                style={{ background: t.grad }}
              >
                <div className="cc-top">
                  <span className="cc-q">&#8220;</span>
                  <span className="cc-badge"><span className="d"></span>Verified</span>
                </div>
                <div className="cc-bot">
                  <img className="cc-avatar" src={t.img} alt={t.n} loading="lazy" />
                  <div className="cc-name">{t.n}</div>
                  <div className="cc-role">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="ct-content">
            <h3 className="ct-name" id="ctName">{first.n}</h3>
            <p className="ct-desg" id="ctDesg">{first.r}</p>
            <blockquote className="ct-quote" id="ctQuote"></blockquote>
            <div className="ct-arrows">
              <button id="ctPrev" aria-label="Previous testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button id="ctNext" aria-label="Next testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <span className="ct-idx" id="ctIdx">1 / {TST.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
