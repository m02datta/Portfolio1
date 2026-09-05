import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles, Mail } from "lucide-react";
import { profile } from "../data";
import Button from "../components/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Shape({ className, delay = 0, slow = false }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`pointer-events-none absolute rounded-full blur-2xl ${className} ${
        slow ? "animate-floatySlow" : "animate-floaty"
      }`}
    />
  );
}

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative shapes */}
      <Shape className="left-[-6rem] top-24 h-64 w-64 bg-pink-200/50" delay={0.1} />
      <Shape className="right-[-4rem] top-10 h-72 w-72 bg-lavender-200/50" delay={0.2} slow />
      <Shape className="bottom-[-4rem] left-1/3 h-56 w-56 bg-pink-100/60" delay={0.3} />

      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-lavender-600 shadow-card"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Hello, I'm
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-base font-medium text-ink-600 sm:text-lg"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base"
            >
              I'm a Computer Science Engineering student passionate about programming,
              problem-solving, and building practical projects that turn ideas into useful
              solutions.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button onClick={() => scrollTo("projects")} icon={ArrowRight} size="lg">
                View My Projects
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                Let's Connect
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-7 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-pink-600"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-lavender-600"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-pink-600"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — profile placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-sm items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full"
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pink-200 via-white to-lavender-200 opacity-70 blur-md" />
              <div className="absolute inset-2 rounded-[2.25rem] border border-lavender-200 bg-white/70 p-2">
                <img
                  src="./photo.jpeg"
                  alt="Portrait of Mahek Datta"
                  className="h-full w-full rounded-[1.75rem] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating dots */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-10 h-6 w-6 rounded-full bg-pink-300/70 blur-[1px]"
              />
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-12 h-5 w-5 rounded-full bg-lavender-300/70 blur-[1px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
