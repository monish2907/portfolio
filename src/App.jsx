import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 55}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
