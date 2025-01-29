import { defineContentConfig, defineCollection, z } from '@nuxt/content';
const commonSchema = z.object({});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
  },
});
