const projects = [
  { title: 'Casa Arco', type: 'Residential / 2024', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { title: 'The Meridian', type: 'Hospitality / 2023', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Atelier North', type: 'Workplace / 2024', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
]

const services = ['Architecture', 'Interior design', 'Build & delivery']

export default function HomePage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Dicor home">DICOR<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#studio">Studio</a><a href="#services">Services</a>
        </div>
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Architecture / Interiors / Build</p>
          <h1>Spaces with<br /><em>lasting character.</em></h1>
          <p className="hero-intro">Dicor is an architecture and design studio shaping calm, considered environments for the way people live, work, and gather.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">↓</a>
        </div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" alt="Warm, light-filled contemporary interior" /></div>
      </section>

      <section className="statement shell" id="studio">
        <p className="eyebrow">Our approach</p>
        <h2>Good design is felt<br />before it is <em>seen.</em></h2>
        <div className="statement-bottom"><p>We create places that feel inevitable — where material, light, and proportion work together with quiet confidence.</p><a className="text-link" href="#contact">Meet the studio <span>↗</span></a></div>
      </section>

      <section className="services" id="services"><div className="shell services-inner"><div><p className="eyebrow">What we do</p><h2>From first sketch<br />to final <em>detail.</em></h2></div><div className="service-list">{services.map((service, index) => <div className="service" key={service}><span>0{index + 1}</span><h3>{service}</h3><span className="arrow">↗</span></div>)}</div></div></section>

      <section className="work shell" id="work"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Made to <em>endure.</em></h2></div><p className="section-note">A selection of spaces designed with clarity, warmth, and a deep respect for their context.</p></div><div className="project-grid">{projects.map((project) => <article className="project" key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>↗</span></div></article>)}</div></section>

      <section className="contact shell" id="contact"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something lasting.</em></h2><a className="contact-link" href="mailto:studio@dicor.design">studio@dicor.design <span>↗</span></a></section>

      <footer className="footer shell"><a className="wordmark" href="#top">DICOR<span>.</span></a><p>Architecture, interiors &amp; build<br />New York · London · Everywhere</p><p className="copyright">© 2024 Dicor Studio</p></footer>
    </main>
  )
}

 
