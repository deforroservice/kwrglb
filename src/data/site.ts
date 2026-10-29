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

export const CATEGORIES = ['Project', 'Partnership'] as const;
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
    category: 'Project',
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
    category: 'Project',
    summary:
      'Machine-learning rainfall prediction for the Upper Blue Nile Basin, combining satellite observations, atmospheric data and neural networks.',
    facts: [
      { label: 'Sector', value: 'Climate technology & environmental intelligence' },
      { label: 'Capabilities', value: 'Earth observation, remote sensing, AI & predictive modelling' },
      { label: 'Location', value: 'Ethiopia, Upper Blue Nile Basin' },
      {
        label: 'Partners',
        value:
          'Bahir Dar University (lead), USGS / Famine Early Warning Systems Network (FEWS NET) Ethiopia, Korea Meteorological Administration',
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
    slug: 'carbon-market-watch-digital-infrastructure',
    name: 'Digital Infrastructure for Corporate Climate Accountability',
    category: 'Partnership',
    summary:
      "Upgrading Carbon Market Watch's research platform through external engineering, project financing and delivery management, without building an in-house development team.",
    facts: [
      { label: 'Partner', value: 'Carbon Market Watch' },
      {
        label: 'Focus',
        value: 'Climate technology, digital transformation, technology partnerships, project financing, software development',
      },
    ],
    intro:
      "Carbon Market Watch is an independent climate accountability organisation that evaluates corporate emissions reduction commitments, climate strategies and environmental claims. KWARG partnered with Carbon Market Watch to strengthen and scale its digital infrastructure using external development resources, project management and dedicated project financing.",
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Delivering evidence-based insight on corporate climate performance takes more than strong analysis: it needs reliable digital infrastructure for publishing research, making it accessible and engaging stakeholders. Like many research-intensive organisations, Carbon Market Watch had limited technical resources and competing budget priorities.',
        ],
      },
      {
        heading: 'Our approach',
        paragraphs: [
          "Rather than building a new platform, the project extended Carbon Market Watch's existing web infrastructure, preserving continuity while adding new back-end capabilities through a dedicated development engagement.",
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
            text: 'Coordinating Carbon Market Watch and the development team throughout, aligning technical work with organisational priorities.',
          },
          {
            title: 'Platform enhancement',
            text: "Implementing new functionality on Carbon Market Watch's website to publish and present recurring research outputs.",
          },
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          "The project strengthened the digital engine behind Carbon Market Watch's corporate climate research. Carbon Market Watch gained access to software engineering resources without a dedicated internal team, while keeping its existing digital assets and workflows.",
          'It showed how targeted technology partnerships and project-backed financing let specialist organisations advance their digital capabilities without large-scale technology investment, a cost-conscious delivery model that can be adapted to similar organisations.',
        ],
      },
    ],
    seed: 11,
  },
  {
    slug: 'tech-to-the-rescue',
    name: 'International Technology Partnerships for Social Impact',
    category: 'Partnership',
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
    slug: 'wildfire-policy-environmental-intelligence',
    name: 'Strengthening Wildfire Policy Through Environmental Intelligence',
    category: 'Project',
    summary:
      'An internationally funded project, initiated and led by KWARG, that used satellite data to measure how well wildfire policies match real fire risk in post-USSR countries.',
    facts: [
      { label: 'Focus', value: 'Environmental risk management, data-driven decision support, public policy' },
      { label: 'Programme', value: 'Climate Connect initiatives' },
      { label: 'Region', value: 'Post-USSR countries, including Siberia' },
      { label: 'Team', value: 'Specialists across three countries, led by KWARG' },
      { label: 'Published in', value: 'European Journal of Environmental Sciences' },
    ],
    intro:
      'Large-scale wildfires create major economic, environmental and operational challenges for public authorities. Yet decisions on where to intervene, how to allocate firefighting resources and which territories to prioritise are often shaped by fixed administrative rules rather than up-to-date risk information. KWARG initiated and led an internationally funded project to close this gap between environmental risk on the ground and the policies used to manage it.',
    sections: [
      {
        heading: 'The aim',
        paragraphs: [
          "Developed under the Climate Connect initiatives, the project focused on using environmental data and intelligence to close gaps in decision-making in emerging economies in wildfire-prone regions.",
          'Its main aim was to show that environmental intelligence and alternative data can evaluate policy and regulatory decisions independently: here, to make the consequences of existing wildfire management policies measurable, find where they fall short and provide evidence for improving them.',
        ],
      },
      {
        heading: 'What KWARG delivered',
        paragraphs: [
          'KWARG led the project from initial concept to delivery, responsible for project design, international team coordination, methodology development and the core analytical findings. The focus was on getting more decision-making value from information public institutions already have.',
          'KWARG connected satellite-based wildfire monitoring with official forest inventory records and regulatory frameworks in post-USSR countries. This made it possible to assess how existing intervention policies, such as the new Forest Laws, performed against the actual scale, location and intensity of wildfires.',
          'The analysis turned complex environmental information into clear management insights: the consequences of current intervention thresholds, gaps in risk coverage and opportunities to prioritise resources better, giving an independent basis for more transparent, risk-informed wildfire policy.',
        ],
      },
      {
        heading: 'Key findings',
        paragraphs: [
          'The project uncovered significant blind spots in forest policy. During the major 2019 wildfire season in Siberia, between 60% and 98% of the reported fire-affected area, depending on the day, lay in territories where active firefighting could legally be withheld. At the peak of the season on 2 August 2019, these zones accounted for 96% of the area on fire: 3,012,082 of 3,134,128 hectares.',
          'Given the large share of the world’s forests under post-USSR jurisdiction, the work linked policy choices to disastrous environmental events and their implications for global warming. It turned a governance problem that was hard to quantify into measurable evidence, supporting a review of intervention criteria, management boundaries and the balance between suppression costs and environmental exposure.',
        ],
      },
      {
        heading: 'Outcomes',
        bullets: [
          {
            title: 'Policy intelligence',
            text: 'Quantified the consequences of existing wildfire management rules and identified gaps that need policy attention.',
          },
          {
            title: 'Decision-support methodology',
            text: 'Showed how existing environmental intelligence, official inventory and media monitoring data can support more transparent risk assessment and resource allocation.',
          },
          {
            title: 'International project delivery',
            text: 'Brought together specialists across three countries, with independently reviewed findings published in the European Journal of Environmental Sciences.',
          },
        ],
      },
      {
        heading: 'Strategic value',
        paragraphs: [
          'The project shows how targeted international expertise and existing data infrastructure can solve decision-making problems without large-scale investment in new monitoring systems. For KWARG, it underlines our ability to originate, lead and deliver internationally supported projects that turn environmental data into practical evidence for better public policy, institutional accountability and natural resource management.',
        ],
      },
    ],
    seed: 29,
  },
  {
    slug: 'nebo-environmental-monitoring',
    name: 'Scientific R&D Leadership for Nebo Air Quality Monitoring',
    category: 'Project',
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
  // Thumbnail shown on the card (path under public/).
  cover?: string;
};

// Peer-reviewed publications. Add more as they come in.
export const publications: Publication[] = [
  {
    title: 'Siberian Wildfire Dilemma: Controlling the Uncontrollable?',
    authors: 'Labzovskii L, Belikov D, Chang DY, Hekman E',
    venue: 'European Journal of Environmental Sciences 14(2): 72–78',
    year: 2024,
    type: 'Article',
    href: 'https://doi.org/10.14712/23361964.2024.8',
    cover: 'insights/siberia-fig2.webp',
  },
];

// Home page "Our partners & collaborations" section: logo + name, in this order.
// Logos live in public/partners/.
export const partnersIntro =
  'We work with universities, research institutes, public agencies, NGOs and technology companies across Europe, Africa and Asia. These partnerships and collaborations bring research, industry and the public sector together around shared objectives.';

export const partners: { name: string; logo: string }[] = [
  { name: 'HU University of Applied Sciences Utrecht', logo: 'partners/hu-utrecht.webp' },
  { name: 'Nebo Air Quality Monitoring Services', logo: 'partners/nebo.webp' },
  { name: 'Tajik Technical University named after Academician M.S. Osimi (TTU)', logo: 'partners/tajik-technical-university.webp' },
  { name: 'Tech To The Rescue', logo: 'partners/tech-to-the-rescue.webp' },
  { name: 'The Hong Kong University of Science and Technology (HKUST)', logo: 'partners/hkust.webp' },
  { name: 'Deforro EUDR Compliance Monitoring Service', logo: 'partners/deforro.webp' },
  { name: 'Korea Meteorological Administration', logo: 'partners/korea-meteorological-administration.webp' },
  { name: 'Seoul National University', logo: 'partners/seoul-national-university.webp' },
  { name: 'Bahir Dar University', logo: 'partners/bahir-dar-university.webp' },
  { name: 'Carbon Market Watch', logo: 'partners/carbon-market-watch.webp' },
];

export type Post = {
  slug: string;
  kind: 'Insight' | 'News';
  topic: string;
  title: string;
  date: string;
  excerpt: string;
  // Paragraphs; a line starting with "## " becomes a subheading.
  body: string[];
  // Thumbnail on cards and the image at the top of the article (path under public/).
  cover: string;
  coverAlt: string;
  // Images placed inside the article, after paragraph number `after` (0-based, counting headings too).
  figures?: { after: number; src: string; alt: string; caption: string }[];
  // Optional link to the original source (paper, report).
  link?: { label: string; href: string };
};

// Newest first on the site (sorted by date).
export const posts: Post[] = [
  {
    slug: 'wmo-report-cites-kwarg-nebo-air-quality-research',
    kind: 'News',
    topic: 'Air quality monitoring',
    title: 'WMO report features our Nebo air quality research',
    date: '2026-10-29',
    excerpt:
      'A World Meteorological Organization report on low-cost sensor networks cites KWARG’s research with Nebo as an example of cost-effective air quality monitoring.',
    cover: 'insights/air-quality-cover.svg',
    coverAlt: 'Illustration of a city-wide network of air quality sensors linked to a reference station and a satellite pass',
    body: [
      'Affordable air quality sensors have changed who can measure the air. Cities, communities and companies can now run dense monitoring networks at a fraction of the cost of official stations. But one question has followed this technology from the start: can its data be trusted?',
      'For nearly a decade, KWARG has worked on exactly that question with Nebo, one of the most established low-cost air quality monitoring initiatives. This month, that work was recognised by the World Meteorological Organization (WMO).',
      '## Recognition from the WMO',
      'The WMO Global Atmosphere Watch programme has published “Integrating low-cost sensor systems and networks to enhance air quality applications”, a report on how low-cost sensors can strengthen air quality monitoring and its use worldwide. The report cites research from our partnership with Nebo (Labzovskii et al., 2023) as an example of cost-effective air quality monitoring networks: networks that can complement official monitoring and, where government networks have gaps, temporarily take their place.',
      'The report also looks at how air quality data reaches the public. In its section on communication and open data, it notes that community low-cost sensor networks have sometimes grown in response to a perceived lack of transparency from official sources, and it calls on data providers to communicate clearly and keep every data product traceable to its original source.',
      '## How trust was earned',
      'That recognition rests on evidence. Many low-cost systems have struggled with stability and accuracy, so credibility has to be earned through rigorous calibration, comparison and evaluation. As Nebo’s scientific strategy partner, KWARG brought together experts from leading universities and meteorological research institutions to benchmark Nebo’s sensors independently against reference-grade observations, and to connect ground measurements with satellite data.',
      'The results showed that Nebo’s sensors deliver stable, accurate data across a wide range of environmental conditions, and they were published in peer-reviewed literature and the technology press. They gave policymakers evidence that low-cost observations can stand alongside official networks, particularly in regions that conventional monitoring does not reach.',
      '## From evidence to national infrastructure',
      'The same thinking now underpins our newest project. Together with Tajik Technical University, Nebo and Tajikistan’s Committee for Environmental Protection, KWARG is part of the consortium that won the 2026 EPIC Air Quality Fund to build an open national PM2.5 network of 100 sensors. The WMO report confirms what that project is built on: well-validated low-cost networks can become a trusted part of how countries monitor their air.',
    ],
    figures: [
      {
        after: 6,
        src: 'insights/air-quality-method.svg',
        alt: 'Diagram: low-cost sensor network, reference stations and satellite observations feed independent validation, which produces credible open data that fills monitoring gaps',
        caption: 'How low-cost air quality networks earn trust: independent validation against reference stations and satellite data. Diagram: KWARG.',
      },
    ],
    link: {
      label: 'View the WMO report',
      href: 'https://library.wmo.int/records/item/68924-integrating-low-cost-sensor-systems-and-networks-to-enhance-air-quality-applications',
    },
  },
  {
    slug: 'ethiopia-rainfall-prediction-study-published',
    kind: 'News',
    topic: 'Climate intelligence',
    title: 'Published: machine learning for seasonal rainfall prediction in Ethiopia',
    date: '2026-10-28',
    excerpt:
      'Our peer-reviewed study shows how satellite data and neural networks can sharpen summer rainfall prediction in the Upper Blue Nile Basin.',
    cover: 'insights/ethiopia-cover.svg',
    coverAlt: 'Illustration of rainfall over the contour lines of a river basin',
    body: [
      'In the Upper Blue Nile Basin, the summer rains decide a great deal: what farmers plant, how water is allocated downstream and whether early-warning systems need to sound the alarm. Yet predicting those rains a season ahead remains one of the hardest problems in regional climate science.',
      'Research from our international collaboration on climate intelligence for Ethiopia, now published in a peer-reviewed international journal, shows how machine learning and existing satellite data can help.',
      '## A forecasting gap with real consequences',
      'The basin is one of East Africa’s most important hydrological and agricultural regions. Satellite observations and global atmospheric datasets are more available than ever, but turning them into reliable regional forecasts is technically difficult. Conventional approaches struggle to capture how atmospheric circulation, moisture transport and local rainfall interact, and gaps in ground-based observations limit coverage further. This weakens early-warning systems such as the Famine Early Warning Systems Network (FEWS NET).',
      '## An international team and a data-driven approach',
      'The study was led by Bahir Dar University, with strong support from USGS / FEWS NET Ethiopia and the Korea Meteorological Administration. KWARG contributed remote sensing and environmental intelligence expertise focused on atmospheric observations.',
      'Rather than describing past rainfall, the team set out to identify the atmospheric signals that come before it. The framework combines satellite-derived precipitation, atmospheric reanalysis and historical climate records, and uses artificial neural networks to learn the relationships between large-scale circulation and rainfall over the basin.',
      '## The jet stream that shapes the rainy season',
      'A key part of the work focused on the Tropical Easterly Jet, a high-altitude wind system that strongly influences summer rainfall across the Upper Blue Nile Basin. Adding this driver gave the model predictive information beyond conventional precipitation indicators, and the resulting predictions showed strong agreement with established reference precipitation datasets.',
      '## From methodology to decisions',
      'The study focused on developing and validating the method rather than running it operationally. Its value lies in what comes next: a documented, peer-reviewed approach that early-warning decision-makers can adopt, and that can be transferred to other regions with high climate variability and sparse observations. For agriculture, water management and climate risk assessment, better seasonal rainfall intelligence means earlier, better-informed decisions.',
    ],
    figures: [
      {
        after: 6,
        src: 'insights/ethiopia-method.svg',
        alt: 'Diagram: satellite precipitation, atmospheric reanalysis, historical climate data and the Tropical Easterly Jet feed an artificial neural network that predicts seasonal rainfall, validated against reference data',
        caption: 'The approach in brief: several existing data sources feed a neural network that predicts seasonal rainfall for the Upper Blue Nile Basin. Diagram: KWARG.',
      },
    ],
    link: { label: 'Read the article', href: 'https://link.springer.com/article/10.1007/s00704-025-05630-9' },
  },
  {
    slug: 'siberian-wildfire-dilemma-published',
    kind: 'News',
    topic: 'Environmental intelligence',
    title: 'Siberian wildfire dilemma: our study is published',
    date: '2026-10-27',
    excerpt:
      'Satellite data show that 60–98% of Siberia’s 2019 wildfires burned in “control zones”, where firefighting can legally be withheld.',
    cover: 'insights/siberia-cover.webp',
    coverAlt: 'Chart of the area burning in Siberia in summer 2019: most of it in areas left to burn, a small share in areas where fires were tackled',
    body: [
      'In the summer of 2019, Siberia burned on a scale rarely seen. Estimates of the area destroyed in Russia between June and August range from about 5.5 to 10 million hectares, smoke reached as far as Canada and Antarctica, and at the height of the crisis 95% of available firefighting personnel in the affected regions were deployed and army units were called in. Yet much of the fire was, by law, never meant to be fought.',
      'Our open-access paper “Siberian Wildfire Dilemma: Controlling the Uncontrollable?”, published in the European Journal of Environmental Sciences (Vol. 14, No. 2, 2024), measures for the first time how much. It was written by Lev Labzovskii (KWARG) with Dmitry Belikov (Chiba University), Dongyeong Chang (Seoul National University) and Erik Hekman (HU University of Applied Sciences Utrecht).',
      '## The rule behind the fires',
      'Russia’s Forest Code-2006 introduced “control zones”: forest areas so remote or inaccessible that authorities may legally decide not to fight fires there. Suppression in such areas typically costs around ten times more than in accessible zones. Control zones cover 48% of Russia’s forests and about 11% of the world’s forest area, yet before this study no one had measured how much of a major wildfire season actually burned inside them.',
      '## What the satellites showed',
      'We combined fire radiative power from two independent satellite instruments, MODIS and VIIRS, with daily official statistics from Russia’s Aviation Forest Protection service. The result was stark: depending on the day, 60% to 98% of the area on fire lay in control zones. Covering 48% of the forest, these zones accounted for roughly 90% of the area burnt in 2019.',
      'The share peaked at the most critical moments. During the rapid spread in June, 97–98% of fires were in control zones. On 2 August, at the annual peak, 96% of the 3,134,128 hectares on fire, some 3,012,082 hectares, were in control zones. On that day fewer fires were being fought (116) than a month earlier (160), even though the burning area was four times larger.',
      '## Decisions, delays and public concern',
      'The timeline of decisions tells its own story. On 28 July the governor of Krasnoyarsk Region, the worst-affected region, said it was not worth fighting the fires. Three days later, on 31 July, an emergency federal meeting ordered all possible resources into the fight. In between, public concern had surged: searches for Siberian wildfires peaked in Russia in July and spread to the English-speaking internet in August, and 54 wildfire-related petitions followed, one with more than a million signatures.',
      '## Why it matters beyond Siberia',
      'Control zones are not wrong in themselves: some forests truly are inaccessible, and suppression is expensive. But their boundaries were drawn without a scientific basis. We argue that they should be defined with data, taking into account risk to nearby communities and infrastructure. Otherwise, a large share of the world’s boreal forest will remain a critical blind spot in climate plans that count on Siberia to store carbon. For KWARG, the study shows how open satellite data and official records can make the real effects of a policy measurable.',
    ],
    figures: [
      {
        after: 6,
        src: 'insights/siberia-fig1.webp',
        alt: 'Charts of the 2019 Siberian wildfires: number of fires tackled and left to burn, area burning in control zones versus fires tackled, and satellite fire radiative power from MODIS and VIIRS',
        caption:
          'Siberian wildfires, summer 2019. Top: fires tackled (orange) and left to burn (blue). Middle: area burning where fires were ignored versus tackled; vertical lines mark the 3 July forestry statement (green), the Krasnoyarsk governor’s 28 July statement (blue) and the 31 July federal decision (red). Bottom: satellite fire radiative power. Labzovskii et al. (2024), CC BY 4.0.',
      },
      {
        after: 8,
        src: 'insights/siberia-fig2.webp',
        alt: 'Charts comparing monthly Google search interest in forest fires and Siberian fires, in Russian and in English, with satellite fire radiative power in 2019',
        caption:
          'Public interest followed the fires: Google searches in Russian (top) peaked in July 2019 with fire intensity, and in English (bottom) a month later. Labzovskii et al. (2024), CC BY 4.0.',
      },
    ],
    link: { label: 'Read the paper (open access)', href: 'https://doi.org/10.14712/23361964.2024.8' },
  },
];

// About us page team. photo: put an image in public/team/ and set photo: 'team/name.jpg'.
export const team: { name: string; role: string; photo?: string }[] = [
  { name: 'Lev Labzovskii', role: 'Technical Director', photo: 'team/lev-labzovskii.webp' },
  { name: 'Adaobi Ijezie', role: 'Project Management Associate', photo: 'team/adaobi-ijezie.webp' },
  { name: 'Artem Piatin', role: 'Data Scientist & Digital Developer', photo: 'team/artem-piatin.webp' },
];

export const jobs = [
  { title: 'Placeholder role: Research Engineer', place: 'Remote', type: 'Full-time' },
  { title: 'Placeholder role: Funding Manager', place: 'Remote', type: 'Contract' },
];
