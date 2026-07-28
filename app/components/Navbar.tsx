"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "../data/site";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999]">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-all sm:px-6 lg:px-8 ${
          scrolled
            ? "border-b border-ink-900/10 bg-paper-100/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70"
            : "border-b border-transparent"
        }`}
      >
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          Muhammad&nbsp;<span className="text-grad">Bilal</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline font-medium text-ink-700 dark:text-paper-200/80">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={SITE.cv}
            download
            className="hidden rounded-xl bg-accent-grad px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Download CV
          </a>
          <ThemeToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-ink-900/15 md:hidden dark:border-white/15"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-ink-900/10 bg-paper-100/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-950/90">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-ink-700 hover:bg-ink-900/5 dark:text-paper-200/80 dark:hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
