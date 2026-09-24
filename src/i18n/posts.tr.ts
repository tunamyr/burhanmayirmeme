import type { Post } from './blocks.ts';

/** Türkçe bilgi yazıları: kart bilgileri ve yazı gövdeleri. */
export const POSTS_TR: Post[] = [
  {
    slug: 'mamografiye-kac-yasinda-baslanmali',
    tag: 'Tarama',
    read: '4 dk okuma',
    img: '/img/blog-mamografi.jpg',
    alt: 'Görüşme odası: çalışma masası ve oturma alanı',
    title: 'Mamografiye kaç yaşında başlanmalı?',
    excerpt:
      'Genel öneri kırk yaş; ancak ailesinde meme kanseri öyküsü olanlarda program daha erken başlar. Hangi durumda hangi aralık geçerli.',
    short: 'Risk grubunuza göre tarama sıklığı ve hangi yöntemin ne zaman kullanıldığı.',
    sections: [
      {
        h2: 'Genel kural: kırk yaş',
        blocks: [
          {
            kind: 'p',
            text: 'Şikâyeti olmayan kadınlarda taramanın amacı, hastalığı hasta fark etmeden önce yakalamaktır. Bu yüzden tarama, bir şey hissettiğiniz için değil, hiçbir şey hissetmediğiniz için yapılır.',
          },
          {
            kind: 'p',
            text: 'Ortalama riskli kadınlarda kırk yaşından itibaren yılda bir mamografi genel kabul gören yaklaşımdır. Bazı ülkelerde program elli yaşta ve iki yılda bir olacak şekilde uygulanır; bu farklılık bilimsel bir çelişkiden değil, ülkelerin sağlık sistemlerinin önceliklerinden kaynaklanır.',
          },
          {
            kind: 'p',
            text: 'Üst sınır konusunda da tek bir rakam yoktur. Genel sağlık durumu iyi olan ve beklenen yaşam süresi on yılın üzerinde olan kadınlarda tarama sürdürülür.',
          },
        ],
      },
      {
        h2: 'Daha erken başlaması gereken durumlar',
        blocks: [
          {
            kind: 'p',
            text: 'Aşağıdaki durumlarda tarama daha erken başlar ve bazen mamografiye MR eklenir. Doğru programı öykünüzü dinledikten sonra birlikte belirliyoruz.',
          },
          {
            kind: 'ul',
            items: [
              {
                text: 'Birinci derece akrabasında (anne, kız kardeş, kız çocuk) meme kanseri olanlar — genellikle o kişinin tanı yaşından on yıl önce başlanır',
              },
              { text: 'Ailesinde yumurtalık kanseri ya da erkek meme kanseri öyküsü olanlar' },
              { text: 'BRCA1 / BRCA2 gibi bir gen değişikliği taşıdığı bilinenler' },
              { text: 'Otuz yaşından önce göğüs bölgesine ışın tedavisi almış olanlar' },
              { text: 'Daha önce meme kanseri ya da riski artıran bir patoloji tanısı almış olanlar' },
            ],
          },
        ],
      },
      {
        h2: 'Hangi yöntem ne zaman kullanılır',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Mamografi',
                v: 'Taramanın temeli. Elle hissedilmeyen milimetrik kireçlenmeleri gösterebildiği için erken tanıda yeri başka hiçbir yöntemle doldurulmaz. Kırk yaş üzerinde ilk sırada gelir.',
              },
              {
                k: 'Ultrason',
                v: 'Genç ve yoğun meme dokusunda mamografinin göremediği alanları tamamlar. Kitlenin içi sıvı mı katı mı, bunu en hızlı ultrason söyler. Tek başına tarama yöntemi değildir.',
              },
              {
                k: 'Meme MR',
                v: 'Yüksek riskli gruba ve seçilmiş durumlara ayrılmıştır. Duyarlılığı yüksektir; buna karşılık zararsız bulguları da gösterdiği için gereksiz biyopsiye yol açabilir. Bu yüzden herkese önerilmez.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Yoğun meme dokusu, mamografi raporunda sık geçen bir ifadedir ve bir hastalık değildir. Yalnızca görüntülemenin zorlaştığı anlamına gelir; bu durumda ultrasonun eklenmesi gündeme gelir.',
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
                q: 'Mamografinin radyasyonu zararlı değil mi?',
                a: 'Bir mamografide alınan doz çok düşüktür; birkaç aylık doğal ortam radyasyonuna denk gelir. Erken tanının sağladığı yarar, bu düzeydeki riskin çok üzerindedir.',
              },
              {
                q: 'Çok ağrılı olduğunu duydum, doğru mu?',
                a: 'Çekim sırasında memenin sıkıştırılması birkaç saniye sürer ve rahatsızlık verebilir. Adet döneminin hemen ardından yaptırmak, memeler daha az hassas olduğu için işlemi kolaylaştırır.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Tarama sonucunuzda bir şüphe belirtilmişse bu, kanser olduğunuz anlamına gelmez. Geri çağrılan kadınların büyük bölümünde ek görüntülemeyle durum netleşir ve sonuç iyi huylu çıkar.',
          },
        ],
      },
    ],
  },

  {
    slug: 'memede-kitle-hissettim',
    tag: 'Ne yapmalı',
    read: '5 dk okuma',
    img: '/img/stok-gorusme.jpg',
    alt: 'Muayenehanede hekim ve hasta görüşmesi',
    title: 'Memede kitle hissettim, sırada ne var?',
    excerpt:
      'İlk muayeneden patoloji sonucuna kadar izlenen adımlar, her adımın ne kadar sürdüğü ve hangi noktada karar verildiği.',
    short: 'İlk muayeneden patoloji sonucuna kadar izlenen adımlar ve geçen süre.',
    sections: [
      {
        h2: 'Önce şunu bilin',
        blocks: [
          {
            kind: 'p',
            text: 'Memede ele gelen kitlelerin büyük bölümü iyi huyludur. Özellikle kırk yaş altında fibroadenom ve kist, kanserden çok daha sık görülür. Yine de hangisinin hangisi olduğu, elle muayeneyle kesin olarak ayrılamaz.',
          },
          {
            kind: 'p',
            text: 'Bu yüzden doğru tepki ne panik ne de beklemektir. Bir haftalık bir randevu, çoğu zaman aylarca sürecek bir tedirginliği sonlandırır.',
          },
        ],
      },
      {
        h2: 'Süreç adım adım',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'Muayene',
                v: 'Her iki meme ve koltuk altı elle değerlendirilir. Kitlenin ne zaman fark edildiği, boyut değiştirip değiştirmediği, adet döngüsüyle ilişkisi ve aile öyküsü kaydedilir. Bu görüşme 15–20 dakika sürer.',
              },
              {
                k: 'Görüntüleme',
                v: 'Genç yaşta ultrason, kırk yaş üzerinde mamografi ve ultrason birlikte istenir. Çoğu merkezde aynı gün yapılabilir. Kitlenin sıvı mı katı mı olduğu bu aşamada netleşir.',
              },
              {
                k: 'Biyopsi',
                v: 'Görüntülemede şüpheli görünen kitlelerden iğne ile parça alınır. Lokal anestezi altında yapılır, yaklaşık 15 dakika sürer ve genellikle ağrılı değildir. Aynı gün evinize gidersiniz.',
              },
              {
                k: 'Patoloji',
                v: 'Alınan doku patoloji laboratuvarında incelenir. Sonuç genellikle 3–7 gün içinde çıkar. Kanser saptanırsa hormon reseptörleri ve HER2 durumu da aynı raporda bildirilir.',
              },
              {
                k: 'Karar',
                v: 'Sonuç birlikte okunur. İyi huyluysa takip planı yapılır; kanser saptanırsa cerrahi ve gerekiyorsa onkoloji tedavisinin sırası belirlenir.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Tüm süreç, aksatılmadığında bir ile iki hafta içinde tamamlanır. Bu süre, tedavinin sonucunu etkileyecek bir gecikme değildir; ancak aylarca ertelemek farklı bir şeydir.',
          },
        ],
      },
      {
        h2: 'Beklemeden başvurmanız gereken bulgular',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'Sert, sınırları belirsiz ve parmaklar altında kaymayan bir kitle' },
              { text: 'Kitlenin üzerindeki deride çekilme, kalınlaşma ya da portakal kabuğu görünümü' },
              { text: 'Meme başında yeni gelişen içe çekilme veya geçmeyen kabuklanma' },
              { text: 'Kendiliğinden gelen, tek taraflı ve kanlı meme başı akıntısı' },
              { text: 'Koltuk altında ele gelen, geçmeyen sertlik' },
              { text: 'Emzirme dönemi dışında memede kızarıklık, ısı artışı ve şişlik' },
            ],
          },
          {
            kind: 'p',
            text: 'Görüşmeye gelirken varsa eski mamografi, ultrason ve MR görüntülerinizi getirin. Bir önceki tetkikle karşılaştırma, çoğu zaman tek başına yeni bir tetkikten daha çok şey söyler.',
          },
        ],
      },
    ],
  },

  {
    slug: 'meme-koruyucu-cerrahi-kimlere-uygun',
    tag: 'Cerrahi',
    read: '6 dk okuma',
    img: '/img/blog-koruyucu-cerrahi.jpg',
    alt: 'Çalışma masası ve duvardaki diplomalar',
    title: 'Meme koruyucu cerrahi kimlere uygundur?',
    excerpt:
      'Tümörün boyutu, memedeki yerleşimi ve meme hacmiyle oranı kararı belirler. Işın tedavisinin neden ayrılmaz bir parça olduğu.',
    short: 'Tümörün boyutu, yerleşimi ve meme hacmi kararı nasıl etkiler.',
    sections: [
      {
        h2: 'Kararı belirleyen ölçüt: oran',
        blocks: [
          {
            kind: 'p',
            text: 'Meme koruyucu cerrahide tümör, çevresinde sağlam bir doku sınırıyla birlikte çıkarılır; memenin geri kalanı yerinde kalır. Uygun hastalarda bu yöntemle memenin tamamının alınması arasında yaşam süresi açısından fark gösterilmemiştir. Yani koruyucu cerrahi, güvenlikten ödün vermek anlamına gelmez.',
          },
          {
            kind: 'p',
            text: 'Kararı belirleyen şey tümörün santimetre cinsinden boyutu değil, boyutun meme hacmine oranıdır. Küçük bir memede üç santimetrelik bir tümör sorun yaratırken, büyük bir memede aynı tümör rahatlıkla çıkarılabilir.',
          },
          {
            kind: 'ul',
            items: [
              { text: 'Tümörün boyutu ve memedeki yerleşimi' },
              { text: 'Tümörün tek odakta mı yoksa birden fazla odakta mı olduğu' },
              { text: 'Meme hacmi ve mevcut sarkma derecesi' },
              { text: 'Ameliyat sonrası ışın tedavisi alabilecek durumda olup olmadığınız' },
              { text: 'Görünüme dair beklentileriniz' },
            ],
          },
        ],
      },
      {
        h2: 'Koruyucu cerrahinin uygun olmadığı durumlar',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Birden fazla odak',
                v: 'Tümör memenin farklı bölgelerinde birden çok odak halindeyse, hepsini temiz sınırla çıkarmak memede kabul edilemez bir şekil bozukluğu bırakır.',
              },
              {
                k: 'Temiz sınır sağlanamaması',
                v: 'Ameliyat sırasında ya da patoloji sonucunda cerrahi sınırda tümör hücresi görülmesi durumunda yeniden girişim gerekir. Bu tekrarlandığında memenin alınması daha güvenlidir.',
              },
              {
                k: 'Işın tedavisinin mümkün olmaması',
                v: 'Aynı memeye daha önce ışın uygulanmışsa ya da ışın tedavisini engelleyen bir durum varsa koruyucu cerrahi tercih edilmez.',
              },
              {
                k: 'Yaygın kireçlenme',
                v: 'Mamografide geniş bir alana yayılmış şüpheli mikrokalsifikasyonlar, hastalığın göründüğünden daha yaygın olduğunu gösterebilir.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Bu listedeki durumların bir kısmı kesin engel değildir. Örneğin büyük bir tümör, önce ilaç tedavisiyle küçültülerek koruyucu cerrahiye uygun hale getirilebilir. Onkoplastik tekniklerle de daha geniş doku çıkarmak ve memenin şeklini korumak mümkündür.',
          },
        ],
      },
      {
        h2: 'Işın tedavisi neden ayrılmaz bir parça',
        blocks: [
          {
            kind: 'p',
            text: 'Meme koruyucu cerrahiden sonra memede kalan dokuda mikroskobik hücrelerin bulunma ihtimali vardır. Işın tedavisi bu ihtimali hedef alır ve aynı memede hastalığın tekrarlama riskini belirgin biçimde azaltır.',
          },
          {
            kind: 'p',
            text: 'Bu yüzden ameliyat ile ışın tedavisi tek bir tedavi paketidir. Ameliyatı kabul edip ışın tedavisini planlamamak, koruyucu cerrahinin dayandığı temeli ortadan kaldırır. Işın tedavisini alamayacak durumdaysanız, en baştan mastektomiyi konuşmak daha doğrudur.',
          },
          {
            kind: 'p',
            text: 'Işın tedavisi genellikle ameliyattan birkaç hafta sonra başlar, kemoterapi gerekiyorsa onun ardına bırakılır ve çoğunlukla üç ile beş hafta sürer.',
          },
        ],
      },
      {
        h2: 'Sonuç ne zaman belli olur',
        blocks: [
          {
            kind: 'p',
            text: 'İlk haftalarda memede ödem, sertlik ve his farklılığı olağandır. Nihai şekil, ışın tedavisinin etkisiyle birlikte birkaç ay içinde oturur. Bu yüzden sonucu ilk aya bakarak değerlendirmiyoruz.',
          },
          {
            kind: 'p',
            text: 'Takip, ilk yıllarda altı aylık aralıklarla muayene ve yıllık görüntüleme ile sürer. Kontrollerinizi aynı yerde sürdürmeniz, görüntülerin karşılaştırılmasını kolaylaştırdığı için tercih edilir.',
          },
        ],
      },
    ],
  },

  {
    slug: 'kendi-kendine-meme-muayenesi',
    tag: 'Ne yapmalı',
    read: '3 dk okuma',
    img: '/img/blog-kendi-muayene.jpg',
    alt: 'Muayene odasındaki lavabo ve boy-kilo ölçer',
    title: 'Kendi kendine meme muayenesi nasıl yapılır?',
    excerpt:
      'Ayda bir, adet bitiminden birkaç gün sonra. Neye bakılır, ne hissedilirse hekime başvurmak gerekir.',
    sections: [
      {
        h2: 'Ne zaman yapılır',
        blocks: [
          {
            kind: 'p',
            text: 'Ayda bir kez yeterlidir. En uygun zaman, adet kanamasının bitiminden üç ile beş gün sonrasıdır; memeler bu dönemde en yumuşak ve en az hassas haldedir. Menopozdaki kadınlar ayın sabit bir gününü seçebilir.',
          },
          {
            kind: 'p',
            text: 'Amaç kanser aramak değil, kendi memenizin normalini tanımaktır. Neyin sizde her zaman böyle olduğunu bilen bir kadın, değişikliği çok daha erken fark eder.',
          },
        ],
      },
      {
        h2: 'Adım adım',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'Aynada',
                v: 'Kollar yanda serbestken iki memeye bakın. Boyut ve şekil farkı, deride çekilme, kızarıklık ya da meme başında içe dönme var mı diye gözleyin. Hafif asimetri çoğu kadında normaldir.',
              },
              {
                k: 'Kollar yukarıda',
                v: 'Ellerinizi başınızın üstüne kaldırın, sonra ellerinizi kalçanıza bastırarak göğüs kaslarını kasın. Deri çekintileri bu duruşlarda daha belirgin hale gelir.',
              },
              {
                k: 'Ayakta ya da duşta',
                v: 'Sabunlu el kayarak daha iyi hissettirir. Parmak uçlarınızın düz kısmıyla, küçük daireler çizerek memenin tamamını tarayın. Köprücük kemiğinden sütyen çizgisine, koltuk altından göğüs kemiğine kadar hiçbir bölge atlanmamalı.',
              },
              {
                k: 'Sırt üstü yatarak',
                v: 'Bir omuzun altına küçük bir yastık koyup aynı taraftaki kolu başınızın altına alın. Meme dokusu göğüs duvarına yayıldığı için derindeki kitleler bu pozisyonda daha kolay fark edilir.',
              },
              {
                k: 'Meme başı',
                v: 'Meme başını hafifçe sıkın. Kendiliğinden gelen, tek taraflı, tek kanaldan ve kanlı bir akıntı önemlidir; iki taraflı, sıkmakla gelen berrak ya da süt renkli akıntı genellikle önemsizdir.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Hangi bulguda hekime başvurmalı',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'Yeni fark edilen, sert ve hareketsiz bir kitle' },
              { text: 'Bir memede diğerinde olmayan, kalıcı bir sertlik ya da kalınlaşma' },
              { text: 'Deride çekilme, portakal kabuğu görünümü veya geçmeyen kızarıklık' },
              { text: 'Meme başında yeni gelişen içe çekilme ya da yara' },
              { text: 'Kanlı veya tek kanaldan kendiliğinden gelen akıntı' },
              { text: 'Koltuk altında ele gelen sertlik' },
            ],
          },
          {
            kind: 'p',
            text: 'Kendi kendine muayene, mamografinin yerine geçmez. Elle hissedilebilen en küçük kitle yaklaşık bir santimetredir; mamografi bunun çok altındaki değişiklikleri gösterebilir. İkisi birbirinin alternatifi değil, tamamlayıcısıdır.',
          },
        ],
      },
    ],
  },

  {
    slug: 'ameliyattan-sonra-hangi-tedaviler',
    tag: 'Tedavi',
    read: '5 dk okuma',
    img: '/img/blog-tedaviler.jpg',
    alt: 'Görüşme odasının oturma alanı',
    title: 'Ameliyattan sonra hangi tedaviler gerekebilir?',
    excerpt:
      'Işın tedavisi, hormon tedavisi ve kemoterapi hangi durumda gündeme gelir. Patoloji raporunun tedaviyi nasıl belirlediği.',
    sections: [
      {
        h2: 'Kararı patoloji raporu verir',
        blocks: [
          {
            kind: 'p',
            text: 'Ameliyat, tedavinin tamamı değil ilk adımıdır. Çıkarılan dokunun incelenmesiyle tümörün tipi, derecesi, boyutu, cerrahi sınırların durumu, lenf nodlarına yayılım olup olmadığı ve hormon reseptörleri ile HER2 durumu ortaya çıkar. Sonraki tedavi bu bilgilere göre planlanır.',
          },
          {
            kind: 'p',
            text: 'Aynı evredeki iki hastaya bu yüzden farklı tedaviler önerilebilir. Bu bir tutarsızlık değil; tümörün biyolojisinin evre kadar belirleyici olmasının sonucudur.',
          },
        ],
      },
      {
        h2: 'Gündeme gelebilecek tedaviler',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Işın tedavisi',
                v: 'Meme koruyucu cerrahi sonrasında neredeyse her hastada gerekir. Mastektomi sonrasında ise tümörün büyüklüğüne ve lenf nodu tutulumuna göre kararlaştırılır. Genellikle üç ile beş hafta sürer ve ayaktan uygulanır.',
              },
              {
                k: 'Hormon tedavisi',
                v: 'Tümör östrojen ya da progesteron reseptörü taşıyorsa uygulanır. Ağızdan alınan bir ilaçla, çoğunlukla beş yıl ya da daha uzun süre devam eder. Hastalığın geri dönme riskini belirgin biçimde azaltır.',
              },
              {
                k: 'Kemoterapi',
                v: 'Her hastaya gerekmez. Lenf nodu tutulumu, yüksek derece, genç yaş ve hormon reseptörü negatifliği gibi durumlarda gündeme gelir. Bazı hastalarda ameliyattan önce, tümörü küçültmek için verilir.',
              },
              {
                k: 'Hedefe yönelik tedavi',
                v: 'HER2 pozitif tümörlerde kullanılan akıllı ilaçlardır. Bu grubun seyrini son yirmi yılda en çok değiştiren gelişme budur; genellikle kemoterapiyle birlikte planlanır.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Sıralama ve süre',
        blocks: [
          {
            kind: 'p',
            text: 'Kemoterapi gerekiyorsa genellikle önce o uygulanır, ışın tedavisi sonrasına bırakılır. Hormon tedavisi ise ışın tedavisi bittikten sonra başlatılır ve yıllarca sürer. Bu sıralama hastadan hastaya değişebilir.',
          },
          {
            kind: 'p',
            text: 'Tedavi sürecini onkoloji ve radyasyon onkolojisi ile birlikte yürütüyoruz. Sizin tek bir muhatabınız olması için yönlendirmeyi ve takibi biz üstleniyoruz; hangi aşamada nereye gideceğinizi aramanız gerekmiyor.',
          },
        ],
      },
      {
        h2: 'Yan etkiler ve takip',
        blocks: [
          {
            kind: 'p',
            text: 'Her tedavinin kendine özgü yan etkileri vardır ve bunların çoğu yönetilebilir. Yan etkileri baştan bilmek, ortaya çıktığında paniklememenizi sağlar; bu yüzden tedaviye başlamadan önce hepsini tek tek konuşuyoruz.',
          },
          {
            kind: 'p',
            text: 'Tedavi tamamlandıktan sonra takip başlar: ilk yıllarda altı aylık muayene ve yıllık görüntüleme. Takibin amacı yalnızca nüksü aramak değil, tedavinin uzun dönem etkilerini de izlemektir.',
          },
        ],
      },
    ],
  },

  {
    slug: 'fibroadenom-cikarilmali-mi',
    tag: 'İyi huylu',
    read: '4 dk okuma',
    img: '/img/stok-ultrason.jpg',
    alt: 'Muayene odasında meme ultrasonu cihazı',
    title: 'Fibroadenom çıkarılmalı mı, izlenebilir mi?',
    excerpt:
      'Boyut, büyüme hızı ve görüntüleme bulguları kararı belirler. Hangi fibroadenomlar ultrasonla izlenebilir.',
    sections: [
      {
        h2: 'Fibroadenom nedir',
        blocks: [
          {
            kind: 'p',
            text: 'Fibroadenom, meme dokusunun normal yapı taşlarından oluşan iyi huylu bir kitledir. En sık yirmili ve otuzlu yaşlarda görülür. Elde yuvarlak, sınırları düzgün, kaygan ve ağrısız hissedilir; parmakla itildiğinde kayması tipik özelliğidir.',
          },
          {
            kind: 'p',
            text: 'Hormonlardan etkilenir: adet öncesi büyüyüp hassaslaşabilir, gebelikte büyüyebilir, menopozdan sonra küçülme eğilimindedir. Kansere dönüşmez.',
          },
        ],
      },
      {
        h2: 'İzlem mi, çıkarma mı',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'İzlenebilir',
                v: 'Ultrasonda tipik görünümlü, iki santimetreden küçük, büyümeyen ve şikâyet yaratmayan fibroadenomlar ameliyatsız izlenebilir. İlk yıl altı ayda bir, sonrasında yılda bir ultrason genellikle yeterlidir.',
              },
              {
                k: 'Çıkarılması önerilir',
                v: 'Hızla büyüyen, üç santimetreyi aşan, memenin şeklini bozan, ağrı veren ya da görüntülemede atipik özellikler gösteren fibroadenomlar çıkarılır. Kırk yaş üzerinde yeni ortaya çıkan bir kitle de daha dikkatli değerlendirilir.',
              },
              {
                k: 'Biyopsi gerekir',
                v: 'Ultrason bulguları tam tipik değilse, tanıyı izleme başlamadan önce iğne biyopsisiyle doğrulamak gerekir. İzlem kararı ancak tanı kesinleştikten sonra verilir.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Kararı yalnız hekim vermez. Kitlenin varlığından rahatsız olmak, her kontrolde tedirginlik yaşamak da geçerli bir gerekçedir ve bunu birlikte konuşuruz.',
          },
        ],
      },
      {
        h2: 'Nasıl çıkarılır',
        blocks: [
          {
            kind: 'p',
            text: 'Fibroadenom, çoğunlukla memenin doğal kıvrımlarına gizlenen küçük bir kesiyle çıkarılır. İşlem genellikle bir saatten kısa sürer, aynı gün taburcu olunur ve günlük hayata birkaç gün içinde dönülür. Çıkarılan doku her durumda patolojiye gönderilir.',
          },
          {
            kind: 'qa',
            items: [
              {
                q: 'Çıkarılırsa yeniden çıkar mı?',
                a: 'Aynı yerde tekrarlaması beklenmez; ancak memenin başka bir bölgesinde yeni bir fibroadenom gelişebilir. Bu, ameliyatın başarısız olduğu anlamına gelmez.',
              },
              {
                q: 'Emzirmeyi etkiler mi?',
                a: 'Standart bir fibroadenom ameliyatı süt kanallarını korur ve emzirmeyi engellemez. Meme başına çok yakın yerleşimli kitlelerde bu konuyu ameliyat öncesinde ayrıca konuşuyoruz.',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'emzirme-doneminde-meme-iltihabi',
    tag: 'İyi huylu',
    read: '4 dk okuma',
    img: '/img/blog-emzirme.jpg',
    alt: 'Görüşme odasının pencere tarafı',
    title: 'Emzirme döneminde meme iltihabı',
    excerpt:
      'Mastit çoğunlukla antibiyotikle geçer, emzirmeye devam edilir. Apse geliştiğinde ne yapılır.',
    sections: [
      {
        h2: 'Neden olur',
        blocks: [
          {
            kind: 'p',
            text: 'Emzirme döneminde görülen meme iltihabına mastit denir. En sık nedeni sütün yeterince boşalmamasıdır: kanalda biriken süt önce tıkanıklığa, ardından iltihaba yol açar. Meme ucundaki çatlaklar da bakterilerin girmesini kolaylaştırır.',
          },
          {
            kind: 'p',
            text: 'En çok doğumdan sonraki ilk üç ayda ve emzirme düzeninin değiştiği dönemlerde ortaya çıkar. Sık görülmesi, önemsiz olduğu anlamına gelmez; tedavi edilmezse apseye ilerleyebilir.',
          },
        ],
      },
      {
        h2: 'Belirtiler',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'Memenin bir bölgesinde kızarıklık, ısı artışı ve ağrı' },
              { text: 'Genellikle tek tarafta, elle hissedilen sert ve hassas bir alan' },
              { text: '38 derecenin üzerinde ateş, üşüme ve titreme' },
              { text: 'Grip benzeri yaygın halsizlik ve kırgınlık' },
            ],
          },
          {
            kind: 'p',
            text: 'Ateşin eşlik ettiği tabloda 12–24 saat içinde hekime başvurmak gerekir. Erken başlanan tedavi apse gelişmesini büyük ölçüde önler.',
          },
        ],
      },
      {
        h2: 'Tedavi',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'Boşaltmaya devam',
                v: 'Emzirmeyi kesmek tabloyu ağırlaştırır. Etkilenen memeden emzirmeye devam edilir, bebek almıyorsa süt pompayla boşaltılır. Süt bebek için zararlı değildir.',
              },
              {
                k: 'Antibiyotik',
                v: 'Emzirmeyle uyumlu bir antibiyotik başlanır ve süre tamamlanır. Şikâyetler iki üç günde geriler; ilacı erken bırakmak tekrarlamaya yol açar.',
              },
              {
                k: 'Ağrı ve ateş',
                v: 'Emzirme döneminde güvenli ağrı kesiciler kullanılabilir. Emzirmeden önce ılık uygulama boşalmayı kolaylaştırır, sonrasında soğuk uygulama ödemi azaltır.',
              },
              {
                k: 'Apse gelişirse',
                v: 'Antibiyotiğe rağmen 48–72 saatte düzelme yoksa ultrasonla apse aranır. Apse saptanırsa iğneyle boşaltılır; büyük apselerde küçük bir kesiyle drenaj gerekebilir.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Geçmeyen iltihap ihmal edilmemeli',
        blocks: [
          {
            kind: 'p',
            text: 'Emzirme dönemi dışında ortaya çıkan ya da tedaviye rağmen tekrarlayan meme iltihapları mutlaka araştırılmalıdır. Sigara içenlerde görülen kanal iltihabı bu tablonun sık bir nedenidir.',
          },
          {
            kind: 'p',
            text: 'Nadir de olsa, iltihabı taklit eden bir meme kanseri türü vardır. Bu yüzden uygun tedaviye rağmen düzelmeyen kızarıklık ve şişlikte görüntüleme, gerekirse deriden biyopsi yapılır. Amaç korkutmak değil, atlanmamasını sağlamaktır.',
          },
        ],
      },
    ],
  },

  {
    slug: 'patoloji-raporunuzu-nasil-okuyacaksiniz',
    tag: 'Tedavi',
    read: '7 dk okuma',
    img: '/img/blog-patoloji.jpg',
    alt: 'Görüşme odasının genel görünümü',
    title: 'Patoloji raporunuzu nasıl okuyacaksınız?',
    excerpt:
      'Tümör tipi, derece, cerrahi sınır, hormon reseptörleri ve HER2. Raporda geçen terimlerin gündelik dildeki karşılıkları.',
    sections: [
      {
        h2: 'Rapor neden bu kadar teknik',
        blocks: [
          {
            kind: 'p',
            text: 'Patoloji raporu hasta için değil, tedaviyi planlayan hekimler için yazılır. Bu yüzden içinde açıklama değil, ölçüm ve sınıflandırma bulunur. Raporu kendi başınıza okuduğunuzda anlamsız ya da ürkütücü görünmesi bundandır.',
          },
          {
            kind: 'p',
            text: 'Aşağıdaki başlıklar, raporunuzda en sık karşılaşacağınız satırların ne anlama geldiğini anlatıyor. Yine de kendi raporunuzu bunlarla yorumlamaya çalışmayın; sonucun bütünü, tek tek satırlardan farklı bir tablo ortaya koyabilir.',
          },
        ],
      },
      {
        h2: 'Satır satır ne anlatıyor',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Tümörün tipi',
                v: 'En sık görülen tip invaziv duktal karsinomdur; ikinci sırada invaziv lobüler karsinom gelir. "İn situ" ifadesi, hücrelerin kanalın içinde kaldığını ve çevre dokuya geçmediğini gösterir; bu erken bir durumdur.',
              },
              {
                k: 'Derece (grade)',
                v: 'Hücrelerin normal dokuya ne kadar benzediğini anlatır ve 1 ile 3 arasında verilir. Derece 1 yavaş seyirli, derece 3 daha hızlı bölünen bir tümör anlamına gelir. Evreyle karıştırılmamalıdır.',
              },
              {
                k: 'Boyut',
                v: 'Tümörün en büyük çapı milimetre olarak yazılır. Evrelemede kullanılan ölçü, görüntülemedeki değil patolojideki bu ölçüdür.',
              },
              {
                k: 'Cerrahi sınır',
                v: 'Çıkarılan dokunun kenarında tümör hücresi olup olmadığını bildirir. "Sınır negatif" ya da "sınırda tümör görülmedi" ifadesi istenen sonuçtur. Sınır pozitifse ek cerrahi gerekebilir.',
              },
              {
                k: 'Lenf nodları',
                v: 'Genellikle "0/3" gibi yazılır: çıkarılan üç lenf nodundan hiçbirinde tutulum yok demektir. Tutulan lenf nodu sayısı, ameliyat sonrası tedavinin kapsamını belirleyen en önemli başlıklardan biridir.',
              },
              {
                k: 'ER ve PR',
                v: 'Östrojen ve progesteron reseptörleri. Pozitif olmaları iyi bir haberdir: tümörün hormonlarla beslendiğini, dolayısıyla hormon tedavisinin işe yarayacağını gösterir.',
              },
              {
                k: 'HER2',
                v: 'Hücre yüzeyindeki bir proteindir. Pozitifse tümör daha hızlı seyredebilir; buna karşılık bu gruba özel hedefe yönelik ilaçlar vardır ve sonuçları belirgin biçimde iyileştirmiştir.',
              },
              {
                k: 'Ki-67',
                v: 'Bölünen hücrelerin yüzdesini gösterir; tümörün hızı hakkında fikir verir. Tek başına karar verdiren bir değer değildir, diğer başlıklarla birlikte okunur.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Raporun söylemediği şeyler',
        blocks: [
          {
            kind: 'p',
            text: 'Patoloji raporu bir tahmin değil, bir tanımlamadır. Ne kadar yaşayacağınızı ya da hastalığın geri dönüp dönmeyeceğini yazmaz. Bu soruların yanıtı; evre, biyoloji, uygulanan tedavi ve tedaviye verdiğiniz yanıtın bileşkesinde şekillenir.',
          },
          {
            kind: 'qa',
            items: [
              {
                q: 'İnternette raporumdaki terimleri arasam olmaz mı?',
                a: 'Arayabilirsiniz, ama çıkan istatistikler binlerce hastanın ortalamasıdır ve sizin tablonuzu anlatmaz. Aynı iki satır, farklı hastalarda farklı anlama gelebilir.',
              },
              {
                q: 'İkinci bir patoloji görüşü isteyebilir miyim?',
                a: 'Elbette. Preparatların başka bir merkezde yeniden değerlendirilmesi mümkündür ve bunu istemeniz doğal bir haktır; hazırlığında size yardımcı oluyoruz.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Raporunuzu görüşmeye getirin, satır satır birlikte okuyalım. Anlamadığınız bir yer kalmadan görüşmeden çıkmanız, sonraki adımları birlikte planlayabilmemizin ön şartı.',
          },
        ],
      },
    ],
  },
];
