import { defineCollection, z } from "astro:content";

const indexCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    paragraph: z.string(),
  }),
});

export const collections = {
  index: indexCollection,
};