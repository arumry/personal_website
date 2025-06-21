import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().optional().default('Aaron Rumery'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
