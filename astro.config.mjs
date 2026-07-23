import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://doula-alsu-hakim.example',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
