import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const NEWS_PATH = "src/data/news";
export const TEAM_PATH = "src/data/team";
export const RESEARCH_PATH = "src/data/research";
export const PUBLICATIONS_PATH = "src/data/publications";
export const JOIN_ROLES_PATH = "src/data/join/roles";
export const JOIN_FAQ_PATH = "src/data/join/faq";

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${NEWS_PATH}` }),
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
      alumni: z.boolean().optional().default(false),
      future: z.boolean().optional().default(false),
      currentPosition: z.string().optional(),
      joined: z.string().optional(),
      recruitingBlurb: z.string().optional(),
      coSupervisors: z.array(z.string()).optional(),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${RESEARCH_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      video: z.string().optional(),
      gif: z.string().optional(),
      status: z.enum(["active", "completed", "ongoing"]).default("active"),
      tags: z.array(z.string()).optional(),
      publications: z.array(z.string()).optional(),
      members: z.array(z.string()).optional(),
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

const publications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PUBLICATIONS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      authors: z.array(z.string()),
      authorNotes: z.record(z.string()).optional(),
      date: z.date(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      image: image().optional(),
      imageCaption: z.string().optional(),
      publication: z.string().optional(),
      abstract: z.string().optional(),
      urlPdf: z.string().optional(),
      urlCode: z.string().optional(),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
          })
        )
        .optional(),
    }),
});

const joinRoles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${JOIN_ROLES_PATH}` }),
  schema: z.object({
    role: z.enum(["PhD", "Postdoc", "Visiting Researcher", "Intern"]),
    title: z.string(),
    description: z.string(),
    requirements: z.array(z.string()),
    offers: z.array(z.string()),
    status: z.enum(["open", "filled", "paused"]).default("open"),
    deadline: z.date().optional(),
    sortOrder: z.number().default(99),
  }),
});

const joinFaq = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${JOIN_FAQ_PATH}` }),
  schema: z.object({
    question: z.string(),
    category: z.string().default("General"),
    sortOrder: z.number().default(99),
  }),
});

export const collections = {
  news,
  team,
  research,
  publications,
  joinRoles,
  joinFaq,
};
