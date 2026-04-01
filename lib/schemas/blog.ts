import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(255)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),
  short_description: z.string().max(500).default(""),
  content: z.string().default(""),
  image_url: z.string().default(""),
  image_alt: z.string().max(255).default(""),
  file: z.any().optional(),
  meta_title: z.string().max(70).default(""),
  meta_description: z.string().max(160).default(""),
  meta_keywords: z.array(z.string()).default([]),
});

export type BlogSchema = z.infer<typeof blogSchema>;
