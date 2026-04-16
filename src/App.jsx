import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const secs = document.querySelectorAll('section')
    const links = document.querySelectorAll('nav a')
    const onScroll = () => {
      let cur = ''
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id })
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
