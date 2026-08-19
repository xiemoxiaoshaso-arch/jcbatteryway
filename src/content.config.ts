// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const heroCollection = defineCollection({
  // Astro 5 必须指定 loader，用来读取 src/content/hero 目录下的所有 .md 文件
  loader: glob({ pattern: '**/*.md', base: './src/content/hero' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    lang: z.string(),
    badge: z.string(),
    badgeColor: z.string().optional().default('emerald'),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    bgImage: image(),
    ctaText1: z.string(),
    ctaLink1: z.string(),
    ctaText2: z.string(),
    ctaLink2: z.string(),
    gallery: z.array(image()),
  }),
});

export const collections = {
  hero: heroCollection,
};