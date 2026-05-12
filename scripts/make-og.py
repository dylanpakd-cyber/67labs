#!/usr/bin/env python3
"""Generate Open Graph image + apple-touch-icon for 67labs.co."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

INK = (14, 14, 14)
INK_2 = (38, 36, 32)
CREAM = (244, 240, 230)
LIME = (212, 255, 63)
ORANGE = (255, 90, 31)
MUTE = (138, 132, 119)

ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
GEORGIA_ITALIC = "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
MENLO = "/System/Library/Fonts/Menlo.ttc"

OUT = Path(__file__).resolve().parent.parent / "public"


def make_og():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), INK)
    d = ImageDraw.Draw(img)

    # subtle paper-noise feel: faint diagonal lines
    for y in range(0, H, 4):
        d.line([(0, y), (W, y)], fill=INK_2, width=1)

    # orange slash, big and angled
    d.polygon([(660, 80), (700, 80), (520, 550), (480, 550)], fill=ORANGE)

    # eyebrow
    f_mono = ImageFont.truetype(MENLO, 22)
    d.text((80, 80), "67/LABS  ·  EST. 2026  ·  SAN FRANCISCO",
           font=f_mono, fill=MUTE)

    # the 67 mark
    f_67 = ImageFont.truetype(ARIAL_BOLD, 280)
    d.text((60, 130), "67", font=f_67, fill=LIME)

    # Labs.
    f_labs = ImageFont.truetype(ARIAL_BOLD, 200)
    d.text((420, 200), "Labs.", font=f_labs, fill=CREAM)

    # tagline
    f_tag = ImageFont.truetype(GEORGIA_ITALIC, 56)
    d.text((80, 460), "monetizing brainrot.", font=f_tag, fill=CREAM)

    # bottom-right meta
    f_meta = ImageFont.truetype(MENLO, 20)
    d.text((W - 80, H - 50), "67labs.co",
           font=f_meta, fill=LIME, anchor="rb")

    out = OUT / "og.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


def make_apple_icon():
    S = 180
    img = Image.new("RGB", (S, S), INK)
    d = ImageDraw.Draw(img)
    # orange slash
    d.polygon([(112, 18), (130, 18), (75, 162), (57, 162)], fill=ORANGE)
    # "67"
    f = ImageFont.truetype(ARIAL_BOLD, 95)
    d.text((20, 60), "67", font=f, fill=LIME)
    out = OUT / "apple-touch-icon.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    make_og()
    make_apple_icon()
