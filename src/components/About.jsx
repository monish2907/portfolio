const cards = [
  {
    title: 'Who I am',
    body: 'Passionate about Artificial Intelligence and Data Science, currently exploring machine learning, data analysis, and AI-driven applications through hands-on projects.',
  },
  {
    title: 'Process',
    body: 'Discover data, define the problem, build intelligent models, and deliver real-world solutions. Every project starts with understanding the data and ends with insights or systems that create impact.',
  },
  {
    title: 'Toolset',
    body: 'Python, TensorFlow, Pandas, NumPy, Scikit-learn, and Jupyter Notebook for building intelligent models and data-driven solutions.',
  },
  {
    title: 'Recognition',
    body: 'Focused on academic learning, personal AI projects, and continuous skill development in Artificial Intelligence and Data Science.',
  },
]

export default function About() {
  return (
    <section id="about" className="about section reveal">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h3>Design with strategy, not decoration.</h3>
      </div>

      <div className="about-grid">
        {cards.map(({ title, body }) => (
          <article key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
