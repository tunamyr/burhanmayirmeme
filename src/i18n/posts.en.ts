import type { Post } from './blocks.ts';

/** English articles: card details and article bodies. */
export const POSTS_EN: Post[] = [
  {
    slug: 'when-to-start-mammography',
    tag: 'Screening',
    read: '4 min read',
    img: '/img/blog-mamografi.jpg',
    alt: 'Consulting room: desk and seating area',
    title: 'At what age should mammography start?',
    excerpt:
      'The general recommendation is forty; for women with a family history of breast cancer the programme starts earlier. Which interval applies in which situation.',
    short: 'How often to be screened for your risk group, and which method is used when.',
    sections: [
      {
        h2: 'The general rule: age forty',
        blocks: [
          {
            kind: 'p',
            text: 'In women without symptoms, the point of screening is to catch the disease before the patient notices anything. Screening is therefore done not because you feel something, but because you feel nothing.',
          },
          {
            kind: 'p',
            text: 'For women at average risk, annual mammography from the age of forty is the widely accepted approach. Some countries run their programme from fifty and every two years; that difference comes from the priorities of health systems, not from a scientific contradiction.',
          },
          {
            kind: 'p',
            text: 'There is no single number for the upper limit either. Screening continues in women whose general health is good and whose life expectancy is over ten years.',
          },
        ],
      },
      {
        h2: 'When it should start earlier',
        blocks: [
          {
            kind: 'p',
            text: 'In the situations below, screening starts earlier and MRI is sometimes added to mammography. We decide the right programme together after listening to your history.',
          },
          {
            kind: 'ul',
            items: [
              {
                text: 'A first-degree relative (mother, sister, daughter) with breast cancer — usually starting ten years before that person’s age at diagnosis',
              },
              { text: 'A family history of ovarian cancer or male breast cancer' },
              { text: 'A known gene change such as BRCA1 or BRCA2' },
              { text: 'Radiotherapy to the chest before the age of thirty' },
              { text: 'A previous diagnosis of breast cancer, or of a pathology that raises risk' },
            ],
          },
        ],
      },
      {
        h2: 'Which method is used when',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Mammography',
                v: 'The backbone of screening. Because it can show millimetre-sized calcifications that cannot be felt, nothing else replaces it for early diagnosis. Over the age of forty it comes first.',
              },
              {
                k: 'Ultrasound',
                v: 'In young, dense breast tissue it covers the areas mammography cannot see well. It is also the quickest way to tell whether a lump is fluid or solid. On its own it is not a screening method.',
              },
              {
                k: 'Breast MRI',
                v: 'Reserved for the high-risk group and selected situations. Its sensitivity is high, but because it also shows harmless findings it can lead to unnecessary biopsies. That is why it is not recommended for everyone.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Dense breast tissue is a phrase that appears often in mammography reports, and it is not a disease. It only means that imaging is harder; in that case adding an ultrasound comes into question.',
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
                q: 'Is the radiation from mammography not harmful?',
                a: 'The dose from one mammogram is very low, comparable to a few months of natural background radiation. The benefit of early diagnosis far outweighs a risk at that level.',
              },
              {
                q: 'I have heard it is very painful — is that true?',
                a: 'The breast is compressed for a few seconds, which can be uncomfortable. Having the scan just after your period, when the breasts are less tender, makes it easier.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'If your screening result mentions a suspicion, it does not mean you have cancer. In most women who are called back, further imaging clarifies the picture and the result turns out to be benign.',
          },
        ],
      },
    ],
  },

  {
    slug: 'i-felt-a-lump-in-my-breast',
    tag: 'What to do',
    read: '5 min read',
    img: '/img/blog-kitle.jpg',
    alt: 'Dressing room and examination couch',
    title: 'I have felt a lump in my breast — what comes next?',
    excerpt:
      'The steps from the first examination to the pathology result, how long each takes and at which point the decision is made.',
    short: 'The steps from first examination to pathology result, and how long they take.',
    sections: [
      {
        h2: 'First, know this',
        blocks: [
          {
            kind: 'p',
            text: 'Most lumps that can be felt in the breast are benign. Under the age of forty in particular, fibroadenomas and cysts are far more common than cancer. Even so, which is which cannot be settled by hand examination alone.',
          },
          {
            kind: 'p',
            text: 'The right response is therefore neither panic nor waiting. An appointment within a week usually ends what would otherwise be months of worry.',
          },
        ],
      },
      {
        h2: 'The process step by step',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'Examination',
                v: 'Both breasts and the armpits are examined by hand. When the lump was noticed, whether it has changed size, how it relates to your cycle and your family history are all recorded. This consultation takes 15–20 minutes.',
              },
              {
                k: 'Imaging',
                v: 'Ultrasound at a young age; mammography and ultrasound together over forty. In most centres this can be done the same day. Whether the lump is fluid or solid becomes clear at this stage.',
              },
              {
                k: 'Biopsy',
                v: 'A needle sample is taken from lumps that look suspicious on imaging. It is done under local anaesthesia, takes about 15 minutes and is usually not painful. You go home the same day.',
              },
              {
                k: 'Pathology',
                v: 'The sample is examined in the pathology laboratory. The result usually arrives within 3–7 days. If cancer is found, hormone receptor and HER2 status are reported in the same document.',
              },
              {
                k: 'Decision',
                v: 'We read the result together. If it is benign, a follow-up plan is made; if cancer is found, we set the order of surgery and, where needed, oncological treatment.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'When nothing is delayed, the whole process is completed within one to two weeks. That interval is not a delay that changes the outcome of treatment — postponing for months is a different matter.',
          },
        ],
      },
      {
        h2: 'Findings that should not wait',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'A hard lump with unclear borders that does not move under the fingers' },
              { text: 'Dimpling, thickening or orange-peel texture of the skin over the lump' },
              { text: 'New inward pulling of the nipple, or crusting that does not heal' },
              { text: 'Spontaneous, one-sided, bloody discharge from the nipple' },
              { text: 'A firm area in the armpit that does not settle' },
              { text: 'Redness, warmth and swelling of the breast outside breastfeeding' },
            ],
          },
          {
            kind: 'p',
            text: 'Bring any previous mammogram, ultrasound and MRI images with you. Comparison with an earlier scan often says more than a new one on its own.',
          },
        ],
      },
    ],
  },

  {
    slug: 'who-is-suitable-for-breast-conserving-surgery',
    tag: 'Surgery',
    read: '6 min read',
    img: '/img/blog-koruyucu-cerrahi.jpg',
    alt: 'Desk and diplomas on the wall',
    title: 'Who is breast-conserving surgery suitable for?',
    excerpt:
      'The size and position of the tumour and its ratio to breast volume decide. Why radiotherapy is an inseparable part of it.',
    short: 'How tumour size, position and breast volume shape the decision.',
    sections: [
      {
        h2: 'The deciding measure is a ratio',
        blocks: [
          {
            kind: 'p',
            text: 'In breast-conserving surgery the tumour is removed with a margin of healthy tissue around it, and the rest of the breast stays in place. In suitable patients, no difference in survival has been shown between this and removing the whole breast. Conserving surgery does not mean compromising on safety.',
          },
          {
            kind: 'p',
            text: 'What decides is not the size of the tumour in centimetres but its size relative to the volume of the breast. A three-centimetre tumour is a problem in a small breast, while the same tumour can be removed comfortably from a large one.',
          },
          {
            kind: 'ul',
            items: [
              { text: 'The size and position of the tumour in the breast' },
              { text: 'Whether it is in a single focus or several' },
              { text: 'Breast volume and the degree of existing sagging' },
              { text: 'Whether you are able to receive radiotherapy after surgery' },
              { text: 'Your own expectations about appearance' },
            ],
          },
        ],
      },
      {
        h2: 'When conserving surgery is not suitable',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'More than one focus',
                v: 'If the tumour sits in several areas of the breast, removing all of them with clear margins would leave an unacceptable deformity.',
              },
              {
                k: 'Clear margins cannot be achieved',
                v: 'If tumour cells are seen at the surgical margin during the operation or in the pathology report, a further procedure is needed. When that repeats, removing the breast is safer.',
              },
              {
                k: 'Radiotherapy is not possible',
                v: 'If the same breast has been irradiated before, or something prevents radiotherapy, conserving surgery is not preferred.',
              },
              {
                k: 'Widespread calcifications',
                v: 'Suspicious microcalcifications spread over a wide area on mammography can mean the disease is more extensive than it looks.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Some items on this list are not absolute barriers. A large tumour, for example, can be shrunk with drug treatment first and so become suitable for conserving surgery. Oncoplastic techniques also make it possible to remove more tissue while preserving the shape of the breast.',
          },
        ],
      },
      {
        h2: 'Why radiotherapy is inseparable',
        blocks: [
          {
            kind: 'p',
            text: 'After breast-conserving surgery, microscopic cells may remain in the breast tissue left behind. Radiotherapy targets that possibility and clearly reduces the risk of the disease returning in the same breast.',
          },
          {
            kind: 'p',
            text: 'Surgery and radiotherapy are therefore a single package. Accepting the operation without planning radiotherapy removes the ground conserving surgery stands on. If you are not able to have radiotherapy, it is sounder to discuss mastectomy from the outset.',
          },
          {
            kind: 'p',
            text: 'Radiotherapy usually begins a few weeks after surgery, is left until after chemotherapy if that is needed, and mostly takes three to five weeks.',
          },
        ],
      },
      {
        h2: 'When the result becomes clear',
        blocks: [
          {
            kind: 'p',
            text: 'Swelling, firmness and altered sensation are normal in the first weeks. The final shape settles within a few months, together with the effect of radiotherapy. That is why we do not judge the result by the first month.',
          },
          {
            kind: 'p',
            text: 'Follow-up continues with examinations every six months in the early years and annual imaging. Keeping your check-ups in the same place is preferable, as it makes the images easier to compare.',
          },
        ],
      },
    ],
  },

  {
    slug: 'how-to-examine-your-breasts',
    tag: 'What to do',
    read: '3 min read',
    img: '/img/blog-kendi-muayene.jpg',
    alt: 'Sink and height-and-weight scale in the examination room',
    title: 'How do you examine your own breasts?',
    excerpt:
      'Once a month, a few days after your period ends. What to look for, and what should send you to a doctor.',
    sections: [
      {
        h2: 'When to do it',
        blocks: [
          {
            kind: 'p',
            text: 'Once a month is enough. The best time is three to five days after your period ends, when the breasts are softest and least tender. After the menopause, pick a fixed day of the month.',
          },
          {
            kind: 'p',
            text: 'The aim is not to hunt for cancer but to learn what is normal for your own breasts. A woman who knows how hers usually feel notices a change far earlier.',
          },
        ],
      },
      {
        h2: 'Step by step',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'In the mirror',
                v: 'With your arms relaxed at your sides, look at both breasts. Check for differences in size and shape, dimpling of the skin, redness or an inward-turned nipple. Slight asymmetry is normal in most women.',
              },
              {
                k: 'Arms raised',
                v: 'Raise your hands above your head, then press your hands on your hips to tense the chest muscles. Skin dimpling becomes more obvious in these positions.',
              },
              {
                k: 'Standing or in the shower',
                v: 'A soapy hand glides and feels more. Using the flat pads of your fingers, sweep the whole breast in small circles. Cover everything from the collarbone to the bra line and from the armpit to the breastbone.',
              },
              {
                k: 'Lying down',
                v: 'Place a small pillow under one shoulder and put that arm behind your head. The tissue spreads over the chest wall, so deeper lumps are easier to feel in this position.',
              },
              {
                k: 'The nipple',
                v: 'Squeeze the nipple gently. Discharge that appears on its own, from one side, from a single duct, or that is bloody, matters; clear or milky discharge from both sides that only appears on squeezing is usually unimportant.',
              },
            ],
          },
        ],
      },
      {
        h2: 'What should send you to a doctor',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'A newly noticed lump that is firm and does not move' },
              { text: 'Persistent firmness or thickening in one breast that the other does not have' },
              { text: 'Dimpling, orange-peel texture or redness that does not settle' },
              { text: 'New inward pulling of the nipple, or a sore that does not heal' },
              { text: 'Bloody discharge, or discharge appearing on its own from a single duct' },
              { text: 'A firm area felt in the armpit' },
            ],
          },
          {
            kind: 'p',
            text: 'Self-examination does not replace mammography. The smallest lump that can be felt is about one centimetre across; mammography can show changes far below that. The two are complementary, not alternatives.',
          },
        ],
      },
    ],
  },

  {
    slug: 'treatments-after-surgery',
    tag: 'Treatment',
    read: '5 min read',
    img: '/img/blog-tedaviler.jpg',
    alt: 'Seating area of the consulting room',
    title: 'Which treatments may be needed after surgery?',
    excerpt:
      'When radiotherapy, hormone therapy and chemotherapy come into question, and how the pathology report shapes the plan.',
    sections: [
      {
        h2: 'The pathology report decides',
        blocks: [
          {
            kind: 'p',
            text: 'Surgery is the first step of treatment, not all of it. Examining the removed tissue reveals the type, grade and size of the tumour, the state of the surgical margins, whether the lymph nodes are involved, and the hormone receptor and HER2 status. The treatment that follows is planned on that information.',
          },
          {
            kind: 'p',
            text: 'Two patients at the same stage can therefore be offered different treatments. That is not an inconsistency; it follows from the biology of the tumour mattering as much as the stage.',
          },
        ],
      },
      {
        h2: 'The treatments that may come into question',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Radiotherapy',
                v: 'Needed in almost every patient after breast-conserving surgery. After a mastectomy it is decided according to the size of the tumour and lymph node involvement. It usually takes three to five weeks and is given as an outpatient.',
              },
              {
                k: 'Hormone therapy',
                v: 'Used when the tumour carries oestrogen or progesterone receptors. Taken as a tablet, mostly for five years or longer. It clearly reduces the risk of the disease returning.',
              },
              {
                k: 'Chemotherapy',
                v: 'Not needed by every patient. It comes into question with lymph node involvement, high grade, young age or hormone receptor negativity. In some patients it is given before surgery, to shrink the tumour.',
              },
              {
                k: 'Targeted therapy',
                v: 'Smart drugs used in HER2-positive tumours. This is the development that has changed the course of that group most over the past twenty years; it is usually planned alongside chemotherapy.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Order and duration',
        blocks: [
          {
            kind: 'p',
            text: 'If chemotherapy is needed it usually comes first, with radiotherapy left until afterwards. Hormone therapy is started once radiotherapy is finished and continues for years. This order can vary from patient to patient.',
          },
          {
            kind: 'p',
            text: 'We run the treatment process together with medical and radiation oncology. So that you have a single point of contact, we take on the referrals and follow-up; you do not have to work out where to go at which stage.',
          },
        ],
      },
      {
        h2: 'Side effects and follow-up',
        blocks: [
          {
            kind: 'p',
            text: 'Every treatment has its own side effects and most of them can be managed. Knowing about them in advance keeps you from panicking when they appear, which is why we go through all of them before treatment begins.',
          },
          {
            kind: 'p',
            text: 'Once treatment is complete, follow-up begins: examinations every six months in the early years and annual imaging. Its purpose is not only to look for recurrence but also to watch the long-term effects of treatment.',
          },
        ],
      },
    ],
  },

  {
    slug: 'should-a-fibroadenoma-be-removed',
    tag: 'Benign',
    read: '4 min read',
    img: '/img/blog-fibroadenom.jpg',
    alt: 'Dressing room: examination couch and examination lamp',
    title: 'Should a fibroadenoma be removed or watched?',
    excerpt:
      'Size, growth rate and imaging findings decide. Which fibroadenomas can be followed with ultrasound.',
    sections: [
      {
        h2: 'What a fibroadenoma is',
        blocks: [
          {
            kind: 'p',
            text: 'A fibroadenoma is a benign lump made up of the normal building blocks of breast tissue. It is most common in the twenties and thirties. It feels round, smooth-edged, slippery and painless; the way it slides away when pushed with a finger is typical.',
          },
          {
            kind: 'p',
            text: 'It responds to hormones: it may grow and become tender before a period, may enlarge in pregnancy, and tends to shrink after the menopause. It does not turn into cancer.',
          },
        ],
      },
      {
        h2: 'Watch or remove',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Can be watched',
                v: 'Fibroadenomas with a typical appearance on ultrasound, smaller than two centimetres, not growing and causing no symptoms can be followed without surgery. Ultrasound every six months in the first year and annually thereafter is usually enough.',
              },
              {
                k: 'Removal is advised',
                v: 'Fibroadenomas that grow quickly, exceed three centimetres, distort the shape of the breast, cause pain or show atypical features on imaging are removed. A lump that first appears over the age of forty is also assessed more carefully.',
              },
              {
                k: 'A biopsy is needed',
                v: 'If the ultrasound findings are not fully typical, the diagnosis must be confirmed with a needle biopsy before any period of watching begins. A decision to watch is only made once the diagnosis is certain.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'The decision is not the surgeon’s alone. Being troubled by the presence of the lump, or feeling anxious at every check-up, is a valid reason too, and we discuss it together.',
          },
        ],
      },
      {
        h2: 'How it is removed',
        blocks: [
          {
            kind: 'p',
            text: 'A fibroadenoma is mostly removed through a small incision hidden in the natural creases of the breast. The procedure usually takes under an hour, you go home the same day and return to daily life within a few days. The removed tissue is always sent to pathology.',
          },
          {
            kind: 'qa',
            items: [
              {
                q: 'If it is removed, will it come back?',
                a: 'A recurrence in the same place is not expected, but a new fibroadenoma can develop elsewhere in the breast. That does not mean the operation failed.',
              },
              {
                q: 'Does it affect breastfeeding?',
                a: 'A standard fibroadenoma operation preserves the milk ducts and does not prevent breastfeeding. For lumps sitting very close to the nipple we discuss this specifically before surgery.',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'mastitis-while-breastfeeding',
    tag: 'Benign',
    read: '4 min read',
    img: '/img/blog-emzirme.jpg',
    alt: 'Window side of the consulting room',
    title: 'Breast infection while breastfeeding',
    excerpt:
      'Mastitis usually settles with antibiotics and breastfeeding continues. What happens if an abscess forms.',
    sections: [
      {
        h2: 'Why it happens',
        blocks: [
          {
            kind: 'p',
            text: 'Breast inflammation during breastfeeding is called mastitis. The most common cause is milk not draining properly: milk collecting in a duct first blocks it and then becomes inflamed. Cracks in the nipple also make it easier for bacteria to enter.',
          },
          {
            kind: 'p',
            text: 'It appears most often in the first three months after birth and at times when the feeding routine changes. Being common does not make it trivial; untreated, it can progress to an abscess.',
          },
        ],
      },
      {
        h2: 'Signs',
        blocks: [
          {
            kind: 'ul',
            items: [
              { text: 'Redness, warmth and pain in one area of the breast' },
              { text: 'A firm, tender area, usually on one side, that can be felt by hand' },
              { text: 'Fever above 38 °C, with chills and shivering' },
              { text: 'Flu-like aching and general weakness' },
            ],
          },
          {
            kind: 'p',
            text: 'When fever is part of the picture, see a doctor within 12–24 hours. Treatment started early largely prevents an abscess from forming.',
          },
        ],
      },
      {
        h2: 'Treatment',
        blocks: [
          {
            kind: 'steps',
            items: [
              {
                k: 'Keep draining',
                v: 'Stopping breastfeeding makes things worse. Continue feeding from the affected breast, and express with a pump if the baby does not take it. The milk is not harmful to the baby.',
              },
              {
                k: 'Antibiotics',
                v: 'An antibiotic compatible with breastfeeding is started and the course is completed. Symptoms ease within two or three days; stopping early leads to a relapse.',
              },
              {
                k: 'Pain and fever',
                v: 'Painkillers that are safe while breastfeeding can be used. Warmth before a feed helps the milk flow; a cold pack afterwards reduces swelling.',
              },
              {
                k: 'If an abscess forms',
                v: 'If there is no improvement in 48–72 hours despite antibiotics, an ultrasound is done to look for an abscess. If one is found it is drained with a needle; larger abscesses may need drainage through a small incision.',
              },
            ],
          },
        ],
      },
      {
        h2: 'Inflammation that does not settle must not be ignored',
        blocks: [
          {
            kind: 'p',
            text: 'Breast infections that appear outside breastfeeding, or that keep coming back despite treatment, must always be investigated. Duct inflammation seen in smokers is a common cause of this picture.',
          },
          {
            kind: 'p',
            text: 'Rarely, there is a type of breast cancer that mimics inflammation. That is why redness and swelling that do not settle despite proper treatment are imaged and, if needed, biopsied from the skin. The aim is not to alarm you but to make sure nothing is missed.',
          },
        ],
      },
    ],
  },

  {
    slug: 'how-to-read-your-pathology-report',
    tag: 'Treatment',
    read: '7 min read',
    img: '/img/blog-patoloji.jpg',
    alt: 'General view of the consulting room',
    title: 'How to read your pathology report',
    excerpt:
      'Tumour type, grade, surgical margin, hormone receptors and HER2. What the terms in the report mean in everyday language.',
    sections: [
      {
        h2: 'Why the report is so technical',
        blocks: [
          {
            kind: 'p',
            text: 'A pathology report is written for the doctors planning treatment, not for the patient. It contains measurements and classifications rather than explanations. That is why it looks meaningless or frightening when you read it on your own.',
          },
          {
            kind: 'p',
            text: 'The headings below explain what the lines you will most often meet actually mean. Even so, do not try to interpret your own report with them; the result as a whole can paint a different picture from the individual lines.',
          },
        ],
      },
      {
        h2: 'Line by line',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                k: 'Type of tumour',
                v: 'The most common type is invasive ductal carcinoma, followed by invasive lobular carcinoma. The phrase “in situ” means the cells have stayed inside the duct and have not passed into surrounding tissue; that is an early situation.',
              },
              {
                k: 'Grade',
                v: 'Describes how much the cells resemble normal tissue, given from 1 to 3. Grade 1 means a slow-moving tumour, grade 3 one that divides faster. It should not be confused with the stage.',
              },
              {
                k: 'Size',
                v: 'The largest diameter of the tumour, in millimetres. The measure used for staging is this pathological one, not the size on imaging.',
              },
              {
                k: 'Surgical margin',
                v: 'States whether there are tumour cells at the edge of the removed tissue. “Margin negative”, or “no tumour seen at the margin”, is the result we want. If the margin is positive, further surgery may be needed.',
              },
              {
                k: 'Lymph nodes',
                v: 'Usually written like “0/3”: none of the three nodes removed is involved. The number of involved nodes is one of the most important headings in deciding the extent of treatment after surgery.',
              },
              {
                k: 'ER and PR',
                v: 'Oestrogen and progesterone receptors. Being positive is good news: it shows the tumour is fed by hormones, and therefore that hormone therapy will work.',
              },
              {
                k: 'HER2',
                v: 'A protein on the cell surface. If it is positive the tumour can move faster; on the other hand there are targeted drugs specific to this group, and they have improved outcomes markedly.',
              },
              {
                k: 'Ki-67',
                v: 'Shows the percentage of dividing cells and gives an idea of the tumour’s pace. It is not a value that decides anything on its own; it is read together with the other headings.',
              },
            ],
          },
        ],
      },
      {
        h2: 'What the report does not say',
        blocks: [
          {
            kind: 'p',
            text: 'A pathology report is a description, not a prediction. It does not say how long you will live or whether the disease will return. Those answers take shape from the combination of stage, biology, the treatment given and how you respond to it.',
          },
          {
            kind: 'qa',
            items: [
              {
                q: 'Can I not just search the terms in my report online?',
                a: 'You can, but the statistics you find are averages over thousands of patients and do not describe your situation. The same two lines can mean different things in different patients.',
              },
              {
                q: 'Can I ask for a second pathology opinion?',
                a: 'Of course. The slides can be reviewed at another centre, and asking for that is your right; we help you prepare what is needed.',
              },
            ],
          },
          {
            kind: 'p',
            text: 'Bring your report to the consultation and we will read it line by line together. Leaving without a single line you did not understand is the precondition for planning the next steps together.',
          },
        ],
      },
    ],
  },
];
