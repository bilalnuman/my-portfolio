import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Bilal — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building scalable, high-performance, AI-integrated web apps with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Muhammad Bilal — Senior Frontend Engineer",
    description:
      "React · Next.js · TypeScript · AI-integrated UIs. Production SaaS, design systems, and performant interfaces.",
    type: "website",
  },
};

export const viewport = { themeColor: "#0B1220" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable}`}>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(_){}`,
        }}
      />
      <body className="bg-paper-100 text-ink-900 dark:bg-ink-950 dark:text-paper-100 font-sans antialiased selection:bg-iris-500/20 selection:text-iris-600">
        {children}
      </body>
    </html>
  );
}
