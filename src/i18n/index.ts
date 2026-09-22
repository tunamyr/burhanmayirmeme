import { TR, type Dict } from './tr.ts';
import { EN } from './en.ts';
import { RU } from './ru.ts';

export type { Dict, Topic, Post } from './tr.ts';
export type { Block, Section, ListItem } from './blocks.ts';

export const LOCALES = ['tr', 'en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

/** TR kökte yayınlanıyor, diğer diller ön ekli. */
export const DEFAULT_LOCALE: Locale = 'tr';

export const DICTS: Record<Locale, Dict> = { tr: TR, en: EN, ru: RU };

export const t = (lang: Locale): Dict => DICTS[lang];

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

const prefix = (lang: Locale) => (lang === DEFAULT_LOCALE ? '' : `/${lang}`);

export type PageKey = 'home' | 'about' | 'contact' | 'blog';

export function pageHref(lang: Locale, key: PageKey): string {
  if (key === 'home') return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
  return `${prefix(lang)}/${DICTS[lang].routes[key]}`;
}

export function topicHref(lang: Locale, index: number): string {
  return `${prefix(lang)}/${DICTS[lang].topics[index].slug}`;
}

/** Bilgi yazısının o dildeki adresi: blog yolu + yazının kendi slug'ı. */
export function postHref(lang: Locale, index: number): string {
  return `${pageHref(lang, 'blog')}/${DICTS[lang].blog.posts[index].slug}`;
}

/** "İlgili konular" kutusundaki anahtarı o dildeki adrese çevirir. */
export function keyHref(lang: Locale, key: string): string {
  if (key === 'blog') return pageHref(lang, 'blog');
  const i = DICTS[lang].topics.findIndex((x) => x.key === key);
  return i >= 0 ? topicHref(lang, i) : pageHref(lang, 'home');
}

export interface Alternate {
  lang: Locale;
  label: string;
  short: string;
  htmlLang: string;
  href: string;
}

/**
 * Aynı sayfanın üç dildeki adresi — hem <link rel="alternate"> hem de
 * menüdeki dil değiştirici için.
 */
export function alternates(key: PageKey | 'topic', topicIndex = 0): Alternate[] {
  return LOCALES.map((lang) => ({
    lang,
    label: DICTS[lang].label,
    short: DICTS[lang].short,
    htmlLang: DICTS[lang].htmlLang,
    href: key === 'topic' ? topicHref(lang, topicIndex) : pageHref(lang, key),
  }));
}

/** Sitemap ve gezinme listeleri için bütün adresler. */
export function allPaths(): string[] {
  const out: string[] = [];
  for (const lang of LOCALES) {
    out.push(pageHref(lang, 'home'), pageHref(lang, 'about'), pageHref(lang, 'blog'), pageHref(lang, 'contact'));
    DICTS[lang].topics.forEach((_, i) => out.push(topicHref(lang, i)));
  }
  return out;
}
