"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    // Example: await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 reveal">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Contact</h2>
          <form action={onSubmit} className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600"></textarea>
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className={`text-sm text-zinc-600 dark:text-zinc-400 ${sent ? "" : "opacity-0"}`}>Message sent. I’ll reply soon!</p>
              <button className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 shadow-soft" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
