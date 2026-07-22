# Repository Setup Design

## Purpose

Establish concise, repository-local guidance and durable project memory for the Noorani Qaida React application. The setup must help future agents retain context, avoid repeat mistakes, and keep temporary visual-development artifacts organized.

## Project Level

Startup-grade. The application is a maintained educational frontend with a documented lesson-data model, many static assets, and a growing history of content and UI corrections. It benefits from durable operating guidance without enterprise-only process overhead.

## Scope

- Preserve all existing uncommitted changes exactly.
- Add `CLAUDE.md` that complements the existing `AGENTS.md`.
- Add focused repository-local planning and review skills for Claude and generic agents.
- Add read-only researcher and verification-agent definitions.
- Create `docs/memory/` as the single location for project context, decisions, status, research, and implementation records.
- Move only clearly identifiable root-level development screenshots to `docs/screenshots/`.
- Replace non-functional em dashes in repository prose and source comments with clearer punctuation.
- Retain the em dash used by Chapter 25 (legacy ID 41) lesson data because the renderer treats it as a meaningful before/after separator.

## Non-Goals

- Do not alter lesson content, asset references, image organization, or other pre-existing uncommitted work.
- Do not introduce a deployment process, CI workflow, or formatter hook that the repository does not already use.
- Do not delete screenshots or other development artifacts; organize them under `docs/screenshots/`.
- Do not rewrite em dashes whose value is semantic or programmatic.

## Architecture

```text
Repository guidance
  AGENTS.md       Existing Codex instructions and project conventions
  CLAUDE.md       Concise Claude-oriented counterpart
  .claude/        Claude-local skills and agent definitions
  .agents/        Agent-neutral mirrors of reusable skills

Project memory
  docs/memory/README.md                Operating rules for durable memory
  docs/memory/project-context.md       Current architecture and constraints
  docs/memory/decision-log.md          Decisions, rationale, and consequences
  docs/memory/development-status.md    Completed work, verification, and next steps
  docs/memory/research-and-plan.md     Research and implementation plans
```

## Error-Prevention Rules

1. Read `AGENTS.md` and `docs/memory/README.md` before changing the application.
2. Check `docs/memory/decision-log.md` before changing navigation, lesson data, assets, or project tooling.
3. Record meaningful decisions and verification evidence in the memory documents during the same change.
4. Store development screenshots only in `docs/screenshots/`; do not add them to source or public asset directories unless they are application assets.
5. Preserve user-owned dirty-worktree changes unless a task explicitly authorizes altering them.

## Verification

- Confirm the created guidance and memory documents have cross-links and no duplicated source of truth.
- Confirm moved screenshots are present under `docs/screenshots/` and no existing content was deleted.
- Scan supported text files for non-semantic em dashes.
- Run `npm.cmd run build`.
- Review the final diff for accidental edits outside the approved scope.
