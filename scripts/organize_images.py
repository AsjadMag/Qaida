"""
One-time image reorganisation script.
Moves all public/images/*.webp into subfolders:
  brand/       - logo assets
  shared/      - images used in multiple chapters or global components
  chapters/chapter-NN/  - images used only in one chapter

Then rewrites every /images/FILENAME reference in src/ to the new path.
Run from the repo root: python scripts/organize_images.py
"""

import os
import shutil
import re

BASE_IMG = os.path.join('public', 'images')
SRC_ROOT = 'src'

# ── Complete move map: old filename → new relative path inside public/images/ ──
MOVES = {
    # Brand
    'TajweedClassLogo_trans.webp': 'brand/TajweedClassLogo_trans.webp',

    # Shared - used across multiple chapters or in global components
    'Curved Arrow.webp': 'shared/Curved Arrow.webp',   # WordCard.jsx default idgham arrow
    'Zabar.webp':        'shared/Zabar.webp',           # ch-03 data + LessonPage.jsx
    'Bay.webp':          'shared/Bay.webp',             # ch-06, ch-08, ch-10 teacher instructions

    # Chapter 02 - Laam image-cards (with hover variants)
    'laam_1.webp':       'chapters/chapter-02/laam_1.webp',
    'laam_1_hover.webp': 'chapters/chapter-02/laam_1_hover.webp',
    'laam_2.webp':       'chapters/chapter-02/laam_2.webp',
    'laam_2_hover.webp': 'chapters/chapter-02/laam_2_hover.webp',

    # Chapter 03 - Diacritics: Paish, Zair (Zabar is in shared/)
    'paish.webp':         'chapters/chapter-03/paish.webp',
    'Chapter3 Zair.webp': 'chapters/chapter-03/Chapter3 Zair.webp',

    # Chapter 06 - Madd letters & teacher illustrations
    'AlifMaddah.webp':  'chapters/chapter-06/AlifMaddah.webp',
    'Baa.webp':         'chapters/chapter-06/Baa.webp',
    'Baa2.webp':        'chapters/chapter-06/Baa2.webp',
    'BaZair.webp':      'chapters/chapter-07/BaZair.webp',
    'ChapterNo.6.webp': 'chapters/chapter-06/ChapterNo.6.webp',

    # Chapter 07 - Yaa Madd
    'BiYa.webp':      'chapters/chapter-07/BiYa.webp',
    'YaaImaddah.webp': 'chapters/chapter-07/YaaImaddah.webp',

    # Chapter 08 - Wao Madd
    'ChapterNo8.webp':  'chapters/chapter-08/ChapterNo8.webp',
    'waomaddah1.webp':  'chapters/chapter-08/waomaddah1.webp',
    'waomaddah2.webp':  'chapters/chapter-08/waomaddah2.webp',
    'waomaddah3.webp':  'chapters/chapter-08/waomaddah3.webp',

    # Chapter 09 - Erected Zabar (superscript alif)
    'erected Zabar.webp':  'chapters/chapter-09/erected Zabar.webp',
    'erected Zabar1.webp': 'chapters/chapter-09/erected Zabar1.webp',
    'erected Zabar2.webp': 'chapters/chapter-09/erected Zabar2.webp',

    # Chapter 10 - Inverted Pesh (Dammah Maqloobah)
    'InvertedPaish.webp':  'chapters/chapter-10/InvertedPaish.webp',
    'InvertedPaish2.webp': 'chapters/chapter-10/InvertedPaish2.webp',
    'InvertedPaish3.webp': 'chapters/chapter-10/InvertedPaish3.webp',

    # Chapter 11 - Wao Leen
    'spin.webp':    'chapters/chapter-11/spin.webp',
    'waoleen.webp': 'chapters/chapter-11/waoleen.webp',

    # Chapter 12 - Yaa Leen
    'Yaa-i-Leen.webp': 'chapters/chapter-12/Yaa-i-Leen.webp',

    # Chapter 13 - Jazm / Sukoon
    'Jazm or Sukoon.webp':  'chapters/chapter-13/Jazm or Sukoon.webp',
    'Jazm or Sukoon2.webp': 'chapters/chapter-13/Jazm or Sukoon2.webp',
    'Jazm or Sukoon3.webp': 'chapters/chapter-13/Jazm or Sukoon3.webp',
    'Jazm or Sukoon4.webp': 'chapters/chapter-13/Jazm or Sukoon4.webp',

    # Chapter 14 - Shaddah (Tashdeed)
    'shadd.webp':  'chapters/chapter-14/shadd.webp',
    'shadd2.webp': 'chapters/chapter-14/shadd2.webp',
    'shadd3.webp': 'chapters/chapter-14/shadd3.webp',

    # Chapter 16 - Rules (Laam Shamsi/Qamari)
    'AaRaLam.webp':     'chapters/chapter-16/AaRaLam.webp',
    'chapter1_v2.webp':   'chapters/chapter-16/chapter1_v2.webp',
    'chapter1_v2-1.webp': 'chapters/chapter-16/chapter1_v2-1.webp',
    'chapter1_v2-2.webp': 'chapters/chapter-16/chapter1_v2-2.webp',
    'chapter1_v2-3.webp': 'chapters/chapter-16/chapter1_v2-3.webp',

    # Chapter 17 - Rule illustrations
    'chapter_2_V2(2).webp': 'chapters/chapter-17/chapter_2_V2(2).webp',
    'chapter_2_V2(3).webp': 'chapters/chapter-17/chapter_2_V2(3).webp',

    # Chapter 18 - Tanween
    'Chapter_3_V2.webp':    'chapters/chapter-18/Chapter_3_V2.webp',
    'Chapter_3_v2(1).webp': 'chapters/chapter-18/Chapter_3_v2(1).webp',
    'Tanween.webp':         'chapters/chapter-18/Tanween.webp',

    # Chapter 19 - Rules
    'Chapter_4_V2.webp':    'chapters/chapter-19/Chapter_4_V2.webp',
    'chapter_4_V2(1).webp': 'chapters/chapter-19/chapter_4_V2(1).webp',

    # Chapter 20 - Rules
    'Chapter_5_V2.webp':    'chapters/chapter-20/Chapter_5_V2.webp',
    'chapter_5_v2(1).webp': 'chapters/chapter-20/chapter_5_v2(1).webp',
    'chapter_5_v2(2).webp': 'chapters/chapter-20/chapter_5_v2(2).webp',
    'chapter_5_v2(3).webp': 'chapters/chapter-20/chapter_5_v2(3).webp',

    # Chapter 21 - Idgham with Ghunnah
    'NotArrow.webp':         'chapters/chapter-21/NotArrow.webp',
    'Version3.webp':         'chapters/chapter-21/Version3.webp',
    'chapter_6_v2.webp':     'chapters/chapter-21/chapter_6_v2.webp',
    'chapter_6_v2(1).webp':  'chapters/chapter-21/chapter_6_v2(1).webp',
    'chapter_6_v2(2).webp':  'chapters/chapter-21/chapter_6_v2(2).webp',
    'chapter_6_v2(3).webp':  'chapters/chapter-21/chapter_6_v2(3).webp',
    'chapter_6_v2(4).webp':  'chapters/chapter-21/chapter_6_v2(4).webp',
    'chapter_6_v2(5).webp':  'chapters/chapter-21/chapter_6_v2(5).webp',
    'chapter_6_v2(6).webp':  'chapters/chapter-21/chapter_6_v2(6).webp',
    'chapter_6_v2(7).webp':  'chapters/chapter-21/chapter_6_v2(7).webp',
    'chapter_6v2(8).webp':   'chapters/chapter-21/chapter_6v2(8).webp',
    'new.webp':              'chapters/chapter-21/new.webp',

    # Chapter 22 - Idgham without Ghunnah
    'chapter_7_v2.webp':    'chapters/chapter-22/chapter_7_v2.webp',
    'chapter_7_v2(2).webp': 'chapters/chapter-22/chapter_7_v2(2).webp',
    'chapter_7_v2(3).webp': 'chapters/chapter-22/chapter_7_v2(3).webp',
    'chapter_7_v2(4).webp': 'chapters/chapter-22/chapter_7_v2(4).webp',
    'chapter_7_v2(5).webp': 'chapters/chapter-22/chapter_7_v2(5).webp',
    'chapter_7_v2(6).webp': 'chapters/chapter-22/chapter_7_v2(6).webp',
    'chapter_7_v2(7).webp': 'chapters/chapter-22/chapter_7_v2(7).webp',
    'chapter_7_v2(8).webp': 'chapters/chapter-22/chapter_7_v2(8).webp',
    'chapter_7_v2(9).webp': 'chapters/chapter-22/chapter_7_v2(9).webp',

    # Chapter 23 - Iqlab
    'chapter_8_v2.webp': 'chapters/chapter-23/chapter_8_v2.webp',

    # Chapter 24 - Ikhfa
    'chapter_9_vs2.webp':    'chapters/chapter-24/chapter_9_vs2.webp',
    'chapter_9_vs2(1).webp': 'chapters/chapter-24/chapter_9_vs2(1).webp',
    'chapter_9_vs2(2).webp': 'chapters/chapter-24/chapter_9_vs2(2).webp',
    'chapter_9_vs2(3).webp': 'chapters/chapter-24/chapter_9_vs2(3).webp',
    'chapter_9_vs2(4).webp': 'chapters/chapter-24/chapter_9_vs2(4).webp',

    # Chapter 26 - Izhar
    'chapter_11_v2.webp':    'chapters/chapter-26/chapter_11_v2.webp',
    'chapter_11_v2(2).webp': 'chapters/chapter-26/chapter_11_v2(2).webp',
    'chapter_11_v2(3).webp': 'chapters/chapter-26/chapter_11_v2(3).webp',
    'chapter_11_v2(4).webp': 'chapters/chapter-26/chapter_11_v2(4).webp',
    'chapter_11_v2(5).webp': 'chapters/chapter-26/chapter_11_v2(5).webp',

    # Chapter 27 - Idgham Meem Saakin
    'chapter_12_v2.webp':    'chapters/chapter-27/chapter_12_v2.webp',
    'chapter_12_v2(2).webp': 'chapters/chapter-27/chapter_12_v2(2).webp',
    'chapter_12_v2(3).webp': 'chapters/chapter-27/chapter_12_v2(3).webp',
    'chapter_12_v2(4).webp': 'chapters/chapter-27/chapter_12_v2(4).webp',
    'chapter_12_v2(5).webp': 'chapters/chapter-27/chapter_12_v2(5).webp',
    'chapter_12_v2(7).webp': 'chapters/chapter-27/chapter_12_v2(7).webp',

    # Chapter 29 - Ikhfa Meem Saakin
    'chapter_13_v2.webp':    'chapters/chapter-29/chapter_13_v2.webp',
    'chapter_13_v2(2).webp': 'chapters/chapter-29/chapter_13_v2(2).webp',
    'chapter_13_v2(3).webp': 'chapters/chapter-29/chapter_13_v2(3).webp',
    'chapter_13_v2(4).webp': 'chapters/chapter-29/chapter_13_v2(4).webp',
    'chapter_13_v2(5).webp': 'chapters/chapter-29/chapter_13_v2(5).webp',
    'chapter_13_v2(6).webp': 'chapters/chapter-29/chapter_13_v2(6).webp',
    'chapter_13_v2(7).webp': 'chapters/chapter-29/chapter_13_v2(7).webp',
}


def main():
    # ── Step 1: create destination directories ────────────────────────────────
    dirs_needed = set()
    for new_rel in MOVES.values():
        dirs_needed.add(os.path.dirname(os.path.join(BASE_IMG, new_rel)))
    for d in sorted(dirs_needed):
        os.makedirs(d, exist_ok=True)
        print(f'  mkdir {d}')

    # ── Step 2: move files ───────────────────────────────────────────────────
    moved = 0
    missing = []
    for old_name, new_rel in MOVES.items():
        src_path = os.path.join(BASE_IMG, old_name)
        dst_path = os.path.join(BASE_IMG, new_rel)
        if os.path.exists(src_path):
            shutil.move(src_path, dst_path)
            moved += 1
        else:
            missing.append(old_name)
    print(f'\nMoved {moved} files.')
    if missing:
        print(f'WARNING - not found on disk (skipped): {missing}')

    # ── Step 3: build replacement pairs for source code ──────────────────────
    # Sort longest old-path first to avoid partial-match shadowing.
    replacements = []
    for old_name, new_rel in MOVES.items():
        old_url = f'/images/{old_name}'
        new_url = f'/images/{new_rel}'
        replacements.append((old_url, new_url))

        # Also handle the URL-encoded form (spaces → %20), e.g. Curved%20Arrow.webp
        old_enc = old_url.replace(' ', '%20')
        new_enc = new_url.replace(' ', '%20')
        if old_enc != old_url:
            replacements.append((old_enc, new_enc))

    # Longest match first
    replacements.sort(key=lambda p: -len(p[0]))

    # ── Step 4: rewrite source files ─────────────────────────────────────────
    src_files_updated = 0
    for root, dirs, files in os.walk(SRC_ROOT):
        for fname in files:
            if not fname.endswith(('.js', '.jsx', '.css')):
                continue
            fpath = os.path.join(root, fname)
            original = open(fpath, encoding='utf-8', errors='replace').read()
            updated = original
            for old, new in replacements:
                updated = updated.replace(old, new)
            if updated != original:
                open(fpath, 'w', encoding='utf-8').write(updated)
                src_files_updated += 1
                print(f'  Updated: {fpath}')

    print(f'\nSource files updated: {src_files_updated}')
    print('Done. Run `npm run build` to verify.')


if __name__ == '__main__':
    main()
