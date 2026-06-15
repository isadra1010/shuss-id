import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    author: z.string().default("SID"),
    category: z.string(),
    brand: z.string().optional(),
    model: z.string().optional(),
    era: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured_image: z.string().optional(),
    excerpt: z.string().optional(),
    status: z.enum(["draft", "pending_review", "published", "archived"]).default("draft"),
  }),
});

const bootsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    era: z.string(),
    colorway: z.string().optional(),
    tech: z.array(z.string()).default([]),
    featured_image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    short_summary: z.string().optional(),
    status: z.enum(["draft", "pending_review", "published", "archived"]).default("draft"),
  }),
});

const brandsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    description: z.string().optional(),
    founded: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const erasCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    start_year: z.number(),
    end_year: z.number(),
    description: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  boots: bootsCollection,
  brands: brandsCollection,
  eras: erasCollection,
  pages: pagesCollection,
};
