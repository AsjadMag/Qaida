from pathlib import Path
import re
from PIL import Image

root = Path(__file__).resolve().parent
img_dir = root / 'public' / 'images'
source_dir = root / 'src'

if not img_dir.exists():
    raise SystemExit('Images directory not found')

converted = []
for path in sorted(img_dir.iterdir()):
    if not path.is_file():
        continue
    if path.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tif', '.tiff'}:
        continue
    out = path.with_suffix('.webp')
    if out.exists() and out.stat().st_mtime >= path.stat().st_mtime:
        converted.append(out.name)
        continue
    try:
        with Image.open(path) as img:
            if img.mode in {'RGBA', 'LA', 'P'}:
                img.save(out, format='WEBP', lossless=True)
            else:
                img.save(out, format='WEBP', quality=95)
        converted.append(out.name)
    except Exception as exc:
        print(f'FAILED {path.name}: {exc}')

for path in source_dir.rglob('*'):
    if not path.is_file():
        continue
    if path.suffix.lower() not in {'.js', '.jsx', '.css', '.html', '.md', '.json'}:
        continue
    try:
        text = path.read_text(encoding='utf-8')
    except Exception:
        continue
    new_text = re.sub(r'(/images/[^"\'\s)]+?)\.(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF|bmp|BMP|tif|TIF|tiff|TIFF)\b', r'\1.webp', text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')

print(f'Converted {len(converted)} images to WEBP')
for name in converted[:20]:
    print(name)
if len(converted) > 20:
    print('...')
