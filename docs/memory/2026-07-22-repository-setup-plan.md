# Repository Setup Implementation Plan

> **For agentic workers:** Execute the tasks in order. Keep all pre-existing uncommitted changes intact. Do not create commits because the worktree already contains user-owned changes.

**Goal:** Add professional AI-development guidance and durable project memory, organize development screenshots, and remove non-semantic em dashes without changing lesson behavior.

**Architecture:** `AGENTS.md` remains the source of Codex-specific repository rules. `CLAUDE.md` provides a concise counterpart for Claude. `docs/memory/` is the single durable knowledge base for decisions, status, research, and project context. Local skills and agents provide repeatable planning, review, research, and verification workflows.

**Tech Stack:** React 19, Create React App, JavaScript, Markdown, npm.

## Global Constraints

- Preserve every pre-existing uncommitted change except the explicit root-level screenshot moves and the approved em-dash cleanup.
- Never alter Arabic lesson-data em dashes in `src/data/chapters/chapter-25.js`; `WordCard.jsx` recognizes them as a functional separator.
- Keep development screenshots in `docs/screenshots/`; do not add them under `src/` or `public/`.
- Do not add CI, deployment, formatting, or hook automation that this repository has not already adopted.
- Record decisions and verification evidence in `docs/memory/` during this implementation.

---

### Task 1: Add concise repository-local AI guidance

**Files:**
- Create: `CLAUDE.md`
- Create: `.claude/agents/researcher.md`
- Create: `.claude/agents/qa.md`
- Create: `.claude/skills/plan/SKILL.md`
- Create: `.claude/skills/review/SKILL.md`
- Create: `.agents/skills/plan/SKILL.md`
- Create: `.agents/skills/review/SKILL.md`

**Interfaces:**
- Consumes: `AGENTS.md`, `README.md`, `docs/memory/README.md`.
- Produces: repeatable instructions for planning, review, repository exploration, and verification.

- [x] **Step 1: Create `CLAUDE.md` with the repository’s essential operating rules.**

Include the exact commands `npm start`, `npm test`, and `npm.cmd run build`; the React 19/CRA architecture; the `src/data/chapters/` data rule; the responsive tiers; the instruction to read `AGENTS.md` and `docs/memory/README.md`; the rule that screenshots belong in `docs/screenshots/`; and the rule to preserve existing dirty-worktree changes.

- [x] **Step 2: Create the two Claude agent definitions.**

`researcher.md` must be read-only and return locations, existing patterns, risks, and no patches. `qa.md` must run the project’s documented commands, report exact results, and never change source files.

- [x] **Step 3: Create the planning and review skill manifests.**

The planning manifest must require scope, files, risks, acceptance criteria, and a verification command before edits. The review manifest must require correctness, lesson-data safety, responsive impact, accessibility impact, regression risk, and evidence-based findings. Mirror the same practical content in `.agents/skills/` without Claude-specific execution fields.

- [x] **Step 4: Verify guidance links.**

Run: `rg -n "AGENTS\.md|docs/memory/README\.md|docs/screenshots" CLAUDE.md .claude .agents`

Expected: every created guidance surface references the project rules or screenshot location where relevant.

### Task 2: Establish durable project memory

**Files:**
- Create: `docs/memory/README.md`
- Create: `docs/memory/project-context.md`
- Create: `docs/memory/decision-log.md`
- Create: `docs/memory/development-status.md`
- Create: `docs/memory/research-and-plan.md`
- Modify: `docs/memory/2026-07-22-repository-setup-design.md`

**Interfaces:**
- Consumes: `AGENTS.md`, `README.md`, git history, current repository structure, and the approved design document.
- Produces: one source of truth for future agents and maintainers.

- [x] **Step 1: Create `docs/memory/README.md`.**

Define the memory contract: read this file and `AGENTS.md` first; add decisions immediately to `decision-log.md`; update `development-status.md` after each implementation and verification step; record task-specific research/plans in `research-and-plan.md`; keep dated design and plan files for substantial work; avoid duplicating lesson content that already belongs in `src/data/`.

- [x] **Step 2: Create `project-context.md`.**

Document the application purpose, React/CRA stack, root navigation model, rendering/data relationship, image-path convention, responsive tiers, key commands, and the boundary that `build/` and `node_modules/` are generated directories.

- [x] **Step 3: Create `decision-log.md`.**

Seed it with these decisions: chapter data stays separated from rendering; page navigation remains state-based without a router; public lesson images use `/images/...`; screenshots are stored in `docs/screenshots/`; Chapter 25 (legacy ID 41) em dashes are semantic data; and dirty-worktree changes must be preserved unless explicitly scoped.

- [x] **Step 4: Create `research-and-plan.md` and `development-status.md`.**

Record the current setup discovery: React 19/CRA, no configured deployment workflow, existing `AGENTS.md`, current image reorganization in the dirty worktree, and the planned validation. In the status document, identify this repository setup as in progress and reserve a verification section for build and review results.

- [x] **Step 5: Add cross-links and self-check the memory docs.**

Run: `rg -n "decision-log|development-status|project-context|research-and-plan" docs/memory`

Expected: `README.md` links to each living document and no document claims to replace `AGENTS.md` or lesson data.

### Task 3: Organize root development screenshots

**Files:**
- Move: `final-index.png` to `docs/screenshots/final-index.png`
- Move: `final-nav.png` to `docs/screenshots/final-nav.png`
- Move: `image.png` to `docs/screenshots/image.png`
- Move: `Screenshot 2026-07-22 202428.png` to `docs/screenshots/Screenshot 2026-07-22 202428.png`
- Modify: `docs/memory/decision-log.md`
- Modify: `docs/memory/development-status.md`

**Interfaces:**
- Consumes: root-level PNG development artifacts and the existing `docs/screenshots/` directory.
- Produces: a clean project root with all known development screenshots in the documentation area.

- [x] **Step 1: Confirm exact files before moving them.**

Run: `Get-ChildItem -File final-index.png, final-nav.png, image.png, 'Screenshot 2026-07-22 202428.png' | Select-Object Name, Length`

Expected: four existing PNG files. Do not move any WebP, SVG, favicon, or `public/` asset.

- [x] **Step 2: Move only those four files into `docs/screenshots/` with their existing names.**

Use native PowerShell `Move-Item -LiteralPath` with explicit source and destination paths. Do not use wildcards.

- [x] **Step 3: Verify the organization result.**

Run: `Get-ChildItem -File docs/screenshots | Select-Object Name, Length; Test-Path final-index.png, final-nav.png, image.png, 'Screenshot 2026-07-22 202428.png'`

Expected: all four files appear under `docs/screenshots/`; every root path reports `False`.

- [x] **Step 4: Record the move in decision and status memory.**

State that screenshots are development reference artifacts, remain tracked under `docs/screenshots/`, and are not application runtime assets.

### Task 4: Remove non-semantic em dashes

**Files:**
- Modify only matching prose/comment text in: `AGENTS.md`, `README.md`, `archive/README.md`, `docs/Qaida_Corrections_14062026.md`, `public/index.html`, `public/manifest.json`, `scripts/organize_images.py`, `src/App.jsx`, `src/components/WordCard.jsx`, `src/data/index.js`, `src/index.css`, `src/pages/LessonPage.jsx`, `src/pages/TitlePage.jsx`, and `src/useIsMobile.js`.
- Preserve: `src/data/chapters/chapter-25.js`.
- Modify: `docs/memory/decision-log.md`

**Interfaces:**
- Consumes: the Unicode `U+2014` character scan and `WordCard.jsx` behavior.
- Produces: clearer prose and comments without changing runtime behavior or Arabic lesson transformations.

- [x] **Step 1: Capture the baseline scan.**

Run: `rg -n --glob '!node_modules/**' --glob '!build/**' --glob '!*.docx' --glob '!*.png' --glob '!*.jpg' --glob '!*.jpeg' --glob '!*.webp' "U+2014 character" .`

Expected: a line-by-line list including documentation/comments and the protected Chapter 25 (legacy ID 41) lesson-data strings.

- [x] **Step 2: Replace only prose and comment uses.**

Use colons, parentheses, commas, or plain hyphens according to the sentence. Keep `chapter-25.js` untouched and retain the `WordCard.jsx` separator logic for Unicode `U+2014`.

- [x] **Step 3: Verify the semantic boundary.**

Run the Unicode `U+2014` scan first for the protected Chapter 25 (legacy ID 41) data and `WordCard.jsx`, then scan all other supported text files for remaining stylistic occurrences.

Expected: the first command shows the intentional lesson-data/rendering uses; the second shows no remaining non-semantic occurrences.

- [x] **Step 4: Record the separator decision.**

Add an entry explaining that Chapter 25 (legacy ID 41) em dashes are retained because the renderer uses them to split paired Arabic forms.

### Task 5: Verify, review, and finalize status memory

**Files:**
- Modify: `docs/memory/development-status.md`
- Modify: `docs/memory/research-and-plan.md`

**Interfaces:**
- Consumes: completed setup, cleanup, build output, and a code-review pass.
- Produces: final verification evidence and a clear continuation point.

- [x] **Step 1: Run the production build.**

Run: `npm.cmd run build`

Expected: `Compiled successfully.` with no build errors.

- [x] **Step 2: Perform the mandatory review.**

Review the diff for accidental changes outside the approved paths, broken Markdown links, screenshots outside `docs/screenshots/`, duplicated guidance, and altered Chapter 25 (legacy ID 41) Arabic content. Classify findings by severity and fix any critical or high-severity issue before finalizing.

- [x] **Step 3: Update status and research records with evidence.**

Set the repository setup status to complete, list the created files, record the build command/result, record the review result, and state that future implementation work should start by reading `AGENTS.md` and `docs/memory/README.md`.

- [x] **Step 4: Final scope audit.**

Run: `git status --short; git diff --check; git diff -- docs/memory CLAUDE.md .claude .agents AGENTS.md README.md archive docs public scripts src`

Expected: no whitespace errors; every new or changed item belongs to the approved setup, screenshot move, or em-dash cleanup scope; all unrelated dirty-worktree files remain otherwise untouched.
