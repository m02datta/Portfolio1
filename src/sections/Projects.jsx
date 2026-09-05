import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { projects } from "../data";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-px">
        <SectionHeading
          icon={FolderKanban}
          title="Projects"
          subtitle="A few things I've built and am building"
          accent="lavender"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-xs text-ink-400"
        >
          More projects coming soon as I continue learning and building.
        </motion.p>
      </div>
    </section>
  );
}
