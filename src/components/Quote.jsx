import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'

export default function Quote() {
  const { quote } = useContent()
  if (!quote?.trim()) return null

  return (
    <section id="quote" className="scroll-mt-20 py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <blockquote className="mx-auto max-w-3xl border-l-4 border-zinc-300 pl-6 text-lg font-medium leading-relaxed text-zinc-800 dark:border-zinc-600 dark:text-zinc-200 md:text-xl">
            {quote}
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
