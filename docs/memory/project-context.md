# Project Context

## Purpose

Noorani Qaida is a React 19 educational web application for teaching Arabic reading and Tajweed.

## Architecture

Component map, one line each. The mechanics live in
[`docs/architecture.md`](../architecture.md); do not duplicate them here.

- `src/App.jsx` owns the single `currentPage` state, navigation controls, and chapter index.
- `src/pages/TitlePage.jsx` renders the Basic and Advanced entry screen.
- `src/pages/LessonPage.jsx` resolves a global page number to a chapter and renders it.
- `src/data/index.js` composes the chapter modules in `src/data/chapters/` and derives the page helpers.
- `src/components/WordCard.jsx` renders Arabic letters and words; `WordCard.css` owns its card styling.
- `public/images/` contains application assets addressed from source with `/images/...` paths.

## Development Commands

- `npm start`: local development server.
- `npm.cmd run build`: Windows-safe production build. This is the verification command.
- `npm test`: Jest and React Testing Library. No test files exist yet.
- `node .claude/hooks/guard-worktree.test.js`: self-test for the destructive-command hook.

## Stable Constraints

- This is Create React App with no external router, no TypeScript, and no state library.
- Keep lesson data separate from rendering.
- A chapter's number is identical across its module name, its `chapterData` key, and its image folder.
- Preserve the five responsive viewport tiers documented in `AGENTS.md`.
- Use `clamp()` and fluid sizing for cards and layout; avoid physical inch-based dimensions.
- `build/` and `node_modules/` are generated directories.
- `docs/screenshots/` holds visual-development references; it is gitignored and never a runtime asset.
