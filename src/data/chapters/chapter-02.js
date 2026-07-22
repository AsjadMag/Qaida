const chapter = {
  titleArabic: '',
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
    [['ا', 'لا', { text: 'لا', useImage: true, imagePath: '/images/chapters/chapter-02/laam_2.webp', imageHoverPath: '/images/chapters/chapter-02/laam_2_hover.webp' }, 'با', { text: 'لا', useImage: true, imagePath: '/images/chapters/chapter-02/laam_1.webp', imageHoverPath: '/images/chapters/chapter-02/laam_1_hover.webp' }],
    ['ل', { text: 'لا', useImage: true, imagePath: '/images/chapters/chapter-02/laam_2.webp', imageHoverPath: '/images/chapters/chapter-02/laam_2_hover.webp' }, 'لح', { text: 'لا', useImage: true, imagePath: '/images/chapters/chapter-02/laam_1.webp', imageHoverPath: '/images/chapters/chapter-02/laam_1_hover.webp' }, 'بلب'],
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
};

export default chapter;
