# Qaida Repository Guide

Read `AGENTS.md` and `docs/memory/README.md` before making changes.

## Commands

- `npm start`: CRA development server on port 3000.
- `npm.cmd run build`: production build. This is the verification command on Windows PowerShell.
- `npm test`: Jest and React Testing Library. No test files exist yet, so this reports "No tests found".
- `node .claude/hooks/guard-worktree.test.js`: self-test for the destructive-command hook.

## Reference Docs

Read these instead of re-deriving the same facts from source:

- `docs/architecture.md`: page addressing, card model, separator semantics, asset resolution.
- `docs/memory/project-history.md`: how the project got here, and its recurring failure modes.
- `docs/memory/decision-log.md`: decisions already made. Check before changing navigation, lesson data, assets, or tooling.
- `docs/Qaida_Corrections_14062026.md`: the authoritative source for Arabic content corrections.

## Project Rules

- React 19 and Create React App; navigation is state-based in `src/App.jsx` with no router.
- Lesson content belongs in `src/data/chapters/`; keep rendering logic in pages and components.
- A chapter's number must match across its module name, its `chapterData` key, and `public/images/chapters/chapter-NN/`.
- Public lesson assets use `/images/...` paths and are served from `public/images/`. A wrong path fails silently at runtime, not at build time.
- Preserve the five responsive tiers defined in `AGENTS.md`. Use `clamp()`, `vw`, and `min()`; never physical units.
- Store development screenshots in `docs/screenshots/`. That directory is gitignored.
- Record durable decisions and verification evidence in `docs/memory/`.

## IMPORTANT

- NEVER change the em dashes in `src/data/chapters/chapter-25.js` or the matching literals in `WordCard.jsx`. `WordCard` splits card text on them to render paired forms; they are data, not typography.
- NEVER correct Arabic lesson text from a screenshot. Content changes need an explicit written source.
- Page numbers are positional. Adding or removing a page in any chapter renumbers every page after it.
- Preserve existing uncommitted changes unless the task explicitly names them. This repo is normally worked on with a large dirty worktree.

## Before Handover

Run the narrowest relevant check, then `npm.cmd run build` for application changes.
Update `docs/memory/development-status.md` when a task changes project direction, tooling, or verified behavior.
