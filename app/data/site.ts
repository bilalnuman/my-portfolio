export const SITE = {
  name: "Muhammad Bilal",
  role: "Senior Frontend Engineer",
  tagline: "React · Next.js · TypeScript · AI-Integrated UIs",
  email: "bilal.kalri@gmail.com",
  phone: "+92 314 1401358",
  location: "Lahore, Pakistan · Remote",
  cv: "/muhammad-bilal.pdf",
  socials: {
    github: "https://github.com/bilalnuman",
    linkedin: "https://www.linkedin.com/in/muhammad-bilal-eng/",
  },
  // rotating words in the hero
  rotating: ["production SaaS", "AI-powered interfaces", "design systems", "real-time dashboards"],
  stats: [
    { value: "5+", label: "Years experience" },
    { value: "10+", label: "Products shipped" },
    { value: "6+", label: "Marketplace integrations" },
  ],
};

export type Project = {
  thumbnail: string;
  title: string;
  blurb: string;      // short one-liner for the card
  desc: string;       // fuller description for the modal
  stack: string[];
  live?: string;
  current?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    thumbnail: "/digimark.png",
    title: "Digimark",
    blurb: "Generative AI development company website with RAG-based chat system.",
    desc: "Built the complete website for Digimark, a cutting-edge generative AI development company. The site showcases AI solutions and services with an integrated RAG (Retrieval-Augmented Generation) based chat system, enabling clients to interact with AI-powered features seamlessly. Delivered a modern, responsive interface that highlights the company's expertise in generative AI and machine learning across various industries.",
    stack: ["Next.js", "React", "TypeScript", "RAG-based Chat System"],
    live: "https://digimarkdevelopers.com/",
    current: "Digimark",
    featured: true,
  },
  {
    thumbnail: "/planex.png",
    title: "PlanEx",
    blurb: "Enterprise workforce & operations management SaaS.",
    desc: "A multi-module enterprise platform unifying fragmented departmental tools — employee management (onboarding/offboarding, activity logs), project & delivery tracking, HR/attendance and leave, and payroll/expense/billing with financial dashboards. Delivered 30+ reusable, type-safe components enabling end-to-end employee lifecycle management, real-time attendance/expense/payroll views, and Excel-based reporting in a responsive, accessible UI.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Zustand", "React Query", "Tailwind CSS", "Radix UI", "Axios"],
    current: "Digimark",
    live: "https://planex-app.digimarkdevelopers.live",
    featured: true,
  },
  {
    thumbnail: "/scintia-callflow.png",
    title: "Scintia Callflow",
    blurb: "AI voice-agent SaaS platform with sales dashboard.",
    desc: "Built the sales-facing portal of a multi-panel AI voice-agent SaaS, delivering dashboards, subscription plan/billing management, call-log workflows, and call analytics tailored to sales teams. Integrated REST and AI voice-agent APIs for authentication, billing, and real-time call analytics with a responsive, intuitive interface.",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "RTK Query", "React Router", "Tailwind CSS"],
    current: "Digimark",
    live: "https://sales.scintiacallflow.ai/",
    featured: true,
  },
  {
    thumbnail: "/watchlytics.jpg",
    title: "Watchlytics",
    blurb: "Multi-channel e-commerce & inventory management SaaS.",
    desc: "A production-grade SaaS dashboard unifying inventory management, market-intelligence (price monitoring, movement analytics, AI-powered deal evaluation, priority alerts), sales & shipping, and financial reporting across 6+ marketplaces — eBay, Shopify, WooCommerce, Chrono24, Bezel, and Facebook. Built the frontend end-to-end: 240+ components, real-time notifications, Stripe checkout, and rich analytics.",
    stack: ["Next.js 15", "React 19", "TypeScript", "TanStack Query", "Tailwind CSS", "HeroUI", "Firebase", "Stripe"],
    current: "Zweidevs",
    live: "https://watchlytics.io/",
    featured: true,
  },
  {
    thumbnail: "/docsify.png",
    title: "Docsify",
    blurb: "AI-powered multi-format document translation app.",
    desc: "An AI-powered web app that translates documents across formats — PDF, DOCX, and TXT — into multiple languages. Built the responsive frontend with file-upload workflows, dynamic rendering of translation results, and a clean, guided UI, integrating third-party AI translation APIs with format-aware upload and result-rendering pipelines.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Translation APIs"],
    current: "Zweidevs",
    live: "https://docsify.io/",
    featured: true,
  },
  {
    thumbnail: "/mallshark.png",
    title: "Mall Shark",
    blurb: "E-commerce marketplace connecting buyers and sellers.",
    desc: "An e-commerce marketplace platform designed to make online buying and selling effortless for both buyers and sellers. Built responsive interfaces and reusable components for a smooth, hassle-free shopping experience.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://mallshark.com",
    current: "Disruptive Effects",
  },
  {
    thumbnail: "/mycloudclo.png",
    title: "Mycloudclo",
    blurb: "On-demand closet storage, managed from your phone.",
    desc: "The ultimate closet solution — convenient clothing storage for seasonal clothes and closet overflow, managed right from your phone. Built the frontend for subscriptions, metered usage, dunning, and VAT invoicing flows.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://mycloudclo.com",
  },
  {
    thumbnail: "/gnizzel.png",
    title: "Gnizzel",
    blurb: "Marketplace for clinics to find new patients.",
    desc: "A marketplace connecting clinics with new patients. Clinics can offer deals and publish available times, including last-minute appointments. Built responsive, accessible booking interfaces and reusable UI components.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://www.gnizzel.com/",
  },
];

export const EXPERIENCE = [
  {
    company: "Digimark",
    role: "Senior Frontend Engineer",
    period: "2025 — Present",
    desc: "Lead frontend development of production SaaS platforms with Next.js, React, and TypeScript — including an AI voice-agent product and an enterprise operations suite for international clients. Build AI-integrated, multi-panel interfaces with role-based access, analytics, and reusable component systems.",
  },
  {
    company: "Zweidevs",
    role: "Frontend Engineer",
    period: "2023 — 2025",
    desc: "Built scalable frontends for SaaS products with React, Next.js, and TypeScript — owning UI architecture, state management, and REST/AI API integration. Engineered complex, data-heavy interfaces: dashboards, marketplace integrations, and analytics views using Redux Toolkit, RTK Query, and TanStack Query.",
  },
  {
    company: "Disruptive Effects",
    role: "Frontend Developer",
    period: "2021 — 2023",
    desc: "Built and shipped production web applications with React, Next.js, and TypeScript — developing responsive, reusable component libraries and cross-browser-compatible, accessible interfaces, and optimizing frontend performance.",
  },
  {
    company: "B.S. Software Engineering",
    role: "Government College University Faisalabad (GCUF)",
    period: "2016 — 2020",
    desc: "Graduated with a focus on web systems and human-computer interaction.",
  },
];

export const SKILLS = [
  { group: "Core", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS"] },
  { group: "State & Data", items: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand", "React Hook Form", "Zod"] },
  { group: "UI & Styling", items: ["Tailwind CSS", "Material UI", "Radix UI", "shadcn/ui", "HeroUI", "Framer Motion"] },
  { group: "Integrations", items: ["REST APIs", "AI / LLM APIs", "Stripe", "Firebase", "Recharts", "Axios"] },
  { group: "Craft", items: ["Responsive Design", "WCAG Accessibility", "Performance", "SSR / SSG", "Figma-to-Code"] },
];

export const SERVICES = [
  { title: "Frontend Engineering", desc: "Design systems, reusable component libraries, pixel-accurate Figma-to-code, and delightful micro-interactions." },
  { title: "AI-Integrated UIs", desc: "Interfaces built around LLM, voice-agent, and document-AI APIs — the frontend layer that makes AI usable." },
  { title: "Performance & Accessibility", desc: "Fast, WCAG-aligned, cross-browser apps: code splitting, lazy loading, SSR/SSG, and Core Web Vitals." },
];

