# Project History

Reconstructed from git history on 2026-07-22. This exists so an agent joining the
project can see how the codebase got to its current shape and avoid re-litigating
decisions that were already worked through.

## Branch model

Work happens on `FinalVersion` and is merged into `main`. `Version_1` holds the first
delivered iteration. The current working branch is `FinalVersion`. Several historical
"Merge branch 'FinalVersion'" commits on `main` are the result of that flow, not of
parallel feature development.

## Timeline

### Phase 1 - Scaffold (2025-11)

| Date | Commit | What |
|------|--------|------|
| 2025-11-19 | `da687d7` | Initialize project using Create React App |

The project has been Create React App from day one. No eject, no router, no state
library was ever introduced.

### Phase 2 - Content and the card renderer (2026-01 to 2026-02)

| Date | Commit | What |
|------|--------|------|
| 2026-01-14 | `2f35558` | Pages completed |
| 2026-01-28 | `6a16cf1` | WordCard, CompoundWordCard, LessonPage, ArabicTextRenderer with hover effects |
| 2026-01-28 | `c571183` | Qaida page alignment |
| 2026-02-11 | `72c0cc9` | Letter alignment corrections |
| 2026-02-20 | `a21c8f9` | Qaida changes V1 complete |

The interactive card model (hover state, Arabic grapheme splitting, separator pairs)
originates here. `CompoundWordCard` and `ArabicTextRenderer` were later folded into
`WordCard`.

### Phase 3 - Version 2 content pass (2026-04 to 2026-05)

| Date | Commit | What |
|------|--------|------|
| 2026-04-28 | `5d6d0c8` | Chapters 1-7 updated to version 2 |
| 2026-05-05 | `86cf2fe` | Chapter index and hover buttons |
| 2026-05-06 | `d356eb2` | Qaida content update |
| 2026-05-15 | `6ee8677` | Version 2 upload |

The chapter index modal and the fixed navigation bar date from this phase.

### Phase 4 - Version 3 and branding (2026-06)

| Date | Commit | What |
|------|--------|------|
| 2026-06-18 | `b0c099e` | Version 3 update |
| 2026-06-21 | `f7a7de9` | Version 3 updates complete |
| 2026-06-23 | `0ea6b99` `969e12a` | Content complete, logo outstanding |
| 2026-06-25 | `60534bf` `d5ea21f` | TajweedClass logo and favicons |

`docs/Qaida_Corrections_14062026.md` is the written record of the 14-06-2026 reviewer
pass that drove this phase, transcribed from
`docs/Updated_Qaida Mistakes_14062026.docx`. It is the authoritative source for Arabic
content corrections. Its page references are global page numbers and are only valid
against the page counts at the time it was written.

### Phase 5 - Responsive and mobile (2026-06-30 to 2026-07-01)

| Date | Commit | What |
|------|--------|------|
| 2026-06-30 | `4a9ac05` | FinalVersion update |
| 2026-07-01 | `53ad85d` `5cf2670` | Mobile version |
| 2026-07-01 | `59663ff` | Main cleanup |
| 2026-07-01 | `b41d6be` | Title page update |

The five responsive tiers and the `useIsMobile()` hook were established here. Physical
inch units were replaced with `clamp()` and viewport units.

### Phase 6 - Restructure (2026-07-22)

| Date | Commit | What |
|------|--------|------|
| 2026-07-22 | `ac337cd` `5d61557` | gitignore updates |
| 2026-07-22 | `b1974bd` | Reorganize repo, extract chapter data, improve responsiveness |

`b1974bd` is the split that produced the current architecture: lesson content moved out
of the page components into one module per chapter under `src/data/chapters/`, composed
by `src/data/index.js`.

### Phase 7 - Identity, assets, and agent infrastructure (2026-07-22, uncommitted)

Still in the working tree at the time of writing. See
`docs/memory/development-status.md` for the verified state.

- Chapter identity normalized: legacy non-contiguous IDs reaching 47 were replaced by
  the 29 sequential numbers learners actually see, across module names, `chapterData`
  keys, and image folders. The old render-time remapping was deleted.
- `public/images/` reorganized into `brand/`, `shared/`, and `chapters/chapter-NN/`.
- Six verified-unused assets archived under `archive/unused-assets/` rather than deleted.
- AI agent infrastructure added: `CLAUDE.md`, `.claude/` skills and agents, `.agents/`
  mirrors, `docs/memory/`, a worktree guard hook, and `docs/architecture.md`.
- Punctuation cleanup across prose and comments, preserving the Chapter 25 em dash
  separators.

## Recurring failure modes

Patterns that have already cost time on this project. Check these before changing
anything in the same area.

1. **Two numbering schemes.** The legacy-ID era meant a file named `chapter-10.js` held
   Chapter 08 material. Keep the module name, data key, and asset folder identical.
2. **Page numbers treated as stable.** They are positional. Adding a page renumbers
   everything after it, which invalidates page references in the corrections log.
3. **Naive asset scans.** `Curved%20Arrow.webp` is URL-encoded in source and looks
   unused to a filename grep. Verify encoded forms and CSS references before archiving.
4. **Punctuation cleanup hitting lesson data.** The em dashes in `chapter-25.js` are a
   rendering instruction, not typography.
5. **Correcting Arabic from screenshots.** Content changes need an explicit written
   source. The corrections log is that source; a screenshot is not.
6. **Sweeping git commands.** This repo is routinely worked on with a large dirty
   worktree. `.claude/hooks/guard-worktree.js` blocks the commands that would erase it.
