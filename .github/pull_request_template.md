## Summary

<!-- What changed and why. One or two sentences. -->

## Type

- [ ] Lesson content (chapter data, Arabic text, corrections)
- [ ] UI / layout / responsiveness
- [ ] Assets (images, fonts)
- [ ] Tooling, docs, or project memory

## Lesson-data safety

<!-- Delete this section if no file under src/data/ changed. -->

- [ ] Arabic text changes come from an explicit written source, not from a screenshot inference
- [ ] Chapter number is consistent across the module name, the `chapterData` key, and `public/images/chapters/chapter-NN/`
- [ ] Em dash separators in `chapter-25.js` are unchanged (`WordCard.jsx` splits on them)
- [ ] Every new `/images/...` path resolves to a file in `public/images/`

## Responsiveness

<!-- Required for any UI change. See the five tiers in AGENTS.md. -->

- [ ] Checked at <= 480px, 768px, 1024px, 1440px, and >= 1441px
- [ ] No new fixed physical units (`in`, `pt`); uses `clamp()` / `vw` / `min()`

## Verification

```
npm.cmd run build     # paste the result
```

- [ ] Build passed
- [ ] Screenshots below (UI changes only, stored in `docs/screenshots/`, not committed)
- [ ] `docs/memory/development-status.md` updated if this changes project direction or verified behavior
