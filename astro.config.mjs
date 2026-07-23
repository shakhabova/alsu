import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://shakhabova.github.io',
  base: '/alsu',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
