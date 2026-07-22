# Decision Log

## 2026-07-22: Durable repository memory

**Decision:** Use `docs/memory/` for project context, decisions, plans, and status.

**Reason:** Context was spread across instructions, documentation, and conversation history. A concise local memory base gives future maintainers a repeatable starting point.

**Impact:** Update the relevant living document whenever a decision, verified result, or project direction changes.

## 2026-07-22: Preserve the existing data and navigation architecture

**Decision:** Keep lesson content in `src/data/chapters/`, rendering in page/component files, and navigation as `currentPage` state in `src/App.jsx`.

**Reason:** This existing separation makes curriculum updates safer and matches the current application design.

**Impact:** Do not add a router or move lesson content into UI components without a separately approved architectural decision.

## 2026-07-22: Asset and screenshot boundaries

**Decision:** Runtime lesson images continue to use `/images/...` under `public/images/`; development screenshots belong in `docs/screenshots/`.

**Reason:** This prevents temporary visual references from being confused with shipped assets.

**Impact:** New screenshots must be organized under `docs/screenshots/` unless explicitly promoted to an application asset.

## 2026-07-22: Protect semantic lesson separators

**Decision:** Retain em dashes in `src/data/chapters/chapter-25.js`.

**Reason:** `WordCard.jsx` uses the character to split paired Arabic forms. Replacing it changes rendered lesson behavior.

**Impact:** Stylistic em-dash cleanup applies to prose and comments only, not this lesson-data delimiter.

## 2026-07-22: Dirty-worktree safety

**Decision:** Preserve user-owned uncommitted changes unless a request names them or their files explicitly.

**Reason:** The repository contains active image and content reorganization work outside the current setup scope.

**Impact:** Use narrow diffs and explicit file lists before modifying or moving existing content.

## 2026-07-22: Development screenshot organization

**Decision:** Keep the four root-level development PNGs under `docs/screenshots/` with their original names.

**Reason:** They are visual references for development, not runtime assets.

**Impact:** Future screenshots should be saved in that directory and should not be imported by the application.

## 2026-07-22: Stylistic punctuation cleanup

**Decision:** Replace non-semantic em dashes in prose and comments with clearer punctuation while preserving Chapter 25 (legacy ID 41) data and renderer separators.

**Reason:** The request is visual and editorial; changing the functional separator would alter lesson rendering.

**Impact:** Future cleanup must distinguish visual prose from lesson-data syntax.

## 2026-07-22: Unused asset archive

**Decision:** Archive the unreferenced `tajweed-emblem.webp` and five root-level development SVGs under `archive/unused-assets/`.

**Reason:** Reference scans found no runtime consumers. Archiving keeps the files recoverable while keeping the shipped asset tree focused.

**Impact:** Do not remove an asset solely because its filename is absent from a naive scan. Check encoded paths, CSS references, dynamic data paths, and the production build first.

## 2026-07-22: Sequential chapter identity

**Decision:** Use the visible curriculum number as the only chapter identifier across source modules, data keys, asset folders, and documentation.

**Reason:** The previous legacy raw IDs reached 47 while the product contained 29 lessons. The runtime remapping obscured the mismatch and placed assets in misleading folders.

**Impact:** The canonical chapter source is `chapter-01.js` through `chapter-29.js`. Add or change a lesson using its displayed chapter number; do not introduce a second numbering scheme.

## 2026-07-22: One decision store, no ADR directory

**Decision:** Keep this log as the only decision record. Do not add `docs/decisions/` with ADR files.

**Reason:** A standard repository-setup checklist suggests ADRs, but this log already captures decision, reason, and impact. Two stores would split the source of truth, which is the failure this memory system exists to prevent.

**Impact:** Append decisions here. If this file grows past a few hundred lines, split it by topic rather than by introducing a parallel format.

## 2026-07-22: No deployment skill or CI configuration

**Decision:** Do not add a deploy skill, CI workflow, or hosting configuration.

**Reason:** The repository has no CI config, no deploy target, and no hosting settings. Documenting a procedure nobody follows is worse than documenting none.

**Impact:** When a real deployment process is chosen, record it here first, then add the skill.

## 2026-07-22: Hooks guard the worktree, not formatting

**Decision:** The only hook is `.claude/hooks/guard-worktree.js`, a `PreToolUse(Bash)` guard that blocks sweeping git and `rm -rf` commands. It is wired through `.claude/settings.json` and has a self-test at `.claude/hooks/guard-worktree.test.js`.

**Reason:** The project has no prettier or eslint-fix configuration, so a formatting hook would have nothing to run. The concrete risk here is different: this repository is routinely worked on with 170+ uncommitted changes, so a single `git reset --hard`, `git clean -fd`, or `git stash` destroys days of work.

**Impact:** The guard matches command text, so it also blocks commands that merely quote a blocked string. That false-positive direction is intentional. Run `node .claude/hooks/guard-worktree.test.js` after changing its patterns.

## 2026-07-22: Punctuation classified by role, not codepoint

**Decision:** Treat dash characters by the job they do:

| Class | Treatment |
|-------|-----------|
| U+2011 non-breaking hyphen | Replace with `-`. Always a paste artifact. |
| U+2013 en dash as sentence connector | Replace with `:` or `-`. |
| U+2013 en dash in a numeric range (`769–1024px`) | Keep. Correct typography. |
| U+2014 em dash in `chapter-25.js` and `WordCard.jsx` | Keep. Functional separator. |

**Reason:** The first cleanup pass looked only at U+2014 and missed 65 non-breaking hyphens that render like a hyphen but break search and copy. Blanket-replacing every dash would have damaged both correct range typography and lesson rendering.

**Impact:** Any future punctuation pass must scan all dash-like codepoints and sort them by role before replacing anything.

## 2026-07-22: Bulk text edits preserve line endings explicitly

**Decision:** Bulk rewrites read and write bytes, or assert the line-ending count is unchanged afterwards.

**Reason:** A Python text-mode rewrite during the punctuation cleanup silently normalized CRLF to LF in four files. This repository is mixed CRLF/LF. It was caught from a `git diff --stat` showing far more changed lines than characters replaced, and reverted.

**Impact:** Never let a text-mode rewrite decide line endings. Check `git diff --stat` against the expected edit count after any scripted edit.

## 2026-07-22: Development screenshots are gitignored

**Decision:** `/docs/screenshots/` is in `.gitignore`. Screenshots still belong in that directory.

**Reason:** They are development references with no runtime role and should not ship in the repository.

**Impact:** Three screenshots committed before this decision (`What-I-Want.PNG`, `page on hover.png`, `pageno31.png`) remain tracked, because gitignore does not untrack. Removing them from the index is a separate, explicit choice.
