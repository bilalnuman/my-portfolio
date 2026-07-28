"use client";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SITE } from "../data/site";
import Reveal, { SectionEyebrow } from "./Reveal";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnzrawp");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSent(true);
      const t = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded]);

  const field =
    "mt-1 w-full rounded-xl border border-ink-900/15 bg-white/70 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-iris-500 focus:ring-2 focus:ring-iris-500/20 dark:border-white/15 dark:bg-ink-900/60";

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft dark:border-white/10 dark:bg-ink-900">
          <div className="grid md:grid-cols-5">
            <div className="relative overflow-hidden bg-accent-grad p-8 text-white md:col-span-2">
              <div className="dotgrid absolute inset-0 text-white/10" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold">Let&apos;s build something</h2>
                <p className="mt-3 text-sm text-white/85">
                  Open to frontend roles — remote or in Lahore — and select freelance work.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:underline">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18v12H3zM3 7l9 6 9-6" /></svg>
                    {SITE.email}
                  </a>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5c0 8 7 15 15 15l2-3-4-2-2 2c-3-1-6-4-7-7l2-2-2-4z" /></svg>
                    {SITE.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    {SITE.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:col-span-3">
              <Reveal>
                <SectionEyebrow>Contact</SectionEyebrow>
              </Reveal>
              <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-ink-600 dark:text-paper-200/60">Name</label>
                  <input name="name" required className={field} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-600 dark:text-paper-200/60">Email</label>
                  <input name="email" type="email" required className={field} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-ink-600 dark:text-paper-200/60">Message</label>
                  <textarea name="message" rows={4} required className={field} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
                </div>
                <div className="flex items-center justify-between sm:col-span-2">
                  <p className={`text-sm text-emerald-600 transition-opacity dark:text-emerald-400 ${sent ? "opacity-100" : "opacity-0"}`}>
                    ✓ Sent — I&apos;ll reply soon.
                  </p>
                  <button
                    disabled={state.submitting}
                    type="submit"
                    className="rounded-xl bg-accent-grad px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {state.submitting ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
