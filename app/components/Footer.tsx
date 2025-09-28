export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-500 flex flex-col md:flex-row gap-3 justify-between">
        <div>© {year} Muhammad Bilal. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="mailto:bilal.kalri@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300">Email</a>
          <a href="https://github.com/bilalnuman"  target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-bilal-eng/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
