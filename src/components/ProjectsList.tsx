import { useMemo, useState } from 'preact/hooks';
import type { Project } from '../data/site';

const STATUSES = ['All', 'Exploring', 'Building', 'Graduated'] as const;

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>('All');
  const [topic, setTopic] = useState('All');

  const topics = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.topics))].sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b))),
    [projects],
  );

  const shown = projects.filter(
    (p) => (status === 'All' || p.status === status) && (topic === 'All' || p.topics.includes(topic)),
  );

  return (
    <div class="plist">
      <div class="filters">
        <div class="chips" role="group" aria-label="Status">
          {STATUSES.map((s) => (
            <button type="button" class={s === status ? 'chip on' : 'chip'} aria-pressed={s === status} onClick={() => setStatus(s)}>
              {s}
            </button>
          ))}
        </div>
        <label class="topic">
          <span class="sr-only">Topic</span>
          <select value={topic} onChange={(e) => setTopic((e.target as HTMLSelectElement).value)}>
            {topics.map((t) => (
              <option value={t}>{t === 'All' ? 'All topics' : t}</option>
            ))}
          </select>
        </label>
      </div>

      <ul class="grid">
        {shown.map((p) => (
          <li class="card" key={p.slug}>
            <span class={'status ' + p.status.toLowerCase()}>{p.status}</span>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div class="tags">
              {p.topics.map((t) => (
                <span>{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p class="none">No projects match these filters.</p>}

      <style>{`
        .plist .filters { display:flex; flex-wrap:wrap; gap:12px; justify-content:space-between; align-items:center; margin-bottom:24px; }
        .plist .chips { display:flex; flex-wrap:wrap; gap:8px; }
        .plist .chip { font:inherit; font-size:.9rem; padding:6px 14px; border-radius:999px; border:1px solid var(--line); background:transparent; color:var(--text); cursor:pointer; }
        .plist .chip.on { background:var(--accent); border-color:var(--accent); color:var(--bg); }
        .plist select { font:inherit; padding:8px 12px; border-radius:10px; border:1px solid var(--line); background:var(--surface); color:var(--text); }
        .plist .grid { list-style:none; margin:0; padding:0; display:grid; gap:16px; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); }
        .plist .card { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:20px; display:flex; flex-direction:column; gap:8px; }
        .plist .card h3 { margin:0; font-size:1.2rem; }
        .plist .card p { margin:0; color:var(--muted); flex:1; }
        .plist .status { align-self:flex-start; font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; padding:2px 10px; border-radius:999px; background:var(--accent-soft); color:var(--accent); }
        .plist .tags { display:flex; flex-wrap:wrap; gap:6px; }
        .plist .tags span { font-size:.8rem; color:var(--muted); border:1px solid var(--line); border-radius:6px; padding:1px 8px; }
        .plist .none { color:var(--muted); }
      `}</style>
    </div>
  );
}
