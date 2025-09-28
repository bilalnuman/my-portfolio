"use client";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "../data/site";

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 8) {
        nav.classList.add("backdrop-blur","bg-white/70","dark:bg-zinc-950/60","border-zinc-200","dark:border-zinc-800");
        nav.classList.remove("border-transparent");
      } else {
        nav.classList.remove("backdrop-blur","bg-white/70","dark:bg-zinc-950/60","border-zinc-200","dark:border-zinc-800");
        nav.classList.add("border-transparent");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[9999]">
      <div id="nav" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between transition-all border-b border-transparent">
        <a href="#" className="font-semibold tracking-tight">{SITE.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-brand-700 dark:hover:text-brand-100">Projects</a>
          <a href="#services" className="hover:text-brand-700 dark:hover:text-brand-100">Services</a>
          <a href="#about" className="hover:text-brand-700 dark:hover:text-brand-100">About</a>
          <a href="#contact" className="hover:text-brand-700 dark:hover:text-brand-100">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/muhammad-bilal.pdf" download className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 shadow-soft">Download CV</a>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 shadow-soft">Hire me</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
