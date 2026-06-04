import { defineCollection, z } from 'astro:content';
// 1. Import the glob loader from Astro
import { glob } from 'astro/loaders';

const catsCollection = defineCollection({
  // 2. Define the loader telling Astro where to look for markdown files
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/cats" }),
  schema: z.object({
    name: z.string(),
    age: z.string(),
    image: z.string(),
    goodWithKids: z.boolean().default(false),
    status: z.enum(['Available', 'Adopted', 'Pending']),
  }),
});

export const collections = {
  'cats': catsCollection,
};
