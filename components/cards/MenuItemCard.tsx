import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { MenuItem } from "@/lib/types";

interface MenuItemCardProps extends MenuItem {
  delay?: number;
}

export default function MenuItemCard({
  name,
  description,
  price,
  badge,
  image,
  delay = 0,
}: MenuItemCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md card-hover overflow-visible pt-16 relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Circular Image - Overflowing */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-8 text-center">
        <h3 className="font-display text-xl font-semibold text-cream-800 mb-2">
          {name}
        </h3>
        <p className="text-cream-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className="font-semibold text-brand-primary text-lg">
            ${price.toFixed(2)}
          </span>
          {badge && <Badge>{badge}</Badge>}
        </div>
      </div>
    </div>
  );
}
