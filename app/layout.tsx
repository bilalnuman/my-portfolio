import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Bilal — Full-Stack JavaScript Developer",
  description: "Full-stack JavaScript engineer crafting robust React & Node.js products.",
  themeColor: "#0ea5e9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Prevent theme flash */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          try {
            const t = localStorage.getItem('theme');
            if (t === 'dark') document.documentElement.classList.add('dark');
          } catch(_) {}
        `}}
      />
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 selection:bg-brand-100 selection:text-brand-700">
        {children}
      </body>
    </html>
  );
}
