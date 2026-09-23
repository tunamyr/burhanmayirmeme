import type { Dict } from './tr.ts';
import { POSTS_EN } from './posts.en.ts';

/** English dictionary. Mirrors the shape of TR exactly. */
export const EN: Dict = {
  code: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  label: 'English',
  short: 'EN',

  doctorName: 'Prof. Burhan Mayir, MD',
  brandName: 'Burhan Mayir',
  /** Marka bloğunun üst satırı — unvan. */
  brandPre: 'Prof.',
  cityLabel: 'Antalya',
  districtLabel: 'Muratpaşa',

  routes: {
    about: 'about',
    contact: 'contact',
    blog: 'blog',
  },

  nav: {
    kicker: 'Breast Health',
    home: 'Home',
    about: 'About',
    cancer: 'Breast Cancer',
    conditions: 'Breast Conditions',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Appointment',
    menuLabel: 'Main menu',
    openMenu: 'Open menu',
    skipToContent: 'Skip to content',
  },

  footer: {
    topicsHead: 'Topics',
    siteHead: 'Site',
    langHead: 'Language',
    home: 'Home',
    about: 'About',
    blog: 'Articles',
    contact: 'Contact and appointments',
    directions: 'Directions',
    note: 'The content on this site is for general information and does not replace an examination by a physician. If you have symptoms, please book an appointment.',
  },

  band: {
    kicker: 'Appointment',
    title: 'Let us go through your questions one by one',
    text: 'If you have a mammogram, ultrasound or pathology report, bringing it to the consultation speeds things up. Requests are answered during working hours.',
    cta: 'Request an appointment',
  },

  form: {
    name: 'Full name',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Briefly describe your situation',
    submit: 'Send appointment request',
    sending: 'Sending…',
    privacy: 'The details you share are used only to arrange your appointment and are not passed on to third parties.',
    okTitle: 'Request received',
    okText: 'We will call you shortly. If your situation is urgent, please call us directly.',
    failTitle: 'Your request could not be sent',
    failText:
      'The connection failed. If you send your request by phone or e-mail, we reply the same day.',
    subjects: [
      'Breast cancer',
      'Breast cancer surgery',
      'Breast-conserving surgery',
      'Oncoplastic breast surgery',
      'Breast reconstruction',
      'Benign breast conditions',
      'Second opinion',
      'Other',
    ],
  },

  common: {
    appointmentCta: 'Request an appointment',
    quickFacts: 'At a glance',
    relatedTopics: 'Related topics',
    whenToApply: 'When to seek care',
    readTopic: 'Read this topic →',
    breadcrumbLabel: 'You are here',
    breadcrumbHome: 'Home',
    breadcrumbTopics: 'Conditions',
    topicNo: 'Topic',
    phoneLabel: 'Phone',
    officeLabel: 'Practice',
    directions: 'Get directions',
    mapTitle: 'Practice location',
    addressNote: 'Opposite MarkAntalya shopping centre',
    statLabels: ['years of experience', 'scientific articles', 'congress presentations'],
  },

  home: {
    title: 'Prof. Burhan Mayir, MD — Breast Health | Antalya',
    description:
      'Prof. Burhan Mayir, MD: breast cancer surgery, oncoplastic and breast-conserving surgery, breast reconstruction and benign breast conditions. Antalya, Muratpaşa.',
    kicker: 'Antalya · Breast Conditions',
    h1: {
      pre: 'Beside you at ',
      em1: 'every step',
      mid: ' of treatment, with a plan ',
      em2: 'made for you',
      post: '.',
    },
    lede: 'We bring current treatment for breast cancer surgery, breast-conserving and oncoplastic surgery and benign breast conditions together with a plan shaped around each patient. What happens next is explained before it is done.',
    heroAlt: 'Prof. Burhan Mayir, MD at his practice in Antalya',
    topicsButton: 'Conditions',

    topicsTitle: 'What we treat',

    aboutKicker: 'About',
    aboutAlt: 'Prof. Burhan Mayir, MD at the desk in his practice',
    aboutParagraphs: [
      'He completed his medical training at Istanbul University Istanbul Faculty of Medicine (Çapa) and his residency in general surgery at Akdeniz University Faculty of Medicine. Between 2012 and 2019 he worked at Antalya Training and Research Hospital.',
      'Since 2023 he has seen patients at his private practice in Antalya. He has published more than 70 articles in peer-reviewed journals and presented more than 100 papers at national and international congresses.',
    ],
    aboutLink: 'Full curriculum vitae',
    creds: [
      { k: 'Title', v: 'Professor of Medicine' },
      { k: 'Specialty', v: 'General Surgery' },
      { k: 'Medical school', v: 'Istanbul Univ. — Çapa' },
      { k: 'Practice', v: 'Antalya' },
    ],

    postsTitle: 'Articles',
    postsAll: 'All articles',

    apptKicker: 'Appointment',
    apptTitle: 'Leave your details and we will call you',
    apptText:
      'Requests are answered during working hours. If you have a mammogram, ultrasound or pathology report, bringing it to the consultation speeds things up.',
  },

  about: {
    title: 'About — Prof. Burhan Mayir, MD',
    description:
      'The training, hospital appointments, academic work and consulting principles of Prof. Burhan Mayir, MD.',
    kicker: 'About',
    portraitAlt: 'Prof. Burhan Mayir, MD at the desk in his practice',
    standingAlt: 'Prof. Burhan Mayir, MD standing in his practice',
    lede: 'I am a general surgeon. For more than twenty-five years I have operated across the breadth of general surgery and pursued academic work in the same field. I see patients at my private practice in Antalya.',
    body: 'The way I work with patients rests on a single principle: the decision is made together. That requires explaining the options, their alternatives and the expected outcomes in plain language. A patient who knows what lies ahead starts treatment on stronger ground.',
    fieldsHead: 'Areas of interest',
    fields:
      'Breast cancer surgery · Breast-conserving surgery · Oncoplastic breast surgery · Breast reconstruction · Benign breast conditions · General surgery',

    timelineTitle: 'Training and appointments',
    timeline: [
      { year: '1978', title: 'Born', place: 'Istanbul' },
      {
        year: 'Secondary',
        title: 'Science high school',
        place: 'Bursa Anadolu Öğretmen Lisesi, science track',
      },
      {
        year: 'Medical school',
        title: 'Doctor of Medicine',
        place: 'Istanbul University Istanbul Faculty of Medicine (Çapa)',
      },
      {
        year: 'Residency',
        title: 'Specialist in General Surgery',
        place: 'Akdeniz University Faculty of Medicine',
      },
      {
        year: '2006 – 2012',
        title: 'General surgeon',
        place: 'Zonguldak Atatürk State Hospital',
      },
      {
        year: '2012 – 2019',
        title: 'General surgeon',
        place: 'Antalya Training and Research Hospital',
      },
      { year: '2019', title: 'Move to private practice', place: 'Left public service by own request' },
      { year: '2023 – present', title: 'Private practice', place: 'Antalya' },
    ],

    academicKicker: 'Academic work and memberships',
    academic: [
      { n: '70+', l: 'articles in peer-reviewed journals' },
      { n: '100+', l: 'congress presentations' },
      { n: '3', l: 'professional society memberships' },
      { n: 'Prof.', l: 'academic title' },
    ],
    academicText:
      'He has published more than 70 articles in national and international peer-reviewed journals and presented more than 100 papers at congresses. He has served as an invited speaker and session chair at many national and international meetings.',
    membershipsHead: 'Memberships',
    memberships: [
      'Turkish Surgical Society',
      'Turkish Society of Obesity Surgery (TOSS)',
      'International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)',
    ],

    principlesTitle: 'How we work at the practice',
    principles: [
      {
        k: 'One point of contact',
        v: 'The same physician follows the process from the first examination to the post-operative checks. You never have to work out whom to ask.',
      },
      {
        k: 'Plain language',
        v: 'We translate the terms in your report into everyday language. The aim is that you leave the consultation without a single line you did not understand.',
      },
      {
        k: 'The decision is yours',
        v: 'Options are presented with their alternatives and expected outcomes. We do not ask for consent given in haste.',
      },
      {
        k: 'Open to second opinions',
        v: 'Seeking another physician’s opinion is your right. We help you prepare the documents you need.',
      },
    ],

    bandTitle: 'What to bring to your consultation',
    bandText:
      'Any mammogram, ultrasound, MRI and pathology reports you have, plus a list of your medications. If you have none of these, come anyway and we will plan the necessary tests together.',
  },

  contact: {
    title: 'Contact and Appointments — Prof. Burhan Mayir, MD',
    description:
      'Prof. Burhan Mayir’s practice: appointment form, phone, address, opening hours and directions. Muratpaşa, Antalya.',
    kicker: 'Contact and appointments',
    h1: 'Leave your details and we will call you',
    lede: 'Appointment requests are answered during working hours. If your situation is urgent, calling us directly is faster.',

    phoneLabel: 'Phone and WhatsApp',
    officeLabel: 'Practice',
    emailLabel: 'E-mail',
    hoursLabel: 'Opening hours',
    hours: [
      { day: 'Monday – Friday', value: '09:00 – 18:00', muted: false },
      { day: 'Saturday', value: 'By appointment', muted: false },
      { day: 'Sunday', value: 'Closed', muted: true },
    ],

    awayHead: 'If you are travelling from another city',
    awayText:
      'The examination, imaging and, if needed, a biopsy can be arranged on the same day. Mention in your request that you are coming from out of town and we will plan the schedule accordingly.',

    bringHead: 'What to bring',
    bring: [
      'Any mammogram, breast ultrasound and MRI images',
      'Any previous biopsy or pathology report',
      'A list of the medicines you take',
      'Any family history of breast or ovarian cancer',
    ],
    bringNote:
      'If you have none of these, come anyway; we will plan the necessary tests together during the consultation.',
  },

  blog: {
    title: 'Articles — Prof. Burhan Mayir, MD',
    description:
      'Patient-focused articles on breast screening, breast cancer surgery, benign breast conditions and treatment pathways. Prof. Burhan Mayir, MD.',
    h1: 'Articles',
    lede: 'A consultation is not always long enough for every question. These articles are for the ones that come to mind afterwards.',
    readMore: ' · Read the article →',
    ctaTitle: 'Still have a question you cannot find an answer to?',
    ctaText:
      'The best place to ask is the consultation itself. Leave an appointment request and we will call you to arrange a suitable time.',
    ctaButton: 'Request an appointment',
    readArticle: 'Read the article',
    alsoRead: 'You might also read',
    prevPost: 'Previous article',
    nextPost: 'Next article',
    backToBlog: '← All articles',
    posts: POSTS_EN,
  },

  notFound: {
    title: 'Page not found — Prof. Burhan Mayir, MD',
    description:
      'The page you were looking for was not found. You can continue to the condition pages, the articles or the appointment page.',
    kicker: '404',
    h1: 'We could not find that page',
    text: 'The link may have changed or been mistyped. You can continue from the headings below; if your situation is urgent, please call us.',
    blogLink: 'Articles',
    aboutLink: 'About',
  },

  topics: [
    {
      slug: 'breast-cancer',
      key: 'meme-kanseri',
      group: 'kanser',
      no: '01',
      seoTitle: 'Breast Cancer in Antalya: Symptoms, Diagnosis and Treatment',
      title: 'Breast cancer',
      crumb: 'Breast cancer',
      navTitle: 'What Breast Cancer Is',
      meta: 'Which signs to watch for, how the diagnosis is made, what the stage means and when screening starts. Prof. Burhan Mayir, MD, Antalya.',
      lede: 'Breast cancer is the most common cancer in women. It is also one of the cancers with the highest treatment success when caught early. This page explains, in plain language, the terms you will meet during diagnosis.',
      img: '/img/konu-meme-kanseri.jpg',
      imgAlt: 'Consulting room: desk, armchairs and examination sink',
      quickFacts: [
        { label: 'Definitive diagnosis', value: 'Pathology report' },
        { label: 'First imaging', value: 'Mammography and ultrasound' },
        { label: 'Screening age', value: 'Generally 40, earlier in high-risk groups' },
        { label: 'In early stages', value: 'The whole breast is usually not removed' },
      ],
      ctaBox: {
        title: 'Do you already have a report?',
        text: 'Bring your mammogram, ultrasound or pathology result to the consultation. The same documents are enough for a second opinion.',
      },
      related: [
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'Removing the tumour and assessing the armpit.',
        },
        {
          key: 'onkoplastik',
          title: 'Oncoplastic Breast Surgery',
          text: 'Preserving the shape of the breast while removing the cancer.',
        },
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'Most palpable lumps turn out to be benign.',
        },
      ],
      band: {
        title: 'Let us read your result together',
        text: 'If there are lines in your report you do not understand, we will go through them one by one. You do not have to decide before things are clear.',
      },
      indexBody:
        'Signs, diagnostic methods and staging. Knowing what you are facing makes it easier to decide together.',
      indexWhen:
        'If you have noticed a lump in the breast, dimpling of the skin or bloody discharge from the nipple, do not wait to be seen.',
      sections: [
        {
          h2: 'Which signs to watch for',
          blocks: [
            {
              kind: 'p',
              text: 'The most common sign of breast cancer is a newly noticed, firm and usually painless lump in the breast or armpit. The absence of pain does not make it harmless; cancerous lumps are in fact often painless.',
            },
            {
              kind: 'ul',
              items: [
                { text: 'A new change in the shape or size of the breast' },
                { text: 'Dimpling, orange-peel texture or redness of the breast skin' },
                { text: 'Inward pulling, crusting or bloody discharge at the nipple' },
                { text: 'A firm area felt in the armpit' },
                { text: 'Persistent pain fixed at a single point in the breast' },
              ],
            },
            {
              kind: 'p',
              text: 'None of these findings means cancer on its own. Most breast changes are benign. But which is which is decided by examination and imaging, not by waiting.',
            },
          ],
        },
        {
          h2: 'How the diagnosis is made',
          blocks: [
            {
              kind: 'p',
              text: 'The diagnosis becomes clear in three steps: examination, imaging and pathology. None replaces the others; they are read together.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Examination',
                  v: 'Both breasts and the armpits are examined by hand. When your symptoms began, how they relate to your menstrual cycle and your family history are all recorded.',
                },
                {
                  k: 'Imaging',
                  v: 'Above the age of forty, mammography and ultrasound are usually used together. In young, dense breast tissue ultrasound comes first. Breast MRI is requested when needed.',
                },
                {
                  k: 'Biopsy and pathology',
                  v: 'A sample is taken from the suspicious lump with a needle. Pathology gives the definitive diagnosis; the type and grade of the tumour and its hormone receptor status also appear in that report.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'A biopsy does not cause cancer to spread. This is one of the most common worries we hear at the practice; it is not a scientifically supported finding.',
            },
          ],
        },
        {
          h2: 'What the stage means',
          blocks: [
            {
              kind: 'p',
              text: 'The stage is determined by the size of the tumour, whether it has spread to the lymph nodes in the armpit and whether there is spread to other organs. The stage sets the order of treatment: for some patients surgery comes first, for others drug treatment does.',
            },
            {
              kind: 'p',
              text: 'The stage alone is not a verdict. The biological subtype of the tumour, its hormone receptors and HER2 status determine the response to treatment at least as much as the stage does.',
            },
          ],
        },
        {
          h2: 'Risk factors and screening',
          blocks: [
            {
              kind: 'p',
              text: 'Being a woman and growing older are the two most decisive factors; neither can be changed. A family history of breast or ovarian cancer, early menstruation, late menopause, never having given birth and long-term hormone use all increase the risk.',
            },
            {
              kind: 'p',
              text: 'On the other hand, a substantial proportion of women with breast cancer have no known risk factor at all. That is why screening is recommended regardless of risk group.',
            },
            {
              kind: 'p',
              text: 'The general approach is annual mammography from the age of forty, with an earlier programme for those with a family history of breast cancer. We decide the right interval for you after listening to your history.',
            },
          ],
        },
      ],
    },

    {
      slug: 'breast-cancer-surgery',
      key: 'cerrahi',
      group: 'kanser',
      no: '02',
      seoTitle: 'Breast Cancer Surgery and Oncoplastic Surgery in Antalya',
      title: 'Breast cancer surgery',
      crumb: 'Breast cancer surgery',
      navTitle: 'Breast Cancer Surgery',
      meta: 'Breast-conserving surgery and mastectomy, sentinel lymph node biopsy, the day of surgery and recovery. Prof. Burhan Mayir, MD, Antalya.',
      lede: 'Surgery has two jobs: to remove the tumour with clear margins and to find out whether the disease has reached the armpit. Which operation is performed is decided by weighing the features of the tumour together with your own preferences.',
      img: '/img/stok-ameliyathane.jpg',
      imgAlt: 'Surgical team at work in an operating theatre',
      quickFacts: [
        { label: 'Anaesthesia', value: 'General anaesthesia' },
        { label: 'Duration', value: 'About 1–2 hours' },
        { label: 'Hospital stay', value: '1–2 days' },
        { label: 'Armpit', value: 'Sentinel lymph node biopsy first' },
        { label: 'Pathology result', value: 'About 1 week' },
      ],
      ctaBox: {
        title: 'If you would like a second opinion',
        text: 'Even once a decision to operate has been made, it is your right to discuss the options again. Bringing your imaging and pathology reports is enough.',
      },
      related: [
        {
          key: 'koruyucu',
          title: 'Breast-Conserving Surgery',
          text: 'Removing the tumour and keeping the rest of the breast.',
        },
        {
          key: 'onkoplastik',
          title: 'Oncoplastic Breast Surgery',
          text: 'Preserving the shape of the breast while removing the cancer.',
        },
        {
          key: 'rekonstruksiyon',
          title: 'Breast Reconstruction',
          text: 'Building a new breast in place of the tissue removed.',
        },
      ],
      band: {
        title: 'Let us make the surgical decision together',
        text: 'Which operation suits you, what the alternatives are and what result to expect are all discussed in detail during the consultation.',
      },
      indexBody:
        'Removing the tumour with clear margins and assessing the lymph nodes in the armpit. The surgical decision is made together with the pathology and imaging results.',
      indexWhen:
        'If your biopsy has come back as cancer, come in so we can discuss the surgical options and the order of treatment.',
      sections: [
        {
          h2: 'Surgical options for the breast',
          blocks: [
            {
              kind: 'p',
              text: 'There are two main approaches. Which one is suitable depends on the size and position of the tumour relative to the volume of the breast.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Breast-conserving surgery',
                  v: 'The tumour is removed together with a margin of healthy tissue around it; the rest of the breast is preserved. Radiotherapy is then needed in almost every patient. In suitable patients, no difference in survival has been shown between breast-conserving surgery and removing the whole breast.',
                },
                {
                  k: 'Mastectomy',
                  v: 'The whole of the breast tissue is removed. It is preferred when the tumour is in more than one focus, when it is large relative to the breast volume, or when radiotherapy is not suitable. Reconstruction can be performed in the same operation.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'In some patients drug treatment is given first to shrink the tumour, which then makes breast-conserving surgery possible. Surgery and oncology make this decision together.',
            },
          ],
        },
        {
          h2: 'Why the armpit is assessed',
          blocks: [
            {
              kind: 'p',
              text: 'Breast cancer spreads first to the lymph nodes in the armpit. The state of this area is needed in order to plan treatment after surgery.',
            },
            {
              kind: 'ul',
              items: [
                {
                  lead: 'Sentinel lymph node biopsy:',
                  text: 'the one or few lymph nodes the tumour drains into first are marked and removed. If they are clear, the others are left untouched.',
                },
                {
                  lead: 'Axillary dissection:',
                  text: 'in selected patients with proven spread, the lymph nodes of the armpit are cleared more widely.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'The sentinel method markedly reduces the risk of arm swelling (lymphoedema), so it is preferred in every patient in whom it is possible.',
            },
          ],
        },
        {
          h2: 'The day of surgery and afterwards',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Before',
                  v: 'Blood tests and an anaesthetic assessment are carried out. If you take blood-thinning medication, it is adjusted a few days in advance.',
                },
                {
                  k: 'Surgery',
                  v: 'It is performed under general anaesthesia and mostly takes one to two hours. Depending on the extent of the procedure, a drain may be placed.',
                },
                {
                  k: 'Hospital',
                  v: 'One day is usually enough after breast-conserving surgery, and one to two days after a mastectomy.',
                },
                {
                  k: 'Recovery',
                  v: 'You will mostly return to daily activities within a week. Doing the prescribed arm exercises regularly is important.',
                },
                {
                  k: 'Pathology',
                  v: 'The detailed report on the removed tissue usually arrives within a week. Oncological treatment is then planned if it is needed.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Surgery is one step of treatment, not the whole of it. Whether radiotherapy, hormone therapy or chemotherapy is required is determined by the pathology result; we guide you through that process.',
            },
          ],
        },
      ],
    },

    {
      slug: 'oncoplastic-breast-surgery',
      key: 'onkoplastik',
      group: 'kanser',
      no: '03',
      seoTitle: 'Oncoplastic Breast Surgery in Antalya | Prof. Burhan Mayir, MD',
      title: 'Oncoplastic breast surgery',
      crumb: 'Oncoplastic breast surgery',
      navTitle: 'Oncoplastic Breast Surgery',
      meta: 'What is oncoplastic breast surgery and who does it suit? Techniques that remove the cancer with clear margins while preserving the shape of the breast.',
      lede: 'Oncoplastic surgery is not a separate operation but a way of performing breast cancer surgery. The tumour is removed according to oncological rules while the remaining breast tissue is reshaped in the same session.',
      img: '/img/konu-onkoplastik.jpg',
      imgAlt: 'Consulting room: desk and seating area with a slatted wood wall',
      quickFacts: [
        { label: 'Aim', value: 'Clear margins and a preserved breast shape' },
        { label: 'In the same session', value: 'Reshaping with the breast’s own tissue' },
        { label: 'The other breast', value: 'Adjusted for symmetry if needed' },
        { label: 'If the breast is conserved', value: 'Radiotherapy is required afterwards' },
        { label: 'When the result settles', value: 'Within a few months' },
      ],
      ctaBox: {
        title: 'If you have been told the breast must be removed',
        text: 'Bring your imaging and pathology reports so we can assess whether a breast-conserving option is possible.',
      },
      related: [
        {
          key: 'koruyucu',
          title: 'Breast-Conserving Surgery',
          text: 'Removing the tumour and keeping the rest of the breast.',
        },
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'Surgical options and assessment of the armpit.',
        },
        {
          key: 'rekonstruksiyon',
          title: 'Breast Reconstruction',
          text: 'Rebuilding the breast when all of it has been removed.',
        },
      ],
      band: {
        title: 'Let us discuss whether the shape can be preserved',
        text: 'The same technique does not suit every patient. Come with your reports and we will look at what is possible for your breast.',
      },
      indexBody:
        'Techniques that combine removing the cancerous tissue with preserving the shape of the breast in one operation. Plastic surgery principles are used inside oncological surgery.',
      indexWhen:
        'If breast cancer surgery is being planned and the appearance afterwards matters to you, let us talk before the surgical plan is made.',
      sections: [
        {
          h2: 'What oncoplastic surgery is',
          blocks: [
            {
              kind: 'p',
              text: 'When a tumour is removed together with a margin of healthy tissue, a cavity is left in the breast. Left to itself, that cavity can cause a dent, asymmetry or a shift of the nipple. In oncoplastic surgery the breast’s own tissue is reshaped in the same session to close that cavity.',
            },
            {
              kind: 'p',
              text: 'In other words, oncoplastic surgery applies breast cancer surgery and breast reshaping techniques within a single procedure. It combines the rules of oncological surgery with the methods of plastic and reconstructive surgery.',
            },
            {
              kind: 'p',
              text: 'The approach also allows the surgeon to remove a wider piece of tissue. Preserving the shape does not mean taking less tissue from around the tumour; clear margins always come first.',
            },
          ],
        },
        {
          h2: 'Who it suits',
          blocks: [
            {
              kind: 'p',
              text: 'Oncoplastic surgery is not applied in the same way in every patient; the surgical plan is drawn up individually. The main criterion is the size of the tumour relative to the volume of the breast. In the assessment we look at:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'The size and position of the tumour and whether it is in a single focus' },
                { text: 'Breast volume, shape and the degree of existing sagging' },
                { text: 'The stage of the disease and any treatment already given' },
                { text: 'Whether you are able to receive radiotherapy after surgery' },
                { text: 'Factors affecting wound healing, such as smoking and diabetes' },
                { text: 'Your own expectations about appearance' },
              ],
            },
            {
              kind: 'p',
              text: 'In suitable patients oncoplastic techniques are used together with breast-conserving surgery. When the whole of the breast tissue has to be removed, reconstruction options after mastectomy are assessed instead.',
            },
          ],
        },
        {
          h2: 'The difference from breast-conserving surgery',
          blocks: [
            {
              kind: 'p',
              text: 'The two terms are often confused. One describes how much tissue is removed, the other what is done with the tissue that remains.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Breast-conserving surgery',
                  v: 'The cancerous tumour and the necessary surrounding breast tissue are removed and the rest of the breast is kept. It defines the extent of the operation.',
                },
                {
                  k: 'Oncoplastic surgery',
                  v: 'The remaining breast tissue is reshaped once the tumour has been removed. It defines how the operation is carried out, and is most often applied as part of breast-conserving surgery.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Put differently, oncoplastic surgery is a technique that improves the result of breast-conserving surgery. For breast-conserving surgery itself, who it suits and the treatment that follows, see the Breast-Conserving Surgery page.',
            },
          ],
        },
        {
          h2: 'What to expect after surgery',
          blocks: [
            {
              kind: 'p',
              text: 'Swelling and altered sensation in the breast are normal in the first weeks. If the breast has been conserved, the final shape settles within a few months, partly under the effect of radiotherapy, so we do not judge the result by the first month.',
            },
            {
              kind: 'p',
              text: 'If the other breast has been reduced or lifted for symmetry, the two sides may heal at different rates. That evens out with time as well.',
            },
            {
              kind: 'p',
              text: 'Follow-up continues with examinations every six months in the early years and annual imaging. Keeping your check-ups in the same place is preferable, as it makes comparison easier.',
            },
          ],
        },
        {
          h2: 'Frequently asked questions',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Is oncoplastic breast surgery cancer surgery?',
                  a: 'Yes. It is the joint use of oncological surgical principles and breast reshaping techniques. The cosmetic result never takes precedence over the cancer treatment.',
                },
                {
                  q: 'Is the whole breast removed in oncoplastic surgery?',
                  a: 'Not always. In suitable patients it is applied together with breast-conserving surgery. In some patients mastectomy is medically necessary, and reconstruction then comes into play.',
                },
                {
                  q: 'Can it be applied to every breast cancer patient?',
                  a: 'No. Suitability is determined by the characteristics of the tumour, the structure of the breast, the stage of the disease and the other treatments planned.',
                },
                {
                  q: 'Will there be a scar?',
                  a: 'As with any operation, scars form at the incision sites. Their position and appearance depend on the technique used, the structure of the breast and how you heal.',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      slug: 'breast-conserving-surgery',
      key: 'koruyucu',
      group: 'kanser',
      no: '04',
      seoTitle: 'Breast-Conserving Surgery in Antalya | Prof. Burhan Mayir, MD',
      title: 'Breast-conserving surgery',
      crumb: 'Breast-conserving surgery',
      navTitle: 'Breast-Conserving Surgery',
      meta: 'What is breast-conserving surgery and who does it suit? Lumpectomy, sentinel lymph node biopsy, radiotherapy afterwards and how it differs from mastectomy.',
      lede: 'In breast cancer, removing the tumour with the necessary surrounding tissue and keeping the rest of the breast is, in suitable patients, as safe as removing the whole breast. Suitability is decided by several factors together, not a single measurement.',
      img: '/img/stok-cerrahi-ekip.jpg',
      imgAlt: 'Surgical team at work in an operating theatre',
      quickFacts: [
        { label: 'Other names', value: 'Lumpectomy, partial mastectomy' },
        { label: 'Aim', value: 'Clear margins while keeping the breast' },
        { label: 'Armpit', value: 'Sentinel lymph node biopsy first' },
        { label: 'Afterwards', value: 'Radiotherapy in almost every patient' },
        { label: 'Survival', value: 'No different from mastectomy in suitable patients' },
      ],
      ctaBox: {
        title: 'If you have been told your breast must be removed',
        text: 'Whether a conserving option is possible can be reassessed. Come with your mammogram, ultrasound, MRI and pathology results.',
      },
      related: [
        {
          key: 'onkoplastik',
          title: 'Oncoplastic Breast Surgery',
          text: 'Preserving the shape of the breast once the tumour is out.',
        },
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'All surgical options and assessment of the armpit.',
        },
        {
          key: 'meme-kanseri',
          title: 'Breast Cancer',
          text: 'Signs, diagnostic methods and staging.',
        },
      ],
      band: {
        title: 'Let us look together at whether your breast can be kept',
        text: 'The decision is not made on tumour size alone. Bring your imaging and pathology reports and we will go through the options in detail.',
      },
      indexBody:
        'Removing the tumour and the necessary surrounding tissue while keeping the rest of the breast. In suitable patients no difference in survival compared with removing the whole breast has been shown.',
      indexWhen:
        'If you have been told that your whole breast will be removed, you can seek a second opinion on whether a conserving option is possible.',
      sections: [
        {
          h2: 'What breast-conserving surgery is',
          blocks: [
            {
              kind: 'p',
              text: 'The aim is to remove the cancerous tumour together with the necessary margin of healthy tissue and to keep the rest of the breast. The operation is also called lumpectomy, segmental mastectomy or partial mastectomy; all describe the same logic.',
            },
            {
              kind: 'p',
              text: 'Its extent depends on the size and position of the tumour and on the characteristics of the breast tissue. In the past many patients diagnosed with breast cancer had to have the whole breast removed; today, in suitable patients, the breast tissue can be preserved.',
            },
            {
              kind: 'p',
              text: 'In suitable patients no difference in survival has been shown between breast-conserving surgery and mastectomy. That removes the need to decide on the principle that more removal is always safer.',
            },
          ],
        },
        {
          h2: 'Who it suits',
          blocks: [
            {
              kind: 'p',
              text: 'Breast-conserving surgery may not be suitable for every patient. Several factors are weighed together:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'The size and position of the tumour and the number of tumours' },
                { text: 'Breast volume and the size of the tumour relative to it' },
                { text: 'The stage of the disease and how widely it is spread within the breast' },
                { text: 'Treatment already given, in particular radiotherapy to the same breast' },
                { text: 'Whether radiotherapy can be given after the operation' },
              ],
            },
            {
              kind: 'p',
              text: 'In some patients chemotherapy or other systemic treatment is given first to shrink the tumour, which then makes breast-conserving surgery possible. The decision is therefore not based on the tumour size measured at diagnosis alone.',
            },
            {
              kind: 'p',
              text: 'If the tumour has spread to more than one area of the breast, if the same breast has previously been irradiated, or if clear margins cannot be achieved, removing the whole breast is safer.',
            },
          ],
        },
        {
          h2: 'How the operation is done',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Before',
                  v: 'Examination, mammography, ultrasound and, where needed, MRI are assessed together to establish the position and borders of the tumour. Tumours that cannot be felt are marked before the operation.',
                },
                {
                  k: 'Removing the tumour',
                  v: 'The incision is planned and the tumour is removed with the necessary margin of healthy tissue around it. The removed tissue is sent for pathological examination.',
                },
                {
                  k: 'The armpit',
                  v: 'Sentinel lymph node biopsy is performed where needed. In selected patients with spread, wider surgery to the armpit lymph nodes may be carried out.',
                },
                {
                  k: 'Reshaping',
                  v: 'If the amount of tissue removed or the position of the tumour would leave a deformity, the remaining tissue is rearranged with oncoplastic techniques in the same session.',
                },
                {
                  k: 'Pathology',
                  v: 'The margins and the characteristics of the tumour are reported, usually within a week. If there is a problem with the margins, further surgery may be needed.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Radiotherapy after surgery',
          blocks: [
            {
              kind: 'p',
              text: 'After breast-conserving surgery radiotherapy is needed in almost every patient and clearly reduces the risk of recurrence. Surgery and radiotherapy are one whole; accepting the operation but not planning radiotherapy is not a sound path.',
            },
            {
              kind: 'p',
              text: 'If you are not in a position to receive radiotherapy, breast-conserving surgery is usually not a suitable option. This is one of the first things we discuss when the surgical decision is made.',
            },
            {
              kind: 'p',
              text: 'Depending on the pathology result, chemotherapy, hormone therapy or targeted treatment may also be considered. The treatment plan is drawn up jointly by surgery, radiation oncology and medical oncology.',
            },
          ],
        },
        {
          h2: 'Frequently asked questions',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Breast-conserving surgery or mastectomy?',
                  a: 'The decision is made by weighing the characteristics of the tumour, how widely the disease is spread, the structure of the breast and the other treatments available. For some patients conserving surgery is a suitable option; for others mastectomy is safer.',
                },
                {
                  q: 'Is radiotherapy essential after breast-conserving surgery?',
                  a: 'It is needed in most patients. The treatments required depend on the characteristics of the tumour, but if you cannot receive radiotherapy the surgical plan changes too.',
                },
                {
                  q: 'Is the breast preserved completely?',
                  a: 'Most of the breast tissue is kept, but there is tissue loss where the tumour was removed. In suitable patients oncoplastic techniques help to preserve the shape of the breast.',
                },
                {
                  q: 'What happens if the cancer comes back after surgery?',
                  a: 'If it recurs in the same breast, mastectomy is usually required. This is why follow-up and annual imaging after surgery must be kept up.',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      slug: 'breast-reconstruction',
      key: 'rekonstruksiyon',
      group: 'kanser',
      no: '05',
      seoTitle: 'Breast Reconstruction and Repair in Antalya | Prof. Burhan Mayir, MD',
      title: 'Breast reconstruction',
      crumb: 'Breast reconstruction',
      navTitle: 'Breast Reconstruction',
      meta: 'Timing of breast reconstruction, implant-based and own-tissue methods, and frequently asked questions. Prof. Burhan Mayir, MD, Antalya.',
      lede: 'When the whole breast is removed, a new one can be built in its place. This is not an unnecessary addition to treatment; it is part of the surgical plan and deserves to be discussed.',
      img: '/img/konu-rekonstruksiyon.jpg',
      imgAlt: 'Seating area of the consulting room with a slatted wood wall',
      quickFacts: [
        { label: 'Timing', value: 'In the same session or after treatment' },
        { label: 'Methods', value: 'Implant or your own tissue' },
        { label: 'Nipple', value: 'Usually in a second procedure' },
        { label: 'Effect on follow-up', value: 'Does not hinder cancer follow-up' },
      ],
      ctaBox: {
        title: 'If you had surgery in the past',
        text: 'Reconstruction is possible even years later. An examination is enough to see where things stand.',
      },
      related: [
        {
          key: 'onkoplastik',
          title: 'Oncoplastic Breast Surgery',
          text: 'Preserving the shape of the breast while removing the cancer.',
        },
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'Surgical options and assessment of the armpit.',
        },
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'Most palpable lumps turn out to be benign.',
        },
      ],
      band: {
        title: 'Let us plan the timing from the start',
        text: 'A surgical decision made without discussing reconstruction is incomplete. We cover the options at the first consultation.',
      },
      indexBody:
        'Building a new breast in place of the tissue removed. It can be done in the same session as the cancer operation or after treatment is complete.',
      indexWhen:
        'Whether you are facing surgery or had a breast operation in the past, come in so we can plan the timing of reconstruction.',
      sections: [
        {
          h2: 'Timing: same session or later',
          blocks: [
            {
              kind: 'cards',
              items: [
                {
                  k: 'Immediate reconstruction',
                  v: 'Performed in the same session as the cancer operation. Never experiencing the loss of the breast is its greatest advantage for the patient. Because the breast skin is preserved, the aesthetic result is usually better.',
                },
                {
                  k: 'Delayed reconstruction',
                  v: 'Performed after chemotherapy and radiotherapy are complete, usually between six months and a year later. In patients due to have radiotherapy, waiting for the tissue to heal can be safer.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Having had breast surgery years ago is no obstacle to reconstruction. It can be done at a late stage too.',
            },
          ],
        },
        {
          h2: 'Methods',
          blocks: [
            {
              kind: 'p',
              text: 'There are two basic routes; in some patients the two are combined.',
            },
            {
              kind: 'ul',
              items: [
                {
                  lead: 'Implant reconstruction:',
                  text: 'a silicone implant is placed. In some patients a tissue expander is inserted first, and once the skin has been stretched gradually it is replaced with an implant. The operation and recovery are shorter.',
                },
                {
                  lead: 'Reconstruction with your own tissue:',
                  text: 'tissue taken from the abdomen or back is transferred to the breast. The result is more natural and more lasting; the operation and recovery take longer.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Rebuilding the nipple and the darker ring around it is usually completed in a small later procedure. The other breast may also be adjusted for symmetry.',
            },
          ],
        },
        {
          h2: 'Two frequently asked questions',
          blocks: [
            {
              kind: 'qa',
              items: [
                {
                  q: 'Does reconstruction make cancer follow-up harder?',
                  a: 'No. There is no evidence that reconstruction hides a recurrence or increases the risk of the cancer coming back. Follow-up continues with examination and, where needed, imaging.',
                },
                {
                  q: 'Does sensation come back?',
                  a: 'Touch sensation in the rebuilt breast will not be as it was. Partial sensation may develop over time. Knowing this from the outset matters for judging the result fairly.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Which method suits you is decided by weighing your body shape, whether you smoke, the planned oncological treatments and your expectations. Where necessary we work together with plastic surgery.',
            },
          ],
        },
      ],
    },

    {
      slug: 'breast-pain',
      key: 'agri',
      group: 'hastalik',
      no: '06',
      title: 'Breast pain',
      crumb: 'Breast pain',
      navTitle: 'Breast Pain — Mastalgia',
      seoTitle: 'Breast Pain in Antalya: Why It Happens and How It Is Treated',
      meta: 'Causes of breast pain in Antalya, pain before your period and how it is treated. Is constant breast pain a sign of cancer? Prof. Burhan Mayir, MD answers.',
      lede: 'The first question from patients who come in with breast pain is almost always the same: "Could this be cancer?" Let us be clear: more than 90% of breast pain has nothing to do with cancer, and breast cancer itself usually causes no pain at all.',
      img: '/img/blog-tedaviler.jpg',
      imgAlt: 'The seating area of the consulting room',
      quickFacts: [
        { label: 'Link to cancer', value: 'More than 90% is unrelated' },
        { label: 'Most common cause', value: 'Hormonal pain before a period' },
        { label: 'First step', value: 'Examination, ultrasound if needed' },
        { label: 'For most patients', value: 'No surgery is required' },
      ],
      ctaBox: {
        title: 'Is the pain not settling?',
        text: 'A single examination is usually enough to find the cause. Seeing that it is not cancer often eases the pain itself.',
      },
      related: [
        {
          key: 'kist',
          title: 'Breast Cysts',
          text: 'A tense cyst can cause sudden, severe pain.',
        },
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'If a lump comes with the pain, the assessment changes.',
        },
        {
          key: 'meme-kanseri',
          title: 'What Breast Cancer Is',
          text: 'Which findings mean you should not wait.',
        },
      ],
      band: {
        title: 'Let us find the cause together',
        text: 'We will go through when it started, how it relates to your cycle and where you feel it. For most patients the picture becomes clear at the first visit.',
      },
      indexBody:
        'The causes of breast pain, which kinds are hormonal, which need investigation, and the treatment options.',
      indexWhen:
        'Come in if the pain is in one spot and constant, if it keeps increasing, or if a lump, discharge or a skin change comes with it.',
      sections: [
        {
          h2: 'Why breast pain happens',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Hormonal (cyclical) pain',
                  v: 'The most common cause. It starts three to five days before a period, brings tightness, fullness and tenderness in both breasts, and passes with the period.',
                },
                {
                  k: 'Fibrocystic breast tissue',
                  v: 'Women whose breasts contain many small cysts and firm areas tend to have pain more often.',
                },
                {
                  k: 'Musculoskeletal pain',
                  v: 'Large breast tissue loading the neck and back muscles, and a poorly fitted bra, both cause pain.',
                },
                {
                  k: 'Cysts and inflammation',
                  v: 'A tense cyst filling with fluid can become painful suddenly and severely.',
                },
                {
                  k: 'Stress, caffeine and diet',
                  v: 'Excess coffee, tea and chocolate, along with stress, can trigger the pain.',
                },
              ],
            },
          ],
        },
        {
          h2: 'When to see a doctor',
          blocks: [
            {
              kind: 'p',
              text: 'Pain that comes and goes with your period and is felt in both breasts is not urgent. In the situations below, however, do not put off being examined.',
            },
            {
              kind: 'ul',
              items: [
                { text: 'The pain is in one spot and constant' },
                { text: 'It keeps increasing or wakes you at night' },
                { text: 'A palpable lump comes with it' },
                { text: 'There is discharge from the nipple' },
                { text: 'The skin is red, dimpled or thickened' },
              ],
            },
          ],
        },
        {
          h2: 'How it is treated',
          blocks: [
            {
              kind: 'p',
              text: 'Treatment follows the cause. Once cancer has been ruled out, the pain eases on its own in a good number of patients; in practice we often see that worry makes the pain larger than it is.',
            },
            {
              kind: 'p',
              text: 'A properly supportive bra, cutting back on caffeine and salt, and where needed medication at the level of a painkiller are enough for most patients. Hormonal treatment is rarely necessary.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'breast-lump-fibroadenoma',
      key: 'kitle',
      group: 'hastalik',
      no: '07',
      title: 'Breast lumps and fibroadenoma',
      crumb: 'Breast lumps',
      navTitle: 'Breast Lump — Fibroadenoma',
      seoTitle: 'Breast Lumps and Fibroadenoma in Antalya | Benign Breast Lumps',
      meta: 'Why does a lump appear in the breast? What is a fibroadenoma and is it dangerous? Follow-up and surgery for benign breast lumps in Antalya.',
      lede: 'Feeling a lump in your breast is frightening. But know this from the start: in women under 30, 90% of palpable lumps are benign. Even so, every new lump should be examined.',
      img: '/img/stok-gorusme.jpg',
      imgAlt: 'A doctor and patient talking in the consulting room',
      quickFacts: [
        { label: 'Under the age of 30', value: '90% of lumps are benign' },
        { label: 'Most common benign tumour', value: 'Fibroadenoma' },
        { label: 'Typical age', value: 'Between 15 and 35' },
        { label: 'Definite diagnosis', value: 'Ultrasound and, if needed, biopsy' },
      ],
      ctaBox: {
        title: 'Do you have an ultrasound report?',
        text: 'Bring any earlier ultrasound or mammogram with you. Comparing them is the most reliable way to tell whether the lump has grown.',
      },
      related: [
        {
          key: 'kist',
          title: 'Breast Cysts',
          text: 'Not every palpable lump is solid; cysts are filled with fluid.',
        },
        {
          key: 'agri',
          title: 'Breast Pain',
          text: 'What it means when pain comes with a lump.',
        },
        {
          key: 'meme-kanseri',
          title: 'What Breast Cancer Is',
          text: 'Which features of a lump call for investigation.',
        },
      ],
      band: {
        title: 'Do not sit on a lump — have it checked',
        text: 'An examination and an ultrasound usually give an answer the same day. You should not have to spend weeks worrying to learn that it is benign.',
      },
      indexBody:
        'What a fibroadenoma is, which lumps are followed, which are removed, and how the diagnosis is made.',
      indexWhen:
        'Come in if you have noticed a new lump that is firm and does not move easily, or if a lump you have known about has grown.',
      sections: [
        {
          h2: 'What a fibroadenoma is',
          blocks: [
            {
              kind: 'p',
              text: 'The fibroadenoma is the most common benign tumour of the breast. It usually appears in younger women between the ages of 15 and 35.',
            },
            {
              kind: 'p',
              text: 'Typically it is one to three centimetres across, rubbery, round and mobile — it slips easily between the fingers. It responds to hormones and can grow during pregnancy.',
            },
          ],
        },
        {
          h2: 'Does every lump have to be removed',
          blocks: [
            {
              kind: 'p',
              text: 'No. When ultrasound and, where needed, a biopsy have confirmed a fibroadenoma that is small and not growing, a yearly ultrasound is enough.',
            },
            {
              kind: 'p',
              text: 'The situations in which we recommend removal are limited:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'It is growing quickly' },
                { text: 'Its size is uncomfortable for the patient' },
                { text: 'The biopsy shows a suspicious finding (possible phyllodes tumour)' },
                { text: 'Follow-up does not settle the patient’s anxiety' },
              ],
            },
          ],
        },
        {
          h2: 'How the diagnosis is made',
          blocks: [
            {
              kind: 'steps',
              items: [
                {
                  k: 'Examination',
                  v: 'The consistency, mobility and borders of the lump are assessed by hand.',
                },
                {
                  k: 'Ultrasound',
                  v: 'The first choice at a younger age; it separates a solid lump from a cystic one.',
                },
                {
                  k: 'Biopsy if needed',
                  v: 'Where the appearance is suspicious, a small sample taken with a needle gives the definite diagnosis.',
                },
              ],
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'breast-cysts',
      key: 'kist',
      group: 'hastalik',
      no: '08',
      title: 'Breast cysts',
      crumb: 'Breast cysts',
      navTitle: 'Breast Cysts',
      seoTitle: 'Are Breast Cysts Dangerous? Treatment and Follow-up in Antalya',
      meta: 'Why do cysts form in the breast? Symptoms of breast cysts in Antalya, the difference between simple and complex cysts, and treatment. Prof. Burhan Mayir, MD.',
      lede: 'Breast cysts are sacs filled with fluid, and about half of all women have them at some point in life. They are especially common between the ages of 30 and 50.',
      img: '/img/stok-ultrason.jpg',
      imgAlt: 'Breast ultrasound machine in the examination room',
      quickFacts: [
        { label: 'How common', value: 'In about half of all women' },
        { label: 'Most common age', value: 'Between 30 and 50' },
        { label: 'What tells them apart', value: 'Breast ultrasound' },
        { label: 'A simple cyst', value: 'Does not turn into cancer' },
      ],
      ctaBox: {
        title: 'Is your cyst painful?',
        text: 'A tense cyst can be the source of the pain. Draining it with a needle, where needed, both relieves it and allows the fluid to be examined.',
      },
      related: [
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'Solid lumps are assessed differently from cysts.',
        },
        {
          key: 'agri',
          title: 'Breast Pain',
          text: 'Pain is more common with fibrocystic tissue.',
        },
        {
          key: 'akinti',
          title: 'Nipple Discharge',
          text: 'Discharge alongside a cyst calls for separate assessment.',
        },
      ],
      band: {
        title: 'A cyst, or something else?',
        text: 'This distinction is not made by hand but by ultrasound. A single scan usually closes the question entirely.',
      },
      indexBody:
        'The difference between simple and complex cysts, what fibrocystic breast tissue means, and how follow-up is arranged.',
      indexWhen:
        'Come in for a swelling that appears suddenly and is tense and painful, or for a finding reported on ultrasound as a complex cyst.',
      sections: [
        {
          h2: 'A simple cyst or a complex one',
          blocks: [
            {
              kind: 'p',
              text: 'This distinction matters a great deal, and it is made by breast ultrasound alone. Examination by hand cannot separate a simple cyst from a complex one.',
            },
            {
              kind: 'cards',
              items: [
                {
                  k: 'Simple cyst',
                  v: 'Filled entirely with fluid and thin-walled. Entirely benign: it does not turn into cancer and does not raise the risk of cancer. It usually needs no treatment; if it is very large and painful it can be drained with a syringe.',
                },
                {
                  k: 'Complex cyst',
                  v: 'A cyst containing a solid area or with a thickened wall. It calls for close follow-up and, in some cases, a biopsy.',
                },
              ],
            },
          ],
        },
        {
          h2: 'What fibrocystic breast tissue is',
          blocks: [
            {
              kind: 'p',
              text: 'If you have many cysts, this is called fibrocystic breast tissue. It is not a disease but the make-up of the breast, and it does not raise the risk of cancer.',
            },
            {
              kind: 'p',
              text: 'It does, however, make examination and the reading of a mammogram harder, which is why regular ultrasound follow-up matters. We set the schedule together.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'nipple-discharge',
      key: 'akinti',
      group: 'hastalik',
      no: '09',
      title: 'Nipple discharge',
      crumb: 'Nipple discharge',
      navTitle: 'Nipple Discharge',
      seoTitle: 'Nipple Discharge in Antalya: Causes and Treatment of Bloody Discharge',
      meta: 'Is discharge from the breast dangerous? Causes of nipple discharge in Antalya, bloody discharge and treatment options. Prof. Burhan Mayir, MD.',
      lede: 'Nipple discharge is one of the complaints that worries women most. What decides the assessment is not how much there is, but what kind it is.',
      img: '/img/blog-patoloji.jpg',
      imgAlt: 'A general view of the consulting room',
      quickFacts: [
        { label: 'What decides', value: 'Its colour and whether one duct is involved' },
        { label: 'Harmless type', value: 'From both breasts, only on squeezing' },
        { label: 'Needs investigation', value: 'One-sided, spontaneous, bloody' },
        { label: 'Most common cause', value: 'Intraductal papilloma' },
      ],
      ctaBox: {
        title: 'Note the colour of the discharge',
        text: 'Its colour, whether it comes from one breast only and whether it appears on its own largely determine the diagnosis. Bring that information with you.',
      },
      related: [
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'Whether a lump comes with the discharge.',
        },
        {
          key: 'meme-kanseri',
          title: 'What Breast Cancer Is',
          text: 'Bloody discharge can rarely be a sign of cancer.',
        },
        {
          key: 'mastit',
          title: 'Breast Infection and Abscess',
          text: 'Purulent discharge can appear with inflammation.',
        },
      ],
      band: {
        title: 'Do not wait on bloody discharge',
        text: 'Spontaneous bloody discharge from one breast usually turns out to be benign, but it is a finding that has to be investigated.',
      },
      indexBody:
        'Which discharge is harmless, which needs investigation, and how treatment is planned.',
      indexWhen:
        'Come in without delay for bloody or clear discharge that comes from one breast, from a single duct, without squeezing.',
      sections: [
        {
          h2: 'Which kinds are harmless',
          blocks: [
            {
              kind: 'p',
              text: 'White, yellow or green discharge that comes from both breasts, from many ducts, and only on squeezing is usually hormonal in origin. A raised prolactin level and thyroid disorders are common causes of this picture, and its link to cancer is rare.',
            },
          ],
        },
        {
          h2: 'The discharge that needs investigation',
          blocks: [
            {
              kind: 'p',
              text: 'Discharge from one breast, from a single duct, appearing on its own — that is, without squeezing — is assessed differently. Bloody, clear watery or brown discharge in particular must be investigated.',
            },
            {
              kind: 'p',
              text: 'The most common cause of this kind of discharge is an intraductal papilloma: a benign, wart-like growth inside a milk duct. Rarely, cancer can also announce itself this way.',
            },
          ],
        },
        {
          h2: 'Diagnosis and treatment',
          blocks: [
            {
              kind: 'p',
              text: 'Alongside examination, ultrasound and — depending on age — mammography are used; some patients need further imaging.',
            },
            {
              kind: 'p',
              text: 'Treatment is the removal of the duct the discharge comes from, through a small incision. This is both diagnosis and treatment: the tissue removed goes to pathology, and the discharge stops.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'mastitis-breast-abscess',
      key: 'mastit',
      group: 'hastalik',
      no: '10',
      title: 'Breast infection, abscess and mastitis',
      crumb: 'Breast infection',
      navTitle: 'Breast Infection — Mastitis',
      seoTitle: 'Breast Infection and Abscess Treatment in Antalya | Mastitis',
      meta: 'Mastitis, breast infection and breast abscess in breastfeeding mothers in Antalya: symptoms and treatment. How is an abscess drained? Prof. Burhan Mayir, MD.',
      lede: 'Mastitis is inflammation of the breast tissue. It arises most often in breastfeeding mothers, when milk builds up in a duct and bacteria enter through cracks in the nipple.',
      img: '/img/blog-emzirme.jpg',
      imgAlt: 'The window side of the consulting room',
      quickFacts: [
        { label: 'Who it affects most', value: 'Breastfeeding mothers' },
        { label: 'Symptoms', value: 'Redness, severe pain, fever' },
        { label: 'The biggest mistake', value: 'Stopping breastfeeding' },
        { label: 'Treated early', value: 'Most patients settle within 48 hours' },
      ],
      ctaBox: {
        title: 'Fever while breastfeeding?',
        text: 'Coming in early with mastitis keeps it from turning into an abscess. Be seen the same day — and without stopping breastfeeding.',
      },
      related: [
        {
          key: 'granulomatoz',
          title: 'Granulomatous Mastitis',
          text: 'Inflammation that will not settle and keeps returning.',
        },
        {
          key: 'agri',
          title: 'Breast Pain',
          text: 'Causes of pain other than infection.',
        },
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'The firmness that can remain once inflammation passes.',
        },
      ],
      band: {
        title: 'We can treat it without stopping breastfeeding',
        text: 'In mastitis, emptying the milk is part of the treatment. Together with the right feeding support, medication settles it quickly in most patients.',
      },
      indexBody:
        'Mastitis and abscess in breastfeeding mothers, the right order of treatment, and recurring abscesses in women who are not breastfeeding.',
      indexWhen:
        'Come in if there is redness, severe pain and fever in the breast, or if inflammation is not settling within 48 hours despite treatment.',
      sections: [
        {
          h2: 'Mastitis and abscess while breastfeeding',
          blocks: [
            {
              kind: 'p',
              text: 'Mastitis causes redness, severe pain, fever and a flu-like weariness in the breast. It usually starts quickly and leaves the mother seriously worn down.',
            },
            {
              kind: 'p',
              text: 'If it is left too long, pus collects inside the breast and an abscess develops. At that point antibiotics alone are not enough: the abscess has to be drained.',
            },
          ],
        },
        {
          h2: 'How mastitis is treated',
          blocks: [
            {
              kind: 'p',
              text: 'The biggest mistake is stopping breastfeeding. The opposite is needed: the milk has to be emptied, because inflammation feeds on milk left in the duct.',
            },
            {
              kind: 'steps',
              items: [
                {
                  k: 'Early stage',
                  v: 'With antibiotics, painkillers, warm compresses and the right breastfeeding advice, most patients settle within 48 hours.',
                },
                {
                  k: 'If an abscess has formed',
                  v: 'Instead of large incisions we now drain it with a needle under ultrasound guidance, or through a small incision.',
                },
                {
                  k: 'Afterwards',
                  v: 'Breastfeeding can continue once the abscess has been drained; it speeds up recovery.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Infection in women who are not breastfeeding',
          blocks: [
            {
              kind: 'p',
              text: 'Breast infection also occurs in women who are not breastfeeding. In smokers in particular, recurring abscesses can appear in the ducts beneath the nipple.',
            },
            {
              kind: 'p',
              text: 'In this picture, preventing recurrence may mean dealing with the duct tissue at the source of the inflammation. Giving up smoking is an inseparable part of the treatment.',
            },
          ],
        },
      ] as Section[],
    },

    {
      slug: 'granulomatous-mastitis',
      key: 'granulomatoz',
      group: 'hastalik',
      no: '11',
      title: 'Granulomatous mastitis',
      crumb: 'Granulomatous mastitis',
      navTitle: 'Granulomatous Mastitis',
      seoTitle: 'What Is Granulomatous Mastitis? Treatment and Surgery in Antalya',
      meta: 'Breast inflammation that will not settle may be granulomatous mastitis. Symptoms, mistaken cancer diagnoses and current treatment in Antalya.',
      lede: 'Granulomatous mastitis is the breast condition most often mistaken for cancer. It is not an infection: it is a chronic inflammation the body directs at its own breast tissue.',
      img: '/img/konu-iyi-huylu.jpg',
      imgAlt: 'The washbasin and height-and-weight scale in the examination room',
      quickFacts: [
        { label: 'Is it cancer', value: 'No — but it imitates cancer on imaging' },
        { label: 'Who it affects', value: 'Usually women aged 30 to 40 who have given birth' },
        { label: 'Definite diagnosis', value: 'Tru-cut biopsy' },
        { label: 'Length of treatment', value: '6 months to a year, but it resolves fully' },
      ],
      ctaBox: {
        title: 'Inflammation that will not settle?',
        text: 'Breast inflammation that has not cleared for months and keeps returning may be granulomatous mastitis. Bring any biopsy and imaging results you have.',
      },
      related: [
        {
          key: 'mastit',
          title: 'Breast Infection and Abscess',
          text: 'How it differs from bacterial inflammation.',
        },
        {
          key: 'kitle',
          title: 'Breast Lumps and Fibroadenoma',
          text: 'A firm lump does not always mean a tumour.',
        },
        {
          key: 'meme-kanseri',
          title: 'What Breast Cancer Is',
          text: 'Why the two can be confused in the differential.',
        },
      ],
      band: {
        title: 'Unnecessary surgery can be avoided',
        text: 'In this condition wide surgery usually makes the picture worse. The right diagnosis and a patient treatment plan make recovery without an operation possible.',
      },
      indexBody:
        'Why it is confused with cancer, how the definite diagnosis is made, and the current approach to treatment.',
      indexWhen:
        'Come in if you have recurring breast inflammation, openings that discharge, or a firm lump that will not settle despite antibiotics.',
      sections: [
        {
          h2: 'Can it be confused with cancer',
          blocks: [
            {
              kind: 'p',
              text: 'Granulomatous mastitis is not cancer. But it imitates cancer closely on examination, on ultrasound and on mammography alike. That is why patients can spend months with the wrong diagnosis.',
            },
            {
              kind: 'p',
              text: 'It is usually seen in women in their thirties who have given birth and breastfed. There is redness, a firm lump, abscess formation, openings that discharge and inflammation that simply will not heal. It recurs often.',
            },
          ],
        },
        {
          h2: 'Diagnosis and treatment',
          blocks: [
            {
              kind: 'p',
              text: 'The definite diagnosis is made by tru-cut biopsy alone. Treatment calls for patience. Surgery used to be recommended straight away; today we know that unnecessary, wide operations make the condition worse.',
            },
            {
              kind: 'steps',
              items: [
                {
                  k: 'Medication',
                  v: 'Corticosteroids and immune-modulating drugs form the basis of treatment.',
                },
                {
                  k: 'Drainage if needed',
                  v: 'Where an abscess has formed, it is drained under ultrasound guidance.',
                },
                {
                  k: 'In resistant cases',
                  v: 'In patients who do not respond, limited surgery comes onto the agenda; wide operations are avoided.',
                },
              ],
            },
            {
              kind: 'p',
              text: 'Follow-up by an experienced surgeon matters in this condition. Treatment can take between six months and a year, but it resolves completely.',
            },
          ],
        },
      ] as Section[],
    },
  ],
};
