const chapter = {
  titleArabic: '',
  titleEnglish: 'Idgham',
  teacherInfo: {
    instructions: [
      'In Quran Majeed whenever **Noon Sakin or Tanween** comes before these six letters',
      '{{IMG:/images/chapters/chapter-21/chapter_6_v2.webp|3rem}}, these letters always carry a shadd, so the sound of **Noon sakin** is not read,',
      'in fact the shad of{{IMG:/images/chapters/chapter-21/chapter_6_v2.webp|2rem}} is joined with Zabar/Zair/Paish ',
      'in thae case of {{IMG:/images/chapters/chapter-21/chapter_6_v2(1).webp|3rem}} are joined without Noon sound and',
      'in the case of {{IMG:/images/chapters/chapter-21/chapter_6_v2(2).webp|3rem}} are pronounced with Ghunnah.'
    ],
    note: 'Examples of **Noon Sakin** comes before{{IMG:/images/chapters/chapter-21/chapter_6_v2(1).webp|3rem}} {{IMG:/images/chapters/chapter-21/chapter_6_v2(2).webp|3rem}}.',
    imagePath: '/images/chapters/chapter-21/new.webp',
    imageStyle: { width: '800px', maxWidth: '850px' }
  },
  pageTitles: {
    1: { titleEnglish: 'Idgham', titleArabic: '' },
    2: { titleEnglish: 'Idgham', titleArabic: '' },
    3: { titleEnglish: 'Idgham - Noon Sakin Before Shaddah', titleArabic: '' },
    4: { titleEnglish: 'Exercise of Idgham', titleArabic: '' },
    5: { titleEnglish: 'Exercise of Idgham', titleArabic: '' },
    6: { titleEnglish: 'Exercise of Idgham', titleArabic: '' },
    7: { titleEnglish: 'Exercise of Idgham', titleArabic: '' },
    8: { titleEnglish: 'Exercise of Idgham', titleArabic: '' },
    9: { titleEnglish: 'Idgham on Other Letters', titleArabic: '' },
  },
  pageTeacherInfo: {
    1: {
      instructions: [],
      note: ['Examples of **Noon Sakin** comes before{{IMG:/images/chapters/chapter-21/chapter_6_v2(1).webp|3rem}} {{IMG:/images/chapters/chapter-21/chapter_6_v2(2).webp|3rem}}.',
            '**Reading method**: in this case the single harkat of the Tanween is joined with the Shadd Letter',
            '{{IMG:/images/chapters/chapter-21/chapter_6_v2(3).webp|6rem}}  {{IMG:/images/chapters/chapter-21/chapter_6_v2(4).webp|6rem}}  {{IMG:/images/chapters/chapter-21/chapter_6_v2(5).webp|6rem}}']
    },
    2: {
      instructions: [
        '**Idgham: When the Noon Sakin comes before the Shadd letter**',
        '{{IMG:/images/chapters/chapter-21/chapter_6_v2(6).webp|15rem}}',
        '{{IMG:/images/chapters/chapter-21/chapter_6_v2(7).webp|6rem}}'
      ],
    },
    3: {
      instructions: [
        '{{IMG:/images/chapters/chapter-21/chapter_6v2(8).webp|15rem}}'
      ],
    },
    4: {
      instructions: [
        '{{IMG:/images/chapters/chapter-21/Version3.webp|20rem}}'
      ],
    },
    9: {
      instructions: ['**Idgham on the letters**',
        'In Quran e Majeed The Jazam letter is not read before Shaad letter'
      ],
    },
  },
  pageAnnotations: { 0: 'idgham', 2: 'idgham', 3: 'idgham' },
  pages: [
    // Page 1 - Idgham
    [
      ['اَنْ لَّ', 'اَنْ رَّ', 'اَنْ نَّ', 'اَنْ مَّ'],
      [{ text: 'اَنْ وَّ', arrowImage: '/images/chapters/chapter-21/NotArrow.webp' }, { text: 'اَنْ يَّ', arrowImage: '/images/chapters/chapter-21/NotArrow.webp' }, 'مَنْ لَّمْ', 'مَنْ رَّحِمَ'],
      ['عَنْ نَّفْسٍ', 'مِنْ مَّقَامِ', { text: 'مَنْ وُّجِدَ', arrowImage: '/images/chapters/chapter-21/NotArrow.webp' }, { text: 'مَنْ يَّقُولُ', arrowImage: '/images/chapters/chapter-21/NotArrow.webp' }]
    ],
    // Page 2 - Idgham
    [
      ['اً لَّ', 'اً رَّ', 'اً نَّ', 'اً مَّ'],
      ['اً وَّ', 'اً يَّ', 'اِلٰهًا لَّقَدْ', 'زَبَدًا رَّابِيًا'],
      ['خَيْرٌ نُّزُلًا', 'مَثَلاً مَّا', 'سِنَةٌ وَّلَا', 'خَيْرًا يَّرَهُ']
    ],
    // Page 3 - Idgham Noon Sakin Before Shaddah
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
    // Page 4 - Exercise of Idgham
    [
      ['فَإِنْ لَّمْ', 'مِنْ نَّفْعِهِمَا', 'مَنْ وُّجِدَ', 'مِن رَّأْسِهِ'],
      ['مِن مُّوصٍ', 'مَنْ يَّقُولُ', 'مَنْ لَّمْ', 'عَنْ نَّفْسٍ'],
      ['مِنْ وَّرَقٍ', 'مَنْ رَّحِمَ', 'مِنْ مَّقَامِ', 'أَن يَضْرِبَ'],
      ['فَمَنْ لَّمْ', 'أَنْ نَّطْمِسَ', 'وَإِنْ وَّجَدْنَا', 'أَنْ رَّآهُ'],
      ['عَنْ مِّلَّةِ', 'وَإِنْ يُّقَاتِلُوكُمْ', 'يَكُنْ لَّهُ', 'نَكُنْ نَّدْعُوْا'],
      ['مِنْ وَّالٍ', 'فَإِنْ رَّجَعَكَ', 'وَلْتَكُنْ مِّنكُمْ', 'اِنْ يُرِيدَا']
    ],
    // Page 5 - Exercise of Idgham
    [['اًلَّ', 'اًرَّ', 'اًنَّ', 'اًمَّ'],
    ['اًوَّ', 'اًىَّ', 'اٌ لَّ', 'اٌ رَّ'],
    ['اٌ نَّ', 'اٌ مَّ', 'اٌ وَّ', 'اٌ ىَّ'],
    ['اٍلَّ', 'اٍرَّ', 'اٍنَّ', 'اٍمَّ'],
    ['اٍوَّ', 'اٍىَّ', 'بً لَّ', 'بً رَّ'],
    ['بً نَّ', 'بً مَّ', 'بً وَّ', 'بً ىَّ'],
    ['بٌ لَّ', 'بٌ رَّ', 'بٌ نَّ', 'بٌ مَّ'],
    ['بٌ وَّ', 'بٌ ىَّ']],
    // Page 6 - Exercise of Idgham
    [['بٍ لَّ', 'بٍ رَّ', 'بٍ نَّ', 'بٍ مَّ'],
    ['بٍ وَّ', 'بٍ ىَّ', 'قًالِّ', 'تً رَّ'],
    ['قًا نَّ', 'دًمَّ', 'رًوَّ', 'لً ىَّ'],
    ['عٌ لَّ', 'رٌرَّ', 'عٌ نَّ', 'جٌ مَّ'],
    ['وٍوَّ', 'مٌ ىُّ', 'غٍ لِّ', 'قٍ رِّ'],
    ['عٍ نَّ', 'مٍ مَّ', 'يٍ وَّ', 'يٍ يَّ']],
    // Page 7 - Exercise of Idgham
    [
      ['إِلٰهًا لَّقَدْ', 'خَيْرًا نُّزُلًا', 'بَشِيرًا وَّنَذِيرًا', 'زَبَدًا رَّابِيًا'],
      ['مَثَلًا مَّا', 'خَيْرًا يَّرَهُ',' وَفَضْلٍ لَّمْ', 'شَيْءٍ نَّحْنُ'],
      ['طَعَامٍ وَّاحِدٍ']
    ],
    // Page 8 - Exercise of Idgham
    [
      ['ثَمَرَةٍ رِّزْقًا', 'بِخَيْرٍ مِّنْهَا', 'لِقَوْمٍ يُّوْقِنُونَ', 'رِزْقًا لَّكُمْ'],
      ['عَهْدًا نَّبَذَهُ', 'سِنَةٌ وَّلَا', 'تَوَّابًا رَّحِيمًا', 'حَسَدًا مِّنْ'],
      ['نُعَاسًا يَّغْشَىٰ', 'خَيْرٌ لَّكُمْ',' سُوْرَةٌ نَّظَرَ', 'رَعْدٌ وَّبَرْقٌ'],
      ['غَفُوْرٌ رَّحِيمٌ', 'مُخْرِجٌ مَّا', 'أُمَّةٌ يَّدْعُوْنَ']
    ],
    // Page 9 - Idgham on Other Letters
    [
      ['قَدْ تَّبَيَّنَ', 'إِذْ ظَّلَمُوْا', 'اِرْكَبْ مَّعَنَا'],
      ['قُل رَّبِّ', 'يَلْهَثْ ذّٰلِكَ', 'إِنَّهُمْ مَّعَكُمْ'],
      ['مَهَّدْتُّ', 'نَخْلُقْكُّم', 'أَوْ وَّزَنُوْهُمْ']
    ]
  ]
};

export default chapter;
