import { defineCollection, z } from "astro:content";

const indexCollection = defineCollection({
  type: "content", // This must be 'content' since we are using Markdown files
  schema: z.object({
    title: z.string(),
    paragraph: z.string(),
  }),
});

export const collections = {
  index: indexCollection,
};