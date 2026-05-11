import Navbar from './components/Navbar'
import CmsBanner from './components/CmsBanner'
import Hero from './components/Hero'
import Quote from './components/Quote'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatAgent from './components/ChatAgent'

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 dark:selection:bg-zinc-100 selection:text-white dark:selection:text-zinc-900 antialiased">
      <Navbar />
      <CmsBanner />
      <Hero />
      <Quote />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ChatAgent />
    </main>
  )
}
