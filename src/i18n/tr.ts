import type { Section } from './blocks.ts';
import { POSTS_TR } from './posts.tr.ts';

/**
 * Türkçe sözlük. Sitenin çevrilebilir bütün metinleri burada.
 * `Dict` tipi bu nesneden türetiliyor; en.ts ve ru.ts aynı şekli doldurmak
 * zorunda, eksik alan bırakılırsa build hata verir.
 */
export const TR = {
  code: 'tr',
  htmlLang: 'tr',
  ogLocale: 'tr_TR',
  label: 'Türkçe',
  short: 'TR',

  /** Görünen ad ve yer adları — dile göre değişiyor. */
  doctorName: 'Prof. Dr. Burhan Mayir',
  /** Menüdeki kısa marka adı. */
  brandName: 'Burhan Mayir',
  cityLabel: 'Antalya',
  districtLabel: 'Muratpaşa',

  /** Dil ön eki dışındaki yol parçaları. */
  routes: {
    about: 'hakkimda',
    contact: 'iletisim',
    blog: 'blog',
  },

  nav: {
    kicker: 'Meme Sağlığı',
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    topics: 'Hastalıklar',
    blog: 'Blog',
    contact: 'İletişim',
    cta: 'Randevu',
    menuLabel: 'Ana menü',
    openMenu: 'Menüyü aç',
    skipToContent: 'İçeriğe geç',
  },

  footer: {
    topicsHead: 'Konular',
    siteHead: 'Site',
    langHead: 'Dil',
    home: 'Ana sayfa',
    about: 'Hakkımda',
    blog: 'Bilgi yazıları',
    contact: 'İletişim ve randevu',
    directions: 'Yol tarifi',
    note: 'Bu sitedeki içerikler bilgilendirme amaçlıdır ve hekim muayenesinin yerine geçmez. Şikâyetiniz varsa lütfen randevu alın.',
    /** Footer'daki kısa konu adları. */
    topicLinks: [
      'Meme kanseri',
      'Meme kanseri cerrahisi',
      'Onkoplastik cerrahi',
      'Meme rekonstrüksiyonu',
      'İyi huylu meme hastalıkları',
    ],
  },

  band: {
    kicker: 'Randevu',
    title: 'Sorularınızı görüşmede tek tek konuşalım',
    text: 'Elinizde mamografi, ultrason ya da patoloji raporu varsa görüşmeye getirmeniz süreci hızlandırır. Talebiniz mesai saatleri içinde yanıtlanır.',
    cta: 'Randevu talep et',
  },

  form: {
    name: 'Ad Soyad',
    phone: 'Telefon',
    subject: 'Konu',
    message: 'Kısaca durumunuz',
    submit: 'Randevu talebini gönder',
    sending: 'Gönderiliyor…',
    privacy: 'Paylaştığınız bilgiler yalnızca randevu için kullanılır, üçüncü kişilerle paylaşılmaz.',
    okTitle: 'Talebiniz alındı',
    okText:
      'En kısa sürede sizi arayacağız. Acil bir durum varsa doğrudan telefonla ulaşabilirsiniz.',
    failTitle: 'Talebiniz gönderilemedi',
    failText:
      'Bağlantı kurulamadı. Randevunuzu telefonla ya da e-postayla iletirseniz aynı gün dönüş yapıyoruz.',
    subjects: [
      'Meme kanseri',
      'Meme kanseri cerrahisi',
      'Onkoplastik / meme koruyucu cerrahi',
      'Meme rekonstrüksiyonu',
      'İyi huylu meme hastalıkları',
      'İkinci görüş',
    ],
  },

  common: {
    appointmentCta: 'Randevu talep et',
    quickFacts: 'Hızlı bakış',
    relatedTopics: 'İlgili konular',
    whenToApply: 'Ne zaman başvurmalı',
    readTopic: 'Bu konuyu okuyun →',
    breadcrumbLabel: 'Neredesiniz',
    breadcrumbHome: 'Ana sayfa',
    breadcrumbTopics: 'Hastalıklar',
    topicNo: 'Konu',
    phoneLabel: 'Telefon',
    officeLabel: 'Muayenehane',
    directions: 'Yol tarifi al',
    mapTitle: 'Muayenehane konumu',
    addressNote: 'MarkAntalya AVM karşısı',
    statLabels: ['yıl deneyim', 'bilimsel makale', 'kongre bildirisi'],
  },

  home: {
    title: 'Prof. Dr. Burhan Mayir — Meme Sağlığı | Antalya',
    description:
      'Prof. Dr. Burhan Mayir; meme kanseri cerrahisi, onkoplastik ve meme koruyucu cerrahi, meme rekonstrüksiyonu ve iyi huylu meme hastalıkları. Antalya, Muratpaşa.',
    kicker: 'Antalya · Meme Hastalıkları',
    /** h1 iki vurgulu kelime içeriyor. */
    h1: {
      pre: 'Meme sağlığı, ',
      em1: 'acele',
      mid: ' değil ',
      em2: 'açıklık',
      post: ' ister.',
    },
    lede: 'Prof. Dr. Burhan Mayir, meme kanseri cerrahisi, meme koruyucu onkoplastik cerrahi ve iyi huylu meme hastalıklarıyla ilgilenir. Her adımı önce anlatır, sonra uygular.',
    heroAlt: "Prof. Dr. Burhan Mayir, Antalya'daki muayenehanesinde",
    topicsButton: 'Hastalıklar',

    topicsTitle: 'İlgilendiğimiz konular',
    topicsIntro:
      'Başlığa dokunun; ne olduğu ve sizin için ne anlama geldiği açılır. Muayene öncesinde okumanız, görüşmede daha çok soru sormanızı sağlar.',

    aboutKicker: 'Hakkımda',
    aboutAlt: 'Prof. Dr. Burhan Mayir, muayenehanesindeki çalışma masasında',
    aboutParagraphs: [
      "Tıp eğitimini İstanbul Üniversitesi İstanbul Tıp Fakültesi'nde (Çapa), genel cerrahi uzmanlık eğitimini Akdeniz Üniversitesi Tıp Fakültesi'nde tamamladı. 2012–2019 yılları arasında Antalya Eğitim ve Araştırma Hastanesi'nde görev yaptı.",
      "2023 yılından bu yana Antalya'daki özel muayenehanesinde hasta kabul ediyor. Hakemli dergilerde yayınlanmış 70'in üzerinde makalesi, ulusal ve uluslararası kongrelerde sunulmuş 100'ün üzerinde bildirisi bulunuyor.",
    ],
    aboutLink: 'Özgeçmişin tamamı',
    creds: [
      { k: 'Unvan', v: 'Profesör Doktor' },
      { k: 'Uzmanlık', v: 'Genel Cerrahi' },
      { k: 'Tıp Fakültesi', v: 'İstanbul Üniv. — Çapa' },
      { k: 'Muayenehane', v: 'Antalya' },
    ],

    postsTitle: 'Bilgi yazıları',
    postsAll: 'Tüm yazılar',

    apptKicker: 'Randevu',
    apptTitle: 'Formu bırakın, biz arayalım',
    apptText:
      'Talebiniz mesai saatleri içinde yanıtlanır. Elinizde mamografi, ultrason ya da patoloji raporu varsa görüşmeye getirmeniz süreci hızlandırır.',
  },

  about: {
    title: 'Hakkımda — Prof. Dr. Burhan Mayir',
    description:
      "Prof. Dr. Burhan Mayir'in eğitimi, görev yaptığı kurumlar, akademik çalışmaları ve muayenehanedeki çalışma ilkeleri.",
    kicker: 'Hakkımda',
    portraitAlt: 'Prof. Dr. Burhan Mayir, muayenehanesindeki çalışma masasında',
    lede: "Genel cerrahi uzmanıyım. Meme hastalıkları, meme kanseri cerrahisi ve meme koruyucu cerrahi başlıca ilgi alanlarım arasında yer alıyor. Antalya'daki özel muayenehanemde hasta kabul ediyorum.",
    body: 'Hastalarımla çalışma biçimim tek bir ilkeye dayanıyor: kararı birlikte vermek. Bunun için seçenekleri, alternatiflerini ve beklenen sonuçları anlaşılır bir dille anlatmak gerekiyor. Ne olacağını bilen bir hasta, tedaviye daha güçlü başlıyor.',
    fieldsHead: 'İlgi alanları',
    fields:
      'Meme kanseri cerrahisi · Onkoplastik ve meme koruyucu cerrahi · Meme rekonstrüksiyonu · İyi huylu meme hastalıkları · Genel cerrahi',

    timelineTitle: 'Eğitim ve görevler',
    timeline: [
      { year: '1978', title: 'Doğum', place: 'İstanbul' },
      { year: 'Lise', title: 'Fen Lisesi', place: 'Bursa Anadolu Öğretmen Lisesi Fen Lisesi' },
      {
        year: 'Tıp eğitimi',
        title: 'Tıp Doktoru',
        place: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi (Çapa)',
      },
      {
        year: 'Uzmanlık',
        title: 'Genel Cerrahi Uzmanlığı',
        place: 'Akdeniz Üniversitesi Tıp Fakültesi',
      },
      {
        year: '2006 – 2012',
        title: 'Genel Cerrahi Uzmanı',
        place: 'Zonguldak Atatürk Devlet Hastanesi',
      },
      {
        year: '2012 – 2019',
        title: 'Genel Cerrahi Uzmanı',
        place: 'Antalya Eğitim ve Araştırma Hastanesi',
      },
      { year: '2019', title: 'Özel sektöre geçiş', place: 'Kamu görevinden kendi isteğiyle ayrıldı' },
      { year: '2023 – bugün', title: 'Özel muayenehane', place: 'Antalya' },
    ],

    academicKicker: 'Akademik çalışmalar ve üyelikler',
    academic: [
      { n: '70+', l: 'hakemli dergide yayınlanmış makale' },
      { n: '100+', l: 'kongre bildirisi' },
      { n: '3', l: 'meslek kuruluşunda üyelik' },
      { n: 'Prof. Dr.', l: 'akademik unvan' },
    ],
    academicText:
      "Ulusal ve uluslararası hakemli dergilerde yayınlanmış 70'in üzerinde makalesi, kongrelerde sunulmuş 100'ün üzerinde bildirisi bulunuyor. Birçok ulusal ve uluslararası kongrede davetli konuşmacı ve oturum başkanı olarak görev aldı.",
    membershipsHead: 'Üyelikler',
    memberships: [
      'Türk Cerrahi Derneği',
      'Türkiye Obezite Cerrahisi Derneği (TOSS)',
      'International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)',
    ],

    principlesTitle: 'Muayenehanede nasıl çalışıyoruz',
    principles: [
      {
        k: 'Tek muhatap',
        v: 'İlk muayeneden ameliyat sonrası kontrollere kadar süreci aynı hekim yürütür. Kime soracağınızı aramanız gerekmez.',
      },
      {
        k: 'Anlaşılır anlatım',
        v: 'Rapordaki terimleri gündelik dile çevirerek anlatıyoruz. Anlamadığınız bir satır kalmadan görüşmeden çıkmanız hedefimiz.',
      },
      {
        k: 'Karar sizinle',
        v: 'Seçenekler, alternatifleri ve beklenen sonuçlarıyla birlikte sunulur. Aceleye getirilen bir onay istemiyoruz.',
      },
      {
        k: 'İkinci görüşe açıklık',
        v: 'Başka bir hekimden görüş almak istemeniz doğal bir haktır. Gerekli belgeleri hazırlamanıza yardımcı oluyoruz.',
      },
    ],

    bandTitle: 'Görüşmeye ne getirmeniz gerekiyor',
    bandText:
      'Varsa mamografi, ultrason, MR ve patoloji raporlarınız; kullandığınız ilaçların listesi. Yoksa da gelin, gerekli tetkikleri birlikte planlayalım.',
  },

  contact: {
    title: 'İletişim ve Randevu — Prof. Dr. Burhan Mayir',
    description:
      'Prof. Dr. Burhan Mayir muayenehanesi: randevu formu, telefon, adres, çalışma saatleri ve yol tarifi. Muratpaşa, Antalya.',
    kicker: 'İletişim ve randevu',
    h1: 'Formu bırakın, biz arayalım',
    lede: 'Randevu talepleri mesai saatleri içinde yanıtlanır. Acil bir durum varsa doğrudan telefonla ulaşmanız daha hızlı olur.',

    phoneLabel: 'Telefon ve WhatsApp',
    officeLabel: 'Muayenehane',
    emailLabel: 'E-posta',
    hoursLabel: 'Çalışma saatleri',
    hours: [
      { day: 'Pazartesi – Cuma', value: '09:00 – 18:00', muted: false },
      { day: 'Cumartesi', value: 'Randevu ile', muted: false },
      { day: 'Pazar', value: 'Kapalı', muted: true },
    ],

    awayHead: 'Şehir dışından geliyorsanız',
    awayText:
      'Muayene, görüntüleme ve gerekiyorsa biyopsi aynı gün içinde planlanabilir. Randevu talebinizde şehir dışından geldiğinizi belirtirseniz programı buna göre düzenliyoruz.',

    bringHead: 'Görüşmeye ne getirmeli',
    bring: [
      'Varsa mamografi, meme ultrasonu ve MR görüntüleri',
      'Daha önce yapılmış biyopsi veya patoloji raporu',
      'Kullandığınız ilaçların listesi',
      'Ailenizde meme ya da yumurtalık kanseri öyküsü varsa bilgisi',
    ],
    bringNote:
      'Elinizde hiçbiri yoksa da gelin; gerekli tetkikleri görüşmede birlikte planlarız.',
  },

  blog: {
    title: 'Bilgi Yazıları — Prof. Dr. Burhan Mayir',
    description:
      'Muayenehanede en çok sorulan soruların yazılı halleri: tarama, meme kanseri cerrahisi, iyi huylu meme hastalıkları ve tedavi süreçleri üzerine bilgi yazıları.',
    kicker: 'Bilgi yazıları',
    h1: 'Muayenehanede en çok sorulan soruların yazılı halleri',
    lede: 'Görüşme süresi her zaman her soruya yetmiyor. Bu yazılar, aklınıza sonradan gelenler için.',
    featured: 'Öne çıkan',
    readMore: ' · Yazıyı oku →',
    ctaTitle: 'Yanıtını bulamadığınız bir soru mu var?',
    ctaText:
      'Sorunuzu görüşmede sormanız en doğrusu. Randevu talebinizi bırakırsanız sizi arayıp uygun bir saat belirleriz.',
    ctaButton: 'Randevu talep et',
    /** Yazının kendi sayfasına giden bağlantının metni. */
    readArticle: 'Yazıyı oku',
    alsoRead: 'Bunu da okuyabilirsiniz',
    prevPost: 'Önceki yazı',
    nextPost: 'Sonraki yazı',
    backToBlog: '← Bütün yazılar',
    posts: POSTS_TR,
  },

  notFound: {
    title: 'Sayfa bulunamadı — Prof. Dr. Burhan Mayir',
    description:
      'Aradığınız sayfa bulunamadı. Konu sayfalarına, bilgi yazılarına ya da randevu sayfasına geçebilirsiniz.',
    kicker: '404',
    h1: 'Aradığınız sayfayı bulamadık',
    text: 'Bağlantı değişmiş ya da yanlış yazılmış olabilir. Aşağıdaki başlıklardan devam edebilirsiniz; acele bir durum varsa doğrudan arayın.',
    blogLink: 'Bilgi Yazıları',
    aboutLink: 'Hakkımda',
  },

  topics: [
    {
      slug: 'meme-kanseri',
      key: 'meme-kanseri',
      no: '01',
      title: 'Meme kanseri',
      crumb: 'Meme kanseri',
      navTitle: 'Meme Kanseri',
      meta: 'Meme kanserinde hangi belirtilere dikkat edilmeli, tanı nasıl konur, evre ne anlama gelir ve tarama ne zaman başlar. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Meme kanseri, kadınlarda en sık görülen kanser türüdür. Aynı zamanda erken yakalandığında tedavi başarısı en yüksek olan kanserlerden biridir. Bu sayfa, tanı sürecinde karşınıza çıkacak kavramları sade bir dille anlatıyor.',
      img: '/img/konu-meme-kanseri.jpg',
      imgAlt: 'Görüşme odası: çalışma masası, koltuklar ve muayene lavabosu',
      quickFacts: [
        { label: 'Kesin tanı', value: 'Patoloji raporu' },
        { label: 'İlk görüntüleme', value: 'Mamografi ve ultrason' },
        { label: 'Tarama yaşı', value: 'Genel olarak 40, riskli grupta daha erken' },
        { label: 'Erken evrede', value: 'Memenin tamamı çoğu zaman alınmaz' },
      ],
      ctaBox: {
        title: 'Elinizde bir rapor var mı?',
        text: 'Mamografi, ultrason ya da patoloji sonucunuzu görüşmeye getirin. İkinci görüş için de aynı belgeler yeterlidir.',
      },
      related: [
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Tümörün çıkarılması ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'onkoplastik',
          title: 'Onkoplastik Cerrahi',
          text: 'Kanseri çıkarırken memenin şeklini korumak.',
        },
        {
          key: 'iyi-huylu',
          title: 'İyi Huylu Meme Hastalıkları',
          text: 'Fibroadenom, kist, meme ağrısı ve akıntı.',
        },
      ],
      band: {
        title: 'Sonucunuzu birlikte okuyalım',
        text: 'Raporunuzda anlamadığınız satırlar varsa görüşmede tek tek geçelim. Ne olduğu netleşmeden karar vermeniz gerekmiyor.',
      },
      indexBody:
        'Belirtiler, tanı yöntemleri ve evreleme. Karşınızdaki tablonun ne olduğunu bilmek, kararları birlikte almayı kolaylaştırır.',
      indexWhen:
        'Memede ele gelen bir kitle, meme derisinde çekilme ya da meme başında kanlı akıntı fark ettiyseniz beklemeden başvurun.',
      sections: [
        {
          h2: 'Hangi belirtilere dikkat etmeli',
          blocks: [
            {
              kind: 'p',
              text: 'Meme kanserinin en sık belirtisi, memede ya da koltuk altında yeni fark edilen, sert ve genellikle ağrısız bir kitledir. Ağrının olmaması durumu önemsiz yapmaz; aksine kanserli kitleler sıklıkla ağrısızdır.',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Memenin şeklinde ya da boyutunda yeni gelişen bir farklılık' },
                { text: 'Meme derisinde içe çekilme, portakal kabuğu görünümü ya da kızarıklık' },
                { text: 'Meme başında içe çekilme, kabuklanma veya kanlı akıntı' },
                { text: 'Koltuk altında ele gelen sertlik' },
                { text: 'Geçmeyen, tek bir noktada yerleşen meme ağrısı' },
              ],
            },
            {
              kind: 'p',
              text: 'Bu bulguların hepsi kanser anlamına gelmez. Memedeki değişikliklerin büyük bölümü iyi huyludur. Ancak hangisinin hangisi olduğuna muayene ve görüntüleme karar verir, bekleyerek anlaşılmaz.',
            },
          ],
        },
        {
          h2: 'Tanı nasıl konur',
          blocks: [
            {
              kind: 'p',
              text: 'Tanı üç aşamada netleşir: muayene, görüntüleme ve patoloji. Üçü birbirinin yerine geçmez; birlikte okunur.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Muayene',
                  v: 'Her iki meme ve koltuk altı elle değerlendirilir. Şikâyetinizin ne zaman başladığı, adet döngünüzle ilişkisi ve aile öykünüz kaydedilir.',
                },
                {
                  k: 'Görüntüleme',
                  v: "Kırk yaş üzerinde genellikle mamografi ve ultrason birlikte kullanılır. Genç ve yoğun meme dokusunda ultrason öne çıkar. Gerekli durumlarda meme MR'ı istenir.",
                },
                {
                  k: 'Biyopsi ve patoloji',
                  v: 'Şüpheli bir kitleden iğne ile parça alınır. Kesin tanıyı patoloji verir; tümörün tipi, derecesi ve hormon reseptör durumu da bu raporda yer alır.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Biyopsi, kanserin yayılmasına yol açmaz. Bu, muayenehanede en sık duyduğumuz endişelerden biri; bilimsel olarak doğrulanmış bir bulgu değildir.',
            },
          ],
        },
        {
          h2: 'Evre ne anlama gelir',
          blocks: [
            {
              kind: 'p',
              text: 'Evre; tümörün boyutu, koltuk altı lenf bezlerine yayılım olup olmadığı ve başka organlara yayılım bulunup bulunmadığına göre belirlenir. Evre, tedavinin sırasını belirler: bazı hastalarda önce ameliyat, bazılarında önce ilaç tedavisi daha doğrudur.',
            },
            {
              kind: 'p',
              text: 'Evre tek başına bir kader değildir. Tümörün biyolojik alt tipi, hormon reseptörleri ve HER2 durumu tedaviye vereceği yanıtı en az evre kadar belirler.',
            },
          ],
        },
        {
          h2: 'Risk faktörleri ve tarama',
          blocks: [
            {
              kind: 'p',
              text: 'Kadın olmak ve yaşın ilerlemesi en belirleyici iki faktördür; ikisi de değiştirilemez. Ailede meme ya da yumurtalık kanseri öyküsü, erken adet görme, geç menopoz, hiç doğum yapmamış olmak ve uzun süreli hormon kullanımı riski artırır.',
            },
            {
              kind: 'p',
              text: 'Buna karşılık meme kanseri olan kadınların önemli bir bölümünde bilinen hiçbir risk faktörü yoktur. Bu yüzden tarama, risk grubuna bakılmaksızın önerilir.',
            },
            {
              kind: 'p',
              text: 'Kırk yaşından itibaren yıllık mamografi, ailesinde meme kanseri öyküsü olanlarda daha erken başlayan bir izlem programı genel yaklaşımdır. Sizin için doğru aralığı öykünüzü dinledikten sonra belirliyoruz.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-kanseri-cerrahisi',
      key: 'cerrahi',
      no: '02',
      title: 'Meme kanseri cerrahisi',
      crumb: 'Meme kanseri cerrahisi',
      navTitle: 'Meme Kanseri Cerrahisi',
      meta: 'Meme koruyucu cerrahi ve mastektomi seçenekleri, sentinel lenf nodu biyopsisi, ameliyat günü ve iyileşme süreci. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Cerrahinin iki işi vardır: tümörü sağlam sınırlarla çıkarmak ve hastalığın koltuk altına yayılıp yayılmadığını öğrenmek. Hangi ameliyatın yapılacağı, tümörün özellikleri ve sizin tercihleriniz birlikte değerlendirilerek belirlenir.',
      img: '/img/konu-cerrahi.jpg',
      imgAlt: 'Pansuman odası: muayene masası ve muayene lambası',
      quickFacts: [
        { label: 'Anestezi', value: 'Genel anestezi' },
        { label: 'Süre', value: 'Yaklaşık 1–2 saat' },
        { label: 'Yatış', value: '1–2 gün' },
        { label: 'Koltuk altı', value: 'Öncelikle sentinel lenf nodu biyopsisi' },
        { label: 'Patoloji sonucu', value: 'Yaklaşık 1 hafta' },
      ],
      ctaBox: {
        title: 'İkinci görüş almak isterseniz',
        text: 'Ameliyat kararı verilmiş olsa bile seçenekleri yeniden konuşmak hakkınız. Görüntüleme ve patoloji raporlarınızı getirmeniz yeterli.',
      },
      related: [
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri',
          text: 'Belirtiler, tanı yöntemleri ve evreleme.',
        },
        {
          key: 'onkoplastik',
          title: 'Onkoplastik Cerrahi',
          text: 'Kanseri çıkarırken memenin şeklini korumak.',
        },
        {
          key: 'rekonstruksiyon',
          title: 'Meme Rekonstrüksiyonu',
          text: 'Alınan meme dokusunun yerine yenisini oluşturmak.',
        },
      ],
      band: {
        title: 'Ameliyat kararını birlikte verelim',
        text: 'Hangi ameliyatın size uygun olduğunu, alternatiflerini ve beklenen sonucu görüşmede ayrıntılı konuşuyoruz.',
      },
      indexBody:
        'Tümörün sağlam sınırlarla çıkarılması ve koltuk altı lenf bezlerinin değerlendirilmesi. Ameliyat kararı patoloji ve görüntüleme sonuçlarıyla birlikte verilir.',
      indexWhen:
        'Biyopsi sonucunuz kanser olarak geldiyse, cerrahi seçenekleri ve tedavi sıralamasını konuşmak için görüşmeye gelin.',
      sections: [
        {
          h2: 'Memeye yönelik ameliyat seçenekleri',
          blocks: [
            {
              kind: 'p',
              text: 'İki ana yaklaşım vardır. Hangisinin uygun olduğu, tümörün boyutu ve memedeki yerleşimi ile memenin hacmi arasındaki orana bağlıdır.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Meme koruyucu cerrahi',
                  v: 'Tümör, çevresinde sağlam bir doku sınırıyla birlikte çıkarılır; memenin geri kalanı korunur. Ardından hemen hemen her hastada ışın tedavisi gerekir. Uygun hastalarda meme koruyucu cerrahi ile memenin tamamının alınması arasında yaşam süresi farkı gösterilmemiştir.',
                },
                {
                  k: 'Mastektomi',
                  v: 'Meme dokusunun tamamı alınır. Tümör birden fazla odakta ise, meme hacmine göre büyükse ya da ışın tedavisi uygun değilse tercih edilir. Aynı seansta rekonstrüksiyon yapılabilir.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Bazı hastalarda önce ilaç tedavisi verilerek tümör küçültülür ve böylece meme koruyucu cerrahi mümkün hale gelir. Bu karar, cerrahi ve onkoloji birlikte verir.',
            },
          ],
        },
        {
          h2: 'Koltuk altı neden değerlendirilir',
          blocks: [
            {
              kind: 'p',
              text: 'Meme kanseri ilk olarak koltuk altındaki lenf bezlerine yayılır. Bu bölgenin durumu, ameliyat sonrası tedavinin planlanması için gereklidir.',
            },
            {
              kind: 'ul',
              items: [
                {
                  lead: 'Sentinel lenf nodu biyopsisi:',
                  text: 'tümörün ilk boşaldığı bir veya birkaç lenf bezi işaretlenerek çıkarılır. Temiz gelirse diğerlerine dokunulmaz.',
                },
                {
                  lead: 'Aksiller diseksiyon:',
                  text: 'yayılım saptanan seçili hastalarda koltuk altı lenf bezleri daha geniş biçimde temizlenir.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Sentinel yöntemi, kolda şişme (lenfödem) riskini belirgin biçimde azalttığı için mümkün olan her hastada tercih edilir.',
            },
          ],
        },
        {
          h2: 'Ameliyat günü ve sonrası',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Öncesi',
                  v: 'Kan tetkikleri ve anestezi değerlendirmesi yapılır. Kullandığınız kan sulandırıcı ilaçlar varsa birkaç gün önceden düzenlenir.',
                },
                {
                  k: 'Ameliyat',
                  v: 'Genel anestezi altında yapılır ve çoğunlukla bir ile iki saat sürer. İşlemin kapsamına göre bir dren yerleştirilebilir.',
                },
                {
                  k: 'Hastane',
                  v: 'Meme koruyucu ameliyatlarda genellikle bir gün, mastektomide bir ile iki gün yatış yeterlidir.',
                },
                {
                  k: 'İyileşme',
                  v: 'Günlük işlerinize çoğunlukla bir hafta içinde dönersiniz. Kol hareketleri için verilen egzersizleri düzenli yapmanız önemlidir.',
                },
                {
                  k: 'Patoloji',
                  v: 'Çıkarılan dokunun ayrıntılı raporu genellikle bir hafta içinde çıkar. Sonrasında gerekiyorsa onkoloji tedavisi planlanır.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Ameliyat, tedavinin tamamı değil bir adımıdır. Işın tedavisi, hormon tedavisi ya da kemoterapi gerekip gerekmediği patoloji sonucuna göre belirlenir; bu süreçte yönlendirmeyi biz yapıyoruz.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'onkoplastik-cerrahi',
      key: 'onkoplastik',
      no: '03',
      title: 'Onkoplastik ve meme koruyucu cerrahi',
      crumb: 'Onkoplastik ve meme koruyucu cerrahi',
      navTitle: 'Onkoplastik ve Meme Koruyucu Cerrahi',
      meta: 'Kanseri temiz sınırlarla çıkarırken memenin şeklini koruyan onkoplastik cerrahi: kimlere uygun, sonrasında ne bekleniyor. Prof. Dr. Burhan Mayir.',
      lede: 'Kanserin tam olarak çıkarılmasıyla memenin görünümünün korunması birbirinin alternatifi değildir. Onkoplastik cerrahi, ikisini aynı ameliyatta birleştirir.',
      img: '/img/konu-onkoplastik.jpg',
      imgAlt: 'Görüşme odası: çalışma masası ve ahşap panelli oturma alanı',
      quickFacts: [
        { label: 'Amaç', value: 'Temiz sınır ve korunmuş meme şekli' },
        { label: 'Aynı seansta', value: 'Memenin kendi dokusuyla şekillendirme' },
        { label: 'Sonrasında', value: 'Işın tedavisi gerekir' },
        { label: 'Sonuç ne zaman oturur', value: 'Birkaç ay içinde' },
      ],
      ctaBox: {
        title: '"Memeniz alınacak" dendiyse',
        text: 'Koruyucu bir seçeneğin mümkün olup olmadığını değerlendirmek için görüntüleme ve patoloji raporlarınızı getirin.',
      },
      related: [
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Ameliyat seçenekleri ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'rekonstruksiyon',
          title: 'Meme Rekonstrüksiyonu',
          text: 'Memenin tamamı alındığında yeniden oluşturma.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri',
          text: 'Belirtiler, tanı yöntemleri ve evreleme.',
        },
      ],
      band: {
        title: 'Koruyucu seçeneği değerlendirelim',
        text: 'Her hastada mümkün olmasa da, çoğu zaman konuşulmaya değer. Raporlarınızla gelin, birlikte bakalım.',
      },
      indexBody:
        'Kanserli dokunun çıkarılmasıyla memenin şeklinin korunmasını aynı ameliyatta birleştiren yaklaşım. Uygun hastalarda memenin tamamı alınmaz.',
      indexWhen:
        'Memenizin tamamının alınacağı söylendiyse, koruyucu bir seçeneğin mümkün olup olmadığı için ikinci görüş alabilirsiniz.',
      sections: [
        {
          h2: 'Yaklaşım ne yapıyor',
          blocks: [
            {
              kind: 'p',
              text: 'Tümör, çevresindeki sağlam doku sınırıyla birlikte çıkarıldığında memede bir boşluk kalır. Bu boşluk kendiliğine bırakıldığında memede çökme, asimetri ya da meme başında kayma görülebilir. Onkoplastik cerrahide, tümör çıkarıldıktan sonra memenin kendi dokusu aynı seansta yeniden şekillendirilerek bu boşluk kapatılır.',
            },
            {
              kind: 'p',
              text: 'Böylece iki şey birlikte sağlanır: onkolojik güvenlik, yani sınırların temiz olması; ve memenin dolgun, simetriye yakın bir görünümde kalması. Gerektiğinde diğer memeye de küçültme ya da toparlama uygulanarak iki taraf dengelenir.',
            },
            {
              kind: 'p',
              text: 'Bu yaklaşım, cerrahın daha geniş bir doku parçası çıkarmasına da izin verir. Yani şekli korumak, tümörün çevresinden daha az doku almak anlamına gelmez.',
            },
          ],
        },
        {
          h2: 'Kimlere uygundur',
          blocks: [
            {
              kind: 'p',
              text: 'Kararı belirleyen temel ölçüt, tümörün boyutunun meme hacmine oranıdır. Değerlendirmede şunlara bakıyoruz:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Tümörün boyutu, memedeki yerleşimi ve tek odakta mı olduğu' },
                { text: 'Meme hacmi ve mevcut sarkma derecesi' },
                { text: 'Ameliyat sonrası ışın tedavisi alabilecek durumda olup olmadığınız' },
                { text: 'Sigara kullanımı, diyabet gibi yara iyileşmesini etkileyen faktörler' },
                { text: 'Sizin görünüme dair beklentileriniz' },
              ],
            },
            {
              kind: 'p',
              text: 'Tümör memenin birden fazla bölgesine yayılmışsa, daha önce aynı memeye ışın tedavisi uygulanmışsa ya da temiz sınır elde edilemiyorsa memenin tamamının alınması daha güvenli olur. Bu durumda rekonstrüksiyon devreye girer.',
            },
          ],
        },
        {
          h2: 'Ameliyat sonrası ne bekleyeceksiniz',
          blocks: [
            {
              kind: 'p',
              text: 'İlk haftalarda memede ödem ve his farklılığı olağandır. Nihai şekil, ışın tedavisinin de etkisiyle birkaç ay içinde oturur; bu yüzden sonucu ilk aya göre değerlendirmiyoruz.',
            },
            {
              kind: 'p',
              text: 'Meme koruyucu cerrahiden sonra ışın tedavisi neredeyse her hastada gereklidir ve nüks riskini belirgin biçimde azaltır. Bu iki tedavi bir bütündür; ameliyatı kabul edip ışın tedavisini planlamamak doğru bir yol değildir.',
            },
            {
              kind: 'p',
              text: 'Takip, ilk yıllarda altı aylık aralıklarla muayene ve yıllık görüntüleme ile sürer. Kontrollerinizi aynı yerde sürdürmeniz, karşılaştırmayı kolaylaştırdığı için tercih edilir.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-rekonstruksiyonu',
      key: 'rekonstruksiyon',
      no: '04',
      title: 'Meme rekonstrüksiyonu',
      crumb: 'Meme rekonstrüksiyonu',
      navTitle: 'Meme Rekonstrüksiyonu',
      meta: 'Meme rekonstrüksiyonunda zamanlama, implant ve kendi dokunuzla yapılan yöntemler, sık sorulan sorular. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Memenin tamamı alındığında yerine yeni bir meme oluşturulabilir. Bu, tedavinin gereksiz bir eklentisi değil; ameliyat planının konuşulması gereken bir parçasıdır.',
      img: '/img/konu-rekonstruksiyon.jpg',
      imgAlt: 'Görüşme odasının oturma alanı ve ahşap panel duvar',
      quickFacts: [
        { label: 'Zamanlama', value: 'Aynı seansta ya da tedavi sonrası' },
        { label: 'Yöntemler', value: 'İmplant veya kendi dokunuz' },
        { label: 'Meme başı', value: 'Genellikle ikinci bir işlemde' },
        { label: 'Takibe etkisi', value: 'Kanser takibini zorlaştırmaz' },
      ],
      ctaBox: {
        title: 'Geçmişte ameliyat geçirdiyseniz',
        text: 'Yıllar sonra da rekonstrüksiyon mümkündür. Mevcut durumu görmek için muayene yeterli.',
      },
      related: [
        {
          key: 'onkoplastik',
          title: 'Onkoplastik Cerrahi',
          text: 'Kanseri çıkarırken memenin şeklini korumak.',
        },
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Ameliyat seçenekleri ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'iyi-huylu',
          title: 'İyi Huylu Meme Hastalıkları',
          text: 'Fibroadenom, kist, meme ağrısı ve akıntı.',
        },
      ],
      band: {
        title: 'Zamanlamayı baştan planlayalım',
        text: 'Rekonstrüksiyon konuşulmadan verilen bir ameliyat kararı eksik kalır. Seçenekleri ilk görüşmede ele alıyoruz.',
      },
      indexBody:
        'Alınan meme dokusunun yerine yeni bir meme oluşturulması. Kanser ameliyatıyla aynı seansta ya da tedavi tamamlandıktan sonra yapılabilir.',
      indexWhen:
        'Ameliyat öncesinde ya da geçmişte meme ameliyatı geçirdiyseniz, rekonstrüksiyon zamanlamasını planlamak için başvurun.',
      sections: [
        {
          h2: 'Zamanlama: aynı seansta mı, sonra mı',
          blocks: [
            {
              kind: 'cards',
              items: [
                {
                  k: 'Eş zamanlı rekonstrüksiyon',
                  v: 'Kanser ameliyatı ile aynı seansta yapılır. Memenin kaybını hiç yaşamamak, hasta açısından en büyük avantajıdır. Meme derisi korunduğu için estetik sonuç genellikle daha iyidir.',
                },
                {
                  k: 'Geç rekonstrüksiyon',
                  v: 'Kemoterapi ve ışın tedavisi tamamlandıktan sonra, genellikle altı ay ile bir yıl arasında yapılır. Işın tedavisi planlanan hastalarda dokunun iyileşmesini beklemek daha güvenli olabilir.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Yıllar önce meme ameliyatı geçirmiş olmanız rekonstrüksiyona engel değildir. Geç dönemde de yapılabilir.',
            },
          ],
        },
        {
          h2: 'Yöntemler',
          blocks: [
            { kind: 'p', text: 'İki temel yol vardır; bazı hastalarda ikisi birleştirilir.' },
            {
              kind: 'ul',
              items: [
                {
                  lead: 'İmplant ile rekonstrüksiyon:',
                  text: 'silikon implant yerleştirilir. Bazı hastalarda önce doku genişletici konur, deri kademeli olarak genişletildikten sonra implantla değiştirilir. Ameliyat süresi ve iyileşme daha kısadır.',
                },
                {
                  lead: 'Kendi dokunuzla rekonstrüksiyon:',
                  text: 'karın ya da sırt bölgesinden alınan doku memeye taşınır. Sonuç daha doğal ve kalıcıdır; ameliyat ve iyileşme süresi daha uzundur.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Meme başı ve çevresindeki koyu halkanın yeniden oluşturulması, genellikle sonraki küçük bir işlemde tamamlanır. Simetri için diğer memeye de düzeltme uygulanabilir.',
            },
          ],
        },
        {
          h2: 'Sık sorulan iki soru',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Rekonstrüksiyon kanserin takibini zorlaştırır mı?',
                  a: 'Hayır. Rekonstrüksiyonun nüksü gizlediğine ya da kanserin geri dönme riskini artırdığına dair bir bulgu yoktur. Takip muayene ve gerekli durumlarda görüntüleme ile sürdürülür.',
                },
                {
                  q: 'His duyusu geri gelir mi?',
                  a: 'Yeni oluşturulan memede dokunma duyusu eskisi gibi olmaz. Zamanla kısmi bir his gelişebilir. Bunu baştan bilmeniz, sonucu doğru değerlendirmeniz için önemli.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Hangi yöntemin size uygun olduğu; vücut yapınız, sigara kullanımınız, planlanan onkolojik tedaviler ve beklentileriniz birlikte değerlendirilerek belirlenir. Gerekli durumlarda plastik cerrahi ile ortak çalışıyoruz.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'iyi-huylu-meme-hastaliklari',
      key: 'iyi-huylu',
      no: '05',
      title: 'İyi huylu meme hastalıkları',
      crumb: 'İyi huylu meme hastalıkları',
      navTitle: 'İyi Huylu Meme Hastalıkları',
      meta: 'Fibroadenom, meme kisti, meme ağrısı ve meme başı akıntısı: hangileri takip, hangileri işlem gerektirir. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Memeyle ilgili şikâyetlerin büyük bölümü kanser değildir. Yine de hangisinin takip, hangisinin işlem gerektirdiğine muayene ve görüntüleme karar verir.',
      img: '/img/konu-iyi-huylu.jpg',
      imgAlt: 'Muayene odasındaki lavabo ve boy-kilo ölçer',
      quickFacts: [
        { label: 'En sık kitle', value: 'Fibroadenom' },
        { label: 'İlk görüntüleme', value: 'Genç yaşta ultrason' },
        { label: 'Basit kist', value: 'Genellikle tedavi gerekmez' },
        { label: 'Kanlı akıntı', value: 'Her zaman incelenir' },
      ],
      ctaBox: {
        title: 'Bir şey fark ettiyseniz',
        text: 'Muayene ve ultrason çoğu zaman aynı gün tamamlanır. Beklemek yerine kontrol ettirin.',
      },
      related: [
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri',
          text: 'Belirtiler, tanı yöntemleri ve evreleme.',
        },
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Ameliyat seçenekleri ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'blog',
          title: 'Bilgi Yazıları',
          text: 'Tarama, kendi kendine muayene ve sık sorulanlar.',
        },
      ],
      band: {
        title: 'Şüphede kalmanıza gerek yok',
        text: 'Muayene ve ultrasonla çoğu şikâyet aynı görüşmede netleşir. Randevu talebinizi bırakın, sizi arayalım.',
      },
      indexBody:
        'Fibroadenom, kist, meme ağrısı ve akıntı. Bu şikâyetlerin çoğu kanser değildir; yine de hepsi değerlendirilmelidir.',
      indexWhen:
        'Adet dönemlerinden bağımsız süren meme ağrısı, büyüyen bir kist ya da tekrarlayan akıntı varsa kontrol gerekir.',
      sections: [
        {
          h2: 'En sık karşılaşılan tablolar',
          blocks: [
            {
              kind: 'cards',
              items: [
                {
                  k: 'Fibroadenom',
                  v: 'Genç kadınlarda en sık görülen iyi huylu kitledir. Elde hareketli, sınırları belirgin ve ağrısızdır. Küçük ve tipik görünümlü olanlar aralıklı ultrason ile izlenebilir; büyüyen, rahatsızlık veren ya da görüntülemede şüpheli görünen fibroadenomlar çıkarılır.',
                },
                {
                  k: 'Meme kisti',
                  v: 'Sıvı dolu keseciklerdir; özellikle menopoza yakın dönemde sıktır. Basit kistler tedavi gerektirmez. Gerginlik ve ağrı yapan büyük kistler iğne ile boşaltılabilir. İçinde katı bileşen bulunan kistler ayrıca değerlendirilir.',
                },
                {
                  k: 'Meme ağrısı',
                  v: 'Adet döneminden önce artan, iki tarafta hissedilen yaygın ağrı çoğunlukla hormonaldir ve ciddi bir hastalık göstergesi değildir. Tek bir noktada yerleşen, adetten bağımsız ve giderek artan ağrı ise değerlendirilmelidir.',
                },
                {
                  k: 'Meme başı akıntısı',
                  v: 'İki taraflı, birden fazla kanaldan gelen ve sıkmayla ortaya çıkan berrak ya da süt renginde akıntı genellikle önemsizdir. Tek taraflı, tek kanaldan gelen, kendiliğinden akan ve kanlı akıntı ise ayrıntılı incelenir.',
                },
                {
                  k: 'Meme iltihabı ve apse',
                  v: 'En sık emzirme döneminde görülür; ağrı, kızarıklık ve ateşle seyreder. Antibiyotik tedavisi çoğu zaman yeterlidir. Apse geliştiyse boşaltılması gerekir. Emzirme dışı dönemde tekrarlayan iltihaplar mutlaka araştırılmalıdır.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Bu şikâyetler kanser riskini artırır mı',
          blocks: [
            {
              kind: 'p',
              text: 'Büyük bölümü artırmaz. Fibroadenom, basit kist ve hormonal meme ağrısı, ileride kanser gelişme riskiyle ilişkilendirilmez. Yalnızca patoloji raporunda belirli hücresel değişiklikler saptanan sınırlı bir grupta risk bir miktar yükselir; bu hastalarda izlem programı ayrıca planlanır.',
            },
            {
              kind: 'p',
              text: 'İyi huylu tanısı almak, tarama programınızı bırakmanız anlamına gelmez. Yaşınıza uygun mamografi ve muayene takvimi devam eder.',
            },
          ],
        },
        {
          h2: 'Ne zaman gecikmemeli',
          blocks: [
            {
              kind: 'ul',
              items: [
                { text: 'Yeni fark edilen, sert ve hareketsiz bir kitle' },
                { text: 'Kanlı ya da tek kanaldan kendiliğinden gelen akıntı' },
                { text: 'Meme derisinde çekilme, kalınlaşma veya portakal kabuğu görünümü' },
                { text: 'Meme başında içe çekilme ya da geçmeyen kabuklanma' },
                { text: 'Koltuk altında ele gelen sertlik' },
              ],
            },
            {
              kind: 'p',
              text: 'Bu bulgular kanser olduğunuz anlamına gelmez; ancak beklenmemesi gereken bulgulardır. Bir haftalık bir randevu, aylarca sürecek bir tedirginliğin yerini alır.',
            },
          ],
        },
      ] as Section[],
    },
  ],
};

/** Bütün dillerin doldurmak zorunda olduğu şekil. */
export type Dict = typeof TR;
export type Topic = Dict['topics'][number];
