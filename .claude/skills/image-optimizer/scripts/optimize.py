#!/usr/bin/env python3
"""Download, resize, and convert images to WebP format.

Usage: uv run --with Pillow --with requests python optimize.py <url> [width] [height] [output-name]
"""

import sys
import re
import hashlib
from pathlib import Path
from urllib.parse import urlparse, unquote
from io import BytesIO

import requests
from PIL import Image


def get_filename_from_url(url: str) -> str:
    """Extract a reasonable filename from URL."""
    parsed = urlparse(url)
    path = unquote(parsed.path)

    # Try to get filename from path
    if path:
        filename = Path(path).stem
        # Clean up the filename
        filename = re.sub(r'[^\w\-]', '-', filename)
        filename = re.sub(r'-+', '-', filename).strip('-')
        if filename and len(filename) > 3:
            return filename[:50]  # Limit length

    # Fallback to hash of URL
    return hashlib.md5(url.encode()).hexdigest()[:12]


def download_image(url: str) -> Image.Image:
    """Download image from URL and return PIL Image."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    print(f"Downloading from: {url}")
    response = requests.get(url, headers=headers, timeout=30)
    response.raise_for_status()

    return Image.open(BytesIO(response.content))


def resize_image(img: Image.Image, width: int, height: int = None) -> Image.Image:
    """Resize image to specified dimensions."""
    original_width, original_height = img.size

    if height is None or height == 0:
        # Calculate height to maintain aspect ratio
        ratio = width / original_width
        height = int(original_height * ratio)

    print(f"Resizing from {original_width}x{original_height} to {width}x{height}")

    # Use LANCZOS for high-quality downsampling
    return img.resize((width, height), Image.Resampling.LANCZOS)


def save_as_webp(img: Image.Image, output_path: Path, quality: int = 85) -> None:
    """Save image as WebP format."""
    # Convert to RGB if necessary (WebP doesn't support all modes)
    if img.mode in ('RGBA', 'LA', 'P'):
        # Keep alpha channel if present
        if img.mode == 'P':
            img = img.convert('RGBA')
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    img.save(output_path, 'WEBP', quality=quality, method=6)

    # Get file size
    size_kb = output_path.stat().st_size / 1024
    print(f"Saved: {output_path} ({size_kb:.1f} KB)")


def main():
    if len(sys.argv) < 2:
        print("Usage: python optimize.py <url> [width] [height] [output-name]")
        print()
        print("Arguments:")
        print("  url         - Image URL to download")
        print("  width       - Target width (default: 1200)")
        print("  height      - Target height (default: auto)")
        print("  output-name - Output filename without extension")
        sys.exit(1)

    url = sys.argv[1]
    width = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
    height = int(sys.argv[3]) if len(sys.argv) > 3 and sys.argv[3].isdigit() else None
    output_name = sys.argv[4] if len(sys.argv) > 4 else None

    # Handle case where output_name is passed as 3rd argument (no height)
    if len(sys.argv) == 4 and not sys.argv[3].isdigit():
        output_name = sys.argv[3]
        height = None

    # Determine output filename
    if not output_name:
        output_name = get_filename_from_url(url)

    # Ensure output directory exists
    output_dir = Path("public/images")
    output_dir.mkdir(parents=True, exist_ok=True)

    output_path = output_dir / f"{output_name}.webp"

    try:
        # Download
        img = download_image(url)
        print(f"Downloaded: {img.size[0]}x{img.size[1]} ({img.mode})")

        # Resize
        img = resize_image(img, width, height)

        # Save as WebP
        save_as_webp(img, output_path)

        print()
        print(f"Image ready to use: /images/{output_name}.webp")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading image: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
