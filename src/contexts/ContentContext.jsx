import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { sanityClient, isSanityConfigured } from '../lib/sanity'
import {
  PORTFOLIO_QUERY,
  PROFILE_QUERY,
  PROJECTS_QUERY,
  EXPERIENCE_QUERY,
  SKILLS_QUERY,
} from '../lib/portfolioQuery'
import { normalizeSanityPortfolio, normalizeSeparateDocs } from '../lib/normalizeSanityPortfolio'

const ContentContext = createContext(null)

/**
 * Attempt to load content using the new separate-document schema.
 * If no separate documents exist, fall back to the legacy single portfolio document.
 */
async function fetchContent(client) {
  const [profile, projects, experience, skills] = await Promise.all([
    client.fetch(PROFILE_QUERY),
    client.fetch(PROJECTS_QUERY),
    client.fetch(EXPERIENCE_QUERY),
    client.fetch(SKILLS_QUERY),
  ])

  const hasSeparateDocs = profile || (Array.isArray(projects) && projects.length > 0)

  if (hasSeparateDocs) {
    return normalizeSeparateDocs({ profile, projects, experience, skills })
  }

  // Fall back to legacy single portfolio document
  const doc = await client.fetch(PORTFOLIO_QUERY)
  return normalizeSanityPortfolio(doc)
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => normalizeSanityPortfolio(null))
  const [loading, setLoading] = useState(isSanityConfigured())
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!sanityClient) {
      setContent(normalizeSanityPortfolio(null))
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    fetchContent(sanityClient)
      .then((normalized) => {
        if (cancelled) return
        setContent(normalized)
      })
      .catch((e) => {
        if (cancelled) return
        setError(e?.message || 'Failed to load content')
        setContent(normalizeSanityPortfolio(null))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(
    () => ({
      ...content,
      loading,
      error,
      cmsEnabled: isSanityConfigured(),
    }),
    [content, loading, error]
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}

/** Short text for the AI system prompt */
export function buildPortfolioSummary(c) {
  if (!c) return ''
  const lines = [
    `Name: ${c.site?.name}`,
    `Title: ${c.site?.title}`,
    `Location: ${c.site?.location}`,
    `About: ${(c.aboutParagraphs || []).join(' ')}`,
    `Experience: ${(c.experience || []).map((e) => `${e.role} at ${e.company} (${e.period})`).join('; ')}`,
    `Projects: ${(c.projects || []).map((p) => p.name).join(', ')}`,
  ]
  return lines.join('\n')
}
