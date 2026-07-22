# Project Memory

This directory is the durable operational memory for the Qaida application. It complements `AGENTS.md`; it does not replace source code, lesson data, or the main README.

## Operating Rules

1. Read `AGENTS.md`, this file, and `project-context.md` before changing the app.
2. Check `decision-log.md` before changing navigation, lesson content, assets, or tooling.
3. Read `project-history.md` before touching chapter numbering, page numbering, assets, or punctuation. Its "Recurring failure modes" section lists mistakes this project has already paid for.
4. Record consequential decisions immediately in `decision-log.md` with their reason and impact.
5. Update `development-status.md` after implementation, verification, or review.
6. Add task research and implementation plans to `research-and-plan.md`, with links to dated design and plan records for substantial work.
7. Store development screenshots in `docs/screenshots/`; that directory is gitignored and its contents are never runtime assets.
8. Keep this memory concise. Link to canonical files instead of duplicating lesson content or source code.

## Living Documents

- [Project context](project-context.md): architecture summary, commands, and stable constraints.
- [Project history](project-history.md): how the codebase evolved, and its recurring failure modes.
- [Decision log](decision-log.md): decisions that prevent repeated mistakes.
- [Development status](development-status.md): current verified state and next safe work.
- [Research and plan](research-and-plan.md): discovery, research, and implementation planning.

## Reference Documents

- [Architecture](../architecture.md): the detailed render pipeline, page addressing, and data model. It lives outside `memory/` because it describes the system rather than the process.
- [Corrections log](../Qaida_Corrections_14062026.md): authoritative source for Arabic content corrections.

## Dated Records

- [Repository setup design](2026-07-22-repository-setup-design.md): approved setup design.
- [Repository setup plan](2026-07-22-repository-setup-plan.md): task-level execution plan.
- [Repository hardening](2026-07-22-repository-hardening.md): follow-up setup gaps, punctuation cleanup, and verification.
