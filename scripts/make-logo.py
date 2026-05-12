#!/usr/bin/env python3
"""Generate 67 Labs logo variants for use on third-party platforms
(ConvertKit profile, social avatars, email headers, etc.)."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

INK = (14, 14, 14)
CREAM = (244, 240, 230)
LIME = (212, 255, 63)
ORANGE = (255, 90, 31)

ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

OUT = Path(__file__).resolve().parent.parent / "public" / "brand"


def draw_mark(d, ox, oy, scale, bg_is_dark):
    """Draw the 67/Labs. mark anchored at (ox, oy). scale=1.0 is ~280px wide."""
    size_67 = int(280 * scale)
    size_labs = int(200 * scale)
    seven_color = LIME if bg_is_dark else INK
    labs_color = CREAM if bg_is_dark else INK

    f_67 = ImageFont.truetype(ARIAL_BOLD, size_67)
    f_labs = ImageFont.truetype(ARIAL_BOLD, size_labs)

    d.text((ox, oy), "67", font=f_67, fill=seven_color)

    # orange diagonal slash between "67" and "Labs."
    slash_w = max(8, int(18 * scale))
    slash_x = ox + int(265 * scale)
    slash_top = (slash_x + int(60 * scale), oy + int(20 * scale))
    slash_bot = (slash_x - int(20 * scale), oy + int(290 * scale))
    d.polygon([
        (slash_top[0], slash_top[1]),
        (slash_top[0] + slash_w, slash_top[1]),
        (slash_bot[0] + slash_w, slash_bot[1]),
        (slash_bot[0], slash_bot[1]),
    ], fill=ORANGE)

    d.text((ox + int(355 * scale), oy + int(70 * scale)), "Labs.",
           font=f_labs, fill=labs_color)


def make_square_dark():
    """Square logo on dark background — for avatars / profile photos."""
    S = 1024
    img = Image.new("RGBA", (S, S), INK + (255,))
    d = ImageDraw.Draw(img)
    # rounded corner mask
    mask = Image.new("L", (S, S), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, S, S), radius=160, fill=255)
    # center the mark
    scale = 1.4
    mark_w = int(700 * scale)
    mark_h = int(310 * scale)
    ox = (S - mark_w) // 2
    oy = (S - mark_h) // 2
    draw_mark(d, ox, oy, scale, bg_is_dark=True)
    img.putalpha(mask)
    out = OUT / "67labs-logo-square-dark.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


def make_square_light():
    """Square logo on cream background — for light themes."""
    S = 1024
    img = Image.new("RGBA", (S, S), CREAM + (255,))
    d = ImageDraw.Draw(img)
    mask = Image.new("L", (S, S), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, S, S), radius=160, fill=255)
    scale = 1.4
    mark_w = int(700 * scale)
    mark_h = int(310 * scale)
    ox = (S - mark_w) // 2
    oy = (S - mark_h) // 2
    draw_mark(d, ox, oy, scale, bg_is_dark=False)
    img.putalpha(mask)
    out = OUT / "67labs-logo-square-light.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


def make_horizontal_dark():
    """Wide wordmark on dark — for email headers, banners."""
    W, H = 1600, 480
    img = Image.new("RGBA", (W, H), INK + (255,))
    d = ImageDraw.Draw(img)
    scale = 1.4
    mark_w = int(700 * scale)
    mark_h = int(310 * scale)
    ox = (W - mark_w) // 2
    oy = (H - mark_h) // 2
    draw_mark(d, ox, oy, scale, bg_is_dark=True)
    out = OUT / "67labs-wordmark-dark.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


def make_horizontal_transparent():
    """Wide wordmark on transparent bg — drop on any color."""
    W, H = 1600, 480
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    scale = 1.4
    mark_w = int(700 * scale)
    mark_h = int(310 * scale)
    ox = (W - mark_w) // 2
    oy = (H - mark_h) // 2
    # use dark ink so it reads on light surfaces (most common case)
    draw_mark(d, ox, oy, scale, bg_is_dark=False)
    out = OUT / "67labs-wordmark-transparent.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size // 1024}KB)")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    make_square_dark()
    make_square_light()
    make_horizontal_dark()
    make_horizontal_transparent()
