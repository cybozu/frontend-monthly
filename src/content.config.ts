import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    connpass: z.string(),
    streamUrl: z.string().nullable().optional(),
    hashTag: z.string().nullable().optional(),
    no: z.number(),
    members: z
      .object({
        name: z.string(),
        link: z.string().nullable().optional(),
      })
      .array(),
    guest: z
      .object({
        name: z.string(),
        link: z.string().nullable().optional(),
      })
      .array()
      .nullable()
      .optional(),
  }),
})

const topicsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/lookback" }),
  schema: z.array(
    z.object({
      title: z.string(),
      date: z.string(),
      overview: z.string(),
      url: z.string().optional(),
      isNotable: z.boolean().optional(),
    })
  ),
})

export const collections = {
  posts: postsCollection,
  lookback: topicsCollection,
}
