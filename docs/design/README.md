# Bites Restaurant - Design System

This design system provides comprehensive documentation for building the Bites restaurant website. It ensures visual consistency, accelerates development, and maintains brand integrity across all pages and components.

---

## Quick Start

### 1. Install Required Fonts

Add to your `app/layout.tsx`:

```tsx
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Apply Theme

Copy the `@theme` block from `tailwind-theme.css` into your `app/globals.css`.

### 3. Reference Documentation

| Document | Purpose |
|----------|---------|
| [Design Tokens](./design-tokens.md) | Color, typography, spacing, and other foundational values |
| [Style Guide](./style-guide.md) | Visual design principles, usage guidelines, best practices |
| [Component Specs](./component-specs.md) | Detailed component specifications with implementation notes |
| [Tailwind Theme](./tailwind-theme.css) | Ready-to-use Tailwind CSS v4 theme configuration |

---

## Brand Colors at a Glance

| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Primary | `#D4952B` | 🟠 | CTAs, accents, highlights |
| Primary Light | `#E5A84B` | 🟡 | Hover states |
| Primary Dark | `#B8820F` | 🟤 | Active states |
| Primary Muted | `#F5E6C8` | 🟨 | Backgrounds, tags |
| Page Background | `#FDFCFA` | ⬜ | Main background |
| Card Background | `#FFFFFF` | ⬜ | Cards, elevated surfaces |
| Primary Text | `#2A2520` | ⬛ | Headings |
| Body Text | `#5C5449` | 🔲 | Paragraphs |

---

## Typography Quick Reference

```
Hero:      Playfair Display, 60px, Bold
Section:   Playfair Display, 36px, Semibold
Subtitle:  DM Sans, 24px, Semibold
Body:      DM Sans, 16px, Regular
Small:     DM Sans, 14px, Regular
Quote:     Cormorant Garamond, 18px, Italic
```

---

## Key Components

### Buttons

```tsx
// Primary
<button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all">
  Reserve Table
</button>

// Secondary
<button className="border-1.5 border-cream-300 hover:bg-cream-100 text-cream-700 font-medium px-6 py-3 rounded-lg transition-all">
  View Menu
</button>
```

### Cards

Cards use white backgrounds with soft shadows, circular food imagery that overflows the top, and lift on hover.

### Section Pattern

```tsx
<section className="section-padding bg-surface-page">
  <div className="container-site">
    {/* Section content */}
  </div>
</section>
```

---

## Page Sections

Based on the reference designs, the homepage includes:

1. **Hero** - Large headline, tagline, CTA, hero image with decorative dots
2. **Popular Dishes** - 4-column grid of dish cards
3. **Services** - "We Are More Than Multiple Service" - service icons/cards
4. **Menu Pack** - "Our Regular Menu Pack" - filterable menu grid
5. **Reservation** - CTA section with form or button
6. **Testimonials** - Customer reviews carousel
7. **Chef Team** - "Meet Our Chefs" - team member cards
8. **Mobile App** - App download CTA with phone mockup

---

## Design Principles

1. **Warm & Inviting** - Use cream backgrounds and golden accents
2. **Clean & Spacious** - Generous whitespace, uncluttered layouts
3. **Organic Shapes** - Circular images, dot patterns, soft curves
4. **Typography Hierarchy** - Serif display font + sans-serif body
5. **Photography-Forward** - Let food images be the hero

---

## File Structure

```
docs/design/
├── README.md              ← You are here
├── design-tokens.md       ← All design tokens with values
├── style-guide.md         ← Visual design guidelines
├── component-specs.md     ← Component specifications
├── tailwind-theme.css     ← Tailwind v4 theme config
└── references/
    ├── 1.png              ← Desktop reference mockup
    └── 2.png              ← Mobile reference mockup
```

---

## Implementation Checklist

- [ ] Install Google Fonts (Playfair Display, DM Sans, Cormorant Garamond)
- [ ] Apply theme configuration to `globals.css`
- [ ] Create base UI components (Button, Input, Card)
- [ ] Create layout components (Container, Section, Header, Footer)
- [ ] Build page sections (Hero, Dishes, Services, etc.)
- [ ] Add animations and micro-interactions
- [ ] Implement responsive breakpoints
- [ ] Test accessibility (color contrast, focus states, touch targets)
