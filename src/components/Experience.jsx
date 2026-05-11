import Container from './Container'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function Experience() {
  const { experience } = useContent()

  return (
    <Container id="experience">
      <Reveal>
        <SectionTitle subtitle="Where I've shipped">Experience</SectionTitle>
      </Reveal>
      <div className="space-y-6 mt-6">
        {experience.map((exp, idx) => (
          <Reveal key={idx} delay={idx * 0.06}>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {exp.company}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
