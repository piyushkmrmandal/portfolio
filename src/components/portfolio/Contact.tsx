export function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="gw"></div>
          <div className="gw gw2"></div>
          <div className="eyebrow center">Let&apos;s connect</div>
          <h2 className="rot-cta-h2">
            Ready to build something{" "}
            <span className="rotator rotator-cta" id="rotatorCta">
              <span className="rw">exceptional?</span>
              <span className="rw">resilient?</span>
              <span className="rw">scalable?</span>
              <span className="rw">remarkable?</span>
              <span className="rw">unforgettable?</span>
            </span>
          </h2>
          <p>
            Interested in enterprise systems, cloud-native architecture and
            scalable engineering leadership? Let&apos;s talk.
          </p>
          <div className="cta-actions">
            <a href="mailto:piyushkmrmandal@gmail.com" className="btn btn-white">
              Book a Call <span className="pip">↗</span>
            </a>
            <a href="/portfolio/resume.pdf" target="_blank" className="btn btn-ghost">
              Download Resume
            </a>
          </div>
          <div className="cta-direct">
            <a href="mailto:piyushkmrmandal@gmail.com">piyushkmrmandal@gmail.com</a>{" "}
            &nbsp;·&nbsp; +44 7981 138366 &nbsp;·&nbsp; Northampton, UK
          </div>
        </div>
      </div>
    </section>
  );
}
