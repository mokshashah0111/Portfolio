import Container from './Container'
import SectionTitle from './SectionTitle'
import { EDUCATION } from '../data/education'

export default function Education() {
  return (
    <Container id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {EDUCATION.map((ed, idx) => (
          <div key={idx} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {ed.degree} · <span className="text-muted-foreground">{ed.school}</span>
              </h3>
              <div className="text-sm text-muted-foreground">{ed.period}</div>
            </div>
            {ed.details?.length > 0 && (
              <ul className="list-disc pl-6 mt-3 space-y-1">
                {ed.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
