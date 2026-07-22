# Development Status

## Current Work

Repository setup, asset alignment, chapter identity normalization, and repository
hardening are complete as of 2026-07-22. No task is in progress.

## Completed

### Setup and memory

- Established the approved repository-setup design and execution plan.
- Added repository-local Claude guidance, planning/review skills, and researcher/QA agent definitions.
- Created the project-memory structure and documented its operating rules.
- Added `docs/architecture.md` covering page addressing, chapter identity, the card model, separator semantics, the teacher panel, asset resolution, and card sizing.
- Added `docs/memory/project-history.md` with the commit timeline and a recurring failure-modes section.
- Rewrote `CLAUDE.md` with a reference-docs section and an IMPORTANT block naming the four traps that have caused rework.
- Added `.claude/hooks/guard-worktree.js` plus its self-test, wired through `.claude/settings.json`.
- Added `.github/pull_request_template.md` with lesson-data and responsiveness gates.

### Content and assets

- Archived six verified-unused assets under `archive/unused-assets/` and documented the recovery locations.
- Replaced legacy chapter IDs (which reached 47) with the 29 sequential chapter numbers shown in the product.
- Aligned lesson image folders and image references with those sequential chapter numbers.
- Moved the four root development screenshots into `docs/screenshots/`, then gitignored that directory.
- Added the official Playwright MCP entry to the global Codex configuration; the package help command launched successfully.

### Punctuation

- Replaced stylistic em dashes in prose and comments (first pass).
- Replaced 65 non-breaking hyphens (U+2011) across `docs/Qaida_Corrections_14062026.md`, `chapter-11.js`, `chapter-12.js`, and `LessonPage.jsx` (second pass).
- Replaced 5 en-dash sentence connectors in `chapter-05.js`, `chapter-13.js`, and `LessonPage.jsx`.
- Retained the Chapter 25 (legacy ID 41) separators and the matching `WordCard.jsx` literals.
- Corrected stale "Chapter 41" references in the memory documents to "Chapter 25 (legacy ID 41)".

## Verification Evidence

### Chapter identity and assets

- Exactly 29 sequential modules (`chapter-01.js` through `chapter-29.js`) exist; all 120 local lesson-image references resolve and use their owning chapter folder or `shared/`.
- ESLint completed with no findings; all chapter modules remain imported by `src/data/index.js`.

### Repository hardening (2026-07-22)

- `npm.cmd run build`: `Compiled successfully.`
- Bundle delta: `main.js` changed by exactly `-4 B`, which matches the two non-breaking hyphens in the `chapter-11.js` and `chapter-12.js` goal strings (3 bytes to 1 byte each). Every other punctuation edit was in a comment and correctly left no runtime trace.
- `node .claude/hooks/guard-worktree.test.js`: `ok - 12 blocked, 9 allowed`.
- Hook end-to-end: a blocked command exits 2 with a reason on stderr; an allowed command exits 0. Confirmed live when the guard blocked a test command that merely quoted a blocked string.
- `git diff --check`: no whitespace errors.
- `git check-ignore docs/screenshots/final-index.png`: matched by `.gitignore:30`.
- Dash scan across all `.md`, `.js`, `.jsx`, `.css`, `.html`, `.json`, `.py`, `.txt` files: 43 numeric-range en dashes and 13 semantic em dashes remain; zero non-breaking hyphens; zero stylistic occurrences.
- Line endings: verified restored to CRLF in the four files affected by the text-mode incident described in `2026-07-22-repository-hardening.md`.
- The pre-existing dirty image and content worktree remains preserved.
- Playwright responsive layout audit: all 87 lesson pages passed at 375px, 768px, 1280px, and 1440px, with no card scroll overflow or visible content extending outside its card.
- Verified visual reference: `docs/screenshots/page-22-card-layout-verified.png` shows the corrected Erected Zair page.

### Lesson structure audit (2026-07-22)

`npm run audit:lessons` passes with exit code 0:

- 29 chapter modules, range 1 to 29, no gaps.
- 87 pages total, matching the live site.
- The generated chapter-to-page map matches the appendix in `docs/Qaida_Corrections_14062026.md` for all 29 chapters.
- 120 lesson image references, 0 broken, 0 misfiled. Every chapter image resolves inside its own chapter folder or `shared/`/`brand/`.
- 98 of 98 image files are referenced; 0 unreferenced.
- No chapter folder exists without a matching chapter.
- Chapter 25 still carries its 26 em dash separators after the title correction.
- `npm.cmd run build`: `Compiled successfully.`

## Known Gaps

- No component or unit tests exist. `npm test` reports "No tests found". The automated checks in the repository are `npm run audit:lessons` and the hook self-test.
- Six of the 29 chapters have no image folder (1, 4, 5, 15, 25, 28). This is expected; they are text-only.
- Three screenshots committed before the gitignore decision remain tracked.
- The page map in `docs/Qaida_Corrections_14062026.md` is now verified correct. Its inline page references within individual correction entries (P24, P66, and similar) were captured before the restructure and are still unverified; re-derive them from `chapterStartPages` or the audit output.

## Next Safe Step

Begin by reading `AGENTS.md` and `docs/memory/README.md`, then `decision-log.md` before
changing lesson data, assets, navigation, or tooling. For anything touching chapter
numbering, page numbering, assets, or punctuation, read the recurring failure modes in
`project-history.md` first.
