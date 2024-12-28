import { defineConfig } from "astro/config";
import theme from "./src/assets/catppuccin-mocha.json";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://techsplanation.dev",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: theme,
    },
  },
});
