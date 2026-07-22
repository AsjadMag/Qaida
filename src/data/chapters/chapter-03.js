const chapter = {
  titleArabic: '',
  titleEnglish: 'Movements (Harkaat)',
  // Teacher instructions & goal for chapter 3 page 1
teacherInfo: {
  instructions: [
    '**Zabar (Fat\'ha):** A little slanting dash {{IMG:/images/Zabar.webp}} over the letters is called **Zabar (Fat\'ha)**.',
    'Zabar is delivered by opening both lips in up and down-side in strong manner **without prolonging the voice**.'
  ],
  goal: 'To correctly pronounce and apply Zabar (Fat\'ha) in Arabic letters and words.'
},
// ✨ ONE pageTeacherInfo object with both page indices
pageTeacherInfo: {
  1: { // Page 2 (Zair)
    instructions: [
      '**Zair (Kasrah):** A little slanting dash{{IMG:/images/Chapter3 Zair.webp}} appearing under the letters is called **Zair (Kasrah)**.',
      'Zair is delivered by opening the lips downwards **without prolonging the voice**.'
    ],
    goal: 'To correctly pronounce and apply Zair (Kasrah) in Arabic letters and words.'
  },
  2: { // Page 3 (Paish)
    instructions: [
      '**Paish (Dhammah):** A little twisted dash{{IMG:/images/paish.webp}} over the letters is called **Paish (Dummah)**.',
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
    ['كِ', 'لِ', 'مِ', 'نِ', 'وِ'],
    ['هِ', 'ءِ = اِ', 'ىِ']],
    // Page 3 (Total Page 7)
    [['بُ', 'تُ', 'ثُ', 'جُ', 'حُ'],
    ['خُ', 'دُ', 'ذُ', 'رُ', 'زُ'],
    ['سُ', 'شُ', 'صُ', 'ضُ', 'طُ'],
    ['ظُ', 'عُ', 'غُ', 'فُ', 'قُ'],
    ['كُ', 'لُ', 'مُ', 'نُ', 'هُ'],
    ['وُ', 'ءُ =اُ', 'ىُ']]
  ]
};

export default chapter;
