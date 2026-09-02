export interface Post {
  slug: string;
  tag: string;
  cat: Category;
  read: string;
  img: string;
  alt: string;
  title: string;
  excerpt: string;
}

export const CATEGORIES = [
  'Tümü',
  'Tarama',
  'Ne yapmalı',
  'Cerrahi',
  'Tedavi',
  'İyi huylu',
] as const;

export type Category = (typeof CATEGORIES)[number];

/**
 * Yazı detay sayfaları henüz tasarlanmadı; tasarımda da bağlantılar "#" idi.
 * Sayfalar açıldığında POST_HREF'i `/blog/${post.slug}` yapmak yeterli.
 */
export const POST_HREF = (_post: Post) => '#';

export const POSTS: Post[] = [
  {
    slug: 'mamografiye-kac-yasinda-baslanmali',
    tag: 'Tarama',
    cat: 'Tarama',
    read: '4 dk okuma',
    img: '/img/blog-mamografi.png',
    alt: 'Mamografi cihazının bulunduğu görüntüleme odası',
    title: 'Mamografiye kaç yaşında başlanmalı?',
    excerpt:
      'Genel öneri kırk yaş; ancak ailesinde meme kanseri öyküsü olanlarda program daha erken başlar. Hangi durumda hangi aralık geçerli.',
  },
  {
    slug: 'memede-kitle-hissettim',
    tag: 'Ne yapmalı',
    cat: 'Ne yapmalı',
    read: '5 dk okuma',
    img: '/img/blog-kitle.png',
    alt: 'Boş muayene odası ve askıda duran hekim önlüğü',
    title: 'Memede kitle hissettim, sırada ne var?',
    excerpt:
      'İlk muayeneden patoloji sonucuna kadar izlenen adımlar, her adımın ne kadar sürdüğü ve hangi noktada karar verildiği.',
  },
  {
    slug: 'meme-koruyucu-cerrahi-kimlere-uygun',
    tag: 'Cerrahi',
    cat: 'Cerrahi',
    read: '6 dk okuma',
    img: '/img/blog-koruyucu-cerrahi.png',
    alt: 'Ameliyathane, ameliyat masası ve cerrahi lamba',
    title: 'Meme koruyucu cerrahi kimlere uygundur?',
    excerpt:
      'Tümörün boyutu, memedeki yerleşimi ve meme hacmi kararı nasıl etkiler; hangi durumlarda memenin tamamı alınır.',
  },
  {
    slug: 'kendi-kendine-meme-muayenesi',
    tag: 'Tarama',
    cat: 'Tarama',
    read: '3 dk okuma',
    img: '/img/blog-kendi-muayene.png',
    alt: 'Aynada bornozlu bir kadının arkadan görünümü',
    title: 'Kendi kendine meme muayenesi nasıl yapılır?',
    excerpt:
      'Adet bitiminden sonraki günlerde, ayakta ve sırt üstü olmak üzere iki pozisyonda. Neye baktığınızı bilmek fark yaratır.',
  },
  {
    slug: 'ameliyattan-sonra-hangi-tedaviler',
    tag: 'Tedavi',
    cat: 'Tedavi',
    read: '5 dk okuma',
    img: '/img/blog-tedaviler.png',
    alt: 'Masada ilaç kutusu, su bardağı ve rapor',
    title: 'Ameliyattan sonra hangi tedaviler gerekebilir?',
    excerpt:
      'Işın tedavisi, hormon tedavisi ve kemoterapi hangi patoloji sonuçlarında gündeme gelir; kararı kim verir.',
  },
  {
    slug: 'fibroadenom-cikarilmali-mi',
    tag: 'İyi huylu',
    cat: 'İyi huylu',
    read: '4 dk okuma',
    img: '/img/blog-fibroadenom.png',
    alt: 'Ultrason probu ve jel, arkada ultrason ekranı',
    title: 'Fibroadenom çıkarılmalı mı, izlenebilir mi?',
    excerpt:
      'Boyut, büyüme hızı ve görüntüleme bulguları kararı belirler. Her fibroadenom ameliyat gerektirmez.',
  },
  {
    slug: 'emzirme-doneminde-meme-iltihabi',
    tag: 'İyi huylu',
    cat: 'İyi huylu',
    read: '4 dk okuma',
    img: '/img/blog-emzirme.png',
    alt: 'Bebeğini kucağında tutan bir anne, arkadan görünüm',
    title: 'Emzirme döneminde meme iltihabı',
    excerpt:
      'Ağrı, kızarıklık ve ateş varsa ne yapmalı; emzirmeye devam edilmeli mi, antibiyotik ne zaman yeterli olur.',
  },
  {
    slug: 'patoloji-raporunuzu-nasil-okuyacaksiniz',
    tag: 'Ne yapmalı',
    cat: 'Ne yapmalı',
    read: '5 dk okuma',
    img: '/img/blog-patoloji.png',
    alt: 'Masada tıbbi rapor ve kalem',
    title: 'Patoloji raporunuzu nasıl okuyacaksınız?',
    excerpt:
      'Tümör tipi, derece, ER, PR ve HER2 satırları ne anlatır; hangi bilgi tedavi kararını değiştirir.',
  },
];
