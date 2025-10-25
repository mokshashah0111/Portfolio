import { SITE } from '../data/site'
import image from '/IMG_3298.jpg'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {SITE.name}
          </h1>
          <p className="mt-3 text-xl font-medium">{SITE.title}</p>
          <p className="mt-3 text-muted-foreground">{SITE.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SITE.resumeUrl && (
              <a href={SITE.resumeUrl} target="_blank" rel="noreferrer"
                 className="rounded-2xl border px-5 py-2 text-sm font-medium hover:shadow">
                Download Resume
              </a>
            )}
            <a href="#projects" className="rounded-2xl px-5 py-2 text-sm font-medium bg-black text-white hover:opacity-90">
              View Projects
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          {/* <div className="aspect-square w-56 md:w-72 rounded-2xl border shadow-sm grid place-content-center text-center"> */}
            <div>
              <img src ={image} width = {300} height={350} pt= {24}lt="Profile Picture" className="rounded-2xl mb-4" />
              {/* <div className="text-7xl">👋</div>
              <div className="mt-2 text-sm text-muted-foreground">Open to internships & projects</div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
