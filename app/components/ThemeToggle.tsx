"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) { root.classList.add("dark"); localStorage.setItem("theme", "dark"); }
    else { root.classList.remove("dark"); localStorage.setItem("theme", "light"); }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-lg border border-ink-900/15 transition-colors hover:bg-ink-900/5 dark:border-white/15 dark:hover:bg-white/10"
    >
      {dark ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.5-6.5 1.4 1.4M5.1 18.9l1.4-1.4m0-10-1.4-1.4m12.8 12.8-1.4-1.4" /></svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      )}
    </button>
  );
}
