#!/usr/bin/env node
/**
 * PreToolUse(Bash) guard.
 *
 * This repository is normally worked on with a large dirty worktree (lesson data,
 * renamed chapter modules, reorganized image folders). The realistic way to lose
 * work here is not a bad edit, it is a single sweeping git or rm command.
 *
 * Exit 0 = allow, exit 2 = block and show the reason to the agent.
 */

const BLOCKED = [
  [/\bgit\s+reset\s+(--hard|--merge|--keep)\b/, 'git reset --hard discards every uncommitted change in the worktree.'],
  [/\bgit\s+checkout\s+(--\s+)?[.*]/, 'git checkout . reverts uncommitted changes.'],
  [/\bgit\s+checkout\s+--\s/, 'git checkout -- <path> reverts uncommitted changes to that path.'],
  [/\bgit\s+restore\s+(?!--staged\b)/, 'git restore overwrites uncommitted changes.'],
  [/\bgit\s+clean\b.*-[a-z]*[fdx]/, 'git clean deletes untracked files, including new chapter modules and images.'],
  [/\bgit\s+stash\b(?!\s+(list|show))/, 'git stash removes changes from the worktree.'],
  [/\bgit\s+push\b.*(--force\b|--force-with-lease\b|(^|\s)-f(\s|$))/, 'force push rewrites published history.'],
  [/\brm\s+(-[a-zA-Z]*\s+)*-[a-zA-Z]*[rR][a-zA-Z]*f|rm\s+(-[a-zA-Z]*\s+)*-[a-zA-Z]*f[a-zA-Z]*[rR]/, 'recursive force delete.'],
  [/\bgit\s+branch\s+-D\b/, 'force branch delete can orphan unmerged commits.'],
];

// Paths that must never be bulk-deleted even by a non-recursive command.
const PROTECTED = /(^|[\s"'])(src|public|docs|archive|scripts)([\\/]|[\s"']|$)/;

function check(cmd) {
  for (const [pattern, why] of BLOCKED) {
    if (pattern.test(cmd)) {
      // rm -rf is only fatal when it points at repo content or the repo itself.
      if (why === 'recursive force delete.' && !PROTECTED.test(cmd) && !/[\s"'](\.|\/|~)([\s"']|$)/.test(cmd)) {
        continue;
      }
      return why;
    }
  }
  return null;
}

if (require.main === module) {
  let raw = '';
  process.stdin.on('data', (d) => { raw += d; });
  process.stdin.on('end', () => {
    let cmd = '';
    try {
      cmd = (JSON.parse(raw).tool_input || {}).command || '';
    } catch {
      process.exit(0); // Never block on a parse problem.
    }
    const why = check(cmd);
    if (why) {
      process.stderr.write(
        `Blocked by .claude/hooks/guard-worktree.js: ${why}\n` +
        `Command: ${cmd}\n` +
        `This repo carries intentional uncommitted work. Ask the user before running it, ` +
        `or use a narrower command that names explicit paths.\n`
      );
      process.exit(2);
    }
    process.exit(0);
  });
}

module.exports = { check };
