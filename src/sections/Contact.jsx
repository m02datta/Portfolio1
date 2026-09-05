import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { profile } from "../data";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    accent: "pink",
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    accent: "lavender",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    accent: "pink",
  },
];

const accentStyles = {
  pink: {
    iconBg: "bg-pink-100 text-pink-600",
    iconHover: "hover:text-pink-600",
    cardBorder: "hover:border-pink-200",
    cardGlow: "group-hover:shadow-[0_18px_50px_-16px_rgba(247,107,160,0.35)]",
    barBg: "from-pink-400 to-lavender-400",
  },
  lavender: {
    iconBg: "bg-lavender-100 text-lavender-600",
    iconHover: "hover:text-lavender-600",
    cardBorder: "hover:border-lavender-200",
    cardGlow: "group-hover:shadow-[0_18px_50px_-16px_rgba(147,102,247,0.35)]",
    barBg: "from-lavender-400 to-pink-400",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-px">
        <SectionHeading
          icon={Mail}
          title="Let's Connect"
          subtitle="I'm always open to learning, collaborating and discussing interesting technology and project ideas."
          accent="pink"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const a = accentStyles[c.accent] || accentStyles.pink;
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${c.label}: ${c.value}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group card-base relative overflow-hidden p-6 transition-all duration-300 ${a.cardBorder} ${a.cardGlow}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${a.barBg} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
                />
                <div className="mb-4 flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.iconBg}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <ExternalLink
                    className={`h-4 w-4 text-ink-300 transition-colors ${a.iconHover}`}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                  {c.label}
                </p>
                <p className="mt-1 break-words text-sm font-semibold text-ink-700">
                  {c.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-5 rounded-3xl border border-lavender-200 bg-gradient-to-r from-pink-100 via-white to-lavender-100 p-8 text-center sm:p-10"
        >
          <span className="flex items-center gap-2 text-sm text-ink-500">
            <MapPin className="h-4 w-4 text-pink-500" aria-hidden="true" />
            Available for collaboration &amp; learning opportunities
          </span>
          <h3 className="text-xl font-semibold text-ink-800 sm:text-2xl">
            Have a project idea or just want to say hi?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`}>
              <Button icon={ArrowRight} size="lg">
                Send an Email
              </Button>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg" icon={ArrowRight}>
                Visit GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
