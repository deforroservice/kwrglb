// Placeholder content. Replace everything here with real Kwarg Lab text.

export const site = {
  name: 'Kwarg Lab',
  tagline: 'Research and technology for a more human and sustainable future.',
  motto: 'Ideas for a brighter tomorrow',
  email: 'hello@example.com',
};

export const nav = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Publications', href: 'publications/' },
  { label: 'Insights', href: 'insights/' },
  { label: 'Partners', href: 'partners/' },
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
      { label: 'Projects', href: 'projects/' },
      { label: 'Publications', href: 'publications/' },
      { label: 'Insights & news', href: 'insights/' },
      { label: 'Partners', href: 'partners/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'About', href: 'about/' },
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

// "What we do" pillars on the home page. icon: research | funding | partners
export const pillars = [
  {
    icon: 'research',
    title: 'Research design',
    text: 'Placeholder: shaping strong research questions, methods and work plans.',
  },
  {
    icon: 'funding',
    title: 'Funding & proposals',
    text: 'Placeholder: finding the right calls and writing competitive proposals.',
  },
  {
    icon: 'partners',
    title: 'Partnerships & consortia',
    text: 'Placeholder: bringing the right institutions and people together.',
  },
] as const;

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Article' | 'Report' | 'Chapter' | 'Dataset';
  href?: string;
};

export const publications: Publication[] = [
  {
    title: 'Placeholder: title of a peer-reviewed article',
    authors: 'Placeholder Author, Second Author',
    venue: 'Placeholder Journal',
    year: 2026,
    type: 'Article',
  },
  {
    title: 'Placeholder: title of a policy or technical report',
    authors: 'Kwarg Lab',
    venue: 'Placeholder Publisher',
    year: 2025,
    type: 'Report',
  },
  {
    title: 'Placeholder: title of an open dataset',
    authors: 'Placeholder Author et al.',
    venue: 'Placeholder Repository',
    year: 2025,
    type: 'Dataset',
  },
];

// Things you helped make happen that are not publications: proposals, tools, events.
export const contributions = [
  { title: 'Placeholder contribution', text: 'Placeholder: one or two sentences on what was done and why it mattered.' },
  { title: 'Placeholder contribution', text: 'Placeholder: e.g. co-wrote a successful funding proposal for a consortium.' },
  { title: 'Placeholder contribution', text: 'Placeholder: e.g. built an open tool used by partner institutions.' },
];

export const partners = [
  { name: 'Placeholder University', type: 'University', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Institute', type: 'Research institute', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Foundation', type: 'Funder', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Company', type: 'Industry', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder NGO', type: 'Non-profit', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder City', type: 'Public sector', text: 'Placeholder: what you do together.' },
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
