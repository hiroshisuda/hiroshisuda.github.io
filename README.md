# hiroshisuda.github.io

Personal portfolio site for Hiroshi Suda, Senior Software Engineer. Live at [hiroshisuda.com](https://hiroshisuda.com).

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — styling with dark/light mode support
- **Bun** — package manager and runtime
- **GitHub Actions** — automated deployment to GitHub Pages

## Development

```bash
bun install
bun dev
```

## Build

```bash
bun run build     # type-check + production build
bun run preview   # preview the production build locally
```

## Updating Content

All resume content lives in a single file: **`src/data/resume.ts`**

To add a new job, append an entry to the `experience` array:

```ts
{
  company: 'Company Name',
  title: 'Job Title',
  period: 'Jan 2026 – Present',
  bullets: [
    'Did X using Y.',
    'Built Z.',
  ],
},
```

The TypeScript interfaces in `src/types/resume.ts` enforce the shape of all data — missing or mistyped fields will be caught at compile time.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Type-checks with `tsc`
2. Builds with Vite
3. Deploys the `dist/` directory to GitHub Pages

## Custom Domain

The `public/CNAME` file sets the custom domain to `hiroshisuda.com`. DNS is configured at the registrar with `A` records pointing to GitHub Pages IPs:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

HTTPS is enforced via the GitHub Pages settings.
