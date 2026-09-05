import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-lavender-100 bg-white/60">
      <div className="container-px py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-ink-800">{profile.name}</p>
            <p className="text-sm text-ink-500">{profile.role}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-pink-600"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-lavender-600"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-ink-600 shadow-card transition-all hover:scale-110 hover:text-pink-600"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs text-ink-400"
        >
          © {year} {profile.name}. Designed &amp; built with
          <Heart className="h-3.5 w-3.5 fill-pink-300 text-pink-400" aria-hidden="true" />
          using React, Tailwind &amp; Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
}
