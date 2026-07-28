# Portfolio Redesign — What Changed

Aligned to your **Senior Frontend Engineer** CV. Frontend-only positioning, modern animated design.

## Content fixes (accuracy)
- Title: "Full-Stack JavaScript Developer" → **Senior Frontend Engineer**
- Years: 4+ → **5+**
- Removed all backend/Node.js/Express/GraphQL messaging (frontend + AI-integration only)
- Experience corrected to real timeline: **Digimark (2025–Present), Zweidevs (2023–2025), Disruptive Effects (2021–2023)**; removed BitCloud; fixed "Zweivdevs" → "Zweidevs"
- Docsify description fixed: now the **AI document-translation app** (was OSHA text)
- Watchlytics expanded to the real multi-channel commerce description (6+ integrations, 240+ components)
- All 5 projects kept: Watchlytics, Docsify, Mall Shark, Mycloudclo, Gnizzel
- Phone updated to +92 314 1401358; email/GitHub/LinkedIn preserved

## Design upgrades
- New palette: ink navy + paper off-white + indigo→cyan gradient accent
- Space Grotesk (display) + Inter (body) via next/font
- Animated hero: rotating role text, gradient mesh, staggered load-in
- Scroll-reveal on every section (IntersectionObserver, no heavy libraries)
- Interactive project cards: hover lift, image zoom, sheen, click-to-open modal with full description + stack + live link
- New **Skills** section (frontend toolkit) and refreshed timeline/About
- Redesigned contact card with gradient panel
- Dark/light mode, mobile menu, keyboard-accessible modal, reduced-motion support

## Dependencies
No new dependencies added. Uses your existing Next.js 15 + React 19 + Tailwind + Formspree.

## Run it
    npm install
    npm run dev

Everything is data-driven from `app/data/site.ts` — edit copy, projects, and experience there.
