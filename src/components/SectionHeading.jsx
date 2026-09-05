import { motion } from "framer-motion";

export default function SectionHeading({ icon: Icon, title, subtitle, accent = "pink" }) {
  const accentText = accent === "pink" ? "text-pink-500" : "text-lavender-500";
  const accentBg =
    accent === "pink" ? "bg-pink-100 text-pink-600" : "bg-lavender-100 text-lavender-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
    >
      {Icon && (
        <span
          className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${accentBg}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      )}
      <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
        <span className={accentText}>— </span>
        {title}
        <span className={accentText}> —</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-ink-500 sm:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
