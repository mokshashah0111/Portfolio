import Container from './Container'
import SectionTitle from './SectionTitle'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <Container id="contact">
      <SectionTitle subtitle="Let's build something together">Contact</SectionTitle>
      <div className="rounded-2xl border p-5">
        <div className="flex flex-wrap items-center gap-3">
          {SITE.email && (
            <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          )}
          {SITE.phone && <span>· {SITE.phone}</span>}
          {SITE.linkedin && (<><span>·</span><a className="underline underline-offset-4" href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></>)}
          {SITE.github && (<><span>·</span><a className="underline underline-offset-4" href={SITE.github} target="_blank" rel="noreferrer">GitHub</a></>)}
        </div>
      </div>
    </Container>
  )
}
