import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data";
import SectionHeading from "../components/SectionHeading";

const accentStyles = {
  pink: {
    icon: "bg-pink-100 text-pink-600",
    line: "bg-pink-200",
    dot: "bg-pink-400",
    chip: "bg-pink-50 text-pink-700 border-pink-100",
  },
  lavender: {
    icon: "bg-lavender-100 text-lavender-600",
    line: "bg-lavender-200",
    dot: "bg-lavender-400",
    chip: "bg-lavender-50 text-lavender-700 border-lavender-100",
  },
};

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-px">
        <SectionHeading
          icon={GraduationCap}
          title="Education"
          subtitle="My academic journey so far"
          accent="lavender"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 h-full w-0.5 bg-gradient-to-b from-pink-200 via-lavender-200 to-pink-200 sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-8">
            {education.map((e, i) => {
              const a = accentStyles[e.accent] || accentStyles.pink;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${e.institution}-${i}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                  className={`relative pl-14 sm:pl-0 ${
                    isLeft ? "sm:pr-[52%]" : "sm:pl-[52%]"
                  }`}
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white ${a.dot} sm:left-1/2 sm:-translate-x-1/2`}
                  />

                  <div
                    className={`card-base p-5 sm:p-6 ${
                      isLeft ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        isLeft ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.icon}`}>
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className={`chip border ${a.chip}`}>
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {e.period}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-ink-800 sm:text-lg">
                      {e.institution}
                    </h3>
                    <p className="mt-1 text-sm text-ink-600">{e.degree}</p>
                    <p className="mt-2 text-sm font-semibold text-pink-600">{e.detail}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
