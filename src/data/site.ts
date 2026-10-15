// Placeholder content. Replace everything here with real kwrglb text.

export const site = {
  name: 'kwrglb',
  tagline: 'A small lab for big, unfinished ideas.',
  email: 'hello@example.com',
};

export const nav = [
  { label: 'Home', href: '' },
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
  summary: string;
  status: 'Exploring' | 'Building' | 'Graduated';
  topics: string[];
};

export const projects: Project[] = [
  {
    slug: 'project-alpha',
    name: 'Project Alpha',
    summary: 'Placeholder summary. One or two sentences about what the project tries to change.',
    status: 'Building',
    topics: ['Energy', 'Hardware'],
  },
  {
    slug: 'project-beta',
    name: 'Project Beta',
    summary: 'Placeholder summary. Describe the problem first, then the idea.',
    status: 'Exploring',
    topics: ['Climate', 'Data'],
  },
  {
    slug: 'project-gamma',
    name: 'Project Gamma',
    summary: 'Placeholder summary. Keep it short enough to read on a phone.',
    status: 'Exploring',
    topics: ['Health', 'AI'],
  },
  {
    slug: 'project-delta',
    name: 'Project Delta',
    summary: 'Placeholder summary. Mention who it helps.',
    status: 'Graduated',
    topics: ['Agriculture', 'Data'],
  },
  {
    slug: 'project-epsilon',
    name: 'Project Epsilon',
    summary: 'Placeholder summary. Say what has been learned so far.',
    status: 'Building',
    topics: ['AI', 'Climate'],
  },
  {
    slug: 'project-zeta',
    name: 'Project Zeta',
    summary: 'Placeholder summary. A sentence on what comes next.',
    status: 'Graduated',
    topics: ['Hardware', 'Health'],
  },
];

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
