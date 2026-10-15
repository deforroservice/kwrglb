// Placeholder content. Replace everything here with real kwrglb text.

export const site = {
  name: 'kwrglb',
  tagline: 'A small lab for big, unfinished ideas.',
  email: 'hello@example.com',
};

export const nav = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Lab', href: 'lab/' },
  { label: 'Careers', href: 'careers/' },
  { label: 'Blog', href: 'blog/' },
  { label: 'Contact', href: 'contact/' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/deforroservice' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: 'Current' | 'Graduated';
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  // Three colors for the generated cover art (until real photos exist).
  palette: [string, string, string];
};

const sampleSections = [
  {
    heading: 'Placeholder: the problem',
    paragraphs: [
      'Placeholder paragraph describing the problem this project tackles and why it matters now.',
      'A second placeholder paragraph with a little more context. Keep paragraphs short so they read well on a phone.',
    ],
  },
  {
    heading: 'Placeholder: the approach',
    paragraphs: ['Placeholder paragraph explaining the idea, what has been tried, and what is being built next.'],
  },
];

export const projects: Project[] = [
  {
    slug: 'project-alpha',
    name: 'Project Alpha',
    tagline: 'Placeholder tagline: one line that says what the project changes',
    status: 'Current',
    intro: 'Placeholder intro. Two or three sentences that explain the mission of the project and who it is for. If you are interested in working together, reach out.',
    sections: sampleSections,
    palette: ['#0f4c45', '#2fa58f', '#bfe9dc'],
  },
  {
    slug: 'project-beta',
    name: 'Project Beta',
    tagline: 'Placeholder tagline for the second project',
    status: 'Current',
    intro: 'Placeholder intro for Project Beta.',
    sections: sampleSections,
    palette: ['#3a1f12', '#d9733b', '#f6c89f'],
  },
  {
    slug: 'project-gamma',
    name: 'Project Gamma',
    tagline: 'Placeholder tagline for the third project',
    status: 'Current',
    intro: 'Placeholder intro for Project Gamma.',
    sections: sampleSections,
    palette: ['#141a3a', '#4b5bd6', '#c9d0ff'],
  },
  {
    slug: 'project-delta',
    name: 'Project Delta',
    tagline: 'Placeholder tagline for the fourth project',
    status: 'Graduated',
    intro: 'Placeholder intro for Project Delta.',
    sections: sampleSections,
    palette: ['#050505', '#20364f', '#e8b04a'],
  },
  {
    slug: 'project-epsilon',
    name: 'Project Epsilon',
    tagline: 'Placeholder tagline for the fifth project',
    status: 'Graduated',
    intro: 'Placeholder intro for Project Epsilon.',
    sections: sampleSections,
    palette: ['#2b2350', '#8e7fd8', '#eef0f7'],
  },
  {
    slug: 'project-zeta',
    name: 'Project Zeta',
    tagline: 'Placeholder tagline for the sixth project',
    status: 'Current',
    intro: 'Placeholder intro for Project Zeta.',
    sections: sampleSections,
    palette: ['#5fa6c4', '#cfe7f0', '#c99a6b'],
  },
];

// Abstract cover art made from the project's palette. Swap for real photos later.
export function coverStyle([a, b, c]: Project['palette']): string {
  return [
    `radial-gradient(60% 50% at 75% 80%, ${c} 0%, transparent 70%)`,
    `radial-gradient(70% 60% at 20% 30%, ${b} 0%, transparent 70%)`,
    `linear-gradient(160deg, ${a} 0%, ${b} 140%)`,
  ].join(', ');
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Placeholder post: why we started',
    date: '2026-10-01',
    excerpt: 'A short teaser for the post goes here.',
    body: [
      'This is placeholder text for the first paragraph of a blog post.',
      'Replace it with your own writing. Each string in this list becomes one paragraph.',
    ],
  },
  {
    slug: 'notes-from-the-lab',
    title: 'Placeholder post: notes from the lab',
    date: '2026-09-15',
    excerpt: 'Another short teaser.',
    body: ['Placeholder paragraph one.', 'Placeholder paragraph two.'],
  },
];

export const jobs = [
  { title: 'Placeholder role: Engineer', place: 'Remote', type: 'Full-time' },
  { title: 'Placeholder role: Designer', place: 'Remote', type: 'Contract' },
];
