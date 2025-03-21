import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const projects = defineCollection({

  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),

  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string()
  })
})

export const collections = { projects }