# Research and Plan Record

## 2026-07-22: Repository Setup

### Discovery

- The repository is a React 19 Create React App with an existing `AGENTS.md`.
- Lesson content is modularized in `src/data/chapters/` and rendered by `LessonPage` and `WordCard`.
- The worktree contains active uncommitted image reorganization and content work that must be preserved.
- No deployment workflow, CI configuration, or formatter configuration was detected, so this setup does not invent one.
- Four root PNG files are development screenshots and should be organized under `docs/screenshots/`.
- A repository-wide em-dash scan found stylistic prose/comment uses plus protected Chapter 25 (legacy ID 41) lesson-data delimiters.

### Plan

1. Add concise AI-agent guidance and reusable planning/review workflows.
2. Centralize durable project context, decisions, plans, and status in `docs/memory/`.
3. Move only the four identified root screenshots.
4. Replace only non-semantic em dashes.
5. Build and review the final diff, then update status memory with evidence.

### Records

- [Approved design](2026-07-22-repository-setup-design.md)
- [Implementation plan](2026-07-22-repository-setup-plan.md)

### Implementation Outcome

- Repository guidance, Claude and agent-neutral skills, and read-only agent definitions were added.
- Durable memory documents were created and cross-linked.
- Four root development screenshots were moved to `docs/screenshots/` with no deletion.
- Stylistic em dashes were removed from prose and comments while functional Chapter 25 (legacy ID 41) separators remained unchanged.
- The production build passed; `git diff --check` passed; no critical or high-severity setup findings remain.
- Playwright MCP was added to global Codex config using the official `@playwright/mcp@latest` package and verified with `--help`.
- Asset review found one unreferenced brand variant and five unreferenced root SVGs. They were archived, not deleted. Encoded `Curved%20Arrow.webp` and CSS font references were verified as active, avoiding false positives.
- ESLint completed without findings, and every chapter module remains imported by the central data index.

## 2026-07-22: Chapter identity normalization

### Discovery

- The product shows 29 curriculum chapters, but `src/data/index.js` retained non-contiguous legacy IDs up to 47.
- `LessonPage` converted those IDs to sequential labels at render time, while source filenames and image folders continued to use the legacy IDs.
- This split identity caused valid Chapter 08 material to appear under a `chapter-10` source and asset folder.

### Implementation plan

1. Rename the 29 source modules to `chapter-01.js` through `chapter-29.js` without changing their contents.
2. Use the same sequential keys in `chapterData`; remove the display-number remapping.
3. Align chapter image folders and data references to the sequential identity.
4. Verify every local image reference, page sequence, lint, and production build.

## 2026-07-22: Repository hardening

Full record: [2026-07-22-repository-hardening.md](2026-07-22-repository-hardening.md).

### Discovery

- The earlier setup pass covered guidance and memory but left four checklist gaps: hooks, an architecture reference, a PR template, and a project history.
- Two checklist items were deliberately not applicable: an ADR directory (duplicates `decision-log.md`) and a deploy skill (no deploy process exists).
- Nothing in the repository explained the render pipeline. Page addressing in particular is positional and non-obvious: adding a page in any chapter renumbers every page after it.
- The first punctuation pass scanned U+2014 only. A scan across all dash-like codepoints found 65 non-breaking hyphens (U+2011) and a set of en dashes split between numeric ranges and sentence connectors.
- Stale "Chapter 41" references survived the renumbering in five memory documents; that chapter is now `chapter-25.js`.

### Plan

1. Classify every dash occurrence by role, then replace only artifacts and connectors.
2. Add a `PreToolUse(Bash)` hook scoped to the repository's real risk, worktree destruction, with a self-test.
3. Write `docs/architecture.md` and `docs/memory/project-history.md`.
4. Add the PR template and gitignore `docs/screenshots/`.
5. Rewrite `CLAUDE.md` around reference docs and the traps that have caused rework.
6. Verify with the build, the hook self-test, a dash rescan, and `git diff --check`.

### Implementation outcome

- All planned items completed. Build passed with a `-4 B` bundle delta traceable to exactly the two lesson-data strings that legitimately changed.
- One incident: a text-mode bulk rewrite normalized CRLF to LF in four files. Detected from the diff stat, reverted, and recorded as a standing rule in `decision-log.md`.
- Remaining dashes are 43 numeric ranges and 13 semantic separators, all intentional.
