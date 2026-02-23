// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        "piccolore",
        "clsx",
        "cookie",
        "deterministic-object-hash",
        "devalue",
        "es-module-lexer",
        "html-escaper",
        "mrmime",
        "neotraverse",
        "p-limit",
        "unstorage",
        "zod",
        "@oslojs/encoding",
        "@vercel/routing-utils",
      ],
    },
  },
  site: "https://adrianpalomo.com",
  integrations: [sitemap()],
});
