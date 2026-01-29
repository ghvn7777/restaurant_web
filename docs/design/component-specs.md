# Component Specifications

This document provides detailed specifications for all UI components in the Bites restaurant website. Each component includes structure, variants, states, and implementation guidelines for Next.js with Tailwind CSS.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Navigation](#navigation)
4. [Forms](#forms)
5. [Typography Components](#typography-components)
6. [Media Components](#media-components)
7. [Layout Components](#layout-components)
8. [Feedback Components](#feedback-components)
9. [Decorative Elements](#decorative-elements)

---

## Buttons

### Button Variants

#### Primary Button

The main CTA button used for primary actions.

**Visual Specs:**
- Background: `#D4952B` (brand-primary)
- Text: `#FFFFFF`
- Font: DM Sans, 500, 16px
- Padding: `12px 24px`
- Border Radius: `8px`
- Min Height: `48px`

**States:**
| State | Background | Transform |
|-------|------------|-----------|
| Default | `#D4952B` | none |
| Hover | `#B8820F` | none |
| Active | `#9A6D0A` | scale(0.98) |
| Disabled | `#E5DFD4` | none |
| Focus | `#D4952B` | outline: 2px solid #D4952B, offset: 2px |

**Tailwind Classes:**
```tsx
className="bg-brand-primary hover:bg-brand-primary-dark text-white
           font-medium px-6 py-3 rounded-lg transition-all duration-250
           disabled:bg-neutral-300 disabled:cursor-not-allowed
           focus-visible:outline-2 focus-visible:outline-brand-primary
           focus-visible:outline-offset-2"
```

#### Secondary Button

For secondary actions, less prominent than primary.

**Visual Specs:**
- Background: `transparent`
- Border: `1.5px solid #E5DFD4`
- Text: `#3D372E`
- Padding: `12px 24px`
- Border Radius: `8px`

**States:**
| State | Background | Border |
|-------|------------|--------|
| Default | transparent | `#E5DFD4` |
| Hover | `#F8F5F0` | `#C4BBAB` |
| Active | `#F0EBE3` | `#8C8275` |

#### Ghost Button

Minimal button for tertiary actions.

**Visual Specs:**
- Background: `transparent`
- Text: `#D4952B`
- Underline: appears on hover

#### Icon Button

Circular button containing only an icon.

**Visual Specs:**
- Size: `44px × 44px`
- Border Radius: `9999px`
- Background: `#F8F5F0`
- Icon Color: `#5C5449`

---

## Cards

### Dish Card

Displays a menu item with image, details, and action.

**Structure:**
```
┌─────────────────────────────┐
│      ┌───────────┐          │
│      │  Circular │          │  ← Image extends above card
│      │   Image   │          │
│      └───────────┘          │
│                             │
│        Dish Name            │  ← DM Sans, 600, 18px
│                             │
│   Brief description text    │  ← DM Sans, 400, 14px, neutral-500
│   about the dish...         │
│                             │
│   ★★★★☆  (4.5)             │  ← Rating stars
│                             │
│  $35.00      [Add to Cart]  │  ← Price + CTA
│                             │
└─────────────────────────────┘
```

**Visual Specs:**
- Card Background: `#FFFFFF`
- Border Radius: `16px`
- Padding: `24px`
- Shadow: `0 4px 12px rgba(26, 23, 20, 0.06)`
- Image Size: `140px` diameter
- Image Position: Centered, `-40px` top margin (overlaps)

**Hover State:**
- Transform: `translateY(-4px)`
- Shadow: `0 8px 24px rgba(26, 23, 20, 0.08)`

**Implementation:**
```tsx
interface DishCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  onAddToCart: () => void;
}
```

---

### Chef Card

Displays team member information.

**Structure:**
```
┌─────────────────────────────┐
│                             │
│      ┌───────────┐          │
│      │  Circular │          │
│      │   Photo   │          │
│      └───────────┘          │
│                             │
│        Chef Name            │  ← DM Sans, 600, 18px, center
│        Role/Title           │  ← DM Sans, 400, 14px, neutral-500
│                             │
└─────────────────────────────┘
```

**Visual Specs:**
- Background: `transparent` or `#FFFFFF`
- Avatar Size: `120px` diameter
- Text Align: center
- Padding: `24px`

---

### Service Card

Displays a service offering with icon.

**Structure:**
```
┌─────────────────────────────┐
│  ┌────┐                     │
│  │Icon│  Service Title      │
│  └────┘                     │
│         Description text    │
│         goes here...        │
└─────────────────────────────┘
```

**Visual Specs:**
- Background: `transparent` or `#F8F5F0`
- Icon: `24px`, brand-primary color
- Border Radius: `12px`
- Padding: `20px`

---

### Testimonial Card

Displays customer review.

**Structure:**
```
┌─────────────────────────────┐
│                             │
│  "Quote text goes here in   │  ← Cormorant Garamond, 400 italic
│   italics, describing the   │
│   customer experience..."   │
│                             │
│  ┌────┐  Customer Name      │
│  │Img │  Location           │
│  └────┘                     │
│                             │
└─────────────────────────────┘
```

**Visual Specs:**
- Background: `#FFFFFF`
- Border Radius: `16px`
- Padding: `32px`
- Quote Font: Cormorant Garamond, 18px, italic
- Avatar: `48px` diameter

---

## Navigation

### Header / Navbar

Fixed navigation header.

**Structure:**
```
┌──────────────────────────────────────────────────────────┐
│  [Logo]     About  Menu  Reviews  Blog  Contact    [CTA] │
└──────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Height: `80px`
- Background: `#FFFFFF` (becomes `rgba(255,255,255,0.95)` with backdrop blur on scroll)
- Shadow on scroll: `0 1px 2px rgba(26, 23, 20, 0.04)`
- Z-index: `30`
- Container: max-width `1200px`, centered

**Logo:**
- Icon + "Bites" text
- Icon: 32px, amber bowl with dots
- Text: Playfair Display, 24px, 600

**Nav Links:**
- Font: DM Sans, 500, 15px
- Color: `#5C5449`
- Active: `#D4952B` with underline
- Gap between links: `32px`

**CTA Button:**
- "Reserve Table" primary button
- Smaller variant: `10px 20px` padding

**Mobile (< 768px):**
- Hamburger menu icon (right)
- Slide-in drawer from right
- Full-height overlay

---

### Footer

Site footer with links and information.

**Structure:**
```
┌──────────────────────────────────────────────────────────┐
│  [Logo]          Quick Links    Contact      Follow Us   │
│  Brief tagline   Home           Address      Social icons│
│  about Bites     Menu           Phone                    │
│                  About          Email                    │
│                  Contact                                 │
├──────────────────────────────────────────────────────────┤
│  © 2024 Bites. All rights reserved.                      │
└──────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#2A2520` (neutral-800)
- Text: `#F8F5F0`
- Padding: `64px 0 24px`
- Grid: 4 columns (desktop), stacked (mobile)

---

## Forms

### Text Input

**Visual Specs:**
- Height: `48px`
- Background: `#FFFFFF`
- Border: `1.5px solid #E5DFD4`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: DM Sans, 400, 16px
- Placeholder Color: `#C4BBAB`

**States:**
| State | Border | Background |
|-------|--------|------------|
| Default | `#E5DFD4` | `#FFFFFF` |
| Hover | `#C4BBAB` | `#FFFFFF` |
| Focus | `#D4952B` | `#FFFFFF` |
| Error | `#C1413E` | `#FFF5F5` |
| Disabled | `#F0EBE3` | `#F8F5F0` |

**With Label:**
```
Label Text *              ← DM Sans, 500, 14px
┌────────────────────┐
│ Placeholder text   │
└────────────────────┘
Helper or error text      ← 12px, neutral-500 or error
```

---

### Select / Dropdown

Same base styling as text input with dropdown indicator.

**Visual Specs:**
- Same as text input
- Right icon: Chevron down, 20px

---

### Textarea

Multi-line text input.

**Visual Specs:**
- Min Height: `120px`
- Resize: vertical only
- All other specs match text input

---

### Checkbox

**Visual Specs:**
- Size: `20px × 20px`
- Border: `1.5px solid #E5DFD4`
- Border Radius: `4px`
- Checked Background: `#D4952B`
- Checkmark: white, 2px stroke

---

## Typography Components

### Section Header

Standard section title with optional subtitle.

**Structure:**
```
        Section Title         ← Playfair Display, 36px, 600, center
    Optional subtitle text    ← DM Sans, 16px, neutral-500, center
```

**Spacing:**
- Gap between title and subtitle: `12px`
- Margin bottom: `48px`

---

### Price Display

**Structure:**
```
$35.00    ← DM Sans, 600, 20px, brand-primary
```

**With original price:**
```
$35.00  $45.00   ← Original: line-through, neutral-400
```

---

### Rating Stars

**Visual Specs:**
- Star size: `16px`
- Filled: `#D4952B`
- Empty: `#E5DFD4`
- Gap: `2px`

**With count:**
```
★★★★☆  (4.5)    ← Count in neutral-500, 14px
```

---

## Media Components

### Circular Image

Signature image treatment.

**Variants:**
| Size | Diameter | Usage |
|------|----------|-------|
| sm | `80px` | Avatars, small thumbnails |
| md | `120px` | Chef photos, testimonials |
| lg | `180px` | Dish cards |
| xl | `280px` | Hero images |

**Visual Specs:**
- Border Radius: `9999px`
- Object Fit: `cover`
- Shadow: `0 8px 24px rgba(26, 23, 20, 0.08)`

**Implementation:**
```tsx
<div className="relative w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg">
  <Image src={src} alt={alt} fill className="object-cover" />
</div>
```

---

### Hero Image

Large featured image.

**Visual Specs:**
- Aspect Ratio: varies (typically 4:3 or 1:1)
- Border Radius: `24px` or `9999px`
- May include decorative dot overlay

---

## Layout Components

### Container

Centers and constrains content.

**Specs:**
- Max Width: `1200px`
- Padding: `0 24px` (mobile), `0 48px` (tablet), `0 64px` (desktop)
- Margin: `0 auto`

**Implementation:**
```tsx
<div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
  {children}
</div>
```

---

### Section

Standard page section wrapper.

**Specs:**
- Padding: `48px 0` (mobile), `80px 0` (desktop)
- Background: `#FDFCFA` or `#F5F0E6` (alternating)

**Implementation:**
```tsx
<section className="py-12 md:py-20 bg-surface-page">
  <Container>{children}</Container>
</section>
```

---

### Grid

Responsive grid layouts.

**Dish Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
```

**Chef Grid:**
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
```

**Two Column (Image + Content):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

---

## Feedback Components

### Badge / Tag

Small label for categories or status.

**Visual Specs:**
- Background: `#F5E6C8` (brand-primary-muted)
- Text: `#B8820F`
- Font: DM Sans, 500, 12px, uppercase
- Padding: `4px 12px`
- Border Radius: `9999px`
- Letter Spacing: `0.05em`

---

### Toast / Notification

Temporary feedback message.

**Visual Specs:**
- Background: `#FFFFFF`
- Border-left: `4px solid` (color based on type)
- Shadow: `--shadow-lg`
- Border Radius: `8px`
- Padding: `16px`
- Position: fixed, bottom-right, `24px` offset
- Animation: slide in from right

**Types:**
| Type | Border Color |
|------|--------------|
| Success | `#4A7C59` |
| Warning | `#D4952B` |
| Error | `#C1413E` |
| Info | `#4A6FA5` |

---

## Decorative Elements

### Dot Pattern

Organic clusters of dots for visual interest.

**Visual Specs:**
- Dot size: `4-8px`
- Color: `#D4952B` at 20-30% opacity, or `#F5E6C8`
- Arrangement: Organic clusters, not rigid grids
- Position: Corners of sections, near hero images

**Implementation:**
```tsx
// As background SVG or positioned divs
<div className="absolute top-0 right-0 opacity-20">
  <svg><!-- dot pattern --></svg>
</div>
```

---

### Decorative Circle

Large subtle background shapes.

**Visual Specs:**
- Size: `200-400px`
- Color: `#F5E6C8` or `#FDF8F0`
- Position: Behind content, partially visible
- Z-index: `-1`

---

### Curved Divider

Soft wave between sections.

**Visual Specs:**
- Height: `60-100px`
- Fill: section background color
- Path: Smooth bezier curve

---

## Animation Specs

### Card Hover

```css
transition: transform 300ms ease, box-shadow 300ms ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(26, 23, 20, 0.08);
}
```

### Button Press

```css
&:active {
  transform: scale(0.98);
}
```

### Page Load - Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 600ms ease forwards;
}
```

### Staggered Children

Apply increasing delays to children:
```tsx
{items.map((item, i) => (
  <div
    key={i}
    style={{ animationDelay: `${i * 100}ms` }}
    className="animate-fade-in-up opacity-0"
  >
    {item}
  </div>
))}
```

---

## Component File Structure

Recommended organization in `/components`:

```
components/
├── ui/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Badge.tsx
│   └── Rating.tsx
├── cards/
│   ├── DishCard.tsx
│   ├── ChefCard.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── layout/
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── PopularDishes.tsx
│   ├── Services.tsx
│   ├── MenuPack.tsx
│   ├── Reservation.tsx
│   ├── Testimonials.tsx
│   ├── ChefTeam.tsx
│   └── MobileApp.tsx
└── decorative/
    ├── DotPattern.tsx
    └── CircleDecoration.tsx
```
