"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import MenuItemCard from "@/components/cards/MenuItemCard";
import EventCard from "@/components/cards/EventCard";
import ReservationModal from "@/components/forms/ReservationModal";
import { popularItems, upcomingEvents, heroImage } from "@/lib/menuData";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onReservationClick={() => setIsModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="The Oak and Barrel restaurant interior"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-900/80 to-cream-900/40" />
          </div>

          {/* Hero Content */}
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Where Every Bite Tells a Story
              </h1>
              <p className="text-lg md:text-xl text-cream-200 mb-8 leading-relaxed">
                Experience the finest steaks, sushi, burgers, and craft beers in
                the heart of New York. Family-friendly dining with live music
                every Friday and Sunday.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)} size="lg">
                  Reserve Your Table
                </Button>
                <Link href="/menu">
                  <Button variant="secondary" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Explore Our Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Popular Items Section */}
        <section className="section-padding bg-surface-page">
          <div className="container-site">
            <div className="text-center mb-16">
              <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
                Fan Favorites
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-800 mt-2 mb-4">
                Our Popular Dishes
              </h2>
              <p className="text-cream-500 max-w-2xl mx-auto">
                Discover the favorites that keep our guests coming back for more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mt-12">
              {popularItems.map((item, index) => (
                <MenuItemCard key={item.name} {...item} delay={index * 100} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/menu">
                <Button variant="secondary">View Full Menu</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="section-padding bg-surface-cream">
          <div className="container-site">
            <div className="text-center mb-12">
              <span className="text-brand-primary font-medium uppercase tracking-wider text-sm">
                Join Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-800 mt-2 mb-4">
                Live Music & Events
              </h2>
              <p className="text-cream-500 max-w-2xl mx-auto">
                Join us for live music every Friday evening and Sunday afternoon
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>

        {/* Reservation CTA Section */}
        <section className="section-padding bg-brand-primary">
          <div className="container-site text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready for an Unforgettable Meal?
            </h2>
            <p className="text-brand-primary-muted text-lg mb-8 max-w-2xl mx-auto">
              Book your table now and experience the best of New York dining at
              The Oak and Barrel
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-brand-primary border-white hover:bg-cream-100"
            >
              Make a Reservation
            </Button>
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
