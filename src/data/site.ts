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
  { label: 'About us', href: 'about/' },
];

export const socials = [{ label: 'LinkedIn', href: 'https://www.linkedin.com/' }];

export const footerLinks = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Insights & publications', href: 'insights/' },
  { label: 'Partners', href: '#partners' },
  { label: 'About us', href: 'about/' },
];

export const CATEGORIES = ['Funded', 'Research & development', 'Technology partnership'] as const;
export type Category = (typeof CATEGORIES)[number];

export type Project = {
  slug: string;
  name: string;
  category: Category;
  // One or two sentences for the project card.
  summary: string;
  // Key facts shown next to the intro, e.g. partners, funding, location.
  facts: { label: string; value: string }[];
  intro: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: { title?: string; text: string }[] }[];
  // Seed for the generated line-art cover (until real images exist).
  seed: number;
};

// Newest first. The home page shows the first three.
export const projects: Project[] = [
  {
    slug: 'tajikistan-air-quality-monitoring',
    name: 'National Air Quality Monitoring for Tajikistan',
    category: 'Funded',
    summary:
      'A consortium led by Tajik Technical University, with KWARG as partner, won the 2026 EPIC Air Quality Fund to build an open national PM2.5 monitoring network.',
    facts: [
      { label: 'Funding', value: 'EPIC Air Quality Fund, University of Chicago (2026 award)' },
      {
        label: 'Partners',
        value: 'Tajik Technical University (lead), KWARG, Committee for Environmental Protection of Tajikistan, Nebo',
      },
      { label: 'Duration', value: '18 months' },
      { label: 'Location', value: 'Tajikistan' },
    ],
    intro:
      "In 2026, a consortium led by Tajik Technical University (TTU), with KWARG as a project partner, secured funding from the University of Chicago's EPIC Air Quality Fund to advance national air quality monitoring and evidence-based environmental policy in Tajikistan.",
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Tajikistan faces significant air pollution challenges, while the limited availability of reliable, publicly accessible monitoring data constrains research, environmental management and regulatory decision-making.',
          'Closing this gap takes more than additional measurements. It requires a coordinated national monitoring infrastructure that turns environmental data into actionable scientific and policy evidence.',
        ],
      },
      {
        heading: 'An open national monitoring network',
        paragraphs: [
          'The project aims to establish an open national PM2.5 monitoring network, with 100 ground-level sensors planned across major cities and population centres. Over the 18-month implementation period, the network is designed to generate continuous, geographically distributed air quality measurements, made publicly accessible through a national digital platform.',
        ],
      },
      {
        heading: 'From environmental data to policy',
        paragraphs: [
          "Working with Tajikistan's Committee for Environmental Protection, the consortium aims to build a reliable evidence base for assessing population exposure, identifying pollution hotspots and supporting the review and improvement of national PM2.5 standards.",
          'Near-real-time open data will support researchers, public authorities and citizens, strengthen institutional capacity and improve the transparency of environmental decision-making.',
        ],
      },
      {
        heading: 'Expected impact',
        paragraphs: [
          "The initiative combines TTU's local scientific leadership with KWARG's role in the international research consortium, alongside environmental authorities and technical partners. Its aim reaches beyond installing equipment: a foundation for sustained national air quality observation, stronger use of environmental evidence in regulation, and better-informed clean-air policy.",
          'The EPIC Air Quality Fund award marks an important milestone for the TTU and KWARG collaboration.',
        ],
      },
    ],
    seed: 41,
  },
  {
    slug: 'ethiopia-climate-intelligence',
    name: 'Climate Intelligence & Rainfall Prediction for Ethiopia',
    category: 'Research & development',
    summary:
      'Machine-learning rainfall prediction for the Upper Blue Nile Basin, combining satellite observations, atmospheric data and neural networks.',
    facts: [
      { label: 'Sector', value: 'Climate technology & environmental intelligence' },
      { label: 'Capabilities', value: 'Earth observation, remote sensing, AI & predictive modelling' },
      { label: 'Location', value: 'Ethiopia, Upper Blue Nile Basin' },
      {
        label: 'Partners',
        value:
          'Bahir Dar University (lead), USGS / Famine Early Warning Systems Network (FEWS NET) Ethiopia, Korean Meteorological Agency',
      },
    ],
    intro:
      'KWARG joined an international consortium of climate and technology specialists to improve seasonal rainfall forecasts in Ethiopia, where agriculture, water availability and economic activity are highly sensitive to climate variability. KWARG provided remote sensing and environmental intelligence expertise focused on atmospheric observations.',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          "The Upper Blue Nile Basin is one of East Africa's most important hydrological and agricultural regions, and seasonal rainfall variability has major implications for agricultural planning, water allocation and economic resilience.",
          'Despite growing satellite and atmospheric data, turning it into reliable regional forecasts remains technically difficult. Conventional approaches struggle to capture the interactions between atmospheric circulation, moisture transport and local precipitation, and gaps in ground observations limit coverage. This hampers early warning systems such as FEWS NET.',
        ],
      },
      {
        heading: 'Our approach',
        paragraphs: [
          'The team developed and evaluated a climate prediction framework that combines satellite-derived precipitation, atmospheric reanalysis and historical climate data in one analytical approach. Artificial neural networks were used to model the relationships between large-scale atmospheric circulation and regional rainfall.',
          'A particular focus was the Tropical Easterly Jet, a key driver of summer rainfall over the basin, which added predictive information beyond conventional precipitation indicators.',
        ],
      },
      {
        heading: 'Outcomes',
        bullets: [
          {
            title: 'Enhanced forecasting methodology',
            text: 'An integrated approach combining Earth observation data, atmospheric indicators and neural network modelling.',
          },
          {
            title: 'Validated performance',
            text: 'Model outputs assessed against established precipitation datasets, showing strong agreement with reference observations.',
          },
          {
            title: 'Transferable knowledge',
            text: 'Methods relevant to other regions with high climate variability and limited observations.',
          },
          {
            title: 'International R&D delivery',
            text: 'A collaborative initiative across Africa and Asia, with the methodology published in peer-reviewed literature and ready to hand over to early-warning decision-makers.',
          },
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'Better seasonal rainfall intelligence supports agricultural planning, water resource management and climate risk assessment. While the work focused on methodology and validation rather than operational deployment, it shows how existing Earth observation infrastructure and machine learning can create higher-value climate intelligence in a region where climate impacts are severe and urgent.',
        ],
      },
    ],
    seed: 19,
  },
  {
    slug: 'carbonwatch-digital-infrastructure',
    name: 'Digital Infrastructure for Corporate Climate Accountability',
    category: 'Technology partnership',
    summary:
      "Upgrading CarbonWatch's research platform through external engineering, project financing and delivery management, without building an in-house development team.",
    facts: [
      { label: 'Partner', value: 'CarbonWatch' },
      {
        label: 'Focus',
        value: 'Climate technology, digital transformation, technology partnerships, project financing, software development',
      },
    ],
    intro:
      "CarbonWatch is an independent climate accountability organisation that evaluates corporate emissions reduction commitments, climate strategies and environmental claims. KWARG partnered with CarbonWatch to strengthen and scale its digital infrastructure using external development resources, project management and dedicated project financing.",
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Delivering evidence-based insight on corporate climate performance takes more than strong analysis: it needs reliable digital infrastructure for publishing research, making it accessible and engaging stakeholders. Like many research-intensive organisations, CarbonWatch had limited technical resources and competing budget priorities.',
        ],
      },
      {
        heading: 'Our approach',
        paragraphs: [
          "Rather than building a new platform, the project extended CarbonWatch's existing web infrastructure, preserving continuity while adding new back-end capabilities through a dedicated development engagement.",
        ],
        bullets: [
          {
            title: 'Requirements and scoping',
            text: 'Translating operational needs into software requirements and product definitions, focused on publishing and accessibility of climate research.',
          },
          {
            title: 'Engineering partner identification',
            text: 'Finding external software expertise able to extend the existing web infrastructure.',
          },
          {
            title: 'Project financing',
            text: 'Securing implementation resources through a project-backed arrangement focused on NGO enablement, with significant cost savings.',
          },
          {
            title: 'Delivery management',
            text: 'Coordinating CarbonWatch and the development team throughout, aligning technical work with organisational priorities.',
          },
          {
            title: 'Platform enhancement',
            text: "Implementing new functionality on CarbonWatch's website to publish and present recurring research outputs.",
          },
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          "The project strengthened the digital engine behind CarbonWatch's corporate climate research. CarbonWatch gained access to software engineering resources without a dedicated internal team, while keeping its existing digital assets and workflows.",
          'It showed how targeted technology partnerships and project-backed financing let specialist organisations advance their digital capabilities without large-scale technology investment, a cost-conscious delivery model that can be adapted to similar organisations.',
        ],
      },
    ],
    seed: 11,
  },
  {
    slug: 'tech-to-the-rescue',
    name: 'International Technology Partnerships for Social Impact',
    category: 'Technology partnership',
    summary:
      'With Tech To The Rescue, building a portfolio of AI, data and geospatial projects for nonprofits across Europe, Africa, Asia and Latin America.',
    facts: [
      { label: 'Strategic partner', value: 'Tech To The Rescue' },
      { label: 'Geographic scope', value: 'Europe, Africa, Asia, Latin America' },
      {
        label: 'Focus',
        value: 'AI & data intelligence, climate & sustainability, humanitarian technology, digital transformation, applied R&D',
      },
    ],
    intro:
      'Tech To The Rescue is an international nonprofit connecting technology companies, research expertise and social-impact organisations. Together we helped nonprofits tackling urgent social challenges turn real-world problems into actionable technology projects, connecting them with the right expertise, partners and development resources.',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Nonprofits often have deep domain expertise, established networks and clear missions, but lack access to the specialised technology needed to modernise operations, unlock the value of their data or build scalable digital solutions.',
          "The partnership brought KWARG's capabilities in AI, data engineering, geospatial intelligence and applied R&D together with Tech To The Rescue's international network. KWARG was one of the leading technology partners, identifying opportunities, coordinating stakeholders, evaluating technical requirements and developing project concepts.",
        ],
      },
      {
        heading: 'Objectives',
        bullets: [
          {
            title: 'Technology access',
            text: 'Connect social-impact organisations with expertise in AI, data analytics, geospatial technology and digital product development.',
          },
          {
            title: 'Project qualification',
            text: 'Assess opportunities by strategic relevance, technical feasibility, resources needed and implementation value.',
          },
          {
            title: 'Cross-sector collaboration',
            text: 'Build working relationships between nonprofits, technology professionals and academic institutions.',
          },
          {
            title: 'Solution pathways',
            text: 'Turn organisational challenges into actionable technical scopes and implementation approaches.',
          },
          {
            title: 'Capacity development',
            text: 'Explore delivery models that make advanced technology expertise accessible to organisations with limited technical capacity.',
          },
        ],
      },
      {
        heading: 'KWARG contributions',
        bullets: [
          {
            text: 'Expertise on satellite observations, geospatial analytics and environmental intelligence for a humanitarian digital platform supporting operational decisions in high environmental-stress regions.',
          },
          {
            text: 'Support for a South African social-impact organisation, assessing an emotionally responsive AI system to help address gender-based violence in schools.',
          },
          {
            text: 'AI-assisted sustainability planning, gamified data collection and community engagement tools for an organisation in South America.',
          },
          {
            text: 'Consulting on financial reporting platforms for organisations combating human trafficking, dashboards for social-support helplines and analytics for service coordination.',
          },
          {
            text: 'A strategic collaboration with HU University of Applied Sciences Utrecht on a three-party delivery model linking nonprofits, KWARG’s technical advisory and project management, and university-based applied R&D.',
          },
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'The partnership produced a portfolio of technology engagements spanning AI systems, environmental intelligence, satellite data, digital service platforms, organisational analytics and sustainability applications. Through structured project selection and consultations, KWARG took opportunities from first identification through technical discovery to digital implementation.',
          'At its core, the partnership helped resource-constrained nonprofits solve real operational challenges, access expertise they could not otherwise afford, and build the digital capabilities to deliver greater impact.',
        ],
      },
    ],
    seed: 7,
  },
  {
    slug: 'wildfire',
    name: 'Wildfire project',
    category: 'Research & development',
    summary: 'Placeholder: project description coming soon.',
    facts: [],
    intro: 'Placeholder: a full description of this project will be added soon.',
    sections: [],
    seed: 29,
  },
  {
    slug: 'nebo-environmental-monitoring',
    name: 'Scientific R&D Leadership for Nebo Air Quality Monitoring',
    category: 'Research & development',
    summary:
      "A long-term scientific partnership that established the credibility of Nebo's low-cost air quality sensors through validation campaigns published in peer-reviewed literature.",
    facts: [
      { label: 'Partner', value: 'Nebo (now Atmy)' },
      {
        label: 'Focus',
        value: 'Air quality monitoring, sensor validation, satellite remote sensing, environmental intelligence',
      },
    ],
    intro:
      "Nebo (now Atmy) is one of the most established low-cost air quality monitoring initiatives, with nearly a decade of experience. As Nebo's long-term scientific strategy partner, KWARG led international R&D and coordinated the comparison, validation and evaluation of its sensors worldwide.",
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Affordable sensors, satellite remote sensing and distributed data systems are reshaping how air quality is measured. But many low-cost monitoring systems have suffered from lower stability and accuracy, raising questions in the scientific and technology communities.',
          'For such systems, credibility has to be earned through rigorous calibration, intercomparison and evaluation against reference instruments and alternative technologies.',
        ],
      },
      {
        heading: 'Our role',
        paragraphs: [
          "KWARG set up a working group of experts from leading universities and meteorological research institutions to design and deliver research on sensor reliability, data quality, remote sensing integration and next-generation monitoring architectures. A central programme benchmarked Nebo's monitoring infrastructure independently against reference-grade observations.",
          'The work connected emerging monitoring solutions with satellite Earth observation and the latest atmospheric research, showing how distributed ground measurements and satellites together can provide reliable environmental intelligence where conventional monitoring is scarce.',
        ],
      },
      {
        heading: 'Results and impact',
        paragraphs: [
          'The research demonstrated the credibility, stability and accuracy of Nebo sensors across varied environmental conditions, giving policymakers evidence that low-cost observations can complement, and in some cases replace, government monitoring networks. Results were published in international peer-reviewed literature and the technology press.',
          'The project also showed how citizen-operated networks and open environmental data can improve the accessibility, transparency and accountability of environmental information, an impact recognised in peer-reviewed literature and World Meteorological Organization annual communications.',
        ],
      },
      {
        heading: 'Strategic value',
        paragraphs: [
          "The partnership showed how scientific leadership can become a strategic innovation capability for technology companies. It expanded Nebo's access to specialised R&D, strengthened the evidence behind its monitoring approach and laid a credible foundation for further development, demonstrating KWARG's model of externally led R&D: building international research partnerships and connecting innovation with the scientific evidence needed for recognition and adoption.",
        ],
      },
    ],
    seed: 3,
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

// About us page team. photo: put an image in public/team/ and set photo: 'team/name.jpg'.
export const team: { name: string; role: string; photo?: string }[] = [
  { name: 'Team member', role: 'Role to be added' },
  { name: 'Team member', role: 'Role to be added' },
  { name: 'Team member', role: 'Role to be added' },
];

export const jobs = [
  { title: 'Placeholder role: Research Engineer', place: 'Remote', type: 'Full-time' },
  { title: 'Placeholder role: Funding Manager', place: 'Remote', type: 'Contract' },
];
