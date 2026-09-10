/** Konu sayfalarının makale gövdesini oluşturan blok tipleri. */

export interface ListItem {
  /** Maddenin kalın başlangıcı — "Sentinel lenf nodu biyopsisi:" gibi. */
  lead?: string;
  text: string;
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: ListItem[] }
  /** Çerçeveli, üst üste dizilmiş kutular. */
  | { kind: 'cards'; items: { k: string; v: string }[] }
  /** Solda kısa etiket, sağında açıklama. */
  | { kind: 'steps'; items: { k: string; v: string }[] }
  | { kind: 'qa'; items: { q: string; a: string }[] };

export interface Section {
  h2: string;
  blocks: Block[];
}

/** Blog yazısı. `sections` doluysa yazının detay sayfası da üretilir. */
export interface Post {
  slug: string;
  /** Kartın üstündeki küçük etiket. */
  tag: string;
  read: string;
  img: string;
  alt: string;
  title: string;
  excerpt: string;
  /** Ana sayfadaki kart için kısa özet; boşsa excerpt kullanılır. */
  short?: string;
  sections?: Section[];
}
