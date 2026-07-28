"use client";
import { useState } from "react";
import { PROJECTS } from "../data/site";
import Reveal, { SectionEyebrow } from "./Reveal";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>Selected work</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Products I&apos;ve helped ship
          </h2>
          <p className="mt-3 max-w-xl text-ink-700/80 dark:text-paper-200/70">
            Real client SaaS and marketplaces — from multi-channel commerce to AI-powered tools.
            Tap any project for the details.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <button
                onClick={() => setOpen(i)}
                className="card-sheen lift group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white text-left shadow-soft hover:shadow-lift dark:border-white/10 dark:bg-ink-900"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {p.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent-grad px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Featured
                    </span>
                  )}
                  {p.current && (
                    <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                      {p.current}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <span className="text-iris-500 opacity-0 transition-opacity group-hover:opacity-100">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M8 7h9v9" /></svg>
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-700/80 dark:text-paper-200/70">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full bg-ink-900/[0.06] px-2.5 py-1 text-[11px] font-medium text-ink-700 dark:bg-white/[0.08] dark:text-paper-200/80">
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="rounded-full bg-ink-900/[0.06] px-2.5 py-1 text-[11px] font-medium text-ink-500 dark:bg-white/[0.08]">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && <ProjectModal projectIndex={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
