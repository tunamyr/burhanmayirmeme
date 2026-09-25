// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.antalyamemehastaliklari.com',

  /**
   * Site statik kalıyor: bütün sayfalar build sırasında HTML'e dönüyor.
   * Yalnızca `export const prerender = false` diyen rota (randevu formunun
   * uç noktası) Vercel'de sunucu tarafında çalışıyor.
   */
  adapter: vercel(),

  /**
   * Astro'nun yerleşik origin kontrolü Vercel'in ters vekilinin arkasında
   * yanlış çalışıyor: aynı origin'den gelen form gönderimleri de
   * "Cross-site POST form submissions are forbidden" ile 403 alıyor.
   * Kontrolü kapatıp aynı işi randevu uç noktasının içinde, host başlıklarına
   * bakarak yapıyoruz (bkz. src/pages/api/randevu.ts → ayniOrigin).
   *
   * Yeni bir sunucu rotası eklenirse origin kontrolünü orada da elle yapın.
   */
  security: { checkOrigin: false },

  /**
   * SMTP bilgileri. Hepsi `optional` — değişkenler tanımlanmadan da site
   * derleniyor ve yayına çıkıyor; eksikse yalnızca form uç noktası hata
   * döndürüyor ve hastaya telefon/e-posta paneli gösteriliyor.
   *
   * Vercel panelinde Settings → Environment Variables altına girilecek.
   */
  env: {
    schema: {
      SMTP_HOST: envField.string({ context: 'server', access: 'secret', optional: true, default: 'smtp.gmail.com' }),
      SMTP_PORT: envField.number({ context: 'server', access: 'secret', optional: true, default: 465 }),
      SMTP_USER: envField.string({ context: 'server', access: 'secret', optional: true }),
      SMTP_PASS: envField.string({ context: 'server', access: 'secret', optional: true }),
      /** Randevu taleplerinin düşeceği kutu. */
      MAIL_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
});
