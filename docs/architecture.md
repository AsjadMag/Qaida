# Architecture

How the Qaida application actually renders a lesson. This is the reference for the
non-obvious mechanics. For folder layout and conventions see `AGENTS.md`; for the
current verified state see `docs/memory/development-status.md`.

## Overview

```
index.js
  └── App.jsx ................ owns `currentPage` (1-based global page number)
        ├── TitlePage ........ shown at currentPage 0
        └── LessonPage ....... shown for currentPage 1..totalPages
              ├── data/index.js ..... resolves page number -> chapter + page
              └── WordCard .......... renders one card in the grid
```

There is no router. Navigation is a single integer in `App.jsx` state. The nav bar,
the chapter index modal, and the Basic/Advanced entry buttons all just set that integer.

## Page addressing (the most important detail)

`src/data/index.js` builds three derived values from the chapter modules:

- `chapterNumbers` - ordered keys of `chapterData`, i.e. `[1..29]`
- `totalPages` - sum of `pages.length` across all chapters
- `chapterStartPages` - the 1-based global page where each chapter begins

`LessonPage` walks `chapterNumbers` subtracting page counts until the remainder falls
inside a chapter, giving `currentChapterNum` and a zero-based `pageInChapter`.

**Consequence:** page numbers are positional, not stored. Adding or removing a single
entry in any chapter's `pages` array shifts the global page number of every chapter
after it. The page references in `docs/Qaida_Corrections_14062026.md` (P24, P66, ...)
are global page numbers, so they go stale the moment page counts change. Re-derive
them from `chapterStartPages` rather than trusting an old note.

## Chapter identity

One number identifies a chapter in three places, and they must agree:

| Place | Form |
|-------|------|
| Source module | `src/data/chapters/chapter-08.js` |
| Data key | `8:` in `chapterData` |
| Image folder | `public/images/chapters/chapter-08/` |

Chapters 1-15 render the "Basic Qaida" label, 16+ render "Advanced Qaida"
(`BASIC_MAX_DISPLAY_CHAPTER`). There is no separate display-number mapping any more;
an earlier version had legacy IDs running to 47 and remapped them at render time,
which put Chapter 08 content in a `chapter-10` folder. Do not reintroduce a second
numbering scheme.

Not every chapter has an image folder. 23 of the 29 chapters do; the rest are text-only.

## The page grid

`pages` is `Array<Page>`, a page is `Array<Row>`, and a row is `Array<Card>`.
Row width is chosen from the card count (1, 2, 3, or more), narrower rows get a
narrower container so cards stay a sensible size. A falsy card renders an empty grid
cell, which is how gaps in a row are expressed.

A `Card` is either a plain string (the Arabic text) or an object:

```js
{ text, useImage?, imagePath?, imageHoverPath?, arrowImage?, downArrow?, font? }
```

## WordCard separators (why em dashes are load-bearing)

`WordCard` inspects the card text for three separator characters and, when it finds
one, splits the string and renders `before <separator> after` as a pair:

| Character | Unicode | Used for |
|-----------|---------|----------|
| `=` | U+003D | equivalence pairs |
| `—` | U+2014 em dash | pause/waqf form pairs (Chapter 25) |
| `⇐` | U+21D0 | directional derivation |

The em dashes in `src/data/chapters/chapter-25.js` are **data, not typography**.
Replacing them with a hyphen collapses each pair into one unsplit string and silently
changes what learners see. Any prose or punctuation cleanup must exclude that file and
the matching literals in `WordCard.jsx`.

## Teacher instruction panel

`LessonPage` picks at most one instruction block per page:

1. If `pageInChapter === 0` and the chapter has `teacherInfo`, use it.
2. Otherwise use `pageTeacherInfo[pageInChapter]` if present.
3. Otherwise render no panel.

Images resolve through a fallback chain: `imagePaths` -> `imagePath` ->
`image.imagePath` -> the chapter's `teacherImage.imagePath`.

Instruction, goal, and note strings support a small inline markup, parsed by a split
on `/(\*\*.*?\*\*|\{\{IMG:.*?\}\})/g`:

- `**bold**` renders `<strong>`
- `{{IMG:/images/shared/Zabar.webp|4rem}}` renders an inline image; the part after
  `|` is a CSS height and defaults to `2.2rem`

`note` accepts a string or an array of strings (one styled block per entry).

## Image assets

Lesson images live under `public/images/` and are referenced from source with absolute
`/images/...` paths. CRA serves `public/` unchanged, so these are **not** bundled or
hashed and will not fail the build if missing - a wrong path is a silent 404 at runtime.

```
public/images/
  brand/      TajweedClassLogo_trans.webp
  shared/     Bay.webp, Zabar.webp, Curved Arrow.webp
  chapters/   chapter-NN/...
```

**Gotcha:** some references are URL-encoded, e.g. `/images/shared/Curved%20Arrow.webp`
for a file named `Curved Arrow.webp`. A naive filename grep reports these as unused.
Always check for the encoded form before archiving or deleting an asset.

## Card sizing

`WordCard.css` sets `container-type: size` on the card, which lets `WordCard.jsx` size
text in container-query units: `clamp(1rem, min(40cqw, 48cqh), 6rem)`, stepping down as
the string gets longer. `cqw` stops long words overflowing narrow cards; `cqh` stops
tall Arabic glyphs with harakat overflowing short mobile cards. Removing
`container-type` from the card breaks sizing everywhere at once.

Arabic text is split into graphemes with `Intl.Segmenter` where available, falling back
to a combining-mark regex, so base letters stay attached to their diacritics.

## Responsive tiers

Five tiers, listed in `AGENTS.md`. Two mechanisms cooperate: CSS media queries for
styling, and the `useIsMobile()` hook (viewport <= 768px) for layout decisions that
have to happen in JS, such as row width and grid gap. Sizing uses `clamp()`, `vw`, and
`min()`; physical units such as `in` were removed and should not come back.

## Tech stack

React 19 on Create React App 5, plain JavaScript, no TypeScript, no router, no state
library. Six Arabic TTF families are loaded from `src/assets/fonts/` via `@font-face`
in `index.css`; UI fonts come from Google Fonts.

`npm test` is wired to Jest and React Testing Library but the project currently has no
test files, so it reports "No tests found".
