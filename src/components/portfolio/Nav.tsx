export function Nav() {
  return (
    <>
      <nav id="nav">
        <a href="#hero" className="logo">
          <span className="mk">P</span>Piyush&nbsp;Kr.&nbsp;Mandal
        </a>
        <div className="nav-links">
          <a href="#hero" data-sec="hero" className="active">Home</a>
          <a href="#about" data-sec="about">About</a>
          <a href="#skills" data-sec="skills">Skills</a>
          <a href="#services" data-sec="services">Services</a>
          <a href="#work" data-sec="work">Work</a>
          <a href="#awards" data-sec="awards">Awards</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="#contact" className="btn btn-dark">
            Get In Touch <span className="pip">↗</span>
          </a>
          <button className="nav-burger" id="burger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div id="mnav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}
