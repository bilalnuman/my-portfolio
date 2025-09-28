export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
            <h3 className="font-semibold">MVP to Production</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Launch-ready products with clean architecture, auth, payments, and CI/CD.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
            <h3 className="font-semibold">Frontend Engineering</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Design systems, performance, accessibility, animations.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-soft">
            <h3 className="font-semibold">Scalable Backends & APIs</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Type-safe REST and GraphQL APIs, with caching, queues, and full observability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
