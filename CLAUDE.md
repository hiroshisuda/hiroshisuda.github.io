# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev        # Start dev server (Vite)
bun run build      # Type-check + production build
bun run lint       # Run ESLint
bun run preview    # Preview production build
bun run type-check # Type-check only (no emit)
```

Scripts run through bun runtime via `bunfig.toml`.

## Architecture

This is a single-page personal resume/portfolio site built with React 19, TypeScript, and Tailwind CSS v4 (via `@tailwindcss/vite` plugin).

**Data flow:** All resume content lives in `src/data/resume.ts` as a typed `ResumeData` object. `App.tsx` imports this and passes slices as props to each section component. To update content, edit only `src/data/resume.ts`.

**Key files:**

- `src/data/resume.ts` — single source of truth for all resume content
- `src/types/resume.ts` — TypeScript interfaces (`ResumeData`, `ExperienceEntry`, `SkillGroup`, etc.)
- `src/hooks/useDarkMode.ts` — dark mode toggle with theme persistence
- `src/components/BrandIcons.tsx` — inline SVG brand icons (not from lucide-react, which deprecated brand icons)

**Styling:** Tailwind CSS v4. Dark mode uses the `dark:` variant class strategy driven by `useDarkMode`.

**Deployment:** GitHub Pages (`hiroshisuda.github.io`). Push to `main` deploys.
