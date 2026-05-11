import Container from './Container'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function About() {
  const { aboutParagraphs } = useContent()

  return (
    <Container id="about">
      <Reveal>
        <SectionTitle subtitle="A bit about me">About</SectionTitle>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] leading-relaxed">
          {aboutParagraphs.map((para, i) => (
            <p key={i} className={i > 0 ? 'mt-4 text-zinc-700 dark:text-zinc-300' : 'text-zinc-700 dark:text-zinc-300'}>
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </Container>
  )
}
