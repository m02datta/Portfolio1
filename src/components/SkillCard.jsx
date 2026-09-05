import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Globe,
  GitBranch,
  Lightbulb,
  Network,
  Braces,
  Code,
  Github,
  BookOpen,
} from "lucide-react";

const iconRegistry = {
  Sparkles,
  Cpu,
  Globe,
  GitBranch,
  Lightbulb,
  Network,
  Braces,
  Code,
  Github,
  BookOpen,
  Code2: Code,
};

export default function SkillCard({ group, index }) {
  const Icon = iconRegistry[group.icon] || Sparkles;
  const isPink = group.accent === "pink";
  const accentBg = isPink ? "bg-pink-100" : "bg-lavender-100";
  const accentText = isPink ? "text-pink-600" : "text-lavender-600";
  const accentBorder = isPink ? "hover:border-pink-200" : "hover:border-lavender-200";
  const accentRing = isPink ? "group-hover:shadow-[0_12px_40px_-12px_rgba(247,107,160,0.35)]" : "group-hover:shadow-[0_12px_40px_-12px_rgba(147,102,247,0.35)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group card-base p-6 transition-all duration-300 ${accentBorder} ${accentRing}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accentBg} ${accentText}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold text-ink-800">{group.title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((s) => {
          const SIcon = iconRegistry[s.icon] || Code;
          return (
            <li
              key={s.name}
              className="chip border border-lavender-100 bg-lavender-50 text-ink-600 transition-colors hover:bg-white"
            >
              <SIcon className="h-3.5 w-3.5 text-lavender-500" aria-hidden="true" />
              {s.name}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
