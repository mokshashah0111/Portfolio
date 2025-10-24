# Portfolio (React + Vite + Tailwind)

Multi-file starter for a personal portfolio you can deploy to GitHub Pages.

## Quickstart
```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Customize
Edit files in `src/data/`:
- `site.js` — name, tagline, contacts, resume link
- `skills.js`, `experience.js`, `education.js`, `projects.js`

Everything you see is fed from these files.

## Deploy to GitHub Pages
1. Update `vite.config.js` base to your repo name:
   ```js
   base: '/YOUR-REPO/'
   ```
2. Commit & push to GitHub.
3. Build & publish:
   ```bash
   npm run deploy
   ```
4. In GitHub → Settings → Pages, ensure Source is `gh-pages`.

## Notes
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- No backend required; you can add EmailJS later for a contact form.
