import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/YOUR-REPO/' before deploying to GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'
})
