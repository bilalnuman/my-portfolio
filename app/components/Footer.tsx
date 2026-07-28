import { SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-900/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-ink-600 sm:flex-row sm:px-6 lg:px-8 dark:text-paper-200/60">
        <div>© {year} {SITE.name}. Built with Next.js & TypeScript.</div>
        <div className="flex gap-5">
          <a href={`mailto:${SITE.email}`} className="link-underline">Email</a>
          <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="link-underline">GitHub</a>
          <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
