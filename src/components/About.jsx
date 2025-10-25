import Container from './Container'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <Container id="about">
      <SectionTitle>About</SectionTitle>
      <div className="prose max-w-none">
        <p>
          Hi, I’m Moksha Shah, a passionate Software Developer specializing in Artificial Intelligence, Machine Learning, and the integration of Robotics and Physical AI. Fascinated by how intelligent systems learn and adapt to the real world, I strive to turn that curiosity into meaningful code and innovative ideas.
        </p>
        <br/>
        <p>
          I thrive on solving complex problems and exploring the balance between creativity and logic, building solutions that are both technically sound and purposeful. My approach to technology is rooted in continuous learning, collaboration, and the belief that great engineering blends precision with imagination.
        </p>
      </div>
    </Container>
  )
}
