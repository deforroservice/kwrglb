// Generated "topographic" line art used as placeholder imagery.

function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// fade: lines fade in towards the bottom-right corner instead of covering the whole area.
type Options = { stroke: string; opacity?: number; lines?: number; width?: number; height?: number; fade?: boolean };

export function wavesSvg(seed: number, { stroke, opacity = 0.6, lines = 28, width = 600, height = 400, fade = false }: Options): string {
  const r = rng(seed);
  const f1 = 0.006 + r() * 0.006;
  const f2 = 0.012 + r() * 0.01;
  const p1 = r() * Math.PI * 2;
  const p2 = r() * Math.PI * 2;
  const peak = width * (0.45 + r() * 0.4);
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const t = i / (lines - 1);
    const base = height * (0.25 + t * 0.85);
    const amp = height * (0.08 + 0.3 * (1 - t));
    let d = '';
    for (let x = -20; x <= width + 20; x += 12) {
      const bump = Math.exp(-(((x - peak) / (width * 0.28)) ** 2));
      const y = base - amp * bump + Math.sin(x * f1 + p1 + t * 1.6) * amp * 0.25 + Math.sin(x * f2 + p2 + t * 3) * amp * 0.08;
      d += (d ? 'L' : 'M') + x.toFixed(0) + ' ' + y.toFixed(1);
    }
    paths.push(`<path d="${d}"/>`);
  }
  const paint = fade ? 'url(#f)' : stroke;
  const defs = fade
    ? `<defs><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="${width * 0.45}" y1="${height * 0.2}" x2="${width}" y2="${height}"><stop offset="0" stop-color="${stroke}" stop-opacity="0"/><stop offset="1" stop-color="${stroke}" stop-opacity="${opacity}"/></linearGradient></defs>`
    : '';
  const strokeOpacity = fade ? 1 : opacity;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="${fade ? 'xMaxYMax' : 'xMidYMid'} slice">${defs}<g fill="none" stroke="${paint}" stroke-opacity="${strokeOpacity}" stroke-width="1">${paths.join('')}</g></svg>`;
}

export function wavesUrl(seed: number, opts: Options): string {
  return `url("data:image/svg+xml,${encodeURIComponent(wavesSvg(seed, opts))}")`;
}

// Light card cover: soft green lines on a pale background.
export function cardCover(seed: number): string {
  return `${wavesUrl(seed, { stroke: '#3fae86', opacity: 0.55 })} center / cover no-repeat, linear-gradient(180deg, #eef4f2, #e3ece9)`;
}

// Dark band: faint green lines in the bottom-right corner, fading into plain deep teal.
export function darkCover(seed: number): string {
  return `${wavesUrl(seed, { stroke: '#6ED3A4', opacity: 0.4, lines: 18, width: 1200, height: 400, fade: true })} right bottom / cover no-repeat, linear-gradient(120deg, #1a4256 0%, #1E4A5F 55%, #2c5a6c 100%)`;
}
