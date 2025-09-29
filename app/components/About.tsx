export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 reveal">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">About</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            I craft scalable, maintainable products with strong DX and pragmatic architecture.
            Previously at Zweivdevs & BitCloud Solution.
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
              <h3 className="font-semibold">Zweivdevs</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Senior Full-Stack Engineer — Specializing in Scalable Web Applications I design and build full-stack web applications using React, Next.js, Express.js, and TypeScript — optimized for performance, scalability, and maintainability. From intuitive UIs to robust APIs, I deliver end-to-end solutions with modern tools like Redux Toolkit, React Query, Tailwind CSS, and Material UI. I’ve deployed production-ready apps on AWS and follow best practices in accessibility, code quality, and Agile development.</p>
            </li>
            <li className="mb-8">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand-600"></div>
              <h3 className="font-semibold">BitCloud Solution</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">I build and maintain full-stack web applications using React.js, Next.js, Node.js, and TypeScript. I focus on creating responsive, reusable components, integrating RESTful APIs, and ensuring cross-browser compatibility. Proficient in Redux for state management and performance optimization, I work effectively in Agile teams to deliver high-quality features on time</p>
            </li>
            <li>
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand-600"></div>
              <h3 className="font-semibold">BS Software Engineering</h3>
              <div className="text-xs text-zinc-500">2016–2020</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Graduated with honors; focus on web systems & HCI.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
