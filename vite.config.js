import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_React', // Use '/' if it's your main site, or '/repo-name/' if it's a project
})
