"use client";
import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../data/site";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const allTags = useMemo(
    () => Array.from(new Set(PROJECTS.flatMap(p => p.stack))).sort(),
    []
  );
  const [active, setActive] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState<number | null>(null);

  const filtered = active.size
    ? PROJECTS.filter(p => p.stack.some(s => active.has(s)))
    : PROJECTS;

  useEffect(() => {
    // simple reveal on view
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: .2 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 reveal">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Projects</h2>
            <p className="text-xs text-zinc-500">Selected client work & personal builds</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive(new Set())}
              className={`px-3 py-1 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800 ${active.size===0?'bg-zinc-100 dark:bg-zinc-800':''}`}
            >All</button>
            {allTags.map(t => {
              const on = active.has(t);
              return (
                <button
                  key={t}
                  onClick={() => {
                    const next = new Set(active);
                    on ? next.delete(t) : next.add(t);
                    setActive(next);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800 ${on?'bg-zinc-100 dark:bg-zinc-800':''}`}
                >{t}</button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article key={i} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-soft overflow-hidden reveal">
              <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 grid place-items-center text-zinc-400">preview</div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <div className="flex gap-3 text-xs">
                    {p.live && <a className="text-brand-600 dark:text-brand-100 hover:underline" href={p.live} target="_blank">Live</a>}
                    {p.code && <a className="text-zinc-600 dark:text-zinc-300 hover:underline" href={p.code} target="_blank">Code</a>}
                  </div>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[11px]">{s}</span>
                  ))}
                </div>
                <button
                  onClick={() => setOpen(i)}
                  className="mt-4 inline-flex items-center rounded-lg px-3 py-2 text-xs font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  Read case study
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <ProjectModal projectIndex={open} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
