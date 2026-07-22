// Lesson data index. The application has 29 sequential chapters.
// Each module and asset folder uses the same displayed chapter number.

import chapter01 from './chapters/chapter-01';
import chapter02 from './chapters/chapter-02';
import chapter03 from './chapters/chapter-03';
import chapter04 from './chapters/chapter-04';
import chapter05 from './chapters/chapter-05';
import chapter06 from './chapters/chapter-06';
import chapter07 from './chapters/chapter-07';
import chapter08 from './chapters/chapter-08';
import chapter09 from './chapters/chapter-09';
import chapter10 from './chapters/chapter-10';
import chapter11 from './chapters/chapter-11';
import chapter12 from './chapters/chapter-12';
import chapter13 from './chapters/chapter-13';
import chapter14 from './chapters/chapter-14';
import chapter15 from './chapters/chapter-15';
import chapter16 from './chapters/chapter-16';
import chapter17 from './chapters/chapter-17';
import chapter18 from './chapters/chapter-18';
import chapter19 from './chapters/chapter-19';
import chapter20 from './chapters/chapter-20';
import chapter21 from './chapters/chapter-21';
import chapter22 from './chapters/chapter-22';
import chapter23 from './chapters/chapter-23';
import chapter24 from './chapters/chapter-24';
import chapter25 from './chapters/chapter-25';
import chapter26 from './chapters/chapter-26';
import chapter27 from './chapters/chapter-27';
import chapter28 from './chapters/chapter-28';
import chapter29 from './chapters/chapter-29';

export const chapterData = {
  1: chapter01,
  2: chapter02,
  3: chapter03,
  4: chapter04,
  5: chapter05,
  6: chapter06,
  7: chapter07,
  8: chapter08,
  9: chapter09,
  10: chapter10,
  11: chapter11,
  12: chapter12,
  13: chapter13,
  14: chapter14,
  15: chapter15,
  16: chapter16,
  17: chapter17,
  18: chapter18,
  19: chapter19,
  20: chapter20,
  21: chapter21,
  22: chapter22,
  23: chapter23,
  24: chapter24,
  25: chapter25,
  26: chapter26,
  27: chapter27,
  28: chapter28,
  29: chapter29,
};

/** Ordered chapter numbers used throughout navigation and the chapter index. */
export const chapterNumbers = Object.keys(chapterData).map(Number);

/** Total number of lesson pages across all chapters. */
export const totalPages = chapterNumbers.reduce((sum, chapterNumber) => (
  sum + chapterData[chapterNumber].pages.length
), 0);

/** 1-based global page index where each chapter begins. */
export const chapterStartPages = (() => {
  const startPages = {};
  let pageNumber = 1;

  chapterNumbers.forEach((chapterNumber) => {
    startPages[chapterNumber] = pageNumber;
    pageNumber += chapterData[chapterNumber].pages.length;
  });

  return startPages;
})();

export const BASIC_MAX_DISPLAY_CHAPTER = 15;
export const advancedStartPage = chapterStartPages[BASIC_MAX_DISPLAY_CHAPTER + 1];
