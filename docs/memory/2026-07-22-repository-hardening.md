# Repository Hardening

Follow-up to `2026-07-22-repository-setup-plan.md`. That plan established guidance and
memory. This record covers the gaps it left, plus a second punctuation pass.

## Research

### What already existed

`CLAUDE.md`, `AGENTS.md`, `.claude/skills/{plan,review}`, `.claude/agents/{researcher,qa}`,
`.agents/skills/` mirrors, and six documents under `docs/memory/`. All were sound and
were kept.

### Gaps against the repo-setup checklist

| Item | State | Action |
|------|-------|--------|
| Hooks | Absent | Added, scoped to this repo's actual risk |
| Architecture reference | Absent | Added `docs/architecture.md` |
| PR template | Absent | Added `.github/pull_request_template.md` |
| ADR directory | Absent | **Skipped**, see below |
| Deploy skill | Absent | **Skipped**, no deploy process exists |
| Project history | Absent | Added `docs/memory/project-history.md` |

### Punctuation findings

The first cleanup pass targeted U+2014 only. A scan across all dash-like codepoints
found two more classes:

- **65 non-breaking hyphens (U+2011)** across `docs/Qaida_Corrections_14062026.md`,
  `chapter-11.js`, `chapter-12.js`, and `LessonPage.jsx`. These render identically to a
  hyphen but break search and copy. Almost certainly Word paste artifacts.
- **En dashes (U+2013)** in two roles: numeric ranges (`769–1024px`, `Chapters 1–15`)
  and sentence connectors in comments (`// Page 1 (Total Page 11) – Exercise of Zair`).

## Decisions

**Skip the ADR directory.** `decision-log.md` already records decisions with reason and
impact. A second decision store would split the source of truth, which is the exact
failure this memory system exists to prevent.

**Skip a deploy skill.** No CI config, no deploy target, no hosting configuration exists
in the repository. Inventing a procedure would document a process nobody follows.

**Scope the hook to worktree destruction, not formatting.** The project has no
prettier or eslint-fix configuration, so a format hook would have nothing to run. The
real risk is concrete: this repo is routinely worked on with 170+ uncommitted changes,
so one `git reset --hard`, `git clean -fd`, or `git stash` erases days of work.
`.claude/hooks/guard-worktree.js` blocks that class of command and carries a self-test.

**Classify dashes by role, not by codepoint.**

| Class | Treatment |
|-------|-----------|
| U+2011 non-breaking hyphen | Replace with `-` everywhere. Always an artifact. |
| U+2013 as sentence connector | Replace with `:` or `-`. |
| U+2013 in a numeric range | Keep. Correct typography. |
| U+2014 in `chapter-25.js` / `WordCard.jsx` | Keep. Functional separator. |

**Gitignore `docs/screenshots/`.** Screenshots are development references with no
runtime role. Ignoring the directory keeps them organized locally without shipping them.
Files already tracked there remain tracked; gitignore does not untrack.

## Implementation

1. Replaced all 65 non-breaking hyphens across 4 files.
2. Replaced 5 en-dash sentence connectors in `chapter-05.js`, `chapter-13.js`, and
   `LessonPage.jsx`. Left 43 range en dashes intact.
3. Added `.claude/hooks/guard-worktree.js` and `.claude/hooks/guard-worktree.test.js`,
   wired through `.claude/settings.json`.
4. Added `docs/architecture.md` covering page addressing, chapter identity, the card
   model, separator semantics, the teacher panel, asset resolution, and card sizing.
5. Added `docs/memory/project-history.md` with the commit timeline and a recurring
   failure-modes section.
6. Added `.github/pull_request_template.md` with lesson-data and responsiveness gates.
7. Rewrote `CLAUDE.md` with a reference-docs section and an IMPORTANT block naming the
   four traps that have actually caused rework.
8. Added `/docs/screenshots/` to `.gitignore`.

## Incident during implementation

The bulk hyphen replacement was written with Python text mode, which normalized CRLF to
LF in the four files it touched. The repository uses CRLF. Detected immediately from
`git diff --stat` showing far more changed lines than dashes replaced; restored by
rewriting the files in binary mode. Subsequent edits read and wrote bytes and preserved
the original ending per file.

**Rule for future bulk edits:** read and write in binary mode, or assert the line-ending
count is unchanged afterwards. Never let a text-mode rewrite decide line endings.

## Verification

See `development-status.md` for the recorded evidence.
