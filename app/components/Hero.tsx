"use client";
import { useEffect, useState } from "react";
import { SITE } from "../data/site";

function useRotating(words: string[], speed = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), speed);
    return () => clearInterval(t);
  }, [words.length, speed]);
  return { word: words[i], i };
}

export default function Hero() {
  const { word, i } = useRotating(SITE.rotating);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stagger = (n: number) =>
    `reveal ${mounted ? "show" : ""}`;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mesh pointer-events-none absolute inset-0 animate-gradient-pan [background-size:200%_200%]" />
      <div className="dotgrid pointer-events-none absolute inset-0 text-ink-900/[0.04] dark:text-white/[0.05]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className={stagger(0)} style={{ transitionDelay: "0.05s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur dark:border-white/10 dark:bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for frontend roles · Remote & Lahore
            </span>
          </span>

          <h1 className={`mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl ${stagger(1)}`} style={{ transitionDelay: "0.14s" }}>
            I build{" "}
            <span key={i} className="text-grad fade-enter inline-block">{word}</span>
            <span className="animate-blink text-iris-500">_</span>
            <br />
            for the modern web.
          </h1>

          <p className={`mt-5 max-w-xl text-base text-ink-700/80 dark:text-paper-200/70 md:text-lg ${stagger(2)}`} style={{ transitionDelay: "0.23s" }}>
            {SITE.role} with 5+ years crafting scalable, accessible, high-performance interfaces in{" "}
            <strong className="font-semibold text-ink-900 dark:text-white">React</strong>,{" "}
            <strong className="font-semibold text-ink-900 dark:text-white">Next.js</strong> &{" "}
            <strong className="font-semibold text-ink-900 dark:text-white">TypeScript</strong> — including AI-integrated product UIs.
          </p>

          <div className={`mt-8 flex flex-wrap items-center gap-3 ${stagger(3)}`} style={{ transitionDelay: "0.32s" }}>
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-accent-grad px-5 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5">
              View my work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href={SITE.cv} download className="inline-flex items-center gap-2 rounded-xl border border-ink-900/15 bg-white/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10">
              Download CV
            </a>
            <div className="flex items-center gap-3 pl-1 text-ink-600 dark:text-paper-200/70">
              <a aria-label="GitHub" href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-iris-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" /></svg>
              </a>
              <a aria-label="LinkedIn" href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-iris-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21H21v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H13z" /></svg>
              </a>
            </div>
          </div>

          <div className={`mt-12 grid max-w-lg grid-cols-3 gap-6 ${stagger(4)}`} style={{ transitionDelay: "0.4s" }}>
            {SITE.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="mt-1 text-xs text-ink-600 dark:text-paper-200/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
