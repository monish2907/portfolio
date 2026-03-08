const services = [
  {
    title: 'Brand Strategy',
    body: 'Problem analysis, data modeling, machine learning development, and AI-driven solution design.',
  },
  {
    title: 'Intelligent Systems Development',
    body: 'Data processing, machine learning pipelines, predictive modeling, and AI systems built to turn complex data into smart decisions.',
  },
  {
    title: 'Data Science Projects',
    body: 'Exploring data, building machine learning models, and creating insights that help transform raw data into meaningful solutions.'
    },
  {
    title: 'Data Analysis',
    body: 'Exploring datasets, discovering patterns, and transforming raw data into meaningful insights.'
  },
]

export default function Services() {
  return (
    <section id="services" className="services section reveal">
      <div className="section-head">
        <p className="eyebrow">Services</p>
        <h3>What I can do for your brand</h3>
      </div>

      <div className="service-grid">
        {services.map(({ title, body }) => (
          <article key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
