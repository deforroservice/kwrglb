import { useState } from 'preact/hooks';
import { CATEGORIES, type Project } from '../data/site';
import ProjectCard from './ProjectCard';

const TABS = ['All', ...CATEGORIES];

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [tab, setTab] = useState('All');
  const shown = projects.filter((p) => tab === 'All' || p.category === tab);

  return (
    <div class="plist">
      <div class="tabs" role="tablist" aria-label="Filter projects">
        {TABS.map((t) => (
          <button type="button" role="tab" aria-selected={t === tab} class={t === tab ? 'tab on' : 'tab'} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      <ul class="pcard-grid">
        {shown.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p class="none">No projects in this category yet.</p>}

      <style>{`
        .plist .tabs {
          display: flex; overflow-x: auto; margin-bottom: 32px;
          border-bottom: 1px solid var(--line); scrollbar-width: none;
        }
        .plist .tab {
          flex: 0 0 auto; padding: 12px 20px; border: 0; border-bottom: 2px solid transparent;
          margin-bottom: -1px; background: transparent; cursor: pointer;
          font: inherit; font-size: 12px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase;
          color: var(--slate-teal);
        }
        .plist .tab:hover { color: var(--deep-teal); }
        .plist .tab.on { color: var(--deep-teal); border-bottom-color: var(--green); font-weight: 600; }
        .plist .none { color: var(--muted); }
      `}</style>
    </div>
  );
}
