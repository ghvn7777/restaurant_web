import Image from "next/image";
import { Event } from "@/lib/types";

export default function EventCard({
  title,
  description,
  date,
  time,
  image,
}: Event) {
  return (
    <div className="bg-white rounded-2xl shadow-md card-hover overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-brand-primary text-white text-sm font-medium rounded-full">
            {date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-cream-800 mb-2">
          {title}
        </h3>
        <p className="text-cream-500 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-cream-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium">{time}</span>
        </div>
      </div>
    </div>
  );
}
