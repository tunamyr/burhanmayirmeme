// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://burhanmayir.com',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
});
