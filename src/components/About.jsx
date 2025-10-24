import Container from './Container'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <Container id="about">
      <SectionTitle>About</SectionTitle>
      <div className="prose max-w-none">
        <p>
          I'm a Computer Science student and international student in the USA (Class of 2026). I enjoy building
          practical tools—especially ML-powered web apps. Recently I've worked on a cold email generator that parses
          job postings and drafts tailored outreach, and an end‑to‑end fake news detection pipeline.
        </p>
        <p>
          I love clean UX, performance-minded code, and teamwork. I'm actively looking for internship opportunities.
        </p>
      </div>
    </Container>
  )
}
