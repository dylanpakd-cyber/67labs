#!/usr/bin/env python3
"""One-shot: pull only the latin woff2 files from Google Fonts and emit
a local @font-face block that styles.css can paste in."""
import re
import urllib.request
from pathlib import Path

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
SRC_URL = (
    "https://fonts.googleapis.com/css2?"
    "family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800"
    "&family=Instrument+Serif:ital@0;1"
    "&family=JetBrains+Mono:wght@400;500;700"
    "&display=swap"
)
HERE = Path(__file__).resolve().parent.parent
OUT_DIR = HERE / "public" / "fonts"
CSS_OUT = HERE / "scripts" / "fonts-block.css"


def fetch(url: str, headers=None) -> bytes:
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req) as r:
        return r.read()


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    css = fetch(SRC_URL, {"User-Agent": UA}).decode()
    blocks = re.split(r"/\* ([^*]+) \*/", css)
    # blocks alternates: ['', 'subset1', 'rule1', 'subset2', 'rule2', ...]
    keep = []
    for i in range(1, len(blocks), 2):
        subset = blocks[i].strip()
        rule = blocks[i + 1].strip()
        if subset != "latin":
            continue
        m = re.search(r"font-family:\s*'([^']+)'", rule)
        family = m.group(1)
        weight = re.search(r"font-weight:\s*(\d+)", rule).group(1)
        style = re.search(r"font-style:\s*(\w+)", rule).group(1)
        url = re.search(r"url\((https://[^)]+\.woff2)\)", rule).group(1)
        slug = family.lower().replace(" ", "-")
        local = f"{slug}-{weight}-{style}.woff2"
        out = OUT_DIR / local
        if not out.exists():
            data = fetch(url, {"User-Agent": UA})
            out.write_bytes(data)
            print(f"  ↓ {local} ({len(data)//1024}KB)")
        else:
            print(f"  = {local} (already present)")
        rewritten = rule.replace(url, f"/fonts/{local}")
        keep.append(f"/* {family} {weight} {style} */\n{rewritten}\n")

    CSS_OUT.write_text("\n".join(keep))
    print(f"\nWrote {len(keep)} @font-face rules → {CSS_OUT}")


if __name__ == "__main__":
    main()
