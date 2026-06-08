// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "astro/virtual-modules/transitions-router.js",
        "astro/virtual-modules/transitions-types.js",
        "astro/virtual-modules/transitions-events.js",
        "astro/virtual-modules/transitions-swap-functions.js",
      ],
    },
  },
  integrations: [vue()],
  output: "server",
  adapter: netlify(),
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      weights: [300, 400, 500],
      styles: ["normal"],
    },
  ],
});
