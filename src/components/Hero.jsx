export default function Hero() {
  return (
    <section id="home" className="hero section reveal">
      <div className="hero-media">
        <img
          src="/hero.jpg"
          alt="Portrait of Matt Cannon"
        />
      </div>

      <div className="hero-content">
        <h1>I&apos;m Monish Kumar</h1>
        <h2>I&apos;m doing Artificial Intelligence</h2>
        <p>
          I build intelligent systems that turn data into meaningful insights.
          From machine learning models to data-driven applications,
          I create solutions that help ideas become smarter and more efficient.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-ghost" href="#portfolio">
            View work
          </a>
        </div>
      </div>
    </section>
  )
}
