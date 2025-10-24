import Container from './Container'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <Container id="projects">
      <SectionTitle subtitle="A few things I'm proud of">Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, idx) => (
          <a key={idx} href={p.link} target="_blank" rel="noreferrer"
             className="rounded-2xl border p-5 hover:shadow transition block">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold">{p.name}</h3>
              <div className="text-sm text-muted-foreground">{p.tech.join(" · ")}</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </a>
        ))}
      </div>
    </Container>
  )
}
