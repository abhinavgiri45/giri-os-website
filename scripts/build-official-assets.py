#!/usr/bin/env python3
"""
Giri OS Official Website — Official Logo & Favicon Asset Pipeline
Source of truth: User-provided official emblem (media_1795106404807_b0e63aca.png)
"""

import os
import base64
import numpy as np
from PIL import Image

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
SOURCE_LOGO = r"C:/Users/abhin/.gemini/antigravity/brain/970023d6-a556-4cc2-a759-52567742a5ac/.user_uploaded/media_1795106404807_b0e63aca.png"

def main():
    print("=== GIRI OS WEBSITE: OFFICIAL BRANDING ASSET PIPELINE ===")
    
    if not os.path.isfile(SOURCE_LOGO):
        raise FileNotFoundError(f"Official logo source missing at: {SOURCE_LOGO}")
        
    im = Image.open(SOURCE_LOGO).convert("RGBA")
    arr = np.array(im)
    
    # Clean compression artifacts (any pixel with alpha <= 4 is treated as fully transparent)
    arr[arr[:, :, 3] <= 4] = [0, 0, 0, 0]
    cleaned = Image.fromarray(arr)
    
    # Find bounding box of actual emblem
    alpha = arr[:, :, 3]
    y_idx, x_idx = np.where(alpha > 10)
    x_min, x_max = x_idx.min(), x_idx.max()
    y_min, y_max = y_idx.min(), y_idx.max()
    
    emblem_w = x_max - x_min + 1
    emblem_h = y_max - y_min + 1
    print(f"[+] Emblem Content: ({x_min}, {y_min}) to ({x_max}, {y_max}) -> {emblem_w}x{emblem_h}")
    
    # Crop tightly to emblem
    emblem_crop = cleaned.crop((x_min, y_min, x_max + 1, y_max + 1))
    
    # Place on a pristine square canvas with 8% balanced padding
    max_dim = max(emblem_w, emblem_h)
    pad = int(max_dim * 0.08)
    canvas_size = max_dim + 2 * pad
    
    square_master = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    offset_x = (canvas_size - emblem_w) // 2
    offset_y = (canvas_size - emblem_h) // 2
    square_master.paste(emblem_crop, (offset_x, offset_y), emblem_crop)
    
    # High-resolution 512x512 Master Emblem
    master_512 = square_master.resize((512, 512), Image.Resampling.LANCZOS)
    
    logo_dir = os.path.join(PROJECT_ROOT, "public", "logo")
    icons_dir = os.path.join(PROJECT_ROOT, "public", "icons")
    os.makedirs(logo_dir, exist_ok=True)
    os.makedirs(icons_dir, exist_ok=True)
    
    # Save master icon in public/logo and public/icons
    icon_png_path = os.path.join(logo_dir, "giri-os-icon.png")
    master_512.save(icon_png_path, "PNG")
    print(f"[+] Saved Master Emblem: {icon_png_path}")
    
    # Multi-resolution icon sets
    sizes = [16, 24, 32, 48, 64, 128, 256, 512]
    ico_frames = []
    
    for s in sizes:
        resized = square_master.resize((s, s), Image.Resampling.LANCZOS)
        out_path = os.path.join(icons_dir, f"giri-os-icon-{s}.png")
        resized.save(out_path, "PNG")
        if s in [16, 32, 48]:
            ico_frames.append(resized)
        print(f"[+] Generated Icon {s}x{s}: {out_path}")
        
    # Generate favicon.ico (multi-frame 16, 32, 48)
    favicon_ico = os.path.join(PROJECT_ROOT, "public", "favicon.ico")
    ico_frames[0].save(
        favicon_ico, 
        format="ICO", 
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_frames[1:]
    )
    print(f"[+] Saved Favicon ICO: {favicon_ico}")
    
    # Generate apple-touch-icon.png (180x180)
    apple_icon_180 = square_master.resize((180, 180), Image.Resampling.LANCZOS)
    apple_path = os.path.join(PROJECT_ROOT, "public", "apple-touch-icon.png")
    apple_icon_180.save(apple_path, "PNG")
    print(f"[+] Saved Apple Touch Icon (180x180): {apple_path}")
    
    # Generate public/favicon.png (32x32)
    fav_32 = square_master.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32_path = os.path.join(PROJECT_ROOT, "public", "favicon.png")
    fav_32.save(fav_32_path, "PNG")
    print(f"[+] Saved Favicon PNG: {fav_32_path}")
    
    # Base64 encode 512x512 emblem for embedded SVG fidelity
    import io
    b64_buffer = io.BytesIO()
    master_512.save(b64_buffer, format="PNG")
    b64_emblem = base64.b64encode(b64_buffer.getvalue()).decode("utf-8")
    
    # Generate public/favicon.svg
    svg_favicon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <!-- Giri OS Official Favicon — Genuine Official Emblem -->
  <image href="data:image/png;base64,{b64_emblem}" width="512" height="512" />
</svg>'''
    fav_svg_path = os.path.join(PROJECT_ROOT, "public", "favicon.svg")
    with open(fav_svg_path, "w", encoding="utf-8") as f:
        f.write(svg_favicon)
    print(f"[+] Saved Favicon SVG: {fav_svg_path}")
    
    # Generate public/logo/giri-os-icon.svg
    icon_svg_path = os.path.join(logo_dir, "giri-os-icon.svg")
    with open(icon_svg_path, "w", encoding="utf-8") as f:
        f.write(svg_favicon)
    print(f"[+] Saved Emblem SVG: {icon_svg_path}")
    
    # Generate full horizontal logos (giri-os-logo.svg, giri-os-dark.svg, giri-os-light.svg)
    full_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 240" width="100%" height="100%">
  <!-- Giri OS Official Vector Logo — Genuine Official Emblem & Typography -->
  <defs>
    <linearGradient id="giriBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
  </defs>
  <style>
    .title-dark {{
      font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Inter", sans-serif;
      font-weight: 800;
      font-size: 72px;
      letter-spacing: 4px;
      fill: #0F172A;
    }}
    .tagline-dark {{
      font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 7px;
      fill: #475569;
    }}
  </style>
  <image href="data:image/png;base64,{b64_emblem}" x="30" y="20" width="200" height="200" />
  <g transform="translate(260, 95)">
    <text x="0" y="25" class="title-dark">GIRI <tspan fill="url(#giriBlueGrad)">OS</tspan></text>
    <rect x="2" y="50" width="240" height="3" rx="1.5" fill="url(#giriBlueGrad)" />
    <text x="3" y="85" class="tagline-dark">ONE SYSTEM. INFINITE POSSIBILITIES.</text>
  </g>
</svg>'''
    
    full_svg_dark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 240" width="100%" height="100%">
  <!-- Giri OS Official Vector Logo (Dark Mode) -->
  <defs>
    <linearGradient id="giriBlueGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>
  </defs>
  <style>
    .title-light {{
      font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Inter", sans-serif;
      font-weight: 800;
      font-size: 72px;
      letter-spacing: 4px;
      fill: #FFFFFF;
    }}
    .tagline-light {{
      font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 7px;
      fill: #94A3B8;
    }}
  </style>
  <image href="data:image/png;base64,{b64_emblem}" x="30" y="20" width="200" height="200" />
  <g transform="translate(260, 95)">
    <text x="0" y="25" class="title-light">GIRI <tspan fill="url(#giriBlueGradDark)">OS</tspan></text>
    <rect x="2" y="50" width="240" height="3" rx="1.5" fill="url(#giriBlueGradDark)" />
    <text x="3" y="85" class="tagline-light">ONE SYSTEM. INFINITE POSSIBILITIES.</text>
  </g>
</svg>'''

    with open(os.path.join(logo_dir, "giri-os-logo.svg"), "w", encoding="utf-8") as f:
        f.write(full_svg)
    with open(os.path.join(logo_dir, "giri-os-light.svg"), "w", encoding="utf-8") as f:
        f.write(full_svg)
    with open(os.path.join(logo_dir, "giri-os-dark.svg"), "w", encoding="utf-8") as f:
        f.write(full_svg_dark)
    with open(os.path.join(logo_dir, "giri-os-monochrome.svg"), "w", encoding="utf-8") as f:
        f.write(full_svg)
        
    print("[+] Saved full logo SVGs in public/logo/")
    
    # Also update public/images/plymouth/logo.png and public/images/grub/logo.png
    plymouth_logo = os.path.join(PROJECT_ROOT, "public", "images", "plymouth", "logo.png")
    grub_logo = os.path.join(PROJECT_ROOT, "public", "images", "grub", "logo.png")
    os.makedirs(os.path.dirname(plymouth_logo), exist_ok=True)
    os.makedirs(os.path.dirname(grub_logo), exist_ok=True)
    
    square_master.resize((192, 192), Image.Resampling.LANCZOS).save(plymouth_logo, "PNG")
    square_master.resize((128, 128), Image.Resampling.LANCZOS).save(grub_logo, "PNG")
    print(f"[+] Updated Plymouth & GRUB logo representations.")

    # Create Web App Manifest (site.webmanifest)
    manifest = '''{
  "name": "Giri OS",
  "short_name": "Giri OS",
  "description": "Official website of Giri OS — an independent Linux-based operating system. ONE SYSTEM. INFINITE POSSIBILITIES.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#2563EB",
  "icons": [
    {
      "src": "/icons/giri-os-icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/giri-os-icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}'''
    square_master.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(icons_dir, "giri-os-icon-192.png"), "PNG")
    with open(os.path.join(PROJECT_ROOT, "public", "site.webmanifest"), "w", encoding="utf-8") as f:
        f.write(manifest)
    print("[+] Saved public/site.webmanifest")
    
    print("=== ASSET PIPELINE COMPLETED SUCCESSFULLY ===")

if __name__ == "__main__":
    main()
