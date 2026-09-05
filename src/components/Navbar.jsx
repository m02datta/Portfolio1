import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data";

import {
  House,
  UserRound,
  GraduationCap,
  Code2,
  FolderKanban,
  Mail,
} from "lucide-react";

const icons = { House, UserRound, GraduationCap, Code2, FolderKanban, Mail };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-18">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-lavender-400 text-sm font-bold text-white shadow-soft">
            MD
          </span>
          <span className="font-display text-base font-semibold text-ink-800 sm:text-lg">
            {profile.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-pink-600" : "text-ink-500 hover:text-ink-800"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-pink-100/80 ring-1 ring-pink-200"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-ink-700 shadow-card md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 pb-4 pt-2">
              {navItems.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <button
                      onClick={() => go(item.id)}
                      className={`flex w-full items-center gap-2.5 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        active === item.id
                          ? "bg-pink-100 text-pink-600"
                          : "text-ink-600 hover:bg-lavender-50"
                      }`}
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
