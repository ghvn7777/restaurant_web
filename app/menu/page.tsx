"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import ReservationModal from "@/components/forms/ReservationModal";
import {
  menuCategories,
  CATEGORIES,
  categoryDescriptions,
} from "@/lib/menuData";
import { MenuItem } from "@/lib/types";

export default function MenuPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToCategory = useCallback(
    (direction: "next" | "prev") => {
      if (isFlipping) return;

      setFlipDirection(direction);
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentCategory((prev) => {
          if (direction === "next") {
            return prev < CATEGORIES.length - 1 ? prev + 1 : prev;
          }
          return prev > 0 ? prev - 1 : prev;
        });
        setIsFlipping(false);
      }, 400);
    },
    [isFlipping]
  );

  const goToSpecificCategory = (index: number) => {
    if (index === currentCategory || isFlipping) return;

    const direction = index > currentCategory ? "next" : "prev";
    setFlipDirection(direction);
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentCategory(index);
      setIsFlipping(false);
    }, 400);
  };

  const category = CATEGORIES[currentCategory];
  const items = menuCategories[category] || [];

  return (
    <>
      <Header onReservationClick={() => setIsModalOpen(true)} />

      <main className="min-h-screen bg-cream-200 pt-28 pb-16">
        <div className="container-site">
          {/* Page Title */}
          <div className="text-center mb-8">
            <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
              Culinary Excellence
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-800 mt-2 mb-4">
              Our Menu
            </h1>
            <p className="text-cream-500 text-lg">
              Turn the pages to explore our culinary offerings
            </p>
          </div>

          {/* Category Navigation Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat}
                onClick={() => goToSpecificCategory(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentCategory
                    ? "bg-brand-primary w-8"
                    : "bg-cream-400 hover:bg-cream-500 w-3"
                }`}
                aria-label={`Go to ${cat}`}
              />
            ))}
          </div>

          {/* Menu Book - Desktop */}
          <div className="hidden lg:block relative max-w-6xl mx-auto perspective-1000">
            {/* Book Container */}
            <div className="relative bg-cream-800 rounded-lg p-1.5 shadow-2xl">
              {/* Book Spine Effect */}
              <div className="absolute left-1/2 top-0 bottom-0 w-6 -ml-3 bg-cream-900 rounded shadow-inner z-10" />

              {/* Pages Container */}
              <div className="relative flex bg-cream-50 rounded min-h-[600px] overflow-hidden">
                {/* Left Page - Category Info */}
                <div
                  className={`flex-1 p-12 border-r border-cream-200 relative ${
                    isFlipping && flipDirection === "prev"
                      ? "animate-page-flip-reverse"
                      : ""
                  }`}
                >
                  <div className="h-full flex flex-col justify-center">
                    <span className="text-brand-primary font-medium uppercase tracking-widest text-sm mb-4">
                      Chapter {currentCategory + 1}
                    </span>
                    <h2 className="font-display text-5xl font-bold text-cream-800 mb-6">
                      {category}
                    </h2>
                    <p className="text-cream-500 text-lg leading-relaxed max-w-md">
                      {categoryDescriptions[category]}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-12 flex items-center gap-2 text-brand-primary">
                      <div className="w-12 h-0.5 bg-brand-primary" />
                      <span className="text-sm font-medium">
                        {items.length} items
                      </span>
                    </div>
                  </div>

                  {/* Page corner effect */}
                  <div className="absolute bottom-6 left-6 text-cream-400 text-sm font-accent italic">
                    The Oak & Barrel
                  </div>
                </div>

                {/* Right Page - Menu Items */}
                <div
                  className={`flex-1 p-8 relative ${
                    isFlipping && flipDirection === "next"
                      ? "animate-page-flip"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-1 gap-4 max-h-[550px] overflow-y-auto pr-4 custom-scrollbar">
                    {items.map((item) => (
                      <MenuItemRow key={item.name} item={item} />
                    ))}
                  </div>

                  {/* Page Number */}
                  <div className="absolute bottom-6 right-6 text-cream-400 text-sm">
                    {currentCategory + 1} / {CATEGORIES.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToCategory("prev")}
              disabled={currentCategory === 0 || isFlipping}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
                w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                text-cream-600 hover:text-brand-primary hover:shadow-xl transition-all
                disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous category"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => goToCategory("next")}
              disabled={currentCategory === CATEGORIES.length - 1 || isFlipping}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
                w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                text-cream-600 hover:text-brand-primary hover:shadow-xl transition-all
                disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next category"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Menu - Mobile/Tablet */}
          <div className="lg:hidden">
            {/* Category Header */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <span className="text-brand-primary font-medium uppercase tracking-widest text-xs">
                Chapter {currentCategory + 1}
              </span>
              <h2 className="font-display text-3xl font-bold text-cream-800 mt-1 mb-2">
                {category}
              </h2>
              <p className="text-cream-500 text-sm">
                {categoryDescriptions[category]}
              </p>
            </div>

            {/* Mobile Navigation */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => goToCategory("prev")}
                disabled={currentCategory === 0 || isFlipping}
                className="flex-1 py-3 bg-white rounded-lg shadow-sm text-cream-600
                  disabled:opacity-30 disabled:cursor-not-allowed
                  hover:bg-cream-50 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => goToCategory("next")}
                disabled={
                  currentCategory === CATEGORIES.length - 1 || isFlipping
                }
                className="flex-1 py-3 bg-white rounded-lg shadow-sm text-cream-600
                  disabled:opacity-30 disabled:cursor-not-allowed
                  hover:bg-cream-50 transition-colors"
              >
                Next
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <MobileMenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Category Quick Nav */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat}
                onClick={() => goToSpecificCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === currentCategory
                    ? "bg-brand-primary text-white"
                    : "bg-white text-cream-600 hover:bg-cream-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

// Menu Item Row Component (Desktop)
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-100 transition-colors group">
      {/* Item Image */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="80px"
        />
      </div>

      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-cream-800 group-hover:text-brand-primary transition-colors">
              {item.name}
            </h3>
            <p className="text-cream-500 text-sm mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
          <span className="font-semibold text-brand-primary text-lg flex-shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {item.badge && <Badge className="mt-2">{item.badge}</Badge>}
      </div>
    </div>
  );
}

// Mobile Menu Card Component
function MobileMenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
      {/* Item Image */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-cream-800">{item.name}</h3>
          <span className="font-semibold text-brand-primary">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-cream-500 text-sm mt-1 line-clamp-2">
          {item.description}
        </p>
        {item.badge && <Badge className="mt-2">{item.badge}</Badge>}
      </div>
    </div>
  );
}
