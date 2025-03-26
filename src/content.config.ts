import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),

  schema: z.object({
    title: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    company: z.string(),
    companyLogo: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    links: z.array(
      z.object({
        name: z.string(),
        link: z.string(),
      }),
    ),
    img: z.string(),
    description: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.{md,mdx}" }),
});

const legal = defineCollection({
  loader: glob({ base: "./src/content/legal", pattern: "**/*.{md,mdx}" }),
});

export const collections = { projects, about, legal };
