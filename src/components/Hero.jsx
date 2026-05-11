import { useContent } from '../contexts/ContentContext'
import image from '/IMG_3298.jpg'

export default function Hero() {
  const { site, heroGreeting, heroFacts } = useContent()

  return (
    <section id="home" className="pt-24 pb-14 md:pt-28 md:pb-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{site.title}</p>
          <p className="mt-2 text-zinc-500 dark:text-zinc-500">{site.tagline}</p>

          {Array.isArray(heroFacts) && heroFacts.length > 0 && (
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {heroFacts.map((fact, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-white/80 px-3 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-800/60"
                >
                  <span className="text-lg leading-none" aria-hidden>
                    {fact.icon || '•'}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {fact.label}
                    </p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Download Resume
              </a>
            )}
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:justify-self-end flex justify-center md:justify-end">
          <img
            src={image}
            width={300}
            height={350}
            alt={site.name}
            className="rounded-2xl object-cover shadow-lg ring-1 ring-zinc-200/50 dark:ring-zinc-600/50"
          />
        </div>
      </div>
    </section>
  )
}
