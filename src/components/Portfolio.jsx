import { useState } from 'react'

const projects = [
  {
    id: 1,
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Aster coffee brand identity',
    tag: 'Branding',
    title: 'Aster Coffee',
    desc: 'Identity refresh, packaging, and in-store visual language.',
  },
  {
    id: 2,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    alt: 'Solex studio website redesign',
    tag: 'Web',
    title: 'Solex Studio',
    desc: 'Editorial-style website redesign and animation direction.',
  },
  {
    id: 3,
    category: 'campaign',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
    alt: 'Northline product campaign',
    tag: 'Campaign',
    title: 'Northline Launch',
    desc: 'Launch campaign visuals and social motion toolkit.',
  },
  {
    id: 4,
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    alt: 'Modex fashion brand system',
    tag: 'Branding',
    title: 'Modex',
    desc: 'New brand system for a direct-to-consumer fashion label.',
  },
  {
    id: 5,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    alt: 'Vanta dashboard website',
    tag: 'Web',
    title: 'Vanta Dashboard',
    desc: 'Marketing site and product visuals for a SaaS platform.',
  },
  {
    id: 6,
    category: 'campaign',
    image: 'https://images.unsplash.com/photo-1460408037948-b89a5e837b41?auto=format&fit=crop&w=900&q=80',
    alt: 'Lumen festival campaign',
    tag: 'Campaign',
    title: 'Lumen Festival',
    desc: 'Outdoor campaign and printed collateral system.',
  },
]

const filters = ['all', 'branding', 'web', 'campaign']

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="portfolio section reveal">
      <div className="section-head">
        <p className="eyebrow">Portfolio</p>
        <h3>Selected projects</h3>
      </div>

      <div className="filters" role="tablist" aria-label="Project filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter${active === f ? ' is-active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={project.alt} />
            <div className="project-info">
              <p className="project-tag">{project.tag}</p>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
