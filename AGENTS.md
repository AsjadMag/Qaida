# Repository Guidelines

## Read First

| Document | When |
|----------|------|
| `docs/architecture.md` | Before changing rendering, page numbering, or assets |
| `docs/memory/README.md` | Before any change; it is the entry point to project memory |
| `docs/memory/decision-log.md` | Before changing navigation, lesson data, assets, or tooling |
| `docs/memory/project-history.md` | Its "Recurring failure modes" list mistakes already paid for |
| `docs/Qaida_Corrections_14062026.md` | The authoritative source for Arabic content corrections |

Three rules that are not obvious from the code:

1. The em dashes in `src/data/chapters/chapter-25.js` are data. `WordCard` splits card
   text on them to render paired forms. Never treat them as typography.
2. Page numbers are positional. Adding or removing a page renumbers every page after it.
3. This repository is normally worked on with a large dirty worktree. Preserve
   uncommitted changes unless a task names them.

## Project Overview

A Create React App (React 19) website for teaching Noorani Qaida / Arabic Tajweed.
It renders a `TitlePage` landing screen and paginated `LessonPage`s (Basic Qaida - Chapters 1–15;
Advanced Qaida - Chapters 16+). No external router; navigation is managed by a single `currentPage`
integer state in `App.jsx`.

---

## Folder Structure

```
Qaida/
├── public/                 Static assets served as-is
│   ├── images/             Lesson WebP images (referenced from src/ via /images/...)
│   ├── favicon.ico         TajweedClass brand favicon (multi-size PNG-in-ICO)
│   ├── favicon-32.png      32×32 PNG favicon for modern browsers
│   ├── tajweed-192.png     192×192 PWA icon
│   ├── tajweed-512.png     512×512 PWA icon
│   ├── manifest.json       Web app manifest (TajweedClass branding)
│   └── robots.txt
│
├── src/
│   ├── data/               Lesson data (separated from rendering)
│   │   ├── index.js        Composes all chapters; exports chapterData + helpers
│   │   └── chapters/       One JS file per chapter (chapter-01.js … chapter-29.js)
│   │
│   ├── pages/
│   │   ├── TitlePage.jsx   Landing page with Basic / Advanced entry points
│   │   └── LessonPage.jsx  Lesson renderer (imports data from ../data)
│   │
│   ├── components/
│   │   ├── WordCard.jsx    Individual Arabic letter / word card with hover effects
│   │   └── WordCard.css    Card styling + responsive breakpoints (fluid units)
│   │
│   ├── assets/fonts/       6 Arabic/Urdu TTF fonts (all referenced in index.css)
│   ├── App.jsx             Root component - page state, navigation bar, chapter index
│   ├── App.css             (removed - was unused CRA boilerplate)
│   ├── index.js            React entry point
│   ├── index.css           Global styles, @font-face declarations, utility classes
│   └── useIsMobile.js      Hook: returns true when viewport ≤ 768px
│
├── scripts/
│   ├── convert_images.py   Converts images in public/images/ to WebP and rewrites src refs
│   └── organize_images.py  Sorts public/images/ into brand/, shared/, chapters/chapter-NN/
│
├── docs/
│   ├── architecture.md                   Render pipeline, page addressing, data model
│   ├── memory/                           Durable project memory (start at README.md)
│   ├── Qaida_Corrections_14062026.md     Lesson content corrections log
│   ├── Updated_Qaida Mistakes_14062026.docx  Source document for the corrections log
│   ├── TajweedClassLogo.jpeg             Original logo JPEG (app uses the WebP in public/)
│   └── screenshots/                      Development screenshots (gitignored)
│
├── .claude/                Claude Code config: skills, agents, settings, hooks
├── .agents/                Agent-neutral mirrors of the reusable skills
├── .github/                PR template
│
└── archive/
    └── unused-assets/      Assets confirmed unused at the 2026-07 cleanup
        ├── images/         Orphaned WebP images (see archive/README.md)
        └── fonts/          Unused font duplicates (Nabi.ttf, MUHAMMADI_QURANIC.ttf)
```

---

## Build, Test, and Development Commands

| Command            | Purpose |
|--------------------|---------|
| `npm start`        | Dev server at http://localhost:3000 (hot reload) |
| `npm run audit:lessons` | Verify chapter numbering, page counts, and image references |
| `npm run build`    | Production build → `build/` |
| `npm test`         | Jest - (add tests alongside components as `*.test.js`) |
| `npm run eject`    | One-way CRA eject - avoid unless necessary |

Run `npm install` after pulling changes that modify `package.json`.

---

## Data Model

All lesson content lives in `src/data/`:

```
src/data/index.js
  exports: chapterData, chapterNumbers, totalPages, chapterStartPages,
           BASIC_MAX_DISPLAY_CHAPTER, advancedStartPage

src/data/chapters/chapter-NN.js   (one per chapter)
  exports: default object {
    titleArabic, titleEnglish,
    teacherInfo?: { instructions[], goal, note?, imagePath?, imagePaths?, imageStyle? },
    pageTeacherInfo?: { [pageIndex]: { instructions[], goal?, note? } },
    pageTitles?: { [pageIndex]: string },
    pageAnnotations?: { [pageIndex]: 'idgham' | ... },
    pages: Array<Array<Array<string | CardObject>>>
  }
```

A `CardObject` is `{ text, useImage?, imagePath?, imageHoverPath?, arrowImage?, downArrow?, font? }`.

Image paths use the `/images/...` prefix - CRA serves them from `public/images/` unchanged.

**To add a new chapter:** create `src/data/chapters/chapter-NN.js`, export the chapter object,
then add `import chapterNN from './chapters/chapter-NN'` and `NN: chapterNN` in `src/data/index.js`.

---

## Coding Style & Naming Conventions

- Indentation: 2 spaces in JS/JSX.
- Components: `PascalCase` (e.g. `LessonPage`, `WordCard`).
- Functions and variables: `camelCase`.
- CSS class names: `kebab-case`.
- Linting: CRA `react-app` + `react-app/jest` ESLint presets.
- No `console.log` in production code.

---

## Responsiveness

The site targets 5 viewport tiers:

| Tier            | Range             | Key mechanism |
|-----------------|-------------------|---------------|
| Small mobile    | ≤ 480px           | CSS `@media (max-width: 480px)` |
| Mobile          | 481 – 768px       | CSS `@media (max-width: 768px)` + `useIsMobile()` hook |
| Tablet          | 769 – 1024px      | CSS `@media (min-width: 769px) and (max-width: 1024px)` |
| Laptop/Desktop  | 1025 – 1440px     | Default styles |
| Large/4K        | ≥ 1441px          | CSS `@media (min-width: 1441px)` |

Card heights use `clamp()` instead of physical inch units.
Lesson container padding uses `clamp()`/`vw` instead of `1in`/`2in`.
Teacher images use `min(400px, 38vw)` so they shrink gracefully on narrower viewports.

---

## Testing Guidelines

- Framework: Jest + React Testing Library (`@testing-library/*`).
- **There are currently no test files**, so `npm test` reports "No tests found".
  `npm.cmd run build` is the practical verification command.
- Name new test files `*.test.js` and colocate them with the component.
- `node .claude/hooks/guard-worktree.test.js` self-tests the destructive-command hook.

---

## Commit & Pull Request Guidelines

- Short, imperative subject line (under 72 chars): `feat: add chapter 48`.
- PRs should include: summary, screenshots/clips for UI changes, notes on new dependencies.

---

## Configuration

- CRA project - use `.env` for local-only config.
- Keep API keys and secrets out of `src/`.
- `build/` is gitignored and generated by `npm run build`.
- `archive/` and `docs/` are tracked in git.
