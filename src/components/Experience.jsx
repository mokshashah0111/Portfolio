import Container from './Container'
import SectionTitle from './SectionTitle'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  return (
    <Container id="experience">
      <SectionTitle subtitle="What I've shipped & learned">Experience</SectionTitle>
      <div className="space-y-6">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {exp.role} · <span className="text-muted-foreground">{exp.company}</span>
              </h3>
              <div className="text-sm text-muted-foreground">{exp.period}</div>
            </div>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
