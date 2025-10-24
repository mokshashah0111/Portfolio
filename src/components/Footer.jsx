import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-5xl mx-auto px-4 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <a href="#home" className="underline underline-offset-4">Back to top ↑</a>
      </div>
    </footer>
  )
}
