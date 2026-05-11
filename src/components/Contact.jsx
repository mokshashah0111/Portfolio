import Container from './Container'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function Contact() {
  const { site } = useContent()

  const links = [
    { label: 'Email', href: `mailto:${site.email}`, value: site.email },
    { label: 'Phone', href: null, value: site.phone },
    { label: 'LinkedIn', href: site.linkedin, value: 'LinkedIn' },
    { label: 'GitHub', href: site.github, value: 'GitHub' },
    ...(site.leetcode ? [{ label: 'LeetCode', href: site.leetcode, value: 'LeetCode' }] : []),
  ]

  return (
    <Container id="contact">
      <Reveal>
        <SectionTitle subtitle="Get in touch">Contact</SectionTitle>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 mt-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {links.map((item, i) => (
              <span key={item.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-zinc-300 dark:text-zinc-600">·</span>}
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-zinc-600 dark:text-zinc-400">{item.value}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  )
}
