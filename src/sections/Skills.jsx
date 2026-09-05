import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skillGroups } from "../data";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-px">
        <SectionHeading
          icon={Code2}
          title="Skills"
          subtitle="Technologies and tools I'm building my foundation with"
          accent="pink"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-xs text-ink-400"
        >
          Always learning — these are the areas I'm actively practicing and growing in.
        </motion.p>
      </div>
    </section>
  );
}
