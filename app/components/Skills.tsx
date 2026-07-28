"use client";
import { SKILLS } from "../data/site";
import Reveal, { SectionEyebrow } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28">
      <div className="dotgrid pointer-events-none absolute inset-0 text-ink-900/[0.03] dark:text-white/[0.04]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>Toolkit</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            The stack I reach for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-900/10 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-ink-900/60">
                <div className="font-mono text-xs uppercase tracking-widest text-iris-500">{s.group}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-lg border border-ink-900/10 bg-white px-2.5 py-1 text-[13px] font-medium transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-ink-800">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
