import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-gradient-to-r from-pink-400 to-lavender-400 text-white shadow-soft hover:shadow-glow",
  secondary:
    "bg-white/80 text-ink-700 border border-lavender-200 hover:border-lavender-300 hover:bg-white",
  ghost: "bg-transparent text-ink-600 hover:text-ink-800",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight = true,
  className = "",
  ariaLabel,
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && !iconRight && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </motion.button>
  );
}
