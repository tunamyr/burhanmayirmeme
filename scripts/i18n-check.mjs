/**
 * Üç dil sözlüğünün aynı şekilde olduğunu doğrular.
 *
 * TypeScript'i build sırasında denetleyen bir adım yok (astro check kurulu
 * değil), bu yüzden eksik/fazla alanı yakalayan bu betiği kullanıyoruz:
 *   npm run i18n:check
 */
import { TR } from '../src/i18n/tr.ts';
import { EN } from '../src/i18n/en.ts';
import { RU } from '../src/i18n/ru.ts';

const sorunlar = [];

/** İki nesnenin anahtar ağacını ve dizi uzunluklarını karşılaştırır. */
function karsilastir(ref, other, lang, yol = '') {
  const tipRef = Array.isArray(ref) ? 'array' : typeof ref;
  const tipOther = Array.isArray(other) ? 'array' : typeof other;

  if (tipRef !== tipOther) {
    sorunlar.push(`${lang}: ${yol || '(kök)'} tip uyuşmuyor (tr=${tipRef}, ${lang}=${tipOther})`);
    return;
  }

  if (tipRef === 'array') {
    if (ref.length !== other.length) {
      sorunlar.push(`${lang}: ${yol} uzunluk farklı (tr=${ref.length}, ${lang}=${other.length})`);
    }
    const n = Math.min(ref.length, other.length);
    for (let i = 0; i < n; i++) karsilastir(ref[i], other[i], lang, `${yol}[${i}]`);
    return;
  }

  if (tipRef === 'object' && ref !== null) {
    for (const k of Object.keys(ref)) {
      if (!(k in other)) {
        sorunlar.push(`${lang}: ${yol}.${k} eksik`);
        continue;
      }
      karsilastir(ref[k], other[k], lang, `${yol}.${k}`);
    }
    for (const k of Object.keys(other)) {
      if (!(k in ref)) sorunlar.push(`${lang}: ${yol}.${k} fazladan (tr'de yok)`);
    }
    return;
  }

  if (tipRef === 'string' && ref !== '' && other === '') {
    sorunlar.push(`${lang}: ${yol} boş bırakılmış`);
  }
}

karsilastir(TR, EN, 'en');
karsilastir(TR, RU, 'ru');

/** Konu anahtarları dile göre değişmemeli — bağlantılar bunlarla eşleşiyor. */
for (const [lang, dict] of [
  ['en', EN],
  ['ru', RU],
]) {
  TR.topics.forEach((topic, i) => {
    if (dict.topics[i]?.key !== topic.key) {
      sorunlar.push(`${lang}: topics[${i}].key farklı (${dict.topics[i]?.key} ≠ ${topic.key})`);
    }
  });
}

/** Slug'lar dil içinde benzersiz olmalı. */
for (const [lang, dict] of [
  ['tr', TR],
  ['en', EN],
  ['ru', RU],
]) {
  const sluglar = [...dict.topics.map((x) => x.slug), ...dict.blog.posts.map((p) => p.slug)];
  const tekrar = sluglar.filter((s, i) => sluglar.indexOf(s) !== i);
  if (tekrar.length) sorunlar.push(`${lang}: tekrar eden slug: ${[...new Set(tekrar)].join(', ')}`);
}

if (sorunlar.length) {
  console.error(`i18n: ${sorunlar.length} sorun bulundu\n`);
  for (const s of sorunlar) console.error('  - ' + s);
  process.exit(1);
}

console.log('i18n: tr / en / ru sözlükleri aynı şekilde, slug çakışması yok.');
