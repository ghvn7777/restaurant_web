# Bites Restaurant - Style Guide

This comprehensive style guide establishes the visual language and design principles for the Bites restaurant website. It ensures consistency across all pages and components while maintaining a warm, inviting, and sophisticated aesthetic.

---

## Brand Identity

### Brand Essence

**Bites** is a modern restaurant that balances sophistication with warmth. The brand communicates:

- **Warmth**: Inviting, comfortable, homely
- **Quality**: Premium ingredients, expert preparation
- **Authenticity**: Real food, real passion
- **Modernity**: Contemporary presentation, clean design

### Tagline

> "We Serve The Taste You Love"

### Brand Voice

- Friendly but not overly casual
- Confident but not arrogant
- Passionate about food
- Welcoming and inclusive

---

## Visual Design Principles

### 1. Warm & Inviting

The design should feel like a warm embrace. Use the golden/amber accent color generously but strategically. Backgrounds lean toward cream and warm whites rather than stark, clinical whites.

### 2. Clean & Spacious

Generous whitespace allows the food photography to breathe. Avoid cluttering layouts. Let each element have room to shine.

### 3. Organic Shapes

Embrace circles and soft curves. Food imagery is often circular, and decorative elements follow suit with organic dot patterns and flowing shapes.

### 4. Visual Hierarchy Through Typography

Use the contrast between the elegant serif display font (Playfair Display) and the clean sans-serif body font (DM Sans) to create clear hierarchy and visual interest.

### 5. Photography-Forward

High-quality food photography is the hero. Design should support and elevate the imagery, never compete with it.

---

## Color Usage Guidelines

### Primary Brand Color (Golden Amber)

The warm amber/gold `#D4952B` is the signature color. Use for:

- Primary call-to-action buttons
- Active navigation states
- Price highlights
- Accent underlines and decorations
- "Add to Cart" buttons
- Rating stars

**Do not** use as large background fills (too intense). Instead use `--color-brand-primary-muted` (#F5E6C8) for backgrounds.

### Neutral Palette

**Page backgrounds**: Use `--color-neutral-50` (#FDFCFA) as the primary page background. It's warm white, not pure white.

**Cards**: Use pure white (#FFFFFF) for cards to create subtle elevation against the cream background.

**Alternating sections**: Use `--color-surface-cream` (#F5F0E6) for alternating section backgrounds to create visual rhythm.

### Text Colors

| Context | Color | Token |
|---------|-------|-------|
| Primary headings | #2A2520 | `--color-neutral-800` |
| Body text | #5C5449 | `--color-neutral-600` |
| Secondary text | #8C8275 | `--color-neutral-500` |
| Captions/metadata | #C4BBAB | `--color-neutral-400` |

---

## Typography Guidelines

### Font Pairing

**Display Font: Playfair Display**
- Used for: Hero headlines, section titles, feature callouts
- Weight: 400-700
- Style: Elegant, editorial, sophisticated
- Best at: 24px and above

**Body Font: DM Sans**
- Used for: Body text, buttons, navigation, forms
- Weight: 400-600
- Style: Clean, modern, highly legible
- Works at: All sizes

**Accent Font: Cormorant Garamond**
- Used for: Quotes, testimonials, special callouts
- Weight: 400 italic
- Style: Refined, literary
- Use sparingly for emphasis

### Type Scale Application

```
Hero Headline:     Playfair Display, 48-72px, 700, tight tracking
Section Title:     Playfair Display, 30-36px, 600
Card Title:        DM Sans, 18-20px, 600
Body Large:        DM Sans, 18px, 400
Body:              DM Sans, 16px, 400
Small/Caption:     DM Sans, 14px, 400
Label:             DM Sans, 12px, 500, wide tracking, uppercase
```

### Heading Styles

**H1 (Hero)**
```css
font-family: var(--font-display);
font-size: 3.75rem; /* 60px */
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;
color: var(--color-neutral-800);
```

**H2 (Section)**
```css
font-family: var(--font-display);
font-size: 2.25rem; /* 36px */
font-weight: 600;
line-height: 1.25;
letter-spacing: -0.01em;
color: var(--color-neutral-800);
```

**H3 (Subsection)**
```css
font-family: var(--font-body);
font-size: 1.5rem; /* 24px */
font-weight: 600;
line-height: 1.4;
color: var(--color-neutral-700);
```

---

## Layout Guidelines

### Grid System

- **Max container width**: 1200px
- **Page padding**: 24px (mobile), 48px (tablet), 64px (desktop)
- **Column gap**: 24px (mobile), 32px (desktop)
- **Row gap**: 48px between sections

### Section Rhythm

Alternate between:
1. White/cream background sections
2. Full-width vs contained content
3. Image-left/text-right and vice versa

Standard section padding: `80px 0` (desktop), `48px 0` (mobile)

### Card Layouts

**Menu/Dish Cards**
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Card padding: 16px
- Border radius: 16px
- Shadow: `--shadow-md`

**Team/Chef Cards**
- Grid: 4 columns (desktop), 2 columns (mobile)
- Centered content
- Circular avatar (120px)

---

## Component Patterns

### Buttons

**Primary Button**
```
Background: var(--color-brand-primary)
Text: white
Padding: 12px 24px
Border-radius: 8px
Font: DM Sans, 500
Hover: var(--color-brand-primary-dark)
Transition: 250ms ease
```

**Secondary Button**
```
Background: transparent
Border: 1.5px solid var(--color-neutral-300)
Text: var(--color-neutral-700)
Hover: Background var(--color-neutral-100)
```

**Ghost Button**
```
Background: transparent
Text: var(--color-brand-primary)
Underline on hover
```

### Cards

**Dish Card**
- White background
- Soft shadow
- Circular food image (centered, overflow visible)
- Title + description + price
- "Add to Cart" button

**Service Card**
- Icon (in brand color)
- Title
- Brief description
- Minimal styling

### Navigation

- Fixed header on scroll
- Logo left, nav center, CTA right
- Active state: brand color underline
- Mobile: hamburger menu with slide-in drawer

### Form Elements

**Input Fields**
```
Background: white
Border: 1.5px solid var(--color-neutral-200)
Border-radius: 8px
Padding: 12px 16px
Focus: Border var(--color-brand-primary)
```

---

## Imagery Guidelines

### Food Photography

- **Style**: Bright, appetizing, professional
- **Composition**: Often top-down or 45-degree angle
- **Backgrounds**: Clean, minimal, often white or natural textures
- **Cropping**: Circular crops for cards, full-bleed for heroes

### Circular Image Treatment

Circular images are a signature element:
- Use `border-radius: 9999px`
- Add subtle shadow
- May extend beyond card boundaries for visual interest
- Typical sizes: 120px (small), 180px (medium), 280px (large)

### Decorative Elements

**Dot Patterns**
- Small circles (4-8px) in brand color or cream
- Used in clusters as background decoration
- Positioned in corners or alongside imagery
- Opacity: 20-40%

**Organic Shapes**
- Soft, blob-like shapes in cream/amber
- Used sparingly as section backgrounds
- Never distract from content

---

## Iconography

### Style

- **Type**: Line icons (consistent stroke width)
- **Stroke**: 1.5-2px
- **Size**: 24px default, 20px small, 32px large
- **Color**: Inherit from text or brand color for emphasis

### Common Icons

| Icon | Usage |
|------|-------|
| Search (magnifier) | Search functionality |
| User (circle) | Account/profile |
| Cart (bag) | Shopping cart |
| Star | Ratings |
| Clock | Time/hours |
| Location (pin) | Address |
| Phone | Contact |
| Check | Success, included items |
| Arrow (right) | Links, navigation |

---

## Motion & Animation

### Principles

1. **Purposeful**: Animation guides attention, never distracts
2. **Subtle**: Most animations are barely perceptible
3. **Consistent**: Same easing and duration for similar actions

### Standard Transitions

```css
/* Buttons, links */
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

/* Cards on hover */
transition: transform 300ms ease, box-shadow 300ms ease;
transform: translateY(-4px);

/* Page elements on load */
animation: fadeInUp 600ms ease forwards;
```

### Hover Effects

**Cards**: Lift up 4px + increase shadow
**Buttons**: Darken background
**Links**: Underline slides in from left
**Images**: Subtle scale (1.02-1.05)

### Page Load

Staggered fade-in for section elements:
- Hero content: 0ms delay
- Each subsequent element: +100ms delay
- Max delay: 600ms

---

## Spacing Reference

### Common Spacing Patterns

| Context | Value |
|---------|-------|
| Button padding | 12px 24px |
| Card padding | 24px |
| Input padding | 12px 16px |
| Icon + text gap | 8px |
| Stack spacing (tight) | 8px |
| Stack spacing (default) | 16px |
| Stack spacing (loose) | 24px |
| Section padding (mobile) | 48px |
| Section padding (desktop) | 80px |
| Between sections | 0 (sections touch) |

---

## Accessibility

### Color Contrast

- All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- Brand color (#D4952B) passes on white backgrounds for large text
- Use #B8820F for brand color on white for small text

### Focus States

All interactive elements must have visible focus states:
```css
:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 2px;
}
```

### Touch Targets

Minimum touch target: 44x44px for all interactive elements on mobile.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Typical Device |
|------|-------|----------------|
| Mobile | < 640px | Phones |
| Tablet | 640-1024px | Tablets, small laptops |
| Desktop | > 1024px | Laptops, desktops |

### Responsive Typography

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero H1 | 36px | 48px | 60px |
| Section H2 | 28px | 32px | 36px |
| Body | 16px | 16px | 16px |

### Layout Shifts

- Navigation: Hamburger (mobile) → Full nav (desktop)
- Hero: Stacked (mobile) → Side-by-side (desktop)
- Cards: 1 column (mobile) → 2 (tablet) → 4 (desktop)
- Footer: Stacked (mobile) → Multi-column (desktop)
