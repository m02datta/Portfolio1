import { motion } from "framer-motion";
import {
  NotebookPen,
  MessageSquareText,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const iconRegistry = {
  NotebookPen,
  MessageSquareText,
  FileText,
  Sparkles,
};

const accentMap = {
  pink: {
    badge: "bg-pink-100 text-pink-600",
    icon: "bg-pink-100 text-pink-600",
    chip: "bg-pink-50 text-pink-700 border-pink-100",
    glow: "group-hover:shadow-[0_18px_50px_-16px_rgba(247,107,160,0.35)]",
    ring: "hover:border-pink-200",
  },
  lavender: {
    badge: "bg-lavender-100 text-lavender-600",
    icon: "bg-lavender-100 text-lavender-600",
    chip: "bg-lavender-50 text-lavender-700 border-lavender-100",
    glow: "group-hover:shadow-[0_18px_50px_-16px_rgba(147,102,247,0.35)]",
    ring: "hover:border-lavender-200",
  },
};

export default function ProjectCard({ project, index }) {
  const Icon = iconRegistry[project.icon] || Sparkles;
  const a = accentMap[project.accent] || accentMap.pink;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group card-base flex h-full flex-col p-6 transition-all duration-300 sm:p-7 ${a.ring} ${a.glow}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.icon}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col items-end gap-1.5">
          <span className={`chip border ${a.chip}`}>{project.technology}</span>
          {project.status && (
            <span className="chip animate-pulse border border-pink-200 bg-pink-100 text-pink-700">
              {project.status}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-ink-800 sm:text-xl">{project.title}</h3>
      {project.subtitle && (
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-lavender-500">
          {project.subtitle}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.description}</p>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
          Features
        </p>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-ink-600">
              <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${a.badge}`} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-lavender-100 pt-4">
        <span className={`chip ${a.badge}`}>{project.highlight}</span>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-ink-600 transition-colors hover:text-pink-600"
          >
            View <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-400">
            {project.status ? "In progress" : "Concept project"}
          </span>
        )}
      </div>
    </motion.article>
  );
}
