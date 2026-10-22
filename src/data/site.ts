// Site content. Projects, publications, partners and jobs are still placeholders.

export const site = {
  name: 'KWARG LAB',
  slogan: 'Research. Partnerships. Funding.',
  tagline:
    'Advancing international research and innovation through scientific expertise, collaborative project development and lasting institutional partnerships.',
  motto: 'Strong ideas. Meaningful partnerships. Lasting impact.',
  email: 'hello@example.com',
};

export const nav = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Insights', href: 'insights/' },
  // Partners live in a section on the home page.
  { label: 'Partners', href: '#partners' },
  { label: 'About', href: 'about/' },
];

export const socials = [{ label: 'LinkedIn', href: 'https://www.linkedin.com/' }];

export const footerLinks = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Insights & publications', href: 'insights/' },
  { label: 'Partners', href: '#partners' },
  { label: 'About', href: 'about/' },
  { label: 'Careers', href: 'careers/' },
  { label: 'Contact', href: 'contact/' },
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

// "What we do" pillars on the home page. icon: see src/components/Icon.astro
export const pillars = [
  {
    icon: 'research',
    title: 'Funding Intelligence',
    text: 'Identifying and assessing international research and innovation funding opportunities based on programme requirements, scientific relevance, institutional priorities and technical feasibility.',
  },
  {
    icon: 'document',
    title: 'Project & Proposal Development',
    text: 'Transforming research concepts into competitive proposals through structured methodologies, work packages, implementation plans, budgets and coordinated partner contributions.',
  },
  {
    icon: 'partners',
    title: 'Partnerships & Consortia',
    text: 'Building international collaborations between universities, research institutes, NGOs, public institutions and technology companies around complementary expertise and shared objectives.',
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
    authors: 'KWARG',
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

// Home page "Our partners" section. Logos are placeholders until real ones are added
// (put files in public/partners/ and set logo: 'partners/name.svg').
export const partnersIntro =
  'We work with Placeholder University, Placeholder Institute, Placeholder Foundation, Placeholder Company, Placeholder NGO and Placeholder City, bringing together research, industry, funders and the public sector around shared objectives.';

export const partners: { name: string; type: string; text: string; logo?: string }[] = [
  { name: 'Placeholder University', type: 'University', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Institute', type: 'Research institute', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Foundation', type: 'Funder', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder Company', type: 'Industry', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder NGO', type: 'Non-profit', text: 'Placeholder: what you do together.' },
  { name: 'Placeholder City', type: 'Public sector', text: 'Placeholder: what you do together.' },
];

export type Post = {
  slug: string;
  kind: 'Insight' | 'News';
  topic: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

// Article bodies are short drafts; replace with full texts.
export const posts: Post[] = [
  {
    slug: 'finding-the-right-international-research-opportunities',
    kind: 'Insight',
    topic: 'Funding Intelligence',
    title: 'Finding the right international research opportunities',
    date: '2026-10-01',
    excerpt:
      'How research institutions can assess funding programmes, align technical expertise with programme priorities and focus resources on suitable opportunities.',
    body: [
      'Draft: international funding programmes differ widely in scope, eligibility and expected impact. Reading a call carefully, before committing a team to it, is the first step to a credible application.',
      'Draft: the strongest opportunities are those where an institution’s existing expertise meets the programme’s priorities directly, rather than through a stretched interpretation.',
    ],
  },
  {
    slug: 'building-effective-research-consortia',
    kind: 'Insight',
    topic: 'International Partnerships',
    title: 'Building effective research consortia',
    date: '2026-09-15',
    excerpt:
      'Why complementary expertise, well-defined responsibilities and long-term institutional relationships are essential to successful international collaboration.',
    body: [
      'Draft: a consortium is more than a list of partners. Each member should bring something the others cannot, and each role should be clear from the start.',
      'Draft: partnerships built on long-term institutional relationships tend to outlast a single project and lead to stronger proposals over time.',
    ],
  },
  {
    slug: 'from-research-concept-to-competitive-proposal',
    kind: 'Insight',
    topic: 'Project Development',
    title: 'From research concept to competitive proposal',
    date: '2026-08-20',
    excerpt:
      'An examination of how scientific objectives, technical methodologies and implementation planning come together in international research proposals.',
    body: [
      'Draft: a competitive proposal turns a research idea into a plan that evaluators can trust: clear objectives, a sound methodology and a realistic implementation path.',
      'Draft: work packages, budgets and partner contributions should all trace back to the same scientific objectives.',
    ],
  },
];

export const jobs = [
  { title: 'Placeholder role: Research Engineer', place: 'Remote', type: 'Full-time' },
  { title: 'Placeholder role: Funding Manager', place: 'Remote', type: 'Contract' },
];
