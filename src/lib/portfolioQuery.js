/** GROQ: legacy single portfolio document (kept for backwards compat with existing Studio docs) */
export const PORTFOLIO_QUERY = `*[_type == "portfolio"] | order(_updatedAt desc)[0]{
  _id,
  site,
  heroGreeting,
  heroFacts[]{ icon, label, value },
  quote,
  aboutParagraphs,
  experience[]{ role, company, location, period, bullets },
  education[]{ school, degree, period, details },
  projects[]{ name, link, tech, desc, category },
  skillGroups[]{ groupName, items }
}`

/** GROQ: new separate-document schema */
export const PROFILE_QUERY = `*[_type == "profile"][0]{
  name,
  headline,
  tagline,
  location,
  email,
  phone,
  linkedin,
  github,
  leetcode,
  targetRoles,
  heroGreeting,
  heroFacts[]{ icon, label, value },
  quote,
  aboutShort,
  aboutParagraphs
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, _createdAt desc){
  name,
  "slug": slug.current,
  featured,
  category,
  tech,
  link,
  githubUrl,
  desc,
  problem,
  solution,
  impact,
  challenges
}`

export const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc, startDate desc){
  role,
  company,
  location,
  period,
  bullets,
  portfolioSummary,
  achievements,
  skillsUsed
}`

export const SKILLS_QUERY = `*[_type == "skill"] | order(order asc){
  groupName,
  items
}`
