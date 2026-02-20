import React from 'react';
import WordCard from '../components/WordCard';
// import '../components/WordCard.css';
import '../index.css';

const chapterData = {
  1: {
    titleArabic: 'الحروف الهجائية',
    titleEnglish: 'The Alphabets',
    // Teacher instructions & goal for chapter 1
    teacherInfo: {
      instructions: [
        'Teach only single Arabic letters.',
        'Teacher pronounces first; the student repeats.',
        'Focus on correct pronunciation and proper identification of dots.',
        'Practice reading in different directions.',
        'Correct mistakes immediately.',
        'Do not proceed until 100% accuracy is achieved.',
        'Daily revision is mandatory.'
      ],
      goal: 'Clear recognition and correct pronunciation of all letters.'
    },
    pages: [
      [['ا', 'ب', 'ت', 'ث'],
      ['ج', 'ح', 'خ'],
      ['د', 'ذ', 'ر', 'ز'],
      ['س', 'ش', 'ص', 'ض'],
      ['ط', 'ظ', 'ع', 'غ'],
      ['ف', 'ق', 'ك'],
      ['ل', 'م', 'ن', 'و'],
      ['هـ', 'ء', 'ى']]
    ]
  },
  2: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Arabic Alphabet',
    // Teacher instructions & goal for chapter 2
    teacherInfo: {
    instructions: [
      'After learning single letters, the student enters the next stage, where letters are joined together.',
      'These joined or compound letters are known as Murakkabat.',
      'When two or more letters are joined, they form a Murakkab.',
      'Upon completion of this lesson, the student will be able to recognize and identify the different shapes of each letter in joined form.'
    ],
    goal: 'To develop accurate recognition and understanding of Arabic letters in their joined (Murakkab) form.'
  },
    pages: [
      // Page 1 (Total Page 2)
      [['ا', 'لا', { text: 'لا', useImage: true, imagePath: '/images/laam_2.png', imageHoverPath: '/images/laam_2_hover.png' }, 'با', { text: 'لا', useImage: true, imagePath: '/images/laam_1.png', imageHoverPath: '/images/laam_1_hover.png' }],
      ['ل', { text: 'لا', useImage: true, imagePath: '/images/laam_2.png', imageHoverPath: '/images/laam_2_hover.png' }, 'لح', { text: 'لا', useImage: true, imagePath: '/images/laam_1.png', imageHoverPath: '/images/laam_1_hover.png' }, 'بلب'],
      ['ك', 'كب', 'كب', 'كا', 'بکت'],
      ['تكث', 'ب', 'ت', 'ث', 'ن'],
      ['ى', 'با', 'نا', 'تا', 'یا'],
      ['ثا', 'بس', 'يس', 'نس', 'تس'],
      ['ثس', 'ثح', 'تح']],
      // Page 2 (Total Page 3)
      [['نخ', 'یح', 'بج', 'یم', 'بم'],
      ['تين', 'يتن', 'ثثن', 'ج', 'ح'],
      ['خ', 'حث', 'خب', 'جت', 'تحت'],
      ['يجب', 'بخت', 'ة', 'ه', 'بة'],
      ['يه', 'ته', 'نة', 'ه', 'يهب'],
      ['بها', 'بهم', 'د', 'ذ', 'جذ'],
      ['خذ', 'ر', 'ز', 'جر']],
      // Page 3 (Total Page 4)
      [['خز', 'ر', 'ز', 'ير', 'تز'],
      ['س', 'ش', 'سل', 'شل', 'ص'],
      ['ض', 'ط', 'ظ', 'صب', 'طب'],
      ['ضا', 'ظا', 'ع', 'غ', 'ء'],
      ['عز', 'غر', 'صع', 'ضغ', 'بعد'],
      ['تغذ', 'أ', 'ؤ', 'يئ', 'ف'],
      ['ق', 'و', 'قو', 'فو', 'فقل'],
      ['قفل', 'يف', 'م', 'م', 'حم'],
      ['لم', 'تمت']]
    ]
  },
  3: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Movements (Harkaat)',
    // Teacher instructions & goal for chapter 3 page 1
teacherInfo: {
    instructions: [
      '**Zabar (Fat\'ha):** A little slanting dash {{IMG:/images/Zabar.PNG}} over the letters is called **Zabar (Fat\'ha)**.',
      'Zabar is delivered by opening both lips in up and down-side in strong manner **without prolonging the voice**.'
    ],
    goal: 'To correctly pronounce and apply Zabar (Fat\'ha) in Arabic letters and words.'
  },
  // ✨ ONE pageTeacherInfo object with both page indices
  pageTeacherInfo: {
    1: { // Page 2 (Zair)
      instructions: [
        '**Zair (Kasrah):** A little slanting dash{{IMG:/images/Chapter3 Zair.PNG}} appearing under the letters is called **Zair (Kasrah)**.',
        'Zair is delivered by opening the lips downwards **without prolonging the voice**.'
      ],
      goal: 'To correctly pronounce and apply Zair (Kasrah) in Arabic letters and words.'
    },
    2: { // Page 3 (Paish)
      instructions: [
        '**Paish (Dhammah):** A little twisted dash{{IMG:/images/paish.PNG}} over the letters is called **Paish (Dummah)**.',
        'Paish is delivered by making a complete round with the both lips **without prolonging the voice**.'
      ],
      goal: 'To correctly pronounce and apply Paish (Dhammah) in Arabic letters and words.'
    }
  },
    pages: [
      // Page 1 (Total Page 5)
      [['بَ', 'تَ', 'ثَ', 'جَ', 'حَ'],
      ['خَ', 'دَ', 'ذَ', 'رَ', 'زَ'],
      ['سَ', 'شَ', 'صَ', 'ضَ', 'طَ'],
      ['ظَ', 'عَ', 'غَ', 'فَ', 'قَ'],
      ['كَ', 'لَ', 'مَ', 'نَ', 'هَ'],
      ['وَ', 'ءَ =اَ', 'ىَ']],

      // Page 2 (Total Page 6)
      [['بِ', 'تِ', 'ثِ', 'جِ', 'حِ'],
      ['خِ', 'دِ', 'ذِ', 'رِ', 'زِ'],
      ['سِ', 'شِ', 'صِ', 'ضِ', 'طِ'],
      ['ظِ', 'عِ', 'غِ', 'فِ', 'قِ'],
      ['كِ', 'لِ', 'مِ', 'نِ', 'هِ'],
      ['وِ', 'ءِ = اِ', 'ىِ']],
      // Page 3 (Total Page 7)
      [['بُ', 'تُ', 'ثُ', 'جُ', 'حُ'],
      ['خُ', 'دُ', 'ذُ', 'رُ', 'زُ'],
      ['سُ', 'شُ', 'صُ', 'ضُ', 'طُ'],
      ['ظُ', 'عُ', 'غُ', 'فُ', 'قُ'],
      ['كُ', 'لُ', 'مُ', 'نُ', 'هُ'],
      ['وُ', 'ءُ =اُ', 'ىُ']]
    ]
  },

  4: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'THE CHANGING FACES OF LETTERS',
    // Teacher instructions & goal for chapter 4 page 1
teacherInfo: {
    instructions: [
      'Arabic letters change their shape depending on their position at the beginning, middle, or end of a word. ',
      'Learning these positional forms helps students'
    ],
    goal: 'To enable students to identify and distinguish Arabic letters in their beginning, middle, and ending forms within joined words.'
  },
    pages: [
      // Page 1 (Total Page 8)
      [
        ['بَ = بَـ', 'تَ = تَـ', 'ثَ = ثَـ', 'جَ = جَـ'],
        ['حَ = حَـ', 'خَ = خَـ', 'دَ = دَ', 'ذَ = ذَ'],
        ['رَ = رَ', 'زَ = زَ', 'سَ = سَـ', 'شَ = شَـ'],
        ['صَ = صَـ', 'ضَ = ضَـ', 'طَ = طَـ', 'ظَ = ظَـ'],
        ['عَ = عَـ', 'غَ = غَـ', 'فَ = فَـ', 'قَ = قَـ'],
        ['كَ = كَـ', 'لَ = لَـ', 'مَ = مَـ', 'نَ = نَـ'],
        ['هَ = هَـ', 'وَ = وَ', 'ءَ = ءَ', 'يَ = يَـ']
      ],
      // Page 2 (Total Page 9)

      [['بِ = بِـ', 'تِ = تِـ', 'ثِ = ثِـ', 'جِ = جِـ'],
      ['حِ = حِـ', 'خِ = خِـ', 'دِ = دِ', 'ذِ = ذِ'],
      ['رِ = رِ', 'زِ = زِ', 'سِ = سِـ', 'شِ = شِـ'],
      ['صِ = صِـ', 'ضِ = ضِـ', 'طِ = طِـ', 'ظِ = ظِـ'],
      ['عِ = عِـ', 'غِ = غِـ', 'فِ = فِـ', 'قِ = قِـ'],
      ['كِ = كِـ', 'لِ = لِـ', 'مِ = مِـ', 'نِ = نِـ'],
      ['هِ = هِـ', 'وِ = وِ', 'ءِ = اِ', 'يِ = يِـ']],
      // Page 3 (Total Page 10)

      [['بُ = بُـ', 'تُ = تُـ', 'ثُ = ثُـ', 'جُ = جُـ'],
      ['حُ = حُـ', 'خُ = خُـ', 'دُ = دُ', 'ذُ = ذُ'],
      ['رُ = رُ', 'زُ = زُ', 'سُ = سُـ', 'شُ = شُـ'],
      ['صُ = صُـ', 'ضُ = ضُـ', 'طُ = طُـ', 'ظُ = ظُـ'],
      ['عُ = عُـ', 'غُ = غُـ', 'فُ = فُـ', 'قُ = قُـ'],
      ['كُ = كُـ', 'لُ = لُـ', 'مُ = مُـ', 'نُ = نُـ'],
      ['هُ = هُـ', 'وُ = وُ', 'ءُ = اُ', 'يُ = يُـ']]
    ]
  },
 5: {
  titleArabic: 'ترکیب حروف',
  titleEnglish: 'Exercises of Movements (Zair, Zabar, Paish)',
  pages: [
    // Page 1 (Total Page 11) – Exercise of Zair
    [
      ['اِ بِ لِ=اِبِلِ', 'يَ لِ جَ=يَلِجَ', 'سَ فِ هَ=سَفِهَ', 'حَ سِ بَ=حَسِبَ'],
      ['لَ مِ نَ=لَمِنَ', 'مَ لَ كِ=مَلَكِ', 'فَ لَ قِ=فَلَقِ', 'شَ هِ دَ=شَهِدَ'],
      ['رَ حِ مَ=رَحِمَ', 'وَ سِ عَ=وَسِعَ', 'لَ بِ ثَ=لَبِثَ', 'يَ بِ سَ=يَبِسَ'],
      ['صَ عَ قَ=صَعِقَ', 'اَ ذِ نَ=اَذِنَ', 'عَ مِ يَ=عَمِيَ', 'فَ زِ عَ=فَزِعَ'],
      ['غَ ضِ بَ=غَضِبَ', 'رَ ضِ يَ=رَضِيَ', 'بَ رِ قَ=بَرِقَ', 'كَ رِ هَ=كَرِهَ'],
      ['اَ دَ هَ=اَدَهَ', 'عَ رِ مِ=عَرِمِ', 'عَ مِ لَ=عَمِلَ', 'حَ بِ طَ=حَبِطَ'],
      ['بَ خِ لَ=بَخِلَ', 'خَ شِ يَ=خَشِيَ', 'عَ لِ مَ=عَلِمَ', 'فَ لِ مَ=فَلِمَ']
    ],
    // Page 2 (Total Page 12) – Exercise of Zabar
    [
      ['عَ بَ دَ=عَبَدَ', 'اَ مَ رَ=اَمَرَ', 'مَ رَ جَ=مَرَجَ', 'ثَ مَ رَ=ثَمَرَ'],
      ['فَ عَ لَ=فَعَلَ', 'رَ فَ ثَ=رَفَثَ', 'عَ بَ سَ=عَبَسَ', 'نَ كَ صَ=نَكَصَ'],
      ['كَ فَ رَ=كَفَرَ', 'قَ تَ لَ=قَتَلَ', 'بَ لَ غَ=بَلَغَ', 'حَ ضَ رَ=حَضَرَ'],
      ['زَ عَ مَ=زَعَمَ', 'ضَ رَ بَ=ضَرَبَ', 'صَ لَ حَ=صَلَحَ', 'حَ حسَ دَ=حَسَدَ'],
      ['صَ بَ رَ=صَبَرَ', 'خَ تَ مَ=خَتَمَ', 'مَ طَ رَ=مَطَرَ', 'شَ رَ حَ=شَرَحَ'],
      ['ذَ هَ بَ=ذَهَبَ', 'ظَ هَ رَ=ظَهَرَ', 'اَ حَ دَ=اَحَدَ', 'هَ لَ كَ=هَلَكَ'],
      ['حَ مَ لَ=حَمَلَ', 'عَ شَ رَ=عَشَرَ', 'رَ فَ عَ=رَفَعَ', 'نَ بَ اَ=نَبَاَ']
    ],
    // Page 3 (Total Page 13) – Exercise of Paish
    [
      ['رُ سُ لُ=رُسُلُ', 'رُ بُ عُ=رُبُعُ', 'سُ بُ لَ=سُبُلَ', 'وُ جِ دَ=وُجِدَ'],
      ['لُ عِ نَ=لُعِنَ', 'فُ عِ لَ=فُعِلَ', 'جُ عِ لَ=جُعِلَ', 'اُ فُ قِ=اُفُقِ'],
      ['حُ بُ كِ=حُبُكِ', 'خُ لِ قَ=خُلِقَ', 'تَ زِ رُ=تَزِرُ', 'قُ ضِ يَ=قُضِيَ'],
      ['يَ هَ بُ=يَهَبُ', 'فُ تِ حَ=فُتِحَ', 'اُ خَ رُ=اُخَرُ', 'خَ بُ ثَ=خَبُثَ'],
      ['حَ سُ نَ=حَسُنَ', 'سُ ئِ لَ=سُئِلَ', 'صُ حُ فِ=صُحُفِ', 'اَ عِ ظُ=اَعِظُ'],
      ['ذُ كِ رَ=ذُكِرَ', 'كُ تِ بَ=كُتِبَ', 'سُ قِ طَ=سُقِطَ', 'وَ هُ وَ=وَهُوَ'],
      ['حُ شِ رَ=حُشِرَ', 'عُ رِ ضَ=عُرِضَ', 'قُ رِ ئَ=قُرِئَ', 'مُ نِ عَ=مُنِعَ']
    ]
  ]
},
  6: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Alif Maddah',
    teacherInfo: {
      instructions: [
        'Alif Maddah: If **Zabar** is placed before an Alif{{IMG:/images/AlifMaddah.PNG}} it is called **Alif Maddah**.',
        'For example:{{IMG:/images/Bay.PNG}}Zabar{{IMG:/images/Baa.PNG|3rem}} and if it is pronounced twice then{{IMG:/images/Bay.PNG}} Zabar -ALif{{IMG:/images/Baa2.PNG|4rem}}'
      ],
      goal: 'Recognize Alif Maddah and pronounce the elongated vowel correctly.'
    },
    teacherImage: {
      imagePath: '/images/ChapterNo.6.png',
      alt: 'Alif Maddah example diagram'
    },
    // Optional per-page titles (page index is zero-based)
    pageTitles: {
      1: {
        titleEnglish: 'Exercise of Alif Maddah',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 14)
      [['بَا', 'تَا', 'ثَا', 'جَا', 'حَا'],
      ['خَا', 'دَا', 'ذَا', 'رَا', 'زَا'],
      ['سَا', 'شَا', 'صَا', 'ضَا', 'طَا'],
      ['ظَا', 'عَا', 'غَا', 'فَا', 'قَا'],
      ['كَا', 'لَا', 'مَا', 'نَا', 'هَا'],
      ['وَا', 'ءَا', 'يَا']],

      // Appended exercises (previously chapter 7 Page 1)
      [['قَالَ', 'قَالَا', 'اَرَادَ', 'اَرَادَا'],
      ['حَاقَ', 'ذَاقَا', 'اَصَابَ', 'اَصَابَهَا'],
      ['مَعَاذَ', 'فَمَاذَا', 'فَتَابَ', 'طَاقَةَ'],
      ['آمَنَ', 'عَاقَبَ', 'يَزَالُ', 'وَضَاقَ'],
      ['ثَالِثُ', 'لِسَانِ', 'اَصَابَ', 'وَكَانَ'],
      ['فَقَالَ', 'هَادِيَ', 'حَارَبَ', 'ذَاتَ'],
      ['ظَاهِر']]
    ],

  },

  8: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Yaa-i Maddah',
    teacherInfo: {
      instructions: [
        '**Yaa-i Maddah:** If **Zair** is placed before a Sakin Yaa{{IMG:/images/YaaImaddah.PNG}} it is called **Yaa-i Maddah**.',
        'For example:{{IMG:/images/Bay.PNG}}Zair{{IMG:/images/BaZair.PNG|3rem}}And if it is pronounced twice then{{IMG:/images/Bay.PNG}}Zair - Yaa{{IMG:/images/BiYa.PNG|4rem}} .'
      ],
      goal: 'Recognize the Yaa-i Maddah form and pronounce the combined/elongated Yaa sound correctly.'
    },
    pageTitles: {
      1: {
        titleEnglish: 'Exercise of Yaa-i Maddah',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 16)
      [['بِيْ', 'تِيْ', 'ثِيْ', 'جِيْ', 'حِيْ'],
      ['خِيْ', 'دِيْ', 'ذِيْ', 'رِيْ', 'زِيْ'],
      ['سِيْ', 'شِيْ', 'صِيْ', 'ضِيْ', 'طِيْ'],
      ['ظِيْ', 'عِيْ', 'غِيْ', 'فِيْ', 'قِيْ'],
      ['كِيْ', 'لِيْ', 'مِيْ', 'نِيْ', 'هِيْ'],
      ['وِيْ', 'اِيْ', 'يِيْ']],
      // Page 2 (Total Page 17)
      [['صِرَاطِىْ', 'صِرَاطِ', 'عِبَادِيْ', 'عِبَادِ'],
      ['عَذَابِيْ', 'عَذَابِ', 'لِاَخِيْهِ', 'نُرِيْ'],
      ['كُلِيْ', 'يَمِيْزَ', 'بَنَاتِيْ', 'صِرَاطِيْ'],
      ['اِيمَانَ', 'عِيْدِ', 'سَنَزِيدُ', 'يَضِيْقُ'],
      ['تُثِيْرُ', 'نَسِيْتُ', 'اُصِيْبَ', 'وَقِيْلَ'],
      ['اَكِيْدُ', 'مُهِيْنِ', 'وَحِيْنَ', 'ذِيْ ثَلَاثِ'],
      ['عَظِيمِ']]
    ]
  },
  10: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Wao Maddah',
    teacherInfo: {
      instructions: [
        '**Wao Maddah:** If **Paish** is placed before a Sakin Wao{{IMG:/images/waomaddah1.PNG}} it is called **Wao Maddah**.',
        'For example:{{IMG:/images/Bay.PNG}}Paish {{IMG:/images/waomaddah2.PNG|3rem}}And if it is pronounced twice then{{IMG:/images/Bay.PNG}} Paish - Wao{{IMG:/images/waomaddah3.PNG|3rem}}.'
      ],
      goal: 'Recognize Wao Maddah and pronounce the elongated Wao sound correctly.'
    },
        teacherImage: {
      imagePath: '/images/ChapterNo8.png',
      alt: 'Wao Maddah example diagram'
    },
     pageTitles: {
      1: {
        titleEnglish: 'Exercise of Wao Maddah',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 18)
      [['بُوْ', 'تُوْ', 'ثُوْ', 'جُوْ'],
      ['حُوْ', 'خُوْ', 'دُوْ', 'ذُوْ'],
      ['رُوْ', 'زُوْ', 'سُوْ', 'شُوْ'],
      ['صُوْ', 'ضُوْ', 'طُوْ', 'ظُوْ'],
      ['عُوْ', 'غُوْ', 'فُوْ', 'قُوْ'],
      ['كُوْ', 'لُوْ', 'مُوْ', 'نُوْ'],
      ['هُوْ', 'وُوْ', 'اُوْ', 'يُوْ']],
      // Page 2 (Total Page 19)
    [
      ['فَتُوْبُوْا', 'اَتُوْبُ', 'اَفِيضُوْا', 'تَفِيْضُ'],
      ['تَخَافُوْا', 'اَخَافُ', 'نُوحِيْهَا', 'اُوذِيْنَا'],
      ['اَطِيْعُوْنِي', 'يَقُوْلُوْنَ', 'فَتُوْبُوْا', 'وَرَابِطُوْا'],
      ['اُوْتِيَ', 'عُوْقِبَ', 'بَرَزُوْا', 'وَرَضُوْا'],
      ['لِمَا نُهُوْا', 'فَرِحُوْا', 'نَكَثُوْا', 'فَنَسُوْا'],
      ['خَلَصُوْا', 'وَاُوْذُوْا', 'حَافِظُوْا', 'تَرَكُوْا'],
      ['خَرَقُوْا']
    ]
    ]
  },
  12: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Erected Harkaat',
     teacherInfo: {
    instructions: [
      '**Erected Zabar:** A short vertical line appearing above the letter{{IMG:/images/erected Zabar.PNG|2.5rem}} is called **Erected Zabar**.',
      'If a small sound is produced by opening the lips slightly upwards on the pronunciation of a letter, it is called **Zabar rule**.',
      'And if it is pronounced twice as long, it is called the **rule of Alif Maddah and Erected Zabar**.',
      'For example:{{IMG:/images/erected Zabar1.PNG|3rem}}**=**  Zabar - Alif{{IMG:/images/erected Zabar2.PNG|3rem}}'
    ],
    goal: 'Understand that Huroof-i Maddah and Erected Harkaat are pronounced the same (one Alif length), and correctly apply Erected Zabar.'
  },
    pageTitles: {
      1: {
        titleEnglish: 'Exercise of Erected Zabar',
        titleArabic: 'ترکیب حروف'
      },
      2: {
        titleEnglish: 'Erected Zair',
        titleArabic: 'ترکیب حروف'  
      },
      3: {
        titleEnglish: 'Exercise of Erected Zair',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 20)
      [['بَا=بٰ', 'تَا=تٰ', 'ثَا=ثٰ', 'جٰ'],
      ['حٰ', 'خٰ', 'دٰ', 'ذٰ'],
      ['رٰ', 'زٰ', 'سٰ', 'شٰ'],
      ['صٰ', 'ضٰ', 'طٰ', 'ظٰ'],
      ['عٰ', 'غٰ', 'فٰ', 'قٰ'],
      ['كٰ', 'لٰ', 'مٰ', 'نٰ'],
      ['هٰ', 'وٰ', 'يٰ']],
      // Page 2 (Total Page 21)
    [
      ['مٰلِكِ=مالِكِ', 'كِتٰبُ=كِتَابُ', 'اٰتٰنَا', 'قٰلَ=قَالَ'],
      ['انَّهَا', 'سَمٰوٰتِ', 'اٰيٰتِ', 'شُكْرٰى'],
      ['خَلَتْكَ', 'اٰمَنُوا', 'عٰهَدُوا', 'تَزٰوَرُ'],
      ['يُضٰعَفُ', 'اٰثٰرِ', 'اُسٰرٰى', 'نَصٰرٰى'],
      ['مِيْكٰلَ', 'قٰلَ', 'هٰذَا', 'يُوحٰى'],
      ['ذٰلِكُمَا', 'تَظٰهَرَا']
    ],
      // Page 3 (Total Page 22)
      [
        ['بي=بٖ', 'تى=تٖ', 'ثى=ثٖ', 'جٖ'],
        ['حٖ', 'خٖ', 'دٖ', 'ذٖ'],
        ['رٖ', 'زٖ', 'سٖ', 'شٖ'],
        ['صٖ', 'ضٖ', 'طٖ', 'ظٖ'],
        ['عٖ', 'غٖ', 'فٖ', 'قٖ'],
        ['كٖ', 'لٖ', 'مٖ', 'نٖ'],
        ['هٖ', 'وٖ', 'يٖ']
      ],
      // Page 4 (Total Page 23)
      [
        ['اٖلٰفِ=اِيلٰفِ', 'مِيْثَاقِهٖ', 'رُسُلِهٖ', 'رَسُوْلِهٖ'],
        ['اٰيٰتِهٖ', 'بِوَلَدِهٖ', 'عِبَادِهٖ', 'عِبَادَتِهٖ'],
        ['ثَمَرِهٖ', 'تِلَاوَتِهٖ', 'كُتُبِهٖ', 'وَجُنُوْدِهٖ'],
        ['سَعَتِهٖ', 'هٰذِهٖ', 'بِيَدِهٖ', 'مَوَاضِعِهٖ'],
        ['سَبِيْلِهٖ', 'مِيْثَاقِهٖ', 'رُسُلِهٖ', 'رَسُوْلِهٖ'],
        ['اٰيٰتِهٖ', 'اٰيَتِهٖ', 'عِبَادِهٖ', 'عِبَادَتِهٖ'],
        ['ثَمَرِهٖ']
      ]
    ]
  },
  16: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Inverted Paish',
    teacherInfo: {
    instructions: [
      'This sign on a letter{{IMG:/images/InvertedPaish.PNG|3rem}} is called an **inverted Paih**.',
      '**inverted Paish**: If a small sound is produced by moving the lips forward, that is, moving the lips towards the full circle, on the pronunciation',
      'And if it is pronounced with a sound twice as long, **it is called the rule of Wao Maddah and Inverted Paish**.',
      'For example:{{IMG:/images/InvertedPaish2.PNG|3rem}}Paish - Wao{{IMG:/images/InvertedPaish3.PNG|3rem}}.'
    ],
    goal: 'Understand Inverted Paish and its relation to Wao Maddah, and pronounce it correctly.'
  },
       pageTitles: {
      1: {
        titleEnglish: 'Exercise of Inverted Paish',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 24)
      [['بٗ', 'تٗ', 'ثٗ', 'جٗ'],
      ['حٗ', 'خٗ', 'دٗ', 'ذٗ'],
      ['رٗ', 'زٗ', 'سٗ', 'شٗ'],
      ['صٗ', 'ضٗ', 'طٗ', 'ظٗ'],
      ['عٗ', 'غٗ', 'فٗ', 'قٗ'],
      ['كٗ', 'لٗ', 'مٗ', 'نٗ'],
      ['هٗ', 'وٗ', 'يٗ']],
      // Page 2 (Total Page 25)
      [
        ['دَاوٗدُ=دَاوُوْدُ', 'وٗرِيَ=وُوْرِيَ', 'لِيَسُوْءٗا=لِيَسُوْءُوْا', 'كَلِمَتُهٗ'],
        ['اٰيٰتُهٗ', 'مَا وٗرِيَ', 'رِسَالَتَهٗ', 'فِصٰلُهٗ'],
        ['لِيُرِيَهٗ', 'نَصَرَهٗ', 'خَتَمَهٗ', 'فَقَتَلَهٗ'],
        ['مِزَاجُهٗ', 'وَرِثَهٗ', 'مَا وٗرِيَ', 'كَلِمَتُهٗ'],
        ['لِيُرِيَهٗ', 'رِسَالَتَهٗ', 'فِصٰلُهٗ', 'يَرَهٗ'],
        ['اٰيٰتُهٗ', 'خَتِمَهٗ']
      ]
    ]
  },
  18: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Wao Leen',
    teacherInfo: {
    instructions: [
      'If Zabar appears before a Sakin Wao{{IMG:/images/waoleen.PNG|3rem}}, it is called **Wao Leen**.',
      '**Reading Method of Wao Leen:**',
      'The lips are just to open (like in Zabar) and immediately they are made completely round. The delivery is done very softly without prolonging.'
    ],
    goal: 'Recognise Wao Leen and pronounce it correctly with soft, non‑prolonged delivery.'
  },
      teacherImage: {
      imagePath: '/images/spin.png',
      alt: 'Alif Maddah example diagram'
    },
    pageTitles: {
      1: {
        titleEnglish: 'Exercise of Wao Leen',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 26)
      [['بَوْ', 'تَوْ', 'ثَوْ', 'جَوْ'],
      ['حَوْ', 'خَوْ', 'دَوْ', 'ذَوْ'],
      ['رَوْ', 'زَوْ', 'سَوْ', 'شَوْ'],
      ['صَوْ', 'ضَوْ', 'طَوْ', 'ظَوْ'],
      ['عَوْ', 'غَوْ', 'فَوْ', 'قَوْ'],
      ['كَوْ', 'لَوْ', 'مَوْ', 'نَوْ'],
      ['هَوْ', 'وَوْ', 'اَوْ', 'يَوْ']],
      // Page 2 (Total Page 27)
      [
        ['تَعَالَوْا', 'فَنَادَوْا', 'مَوْجُ', 'طَغَوْا'],
        ['عَلَوْا', 'سَوْفَ', 'فَوْقَ', 'يَرَوْنَا'],
        ['حَوْلَ', 'تَعَاطَوْا', 'نَوْمَ', 'خَوْفَ'],
        ['قَضَوْا', 'وَتَوَاصَوْا', 'عَوْرَاتِ', 'اَوْسَطَ'],
        ['ثَوْبُ', 'سَوْءَةَ', 'بِصَوْتِكَ', 'كَوْثَرَ'],
        ['قَوْمُكَ', 'اَذَوْا', 'زَوْجَهَا', 'تَرَاضَوْا'],
        ['وَنَهَوْا', 'حَوْلَهُ', 'عَفَوْنَا', 'مَوْقُوفُونَ'],
        ['اَوْحَىٰ لَهَا', 'يَرَوْنَهَوْا']
      ]
    ]
  },

  20: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Yaa-i Leen',
    teacherInfo: {
    instructions: [
      'If Zabar appears before a Sakin Yaa {{IMG:/images/Yaa-i-Leen.PNG|3rem}}, it is called **Yaa-i Leen**.',
      '**Reading Method of Yaa-i Leen:**',
      'The lips are about to open (like in Zabar) and immediately they are stretched sideways. The delivery is done very softly without prolonging.'
    ],
    goal: 'Recognise Yaa-i Leen and pronounce it correctly with soft, non‑prolonged delivery.'
  },
  pageTitles: {
      1: {
        titleEnglish: 'Exercise of Yaa-i Leen',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 29)
      [['بَيْ', 'تَيْ', 'ثَيْ', 'جَيْ'],
      ['حَيْ', 'خَيْ', 'دَيْ', 'ذَيْ'],
      ['رَيْ', 'زَيْ', 'سَيْ', 'شَيْ'],
      ['صَيْ', 'ضَيْ', 'طَيْ', 'ظَيْ'],
      ['عَيْ', 'غَيْ', 'فَيْ', 'قَيْ'],
      ['كَيْ', 'لَيْ', 'مَيْ', 'نَيْ'],
      ['هَيْ', 'وَيْ', 'اَيْ', 'يَيْ']],
      // Page 2 (Total Page 30)
      [
        ['اٰتَيْنَا', 'غَيْبِ', 'بَيْنَ', 'عَلَيْهَا'],
        ['عَصَيْنَا', 'فَعَلَيْهَا', 'لَيْلَةُ', 'زَوْجَيْنِ'],
        ['هَيْهَاتَ', 'عَيْنَيْنِ', 'شَيْطٰنٍ', 'بَيْنِىْ'],
        ['وَبَيْنَكَ', 'يٰوَيْلَتٰى', 'لَيْتَنِىْ', 'قَوْسَيْنِ'],
        ['لَا رَيْبَ', 'سُلَيْمٰنَ', 'اَيْنَ', 'عَيْنَ'],
        ['فَكَيْفَ', 'سَقَيْتَ', 'سَيْلَ', 'صَيْدُ'],
        ['زَيْتُهَا', 'ضَيْفِهِ', 'الْهَيْنِ', 'صٰلِحِيْنَ'],
        ['حَوْلَيْنِ', 'كٰامِلَيْنِ']
      ]
    ]
  },
  22: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Jazm or Sukoon',
    teacherInfo: {
    instructions: [
      'This sign {{IMG:/images/Jazm or Sukoon2.PNG|3rem}} is called **Jazm** or **Sukoon**, it is written over the letter.',
      'Jazm letter always read along with its predecessor having Zabar Zair Paish.',
      'The letter having Zabar Zair Paish is quickly joined with the Sakin letter and the sound of the Sakin letter is made still at its point of articulation.',
      'The sound produced should be clear.',
      'The tongue and the mouth should be completely still while delivering the Sakin letter except The following ⭐'
    ],
    goal: 'Understand the concept of Jazm (Sukoon) and correctly pronounce letters carrying this sign.'
  },
  teacherImage: {
      imagePath: '/images/Jazm or Sukoon.png',
      alt: 'Wao Maddah example diagram'
    }, 
  pageTeacherInfo: {
      1: { // Page 2 (Total Page 32) – Exercise of Jazm
        instructions: [
          '{{IMG:/images/Jazm or Sukoon3.PNG}} if these letters have a Jazm then.',
          'The voice must bounce so keep this in mind.',
          'If there is a Jazm on Hamzah then both the voice and breath have to be stopped together in a stern manner.',
          'But the sound should be not removed.'
        ],
        imagePath: '/images/Jazm or Sukoon4.png',
      },
      3: {
        instructions: [
          '{{IMG:/images/Jazm or Sukoon3.PNG}} if these letters have a Jazm then.',
          'The voice must bounce so keep this in mind.'
        ],
        imagePath: '/images/Jazm or Sukoon4.png',
      },
    },
  pageTitles: {
      1: {
        titleEnglish: 'Jazm or Sukoon',
        titleArabic: 'ترکیب حروف'
      },
      2: {
        titleEnglish: 'Exercise of Jazm',
        titleArabic: 'ترکیب حروف'
      },
      3: {
        titleEnglish: 'Exercise of Jazm',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 31)
      [
        ['اَفْ اِفْ اُفْ', 'اَحْ اِحْ اُحْ', 'اَثْ اِثْ اُثْ', 'اَهْ اِهْ اُهْ'],
        ['اَشْ اِشْ اُشْ', 'اَخْ اِخْ اُخْ', 'اَصْ اِصْ اُصْ', 'اَسْ اِسْ اُسْ'],
        ['اَغْ اِغْ اُغْ', 'اَزْ اِزْ اُزْ', 'اَضْ اِضْ اُضْ', 'اَذْ اِذْ اُذْ'],
        ['اَظْ اِظْ اُظْ', 'اَوْ اُوْ', 'اَيْ اُيْ', 'اَلْ اِلْ اُلْ'],
        ['اَنْ اِنْ اُنْ', 'اَعْ اِعْ اُعْ', 'اَمْ اِمْ اُمْ', 'اَرْ اِرْ اُرْ'],
        ['تَ عْ تِ عْ تُ عْ', 'اَكْ اِكْ اُكْ']
      ],
      // Page 2 (Total Page 32)
      [
        ['اَقْ اِقْ أُقْ', 'اَطْ اِطْ أُطْ', 'اَبْ اِبْ أُبْ', 'اَجْ اِجْ أُجْ'],
        ['اَدْ اِدْ أُدْ', 'مَءْ مِءْ مُءْ']
      ],
       // Page 3 (Total Page 33)
      [
        ['خِفْتُ', 'يُفْسِدُونَ', 'نَحْنُ', 'اِحْدٰهُمَا'],
        ['مِثْقَالَ', 'يُثْخِنَ', 'اِهْدِنَا', 'يُهْلِكَ'],
        ['خَشْيَةَ', 'اِشْرَبُوا', 'اِخْرَاجُ', 'يُخْلِفَ'],
        ['اَصْلَحَ', 'نُصْلِيْهِ', 'عَسْعَسَ', 'اِسْحٰقَ'],
        ['تُحْشَرُونَ', 'اَحْسَنُ', 'يَزِغْ', 'يُغْنِ'],
        ['أُزْلِفَتْ', 'حِزْبَ', 'يُضْلِلِ', 'بِاِذْنِ'],
        ['يُذْكَرَ', 'اَظْلَمُ', 'اِيْتُونِي', 'اَيْنَ'],
        ['أُوذُوا', 'اَوْفُوا', 'فَقُلْ', 'صُنَعَ'],
        ['نَعْبُدُ', 'يُعْلِنُونَ', 'يَرْجِعُونَ', 'فِتْنَتُكَ'],
        ['فَيَمُتْ', 'تَكْرَهُوْا', 'رُسُلِكْ']
      ],
      // Page 4 (Total Page 34)
      [
        ['خَلَقْنَا', 'شَطْرَهٗ', 'قَبْلِكَ', 'تَجْرِي'],
        ['اَدْنٰى', 'أُقْسِمُ', 'يُطْعِمُ', 'وَتُبُ'],
        ['تُجْزَوْنَ', 'يَجِدُ', 'رَزَقْنَا', 'اِطْعَامٌ'],
        ['جِبْرِيلَ', 'رِجْزٌ', 'وَتُدْلُوْا', 'يُقْبَلُ'],
        ['تُطْعِمُونَ', 'سُبْحٰنَكَ', 'مَجْرٰيهَا', 'عُدْوَانَ'],
        ['نَاتِ', 'يُؤْمِنُونَ', 'رُؤْيَاكَ', 'شِئْتُمَا']
      ]
    ]
  },

  24: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Shadd',
    teacherInfo: {
    instructions: [
      'This sign{{IMG:/images/shadd.PNG}}is called **Shadd**, it is written over the letter with **Harkaat**.',
      'A Shadd letter is always read by joining with its predecessor having **Harkaat**.',
      'In Arabic language, whenever a word has two same letters, first having jazm/sukoon and second having a **Harkaat**,',
      'Then instead of writing the same letter twice, the letter is written only once with the sign of shadd, so that it read like two letters, therefore reading the shadd letter takes time equivalent to reading two letters.',
      'For example:{{IMG:/images/shadd2.PNG}}',
      '**Reading method of shadda:** Read it stronger and clearer than the normal.'
    ],
    goal: 'Understand the concept of Shadd and pronounce it correctly with emphasis and clarity.',
    imagePath: '/images/shadd3.png'
  },
   pageTeacherInfo: {
      2: { 
        instructions: [
          '**Exercise of Shadd** And now discussing two more features of the letters regarding voice and breath.',
          'Some letters have a continous voice and some have stopping voice,',
          'Some letters have a continous breath and some have stopping breath.'
        ],
      }
    },
  pageTitles: {
      1: {
        titleEnglish: 'Shadd',
        titleArabic: 'ترکیب حروف'
      },
      2: {
        titleEnglish: 'Exercise of Shadd',
        titleArabic: 'ترکیب حروف'
      },
      3: {
        titleEnglish: 'Exercise of Shadd',
        titleArabic: 'ترکیب حروف'
      },
      4: {
        titleEnglish: 'Exercise of Shadd',
        titleArabic: 'ترکیب حروف'
      },
      5: {
        titleEnglish: 'Exercise of Shadd',
        titleArabic: 'ترکیب حروف'
      }
    },
    pages: [
      // Page 1 (Total Page 35)
      [['اَبَّ', 'اِبِّ', 'أُبُّ', 'اَتَّ'],
      ['اِتِّ', 'أُتُّ', 'اَثَّ', 'اِثِّ'],
      ['أُثُّ', 'اَجَّ', 'اِجِّ', 'أُجُّ'],
      ['اَحَّ', 'اِحِّ', 'أُحُّ', 'اَخَّ'],
      ['اِخِّ', 'أُخُّ', 'اَدَّ', 'اِدِّ'],
      ['أُدُّ', 'اَذَّ', 'اِذِّ', 'أُذُّ'],
      ['اَرَّ', 'اِرِّ', 'أُرُّ', 'اَزَّ'],
      ['اِزِّ', 'أُزُّ', 'اَسَّ', 'اِسِّ'],
      ['أُسُّ', 'اَشَّ', 'اِشِّ', 'أُشُّ'],
      ['اَصَّ', 'اِصِّ', 'أُصُّ', 'اَضَّ'],
      ['أُطُّ', 'اِضِّ', 'أُضُّ', 'اَطَّ', 'اِطِّ']],
      // Page 2 (Total Page 36)
      [['اَظَّ', 'اِظِّ', 'أُظُّ', 'اَعَّ'],
      ['اِعِّ', 'أُعُّ', 'اَغَّ', 'اِغِّ'],
      ['أُغُّ', 'اَفَّ', 'اِفِّ', 'أُفُّ'],
      ['اَقَّ', 'اِقِّ', 'أُقُّ', 'اَكَّ'],
      ['اِكِّ', 'أُكُّ', 'اَلَّ', 'اِلِّ'],
      ['أُلُّ', 'اَنَّ', 'اِنِّ', 'أُنُّ'],
      ['اَمَّ', 'اِمِّ', 'أُمُّ', 'اَهَّ'],
      ['اِهِّ', 'أُهُّ', 'اَوَّْ', 'اِوِّْ'],
      ['أُؤُّ', 'اَيَّ', 'اِيِّ', 'أُيُّ']],
            // Page 1 (Total Page 37)
      [
        ['كَفَّلَهَا', 'يَكُفُّونَ', 'يَزِفُّونَ', 'وُفِّيَتْ'],
        ['شُحَّ', 'لِيُمَحِّصَ', 'شُحَّ', 'الْمُسَحِّرِينَ'],
        ['وَبَثَّ', 'يَبُثُّ', 'بَثِّيْ', 'الثُّلُثُ'],
        ['فَمَهِّلِ', 'الْوَهَّابُ', 'تَلَهّٰى', 'الْقَهَّارُ'],
        ['يُنَشَّأُ', 'اَهُشُّ', 'بِالشَّهَادَةِ', 'بُشِّرَ'],
        ['الْفَخَّارِ', 'وَسَخَّرَ', 'تَاَخَّرَ', 'يُؤَخِّرُ'],
        ['الصَّلِحٰتِ', 'فَصَّلَ', 'يَقُصُّ', 'حَصَّلَ'],
        ['اَحَسَّ', 'يَدُسُّهُ', 'يُمَسِّكُونَ', 'اَسَّسَ']
      ],
      // Page 2 (Total Page 38)
      [
        ['يَغْشٰى', 'تُغْنِىَ', 'يَزِغْ', 'يُغْنِ'],
        ['نَزَّلَهٗ', 'وَالْعُزّٰى', 'وَتُعِزُّ', 'تَؤُزُّهُمْ'],
        ['نَضَّاخَتَانِ', 'فَضَّلَ', 'يَحُضُّ', 'نُفَضِّلُ'],
        ['وَاَيَّدْنٰهٗ', 'اِيَّاكَ', 'زُيِّنَ', 'اَمَانِيُّهُمْ'],
        ['كَذَّبُوْا', 'الذِّكْرُ', 'فَاَذَّنَ', 'الذُّنُوْبَ'],
        ['وَالظَّاهِرُ', 'الظَّهِيرَةِ', 'الظُّلُمٰتُ', 'حَظِّ'],
        ['جَوِّ', 'اَوَّلُ', 'عَدُوِّىْ', 'تُبَوُّيءُ']
      ],
      // Page 3 (Total Page 39)
      [
        ['وَالْعَافِيْنَ', 'بِسْمِ اللهِ', 'بِكُلِّ', 'فَغُلُّوهُ'],
        ['أَنْعَمْتَ', 'مِنْهَا', 'اٰمَنَّا', 'فَإِنَّى'],
        ['نَعْبُدُ', 'يُعْلِنُوْنَ', 'يَدُعُّ', 'سُعِّرَتْ'],
        ['عَلَيْهِمْ', 'مَالَمْ', 'فَلَمَّا', 'وَأُمُّهُ'],
        ['يَرْجِعُونَ', 'فِرْعَوْنَ', 'مَرَّاتٍ', 'وَبُرِّزَتْ'],
        ['كَانَتْ', 'فَيَمُتْ', 'سِتِّينَ', 'عَنِتُّمْ'],
        ['رُسُلِكَ', 'تَكْرَهُوْا', 'بِبَكَّةَ', 'سُكِّرَتْ']
      ],
      // Page 4 (Total Page 40)
      [
        ['فَتَلَقّٰى', 'حَقَّتْ', 'وَيُحِقَّ', 'لِلْحَقِّ'],
        ['الطَّاغُوتِ', 'اَطَّلَعَ', 'اَلطُّوْرِ', 'عُطِّلَتْ'],
        ['رَبَّنَا', 'تَسُبُّوا', 'نُسَبِّحُ', 'شُبِّهَ'],
        ['تَعَجَّلَ', 'فَنُجِّيَ', 'حِجُّ', 'لَجُّوْا'],
        ['فَبَدَّلَ', 'فَرُدُّوْهُ', 'يَهْدِيْ', 'يَصُدُّوْنَ'],
        ['وَتَرَى الشَّمْسَ', 'عَمِلُوا الصَّالِحَاتِ', 'وَالْقَمَرِ', 'فِي الْكُتُبِ']
      ]
    ]
  },
  26: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: ' Double Shadd',
    pages: [
      // Page 1 (Total Page 41)
      [
        ['يَزَّكّٰى', 'الْمُزَّمِّلُ', 'الْمُدَّثِّرُ', 'يَشَّقَّقُ'],
        ['يَسَّمَّعُونَ', 'يَصَّعَّدُ', 'يَذَّكَّرُ', 'عِلِّيِّيْنَ'],
        ['رِبِّيُّونَ', 'إِنَّ السَّمْعَ', 'مُطَّهِّرِينَ', 'ذُرِّيَّتَهٗ'],
        ['إِلَّا الَّذِينَ', 'مِنَ الطَّيِّبٰتِ', 'أَشَدُّ النَّاسِ']
      ]
    ]
  },
  27: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Three Variable letters',
    pages: [
      // Page 1 (Total Page 42)
      [
        ['هُوَ اللّٰهُ', 'نَارُ اللّٰهِ', 'بِسْمِ اللّٰهِ', 'لِلّٰهِ'],
        ['طَالُوتَ', 'أَصَابَ', 'ظَاهِرٌ', 'فَقَالَ'],
        ['خَالِدِينَ', 'كِتَابٌ', 'لِسَانٌ']
      ]
    ]
  },
  28: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Exercise of the following Words',
    pages: [
      // Page 1 (Total Page 43)
      [
        ['اللهُ', 'إِنَّ اللهَ', 'أَرَادَ اللهُ', 'بِسْمِ اللهِ'],
        ['لِلهِ', 'الْحَمْدُ لِلهِ', 'أَمْرُ اللهِ', 'طَالُوتَ'],
        ['أَصَابَ', 'بِاللهِ', 'فَتَابَ', 'لِسَانِ'],
        ['مَرْضَاتِ', 'ظَاهِرٌ', 'فَقَالَ', 'وَزَادَهُ'],
        ['ذَاتَ', 'يَكَادُ', 'قَالَ', 'فَقَالَ'],
        ['وَضَاقَ', 'عَاقِبَةَ', 'وَكَانَ', 'يَزَالُ']
      ]
    ]
  },
  29: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Tanween Exercise of Double Zabar',
    pages: [
      // Page 1 (Total Page 44)
      [['بًـا = بَنْ', 'تًـا = تَنْ', 'ثًـا = ثَنْ', 'جًـا'],
      ['حًـا', 'خًـا', 'سًـا', 'صًـا'],
      ['زًا', 'عًـا', 'رًا', 'كًـا'],
      ['قًـا', 'فًـا', 'ءًا', 'يًـا']],
      // Page 2 (Total Page 45)
      [
        ['بَطْشًا', 'اِنَاثًا', 'لِبَاسًا', 'خَالِصًا'],
        ['اِلٰهًا', 'صُلْحًا', 'عَزِيْزًا', 'مَرِيْضًا'],
        ['جُذَاذًا', 'حَفِيْظًا', 'مَتَاعًا', 'رِدْاً'],
        ['مُبٰرَكًا', 'فَرِيْقًا', 'اَمْوَاتًا', 'اَسْبَاطًا']
      ]
    ]
  },
  30: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Exercise of Double Zair',
    pages: [
      // Page 1 (Total Page 46)
      [['بِنْ = بٍ', 'تِنْ = تٍ', 'ثِنْ = ثٍ', 'جٍ'],
      ['حٍ', 'خٍ', 'زٍ', 'ضٍ'],
      ['ءٍ', 'عٍ', 'غٍ', 'رٍ'],
      ['ذٍ', 'ظٍ', 'وٍ', 'يٍ']],
      // Page 2 (Total Page 47)
      [
        ['صِبْغٍ', 'مُكْثٍ', 'بَاْسٍ', 'نَقْصٍ'],
        ['اِلٰهٍ', 'بِرِيْحٍ', 'كُنُوْزٍ', 'تَرَاضٍ'],
        ['مَجِيْدٍ', 'مَحْفُوْظٍ', 'اَرْبَعٍ', 'لِسَبَاٍ'],
        ['مُلْكٍ', 'صِدْقٍ', 'حَسَرٰتٍ', 'صِرَاطٍ']
      ]
    ]
  },
  31: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Exercise of Double Paish',
    pages: [
      // Page 1 (Total Page 48)
      [['بُنْ = بٌ', 'تُنْ = تٌ', 'ثُنْ = ثٌ', 'جٌ'],
      ['حٌ', 'خٌ', 'سٌ', 'صٌ'],
      ['ءٌ', 'عٌ', 'غٌ', 'رٌ'],
      ['نٌ', 'وٌ', 'هٌ', 'يٌ']],
      // Page 2 (Total Page 49)
      [
        ['نَزْغٌ', 'حَرْثٌ', 'نَفْسٌ', 'حَرِيْصٌ'],
        ['اِلٰهٌ', 'جُنَاحٌ', 'عَزِيْزٌ', 'بِيْضٌ'],
        ['اٰخْذٌ', 'حَافِظٌ', 'سَبْعٌ', 'ظُلُمٌ'],
        ['تارِكٌ', 'خَالِقٌ', 'فُرَاتٌ', 'مُحِيْطٌ']
      ]
    ]
  },
  32: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Izhar',
    pages: [
      // Page 1 (Total Page 50)
      [['اَنْ ءَ', 'اِنْ اَ', 'اُنْ اَ', 'اً ءَ'],
      ['اٍ اَ', 'اٌ اَ', 'اَنْ هَ', 'اِنْ هَ'],
      ['اُنْ هَ', 'اً هَ', 'اٍ هَ', 'اٌ هَ'],
      ['اَنْ عَ', 'اِنْ عَ', 'اُنْ عَ', 'اً عَ'],
      ['اٍ عَ', 'اٌ عَ', 'اَنْ حَ', 'اِنْ حَ'],
      ['اُنْ حَ', 'اً حَ', 'اٍ حَ', 'اٌ حَ'],
      ['اَنْ غَ', 'اِنْ غَ', 'اُنْ غَ', 'اً غَ'],
      ['اٍ غَ', 'اٌ غَ', 'اَنْ خَ', 'اِنْ خَ'],
      ['اُنْ خَ', 'اً خَ', 'اٍ خَ', 'اٌ خَ']],
      // Page 2 (Total Page 51)
      [['ء', 'مَنْ أَعْطَىٰ', 'كِتٰبٌ أَنْزَلْنٰهُ', 'وَيَنْـأَوْنَ'],
      ['هـ', 'مَنْ هَاجَرَ', 'فَرِيْقًا هَدَىٰ', 'وَيَنْهَوْنَ'],
      ['ع', 'مِنْ عِلْمٍ', 'سَمِيْعٌ عَلِيْمٌ', 'الْأَنْعَامَ'],
      ['ح', 'مَنْ حِكْمَةٍ', 'عَزِيْزٌ حَكِيْمٌ', 'يَنْحِتُوْنَ'],
      ['غ', 'مِنْ غِسْلِيْنٍ', 'قَوْلًا غَيْرَ', 'فَسَيُنْغِضُوْنَ'],
      ['خ', 'مَنْ خَشِيَ', 'لَطِيْفٌ خَبِيْرٌ', 'وَالْمُنْخَنِقَةُ']]
    ]
  },
  33: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Iqlab',
    pages: [
      // Page 1 (Total Page 52)
      [
        ['مِنْ بَعْدِ', 'مَنْ بَخِلَ', 'أَنْبِئُونِي', 'خَبِيْرۢ بَصِيْراً'],
        ['أَمَدًۢا بَعِيْدًا', 'طَيْرًۢا بِإِذْنِي']
      ]
    ]
  },
  34: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Exercise of Tiny Meem',
    pages: [
      // Page 1 (Total Page 53)
      [
        ['اَنْۢ بَ', 'اِنْۢ بَ', 'اُنْۢ بَ', 'اًۢ بَ'],
        ['اٍۢ بَ', 'اٌۢ بَ']
      ],
      // Page 2 (Total Page 54)
      [
        ['تَارِكٌۢ بَعْضَ', 'تَفْرِيقًۢا بَيْنَ', 'اَنْۢبَأَهُمْ', 'وَاقِعٌۢ بِهِمْ'],
        ['سَفَهًۢا بِغَيْرِ', 'لَذَنْۢبِكَ', 'حِزْبٍۢ بِمَا', 'بَعْضًاۢ بِمَا'],
        ['سُنْۢبُلَتٍ', 'سَمِيعًۢا بَصِيرًا', 'لُوْطٍۢ بِالنُّذُرِ', 'حَدِيثٍۢ بَعْدَهُ']
      ]
    ]
  },
  35: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'ldgham',
    pages: [
      // Page 1 (Total Page 55)
      [
        ['اَنْ لَّ', 'اَنْ رَّ', 'اَنْ نَّ', 'اَنْ مَّ'],
        ['اَنْ وَّ', 'اَنْ يَّ', 'مَنْ لَّمْ', 'مَنْ رَّحِمَ'],
        ['عَنْ نَّفْسٍ', 'مِنْ مَّقَامِ', 'مَنْ وُّجِدَ', 'مَنْ يَّقُولُ']
      ],
      // Page 2 (Total Page 56)
      [
        ['اً لَّ', 'اً رَّ', 'اً نَّ', 'اً مَّ'],
        ['اً وَّ', 'اً يَّ', 'اِلٰهًا لَّقَدْ', 'زَبَدًا رَّابِيًا'],
        ['خَيْرٌ نُّزُلًا', 'مَثَلاً مَّا', 'سِنَةٌ وَّلَا', 'خَيْرًا يَّرَهُ']
      ]
    ]
  },
  36: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'ldgham When the Noon Sakin comes before the Shadd letter',
    pages: [
      // Page 1 (Total Page 57)
      [['اَنْ لَّ', 'اَنْ رَّ', 'اَنْ نَّ', 'اَنْ مَّ'],
      ['اَنْ وَّ', 'اَنْ يَّ', 'اُنْ لَّ', 'اُنْ رَّ'],
      ['اُنْ نَّ', 'اُنْ مَّ', 'اُنْ وَّ', 'اُنْ يَّ'],
      ['اِنْ لَّ', 'اِنْ رَّ', 'اِنْ نَّ', 'اِنْ مَّ'],
      ['اِنْ وَّ', 'اِنْ يَّ', 'بَ نْ لَّ', 'بَ نْ رَّ'],
      ['بَ نْ نَّ', 'بَ نْ مَّ', 'بَ نْ وَّ', 'بَ نْ يَّ'],
      ['بُ نْ لَّ', 'بُ نْ رَّ', 'بُ نْ نَّ', 'بُ نْ مَّ'],
      ['بُ نْ وَّ', 'بُ نْ يَّ', 'بِ نْ لَّ', 'بِ نْ رَّ'],
      ['بِ نْ نَّ', 'بِ نْ مَّ', 'بِ نْ وَّ', 'بِ نْ يَّ'],
      ['مَنْ لَّ', 'مَنْ رَّ', 'عَنْ نَّ', 'عَنْ مُّ'],
      ['عَنْ وَّ', 'لَنْ يَّ', 'كُنْ لَّ', 'كُنْ رَّ'],
      ['كُنْ نَّ', 'كُنْ مِّ', 'مَنْ وُّ', 'مَنْ يَّ'],
      ['يِنْ لَّ', 'مِنْ رَّ', 'مِنْ نَّ', 'مِنْ مُّ'],
      ['مِنْ وَّ', 'كِنْ يَّ']],
      // Page 2 (Total Page 58)
      [
        ['فَإِنْ لَّمْ', 'مِنْ نَّفْعِهِمَا', 'مَنْ وُّجَدَ', 'مِن رَّأْسِهِ'],
        ['مِن مُّوصٍ', 'مَنْ يَّقُولُ', 'مَنْ لَّمْ', 'عَنْ نَّفْسٍ'],
        ['مِنْ وَّرَقٍ', 'مَنْ رَّحِمَ', 'مِنْ مَّقَامِ', 'أَن يَضْرِبَ'],
        ['فَمَنْ لَّمْ', 'أَنْ نَّطْمِسَ', 'وَإِنْ وَّجَدْنَا', 'أَنْ رَّآهُ'],
        ['عَنْ مِّلَّةِ', 'وَإِنْ يُّقَاتِلُوكُمْ', 'يَكُنْ لَّهُ', 'نَكُنْ نَّدْعُوْا'],
        ['مِنْ وَّالٍ', 'فَإِنْ رَّجَعَكَ', 'وَلْتَكُنْ مِّنكُمْ', 'إِنْ يُرِيدَا']
      ],

      // Page 3 (Total Page 59)
      [['اًلَّ', 'اًرَّ', 'اًنَّ', 'اًمَّ'],
      ['اًوَّ', 'اًىَّ', 'اٌ لَّ', 'اٌ رَّ'],
      ['اٌ نَّ', 'اٌ مَّ', 'اٌ وَّ', 'اٌ ىَّ'],
      ['اٍلَّ', 'اٍرَّ', 'اٍنَّ', 'اٍمَّ'],
      ['اٍوَّ', 'اٍىَّ', 'بً لَّ', 'بً رَّ'],
      ['بً نَّ', 'بً مَّ', 'بً وَّ', 'بً ىَّ'],
      ['بٌ لَّ', 'بٌ رَّ', 'بٌ نَّ', 'بٌ مَّ'],
      ['بٌ وَّ', 'بٌ ىَّ']],

      // Page 4 (Total Page 60)
      [['بٍ لَّ', 'بٍ رَّ', 'بٍ نَّ', 'بٍ مَّ'],
      ['بٍ وَّ', 'بٍ ىَّ', 'قًلَّ', 'تً رَّ'],
      ['قً نَّ', 'دًمَّ', 'رًوَّ', 'لً ىَّ'],
      ['عٌ لَّ', 'رٌرَّ', 'عٌ نَّ', 'جٌ مَّ'],
      ['وٌوَّ', 'مٌ ىُّ', 'غٍ لِّ', 'قٍ رِّ'],
      ['عٍ نَّ', 'مٍ مَّ', 'يٍ وَّ', 'يٍ يَّ']],


      // Page 5 (Total Page 61)
      [
        ['إِلٰهًا لَّقَدْ', 'خَيْرًا نُّزُلًا', 'بَشِيرًا وَّنَذِيرًا', 'زَبَدًا رَّابِيًا'],
        ['مَثَلًا مَّا', 'خَيْرًا يَّرَهُ', 'وَفَضْلٌ لَّمْ', 'شَيْءٍ نَّحْنُ'],
        ['طَعَامٍ وَّاحِدٍ']
      ],

      // Page 6 (Total Page 62)
      [
        ['ثَمَرَةٍ رِّزْقًا', 'بِخَيْرٍ مِّنْهَا', 'لِقَوْمٍ يُّوْقِنُونَ', 'رِزْقًا لَّكُمْ'],
        ['عَهْدًا نَّبَذَهُ', 'سِنَةٌ وَّلَا', 'تَوَّابًا رَّحِيمًا', 'حَسَدًا مِّنْ'],
        ['نُعَاسًا يَّغْشَىٰ', 'خَيْرٌ لَّكُمْ', 'سُوْرَةٍ نَّظَرُ', 'رَعْدٌ وَّبَرْقٌ'],
        ['غَفُوْرٌ رَّحِيمٌ', 'مُخْرِجٌ مَّا', 'أُمَّةٌ يَّدْعُوْنَ']
      ]
    ]
  },
  37: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'ldgham on other letters',
    pages: [
      // Page 1 (Total Page 63)
      [
        ['قَدْ تَّبَيَّنَ', 'إِذْ ظَّلَمُوْا', 'اِرْكَبْ مَّعَنَا', 'قُل رَّبِّ'],
        ['يَلْهَثْ ذّٰلِكَ', 'إِنَّهُمْ مَّعَكُمْ', 'مَهَّدْتُّ', 'نَخْلُقْكُّم'],
        ['أَوْ وَّزَنُوْهُمْ']
      ]
    ]
  },
  38: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Ikhfa',
    pages: [
      // Page 1 (Total Page 64)
      [['أَنْ تَ', 'أَنْ ثَ', 'أَنْ جَ', 'اًدَ'],
      ['اًذَ', 'مَنْ زَ', 'تَن سَ', 'سٍ شَ'],
      ['مَنْ صَ', 'مَنْ ضَ', 'بًاطَ', 'فًاظَ'],
      ['اٍفَ', 'يًا قَ', 'قٌ كَ']],
      // Page 2 (Total Page 65)
      [
        ['فَمَن تَبِعَ', 'شِهَابٌ ثَاقِبٌ', 'مِنْ جِنَّةٍ', 'وَمَنْ دَخَلَهُ'],
        ['مُنْذِرٌ', 'مَنْ زَكَّاهَا', 'فَلَا تَنْسَىٰ', 'نَفْسٍ شَيْئًا'],
        ['مِنْ صَلْصَالٍ', 'مَنْضُوْدٍ', 'شَرَابًا طَهُورًا', 'فَانْظُرْ'],
        ['فَإِنْ فَاءُوْا', 'يَنْقَلِبْ', 'رِزْقٌ كَرِيْمٌ']
      ]
    ]
  },
  39: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Complete detail of Ghunnah at Meem',
    pages: [
      // Page 1 (Total Page 66)
      [
        ['آمَنَهُمْ مِنْ', 'رَبِّهِمْ مَنْ', 'تُحَمِّلْنَا', 'ثُمَّ'],
        ['فَلَمَّا', 'عَلَيْهِمْ بِالْإِثْمِ', 'تَرْمِيهِمْ بِحِجَارَةٍ', 'أَلَمْ يَعْلَمْ'],
        ['بِأَنَّ', 'رَبَّهُمْ بِهِمْ']
      ],
      // Page 2 (Total Page 67)
      [
        ['رَبَّهُم بِهِمْ', 'لَهُمْ تَعَالَوْا', 'كَهْفُهُمْ ثَلَثٌ', 'اَمْ حَسِبْتُمْ'],
        ['هُمْ خَيْرٌ', 'اَلْحَمْدُ', 'اَنْفُسَكُمْ ذٰلِكُمْ', 'اَمْرًا'],
        ['بَيْنَهُمْ زُبُرًا', 'عَلَيْهِمْ سَيْلَ', 'هُمْ شَرُّ', 'عَلَيْهِمْ صَيْحَةً'],
        ['لَكُمْ ضَرًّا', 'لَهُمْ طَعَامٌ', 'اِنَّكُمْ ظَلَمْتُمْ', 'لَكُمْ عَدُوٌّ'],
        ['عَلَيْهِمْ غَيْرِ', 'هُمْ فِيْهِ', 'عَلَيْهِمْ قَامُوْا', 'بِاَنَّهُمْ كَانُوْا'],
        ['لَا تَمْلِكُ', 'اَمْنَهُمْ مِّنْ', 'اَلَمْ نَشْرَحْ', 'مِنْكُمْ هَدْيًا'],
        ['وَاَنْتُمْ اَذِلَّةٌ']
      ]
    ]
  },
  40: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Madd (Prolonging the Sound of vowels)',
    pages: [
      // Page 1 (Total Page 68)
      [['بَآبَّ', 'بِيْٓ بِّ', 'بُوْٓبُّ', 'بٰٓ بَّ'],
      ['بٖٓ بِّ', 'بٗٓ بُّ', 'لَآمْ', 'مِيْٓ مْ'],
      ['سِيْٓ نْ', 'نُوْٓنُ', 'آٰ لْ', 'صَآدْ']],
      // Page 2 (Total Page 69)
      [['بَآءَ', 'بِیْٓءَ', 'بُوْٓءَ', 'تٰٓ ءَ'],
      ['تٖٓ ءَ', 'تٗٓ ءَ', 'بَآاَ', 'بِیْٓ اَ'],
      ['بُوْٓ اَ', 'تٰٓ اَ', 'تٖٓ اَ', 'تٗٓ اَ']],
      // Page 3 (Total Page 70)
      [
        ['إِنَّا أَنْزَلْنَهُ', 'لَا أُقْسِمُ', 'يَتَسَاءَلُونَ', 'فَأَوْحَىٰ إِلَيْهِ'],
        ['يَأَيُّهَا النَّبِيُّ', 'اٰبَاءَنَا', 'اٰوٰى إِلَيْهِ', 'إِلَىٰ إِلٰهِكَ'],
        ['إِذَا جَاءَ', 'اَلَّتِي أُعِدَّتْ', 'فِي أَنْفُسِكُمْ', 'خَطِيْئَةً'],
        ['فَقُوْلِي إِنِّي', 'هَذِهِ إِيمَانًا', 'سِيئَتْ', 'فِي أَمْرِيْ'],
        ['إِنِّي أَخَافُ', 'هَنِيْئًا', 'قُوْا أَنْفُسَكُمْ', 'يَرَهُ أَحَدٌ']
      ],
      // Page 4 (Total Page 71)
      [
        ['اَلصَّآفُّوْنَ', 'تَحٓضُّونَ', 'اَلْعَآدِّينَ', 'الٓمّٓ الٓمّٓرّٓ'],
        ['دَآبَّةٍ', 'وَالصَّٰٓٓفّٰتِ', 'حَاجُّوكَ', 'الٓر صٓ'],
        ['وَلَا الضَّآلِّينَ', 'اَلظَّآنِّينَ', 'وَلَاجَآنٌّ', 'حٰم طسٓمّٓ'],
        ['اَلطَّآمَّةُ', 'تَأْمُرُوْٓنِّي', 'أَتُحَاجُّونِّي', 'نٓ قٓ'],
        ['قُلْ ءَآلذَّكَرَيْنِ', 'قُلْ آٰللّٰهُ', 'آلْـٰٔنَ', 'يسٓ الٓمّٓصٓ']
      ]
    ]
  },
  41: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'MADD DUE TO PAUSE',
    pages: [
      // Page 1 (Total Page 72)
      [
        ['تُكَذِّبَانِ — تُكَذِّبَآنِ', 'الْعَالَمِينَ — الْعَالَمِيٓنَ', 'يُؤْمِنُونَ — يُؤْمِنُوٓنَ', 'الْقُرْآنُ — الْقُرْآنُ'],
        ['يَسْتَوُوْنَ — يَسْتَوُٓنَ', 'النَّبِيِّينَ — النَّبِيِّنَ', 'خَوْفٍ — خَوْٓفٌ', 'وَالصَّيْفِ — وَالصَّيْٓفُ']
      ]
    ]
  },
  42: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Examples of Pause after Huroof-e-Maddah',
    pages: [
      // Page 1 (Total Page 73)
      [
        ['الرَّحِيْمِ — الرَّحِيْمْ', 'الْقَيُّوْمُ — الْقَيُّوْمْ', 'الْمَاعُوْنَ — الْمَاعُونْ', 'الْحِسَابُ — الْحِسَابْ'],
        ['اَلدِّيْنِ — الدِّينْ', 'يُؤْمِنُوْنَ — يُؤْمِنُوْنْ', 'يَسْتَوُوْنَ — يَسْتَوُونْ', 'اَلْقُرْآنُ — اَلْقُرْآنْ'],
        ['النَّبِيِّينَ — النَّبِيِّينْ']
      ]
    ]
  },
  43: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Examples of Pause after Huroof-e-Leen',
    pages: [
      // Page 1 (Total Page 74)
      [
        ['قُرَيْشٍ — قُرَيْشْ', 'وَالصَّيْفِ — وَالصَّيْفْ', 'وَلَا نَوْمٌ — وَلَا نَوْمْ', 'خَوْفٍ — خَوْفْ'],
        ['الْبَيْتِ — الْبَيْتْ', 'عَلَيْكَ — عَلَيْكْ', 'وَيَنْتَهُونَ — وَيَنْتَهُونْ', 'يَسْعَوْنَ — يَسْعَوْنْ'],
        ['عَيْنَيْنِ — عَيْنَيْنْ']
      ]
    ]
  },
  44: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Pause (Waqf)',
    pages: [
      // Page 1 (Total Page 75)
      [
        ['وَاحِدَةً ⇐ وَاحِدَةٌ', 'بَقَرَةً ⇐ بَقَرَةٌ', 'غَيْرِهِ ⇐ غَيْرُهُ', 'رَسُولِهِ ⇐ رَسُولُهُ'],
        ['بِالْآخِرَةِ', 'بِسُورَةٍ', 'بَعُوضَةً', 'اَلْجَنَّةَ'],
        ['بَعْدِهِ']
      ],
      // Page 2 (Total Page 76)
      [
        ['تَلَىٰهَا', 'يَحْيَىٰ', 'قَالُوْا', 'تَلْوٗا'],
        ['فَادْخُلِىْ', 'يُحْیٖ', 'إِذْهَبَا', 'تَلَىٰهَا'],
        ['مَرْقَدِنَا', 'مَنٰسِكَنَا', 'وَالضُّحَىٰ', 'يُحْيٖ'],
        ['سَجَىٰ', 'نَصٰرٰى', 'تَلَوٗا', 'فَـاْوٗا'],
        ['تَجْرِىْ']
      ],
      // Page 3 (Total Page 77)
      [
        ['كَبِيرًا ⇐ كَبِيرَا', 'هُدًى ⇐ هُدَا', 'شَيْئًا ⇐ شَيْـَٔا', 'جُزْءًا ⇐ جُزْءَا'],
        ['مَرَضًا', 'سُجَّدًا', 'عَيْنًا', 'جُزْءًا'],
        ['هُدًى', 'أَنْدَادًا', 'بَصِيرًا', 'تَرْتِيلًا'],
        ['سُدًى', 'شَيْئًا', 'بَغِيًا']
      ],
      // Page 4 (Total Page 78)
      [
        ['صَبَرَ ⇐ صَبَرْ', 'ٱلْفَلَقِ ⇐ ٱلْفَلَقْ', 'أَكْبَرُ ⇐ أَكْبَرْ', 'كَافِرٍ ⇐ كَافِرْ'],
        ['أَظْلَمَ', 'فَأَخْرَجَ', 'يُوصَلَ', 'إِلَّا هُوَ'],
        ['مَلِكِ', 'بِالْبٰطِلِ', 'يَتَبَدَّلِ', 'الْمَسْجِدِ'],
        ['أَنُؤْمِنُ', 'أَتَجْعَلُ', 'يُفْسِدُ', 'أَعْلَمُ'],
        ['وَاحِدٍ', 'بِغَضَبٍ', 'ظُلَلٍ', 'سَفَرٍ'],
        ['جَاعِلٌ']
      ],
      // Page 5 (Total Page 79)
      [
        ['فَظَلٌّ ⇐ فَظَلّ', 'وَتَبَّ ⇐ وَتَبّ', 'إِلَىَّ ⇐ إِلَىّ', 'أَشَقُّ ⇐ أَشَقّ'],
        ['فَظَلٌّ', 'بِالْحَقِّ', 'وَتَبَّ', 'اَلْحَجَّ'],
        ['اَلْحَرَّ', 'اَلْقَوِيُّ', 'يَبُثُّ', 'اَلرَّسِّ']
      ],
      // Page 6 (Total Page 80)
      [
        ['لَهُنَّ ⇐ لَهُنّ', 'اَلْغَمِّ ⇐ اَلْغَمّ', 'اَلظَّنَّ ⇐ ٱلظَّنّ', 'اَلصُّمُّ ⇐ اَلصُّمّ'],
        ['فَسَوّٰهُنَّ', 'أَلِيَمِّ', 'عَلَيْهِنَّ', 'بِغَمٍّ']
      ],
      // Page 7 (Total Page 81)
      [
        ['اَلْأَعْلَىٰ ⇐ ٱلْأَعْلَىٰ', 'اَلْأَشْقَىٰ ⇐ ٱلْأَشْقَىٰ', 'اَلْأَتْقَىٰ ⇐ ٱلْأَتْقَىٰ', 'تَقْوَىٰ ⇐ تَقْوَىٰ'],
        ['مَثْوَىٰ ⇐ مَثْوَىٰ']
      ]
    ]
  },
  45: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'TINY NOON',
    pages: [
      // Page 1 (Total Page 82)
      [['Joining\nCondition', 'Pause\nCondition', 'Writing\nCondition'],
      ['لُمَزَةِ ۨ الَّذِىْ', 'لُمَزَهْ - اَلَّذِىْ', 'لُمَزَةِ ۨ - الَّذِىْ'],
      ['فَخُورَ ۨ الَّذِينَ', 'فَخُورَا - اَلَّذِينَ', 'فَخُورًا ۨ - اَلَّذِينَ']],
      // Page 2 (Total Page 83)
      [
        ['شَهِيدَا ۨ الرِّجَالُ', 'خَيْرُ ۨ اطْمَأَنَّ بِهِ', 'قَوْمَا ۨ اتَّخَذَهَا'],
        ['عَلِيْمُ ۨ اللهُ', 'أَوْ لَهْوَا ۨ انْفَضُّوْا', 'أَحَدُ ۨ اللّهُ الصَّمَدُ']
      ]
    ]
  },
  46: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Rule of adding Zabar',
    pages: [
      // Page 1 (Total Page 84)
      [['الْكِتٰبِ ⇐ اَلْكِتٰبْ', 'الرَّحْمٰنِ ⇐ اَلرَّحْمٰنْ']]
    ]
  },
  47: {
    titleArabic: 'ترکیب حروف',
    titleEnglish: 'Rule of adding Zair and Paish',
    pages: [
      // Page 1 (Total Page 85)
      [
        ['ادْخُلُوْهَا ⇐ اُدْخُلُوْهَا', 'اقْتُلُوْا ⇐ اُقْتُلُوْا', 'اعْبُدُوْا ⇐ اُعْبُدُوْا', 'ارْجِعِىْ ⇐ اِرْجِعِىْ'],
        ['انفَطَرَتْ ⇐ اِنفَطَرَتْ', 'اتَّبِعُوْا ⇐ اِتَّبِعُوْا']
      ],
      // Page 2 (Total Page 86)
      [
        ['اِسْمُ', 'اِمْرُؤٌا', 'اِبْنٌ', 'اِتَّقُوْا'],
        ['اِمْشُوْا', 'اِيتُوْا', 'اِقْضُوْا', 'اِبْنُوْا'],
        ['أَنْذِرْ', 'فِرْعَوْنَ', 'يُهَاجِرْ', 'شِرْعَةً']
      ],
      // Page 3 (Total Page 87)
      [
        ['السِّحْرَ ⇐ السِّحْرْ', 'حِجْرٍ ⇐ حِجْرْ', 'قَدِيرٌ ⇐ قَدِيْرْ', 'خَيْرَ ⇐ خَيْرْ'],
        ['غَيْرَ ⇐ غَيْرْ', 'الطَّيْرِ ⇐ الطَّيْرْ', 'ضَيْرَ ⇐ ضَيْرْ', 'السَّيْرِ ⇐ السَّيْرْ'],
        ['عُزَيْرُ ⇐ عُزَيْرْ']
      ],
      // Page 4 (Total Page 88)
      [
        ['إِنِ ارْتَبْتُمْ', 'رَبِّ ارْحَمْهُمَا', 'لِمَنِ ارْتَضَىٰ', 'رَبِّ ارْجِعُونِ'],
        ['أَمِ ارْتَابُوْا', 'اَلَّذِي ارْتَضَىٰ', 'عَذَابِ ۨ ارْكُضْ', 'مَنِ ارْتَضَىٰ'],
        ['ارْكَبْ مَّعَنَا', 'ارْجِعْ', 'ارْجِعُوْا', 'ارْجِعِيْ'],
        ['قِرْطَاسٍ', 'وَإِرْصَادًا', 'مِرْصَادًا', 'لَبِالْمِرْصَادِ'],
        ['فِرْقَةٍ']
      ]
    ]
  },


};

const LessonPage = ({ pageNumber }) => {
  // Build a numeric-sorted list of chapters and compute total pages
  const chapterNumbers = Object.keys(chapterData).map(n => parseInt(n, 10)).sort((a, b) => a - b);
  const totalPages = chapterNumbers.reduce((sum, n) => sum + (chapterData[n].pages ? chapterData[n].pages.length : 0), 0);

  if (!pageNumber || pageNumber < 1 || pageNumber > totalPages) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 1in', fontSize: '3rem', color: '#0f2a44', fontFamily: 'urdu-text, serif' }}>
        صفحہ {pageNumber} جلد ہی شامل کیا جائے گا ان شاء اللہ
      </div>
    );
  }

  // Find which chapter and which page inside that chapter corresponds to the global pageNumber
  let remaining = pageNumber; // 1-based
  let currentChapterNum = chapterNumbers[0];
  let pageInChapter = 0;

  for (const ch of chapterNumbers) {
    const pages = chapterData[ch].pages ? chapterData[ch].pages.length : 0;
    if (remaining <= pages) {
      currentChapterNum = ch;
      pageInChapter = remaining - 1; // zero-based index inside chapter
      break;
    }
    remaining -= pages;
  }

  const currentChapter = chapterData[currentChapterNum];
  const currentLetters = currentChapter.pages[pageInChapter];

  // Determine page-specific title if provided, otherwise use chapter title
  const pageTitle = (currentChapter.pageTitles && currentChapter.pageTitles[pageInChapter])
    ? currentChapter.pageTitles[pageInChapter]
    : { titleArabic: currentChapter.titleArabic, titleEnglish: currentChapter.titleEnglish };

  // Compute a displayed (sequential) chapter number so missing keys don't create gaps
  const displayChapterNo = (chapterNumbers.indexOf(currentChapterNum) >= 0)
    ? (chapterNumbers.indexOf(currentChapterNum) + 1)
    : currentChapterNum;

  return (
    <div style={{ padding: '40px 1in 180px', maxWidth: '100%', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '2rem', color: '#666', marginBottom: '5px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>
          Chapter No. {displayChapterNo.toString().padStart(2, '0')}
        </h3>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', color: '#0f2a44', fontFamily: 'ArabQuranIslamic_1, serif', fontWeight: 'normal' }}>
          {pageTitle.titleArabic}
        </h1>
        <h3 style={{ fontSize: '2rem', color: '#666', marginBottom: '5px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>
          {pageTitle.titleEnglish}
        </h3>
        <p style={{ fontSize: '1.5rem', color: '#888', fontFamily: 'Arial, sans-serif' }}>
          Lesson No. {displayChapterNo} (Page {pageNumber}/{totalPages})
        </p>
      </div>
      {/* ✨ Teacher Instructions – chapter‑level (page 0) OR page‑specific */}
      {(() => {
        const selectedTeacher = (pageInChapter === 0 && currentChapter.teacherInfo)
          ? currentChapter.teacherInfo
          : (currentChapter.pageTeacherInfo && currentChapter.pageTeacherInfo[pageInChapter])
            ? currentChapter.pageTeacherInfo[pageInChapter]
            : null;

        if (!selectedTeacher) return null;

        const selectedImagePath = (
          selectedTeacher.imagePath ||
          (selectedTeacher.image && selectedTeacher.image.imagePath) ||
          (currentChapter.teacherImage && currentChapter.teacherImage.imagePath)
        );

        const selectedImageAlt = (
          selectedTeacher.imageAlt ||
          (selectedTeacher.image && selectedTeacher.image.alt) ||
          (currentChapter.teacherImage && currentChapter.teacherImage.alt) ||
          ''
        );

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '28px',
              background: '#fef9e7',
              borderLeft: '8px solid #f6cc44',
              borderRadius: '12px',
              padding: '28px 36px',
              marginBottom: '60px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              direction: 'ltr',
              textAlign: 'left',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {/* Left: instructions + goal */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4 style={{
                fontSize: '2rem',
                color: '#0f2a44',
                marginTop: 0,
                marginBottom: '18px',
                fontWeight: '600',
                borderBottom: '2px solid #f6cc44',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                📋 Teacher Instructions
              </h4>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 25px 0',
                fontSize: '1.6rem',
                lineHeight: '2.4rem',
                color: '#2c3e50',
              }}>
                {selectedTeacher.instructions.map((item, idx) => (
                  <li key={idx} style={{
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#f6cc44',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0,
                    }} />
                    <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                      {item.split(/(\*\*.*?\*\*|\{\{IMG:.*?\}\})/g).map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={index}>{part.slice(2, -2)}</strong>;
                        }
                        if (part.startsWith('{{IMG:') && part.endsWith('}}')) {
                          const inner = part.slice(6, -2); // e.g. "/images/Zabar.PNG" or "/images/Zabar.PNG|4rem"
                          const [src, customSize] = inner.split('|');
                          return (
                            <img
                              key={index}
                              src={src}
                              alt="symbol"
                              style={{
                                height: customSize || '2.2rem',
                                width: 'auto',
                                verticalAlign: 'middle',
                                display: 'inline-block',
                                margin: '0 4px',
                                mixBlendMode: 'multiply',
                              }}
                            />
                          );
                        }
                        return <span key={index}>{part}</span>;
                      })}
                    </span>
                  </li>
                ))}
              </ul>

              {selectedTeacher.goal && (
                <div style={{
                  fontSize: '1.6rem',
                  color: '#0f2a44',
                  backgroundColor: '#fff3d6',
                  padding: '16px 24px',
                  borderRadius: '40px',
                  marginTop: '5px',
                  fontWeight: '500',
                  border: '1px dashed #f6cc44',
                }}>
                  🎯 <strong>Goal:</strong> {selectedTeacher.goal}
                </div>
              )}
            </div>

            {/* Right: teacher image */}
            {selectedImagePath && (
              <div style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={selectedImagePath}
                  alt={selectedImageAlt}
                  style={{
                    width: '280px',
                    maxWidth: '300px',
                    height: 'auto',
                    borderRadius: '8px',
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>
            )}
          </div>
        );
      })()}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '40px 0',
        overflow: 'visible',
      }}>
        {currentLetters.map((row, i) => {
          // Calculate appropriate width based on number of cards
          const cardCount = row.length;
          let rowWidth = '100%';
          let rowMargin = '0 auto';

          if (cardCount === 1) {
            rowWidth = '50%';
          } else if (cardCount === 2) {
            rowWidth = '70%';
          } else if (cardCount === 3) {
            rowWidth = '85%';
          }

          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cardCount}, 1fr)`,
              gap: '0.5in', /* Increased gap */
              width: rowWidth,
              margin: rowMargin,
              marginBottom: '60px', /* Space for hover */
              position: 'relative',
            }}>
              {row.map((item, j) => {
                const letter = typeof item === 'object' ? item.text : item;
                const font = typeof item === 'object' ? item.font : null;
                const useImage = typeof item === 'object' ? item.useImage : false;
                const imagePath = typeof item === 'object' ? item.imagePath : null;
                const imageHoverPath = typeof item === 'object' ? item.imageHoverPath : null;

                return letter ? (
                  <div
                    key={j}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '30px', /* Padding for hover space */
                      margin: '-30px', /* Negative margin to offset padding */
                    }}
                  >
                    <WordCard
                      letter={letter}
                      customFont={font}
                      useImage={useImage}
                      imagePath={imagePath}
                      imageHoverPath={imageHoverPath}
                    />
                  </div>
                ) : (
                  <div key={j}></div>
                );
              })}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default LessonPage;