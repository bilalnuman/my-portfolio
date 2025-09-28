export default function Hero() {
  return (
    <section className="relative pt-16">
      <div className="relative h-[420px] md:h-[520px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,.35)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2000&auto=format&fit=crop"
          alt="Modern workspace banner"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 md:from-black/35 md:via-black/10 md:to-black/50"></div>
        <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.22),transparent_60%)]"></div>
        <div className="relative h-full flex items-end md:items-center">
          <div className="p-6 sm:p-10 md:p-14 w-full">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white backdrop-blur-md px-3 py-1 text-xs border border-white/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Available for freelance
              </span>
              <h1 className="mt-4 text-white text-4xl md:text-5xl font-bold tracking-tight">
                Crafting modern web applications with <span className="text-sky-300">React</span>, <span className="text-sky-300">Angular</span> & <span className="text-sky-300">Node.js</span>
              </h1>
              <p className="mt-3 md:mt-4 text-white/85 text-base md:text-lg">
                I build scalable, type-safe products with delightful user experiences — from MVP to millions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-900/20">View projects</a>
                <a href="#contact" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium bg-white/15 text-white hover:bg-white/25 border border-white/25 backdrop-blur-md">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stats row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div><div className="text-2xl md:text-3xl font-semibold">4+</div><div className="text-xs text-zinc-500">Years exp</div></div>
          <div><div className="text-2xl md:text-3xl font-semibold">10+</div><div className="text-xs text-zinc-500">Projects</div></div>
          <div><div className="text-2xl md:text-3xl font-semibold">2</div><div className="text-xs text-zinc-500">Teams led</div></div>
        </div>
      </div>
    </section>
  );
}
