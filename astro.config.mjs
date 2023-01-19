import { defineConfig } from "astro/config"

// https://astro.build/config
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
  },
  site: "https://cybozu.github.io",
  base: "/frontend-monthly",
})
