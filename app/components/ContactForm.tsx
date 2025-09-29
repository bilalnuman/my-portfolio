"use client";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnzrawp");
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSent(true);
      setShow(true);
      const t = setTimeout(() => setShow(false), 4000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 reveal">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Contact</h2>
          <form onSubmit={handleSubmit} className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border px-3 py-2" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className={`text-sm ${sent ? "" : "opacity-0"}`}>Message sent. I’ll reply soon!</p>
              <button disabled={state.submitting} className="rounded-xl px-5 py-3 text-sm font-medium bg-brand-600 text-white" type="submit">
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </form>
          {show && (<p className="text-green-400 mt-3">✅ Thanks! Your message has been sent.</p>)}
        </div>
      </div>
    </section>
  );
}
