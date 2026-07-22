# Archive - Unused Assets

This folder holds assets that were confirmed unused in the application at the time of the 2026-07 codebase cleanup. They are **retained in git history** for reference or future use, but are excluded from the `public/` folder so they do not ship in production builds.

## Contents

### `unused-assets/images/`
WebP images that have no reference in any `src/` file. Notable sets:
- `chapter_14_v2*` - 11 images prepared for Chapter 14 content but never wired up in `LessonPage`.
- `ChapterNo.6New.webp` - superseded by `public/images/ChapterNo.6.webp`.
- `Zabar.NewPNG.webp` - superseded by `public/images/Zabar.webp`.
- `laam_3.webp`, `laam_3_hover.webp` - laam variant not used (laam_1 and laam_2 are used).
- `erected Zair*.webp` - three variants; none referenced in lesson data.
- `title.webp` - old title image replaced by CSS/inline content.
- `Chapter_1_V2.webp`, `Chapter_2_V2.webp`, `chapter_12_v2(6).webp`, `chapter_9_vs2(5).webp` - superseded by numbered variants.

### `unused-assets/fonts/`
Font files not referenced in any `@font-face` declaration:
- `Nabi.ttf` - not used anywhere in `src/`.
- `MUHAMMADI_QURANIC.ttf` - underscore-named duplicate of the space-named `MUHAMMADI QURANIC FONT.ttf` that is active. Only appeared in a stray CSS comment.

## To restore an asset
Move it back to `public/images/` or `src/assets/fonts/` and reference it in the appropriate source file.

### `unused-assets/ui/`
Development SVGs with no runtime references:
- `arrow-left.svg`, `arrow-right.svg`, `exit-x.svg`, `loading-spinner.svg`, and `menu-lines.svg`.

### Newly archived image
- `unused-assets/images/tajweed-emblem.webp` is an unreferenced brand variant. The active logo remains `public/images/brand/TajweedClassLogo_trans.webp`.
