import { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

type SectionsPageProps = {
  scrollTo?: 'home' | 'about' | 'skills' | 'projects' | 'contact'
}

function SectionsPage({ scrollTo }: SectionsPageProps) {
  useEffect(() => {
    if (!scrollTo) return

    const target = document.getElementById(scrollTo)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [scrollTo])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default SectionsPage
