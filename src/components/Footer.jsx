import { useContent } from '../contexts/ContentContext'

export default function Footer() {
  const { site } = useContent()
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 py-8 bg-zinc-50/50 dark:bg-zinc-800/50">
      <div className="max-w-5xl mx-auto px-4 text-sm text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href="#home" className="hover:text-zinc-700 dark:hover:text-zinc-300 underline-offset-2 hover:underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
