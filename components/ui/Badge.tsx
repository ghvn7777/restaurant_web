interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "popular" | "vegetarian" | "vegan" | "spicy" | "premium" | "chef";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variants = {
    default: "bg-cream-200 text-cream-700",
    popular: "bg-brand-primary-muted text-brand-primary-dark",
    vegetarian: "bg-success-light text-success",
    vegan: "bg-success-light text-success",
    spicy: "bg-error-light text-error",
    premium: "bg-brand-primary text-white",
    chef: "bg-brand-primary-muted text-brand-primary-dark",
  };

  // Auto-detect variant from children text
  const autoVariant = (): typeof variant => {
    if (typeof children === "string") {
      const text = children.toLowerCase();
      if (text === "popular") return "popular";
      if (text === "vegetarian") return "vegetarian";
      if (text === "vegan") return "vegan";
      if (text === "spicy") return "spicy";
      if (text === "premium") return "premium";
      if (text.includes("chef")) return "chef";
    }
    return variant;
  };

  const resolvedVariant = variant === "default" ? autoVariant() : variant;

  return (
    <span className={`${baseStyles} ${variants[resolvedVariant]} ${className}`}>
      {children}
    </span>
  );
}
