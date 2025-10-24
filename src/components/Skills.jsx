import Container from './Container'
import SectionTitle from './SectionTitle'
import Pill from './Pill'
import { SKILLS } from '../data/skills'

export default function Skills() {
  return (
    <Container id="skills">
      <SectionTitle subtitle="A quick snapshot of my toolkit">Skills</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => <Pill key={skill}>{skill}</Pill>)}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
