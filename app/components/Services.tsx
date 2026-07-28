"use client";
import { SERVICES } from "../data/site";
import Reveal, { SectionEyebrow } from "./Reveal";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5h16v11H4zM2 20h20M9 8l-2 2 2 2M15 8l2 2-2 2" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m13 2-9 12h7l-2 8 9-12h-7z" /></svg>,
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>What I do</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Frontend, done properly
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="lift group h-full rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft hover:shadow-lift dark:border-white/10 dark:bg-ink-900">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-grad text-white [&_svg]:h-5 [&_svg]:w-5">
                  {icons[i]}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80 dark:text-paper-200/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
