// Generated "topographic" line art used as placeholder imagery.

function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

type Options = { stroke: string; opacity?: number; lines?: number; width?: number; height?: number };

export function wavesSvg(seed: number, { stroke, opacity = 0.6, lines = 28, width = 600, height = 400 }: Options): string {
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
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="1">${paths.join('')}</g></svg>`;
}

export function wavesUrl(seed: number, opts: Options): string {
  return `url("data:image/svg+xml,${encodeURIComponent(wavesSvg(seed, opts))}")`;
}

// Light card cover: soft green lines on a pale background.
export function cardCover(seed: number): string {
  return `${wavesUrl(seed, { stroke: '#3fae86', opacity: 0.55 })} center / cover no-repeat, linear-gradient(180deg, #eef4f2, #e3ece9)`;
}

// Dark band: green lines on deep teal.
export function darkCover(seed: number): string {
  return `${wavesUrl(seed, { stroke: '#6ED3A4', opacity: 0.35, lines: 40 })} right center / cover no-repeat, linear-gradient(120deg, #173b4c 0%, #1E4A5F 45%, #3F6B7A 100%)`;
}
