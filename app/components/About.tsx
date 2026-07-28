"use client";
import { EXPERIENCE } from "../data/site";
import Reveal, { SectionEyebrow } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-1">
          <Reveal>
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Frontend engineer who ships
            </h2>
            <p className="mt-4 text-ink-700/80 dark:text-paper-200/70">
              I turn complex product requirements into fast, accessible, maintainable interfaces —
              with a growing specialty in the UI layer around AI: voice agents, LLM tools, and
              document-AI products.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {["Remote-first", "Component systems", "Performance", "Accessibility"].map((t) => (
                <span key={t} className="rounded-full border border-ink-900/10 px-3 py-1 dark:border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          <ol className="relative ml-3 border-l-2 border-ink-900/10 dark:border-white/10">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.06}>
                <li className="mb-9 pl-6 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-accent-grad ring-4 ring-paper-100 dark:ring-ink-950" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.company}</h3>
                    <span className="font-mono text-xs text-ink-500 dark:text-paper-200/50">{e.period}</span>
                  </div>
                  <div className="text-sm font-medium text-iris-500">{e.role}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80 dark:text-paper-200/70">{e.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
