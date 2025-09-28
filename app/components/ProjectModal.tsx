"use client";

import { PROJECTS } from "../data/site";

export default function ProjectModal({ projectIndex, onClose }:{
  projectIndex: number; onClose: () => void;
}) {
  const p = PROJECTS[projectIndex];
  if (!p) return null;

  return (
    <div id="modal" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative mx-auto mt-24 max-w-3xl w-[92%] rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            {/* <p className="text-sm text-zinc-500">{p.stack.join(" · ")}</p> */}
          </div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900">✕</button>
        </div>
        <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
          {/* <p>{p.caseStudy}</p>
          <ul className="list-disc pl-5 mt-3">
            <li>Tech: {p.stack.join(", ")}</li>
            <li>Role: Full-stack (architecture, FE, BE)</li>
            <li>Outcomes: perf ↑, shipping speed ↑, UX ↑</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
