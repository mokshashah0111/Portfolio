import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Container from './Container'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useContent } from '../contexts/ContentContext'
import { PROJECT_FILTERS } from '../data/projects'

function CaseStudyModal({ project, onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleOverlayClick = useCallback(
    (e) => { if (e.target === overlayRef.current) onClose() },
    [onClose]
  )

  const hasLinks = project.link || project.githubUrl

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-zinc-100 bg-white/95 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {project.category}
            </p>
            <h2 id="modal-title" className="mt-0.5 text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="mt-0.5 shrink-0 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.problem && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">Problem</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">What I Built</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.impact && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">Outcome</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.impact}</p>
            </div>
          )}

          {project.challenges && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">Challenges</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.challenges}</p>
            </div>
          )}

          {hasLinks && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3.5 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ p, onOpenModal }) {
  const hasCaseStudy = p.problem || p.solution || p.impact

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md flex flex-col min-w-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{p.name}</h3>
        {p.category && (
          <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
            {p.category}
          </span>
        )}
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.tech.join(' · ')}</p>
      <p
        className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex-1"
        style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
      >
        {p.desc}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {hasCaseStudy && (
          <button
            type="button"
            onClick={() => onOpenModal(p)}
            className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Case Study
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        )}
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
          >
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}
        {!p.link && p.githubUrl && (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { projects } = useContent()
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filters = useMemo(() => {
    const categories = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))]
    const order = PROJECT_FILTERS
    return order.filter((f) => categories.includes(f)).concat(
      categories.filter((c) => !order.includes(c))
    )
  }, [projects])

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => (p.category || '').toLowerCase() === filter.toLowerCase())
  }, [projects, filter])

  const handleOpenModal = useCallback((p) => setActiveProject(p), [])
  const handleCloseModal = useCallback(() => setActiveProject(null), [])

  return (
    <Container id="projects">
      <Reveal>
        <SectionTitle subtitle="Things I've built">Projects</SectionTitle>
      </Reveal>
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setFilter(label)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              filter === label
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6 overflow-visible" style={{ alignItems: 'start' }}>
        {visible.map((p, idx) => (
          <ProjectCard key={`${p.slug || p.name}-${idx}`} p={p} onOpenModal={handleOpenModal} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">No projects in this category.</p>
      )}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={handleCloseModal} />
      )}
    </Container>
  )
}
