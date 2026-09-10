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
    topics: 'Conditions',
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
    topicLinks: [
      'Breast cancer',
      'Breast cancer surgery',
      'Oncoplastic surgery',
      'Breast reconstruction',
      'Benign breast conditions',
    ],
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
      'Oncoplastic / breast-conserving surgery',
      'Breast reconstruction',
      'Benign breast conditions',
      'Second opinion',
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
      pre: 'Breast health calls for ',
      em1: 'clarity',
      mid: ', not ',
      em2: 'haste',
      post: '.',
    },
    lede: 'Prof. Burhan Mayir treats breast cancer, performs breast-conserving and oncoplastic surgery, and manages benign breast conditions. Every step is explained before it is taken.',
    heroAlt: 'Prof. Burhan Mayir, MD at his practice in Antalya',
    topicsButton: 'Conditions',

    topicsTitle: 'What we treat',
    topicsIntro:
      'Tap a heading to see what the condition is and what it means for you. Reading before your visit helps you ask more during it.',

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
    lede: 'I am a general surgeon. Breast conditions, breast cancer surgery and breast-conserving surgery are among my main areas of interest. I see patients at my private practice in Antalya.',
    body: 'The way I work with patients rests on a single principle: the decision is made together. That requires explaining the options, their alternatives and the expected outcomes in plain language. A patient who knows what lies ahead starts treatment on stronger ground.',
    fieldsHead: 'Areas of interest',
    fields:
      'Breast cancer surgery · Oncoplastic and breast-conserving surgery · Breast reconstruction · Benign breast conditions · General surgery',

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
      'The questions most often asked at the practice, written down: screening, breast cancer surgery, benign breast conditions and treatment pathways.',
    kicker: 'Articles',
    h1: 'The questions most often asked at the practice, written down',
    lede: 'A consultation is not always long enough for every question. These articles are for the ones that come to mind afterwards.',
    featured: 'Featured',
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
      no: '01',
      title: 'Breast cancer',
      crumb: 'Breast cancer',
      navTitle: 'Breast Cancer',
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
          title: 'Oncoplastic Surgery',
          text: 'Preserving the shape of the breast while removing the cancer.',
        },
        {
          key: 'iyi-huylu',
          title: 'Benign Breast Conditions',
          text: 'Fibroadenoma, cysts, breast pain and discharge.',
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
      no: '02',
      title: 'Breast cancer surgery',
      crumb: 'Breast cancer surgery',
      navTitle: 'Breast Cancer Surgery',
      meta: 'Breast-conserving surgery and mastectomy, sentinel lymph node biopsy, the day of surgery and recovery. Prof. Burhan Mayir, MD, Antalya.',
      lede: 'Surgery has two jobs: to remove the tumour with clear margins and to find out whether the disease has reached the armpit. Which operation is performed is decided by weighing the features of the tumour together with your own preferences.',
      img: '/img/konu-cerrahi.jpg',
      imgAlt: 'Dressing room: examination couch and examination lamp',
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
          key: 'meme-kanseri',
          title: 'Breast Cancer',
          text: 'Signs, diagnostic methods and staging.',
        },
        {
          key: 'onkoplastik',
          title: 'Oncoplastic Surgery',
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
      slug: 'oncoplastic-surgery',
      key: 'onkoplastik',
      no: '03',
      title: 'Oncoplastic and breast-conserving surgery',
      crumb: 'Oncoplastic and breast-conserving surgery',
      navTitle: 'Oncoplastic and Breast-Conserving Surgery',
      meta: 'Oncoplastic surgery removes the cancer with clear margins while preserving the shape of the breast: who it suits and what to expect afterwards. Prof. Burhan Mayir, MD.',
      lede: 'Removing the cancer completely and preserving the appearance of the breast are not alternatives to one another. Oncoplastic surgery combines the two in a single operation.',
      img: '/img/konu-onkoplastik.jpg',
      imgAlt: 'Consulting room: desk and seating area with a slatted wood wall',
      quickFacts: [
        { label: 'Aim', value: 'Clear margins and a preserved breast shape' },
        { label: 'In the same session', value: 'Reshaping with the breast’s own tissue' },
        { label: 'Afterwards', value: 'Radiotherapy is required' },
        { label: 'When the result settles', value: 'Within a few months' },
      ],
      ctaBox: {
        title: 'If you have been told the breast must be removed',
        text: 'Bring your imaging and pathology reports so we can assess whether a breast-conserving option is possible.',
      },
      related: [
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
        {
          key: 'meme-kanseri',
          title: 'Breast Cancer',
          text: 'Signs, diagnostic methods and staging.',
        },
      ],
      band: {
        title: 'Let us assess the conserving option',
        text: 'It is not possible in every patient, but it is usually worth discussing. Come with your reports and we will look together.',
      },
      indexBody:
        'An approach that combines removing the cancerous tissue with preserving the shape of the breast in one operation. In suitable patients the whole breast is not removed.',
      indexWhen:
        'If you have been told that your whole breast will be removed, you can seek a second opinion on whether a conserving option is possible.',
      sections: [
        {
          h2: 'What the approach does',
          blocks: [
            {
              kind: 'p',
              text: 'When a tumour is removed together with a margin of healthy tissue, a cavity is left in the breast. Left to itself, that cavity can cause a dent, asymmetry or a shift of the nipple. In oncoplastic surgery the breast’s own tissue is reshaped in the same session to close that cavity.',
            },
            {
              kind: 'p',
              text: 'Two things are then achieved together: oncological safety, meaning clear margins; and a breast that stays full and close to symmetrical. Where needed, the other breast is reduced or lifted so that the two sides balance.',
            },
            {
              kind: 'p',
              text: 'The approach also allows the surgeon to remove a wider piece of tissue. In other words, preserving the shape does not mean taking less tissue from around the tumour.',
            },
          ],
        },
        {
          h2: 'Who it suits',
          blocks: [
            {
              kind: 'p',
              text: 'The main criterion is the size of the tumour relative to the volume of the breast. In the assessment we look at:',
            },
            {
              kind: 'ul',
              items: [
                { text: 'The size and position of the tumour and whether it is in a single focus' },
                { text: 'Breast volume and the degree of existing sagging' },
                { text: 'Whether you are able to receive radiotherapy after surgery' },
                { text: 'Factors affecting wound healing, such as smoking and diabetes' },
                { text: 'Your own expectations about appearance' },
              ],
            },
            {
              kind: 'p',
              text: 'If the tumour has spread to more than one area of the breast, if the same breast has previously been irradiated, or if clear margins cannot be achieved, removing the whole breast is safer. Reconstruction then comes into play.',
            },
          ],
        },
        {
          h2: 'What to expect after surgery',
          blocks: [
            {
              kind: 'p',
              text: 'Swelling and altered sensation in the breast are normal in the first weeks. The final shape settles within a few months, partly under the effect of radiotherapy, so we do not judge the result by the first month.',
            },
            {
              kind: 'p',
              text: 'After breast-conserving surgery, radiotherapy is required in almost every patient and clearly reduces the risk of recurrence. The two treatments are one whole; accepting the operation but not planning radiotherapy is not a sound path.',
            },
            {
              kind: 'p',
              text: 'Follow-up continues with examinations every six months in the early years and annual imaging. Keeping your check-ups in the same place is preferable, as it makes comparison easier.',
            },
          ],
        },
      ],
    },

    {
      slug: 'breast-reconstruction',
      key: 'rekonstruksiyon',
      no: '04',
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
          title: 'Oncoplastic Surgery',
          text: 'Preserving the shape of the breast while removing the cancer.',
        },
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'Surgical options and assessment of the armpit.',
        },
        {
          key: 'iyi-huylu',
          title: 'Benign Breast Conditions',
          text: 'Fibroadenoma, cysts, breast pain and discharge.',
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
      slug: 'benign-breast-conditions',
      key: 'iyi-huylu',
      no: '05',
      title: 'Benign breast conditions',
      crumb: 'Benign breast conditions',
      navTitle: 'Benign Breast Conditions',
      meta: 'Fibroadenoma, breast cysts, breast pain and nipple discharge: which need follow-up and which need a procedure. Prof. Burhan Mayir, MD, Antalya.',
      lede: 'Most breast complaints are not cancer. Even so, it is examination and imaging that decide which ones need follow-up and which need a procedure.',
      img: '/img/konu-iyi-huylu.jpg',
      imgAlt: 'Sink and height-and-weight scale in the examination room',
      quickFacts: [
        { label: 'Most common lump', value: 'Fibroadenoma' },
        { label: 'First imaging', value: 'Ultrasound at a young age' },
        { label: 'Simple cyst', value: 'Usually needs no treatment' },
        { label: 'Bloody discharge', value: 'Always investigated' },
      ],
      ctaBox: {
        title: 'If you have noticed something',
        text: 'The examination and ultrasound are usually completed on the same day. Have it checked rather than waiting.',
      },
      related: [
        {
          key: 'meme-kanseri',
          title: 'Breast Cancer',
          text: 'Signs, diagnostic methods and staging.',
        },
        {
          key: 'cerrahi',
          title: 'Breast Cancer Surgery',
          text: 'Surgical options and assessment of the armpit.',
        },
        {
          key: 'blog',
          title: 'Articles',
          text: 'Screening, self-examination and frequently asked questions.',
        },
      ],
      band: {
        title: 'There is no need to stay in doubt',
        text: 'With an examination and an ultrasound, most complaints become clear in the same visit. Leave your appointment request and we will call you.',
      },
      indexBody:
        'Fibroadenoma, cysts, breast pain and discharge. Most of these complaints are not cancer; even so, all of them should be assessed.',
      indexWhen:
        'If you have breast pain unrelated to your cycle, a growing cyst or recurrent discharge, you need to be checked.',
      sections: [
        {
          h2: 'The most common presentations',
          blocks: [
            {
              kind: 'cards',
              items: [
                {
                  k: 'Fibroadenoma',
                  v: 'The most common benign lump in young women. It is mobile under the fingers, well defined and painless. Small ones with a typical appearance can be followed with periodic ultrasound; fibroadenomas that grow, cause discomfort or look suspicious on imaging are removed.',
                },
                {
                  k: 'Breast cyst',
                  v: 'Fluid-filled sacs, common especially around the menopause. Simple cysts need no treatment. Large cysts causing tension and pain can be drained with a needle. Cysts with a solid component are assessed separately.',
                },
                {
                  k: 'Breast pain',
                  v: 'Diffuse pain felt on both sides that increases before menstruation is mostly hormonal and not a sign of serious disease. Pain fixed at a single point, unrelated to the cycle and steadily increasing, does need assessment.',
                },
                {
                  k: 'Nipple discharge',
                  v: 'Clear or milky discharge from both sides, from several ducts and only on squeezing, is usually unimportant. One-sided discharge from a single duct that appears on its own, and any bloody discharge, is investigated in detail.',
                },
                {
                  k: 'Breast infection and abscess',
                  v: 'Most often seen while breastfeeding, with pain, redness and fever. Antibiotic treatment is usually enough. If an abscess has formed it must be drained. Recurrent infections outside breastfeeding must always be investigated.',
                },
              ],
            },
          ],
        },
        {
          h2: 'Do these complaints increase cancer risk',
          blocks: [
            {
              kind: 'p',
              text: 'Most do not. Fibroadenoma, simple cysts and hormonal breast pain are not linked to a future risk of cancer. Only in a limited group, in whom certain cellular changes are found in the pathology report, does the risk rise somewhat; a follow-up programme is planned separately for those patients.',
            },
            {
              kind: 'p',
              text: 'A benign diagnosis does not mean you can drop your screening programme. Mammography and examinations continue on the schedule appropriate for your age.',
            },
          ],
        },
        {
          h2: 'When not to delay',
          blocks: [
            {
              kind: 'ul',
              items: [
                { text: 'A newly noticed lump that is firm and does not move' },
                { text: 'Bloody discharge, or discharge appearing on its own from a single duct' },
                { text: 'Dimpling, thickening or orange-peel texture of the breast skin' },
                { text: 'Inward pulling of the nipple or persistent crusting' },
                { text: 'A firm area felt in the armpit' },
              ],
            },
            {
              kind: 'p',
              text: 'These findings do not mean you have cancer, but they are findings that should not be left to wait. A week-long wait for an appointment takes the place of months of worry.',
            },
          ],
        },
      ],
    },
  ],
};
