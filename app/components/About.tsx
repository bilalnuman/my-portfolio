export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 reveal">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">About</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            I craft scalable, maintainable products with strong DX and pragmatic architecture.
            Previously at Acme & Globex.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Remote-first</span>
            <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Mentorship</span>
            <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Performance</span>
          </div>
        </div>
        <div className="lg:col-span-2 reveal">
          <ol className="relative border-s-2 border-zinc-200 dark:border-zinc-800 pl-6">
            <li className="mb-8">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand-600"></div>
              <h3 className="font-semibold">Senior Full-Stack Engineer — Globex</h3>
              <div className="text-xs text-zinc-500">2023–Present</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Led TS monorepo, CI improvements, 30% faster builds.</p>
            </li>
            <li className="mb-8">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand-600"></div>
              <h3 className="font-semibold">Frontend Engineer — Acme</h3>
              <div className="text-xs text-zinc-500">2021–2023</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Built React design system; reduced UI defects 40%.</p>
            </li>
            <li>
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand-600"></div>
              <h3 className="font-semibold">BSc Computer Science</h3>
              <div className="text-xs text-zinc-500">2017–2021</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Graduated with honors; focus on web systems & HCI.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
