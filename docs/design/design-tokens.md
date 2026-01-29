# Design Tokens

This document defines the foundational design tokens for the Bites restaurant website. These tokens are implemented as CSS custom properties and Tailwind theme extensions.

---

## Color Palette

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand-primary` | `#D4952B` | Primary accent, CTAs, highlights |
| `--color-brand-primary-light` | `#E5A84B` | Hover states, secondary accents |
| `--color-brand-primary-dark` | `#B8820F` | Active states, emphasis |
| `--color-brand-primary-muted` | `#F5E6C8` | Subtle backgrounds, tags |

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-neutral-50` | `#FDFCFA` | Page background |
| `--color-neutral-100` | `#F8F5F0` | Card backgrounds, sections |
| `--color-neutral-200` | `#F0EBE3` | Borders, dividers |
| `--color-neutral-300` | `#E5DFD4` | Disabled states |
| `--color-neutral-400` | `#C4BBAB` | Placeholder text |
| `--color-neutral-500` | `#8C8275` | Secondary text |
| `--color-neutral-600` | `#5C5449` | Body text |
| `--color-neutral-700` | `#3D372E` | Headings |
| `--color-neutral-800` | `#2A2520` | Primary text |
| `--color-neutral-900` | `#1A1714` | High contrast text |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#4A7C59` | Success states |
| `--color-warning` | `#D4952B` | Warnings (uses brand) |
| `--color-error` | `#C1413E` | Error states |
| `--color-info` | `#4A6FA5` | Information |

### Surface Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface-page` | `#FDFCFA` | Main page background |
| `--color-surface-card` | `#FFFFFF` | Card backgrounds |
| `--color-surface-elevated` | `#FFFFFF` | Modals, dropdowns |
| `--color-surface-warm` | `#FDF8F0` | Warm section backgrounds |
| `--color-surface-cream` | `#F5F0E6` | Alternate section backgrounds |

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Playfair Display', Georgia, serif` | Headings, hero text |
| `--font-body` | `'DM Sans', system-ui, sans-serif` | Body text, UI elements |
| `--font-accent` | `'Cormorant Garamond', Georgia, serif` | Quotes, special callouts |

### Font Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--text-xs` | `0.75rem` (12px) | 1.5 | Captions, labels |
| `--text-sm` | `0.875rem` (14px) | 1.5 | Small text, metadata |
| `--text-base` | `1rem` (16px) | 1.6 | Body text |
| `--text-lg` | `1.125rem` (18px) | 1.6 | Large body, intro text |
| `--text-xl` | `1.25rem` (20px) | 1.5 | Section intros |
| `--text-2xl` | `1.5rem` (24px) | 1.4 | Small headings |
| `--text-3xl` | `1.875rem` (30px) | 1.3 | Section headings |
| `--text-4xl` | `2.25rem` (36px) | 1.25 | Page headings |
| `--text-5xl` | `3rem` (48px) | 1.2 | Hero headings |
| `--text-6xl` | `3.75rem` (60px) | 1.1 | Display headings |
| `--text-7xl` | `4.5rem` (72px) | 1.1 | Large display |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-light` | `300` | Decorative text |
| `--font-normal` | `400` | Body text |
| `--font-medium` | `500` | Emphasis, buttons |
| `--font-semibold` | `600` | Subheadings |
| `--font-bold` | `700` | Headings |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tighter` | `-0.02em` | Large display text |
| `--tracking-tight` | `-0.01em` | Headings |
| `--tracking-normal` | `0` | Body text |
| `--tracking-wide` | `0.025em` | Small caps, labels |
| `--tracking-wider` | `0.05em` | Uppercase text |
| `--tracking-widest` | `0.1em` | Decorative spacing |

---

## Spacing

Based on a 4px base unit for consistency.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | `0` | None |
| `--space-1` | `0.25rem` (4px) | Micro spacing |
| `--space-2` | `0.5rem` (8px) | Tight spacing |
| `--space-3` | `0.75rem` (12px) | Compact spacing |
| `--space-4` | `1rem` (16px) | Default spacing |
| `--space-5` | `1.25rem` (20px) | Comfortable |
| `--space-6` | `1.5rem` (24px) | Relaxed |
| `--space-8` | `2rem` (32px) | Section padding |
| `--space-10` | `2.5rem` (40px) | Large gaps |
| `--space-12` | `3rem` (48px) | Section margins |
| `--space-16` | `4rem` (64px) | Major sections |
| `--space-20` | `5rem` (80px) | Hero spacing |
| `--space-24` | `6rem` (96px) | Page sections |
| `--space-32` | `8rem` (128px) | Major separators |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | `0` | Sharp corners |
| `--radius-sm` | `0.25rem` (4px) | Subtle rounding |
| `--radius-md` | `0.5rem` (8px) | Buttons, inputs |
| `--radius-lg` | `0.75rem` (12px) | Cards |
| `--radius-xl` | `1rem` (16px) | Large cards |
| `--radius-2xl` | `1.5rem` (24px) | Feature cards |
| `--radius-3xl` | `2rem` (32px) | Panels |
| `--radius-full` | `9999px` | Pills, avatars, circular images |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(26, 23, 20, 0.04)` | Subtle elevation |
| `--shadow-md` | `0 4px 12px rgba(26, 23, 20, 0.06)` | Cards |
| `--shadow-lg` | `0 8px 24px rgba(26, 23, 20, 0.08)` | Elevated cards |
| `--shadow-xl` | `0 16px 48px rgba(26, 23, 20, 0.1)` | Modals |
| `--shadow-warm` | `0 8px 32px rgba(212, 149, 43, 0.15)` | Brand-tinted shadow |
| `--shadow-inner` | `inset 0 2px 4px rgba(26, 23, 20, 0.04)` | Inset elements |

---

## Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Micro-interactions |
| `--duration-base` | `250ms` | Standard transitions |
| `--duration-slow` | `400ms` | Complex animations |
| `--duration-slower` | `600ms` | Page transitions |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Enter animations |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exit animations |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bounce |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `0` | Default |
| `--z-dropdown` | `10` | Dropdowns |
| `--z-sticky` | `20` | Sticky elements |
| `--z-header` | `30` | Fixed header |
| `--z-overlay` | `40` | Overlays |
| `--z-modal` | `50` | Modals |
| `--z-toast` | `60` | Toasts/notifications |
| `--z-tooltip` | `70` | Tooltips |

---

## Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `--breakpoint-sm` | `640px` | Small devices |
| `--breakpoint-md` | `768px` | Tablets |
| `--breakpoint-lg` | `1024px` | Laptops |
| `--breakpoint-xl` | `1280px` | Desktops |
| `--breakpoint-2xl` | `1536px` | Large screens |

---

## Container Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--container-sm` | `640px` | Narrow content |
| `--container-md` | `768px` | Medium content |
| `--container-lg` | `1024px` | Wide content |
| `--container-xl` | `1200px` | Full content |
| `--container-2xl` | `1400px` | Maximum width |

---

## Implementation

### Tailwind CSS Configuration

These tokens should be added to your `app/globals.css` using Tailwind v4's `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-brand-primary: #D4952B;
  --color-brand-primary-light: #E5A84B;
  --color-brand-primary-dark: #B8820F;
  --color-brand-primary-muted: #F5E6C8;

  /* Neutrals */
  --color-cream-50: #FDFCFA;
  --color-cream-100: #F8F5F0;
  --color-cream-200: #F0EBE3;
  /* ... etc */

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-accent: 'Cormorant Garamond', Georgia, serif;
}
```

### CSS Custom Properties

For JavaScript access or non-Tailwind contexts:

```css
:root {
  --color-brand-primary: #D4952B;
  /* ... all tokens */
}
```
