import { SERVICES, ServiceConfig, ServiceId } from "./services";

/**
 * Rich, per-service content used by the /services/[slug] detail pages.
 *
 * This is intentionally a "template" data layer: every service has the same
 * shape so the page renders consistently. Some services are filled in more
 * deeply than others — extend the thinner ones over time. Any section left as
 * an empty array simply won't render on the page.
 */

export type SubService = {
  title: string;
  description: string;
};

export type ApproachStep = {
  /** Short label, e.g. "Discover" */
  phase: string;
  description: string;
};

export type CaseStudyId =
  | "royal-commission-jubail-yanbu"
  | "scisp"
  | "elm"
  | "kfshrc";

export type CaseStudy = {
  id: CaseStudyId;
  client: string;
  sector: string;
  country: string;
  /** One-line headline outcome */
  result: string;
  highlights: string[];
};

export type ServiceDetail = {
  /** URL slug, e.g. /services/enterprise-architecture */
  slug: string;
  /** Short punchy line shown under the title in the hero */
  tagline: string;
  /** Who this service is for */
  targetSegments: string[];
  /** Outcomes the client walks away with */
  valueDelivered: string[];
  /** How we deliver, as ordered phases */
  approach: ApproachStep[];
  /** Sub-services, each with an explanation */
  subServices: SubService[];
  /** Related frameworks / standards / best practices */
  frameworks: string[];
  /** Reasons to choose Figure8 DX for this service */
  whyUs: string[];
  /** Platforms / tooling we enable */
  tools: string[];
  /** Case studies relevant to this service (by id) */
  caseStudies: CaseStudyId[];
};

/* -------------------------------------------------------------------------- */
/*  Shared case studies (sourced from the company profile)                    */
/* -------------------------------------------------------------------------- */

export const CASE_STUDIES: Record<CaseStudyId, CaseStudy> = {
  "royal-commission-jubail-yanbu": {
    id: "royal-commission-jubail-yanbu",
    client: "Royal Commission of Jubail & Yanbu",
    sector: "Public · Health · Real Estate · Education",
    country: "Saudi Arabia",
    result: "EA office and operating model running for 2+ years",
    highlights: [
      "Established EA office and operating model",
      "Built business capability models for health, education, and real estate",
      "Automated the demand lifecycle for technology adoption",
      "Delivered a Business Process Catalogue in under 6 weeks",
    ],
  },
  scisp: {
    id: "scisp",
    client: "Saudi Center for International Strategic Partnerships",
    sector: "Public · Strategic Partnerships",
    country: "Saudi Arabia",
    result: "Integrated DT/IT strategy and operating model",
    highlights: [
      "Developed digital transformation and IT strategy",
      "Built business capability models",
      "Designed an integrated DT/IT operating model",
      "Implemented an EA tool and rationalized the application portfolio",
    ],
  },
  elm: {
    id: "elm",
    client: "Elm",
    sector: "Semi-Governmental",
    country: "Saudi Arabia",
    result: "Centralized architecture repository with sustainable governance",
    highlights: [
      "Established EA Office with Orbus iServer",
      "Documented As-Is architecture and designed the To-Be vision",
      "Defined EA principles and governance",
      "Provided ongoing EA operations support",
    ],
  },
  kfshrc: {
    id: "kfshrc",
    client: "King Faisal Specialist Hospital & Research Center",
    sector: "Healthcare",
    country: "Saudi Arabia",
    result: "Improved strategic alignment and performance KPIs",
    highlights: [
      "Established EA office under a federated model",
      "Enhanced collaboration between business and IT",
      "Delivered a Business Process Catalogue in under 6 weeks",
      "Aligned to ISO and TOGAF standards",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Per-service detail content                                                */
/* -------------------------------------------------------------------------- */

export const SERVICE_DETAILS: Record<ServiceId, ServiceDetail> = {
  "business-strategy": {
    slug: "business-strategy-advisory",
    tagline: "Turn ambition into an executable, measurable strategy.",
    targetSegments: [
      "Government entities defining their mandate and KPIs",
      "Enterprises planning growth or transformation",
      "Startups validating and scaling their business model",
    ],
    valueDelivered: [
      "A clear strategy connected to measurable outcomes",
      "Validated business models and prioritized initiatives",
      "Alignment between leadership, budgets, and execution",
    ],
    approach: [
      { phase: "Assess", description: "Understand context, market, and current performance baselines." },
      { phase: "Define", description: "Set vision, strategic objectives, and the operating model to support them." },
      { phase: "Prioritize", description: "Build the business case and sequence initiatives by value and feasibility." },
      { phase: "Enable", description: "Stand up performance management to track delivery against targets." },
    ],
    subServices: [
      { title: "Strategic Planning & Business Model Design", description: "Define long-term vision, objectives, and the business model needed to achieve them." },
      { title: "Market Analysis & Competitive Intelligence", description: "Assess market dynamics, opportunities, and competitive positioning to inform strategy." },
      { title: "Business Case Development", description: "Quantify costs, benefits, and risks to support confident investment decisions." },
      { title: "Performance Management Framework", description: "Translate strategy into KPIs, scorecards, and governance for tracking results." },
      { title: "Strategic Partnership Development", description: "Identify and structure partnerships that accelerate strategic goals." },
      { title: "Business Transformation Strategy", description: "Design the change roadmap that moves the organization from today to its target state." },
    ],
    frameworks: ["Balanced Scorecard", "OKRs", "Porter's Five Forces", "Business Model Canvas", "EFQM"],
    whyUs: [
      "30+ years of combined advisory experience across the GCC, MENA, and EU",
      "Strategy grounded in execution, not slideware",
      "Deep public-sector and national-agenda alignment experience",
    ],
    tools: ["Power BI", "Alteryx"],
    caseStudies: ["scisp"],
  },

  "digital-transformation": {
    slug: "digital-transformation-advisory",
    tagline: "A roadmap that delivers value, without losing the human factor.",
    targetSegments: [
      "Government entities pursuing national digital agendas",
      "Enterprises modernizing operations and customer channels",
      "Organizations recovering or accelerating stalled transformations",
    ],
    valueDelivered: [
      "A prioritized digital roadmap tied to business value",
      "A clear view of digital maturity and the gaps to close",
      "Governance and change capacity to sustain momentum",
    ],
    approach: [
      { phase: "Discover", description: "Assess digital maturity, ambitions, and constraints across the organization." },
      { phase: "Design", description: "Define the digital vision, strategy, and prioritized initiative roadmap." },
      { phase: "Enable", description: "Establish governance, operating model, and change management." },
      { phase: "Embed", description: "Provide hands-on oversight so programs deliver and stick." },
    ],
    subServices: [
      { title: "Digital Strategy & Roadmap Development", description: "Define a long-term digital vision and a sequenced, value-driven execution plan." },
      { title: "Digital Maturity Assessment", description: "Benchmark current capabilities against industry and national maturity models." },
      { title: "Technology Enablement Planning", description: "Map the platforms and capabilities needed to deliver the roadmap." },
      { title: "Change Management & Adoption", description: "Drive stakeholder engagement, communications, and adoption of new ways of working." },
      { title: "Digital Governance Framework", description: "Establish decision rights, roles, and structures for agile delivery." },
      { title: "Innovation Program Design", description: "Build the mechanisms to continuously scout, test, and scale new ideas." },
    ],
    frameworks: ["DGA Standards", "QIYAS / DXMI", "NDI", "TOGAF", "ITIL", "COBIT"],
    whyUs: [
      "1,625+ successful projects delivered across the region",
      "Compliance fluency with DGA, QIYAS, and national standards",
      "Value-driven delivery built on the 80/20 and Kaizen philosophy",
    ],
    tools: ["Alfabet", "Orbus iServer", "Power BI"],
    caseStudies: ["scisp", "royal-commission-jubail-yanbu"],
  },

  tqm: {
    slug: "total-quality-management",
    tagline: "Build quality into every process, not just inspect for it.",
    targetSegments: [
      "Organizations pursuing ISO certification",
      "Operations-heavy enterprises seeking consistency",
      "Public entities raising service quality standards",
    ],
    valueDelivered: [
      "A certifiable, sustainable quality management system",
      "Reduced defects, rework, and process variation",
      "A culture of measurable continuous improvement",
    ],
    approach: [
      { phase: "Assess", description: "Baseline current quality maturity and gaps against target standards." },
      { phase: "Design", description: "Define the quality management system, policies, and controls." },
      { phase: "Improve", description: "Apply Lean and Six Sigma to remove waste and variation." },
      { phase: "Sustain", description: "Embed continuous improvement and audit readiness." },
    ],
    subServices: [
      { title: "Quality Management System Design", description: "Establish the QMS structure, processes, and documentation." },
      { title: "ISO Standards Implementation", description: "Prepare and align the organization for ISO certification." },
      { title: "Process Quality Improvement", description: "Identify and resolve sources of defects and inconsistency." },
      { title: "Quality Assurance Framework", description: "Define controls, checkpoints, and metrics for ongoing assurance." },
      { title: "Six Sigma & Lean Methodologies", description: "Apply proven methods to reduce variation and eliminate waste." },
      { title: "Continuous Improvement Programs", description: "Operationalize Kaizen so improvement becomes routine." },
    ],
    frameworks: ["ISO 9001", "EFQM", "Six Sigma", "Lean", "Kaizen", "CMMI"],
    whyUs: [
      "ISO 9001 certified delivery practices",
      "Improvement methodology embedded in our core philosophy",
      "Track record standardizing complex public-sector operations",
    ],
    tools: ["Orbus iServer", "ARIS"],
    caseStudies: ["kfshrc"],
  },

  ea: {
    slug: "enterprise-architecture",
    tagline: "Connect strategy to delivery with architecture that earns its keep.",
    targetSegments: [
      "Government entities standing up or maturing an EA function",
      "Large enterprises managing complex application portfolios",
      "Organizations aligning IT investment to business capability",
    ],
    valueDelivered: [
      "A formal, governed EA function aligned to your mandate",
      "A single source of truth for business, application, data, and technology",
      "Rationalized portfolios and clear transformation roadmaps",
    ],
    approach: [
      { phase: "Establish", description: "Define the EA charter, principles, metamodel, and governance." },
      { phase: "Model", description: "Capture As-Is architecture across all domains and design the To-Be." },
      { phase: "Plan", description: "Run gap analysis and co-create a prioritized transformation roadmap." },
      { phase: "Operate", description: "Embed architects and run EA as a continuous, value-adding service." },
    ],
    subServices: [
      { title: "EA Office Establishment & Charter", description: "Formalize the EA function with clear charters, principles, and governance tailored to the organization." },
      { title: "Architecture Domain Modeling", description: "Design integrated models across the Business, Application, Data, and Technology domains." },
      { title: "Tool Enablement & Customization", description: "Implement and customize EA platforms such as Alfabet, Orbus iServer, and LeanIX." },
      { title: "Regulatory & Standard Alignment", description: "Ensure compliance with national digital architecture standards (DGA / QIYAS / NORA)." },
      { title: "Architecture Planning & Roadmapping", description: "Conduct As-Is/To-Be modeling, gap analysis, and co-create transformation roadmaps." },
      { title: "EA Operations & Continuous Governance", description: "Operate EA as a service or embed architects for ongoing governance and support." },
    ],
    frameworks: ["TOGAF", "ArchiMate", "ISO 42010", "COBIT", "NORA", "DGA Standards"],
    whyUs: [
      "Dedicated EA practice with a Practice Lead and certified architects",
      "Proven EA offices running for years at major government entities",
      "Vendor-neutral tool expertise across Alfabet, Orbus, BizzDesign, and more",
    ],
    tools: ["Alfabet", "Orbus iServer", "BizzDesign", "MEGA HOPEX", "ARIS"],
    caseStudies: ["royal-commission-jubail-yanbu", "elm", "kfshrc"],
  },

  grc: {
    slug: "governance-risk-compliance",
    tagline: "Manage risk and compliance as an enabler, not a brake.",
    targetSegments: [
      "Regulated entities managing complex compliance obligations",
      "Public organizations strengthening internal controls",
      "Enterprises consolidating risk under one framework",
    ],
    valueDelivered: [
      "An integrated GRC framework with clear ownership",
      "Reduced compliance exposure and audit findings",
      "Confident, risk-informed decision-making",
    ],
    approach: [
      { phase: "Assess", description: "Map obligations, risks, and current control coverage." },
      { phase: "Design", description: "Build the GRC framework, policies, and control library." },
      { phase: "Implement", description: "Operationalize controls, monitoring, and reporting." },
      { phase: "Assure", description: "Run audits and continuous improvement of the control environment." },
    ],
    subServices: [
      { title: "GRC Framework Implementation", description: "Establish an integrated governance, risk, and compliance operating model." },
      { title: "Risk Assessment & Mitigation", description: "Identify, score, and treat enterprise risks with clear ownership." },
      { title: "Compliance Management System", description: "Track obligations and evidence to stay continuously audit-ready." },
      { title: "Internal Controls & Audit", description: "Design and test controls that hold up to scrutiny." },
      { title: "Policy & Procedure Development", description: "Author clear, enforceable policies and supporting procedures." },
      { title: "Regulatory Compliance Alignment", description: "Align to national and sector-specific regulatory requirements." },
    ],
    frameworks: ["ISO 27001", "ISO 22301", "ISO 38500", "COBIT", "NCA Controls"],
    whyUs: [
      "Compliance fluency with national regulators and standards",
      "Controls designed to enable delivery, not obstruct it",
      "Experience across health, public, and semi-government sectors",
    ],
    tools: ["Orbus iServer", "Power BI"],
    caseStudies: ["kfshrc"],
  },

  cx: {
    slug: "customer-experience",
    tagline: "Design experiences people actually want to use.",
    targetSegments: [
      "Government entities improving citizen and service experience",
      "Enterprises competing on customer experience",
      "Digital teams shipping new products and channels",
    ],
    valueDelivered: [
      "A clear CX strategy and prioritized experience backlog",
      "Validated journeys with pain points removed",
      "Consistent, measurable experiences across every channel",
    ],
    approach: [
      { phase: "Understand", description: "Research users, define personas, and map current journeys." },
      { phase: "Strategize", description: "Set the CX vision, value propositions, and experience principles." },
      { phase: "Design", description: "Prototype and test journeys, interfaces, and service blueprints." },
      { phase: "Measure", description: "Instrument KPIs and feedback loops to keep improving." },
    ],
    subServices: [
      { title: "CX Strategy & Vision Development", description: "Define the experience vision, personas, value propositions, and guiding principles." },
      { title: "Customer Journey Mapping", description: "Visualize end-to-end journeys with pain-point and opportunity analysis." },
      { title: "Experience Audits & Assessment", description: "Evaluate digital and service touchpoints to identify improvements." },
      { title: "CX Measurement & Feedback Loops", description: "Track KPIs and establish mechanisms to capture and act on feedback." },
      { title: "Omnichannel Experience Design", description: "Ensure consistent experiences across web, mobile, in-store, and support." },
      { title: "UX & Service Design Prototyping", description: "Develop wireframes, prototypes, and service blueprints using human-centered design." },
    ],
    frameworks: ["Design Thinking", "Service Design", "Jobs-to-be-Done", "Double Diamond"],
    whyUs: [
      "Dedicated CX practice led by an experienced Practice Lead",
      "Human-centered design at the core of our philosophy",
      "Experience designing high-volume citizen and customer services",
    ],
    tools: ["Figma", "Power BI"],
    caseStudies: ["royal-commission-jubail-yanbu"],
  },

  bpm: {
    slug: "business-process-management",
    tagline: "Make processes faster, clearer, and continuously improving.",
    targetSegments: [
      "Operations-heavy government and enterprise functions",
      "Organizations standing up a BPM capability",
      "Teams targeting automation and efficiency gains",
    ],
    valueDelivered: [
      "A governed BPM function and process repository",
      "Streamlined, reengineered end-to-end processes",
      "Data-driven insight into bottlenecks and improvement",
    ],
    approach: [
      { phase: "Establish", description: "Set up the BPM office, framework, and governance." },
      { phase: "Map", description: "Document and analyze end-to-end processes." },
      { phase: "Optimize", description: "Reengineer processes and apply process mining." },
      { phase: "Enable", description: "Train teams and embed continuous process improvement." },
    ],
    subServices: [
      { title: "BPM Office Establishment", description: "Define the BPM function with charters, frameworks, and governance structures." },
      { title: "Business Process Mapping & Analysis", description: "Visualize and analyze end-to-end processes to identify enhancements." },
      { title: "Process Reengineering & Optimization", description: "Execute full redesign of business processes for efficiency and clarity." },
      { title: "BPM Tool Implementation", description: "Implement BPM platforms such as Orbus iServer and ARIS." },
      { title: "Process Mining & Bottleneck Analysis", description: "Use data to surface bottlenecks and target improvement initiatives." },
      { title: "BPM Training & Best Practices", description: "Build internal capability through training in BPM best practices." },
    ],
    frameworks: ["BPMN", "APQC Process Classification", "Lean", "Six Sigma"],
    whyUs: [
      "Delivered process catalogues in under six weeks",
      "Deep tooling expertise in Orbus iServer and ARIS",
      "Improvement-first mindset rooted in Kaizen",
    ],
    tools: ["Orbus iServer", "ARIS", "Alteryx"],
    caseStudies: ["royal-commission-jubail-yanbu", "kfshrc"],
  },

  "data-management": {
    slug: "data-management",
    tagline: "Treat data as an asset — governed, trusted, and usable.",
    targetSegments: [
      "Organizations establishing data governance",
      "Entities aligning to national data standards",
      "Teams building analytics and BI capability",
    ],
    valueDelivered: [
      "A governed, high-quality, trusted data foundation",
      "Compliance with national data management standards",
      "Analytics and BI that leadership actually uses",
    ],
    approach: [
      { phase: "Assess", description: "Baseline data maturity, quality, and governance gaps." },
      { phase: "Govern", description: "Stand up data governance, ownership, and quality controls." },
      { phase: "Architect", description: "Design the data architecture and management capabilities." },
      { phase: "Activate", description: "Deliver analytics, BI, and self-service insight." },
    ],
    subServices: [
      { title: "Data Governance & Quality Management", description: "Establish ownership, policies, and quality controls for trusted data." },
      { title: "Data Strategy & Roadmap", description: "Define the vision and sequenced plan for data as an asset." },
      { title: "Master Data Management", description: "Create single, reliable sources for core business entities." },
      { title: "Data Architecture Design", description: "Design the structures and flows that support analytics and operations." },
      { title: "Analytics & BI Implementation", description: "Deliver dashboards and insight on platforms like Power BI." },
      { title: "Data Privacy & Security", description: "Embed privacy and security controls aligned to regulation." },
    ],
    frameworks: ["DAMA-DMBOK", "NDMO", "NDI", "ISO 27001"],
    whyUs: [
      "Alignment with NDMO and national data standards",
      "Tooling expertise across OvalEdge, Alteryx, and Power BI",
      "Governance designed for real adoption, not shelfware",
    ],
    tools: ["OvalEdge", "Alteryx", "Power BI"],
    caseStudies: ["scisp"],
  },

  "ai-governance": {
    slug: "ai-management-governance",
    tagline: "Adopt AI responsibly with an ISO 42001-aligned management system.",
    targetSegments: [
      "Organizations scaling AI beyond pilots",
      "Regulated entities needing AI assurance",
      "Public bodies setting AI policy and controls",
    ],
    valueDelivered: [
      "An ISO 42001-aligned AI management system",
      "Clear AI risk, accountability, and lifecycle controls",
      "Confidence to scale AI responsibly and compliantly",
    ],
    approach: [
      { phase: "Assess", description: "Review AI use cases, risks, and governance readiness." },
      { phase: "Establish", description: "Stand up the AI management system (AIMS) and policies." },
      { phase: "Control", description: "Implement risk and lifecycle management controls." },
      { phase: "Assure", description: "Align to ISO 42001 and prepare for ongoing assurance." },
    ],
    subServices: [
      { title: "AI Governance Framework", description: "Define principles, roles, and decision rights for responsible AI." },
      { title: "AIMS Establishment", description: "Implement an AI management system in line with ISO 42001." },
      { title: "AI Risk Management", description: "Identify, assess, and treat AI-specific risks." },
      { title: "AI Lifecycle Management", description: "Govern AI from design through deployment and monitoring." },
      { title: "Regulatory & Compliance Alignment", description: "Align AI practices with emerging national and international regulation." },
    ],
    frameworks: ["ISO 42001", "NIST AI RMF", "OECD AI Principles"],
    whyUs: [
      "Early specialization in AI governance and ISO 42001",
      "Risk and compliance heritage applied to emerging tech",
      "Pragmatic controls that don't stall innovation",
    ],
    tools: ["Power BI"],
    caseStudies: [],
  },

  "digital-innovation": {
    slug: "digital-innovation-lab",
    tagline: "Scout, build, and launch new digital ventures with discipline.",
    targetSegments: [
      "Organizations building an innovation capability",
      "Teams validating and launching new products",
      "Entities exploring ventures, spin-offs, or SaaS",
    ],
    valueDelivered: [
      "A repeatable engine for scouting and testing ideas",
      "Validated MVPs and go-to-market readiness",
      "New products and ventures taken from idea to launch",
    ],
    approach: [
      { phase: "Scout", description: "Identify opportunities and assess feasibility." },
      { phase: "Prototype", description: "Validate ideas with lean startup and design sprints." },
      { phase: "Build", description: "Develop MVPs and scalable SaaS products." },
      { phase: "Launch", description: "Define business models, GTM, and growth plans." },
    ],
    subServices: [
      { title: "Innovation Strategy & Opportunity Scouting", description: "Identify opportunities and evaluate the feasibility of new ideas." },
      { title: "Design Thinking Workshops", description: "Run structured sessions to frame problems and generate solutions." },
      { title: "Proof of Concept Development", description: "Validate and prototype ideas using lean startup and design-sprint methods." },
      { title: "Emerging Technology Adoption", description: "Assess and integrate emerging technologies into products." },
      { title: "Innovation Culture Building", description: "Stand up internal innovation labs with clear success metrics." },
      { title: "Startup Partnership Programs", description: "Co-build ventures, spin-offs, and partnerships to accelerate growth." },
    ],
    frameworks: ["Lean Startup", "Design Sprint", "Jobs-to-be-Done", "Stage-Gate"],
    whyUs: [
      "Dedicated Digital Innovation and Digital Products partners",
      "Hands-on venture co-building, not just advisory",
      "SaaS platform development capability in-house",
    ],
    tools: ["Figma", "Power BI"],
    caseStudies: [],
  },
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export type FullService = ServiceConfig & { detail: ServiceDetail };

const SERVICE_BY_ID: Record<ServiceId, ServiceConfig> = SERVICES.reduce(
  (acc, service) => {
    acc[service.id] = service;
    return acc;
  },
  {} as Record<ServiceId, ServiceConfig>,
);

export function getAllServices(): FullService[] {
  return SERVICES.map((service) => ({
    ...service,
    detail: SERVICE_DETAILS[service.id],
  }));
}

export function getAllServiceSlugs(): string[] {
  return Object.values(SERVICE_DETAILS).map((detail) => detail.slug);
}

export function getServiceBySlug(slug: string): FullService | null {
  const entry = (Object.keys(SERVICE_DETAILS) as ServiceId[]).find(
    (id) => SERVICE_DETAILS[id].slug === slug,
  );
  if (!entry) return null;
  return { ...SERVICE_BY_ID[entry], detail: SERVICE_DETAILS[entry] };
}

export function getServiceSlugById(id: ServiceId): string {
  return SERVICE_DETAILS[id].slug;
}

export function getServicesByIds(ids: ServiceId[]): FullService[] {
  return ids.map((id) => ({ ...SERVICE_BY_ID[id], detail: SERVICE_DETAILS[id] }));
}

export function getCaseStudies(ids: CaseStudyId[]): CaseStudy[] {
  return ids.map((id) => CASE_STUDIES[id]);
}
