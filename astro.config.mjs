import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
  },
  site: "https://cybozu.github.io/",
  base: "/frontend-monthly",
})
