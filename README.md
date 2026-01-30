# The Oak & Barrel

A restaurant website for The Oak & Barrel, a family-friendly New York restaurant specialising in steaks, sushi, burgers, and craft beers. Built with Next.js and Tailwind CSS.

## Pages

- **Home** — Hero section, popular menu items, upcoming events, and a reservation modal
- **Menu** — Interactive page-through menu with images for all items across 8 categories (Appetizers, Salads, Main Courses, Pasta, Pizza, Desserts, Beverages, Wine)
- **About** — The story of founder Kaka and the restaurant, with gallery images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Project Structure

```
app/           — Pages (home, menu, about)
components/    — Reusable UI components
lib/           — Data and types (menu items, events, images)
public/images/ — Optimized WebP images
docs/          — Design system and specs
```

## Images

All stock images are downloaded from [Pexels](https://www.pexels.com), converted to WebP, and served locally from `public/images/` for performance.
