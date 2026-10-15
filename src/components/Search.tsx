import { useEffect, useMemo, useRef, useState } from 'preact/hooks';

type Item = { title: string; kind: string; href: string; text: string };

export default function Search({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) input.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return items
      .filter((i) => (i.title + ' ' + i.text).toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, items]);

  return (
    <>
      <button class="search-trigger" type="button" aria-label="Search" onClick={() => setOpen(true)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" stroke-linecap="round" />
        </svg>
      </button>
      {open && (
        <div class="search-overlay" role="dialog" aria-modal="true" aria-label="Search" onClick={() => setOpen(false)}>
          <div class="search-panel" onClick={(e) => e.stopPropagation()}>
            <input
              ref={input}
              type="search"
              placeholder="Search projects, posts and pages"
              value={query}
              onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
            <ul>
              {results.map((r) => (
                <li key={r.href}>
                  <a href={r.href}>
                    <span class="kind">{r.kind}</span>
                    {r.title}
                  </a>
                </li>
              ))}
              {query && results.length === 0 && <li class="empty">No results</li>}
            </ul>
          </div>
        </div>
      )}
      <style>{`
        .search-trigger { display:grid; place-items:center; width:40px; height:40px; border:0; border-radius:999px; background:transparent; color:inherit; cursor:pointer; }
        .search-trigger:hover { background: var(--accent-soft); }
        .search-overlay { position:fixed; inset:0; z-index:50; background:rgba(0,0,0,.35); display:flex; justify-content:center; align-items:flex-start; padding:80px 16px 16px; }
        .search-panel { width:100%; max-width:560px; background:var(--surface); border-radius:var(--radius); padding:12px; box-shadow:0 20px 50px rgba(0,0,0,.2); }
        .search-panel input { width:100%; font:inherit; font-size:1.05rem; padding:12px 14px; border:1px solid var(--line); border-radius:10px; background:var(--bg); color:var(--text); }
        .search-panel ul { list-style:none; margin:8px 0 0; padding:0; }
        .search-panel a { display:flex; gap:10px; align-items:baseline; padding:10px 12px; border-radius:8px; text-decoration:none; }
        .search-panel a:hover { background:var(--accent-soft); }
        .search-panel .kind { font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; color:var(--muted); min-width:64px; }
        .search-panel .empty { padding:10px 12px; color:var(--muted); }
      `}</style>
    </>
  );
}
