import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // inspectAttr injects code-path attributes for the dev inspector. It must
  // never run for production builds OR the prerender pass (which loads the app
  // through a dev-mode Vite server): if the client bundle and the prerendered
  // HTML disagree about the attributes, every element mismatches during
  // hydration (React error #418) and the whole page re-renders client-side.
  // Opt in explicitly with: VITE_INSPECT=1 npm run dev
  plugins: [...(process.env.VITE_INSPECT ? [inspectAttr()] : []), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
