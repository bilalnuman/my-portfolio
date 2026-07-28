"use client";
import { useEffect } from "react";
import { PROJECTS } from "../data/site";

export default function ProjectModal({
  projectIndex,
  onClose,
}: {
  projectIndex: number;
  onClose: () => void;
}) {
  const p = PROJECTS[projectIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!p) return null;

  return (
    <div className="fixed inset-0 z-[10000] grid place-items-center p-4">
      <div className="fade-enter absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="modal-enter relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-lift dark:border-white/10 dark:bg-ink-900"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-ink-800">
          <img src={p.thumbnail} alt={p.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="absolute bottom-4 left-5">
            <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
            {p.current && <p className="text-sm text-white/80">{p.current}</p>}
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-relaxed text-ink-700 dark:text-paper-200/80">{p.desc}</p>
          <div className="mt-5">
            <div className="font-mono text-xs uppercase tracking-widest text-iris-500">Stack</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full bg-ink-900/[0.06] px-2.5 py-1 text-xs font-medium dark:bg-white/[0.08]">
                  {s}
                </span>
              ))}
            </div>
          </div>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-grad px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Visit live site
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
