import Container from './Container'
import SectionTitle from './SectionTitle'
import Pill from './Pill'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function Skills() {
  const { skills } = useContent()

  return (
    <Container id="skills">
      <Reveal>
        <SectionTitle subtitle="What I work with">Skills</SectionTitle>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Object.entries(skills).map(([group, items], gIdx) => (
          <Reveal key={group} delay={gIdx * 0.05}>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
