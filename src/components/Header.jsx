import { useState, useEffect } from 'react'
import { Home, User, LayoutGrid, Briefcase, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home',      href: '#home',      Icon: Home },
  { label: 'About',     href: '#about',     Icon: User },
  { label: 'Portfolio', href: '#portfolio', Icon: LayoutGrid },
  { label: 'Services',  href: '#services',  Icon: Briefcase },
  { label: 'Contact',   href: '#contact',   Icon: Mail },
]

export default function Header() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="sidebar">
      <a className="sidebar-logo" href="#home" aria-label="Go to home">
        MK
      </a>

      <nav className="sidebar-nav">
        {navLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className={`sidebar-link${active === href.slice(1) ? ' is-active' : ''}`}
            aria-label={label}
          >
            <span className="sidebar-icon"><Icon size={18} strokeWidth={1.8} /></span>
            <span className="sidebar-label">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

