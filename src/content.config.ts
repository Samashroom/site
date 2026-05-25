import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const rotation = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rotation" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  rotation: rotation,
};