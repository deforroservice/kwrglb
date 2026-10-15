import { useState } from 'preact/hooks';
import { coverStyle, type Project } from '../data/site';
import { url } from '../lib/url';

const FILTERS = [
  { value: 'All', label: 'All Projects' },
  { value: 'Current', label: 'Current Projects' },
  { value: 'Graduated', label: 'Graduated Projects' },
];

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All');
  const shown = projects.filter((p) => filter === 'All' || p.status === filter);

  return (
    <div class="plist">
      <label class="filter">
        <span class="sr-only">Show</span>
        <select value={filter} onChange={(e) => setFilter((e.target as HTMLSelectElement).value)}>
          {FILTERS.map((f) => (
            <option value={f.value}>{f.label}</option>
          ))}
        </select>
      </label>

      <ul class="cards">
        {shown.map((p) => (
          <li key={p.slug}>
            <a class="card" href={url(`projects/${p.slug}/`)} style={{ backgroundImage: coverStyle(p.palette) }}>
              <span class="title">{p.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        .plist .filter select {
          appearance: none; -webkit-appearance: none;
          font: inherit; font-size: 13px; font-weight: 500; line-height: 24px;
          padding: 0 36px 0 14px; border: 0; border-radius: 25px;
          background: #000 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23fff' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") no-repeat right 14px center;
          color: #fff; cursor: pointer;
        }
        .plist .filter select option { color: #000; background: #fff; }
        .plist .cards {
          list-style: none; margin: 36px 0 0; padding: 0;
          display: grid; gap: 16px; grid-template-columns: 1fr;
        }
        @media (min-width: 560px) { .plist .cards { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .plist .cards { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
        .plist .card {
          position: relative; display: block; aspect-ratio: 345 / 439;
          border-radius: 8px; overflow: hidden; text-decoration: none;
          background-size: cover; background-position: center;
          transition: transform .3s ease;
        }
        .plist .card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 35%);
        }
        .plist .card:hover { transform: translateY(-4px); }
        .plist .title {
          position: absolute; top: 20px; left: 20px; right: 20px;
          color: #fafafa; font-size: 20px; line-height: 22px;
        }
      `}</style>
    </div>
  );
}
