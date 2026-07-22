// Lesson data index — composes per-chapter modules into a single chapterData object.
// Each chapter lives in its own file under ./chapters/ for easy editing.
// Chapter keys are non-contiguous integers matching the original curriculum numbering.

import chapter01 from './chapters/chapter-01';
import chapter02 from './chapters/chapter-02';
import chapter03 from './chapters/chapter-03';
import chapter04 from './chapters/chapter-04';
import chapter05 from './chapters/chapter-05';
import chapter06 from './chapters/chapter-06';
import chapter08 from './chapters/chapter-08';
import chapter10 from './chapters/chapter-10';
import chapter12 from './chapters/chapter-12';
import chapter16 from './chapters/chapter-16';
import chapter18 from './chapters/chapter-18';
import chapter20 from './chapters/chapter-20';
import chapter22 from './chapters/chapter-22';
import chapter24 from './chapters/chapter-24';
import chapter26 from './chapters/chapter-26';
import chapter27 from './chapters/chapter-27';
import chapter28 from './chapters/chapter-28';
import chapter29 from './chapters/chapter-29';
import chapter32 from './chapters/chapter-32';
import chapter33 from './chapters/chapter-33';
import chapter35 from './chapters/chapter-35';
import chapter38 from './chapters/chapter-38';
import chapter39 from './chapters/chapter-39';
import chapter40 from './chapters/chapter-40';
import chapter41 from './chapters/chapter-41';
import chapter44 from './chapters/chapter-44';
import chapter45 from './chapters/chapter-45';
import chapter46 from './chapters/chapter-46';
import chapter47 from './chapters/chapter-47';

// Composed chapter data — keys preserve original curriculum chapter numbers.
export const chapterData = {
  1:  chapter01,
  2:  chapter02,
  3:  chapter03,
  4:  chapter04,
  5:  chapter05,
  6:  chapter06,
  8:  chapter08,
  10: chapter10,
  12: chapter12,
  16: chapter16,
  18: chapter18,
  20: chapter20,
  22: chapter22,
  24: chapter24,
  26: chapter26,
  27: chapter27,
  28: chapter28,
  29: chapter29,
  32: chapter32,
  33: chapter33,
  35: chapter35,
  38: chapter38,
  39: chapter39,
  40: chapter40,
  41: chapter41,
  44: chapter44,
  45: chapter45,
  46: chapter46,
  47: chapter47,
};

// ── Derived helpers (single source of truth, consumed by App.jsx and LessonPage.jsx) ──

/** Sorted array of chapter numbers as integers, in curriculum order. */
export const chapterNumbers = Object.keys(chapterData).map(n => parseInt(n, 10)).sort((a, b) => a - b);

/** Total number of lesson pages across all chapters. */
export const totalPages = chapterNumbers.reduce((sum, n) => sum + chapterData[n].pages.length, 0);

/**
 * Map of chapter number → 1-based global page index where that chapter begins.
 * e.g. if chapter 1 has 1 page and chapter 2 has 3 pages,
 *      chapterStartPages[1] = 1, chapterStartPages[2] = 2, chapterStartPages[3] = 5.
 */
export const chapterStartPages = (() => {
  const map = {};
  let counter = 1;
  chapterNumbers.forEach(n => {
    map[n] = counter;
    counter += chapterData[n].pages.length;
  });
  return map;
})();

/** The maximum sequential chapter index that belongs to Basic Qaida (chapters 1–15). */
export const BASIC_MAX_DISPLAY_CHAPTER = 15;

/**
 * The global page number where the Advanced Qaida section begins.
 * This is the first chapter whose sequential display position exceeds BASIC_MAX_DISPLAY_CHAPTER.
 */
export const advancedStartPage = (() => {
  for (let i = 0; i < chapterNumbers.length; i++) {
    if (i + 1 > BASIC_MAX_DISPLAY_CHAPTER) {
      return chapterStartPages[chapterNumbers[i]];
    }
  }
  return 1;
})();
