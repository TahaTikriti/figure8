import { CaseStudyId } from "./serviceDetails";
import { ServiceId } from "./services";

/**
 * Bare-bones industries data. This mirrors the structure of serviceDetails so
 * industry pages can grow the same way service pages do. Fill these in over
 * time — empty fields simply won't render.
 */

export type Industry = {
  slug: string;
  name: string;
  /** Short line for cards and hero */
  tagline: string;
  /** Longer overview paragraph */
  description: string;
  /** Common challenges we help this industry solve */
  challenges: string[];
  /** What we typically deliver in this industry */
  capabilities: string[];
  /** Services most relevant to this industry (by id) */
  relatedServices: ServiceId[];
  /** Related case studies (by id, from serviceDetails) */
  caseStudies: CaseStudyId[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "government",
    name: "Government & Public Sector",
    tagline: "Delivering national digital agendas with compliance built in.",
    description:
      "We help government entities operationalize transformation, stand up enterprise architecture and BPM functions, and align to national standards such as DGA, QIYAS, and NORA.",
    challenges: [
      "Aligning IT investment to national mandates and KPIs",
      "Meeting DGA, QIYAS, and NORA compliance requirements",
      "Operationalizing transformation beyond strategy decks",
    ],
    capabilities: [
      "Enterprise Architecture office establishment",
      "Digital transformation strategy and roadmaps",
      "Business process catalogues and reengineering",
    ],
    relatedServices: ["digital-transformation", "ea", "bpm", "business-strategy"],
    caseStudies: ["royal-commission-jubail-yanbu", "scisp", "elm"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Standardizing processes and architecture for better care delivery.",
    description:
      "We support healthcare organizations with enterprise architecture, process standardization, and governance aligned to ISO and TOGAF standards.",
    challenges: [
      "Standardizing processes across complex care settings",
      "Aligning business and IT around patient outcomes",
      "Meeting ISO and accreditation requirements",
    ],
    capabilities: [
      "EA office under a federated operating model",
      "Business process catalogues",
      "Quality management and compliance",
    ],
    relatedServices: ["ea", "tqm", "bpm", "grc"],
    caseStudies: ["kfshrc"],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Modernizing operations for education and research institutions.",
    description:
      "We help education entities build capability models, modernize operations, and adopt technology with clear governance.",
    challenges: [
      "Mapping capabilities across academic and admin functions",
      "Rationalizing fragmented application portfolios",
      "Governing technology adoption",
    ],
    capabilities: [
      "Business capability modeling",
      "Application portfolio rationalization",
      "Digital transformation advisory",
    ],
    relatedServices: ["business-strategy", "ea", "digital-transformation"],
    caseStudies: ["royal-commission-jubail-yanbu"],
  },
  {
    slug: "energy",
    name: "Energy",
    tagline: "Architecture and process excellence for the energy sector.",
    description:
      "We bring enterprise architecture, BPM, and governance discipline to energy organizations operating at scale.",
    challenges: [
      "Managing complex, asset-heavy operations",
      "Driving operational efficiency",
      "Strengthening governance and controls",
    ],
    capabilities: [
      "Enterprise architecture",
      "Business process management",
      "Governance, risk & compliance",
    ],
    relatedServices: ["ea", "bpm", "grc"],
    caseStudies: [],
  },
  {
    slug: "telecom",
    name: "Telecom",
    tagline: "Helping telecom operators transform and innovate.",
    description:
      "We support telecom organizations with digital strategy, customer experience, and architecture to stay competitive.",
    challenges: [
      "Competing on customer experience",
      "Modernizing legacy architecture",
      "Launching new digital products",
    ],
    capabilities: [
      "Customer experience design",
      "Enterprise architecture",
      "Digital innovation",
    ],
    relatedServices: ["cx", "ea", "digital-innovation"],
    caseStudies: [],
  },
  {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    tagline: "Streamlining processes across complex logistics operations.",
    description:
      "We help transportation and logistics organizations optimize processes and adopt technology with clear governance.",
    challenges: [
      "Optimizing end-to-end logistics processes",
      "Improving visibility and efficiency",
      "Adopting technology at scale",
    ],
    capabilities: [
      "Business process management",
      "Data management and analytics",
      "Digital transformation advisory",
    ],
    relatedServices: ["bpm", "data-management", "digital-transformation"],
    caseStudies: [],
  },
];

export function getAllIndustrySlugs(): string[] {
  return INDUSTRIES.map((industry) => industry.slug);
}

export function getIndustryBySlug(slug: string): Industry | null {
  return INDUSTRIES.find((industry) => industry.slug === slug) ?? null;
}
