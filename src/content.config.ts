import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const TEAM_PATH = "src/data/team";
export const RESEARCH_PATH = "src/data/research";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: `./${TEAM_PATH}` }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string().optional(),
      photo: image().optional(),
      email: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().optional(),
      specialization: z.array(z.string()).optional(),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${RESEARCH_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      status: z.enum(["active", "completed", "ongoing"]).default("active"),
      tags: z.array(z.string()).optional(),
      publications: z.array(z.string()).optional(),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { blog, team, research };
