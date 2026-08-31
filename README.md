# Sam Aditya — Portfolio

A personal portfolio site scaffolded in the style of [Brittany Chiang v4](https://v4.brittanychiang.com/). Built with React + TypeScript + Vite, with a warm/amber light + dark theme and a dark/light mode toggle.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
npm run preview  # preview production build
```

## Project structure

```
src/
├── data.ts               # ALL site content (name, hero, about, experience, work, contact, social, nav/resume)
├── App.tsx               # page composition
├── main.tsx              # entry
├── index.css             # design tokens + themes + global base styles
├── assets/               # dp.jpeg, logo.png, SamAdityaCV.pdf
├── hooks/
│   ├── useTheme.ts               # dark/light theme state + persistence
│   └── usePrefersReducedMotion.ts
└── components/           # each component has a paired .tsx + .css
    ├── Loader.tsx         # startup loader animation
    ├── Nav.tsx            # fixed header + mobile hamburger menu
    ├── ThemeToggle.tsx    # dark/light toggle
    ├── Side.tsx           # left social + right email side rails
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx     # jobs with tab switcher
    ├── Work.tsx           # featured + other projects
    ├── Contact.tsx
    ├── Footer.tsx
    ├── Logo.tsx
    └── SectionHeading.tsx
```

## Theming

- Design tokens (colors, fonts, spacing) live under `:root` in `src/index.css`, alongside the theme blocks: `:root[data-theme='dark']`, `:root[data-theme='light']`, and a `@media (prefers-color-scheme: light)` fallback. All three must stay in sync.
- Warm/amber semantic tokens: `--bg-950/900/800/700`, `--bg-scrolled`, `--text-heading/body/muted/secondary/strong`, `--accent`, `--accent-tint`, etc.
- The theme is driven by `src/hooks/useTheme.ts`, which reads `localStorage['theme']`, falls back to the OS preference via `matchMedia`, and sets `data-theme` on `<html>`. A FOUC-prevention script lives in `index.html`.
- `Nav.tsx` renders the nav inline-styled; the center nav, Resume button, and theme toggle are vertically centered in the fixed header.

## Making changes

All content (headings, paragraph text, jobs, projects, skills, social links, email, resume URL) lives in **`src/data.ts`** — edit it there and the site updates.

- **Colors / fonts / spacing** → `:root` variables in `src/index.css`.
- **Profile photo (About section)** → `src/assets/dp.jpeg`. It displays in grayscale with a warm sepia tint and shows full color on hover (see `src/components/About.css`).
- **Resume PDF** → `src/assets/SamAdityaCV.pdf`, wired via `siteConfig.nav.resumeUrl`.
- Individual component styles live in each component's `.css` file (e.g. `Nav.css`, `Hero.css`, `About.css`).
