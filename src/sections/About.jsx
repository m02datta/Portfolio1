import { motion } from "framer-motion";
import {
  UserRound,
  GraduationCap,
  Trophy,
  BookOpen,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { profile, quickFacts } from "../data";
import SectionHeading from "../components/SectionHeading";

const factIcons = { GraduationCap, Trophy, BookOpen, BookMarked, Sparkles };

const aboutText = [
  "I am a B.Tech Computer Science Engineering student at Graphic Era Deemed to be University. I enjoy exploring programming, data structures, problem-solving, and software development.",
  "I believe that the best way to understand technology is by building things and experimenting with ideas. Through academic projects and personal learning, I am working on strengthening my programming fundamentals and developing a better understanding of how technology can be used to solve practical problems.",
  "Currently, I am particularly interested in Data Structures and Algorithms, C/C++ programming, web development, and building projects that combine creativity with technology.",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-px">
        <SectionHeading icon={UserRound} title="About Me" accent="pink" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card-base p-7 sm:p-9"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-ink-800">Who I Am</h3>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-ink-600 sm:text-base">
              {aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="card-base p-7 sm:p-8"
          >
            <h3 className="mb-5 text-lg font-semibold text-ink-800">Quick Facts</h3>
            <ul className="space-y-3">
              {quickFacts.map((f, i) => {
                const Icon = factIcons[f.icon] || Sparkles;
                return (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-center gap-3 rounded-2xl border border-lavender-100 bg-lavender-50/60 p-3 transition-colors hover:bg-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lavender-600 shadow-card">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                        {f.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-ink-700">{f.value}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
