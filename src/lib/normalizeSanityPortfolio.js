import { SITE as DEFAULT_SITE } from '../data/site'
import { HERO_GREETING, HERO_FACTS, HERO_QUOTE } from '../data/heroExtras'
import { ABOUT_PARAGRAPHS } from '../data/about'
import { EXPERIENCE } from '../data/experience'
import { EDUCATION } from '../data/education'
import { PROJECTS } from '../data/projects'
import { SKILLS } from '../data/skills'

function mergeSite(remote) {
  if (!remote || typeof remote !== 'object') return { ...DEFAULT_SITE }
  return {
    ...DEFAULT_SITE,
    ...remote,
    resumeUrl: remote.resumeUrl || DEFAULT_SITE.resumeUrl,
  }
}

function skillGroupsToRecord(groups) {
  if (!Array.isArray(groups) || groups.length === 0) return { ...SKILLS }
  const out = {}
  for (const g of groups) {
    const name = g.groupName
    const items = Array.isArray(g.items) ? g.items.filter(Boolean) : []
    if (name && items.length) out[name] = items
  }
  return Object.keys(out).length ? out : { ...SKILLS }
}

function normalizeProject(p) {
  return {
    slug: p.slug || p.name?.toLowerCase().replace(/\s+/g, '-') || '',
    name: p.name || '',
    link: p.link || null,
    githubUrl: p.githubUrl || null,
    tech: Array.isArray(p.tech) ? p.tech : [],
    desc: p.desc || '',
    problem: p.problem || null,
    solution: p.solution || null,
    impact: p.impact || null,
    challenges: p.challenges || null,
    category: p.category || 'Other',
    featured: p.featured !== false,
  }
}

/**
 * Map legacy single Sanity portfolio document to the shape used by React components.
 * Falls back to bundled defaults for any missing field.
 */
export function normalizeSanityPortfolio(doc) {
  if (!doc) {
    return {
      site: { ...DEFAULT_SITE },
      heroGreeting: HERO_GREETING,
      heroFacts: [...HERO_FACTS],
      quote: HERO_QUOTE,
      aboutParagraphs: [...ABOUT_PARAGRAPHS],
      experience: [...EXPERIENCE],
      education: [...EDUCATION],
      projects: PROJECTS.map(normalizeProject),
      skills: { ...SKILLS },
    }
  }

  return {
    site: mergeSite(doc.site),
    heroGreeting: doc.heroGreeting || HERO_GREETING,
    heroFacts: Array.isArray(doc.heroFacts) && doc.heroFacts.length ? doc.heroFacts : [...HERO_FACTS],
    quote: doc.quote || HERO_QUOTE,
    aboutParagraphs:
      Array.isArray(doc.aboutParagraphs) && doc.aboutParagraphs.length
        ? doc.aboutParagraphs
        : [...ABOUT_PARAGRAPHS],
    experience: Array.isArray(doc.experience) && doc.experience.length ? doc.experience : [...EXPERIENCE],
    education: Array.isArray(doc.education) && doc.education.length ? doc.education : [...EDUCATION],
    projects:
      Array.isArray(doc.projects) && doc.projects.length
        ? doc.projects.map(normalizeProject)
        : PROJECTS.map(normalizeProject),
    skills: skillGroupsToRecord(doc.skillGroups),
  }
}

/**
 * Map separate-document Sanity responses (profile + projects + experience + skills)
 * to the same shape. Falls back to bundled defaults for missing data.
 */
export function normalizeSeparateDocs({ profile, projects, experience, skills } = {}) {
  const site = profile
    ? {
        name: profile.name || DEFAULT_SITE.name,
        title: profile.headline || DEFAULT_SITE.title,
        tagline: profile.tagline || DEFAULT_SITE.tagline,
        location: profile.location || DEFAULT_SITE.location,
        email: profile.email || DEFAULT_SITE.email,
        phone: profile.phone || DEFAULT_SITE.phone,
        linkedin: profile.linkedin || DEFAULT_SITE.linkedin,
        github: profile.github || DEFAULT_SITE.github,
        leetcode: profile.leetcode || DEFAULT_SITE.leetcode,
        resumeUrl: DEFAULT_SITE.resumeUrl,
      }
    : { ...DEFAULT_SITE }

  return {
    site,
    heroGreeting: profile?.heroGreeting || HERO_GREETING,
    heroFacts:
      Array.isArray(profile?.heroFacts) && profile.heroFacts.length
        ? profile.heroFacts
        : [...HERO_FACTS],
    quote: profile?.quote || HERO_QUOTE,
    aboutParagraphs:
      Array.isArray(profile?.aboutParagraphs) && profile.aboutParagraphs.length
        ? profile.aboutParagraphs
        : [...ABOUT_PARAGRAPHS],
    experience:
      Array.isArray(experience) && experience.length ? experience : [...EXPERIENCE],
    education: [...EDUCATION],
    projects:
      Array.isArray(projects) && projects.length
        ? projects.map(normalizeProject)
        : PROJECTS.map(normalizeProject),
    skills: skillGroupsToRecord(skills),
  }
}
