"use client";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${idx * 100}%)`;
    }
  }, [idx]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Testimonials</h2>
        <div className="mt-6 relative">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div ref={trackRef} className="flex transition-transform duration-500">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className="min-w-full p-8 bg-zinc-50 dark:bg-zinc-900/40">
                  <div className="text-3xl mb-3">“</div>
                  <p className="text-lg">{t.quote}</p>
                  <footer className="mt-4 text-sm text-zinc-500">{t.avatar} {t.name} — {t.role}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-center gap-2">
            <button onClick={() => setIdx((i)=> (i-1+TESTIMONIALS.length)%TESTIMONIALS.length)} className="h-8 w-8 grid place-items-center rounded-full border border-zinc-200 dark:border-zinc-800">‹</button>
            <button onClick={() => setIdx((i)=> (i+1)%TESTIMONIALS.length)} className="h-8 w-8 grid place-items-center rounded-full border border-zinc-200 dark:border-zinc-800">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
