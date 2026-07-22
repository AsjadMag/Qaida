# نورانی قاعدہ - TajweedClass

An interactive, multi-device Noorani Qaida website for learning Arabic Tajweed, built with React 19.

---

## Quick Start

```bash
npm install
npm start          # http://localhost:3000
```

## Production Build

```bash
npm run build      # outputs to build/
```

---

## Project Structure

```
public/
  images/           Lesson WebP images
  favicon.ico       TajweedClass brand favicon
  manifest.json     PWA manifest

src/
  data/
    index.js        Chapter data index + helpers (chapterNumbers, totalPages, …)
    chapters/       One JS file per chapter (chapter-01.js … chapter-29.js)
  pages/
    TitlePage.jsx   Landing page
    LessonPage.jsx  Lesson renderer
  components/
    WordCard.jsx    Arabic letter/word card
    WordCard.css    Card styles (fluid sizing, responsive breakpoints)
  App.jsx           Root - navigation state, fixed nav bar, chapter index modal
  index.css         Global styles, font-face declarations

scripts/
  convert_images.py  Convert images to WebP and rewrite src/ references

docs/               Reference documents and design screenshots
archive/            Unused assets (kept for reference - not included in build)
```

---

## Adding a New Chapter

1. Create `src/data/chapters/chapter-NN.js` exporting a chapter object.
2. Add `import chapterNN from './chapters/chapter-NN'` to `src/data/index.js`.
3. Add `NN: chapterNN` to the `chapterData` object in `src/data/index.js`.
4. Run `npm start` and navigate to verify.

### Chapter Object Shape

```js
export default {
  titleArabic: 'عنوان',
  titleEnglish: 'Chapter Title',
  teacherInfo: {
    instructions: ['Step 1', 'Step 2'],
    goal: 'Learning objective',
    // optional: imagePath, imagePaths, imageStyle, note
  },
  // optional: pageTeacherInfo (per-page instructions), pageTitles, pageAnnotations
  pages: [
    // each page is an array of rows; each row is an array of cards
    [
      ['بَ', 'تَ', 'ثَ'],
      ['جَ', 'حَ', 'خَ'],
    ]
  ]
};
```

Cards can be plain strings (`'بَ'`) or objects:
```js
{ text: 'بَ', font: 'ArabQuranIslamic_2' }
{ useImage: true, imagePath: '/images/my-card.webp', imageHoverPath: '/images/my-card-hover.webp' }
```

Teacher instruction strings support:
- `**bold text**` - renders bold
- `{{IMG:/images/path.webp|size}}` - inline image (size = CSS height value, e.g. `2rem`)

---

## Image Assets

All lesson images live in `public/images/` and are referenced as `/images/file.webp` in the data files.

To add images in WebP format from source files:
```bash
python scripts/convert_images.py
```

---

## Responsive Design

The site adapts across 5 viewport tiers:

| Tier           | Range          |
|----------------|----------------|
| Small mobile   | ≤ 480px        |
| Mobile         | 481 – 768px    |
| Tablet         | 769 – 1024px   |
| Desktop        | 1025 – 1440px  |
| Large / 4K     | ≥ 1441px       |

Card heights and container padding use `clamp()` and `vw` units (no physical inch values).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm test` | Jest test runner |
| `python scripts/convert_images.py` | Convert and register new WebP images |

---

## Tech Stack

- **React 19** (Create React App)
- **No router** - page state is a single `currentPage` integer in `App.jsx`
- **CSS container queries** (`container-type: size`) for per-card letter sizing
- **Google Fonts** - Cairo (UI), Jameel Noori Nastaleeq Kasheeda (Urdu), Amiri Quran (Bismillah)
- **Local fonts** - 6 Arabic Quranic TTF families loaded via `@font-face` in `index.css`
