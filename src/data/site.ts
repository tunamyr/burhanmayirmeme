/**
 * Dile bağlı olmayan muayenehane bilgileri. Çevrilebilir her şey src/i18n
 * altındaki sözlüklerde; adres bilerek Türkçe kalıyor, tabela ve harita öyle.
 */
export const SITE = {
  brand: 'Burhan Mayir',

  phoneLabel: '+90 537 357 34 64',
  phoneHref: 'tel:+905373573464',
  whatsappHref: 'https://wa.me/905373573464',
  email: 'burmay@yahoo.com',

  addressLines: [
    'Deveci Plaza, Tahılpazarı Mah.',
    'Çatalköprü Cd. No: 40, Kat 4 D:4',
    '07040 Muratpaşa / Antalya',
  ],
  addressStreet: 'Deveci Plaza, Tahılpazarı Mah., Çatalköprü Cd. No: 40, Kat 4 D:4',
  postalCode: '07040',

  mapsUrl: 'https://www.google.com/maps/place/Prof.Dr.+Burhan+Mayir',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.786654746426!2d30.703988675649892!3d36.89545177222009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f99fead70ab%3A0xb23cb0aeacba5c69!2sProf.Dr.%20Burhan%20Mayir!5e0!3m2!1str!2str!4v1776151850686!5m2!1str!2str',

  /** Sayıların yanındaki etiketler sözlükten geliyor (common.statLabels). */
  stats: ['25+', '70+', '100+'],
} as const;

/**
 * Randevu formunun POST edeceği adres — sitenin kendi uç noktası.
 * Bkz. src/pages/api/randevu.ts (Vercel'de sunucu tarafında çalışır).
 *
 * BOŞ BIRAKILIRSA form hiçbir yere gitmez; "alındı" da demez, hastayı
 * telefon/e-postaya yönlendiren bir panel gösterir. Uç nokta çalışsa bile
 * SMTP değişkenleri Vercel'de tanımlı değilse aynı panel gösterilir.
 */
/**
 * Google etiketleri. Analytics ve Ads aynı gtag.js'i paylaşıyor; kimlikler
 * BaseLayout'ta yüklenirken ve randevu formu dönüşüm bildirirken okunuyor.
 */
export const TRACKING = {
  analyticsId: 'G-T3M305R25X',
  adsId: 'AW-457793606',
  /** Google Ads'teki dönüşüm işlemi; yalnızca başarılı randevu gönderiminde tetikleniyor. */
  adsLeadConversion: 'AW-457793606/BWYjCIek8rgcEMbApdoB',
} as const;

export const FORM_ENDPOINT = '/api/randevu';
