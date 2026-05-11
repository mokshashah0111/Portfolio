# Moksha Shah — Portfolio

Personal portfolio for **Moksha Shah**, Software Engineer. Built with React, Vite, and Tailwind CSS. Content is driven by local data files with optional Sanity CMS integration, and deployed on Vercel.

**Live site:** [moksha-portfolio-navy.vercel.app](https://moksha-portfolio-navy.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion (motion) |
| CMS (optional) | Sanity v3 + Sanity Studio |
| AI Chat (optional) | OpenAI API via Vercel serverless function |
| Deployment | Vercel |

---

## Project Structure

```
├── api/
│   └── chat.js               # Vercel serverless function — AI chat backend
├── public/
│   └── Resume.pdf            # Downloadable resume
├── src/
│   ├── components/           # React UI components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx      # Project cards + case study modal
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── ChatAgent.jsx     # AI chat widget
│   │   ├── CmsBanner.jsx     # Shows Sanity load state
│   │   └── ...
│   ├── contexts/
│   │   ├── ContentContext.jsx  # Fetches from Sanity, falls back to local data
│   │   └── ThemeContext.jsx    # Dark / light mode
│   ├── data/                 # Local fallback content (edit these)
│   │   ├── site.js           # Name, headline, tagline, social links
│   │   ├── about.js          # About section paragraphs
│   │   ├── heroExtras.js     # Hero greeting, quick-fact cards, quote
│   │   ├── experience.js     # Work experience
│   │   ├── education.js      # Education entries
│   │   ├── projects.js       # Projects + case study content
│   │   └── skills.js         # Skill groups
│   └── lib/
│       ├── sanity.js                   # Sanity client
│       ├── portfolioQuery.js           # GROQ queries
│       └── normalizeSanityPortfolio.js # Maps CMS data → component shape
├── studio/                   # Sanity Studio (separate app)
│   └── schemaTypes/
│       ├── portfolio.js      # Legacy single-document schema
│       ├── profileSchema.js  # Profile / hero / about
│       ├── projectSchema.js  # Per-project with case study fields
│       ├── experienceSchema.js
│       └── skillSchema.js
├── vercel.json               # Vercel build config + SPA rewrites
├── vite.config.js
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Updating content

All content lives in `src/data/`. Edit these files to update what's displayed:

| File | What it controls |
|---|---|
| `src/data/site.js` | Name, headline, tagline, email, phone, social links |
| `src/data/about.js` | About section paragraphs |
| `src/data/heroExtras.js` | Hero greeting, quick-fact cards, highlight quote |
| `src/data/experience.js` | Work experience entries and bullet points |
| `src/data/education.js` | Education entries |
| `src/data/projects.js` | Projects, tech stacks, and case study content |
| `src/data/skills.js` | Skill groups and items |
| `public/Resume.pdf` | Downloadable resume file |

---

## Features

- **Dark / light mode** toggle
- **Project filtering** by category (AI, Full-stack, Machine Learning, Generative AI)
- **Case study modal** — each project card opens a Problem → What I Built → Outcome detail view
- **AI chat widget** — powered by OpenAI via a Vercel serverless function (requires `OPENAI_API_KEY`)
- **Sanity CMS integration** — optional live content management; falls back to local data files if not configured
- **Reveal animations** on scroll

---

## Deployment

### Vercel (live)

The project is deployed on Vercel. Every manual deploy:

```bash
vercel --prod
```

To enable **automatic deploys on every push**, go to [Vercel Dashboard](https://vercel.com) → your project → Settings → Git → Connect Repository → select `mokshashah0111/Portfolio`.

### Environment variables on Vercel

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | For AI chat | Your OpenAI secret key |
| `OPENAI_MODEL` | No | Model to use (default: `gpt-4o-mini`) |
| `VITE_CHAT_API_URL` | For AI chat | Your Vercel deployment URL + `/api/chat` |
| `VITE_SANITY_PROJECT_ID` | For Sanity CMS | Your Sanity project ID |
| `VITE_SANITY_DATASET` | No | Sanity dataset (default: `production`) |
| `VITE_SANITY_API_VERSION` | No | Sanity API version (default: `2024-01-01`) |

Copy `.env.example` to `.env` for local development:

```bash
cp .env.example .env
```

---

## Sanity CMS (Optional)

Content can be managed via Sanity Studio instead of editing local data files. When `VITE_SANITY_PROJECT_ID` is set, the frontend fetches live content from Sanity and falls back to bundled data if unavailable.

### Sanity schema documents

| Schema | Purpose |
|---|---|
| `profile` | Site info, hero cards, about paragraphs, target roles |
| `project` | Per-project with `problem`, `solution`, `impact`, `challenges`, `caseStudy` rich text |
| `experience` | Per-role with raw resume bullets and polished portfolio copy |
| `skill` | Skill groups with display order |

### Running Sanity Studio locally

```bash
npm run studio
```

Opens the Studio at `http://localhost:3333`. You will need a Sanity project — create one free at [sanity.io](https://www.sanity.io/).

### Connecting the frontend to Sanity

1. Create a Sanity project at [sanity.io](https://www.sanity.io/).
2. Add your Project ID to `.env`:
   ```
   VITE_SANITY_PROJECT_ID=your_project_id
   ```
3. In `studio/sanity.config.js`, replace `yourProjectId` with your actual Project ID.
4. Run `npm run studio`, create documents of type `profile`, `project`, `experience`, and `skill`.
5. The frontend automatically detects Sanity content and replaces the local fallback data.

---

## AI Chat

The portfolio includes an optional AI chat widget that answers questions about Moksha's background.

It requires:
1. `OPENAI_API_KEY` set in Vercel environment variables
2. `VITE_CHAT_API_URL` set to `https://your-deployment.vercel.app/api/chat`

The serverless function lives at `api/chat.js` and is deployed automatically by Vercel.

---

## Local `.env` reference

```env
# Sanity CMS (optional)
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# AI Chat (optional)
VITE_CHAT_API_URL=https://your-deployment.vercel.app/api/chat
```
