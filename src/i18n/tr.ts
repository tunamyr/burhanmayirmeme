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
  /** Marka bloğunun üst satırı — unvan. */
  brandPre: 'Prof. Dr.',
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
    cancer: 'Meme Kanseri',
    conditions: 'Meme Hastalıkları',
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
      'Meme koruyucu cerrahi',
      'Onkoplastik meme cerrahisi',
      'Meme rekonstrüksiyonu',
      'İyi huylu meme hastalıkları',
      'İkinci görüş',
      'Diğer',
    ],
  },

  common: {
    appointmentCta: 'Randevu talep et',
    quickFacts: 'Hızlı bakış',
    relatedTopics: 'İlgili konular',
    whenToApply: 'Ne zaman başvurmalı',
    readTopic: 'Bu konuyu okuyun →',
    moreInfo: 'Ayrıntılı bilgi →',
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
      pre: 'Tedavinin ',
      em1: 'her adımında',
      mid: ' yanınızda, ',
      em2: 'size özel',
      post: ' bir yol haritasıyla.',
    },
    lede: 'Meme kanseri cerrahisi, meme koruyucu ve onkoplastik cerrahi ile iyi huylu meme hastalıklarında güncel tedavi yöntemlerini her hastanın kendi tablosuna göre planlıyoruz. Hangi adımın neden atıldığını önce anlatıyor, sonra uyguluyoruz.',
    heroAlt: "Prof. Dr. Burhan Mayir, Antalya'daki muayenehanesinde",
    topicsButton: 'Hastalıklar',

    topicsTitle: 'İlgilendiğimiz konular',

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
    standingAlt: 'Prof. Dr. Burhan Mayir, muayenehanesinde ayakta',
    lede: "Genel cerrahi uzmanıyım. Yirmi beş yılı aşkın süredir genel cerrahinin farklı alanlarında ameliyat yapıyor, aynı alanda akademik çalışmalar yürütüyorum. Antalya'daki özel muayenehanemde hasta kabul ediyorum.",
    body: 'Hastalarımla çalışma biçimim tek bir ilkeye dayanıyor: kararı birlikte vermek. Bunun için seçenekleri, alternatiflerini ve beklenen sonuçları anlaşılır bir dille anlatmak gerekiyor. Ne olacağını bilen bir hasta, tedaviye daha güçlü başlıyor.',
    fieldsHead: 'İlgi alanları',
    fields:
      'Meme kanseri cerrahisi · Meme koruyucu cerrahi · Onkoplastik meme cerrahisi · Meme rekonstrüksiyonu · İyi huylu meme hastalıkları · Genel cerrahi',
    mainSiteText: 'Genel cerrahi ve obezite cerrahisi alanındaki çalışmalarım için:',
    mainSiteLabel: 'burhanmayir.com →',
    mainSiteUrl: 'https://www.burhanmayir.com/',

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
      'Meme taraması, meme kanseri cerrahisi, iyi huylu meme hastalıkları ve tedavi süreçleri üzerine hasta odaklı bilgi yazıları. Prof. Dr. Burhan Mayir.',
    h1: 'Bilgi Yazıları',
    lede: 'Görüşme süresi her zaman her soruya yetmiyor. Bu yazılar, aklınıza sonradan gelenler için.',
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
      group: 'kanser',
      no: '01',
      title: 'Meme kanseri',
      crumb: 'Meme kanseri',
      navTitle: 'Meme Kanseri Nedir',
      seoTitle: 'Antalya Meme Kanseri Belirtileri, Tanısı ve Tedavisi | Prof. Dr. Burhan Mayir',
      meta: "Antalya'da meme kanseri belirtileri, erken tanı yöntemleri ve güncel tedavi seçenekleri. Meme kanseri taraması ve muayene için Prof. Dr. Burhan Mayir.",
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
          title: 'Onkoplastik Meme Cerrahisi',
          text: 'Kanseri çıkarırken memenin şeklini korumak.',
        },
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Ele gelen kitlelerin çoğu iyi huyludur.',
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
      group: 'kanser',
      no: '02',
      seoTitle: 'Antalya Meme Kanseri Ameliyatı ve Onkoplastik Cerrahi | Prof. Dr. Burhan Mayir',
      title: 'Meme kanseri cerrahisi',
      crumb: 'Meme kanseri cerrahisi',
      navTitle: 'Meme Kanseri Cerrahisi',
      meta: 'Meme koruyucu cerrahi ve mastektomi seçenekleri, sentinel lenf nodu biyopsisi, ameliyat günü ve iyileşme süreci. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Cerrahinin iki işi vardır: tümörü sağlam sınırlarla çıkarmak ve hastalığın koltuk altına yayılıp yayılmadığını öğrenmek. Hangi ameliyatın yapılacağı, tümörün özellikleri ve sizin tercihleriniz birlikte değerlendirilerek belirlenir.',
      img: '/img/ameliyathane.jpg',
      imgAlt: 'Ameliyathanede meme cerrahisi uygulanırken',
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
          key: 'koruyucu',
          title: 'Meme Koruyucu Cerrahi',
          text: 'Tümörü çıkarıp memenin geri kalanını korumak.',
        },
        {
          key: 'onkoplastik',
          title: 'Onkoplastik Meme Cerrahisi',
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
      slug: 'onkoplastik-meme-cerrahisi',
      key: 'onkoplastik',
      group: 'kanser',
      no: '03',
      seoTitle: 'Antalya Onkoplastik Meme Cerrahisi | Prof. Dr. Burhan Mayir',
      title: 'Onkoplastik meme cerrahisi',
      crumb: 'Onkoplastik meme cerrahisi',
      navTitle: 'Onkoplastik Meme Cerrahisi',
      meta: 'Onkoplastik meme cerrahisi nedir, kimlere uygulanır? Kanserli dokuyu temiz sınırla çıkarırken meme şeklini koruyan cerrahi teknikler. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Onkoplastik cerrahi ayrı bir ameliyat değil, meme kanseri ameliyatının nasıl yapıldığıdır. Tümör onkolojik kurallara göre çıkarılırken kalan meme dokusu aynı seansta yeniden şekillendirilir.',
      img: '/img/konu-onkoplastik.jpg',
      imgAlt: 'Görüşme odası: çalışma masası ve ahşap panelli oturma alanı',
      quickFacts: [
        { label: 'Amaç', value: 'Temiz cerrahi sınır ve korunmuş meme şekli' },
        { label: 'Aynı seansta', value: 'Memenin kendi dokusuyla şekillendirme' },
        { label: 'Karşı meme', value: 'Gerekirse simetri için düzenlenir' },
        { label: 'Meme korunduysa', value: 'Sonrasında ışın tedavisi gerekir' },
        { label: 'Sonuç ne zaman oturur', value: 'Birkaç ay içinde' },
      ],
      ctaBox: {
        title: '"Memeniz alınacak" dendiyse',
        text: 'Koruyucu bir seçeneğin mümkün olup olmadığını değerlendirmek için görüntüleme ve patoloji raporlarınızı getirin.',
      },
      related: [
        {
          key: 'koruyucu',
          title: 'Meme Koruyucu Cerrahi',
          text: 'Tümörü çıkarıp memenin geri kalanını korumak.',
        },
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
      ],
      band: {
        title: 'Şeklin korunup korunamayacağını konuşalım',
        text: 'Her hastada aynı teknik uygulanmaz. Raporlarınızla gelin, sizin memeniz için neyin mümkün olduğuna birlikte bakalım.',
      },
      indexBody:
        'Kanserli dokunun çıkarılmasıyla memenin şeklinin korunmasını aynı ameliyatta birleştiren teknikler. Plastik cerrahi prensipleri, onkolojik cerrahinin içinde kullanılır.',
      indexWhen:
        'Meme kanseri ameliyatı planlanıyorsa ve ameliyat sonrası görünüm sizin için önemliyse, cerrahi planı yapılmadan önce konuşalım.',
      sections: [
        {
          h2: 'Onkoplastik cerrahi nedir',
          blocks: [
            {
              kind: 'p',
              text: 'Tümör, çevresindeki sağlam doku sınırıyla birlikte çıkarıldığında memede bir boşluk kalır. Bu boşluk kendi haline bırakıldığında memede çökme, asimetri ya da meme başında kayma görülebilir. Onkoplastik cerrahide, tümör çıkarıldıktan sonra memenin kendi dokusu aynı seansta yeniden şekillendirilerek bu boşluk kapatılır.',
            },
            {
              kind: 'p',
              text: 'Yani onkoplastik cerrahi, meme kanseri ameliyatı ile meme şekillendirme tekniklerinin tek bir cerrahi işlem içinde uygulanmasıdır. Onkolojik cerrahinin kurallarını plastik ve rekonstrüktif cerrahinin yöntemleriyle birleştirir.',
            },
            {
              kind: 'p',
              text: 'Bu yaklaşım, cerrahın daha geniş bir doku parçası çıkarmasına da izin verir. Şekli korumak, tümörün çevresinden daha az doku almak anlamına gelmez; önceliğimiz her zaman temiz cerrahi sınırdır.',
            },
          ],
        },
        {
          h2: 'Kimlere uygulanabilir',
          blocks: [
            {
              kind: 'p',
              text: 'Onkoplastik cerrahi her meme kanseri hastasında aynı şekilde uygulanmaz; cerrahi plan kişiye özel çıkarılır. Kararı belirleyen temel ölçüt, tümörün boyutunun meme hacmine oranıdır. Değerlendirmede şunlara bakıyoruz:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Tümörün boyutu, memedeki yerleşimi ve tek odakta mı olduğu' },
                { text: 'Meme hacmi, şekli ve mevcut sarkma derecesi' },
                { text: 'Hastalığın evresi ve daha önce alınmış tedaviler' },
                { text: 'Ameliyat sonrası ışın tedavisi alabilecek durumda olup olmadığınız' },
                { text: 'Sigara kullanımı, diyabet gibi yara iyileşmesini etkileyen faktörler' },
                { text: 'Sizin görünüme dair beklentileriniz' },
              ],
            },
            {
              kind: 'p',
              text: 'Uygun hastalarda onkoplastik teknikler meme koruyucu cerrahi ile birlikte kullanılır. Meme dokusunun tamamının alınması gerektiğinde ise mastektomi sonrası rekonstrüksiyon seçenekleri değerlendirilir.',
            },
          ],
        },
        {
          h2: 'Onkoplastik cerrahi ile meme koruyucu cerrahi arasındaki fark',
          blocks: [
            {
              kind: 'p',
              text: 'İki kavram sık karıştırılır. Biri ne kadar doku çıkarıldığını, diğeri kalan dokunun ne yapıldığını anlatır.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Meme koruyucu cerrahi',
                  v: 'Kanserli tümör ve çevresindeki gerekli meme dokusu çıkarılır, memenin geri kalanı korunur. Ameliyatın kapsamını tanımlar.',
                },
                {
                  k: 'Onkoplastik cerrahi',
                  v: 'Tümör çıkarıldıktan sonra kalan meme dokusunun yeniden şekillendirilmesidir. Ameliyatın nasıl yapıldığını tanımlar ve çoğunlukla meme koruyucu cerrahinin bir parçası olarak uygulanır.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Başka bir ifadeyle onkoplastik cerrahi, meme koruyucu cerrahinin sonucunu iyileştiren bir tekniktir. Meme koruyucu cerrahinin kendisi, kimlere uygun olduğu ve sonrasında gereken tedaviler için Meme Koruyucu Cerrahi sayfasına bakabilirsiniz.',
            },
          ],
        },
        {
          h2: 'Ameliyat sonrası ne bekleyeceksiniz',
          blocks: [
            {
              kind: 'p',
              text: 'İlk haftalarda memede ödem ve his farklılığı olağandır. Nihai şekil, meme korunduysa ışın tedavisinin de etkisiyle birkaç ay içinde oturur; bu yüzden sonucu ilk aya göre değerlendirmiyoruz.',
            },
            {
              kind: 'p',
              text: 'Simetri için karşı memeye küçültme ya da toparlama uygulanmışsa, iki tarafın iyileşme hızı farklı olabilir. Bu da zamanla dengelenir.',
            },
            {
              kind: 'p',
              text: 'Takip, ilk yıllarda altı aylık aralıklarla muayene ve yıllık görüntüleme ile sürer. Kontrollerinizi aynı yerde sürdürmeniz, karşılaştırmayı kolaylaştırdığı için tercih edilir.',
            },
          ],
        },
        {
          h2: 'Sık sorulan sorular',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Onkoplastik meme cerrahisi kanser ameliyatı mıdır?',
                  a: 'Evet. Onkolojik cerrahi prensipleriyle meme şekillendirme tekniklerinin birlikte kullanılmasıdır. Estetik sonuç, kanser tedavisinin önüne geçmez.',
                },
                {
                  q: 'Onkoplastik cerrahide meme tamamen alınır mı?',
                  a: 'Her zaman değil. Uygun hastalarda meme koruyucu cerrahi ile birlikte uygulanır. Bazı hastalarda ise mastektomi tıbben gereklidir; o durumda rekonstrüksiyon devreye girer.',
                },
                {
                  q: 'Her meme kanseri hastasına uygulanabilir mi?',
                  a: 'Hayır. Uygunluk; tümörün özellikleri, meme yapısı, hastalığın evresi ve uygulanacak diğer tedaviler değerlendirilerek belirlenir.',
                },
                {
                  q: 'İz kalır mı?',
                  a: 'Her cerrahi işlemde olduğu gibi kesi yerlerinde iz oluşur. Kesinin yeri ve görünümü uygulanan tekniğe, meme yapısına ve kişinin yara iyileşmesine göre değişir.',
                },
              ],
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-koruyucu-cerrahi',
      key: 'koruyucu',
      group: 'kanser',
      no: '04',
      seoTitle: 'Antalya Meme Koruyucu Cerrahi | Prof. Dr. Burhan Mayir',
      title: 'Meme koruyucu cerrahi',
      crumb: 'Meme koruyucu cerrahi',
      navTitle: 'Meme Koruyucu Cerrahi',
      meta: 'Meme koruyucu cerrahi nedir, kimlere uygulanır? Lumpektomi, sentinel lenf nodu biyopsisi, ameliyat sonrası ışın tedavisi ve mastektomi ile farkı. Prof. Dr. Burhan Mayir, Antalya.',
      lede: 'Meme kanserinde tümörü ve çevresindeki gerekli dokuyu çıkarıp memenin geri kalanını korumak, uygun hastalarda memenin tamamının alınması kadar güvenlidir. Kimin uygun olduğu tek bir ölçüte değil, birkaç faktöre birlikte bakılarak belirlenir.',
      img: '/img/stok-cerrahi-ekip.jpg',
      imgAlt: 'Ameliyathanede cerrahi ekip',
      quickFacts: [
        { label: 'Diğer adları', value: 'Lumpektomi, parsiyel mastektomi' },
        { label: 'Amaç', value: 'Tümörü temiz sınırla çıkarmak, memeyi korumak' },
        { label: 'Koltuk altı', value: 'Öncelikle sentinel lenf nodu biyopsisi' },
        { label: 'Sonrasında', value: 'Neredeyse her hastada ışın tedavisi' },
        { label: 'Yaşam süresi', value: 'Uygun hastada mastektomiden farklı değil' },
      ],
      ctaBox: {
        title: 'Memenizin alınması gerektiği söylendiyse',
        text: 'Koruyucu bir seçeneğin mümkün olup olmadığı yeniden değerlendirilebilir. Mamografi, ultrason, MR ve patoloji sonuçlarınızla gelin.',
      },
      related: [
        {
          key: 'onkoplastik',
          title: 'Onkoplastik Meme Cerrahisi',
          text: 'Tümör çıkarıldıktan sonra meme şeklinin korunması.',
        },
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Bütün ameliyat seçenekleri ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri',
          text: 'Belirtiler, tanı yöntemleri ve evreleme.',
        },
      ],
      band: {
        title: 'Memenizin korunup korunamayacağına birlikte bakalım',
        text: 'Karar yalnızca tümörün boyutuna bakılarak verilmez. Görüntüleme ve patoloji raporlarınızı getirin, seçenekleri ayrıntılı konuşalım.',
      },
      indexBody:
        'Tümörün ve çevresindeki gerekli dokunun çıkarılması, memenin geri kalanının korunması. Uygun hastalarda memenin tamamının alınması ile arasında yaşam süresi farkı gösterilmemiştir.',
      indexWhen:
        'Memenizin tamamının alınacağı söylendiyse, koruyucu bir seçeneğin mümkün olup olmadığı için ikinci görüş alabilirsiniz.',
      sections: [
        {
          h2: 'Meme koruyucu cerrahi nedir',
          blocks: [
            {
              kind: 'p',
              text: 'Amaç, kanserli tümörü çevresindeki gerekli sağlam doku ile birlikte çıkarmak ve memenin geri kalanını korumaktır. Bu ameliyat lumpektomi, segmental mastektomi ya da parsiyel mastektomi gibi farklı isimlerle de anılır; hepsi aynı mantığı anlatır.',
            },
            {
              kind: 'p',
              text: 'Ameliyatın kapsamı tümörün boyutuna, memedeki yerleşimine ve meme dokusunun özelliklerine göre değişir. Geçmişte meme kanseri tanısı alan birçok hastada memenin tamamının alınması gerekirken, bugün uygun hastalarda meme dokusunun korunması mümkün.',
            },
            {
              kind: 'p',
              text: 'Uygun hastalarda meme koruyucu cerrahi ile mastektomi arasında yaşam süresi farkı gösterilmemiştir. Bu, kararı yalnızca "ne kadar alınırsa o kadar güvenli" mantığıyla vermemizi gereksiz kılar.',
            },
          ],
        },
        {
          h2: 'Kimlere uygulanabilir',
          blocks: [
            {
              kind: 'p',
              text: 'Meme koruyucu cerrahi her hasta için uygun olmayabilir. Karar verilirken birçok faktör birlikte değerlendirilir:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Tümörün boyutu, memedeki konumu ve tümör sayısı' },
                { text: 'Meme büyüklüğü ve tümörün meme hacmine oranı' },
                { text: 'Hastalığın evresi ve meme içindeki yaygınlığı' },
                { text: 'Daha önce uygulanmış tedaviler, özellikle aynı memeye ışın tedavisi' },
                { text: 'Ameliyat sonrası ışın tedavisinin uygulanabilir olup olmadığı' },
              ],
            },
            {
              kind: 'p',
              text: 'Bazı hastalarda ameliyat öncesinde kemoterapi veya diğer sistemik tedaviler uygulanarak tümör küçültülür ve meme koruyucu cerrahi böylece mümkün hale gelir. Bu nedenle karar yalnızca ilk ölçülen tümör boyutuna bakılarak verilmez.',
            },
            {
              kind: 'p',
              text: 'Tümör memenin birden fazla bölgesine yayılmışsa, daha önce aynı memeye ışın tedavisi uygulanmışsa ya da temiz sınır elde edilemiyorsa memenin tamamının alınması daha güvenli olur.',
            },
          ],
        },
        {
          h2: 'Ameliyat nasıl yapılır',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Öncesi',
                  v: 'Meme muayenesi, mamografi, ultrason ve gerekirse MR birlikte değerlendirilerek tümörün yeri ve sınırları belirlenir. Ele gelmeyen tümörlerde ameliyattan önce işaretleme yapılır.',
                },
                {
                  k: 'Tümörün çıkarılması',
                  v: 'Cerrahi kesi planlanır ve tümör, çevresinde gerekli sağlam doku sınırıyla birlikte çıkarılır. Çıkarılan doku patolojik incelemeye gönderilir.',
                },
                {
                  k: 'Koltuk altı',
                  v: 'Gereken hastalarda sentinel lenf nodu biyopsisi yapılır. Yayılım saptanan seçili hastalarda koltuk altı lenf bezlerine yönelik daha geniş cerrahi uygulanabilir.',
                },
                {
                  k: 'Şekillendirme',
                  v: 'Çıkarılan doku miktarı ya da tümörün yerleşimi memede şekil bozukluğu bırakacaksa, kalan doku aynı seansta onkoplastik tekniklerle yeniden düzenlenir.',
                },
                {
                  k: 'Patoloji',
                  v: 'Cerrahi sınırlar ve tümörün özellikleri rapor edilir; genellikle bir hafta içinde çıkar. Sınırlarda sorun varsa ek bir cerrahi gerekebilir.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Ameliyat sonrası ışın tedavisi',
          blocks: [
            {
              kind: 'p',
              text: 'Meme koruyucu cerrahiden sonra neredeyse her hastada ışın tedavisi gerekir ve nüks riskini belirgin biçimde azaltır. Cerrahi ile ışın tedavisi bir bütündür; ameliyatı kabul edip ışın tedavisini planlamamak doğru bir yol değildir.',
            },
            {
              kind: 'p',
              text: 'Işın tedavisi alamayacak durumdaysanız, meme koruyucu cerrahi çoğu zaman uygun bir seçenek olmaz. Bu, ameliyat kararı verilirken en başta konuştuğumuz konulardan biridir.',
            },
            {
              kind: 'p',
              text: 'Patoloji sonucuna göre kemoterapi, hormon tedavisi veya hedefe yönelik tedaviler de gündeme gelebilir. Tedavi planı cerrahi, radyasyon onkolojisi ve medikal onkoloji tarafından birlikte oluşturulur.',
            },
          ],
        },
        {
          h2: 'Sık sorulan sorular',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Meme koruyucu cerrahi mi, mastektomi mi?',
                  a: 'Bu karar tümörün özellikleri, hastalığın yaygınlığı, meme yapısı ve uygulanabilecek diğer tedaviler değerlendirilerek verilir. Bazı hastalarda koruyucu cerrahi uygun bir seçenekken, bazı hastalarda mastektomi daha güvenlidir.',
                },
                {
                  q: 'Meme koruyucu cerrahi sonrası ışın tedavisi şart mı?',
                  a: 'Birçok hastada gereklidir. Gerekli tedaviler tümörün özelliklerine göre belirlenir, ancak ışın tedavisi alamayacaksanız ameliyat planı da değişir.',
                },
                {
                  q: 'Meme tamamen korunur mu?',
                  a: 'Meme dokusunun büyük bölümü korunur, ancak tümörün çıkarıldığı bölgede doku kaybı olur. Uygun hastalarda onkoplastik tekniklerle meme şeklinin korunmasına yardımcı olunur.',
                },
                {
                  q: 'Ameliyattan sonra kanser tekrarlarsa ne olur?',
                  a: 'Aynı memede tekrarlama olursa çoğunlukla mastektomi gerekir. Bu nedenle ameliyat sonrası takip ve yıllık görüntüleme düzenli sürdürülmelidir.',
                },
              ],
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-rekonstruksiyonu',
      key: 'rekonstruksiyon',
      group: 'kanser',
      no: '05',
      seoTitle: 'Antalya Meme Rekonstrüksiyonu ve Meme Onarımı | Prof. Dr. Burhan Mayir',
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
          title: 'Onkoplastik Meme Cerrahisi',
          text: 'Kanseri çıkarırken memenin şeklini korumak.',
        },
        {
          key: 'cerrahi',
          title: 'Meme Kanseri Cerrahisi',
          text: 'Ameliyat seçenekleri ve koltuk altının değerlendirilmesi.',
        },
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Ele gelen kitlelerin çoğu iyi huyludur.',
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
      slug: 'meme-agrisi',
      key: 'agri',
      group: 'hastalik',
      no: '06',
      title: 'Meme ağrısı',
      crumb: 'Meme ağrısı',
      navTitle: 'Meme Ağrısı — Mastalji',
      seoTitle: 'Antalya Meme Ağrısı Neden Olur? Geçmeyen Meme Ağrısı Tedavisi',
      meta: "Antalya'da meme ağrısı nedenleri, adet öncesi meme ağrısı ve tedavi yöntemleri. Sürekli meme ağrısı kanser midir? Prof. Dr. Burhan Mayir yanıtlıyor.",
      lede: "Meme ağrısıyla gelen hastaların ilk sorusu genellikle aynı oluyor: “Acaba kanser miyim?” Net olarak söyleyelim: meme ağrısının %90'dan fazlası kanserle ilişkili değildir. Hatta meme kanserinin kendisi çoğu zaman ağrı yapmaz.",
      img: '/img/blog-tedaviler.jpg',
      imgAlt: 'Görüşme odasının oturma alanı',
      quickFacts: [
        { label: 'Kanserle ilişkisi', value: "%90'dan fazlası ilişkisiz" },
        { label: 'En sık nedeni', value: 'Adet öncesi hormonal ağrı' },
        { label: 'İlk adım', value: 'Muayene, gerekirse ultrason' },
        { label: 'Çoğu hastada', value: 'Ameliyat gerekmez' },
      ],
      ctaBox: {
        title: 'Ağrınız geçmiyor mu?',
        text: 'Ağrının nedenini bulmak çoğu zaman tek bir muayeneyle mümkün. Kanser olmadığını görmek, ağrının kendisini de hafifletiyor.',
      },
      related: [
        {
          key: 'kist',
          title: 'Meme Kistleri',
          text: 'Gergin kistler aniden şiddetli ağrı yapabilir.',
        },
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Ağrıya kitle eşlik ediyorsa değerlendirme değişir.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri Nedir',
          text: 'Hangi bulgular beklemeden başvurmayı gerektirir.',
        },
      ],
      band: {
        title: 'Ağrının nedenini birlikte bulalım',
        text: 'Ne zaman başladığını, adet dönemiyle ilişkisini ve nerede hissettiğinizi konuşalım. Çoğu hastada tablo ilk görüşmede netleşiyor.',
      },
      indexBody:
        'Meme ağrısının nedenleri, hangisinin hormonal hangisinin araştırma gerektirdiği ve tedavi seçenekleri.',
      indexWhen:
        'Ağrı tek bir noktada ve sürekliyse, giderek artıyorsa ya da yanında kitle, akıntı veya ciltte değişiklik varsa muayene olun.',
      sections: [
        {
          h2: 'Meme ağrısı neden olur',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Hormonal (siklik) ağrı',
                  v: 'En sık nedenidir. Adetten 3-5 gün önce başlar, iki memede birden gerginlik, dolgunluk ve hassasiyet yapar, adetle birlikte geçer.',
                },
                {
                  k: 'Fibrokistik meme yapısı',
                  v: 'Memesinde çok sayıda küçük kist ve sertlik olan kadınlarda ağrı daha sık görülür.',
                },
                {
                  k: 'Kas-iskelet kaynaklı ağrı',
                  v: 'Büyük meme dokusunun boyun ve sırt kaslarına yük bindirmesi ve yanlış sütyen kullanımı ağrı yapar.',
                },
                {
                  k: 'Kistler ve iltihaplar',
                  v: 'İçinde sıvı biriken gergin bir kist aniden ve şiddetli ağrıyabilir.',
                },
                {
                  k: 'Stres, kafein ve beslenme',
                  v: 'Fazla kahve, çay ve çikolata ile stres ağrıyı tetikleyebilir.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Ne zaman doktora gitmeli',
          blocks: [
            {
              kind: 'p',
              text: 'Adet döneminizle birlikte gelip geçen, iki memede birden hissedilen ağrı için acele etmeniz gerekmez. Aşağıdaki durumlarda ise muayene olmayı ertelemeyin.',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Ağrı tek bir noktada ve sürekliyse' },
                { text: 'Giderek artıyorsa ya da uykunuzu bölüyorsa' },
                { text: 'Ele gelen bir kitle eşlik ediyorsa' },
                { text: 'Meme başından akıntı geliyorsa' },
                { text: 'Meme derisinde kızarıklık, çekinti ya da kalınlaşma varsa' },
              ],
            },
          ],
        },
        {
          h2: 'Tedavi nasıl yapılır',
          blocks: [
            {
              kind: 'p',
              text: 'Tedavi nedene yöneliktir. Kanser olmadığı gösterildikten sonra hastaların önemli bir bölümünde ağrının şiddeti kendiliğinden azalır; tedirginliğin ağrıyı büyüttüğünü pratikte sık görüyoruz.',
            },
            {
              kind: 'p',
              text: 'Doğru destekli sütyen, kafein ve tuz kısıtlaması gibi basit önlemler ile gerektiğinde ağrı kesici düzeyinde ilaç tedavisi çoğu hastada yeterli oluyor. Hormon tedavilerine nadiren ihtiyaç duyulur.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'memede-kitle-fibroadenom',
      key: 'kitle',
      group: 'hastalik',
      no: '07',
      title: 'Memede kitle ve fibroadenom',
      crumb: 'Memede kitle',
      navTitle: 'Memede Kitle — Fibroadenom',
      seoTitle: 'Antalya Memede Kitle ve Fibroadenom Tedavisi | İyi Huylu Kitle',
      meta: "Antalya'da memede kitle neden olur? Fibroadenom nedir, tehlikeli mi? Memede iyi huylu kitlelerin takibi ve ameliyatı hakkında bilgiler.",
      lede: "Memede kitle hissetmek çok korkutucudur. Ama şunu baştan bilin: 30 yaş altı kadınlarda ele gelen kitlelerin %90'ı iyi huyludur. Yine de her yeni kitle muayene edilmelidir.",
      img: '/img/cizim-fibroadenom.jpg',
      imgAlt: 'Meme kesitinde fibroadenomu gösteren çizim',
      quickFacts: [
        { label: '30 yaş altında', value: "Kitlelerin %90'ı iyi huylu" },
        { label: 'En sık iyi huylu tümör', value: 'Fibroadenom' },
        { label: 'Görüldüğü yaş', value: '15-35 arası' },
        { label: 'Kesin tanı', value: 'Ultrason ve gerekirse biyopsi' },
      ],
      ctaBox: {
        title: 'Elinizde bir ultrason var mı?',
        text: 'Daha önce çekilmiş ultrason ya da mamografinizi görüşmeye getirin. Kitlenin büyüyüp büyümediğini karşılaştırarak anlamak en güvenilir yoldur.',
      },
      related: [
        {
          key: 'kist',
          title: 'Meme Kistleri',
          text: 'Ele gelen her kitle katı değildir; kistler sıvı doludur.',
        },
        {
          key: 'agri',
          title: 'Meme Ağrısı',
          text: 'Kitleye ağrı eşlik ediyorsa ne anlama gelir.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri Nedir',
          text: 'Hangi kitle özellikleri araştırma gerektirir.',
        },
      ],
      band: {
        title: 'Kitleyi bekletmeyin, baktırın',
        text: 'Muayene ve ultrason çoğu zaman aynı gün sonuç verir. İyi huylu olduğunu öğrenmek için haftalarca tedirgin olmanız gerekmiyor.',
      },
      indexBody:
        'Fibroadenom nedir, hangi kitleler takip edilir, hangileri çıkarılır ve tanı nasıl konur.',
      indexWhen:
        'Yeni fark ettiğiniz, sert, hareketi kısıtlı bir kitle varsa ya da eskiden beri bildiğiniz kitle büyüdüyse başvurun.',
      sections: [
        {
          h2: 'Fibroadenom nedir',
          blocks: [
            {
              kind: 'p',
              text: 'Fibroadenom, memenin en sık görülen iyi huylu tümörüdür. Genellikle 15-35 yaş arası genç kadınlarda ortaya çıkar.',
            },
            {
              kind: 'p',
              text: 'Tipik olarak 1-3 santimetre boyutunda, lastik kıvamında, yuvarlak ve parmaklar arasında kolayca kayan hareketli bir kitledir. Hormonlara duyarlıdır; gebelikte büyüyebilir.',
            },
          ],
        },
        {
          h2: 'Her kitle alınmalı mı',
          blocks: [
            {
              kind: 'p',
              text: 'Hayır. Ultrason ve gerektiğinde biyopsi ile fibroadenom olduğu kesinleşmiş, küçük ve büyüme göstermeyen bir kitlede yıllık ultrason takibi yeterlidir.',
            },
            {
              kind: 'p',
              text: 'Çıkarılmasını önerdiğimiz durumlar sınırlıdır:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'Hızla büyüyorsa' },
                { text: 'Boyutu kişiyi rahatsız edecek düzeydeyse' },
                { text: 'Biyopside şüpheli bir bulgu varsa (filloides tümör şüphesi)' },
                { text: 'Hastanın endişesi takiple giderilemiyorsa' },
              ],
            },
          ],
        },
        {
          h2: 'Tanı nasıl konur',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Muayene',
                  v: 'Kitlenin kıvamı, hareketliliği ve sınırları elle değerlendirilir.',
                },
                {
                  k: 'Ultrason',
                  v: 'Genç yaşta ilk tercihtir; kitlenin katı mı kistik mi olduğunu ayırır.',
                },
                {
                  k: 'Gerekirse biyopsi',
                  v: 'Şüpheli görünümde iğneyle alınan küçük bir parça kesin tanıyı verir.',
                },
              ],
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-kistleri',
      key: 'kist',
      group: 'hastalik',
      no: '08',
      title: 'Meme kistleri',
      crumb: 'Meme kistleri',
      navTitle: 'Meme Kistleri',
      seoTitle: 'Antalya Meme Kisti Tehlikeli mi? Kist Tedavisi ve Takibi',
      meta: 'Memede kist neden oluşur? Antalya meme kisti belirtileri, basit ve kompleks kist farkı ve tedavi yöntemleri. Prof. Dr. Burhan Mayir.',
      lede: 'Meme kistleri içi sıvı dolu keseciklerdir ve kadınların yaklaşık yarısında hayatın bir döneminde görülür. Özellikle 30-50 yaş arasında çok sıktır.',
      img: '/img/cizim-meme-kisti.jpg',
      imgAlt: 'Meme kesitinde süt kanalları arasındaki kistleri gösteren çizim',
      quickFacts: [
        { label: 'Ne sıklıkta', value: 'Kadınların yaklaşık yarısında' },
        { label: 'En sık yaş', value: '30-50 arası' },
        { label: 'Ayrımı yapan', value: 'Meme ultrasonu' },
        { label: 'Basit kist', value: 'Kansere dönüşmez' },
      ],
      ctaBox: {
        title: 'Kistiniz ağrı mı yapıyor?',
        text: 'Gergin bir kist ağrının kaynağı olabilir. Gerekirse iğneyle boşaltmak hem rahatlatır hem de içeriğin incelenmesini sağlar.',
      },
      related: [
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Katı kitleler kistlerden farklı değerlendirilir.',
        },
        {
          key: 'agri',
          title: 'Meme Ağrısı',
          text: 'Fibrokistik yapıda ağrı daha sık görülür.',
        },
        {
          key: 'akinti',
          title: 'Meme Başı Akıntısı',
          text: 'Akıntı eşlik ediyorsa ayrı değerlendirme gerekir.',
        },
      ],
      band: {
        title: 'Kist mi, başka bir şey mi?',
        text: 'Bu ayrım muayeneyle değil ultrasonla yapılır. Tek bir görüntüleme çoğu zaman bütün soruyu kapatır.',
      },
      indexBody:
        'Basit ve kompleks kist ayrımı, fibrokistik meme yapısının ne anlama geldiği ve takip düzeni.',
      indexWhen:
        'Aniden ortaya çıkan gergin ve ağrılı bir şişlik ya da ultrasonda "kompleks kist" denen bir bulgu varsa başvurun.',
      sections: [
        {
          h2: 'Basit kist mi, kompleks kist mi',
          blocks: [
            {
              kind: 'p',
              text: 'Bu ayrım çok önemlidir ve yalnızca meme ultrasonu ile yapılır. Elle muayene basit ile kompleksi ayırmaya yetmez.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Basit kist',
                  v: 'İçi tamamen sıvı dolu, duvarı ince kistlerdir. Tamamen iyi huyludur, kansere dönüşmez ve kanser riskini artırmaz. Genellikle tedavi gerektirmez; çok büyükse ve ağrı yapıyorsa enjektörle boşaltılabilir.',
                },
                {
                  k: 'Kompleks kist',
                  v: 'İçinde katı alan bulunan ya da duvarı kalınlaşmış kistlerdir. Yakın takip, bazı durumlarda da biyopsi gerektirir.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Fibrokistik meme nedir',
          blocks: [
            {
              kind: 'p',
              text: 'Çok sayıda kistiniz varsa buna fibrokistik meme denir. Bu bir hastalık değil, memenin yapısıdır ve kanser riskini artırmaz.',
            },
            {
              kind: 'p',
              text: 'Ancak muayeneyi ve mamografinin yorumlanmasını zorlaştırdığı için düzenli ultrason takibi önem kazanır. Takvimi birlikte belirleriz.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-basi-akintisi',
      key: 'akinti',
      group: 'hastalik',
      no: '09',
      title: 'Meme başı akıntısı',
      crumb: 'Meme başı akıntısı',
      navTitle: 'Meme Başı Akıntısı',
      seoTitle: 'Antalya Meme Başı Akıntısı Neden Olur? Kanlı Akıntı Tedavisi',
      meta: 'Memeden akıntı gelmesi tehlikeli mi? Antalya meme başı akıntısı nedenleri, kanlı akıntı ve tedavi seçenekleri. Prof. Dr. Burhan Mayir.',
      lede: 'Meme başı akıntısı, kadınları en çok endişelendiren şikâyetlerden biridir. Değerlendirmede belirleyici olan akıntının miktarı değil, karakteridir.',
      img: '/img/blog-patoloji.jpg',
      imgAlt: 'Görüşme odasının genel görünümü',
      quickFacts: [
        { label: 'Belirleyici olan', value: 'Rengi ve tek kanaldan gelmesi' },
        { label: 'Tehlikesiz tip', value: 'İki memeden, sıkmakla gelen' },
        { label: 'Araştırılması gereken', value: 'Tek taraflı, kendiliğinden, kanlı' },
        { label: 'En sık neden', value: 'İntraduktal papillom' },
      ],
      ctaBox: {
        title: 'Akıntının rengini not edin',
        text: 'Akıntının rengi, tek memeden mi geldiği ve kendiliğinden mi olduğu tanıyı büyük ölçüde belirler. Görüşmeye bu bilgilerle gelin.',
      },
      related: [
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Akıntıya kitle eşlik ediyor mu.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri Nedir',
          text: 'Kanlı akıntı nadiren kanser belirtisi olabilir.',
        },
        {
          key: 'mastit',
          title: 'Meme İltihabı ve Apse',
          text: 'İltihaplı tabloda irinli akıntı görülebilir.',
        },
      ],
      band: {
        title: 'Kanlı akıntıyı bekletmeyin',
        text: 'Tek memeden kendiliğinden gelen kanlı akıntı, sonucu çoğunlukla iyi huylu çıksa da araştırılması gereken bir bulgudur.',
      },
      indexBody:
        'Hangi akıntı tehlikesizdir, hangisi araştırma gerektirir ve tedavi nasıl planlanır.',
      indexWhen:
        'Tek memeden, tek kanaldan, sıkmadan gelen kanlı ya da berrak akıntı varsa vakit kaybetmeden başvurun.',
      sections: [
        {
          h2: 'Tehlikesiz akıntılar hangileridir',
          blocks: [
            {
              kind: 'p',
              text: 'Her iki memeden, çok sayıda kanaldan gelen, ancak sıkmakla ortaya çıkan beyaz, sarı veya yeşil akıntılar genellikle hormonal kaynaklıdır. Prolaktin yüksekliği ve tiroit bozuklukları bu tablonun sık nedenleridir ve kanserle ilişkisi nadirdir.',
            },
          ],
        },
        {
          h2: 'Araştırılması gereken akıntı',
          blocks: [
            {
              kind: 'p',
              text: 'Tek memeden, tek bir kanaldan, kendiliğinden — yani sıkmadan — gelen akıntı farklı değerlendirilir. Özellikle kanlı, berrak suya benzer ya da kahverengi akıntı mutlaka araştırılmalıdır.',
            },
            {
              kind: 'p',
              text: 'Bu tip akıntının en sık nedeni intraduktal papillomdur: meme kanalının içinde gelişen, siğil benzeri iyi huylu bir oluşum. Nadiren kanser de ilk belirtisini bu şekilde verebilir.',
            },
          ],
        },
        {
          h2: 'Tanı ve tedavi',
          blocks: [
            {
              kind: 'p',
              text: 'Değerlendirmede muayenenin yanı sıra ultrason ve yaşa göre mamografi kullanılır; bazı hastalarda ek görüntüleme gerekebilir.',
            },
            {
              kind: 'p',
              text: 'Tedavi, akıntının geldiği kanalın küçük bir kesiyle çıkarılmasıdır. Bu işlem hem tanı hem de tedavi anlamına gelir: çıkarılan doku patolojiye gönderilir ve akıntı da sonlanır.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'meme-iltihabi-mastit',
      key: 'mastit',
      group: 'hastalik',
      no: '10',
      title: 'Meme iltihabı, apse ve mastit',
      crumb: 'Meme iltihabı',
      navTitle: 'Meme İltihabı — Mastit',
      seoTitle: 'Antalya Meme İltihabı ve Meme Apsesi Tedavisi | Mastit',
      meta: "Antalya'da emziren annelerde mastit, meme iltihabı ve meme apsesi belirtileri ve tedavisi. Meme apsesi nasıl boşaltılır? Prof. Dr. Burhan Mayir.",
      lede: 'Mastit, meme dokusunun iltihaplanmasıdır. En sık emziren annelerde, sütün kanalda birikmesi ve meme başındaki çatlaklardan mikrop girmesiyle ortaya çıkar.',
      img: '/img/blog-emzirme.jpg',
      imgAlt: 'Görüşme odasının pencere tarafı',
      quickFacts: [
        { label: 'En sık kimde', value: 'Emziren annelerde' },
        { label: 'Belirtileri', value: 'Kızarıklık, şiddetli ağrı, ateş' },
        { label: 'En büyük yanlış', value: 'Emzirmeyi kesmek' },
        { label: 'Erken tedavide', value: 'Çoğu hasta 48 saatte düzelir' },
      ],
      ctaBox: {
        title: 'Emzirirken ateşiniz mi çıktı?',
        text: 'Mastitte erken başvuru apseye dönüşmeyi engeller. Emzirmeyi kesmeden, aynı gün değerlendirilmeniz en doğrusu.',
      },
      related: [
        {
          key: 'granulomatoz',
          title: 'Granülomatöz Mastit',
          text: 'Geçmeyen, tekrarlayan iltihap tablosu.',
        },
        {
          key: 'agri',
          title: 'Meme Ağrısı',
          text: 'İltihap dışı ağrı nedenleri.',
        },
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'İltihap geçtikten sonra kalan sertlik.',
        },
      ],
      band: {
        title: 'Emzirmeyi kesmeden çözelim',
        text: 'Mastitte sütün boşalması tedavinin parçasıdır. Doğru emzirme desteğiyle birlikte ilaç tedavisi çoğu hastada hızla sonuç verir.',
      },
      indexBody:
        'Emziren annelerde mastit ve apse, doğru tedavi sırası ve emzirmeyen kadınlarda tekrarlayan apseler.',
      indexWhen:
        'Memede kızarıklık, şiddetli ağrı ve ateş varsa; ya da iltihap tedaviye rağmen 48 saatte gerilemiyorsa başvurun.',
      sections: [
        {
          h2: 'Emziren annelerde mastit ve apse',
          blocks: [
            {
              kind: 'p',
              text: 'Mastit, memede kızarıklık, şiddetli ağrı, ateş ve grip benzeri halsizlik yapar. Tablo genellikle hızlı başlar ve anneyi ciddi biçimde yorar.',
            },
            {
              kind: 'p',
              text: 'Geç kalınırsa meme içinde irin birikir ve meme apsesi gelişir. Bu noktada tek başına antibiyotik yetmez, apsenin boşaltılması gerekir.',
            },
          ],
        },
        {
          h2: 'Mastit nasıl tedavi edilir',
          blocks: [
            {
              kind: 'p',
              text: 'En büyük yanlış emzirmeyi kesmektir. Tam tersine, sütün boşalması gerekir; süt kanalda kaldıkça iltihap beslenir.',
            },
            {
              kind: 'steps',
              items: [
                {
                  k: 'Erken dönem',
                  v: 'Antibiyotik, ağrı kesici, sıcak kompres ve doğru emzirme danışmanlığı ile hastaların büyük bölümü 48 saatte düzelir.',
                },
                {
                  k: 'Apse geliştiyse',
                  v: 'Artık büyük kesiler yerine ultrason eşliğinde iğneyle boşaltma ya da küçük bir kesiyle drenaj yapıyoruz.',
                },
                {
                  k: 'Sonrasında',
                  v: 'Apse boşaltıldıktan sonra da emzirmeye devam edilebilir; bu, iyileşmeyi hızlandırır.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Emzirmeyen kadınlarda iltihap',
          blocks: [
            {
              kind: 'p',
              text: 'Emzirmeyen kadınlarda da meme iltihabı görülebilir. Özellikle sigara içenlerde meme başı altındaki kanallarda tekrarlayan apseler ortaya çıkabilir.',
            },
            {
              kind: 'p',
              text: 'Bu tabloda tekrarları önlemek için iltihabın kaynağındaki kanal dokusunun ele alınması gerekebilir. Sigaranın bırakılması tedavinin ayrılmaz parçasıdır.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'granulomatoz-mastit',
      key: 'granulomatoz',
      group: 'hastalik',
      no: '11',
      title: 'Granülomatöz mastit',
      crumb: 'Granülomatöz mastit',
      navTitle: 'Granülomatöz Mastit',
      seoTitle: 'Antalya Granülomatöz Mastit Nedir? Tedavisi ve Ameliyatı',
      meta: 'Geçmeyen meme iltihabı granülomatöz mastit olabilir. Antalya granülomatöz mastit belirtileri, yanlış kanser teşhisi ve güncel tedavi yöntemleri.',
      lede: 'Granülomatöz mastit, en çok kanserle karıştırılan meme hastalığıdır. Mikrobik değildir; vücudun kendi meme dokusuna karşı verdiği kronik bir iltihaptır.',
      img: '/img/konu-iyi-huylu.jpg',
      imgAlt: 'Muayene odasındaki lavabo ve boy-kilo ölçer',
      quickFacts: [
        { label: 'Kanser mi', value: 'Değil — ama görüntüde kanseri taklit eder' },
        { label: 'Kimde görülür', value: 'Genellikle 30-40 yaş, doğum yapmış kadınlar' },
        { label: 'Kesin tanı', value: 'Tru-cut biyopsi' },
        { label: 'Tedavi süresi', value: '6 ay - 1 yıl, ama tamamen iyileşir' },
      ],
      ctaBox: {
        title: 'Geçmeyen bir iltihabınız mı var?',
        text: 'Aylardır düzelmeyen, tekrarlayan meme iltihabı granülomatöz mastit olabilir. Elinizdeki biyopsi ve görüntüleme sonuçlarını getirin.',
      },
      related: [
        {
          key: 'mastit',
          title: 'Meme İltihabı ve Apse',
          text: 'Mikrobik iltihaptan farkı nedir.',
        },
        {
          key: 'kitle',
          title: 'Memede Kitle ve Fibroadenom',
          text: 'Sert kitle her zaman tümör anlamına gelmez.',
        },
        {
          key: 'meme-kanseri',
          title: 'Meme Kanseri Nedir',
          text: 'Ayırıcı tanıda neden karışabiliyor.',
        },
      ],
      band: {
        title: 'Gereksiz ameliyattan kaçınmak mümkün',
        text: 'Bu hastalıkta geniş cerrahi çoğu zaman tabloyu kötüleştirir. Doğru tanı ve sabırlı bir tedavi planı, ameliyatsız iyileşmeyi mümkün kılıyor.',
      },
      indexBody:
        'Kanserle neden karıştığı, kesin tanının nasıl konduğu ve güncel tedavi yaklaşımı.',
      indexWhen:
        'Tekrarlayan meme iltihabınız, akıntı yapan delikler ya da antibiyotiğe rağmen geçmeyen sert bir kitleniz varsa başvurun.',
      sections: [
        {
          h2: 'Kanserle karışır mı',
          blocks: [
            {
              kind: 'p',
              text: 'Granülomatöz mastit kanser değildir. Ancak hem muayenede hem ultrasonda hem de mamografide kanseri çok yakından taklit eder. Bu yüzden hastalar aylarca yanlış tanı alabiliyor.',
            },
            {
              kind: 'p',
              text: 'Genellikle 30-40 yaşlarında, doğum yapmış ve emzirmiş kadınlarda görülür. Memede kızarıklık, sert kitle, apseleşme, akıntı yapan delikler ve bir türlü iyileşmeyen bir iltihap tablosu vardır. Sık sık tekrarlar.',
            },
          ],
        },
        {
          h2: 'Tanısı ve tedavisi',
          blocks: [
            {
              kind: 'p',
              text: 'Kesin tanı yalnızca tru-cut biyopsi ile konur. Tedavi ise sabır ister. Eskiden hemen ameliyat önerilirdi; bugün biliyoruz ki gereksiz ve geniş ameliyatlar hastalığı daha da kötüleştiriyor.',
            },
            {
              kind: 'steps',
              items: [
                {
                  k: 'İlaç tedavisi',
                  v: 'Kortizon ve bağışıklık düzenleyici ilaçlar tedavinin temelini oluşturur.',
                },
                {
                  k: 'Gerekirse drenaj',
                  v: 'Apse geliştiyse ultrason eşliğinde boşaltılır.',
                },
                {
                  k: 'Dirençli vakalarda',
                  v: 'Çok dirençli hastalarda sınırlı cerrahi gündeme gelir; geniş ameliyattan kaçınılır.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Bu hastalıkta deneyimli bir hekimin takibi önemlidir. Tedavi 6 ay ile 1 yıl arasında sürebilir, ancak tamamen iyileşir.',
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
