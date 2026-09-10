import type { APIRoute } from 'astro';
import { LOCALES, DICTS, pageHref, topicHref, type Locale } from '../i18n';

/**
 * Üç dilin bütün sayfaları. Her <url> kendi dil alternatiflerini de bildiriyor,
 * böylece Google hangi dilin hangi sayfaya karşılık geldiğini biliyor.
 */
interface Entry {
  loc: string;
  alts: { lang: string; href: string }[];
}

function entries(): Entry[] {
  const out: Entry[] = [];

  const ekle = (hrefOf: (l: Locale) => string) => {
    const alts = LOCALES.map((l) => ({ lang: DICTS[l].htmlLang, href: hrefOf(l) }));
    for (const l of LOCALES) out.push({ loc: hrefOf(l), alts });
  };

  ekle((l) => pageHref(l, 'home'));
  ekle((l) => pageHref(l, 'about'));
  ekle((l) => pageHref(l, 'blog'));
  ekle((l) => pageHref(l, 'contact'));
  DICTS.tr.topics.forEach((_, i) => ekle((l) => topicHref(l, i)));

  return out;
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://burhanmayir.com');
  const abs = (p: string) => new URL(p, base).href;

  const urls = entries()
    .map((e) => {
      const links = e.alts
        .map(
          (a) =>
            `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${abs(a.href)}" />`
        )
        .join('\n');
      return `  <url>\n    <loc>${abs(e.loc)}</loc>\n${links}\n  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
