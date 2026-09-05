import { motion } from "framer-motion";
import {
  BookOpen,
  Network,
  Braces,
  Code2,
  GitBranch,
  Globe,
  Github,
  Lightbulb,
  Code,
  FileText,
  Sparkles,
} from "lucide-react";
import { learning, learningHighlight } from "../data";
import SectionHeading from "../components/SectionHeading";

const iconRegistry = {
  Network,
  Braces,
  Code2,
  GitBranch,
  Globe,
  Github,
  Lightbulb,
  Code,
};

export default function Learning() {
  return (
    <section id="learning" className="section-pad">
      <div className="container-px">
        <SectionHeading
          icon={BookOpen}
          title="What I'm Currently Exploring"
          subtitle="Topics I'm actively learning and practicing"
          accent="pink"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learning.map((l, i) => {
            const Icon = iconRegistry[l.icon] || Sparkles;
            const isPink = i % 2 === 0;
            return (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className={`card-base flex items-center gap-3 p-4 transition-all duration-300 ${
                  isPink ? "hover:border-pink-200" : "hover:border-lavender-200"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isPink ? "bg-pink-100 text-pink-600" : "bg-lavender-100 text-lavender-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink-700">{l.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-100 via-white to-lavender-100 p-7 sm:p-9"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-card">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink-800 sm:text-xl">
                {learningHighlight.title}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm text-ink-600">
                {learningHighlight.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
