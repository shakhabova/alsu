import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alsuhakim.com',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
