# kwrglb

Website built with [Astro](https://astro.build) + [Preact](https://preactjs.com) islands.
All text is placeholder for now; project cover art is generated from each project's `palette` until real photos are added.

## Change the text

Almost everything lives in **`src/data/site.ts`**: site name, menu, projects, blog posts, jobs.
Edit it right here on GitHub (pencil icon) and commit.

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Projects | `src/pages/projects.astro` (cards + filter: `src/components/ProjectsList.tsx`) |
| One project | `src/pages/projects/[slug].astro` (text comes from `src/data/site.ts`) |
| Lab | `src/pages/lab.astro` |
| Careers | `src/pages/careers.astro` |
| Blog | `src/pages/blog/` |
| Contact | `src/pages/contact.astro` |
| Header, menu, search | `src/components/Header.astro`, `src/components/Search.tsx` |
| Colors and fonts | `src/styles/global.css` |

## Run it on your computer

```bash
npm install
npm run dev      # http://localhost:4321/kwrglb/
npm run build    # static site in dist/
```
