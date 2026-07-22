// Run: node .claude/hooks/guard-worktree.test.js
const assert = require('assert');
const { check } = require('./guard-worktree');

const blocked = [
  'git reset --hard origin/main',
  'git checkout .',
  'git checkout -- src/data',
  'git restore src/App.jsx',
  'git clean -fd',
  'git clean -fdx',
  'git stash',
  'git push --force origin FinalVersion',
  'rm -rf src',
  'rm -rf docs/memory',
  'rm -rf .',
  'git branch -D FinalVersion',
];

const allowed = [
  'git status --short',
  'git diff --check',
  'git stash list',
  'git restore --staged src/App.jsx',
  'git add -A',
  'npm.cmd run build',
  'rm -rf node_modules/.cache',
  'rm build/static/js/old.js',
  'git push origin FinalVersion',
];

for (const cmd of blocked) assert.ok(check(cmd), `should block: ${cmd}`);
for (const cmd of allowed) assert.strictEqual(check(cmd), null, `should allow: ${cmd}`);

console.log(`ok - ${blocked.length} blocked, ${allowed.length} allowed`);
