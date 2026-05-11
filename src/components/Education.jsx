import Container from './Container'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function Education() {
  const { education } = useContent()

  return (
    <Container id="education">
      <Reveal>
        <SectionTitle subtitle="Background">Education</SectionTitle>
      </Reveal>
      <div className="space-y-6 mt-6">
        {education.map((ed, idx) => (
          <Reveal key={idx} delay={idx * 0.06}>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{ed.degree}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{ed.school}</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{ed.period}</span>
              </div>
              {ed.details?.length > 0 && (
                <ul className="mt-3 space-y-0.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {ed.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
