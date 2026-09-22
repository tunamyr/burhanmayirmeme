import type { APIRoute } from 'astro';
import { LOCALES, DICTS, pageHref, topicHref, postHref, type Locale } from '../i18n';
import { SITE } from '../data/site';

/**
 * llms.txt — yapay zekâ asistanları için sitenin tek sayfalık haritası.
 * (Biçim: https://llmstxt.org — H1 başlık, tek cümlelik özet, ardından
 * bağlantı listeleri.)
 *
 * Sitemap makineye "şu adresler var" der; llms.txt ise "şu adres şu soruyu
 * yanıtlıyor" der. Hasta sorusunu asistana sorduğunda doğru sayfanın
 * gösterilme ihtimalini artırması için var.
 *
 * Sitemap gibi burası da sözlüklerden üretiliyor: yeni bir konu ya da yazı
 * eklendiğinde bu dosyaya dokunmak gerekmiyor.
 */

const item = (title: string, href: string, note: string) => `- [${title}](${href}): ${note}`;

/** Bir dilin bütün sayfaları: önce ana sayfalar, sonra konular ve yazılar. */
function section(lang: Locale, abs: (path: string) => string): string[] {
  const d = DICTS[lang];
  const link = (title: string, path: string, note: string) => item(title, abs(path), note);

  return [
    `## ${d.label}`,
    '',
    link(d.nav.home, pageHref(lang, 'home'), d.home.description),
    link(d.nav.about, pageHref(lang, 'about'), d.about.description),
    link(d.nav.contact, pageHref(lang, 'contact'), d.contact.description),
    link(d.nav.blog, pageHref(lang, 'blog'), d.blog.description),
    '',
    `### ${d.nav.topics}`,
    '',
    ...d.topics.map((topic, i) => link(topic.title, topicHref(lang, i), topic.meta)),
    '',
    `### ${d.nav.blog}`,
    '',
    ...d.blog.posts.map((post, i) => link(post.title, postHref(lang, i), post.short || post.excerpt)),
    '',
  ];
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://burhanmayir.com');
  const abs = (path: string) => new URL(path, base).href;

  const tr = DICTS.tr;

  const body = [
    `# ${tr.doctorName}`,
    '',
    `> ${tr.home.description}`,
    '',
    `Muayenehane: ${SITE.addressStreet}, ${SITE.postalCode} ${tr.districtLabel} / ${tr.cityLabel}.`,
    `Telefon: ${SITE.phoneLabel} · E-posta: ${SITE.email}`,
    '',
    'Site üç dilde yayımlanıyor: Türkçe kökte, İngilizce `/en/` ve Rusça `/ru/`',
    'altında. Aynı içeriğin üç dildeki karşılıkları aşağıda ayrı başlıklar altında.',
    '',
    tr.footer.note,
    '',
    ...LOCALES.flatMap((lang) => section(lang, abs)),
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
