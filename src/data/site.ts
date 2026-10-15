// Placeholder content. Replace everything here with real Kwarg Lab text.

export const site = {
  name: 'Kwarg Lab',
  tagline: 'Research and technology for a more human and sustainable future.',
  motto: 'Ideas for a brighter tomorrow',
  email: 'hello@example.com',
};

export const nav = [
  { label: 'Research', href: 'research/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Insights', href: 'insights/' },
  { label: 'About', href: 'about/' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/deforroservice' },
];

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Research', href: 'research/' },
      { label: 'Projects', href: 'projects/' },
      { label: 'Insights', href: 'insights/' },
      { label: 'About', href: 'about/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: 'insights/' },
      { label: 'Careers', href: 'careers/' },
      { label: 'Contact', href: 'contact/' },
    ],
  },
];

export const CATEGORIES = ['Research', 'In development', 'Funded', 'Partnership', 'Idea'] as const;
export type Category = (typeof CATEGORIES)[number];

export type Project = {
  slug: string;
  name: string;
  category: Category;
  summary: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  // Seed for the generated line-art cover (until real images exist).
  seed: number;
};

const sampleSections = [
  {
    heading: 'Placeholder: the challenge',
    paragraphs: [
      'Placeholder paragraph describing the problem this project tackles and why it matters now.',
      'A second placeholder paragraph with more context. Keep paragraphs short so they read well on a phone.',
    ],
  },
  {
    heading: 'Placeholder: our approach',
    paragraphs: ['Placeholder paragraph explaining the idea, the partners involved, and what comes next.'],
  },
];

export const projects: Project[] = [
  {
    slug: 'climate-and-sustainability',
    name: 'Climate and Sustainability',
    category: 'Research',
    summary: 'Placeholder: tools and expertise for a more resilient planet.',
    intro: 'Placeholder intro. Two or three sentences on the mission of this project and who it serves.',
    sections: sampleSections,
    seed: 3,
  },
  {
    slug: 'research-infrastructures',
    name: 'Research Infrastructures',
    category: 'Funded',
    summary: 'Placeholder: support for complex, multi-partner projects.',
    intro: 'Placeholder intro for this project.',
    sections: sampleSections,
    seed: 11,
  },
  {
    slug: 'global-researchers',
    name: 'Global Researchers',
    category: 'Partnership',
    summary: 'Placeholder: a network connecting researchers across borders.',
    intro: 'Placeholder intro for this project.',
    sections: sampleSections,
    seed: 7,
  },
  {
    slug: 'planetary-systems-modelling',
    name: 'Planetary Systems Modelling',
    category: 'In development',
    summary: 'Placeholder: open tools for a more resilient and regenerative future.',
    intro: 'Placeholder intro for this project.',
    sections: sampleSections,
    seed: 19,
  },
  {
    slug: 'open-data-commons',
    name: 'Open Data Commons',
    category: 'Research',
    summary: 'Placeholder: shared datasets that anyone can build on.',
    intro: 'Placeholder intro for this project.',
    sections: sampleSections,
    seed: 23,
  },
  {
    slug: 'next-idea',
    name: 'The Next Idea',
    category: 'Idea',
    summary: 'Placeholder: an early concept looking for partners.',
    intro: 'Placeholder intro for this project.',
    sections: sampleSections,
    seed: 31,
  },
];

export const stats = [
  { value: '12K+', label: 'Placeholder: researchers in our network' },
  { value: '40+', label: 'Placeholder: partner institutions' },
  { value: '€25M', label: 'Placeholder: funding secured' },
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
    slug: 'turning-complexity-into-clarity',
    title: 'Placeholder: turning complexity into clarity',
    date: '2026-10-01',
    excerpt: 'Placeholder teaser: a practical framework for human-centred systems.',
    body: [
      'This is placeholder text for the first paragraph of a publication.',
      'Replace it with your own writing. Each string in this list becomes one paragraph.',
    ],
  },
  {
    slug: 'notes-from-the-field',
    title: 'Placeholder: notes from the field',
    date: '2026-09-15',
    excerpt: 'Placeholder teaser for a second publication.',
    body: ['Placeholder paragraph one.', 'Placeholder paragraph two.'],
  },
  {
    slug: 'funding-playbook',
    title: 'Placeholder: a funding playbook',
    date: '2026-08-20',
    excerpt: 'Placeholder teaser for a third publication.',
    body: ['Placeholder paragraph one.', 'Placeholder paragraph two.'],
  },
];

export const jobs = [
  { title: 'Placeholder role: Research Engineer', place: 'Remote', type: 'Full-time' },
  { title: 'Placeholder role: Funding Manager', place: 'Remote', type: 'Contract' },
];
