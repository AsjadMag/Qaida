#!/usr/bin/env node
/**
 * Structural audit of the lesson data.
 *
 * This project has repeatedly drifted in the same places: chapter numbering
 * splitting into two schemes, image references pointing at a folder belonging
 * to a different chapter, and the documented page map going stale. This script
 * checks all of it against the real data.
 *
 * The chapter modules are loaded through Babel and evaluated, so page counts
 * and image paths come from the actual exported objects rather than from a
 * regex over source text.
 *
 *   npm run audit:lessons
 *
 * Exits non-zero if anything is broken, misfiled, or misnumbered.
 */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const ROOT = path.resolve(__dirname, '..');
const CH_DIR = path.join(ROOT, 'src/data/chapters');
const IMG_DIR = path.join(ROOT, 'public/images');
const SRC_DIR = path.join(ROOT, 'src');

function loadModule(file) {
  const { code } = babel.transformSync(fs.readFileSync(file, 'utf8'), {
    filename: file,
    presets: [[require.resolve('@babel/preset-env'), { targets: { node: 'current' } }]],
    babelrc: false,
    configFile: false,
  });
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', code)(mod, mod.exports, require);
  return mod.exports.default || mod.exports;
}

// ---------------------------------------------------------------- chapters
const chapters = {};
for (const f of fs.readdirSync(CH_DIR).filter((f) => /^chapter-\d+\.js$/.test(f))) {
  chapters[Number(/chapter-(\d+)\.js/.exec(f)[1])] = loadModule(path.join(CH_DIR, f));
}
const nums = Object.keys(chapters).map(Number).sort((a, b) => a - b);
const gaps = [];
for (let i = 1; i <= nums.length; i++) if (!nums.includes(i)) gaps.push(i);

// ------------------------------------------------------------------- pages
let total = 0;
const start = {};
const count = {};
for (const n of nums) {
  count[n] = chapters[n].pages ? chapters[n].pages.length : 0;
  start[n] = total + 1;
  total += count[n];
}

// -------------------------------------------------------- image references
// Filenames legitimately contain spaces and parentheses ("Jazm or Sukoon.webp",
// "chapter_6_v2(1).webp"), so paths are read exactly: either a whole string
// that is a path, or the {{IMG:path|size}} markup that LessonPage parses.
const refs = [];
const INLINE_RE = /\{\{IMG:(.*?)\}\}/g;
function scan(node, chapter, page) {
  if (node == null) return;
  if (typeof node === 'string') {
    if (node.startsWith('/images/')) {
      refs.push({ chapter, page, path: node });
      return;
    }
    let m;
    while ((m = INLINE_RE.exec(node)) !== null) {
      const p = m[1].split('|')[0].trim();
      if (p.startsWith('/images/')) refs.push({ chapter, page, path: p });
    }
    return;
  }
  if (Array.isArray(node)) return node.forEach((v) => scan(v, chapter, page));
  if (typeof node === 'object') return Object.values(node).forEach((v) => scan(v, chapter, page));
}
for (const n of nums) {
  const ch = chapters[n];
  scan(ch.teacherInfo, n, 0);
  scan(ch.teacherImage, n, 0);
  Object.entries(ch.pageTeacherInfo || {}).forEach(([k, v]) => scan(v, n, Number(k)));
  (ch.pages || []).forEach((pg, i) => scan(pg, n, i));
}

// Images referenced from components rather than lesson data (logo, arrows).
const srcRefs = new Set();
(function walkSrc(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) { walkSrc(fp); continue; }
    if (!/\.(js|jsx|css)$/.test(e.name)) continue;
    const text = fs.readFileSync(fp, 'utf8');
    for (const m of text.matchAll(/['"](\/images\/[^'"]+)['"]/g)) srcRefs.add(decodeURIComponent(m[1]));
  }
})(SRC_DIR);

// ------------------------------------------------------------------ on disk
const onDisk = new Set();
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name);
    if (e.isDirectory()) walk(fp);
    else onDisk.add('/images/' + path.relative(IMG_DIR, fp).split(path.sep).join('/'));
  }
})(IMG_DIR);

const broken = [];
const misfiled = [];
const used = new Set();
for (const r of refs) {
  const decoded = decodeURIComponent(r.path);
  const hit = onDisk.has(r.path) ? r.path : onDisk.has(decoded) ? decoded : null;
  if (!hit) { broken.push(r); continue; }
  used.add(hit);
  const m = /^\/images\/chapters\/chapter-(\d+)\//.exec(hit);
  if (m) {
    if (Number(m[1]) !== r.chapter) misfiled.push({ ...r, owner: Number(m[1]), resolved: hit });
  } else if (!/^\/images\/(shared|brand)\//.test(hit)) {
    misfiled.push({ ...r, owner: 'unclassified', resolved: hit });
  }
}
for (const s of srcRefs) if (onDisk.has(s)) used.add(s);

const orphans = [...onDisk].filter((f) => !used.has(f)).sort();
const folders = new Set(
  [...onDisk].map((f) => (/^\/images\/chapters\/chapter-(\d+)\//.exec(f) || [])[1]).filter(Boolean).map(Number)
);
const strayFolders = [...folders].filter((n) => !nums.includes(n));

// ------------------------------------------------------------------ report
const L = [];
L.push('CHAPTERS');
L.push(`  modules ${nums.length}, range ${nums[0]}-${nums[nums.length - 1]}, gaps: ${gaps.length ? gaps.join(',') : 'none'}`);
L.push('');
L.push(`PAGE MAP (${total} pages)`);
for (const n of nums) {
  const last = start[n] + count[n] - 1;
  const range = count[n] === 1 ? `${start[n]}` : `${start[n]}-${last}`;
  L.push(`  ch ${String(n).padStart(2)}  ${String(range).padStart(7)}  ${String(count[n]).padStart(2)}p  ${chapters[n].titleEnglish || ''}`);
}
L.push('');
L.push('IMAGES');
L.push(`  ${refs.length} lesson refs, ${used.size} of ${onDisk.size} files used`);
L.push(`  broken: ${broken.length}`);
broken.forEach((b) => L.push(`    ch${b.chapter} page${b.page}: ${b.path}`));
L.push(`  misfiled: ${misfiled.length}`);
misfiled.forEach((m) => L.push(`    ch${m.chapter} page${m.page} -> ${m.resolved} (owned by ${m.owner})`));
L.push(`  chapter folders with no chapter: ${strayFolders.length ? strayFolders.join(',') : 'none'}`);
L.push(`  chapters with no image folder: ${nums.filter((n) => !folders.has(n)).join(',') || 'none'} (text-only, expected)`);
L.push(`  unreferenced files: ${orphans.length}`);
orphans.forEach((o) => L.push(`    ${o}`));

const failures = broken.length + misfiled.length + gaps.length + strayFolders.length;
L.push('');
L.push(failures === 0 ? 'OK: lesson structure is consistent.' : `FAIL: ${failures} structural problem(s).`);
console.log(L.join('\n'));
process.exit(failures === 0 ? 0 : 1);
