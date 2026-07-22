# Image asset audit - 2026-07-22

## Scope

Audited all 98 WebP files under `public/images/` and all 120 lesson-data image references. The audit covered file decoding, intrinsic dimensions, chapter ownership, duplicate/unreferenced assets, transparent-pixel bounds, and targeted visual inspection of instructional symbols, side-panel diagrams, and the smallest card hover assets.

## Verified clean

- All 98 files decode successfully with Pillow; no corrupt WebP was found.
- All 120 references resolve; there are 0 broken references and 0 misfiled chapter references.
- All 98 files are referenced; there are 0 unreferenced files in the active image tree.
- Chapter 3 is using its original raster patches again: `shared/Zabar.webp`, `chapter-03/Chapter3 Zair.webp`, and `chapter-03/paish.webp`.
- `chapter-08/ChapterNo8.webp` is owned by Chapter 8 and is used by Chapter 8, not Chapter 10.
- The responsive inline-image fix remains in place: images preserve aspect ratio and cannot exceed the teacher panel width.

## Quality-risk candidates for manual approval

These are not automatically classified as bad; they are the assets most likely to look soft when enlarged because their source dimensions are small:

- `chapter-26/chapter_11_v2(2).webp` (42x72), `chapter_11_v2(3).webp` (46x58), and `chapter_11_v2(4).webp` (56x58).
- `chapter-22/chapter_7_v2(8).webp` (152x62), `chapter-22/chapter_7_v2.webp` (910x62), and the other thin label strips in that folder.
- `chapter-08/waomaddah1.webp` (87x77), `waomaddah2.webp` (117x98), and `waomaddah3.webp` (121x88).
- `chapter-24/chapter_9_vs2(1).webp` (104x58) and `chapter_9_vs2.webp` (136x68).
- `chapter-21/chapter_6_v2(1).webp` (88x80) and `chapter_6_v2(2).webp` (196x78).
- `chapter-07/YaaImaddah.webp` (103x85) and `chapter-16/AaRaLam.webp` (144x68).

The small assets are currently rendered as small inline symbols or labels, so intrinsic dimensions alone do not prove a defect. They should only be replaced after comparing an approved higher-resolution source image against the live page.

## No-change conclusion

No safe asset replacement was made from this audit. Replacing images based only on filename, dimensions, or an automated edge test would risk changing the lesson artwork and reintroducing chapter mix-ups. The next change should be limited to a specific asset after its live screenshot and source comparison are approved.

## Visual review findings (2026-07-23)

Every active asset was inspected in five labeled contact sheets, followed by native-resolution inspection of the assets that showed edge contact or unusually small dimensions. The following findings are actionable:

### Confirmed source-quality problems

- `chapter-02/laam_1_hover.webp` contains a large green/white glyph whose strokes visibly run into the right and lower canvas edges. The frame is cropped and should not be treated as a clean hover illustration.
- `chapter-02/laam_2_hover.webp` has the same problem: the glyph and effects run into the right and lower edges, with sparse fragment artifacts around the canvas. It is also cropped at source.

These are hover-only assets. Their normal `laam_1.webp` and `laam_2.webp` base assets render as clean transparent black glyphs, so the safest correction is to replace or remove only the two hover frames after an approved source is available.

### Softness risks, not confirmed defects

The following assets are visually legible at their current inline size, but their small native dimensions mean they can become blurred if a later layout enlarges them: the Chapter 8 `waomaddah*` set, Chapter 21 `chapter_6_v2(1-2)`, Chapter 22 `chapter_7_v2(8)`, Chapter 24 `chapter_9_vs2(1)`, Chapter 26 `chapter_11_v2(2-4)`, and Chapter 29 `chapter_13_v2(3-4)`. No replacement was made because each is currently used as a small symbol/label rather than an enlarged illustration.

The remaining instructional diagrams and word strips were visually clear at source resolution. No additional source clipping or blur was confirmed.

## Chapter 8 replacement (2026-07-23)

`chapter-08/ChapterNo8.webp` was regenerated from the original as a higher-resolution RGB WebP. The replacement preserves the full two-panel diagram, Arabic examples, blue cylinders, guide lines, and labels while correcting the visibly stretched geometry. The original was retained as `docs/screenshots/ChapterNo8-original.webp`; the regenerated preview is `docs/screenshots/ChapterNo8-regenerated.webp`. The active replacement is 1742x903, compared with the former 1248x646. `npm run audit:lessons` and `npm run build` both pass.

The three smaller Chapter 8 `waomaddah` assets were not replaced: generated variants changed the exact Arabic composition, so they were rejected rather than introducing incorrect lesson content. They remain flagged for a deterministic, source-preserving upscaling or an approved higher-resolution original.
