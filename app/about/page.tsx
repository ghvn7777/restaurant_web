"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/forms/ReservationModal";
import { aboutImages } from "@/lib/menuData";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onReservationClick={() => setIsModalOpen(true)} />

      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-surface-cream">
          <div className="container-site text-center">
            <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-800 mt-2 mb-4">
              About Us
            </h1>
            <p className="text-cream-500 text-lg max-w-2xl mx-auto">
              A journey from passion to plate, where every dish is crafted with
              love
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="section-padding bg-surface-page">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={aboutImages.founder}
                    alt="Kaka, founder of The Oak and Barrel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary-muted rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-surface-cream rounded-full -z-10" />
              </div>

              {/* Story Content */}
              <div>
                <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
                  Meet Our Founder
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-800 mt-2 mb-6">
                  Kaka&apos;s Vision
                </h2>
                <div className="space-y-4 text-cream-600 leading-relaxed">
                  <p>
                    In early 2026, Kaka, a passionate culinary enthusiast with
                    roots spanning from Tokyo to Texas, had a dream that seemed
                    almost impossible: to create a restaurant that would bring
                    together the world&apos;s most beloved cuisines under one roof.
                  </p>
                  <p>
                    &ldquo;I grew up in a household where food was love,&rdquo; Kaka
                    recalls. &ldquo;My mother would prepare traditional dishes from
                    her Japanese heritage, while my father, a Texan through and
                    through, would fire up the grill every weekend. I wanted to
                    honor both traditions.&rdquo;
                  </p>
                  <p>
                    The Oak and Barrel was born from this vision — a place where
                    a perfectly seared ribeye shares the menu with delicate
                    sashimi, where craft beers complement gourmet burgers, and
                    where families gather to create memories around a table
                    laden with exceptional food.
                  </p>
                  <blockquote className="font-accent italic text-lg text-cream-700 border-l-4 border-brand-primary pl-4 my-6">
                    &ldquo;We don&apos;t just serve food here. We serve moments. The
                    first bite of a perfect steak. The laughter shared over
                    craft beers. The joy of discovering a new favorite dish.
                    That&apos;s what The Oak and Barrel is all about.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Gallery */}
        <section className="section-padding bg-surface-cream">
          <div className="container-site">
            <div className="text-center mb-12">
              <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
                Our Space
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-800 mt-2 mb-4">
                Step Inside
              </h2>
              <p className="text-cream-500 max-w-2xl mx-auto">
                Warm ambiance meets modern elegance in our New York dining room
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={aboutImages.interior1}
                  alt="Restaurant interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={aboutImages.interior2}
                  alt="Dining area"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group md:col-span-2 lg:col-span-1">
                <Image
                  src={aboutImages.kitchen}
                  alt="Kitchen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-surface-page">
          <div className="container-site">
            <div className="text-center mb-12">
              <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
                What We Believe
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-800 mt-2 mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-brand-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-800 mb-2">
                  Quality First
                </h3>
                <p className="text-cream-500">
                  We source only the finest ingredients from trusted local and
                  international suppliers
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-brand-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-800 mb-2">
                  Family Welcome
                </h3>
                <p className="text-cream-500">
                  A warm, inviting atmosphere where every guest feels like
                  family
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-brand-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-800 mb-2">
                  Live Experience
                </h3>
                <p className="text-cream-500">
                  Music, community, and celebration are at the heart of
                  everything we do
                </p>
              </div>
            </div>
          </div>
        </section>
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
