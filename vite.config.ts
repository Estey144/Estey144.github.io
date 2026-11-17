import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Base path the site is served from.
 *
 * - Locally (npm run dev / build) it is "/".
 * - On GitHub Pages the deploy workflow sets BASE_PATH automatically:
 *     <user>.github.io            -> "/"
 *     <user>.github.io/<repo>/    -> "/<repo>/"
 *   You can override it with a repository variable named BASE_PATH
 *   (e.g. "/" when using a custom domain). See README → Deployment.
 */
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
