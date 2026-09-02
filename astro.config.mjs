// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://burhanmayir.com',
  // Tasarım TR/EN/RU öngörüyor; şimdilik yalnız TR yayında.
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },
});
