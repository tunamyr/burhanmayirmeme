import type { APIRoute } from 'astro';

/**
 * robots.txt elle yazılmak yerine burada üretiliyor; böylece adresler
 * astro.config.mjs'teki `site` değerinden geliyor ve domain değişirse
 * sitemap satırını güncellemeyi unutma ihtimali kalmıyor.
 *
 * Bütün sayfalar taramaya açık: site zaten hastaların bulması için var.
 * Yapay zekâ asistanlarının tarayıcıları da bilerek engellenmiyor —
 * hastalar soruları ChatGPT'ye de soruyor, sitenin oralarda kaynak
 * gösterilmesi isteniyor.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://www.antalyamemehastaliklari.com');
  const abs = (p: string) => new URL(p, base).href;

  const body = `User-agent: *
Allow: /

# Site özeti ve bütün sayfaların listesi: ${abs('/llms.txt')}

Sitemap: ${abs('/sitemap.xml')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
