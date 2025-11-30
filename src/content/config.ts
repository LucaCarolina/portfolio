import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    label: z.string(),
    websiteUrl: z.string().optional(),
    service: z.string().optional(),
    software: z.string().optional(),
    year: z.string().optional(),
    designImages: z.array(z.string()).optional(),
  }),
})

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = {
  projects,
  blogs,
}
