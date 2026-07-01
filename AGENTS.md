# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains all React source code.
- `src/components/` holds reusable UI pieces.
- `src/pages/` holds page-level screens like lessons and title view.
- `src/assets/` stores images, fonts, or other static assets used in the app.
- `public/` contains static files served as-is (HTML, icons).
- `build/` is generated output from production builds.
- Tests live alongside source files, e.g. `src/App.test.js`.

## Build, Test, and Development Commands
- `npm start` runs the dev server at `http://localhost:3000` with hot reload.
- `npm test` runs Jest in watch mode using Create React App.
- `npm run build` creates a production build in `build/`.
- `npm run eject` copies CRA config into the repo (one-way, avoid unless required).

## Coding Style & Naming Conventions
- Indentation is 2 spaces in JS/JSX.
- Components use `PascalCase` (e.g., `LessonPage`, `WordCard`).
- Functions and variables use `camelCase`.
- CSS class names are `kebab-case` when used.
- Linting follows the CRA `react-app` and `react-app/jest` ESLint presets.

## Testing Guidelines
- Test framework is Jest with React Testing Library (`@testing-library/*`).
- Name tests `*.test.js` and colocate with the component where possible.
- Run tests with `npm test`. Prefer adding coverage for new UI logic and interactions.

## Commit & Pull Request Guidelines
- Commit messages in history are short and descriptive; one uses `feat:`. There is no strict convention, but prefer:
  - A short, imperative summary (e.g., `feat: add lesson navigation`).
  - Keep the subject line under ~72 characters.
- Pull requests should include:
  - A clear summary of changes and rationale.
  - Screenshots or short clips for UI changes.
  - Linked issue/ticket if applicable.
  - Notes about new dependencies or build steps.

## Configuration Tips
- This is a Create React App project; use `.env` for local-only config if needed.
- Avoid committing secrets. Keep API keys out of `src/`.
