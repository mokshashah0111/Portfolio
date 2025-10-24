import { SITE } from '../data/site'

export default function Navbar() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold">{SITE.name}</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <a key={i.href} href={i.href} className="hover:underline underline-offset-4">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {SITE.github && (
            <a className="text-sm underline underline-offset-4" href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {SITE.linkedin && (
            <a className="text-sm underline underline-offset-4" href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
