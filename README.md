# Kwarg Lab website

Website built with [Astro](https://astro.build) + [Preact](https://preactjs.com) islands.
All text is placeholder for now; project images are generated line art (`src/lib/art.ts`) until real images are added.

## Change the text

Almost everything lives in **`src/data/site.ts`**: site name, menu, projects, insights, publications, track record, partners, jobs.
Edit it right here on GitHub (pencil icon) and commit.

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Projects | `src/pages/projects.astro` (cards + filter: `src/components/ProjectsList.tsx`) |
| One project | `src/pages/projects/[slug].astro` (text, key facts and lists come from `src/data/site.ts`) |
| About us (approach, team, track record) | `src/pages/about.astro` |
| Partners (home page section) | `src/pages/index.astro`, data in `src/data/site.ts` |
| Careers | `src/pages/careers.astro` |
| Insights & publications | `src/pages/insights/` |
| Contact | `src/pages/contact.astro` |
| Header, menu, search | `src/components/Header.astro`, `src/components/Search.tsx` |
| Colors, fonts, buttons, chips | `src/styles/global.css` |
| Project cards | `src/components/ProjectCard.tsx`, `src/styles/cards.css` |

## Run it on your computer

```bash
npm install
npm run dev      # http://localhost:4321/kwrglb/
npm run build    # static site in dist/
```
