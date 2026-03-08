import { useState } from 'react'
import { Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react'

const MAILTO = 'monishmonish4101@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [note, setNote] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry: ${form.type}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\n\n${form.message}`
    )
    window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`
    setNote('Opening your email app...')
    setForm({ name: '', email: '', type: '', message: '' })
  }

  return (
    <section id="contact" className="contact section reveal">
      <div className="section-head">
        <p className="eyebrow">Contact</p>
        <h3>Let&apos;s build something memorable</h3>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <p>
            Available for freelance projects and long-term collaborations.
            Usually replies within 24 hours.
          </p>
          <ul className="contact-details">
            <li><Mail size={15} /><span> Email: {MAILTO}</span></li>
            <li><Phone size={15} /><span> Phone: +91 8838308246</span></li>
            <li><MapPin size={15} /><span> Location: TamilNadu, India</span></li>
          </ul>

          <div className="social-bar">
            <a href="https://www.linkedin.com/in/monishkumar29" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/_moni_2907?igsh=MW8yY2YycDQ3ZW52YQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-btn">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://github.com/monish2907" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Project type
            <select name="type" value={form.type} onChange={handleChange} required>
              <option value="">Select one</option>
              <option>Build AI</option>
              <option>Machine Learning Projects</option>
              <option>Data Analysis</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Project details
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
            {note && <p className="form-note">{note}</p>}
        </form>
      </div>
    </section>
  )
}
