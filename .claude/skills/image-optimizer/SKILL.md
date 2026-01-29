---
name: image-optimizer
description: Download images from URLs (like Pexels), resize them, and convert to WebP format for web optimization. Use when adding stock photos to the project or optimizing images for the website.
argument-hint: <url> [width] [height] [output-name]
allowed-tools: Bash(uv *)
---

# Image Optimizer

Download, resize, and convert images to WebP format for optimal web performance.

## Usage

Run the optimization script with an image URL and optional parameters:

```bash
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "<image-url>" [width] [height] [output-name]
```

### Parameters

- `<image-url>` (required): The URL of the image to download (e.g., from Pexels, Unsplash)
- `[width]` (optional): Target width in pixels. Default: 1200
- `[height]` (optional): Target height in pixels. Default: auto (maintains aspect ratio)
- `[output-name]` (optional): Output filename without extension. Default: derived from URL

### Examples

Download and optimize with default settings (1200px width):
```bash
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg"
```

Download and resize to specific dimensions:
```bash
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg" 800 600
```

Download with custom output name:
```bash
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg" 1200 800 "hero-image"
```

## Output

- Images are saved to the `public/images/` directory as WebP files
- The script creates the `public/images/` directory if it doesn't exist
- WebP quality is set to 85 for good balance between quality and file size
- Original aspect ratio is preserved when only width is specified

## Batch Processing

To optimize multiple images, run the script multiple times:

```bash
# Process multiple images
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://example.com/image1.jpg" 1200 800 "dish-1"
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://example.com/image2.jpg" 1200 800 "dish-2"
uv run --with Pillow --with requests python .claude/skills/image-optimizer/scripts/optimize.py "https://example.com/image3.jpg" 1200 800 "dish-3"
```
