// Prefix internal links with the site's base path (/kwrglb/ on GitHub Pages).
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
