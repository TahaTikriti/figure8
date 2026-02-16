export type ServiceId =
  | "business-strategy"
  | "digital-transformation"
  | "tqm"
  | "ea"
  | "grc"
  | "cx"
  | "bpm"
  | "data-management"
  | "ai-governance"
  | "digital-innovation";

export type ServiceConfig = {
  id: ServiceId;
  title: string;
  description: string;
  features: string[];
};

export const SERVICES: ServiceConfig[] = [
  {
    id: "business-strategy",
    title: "Business Strategy Advisory",
    description:
      "Strategic planning and business model optimization for long-term success",
    features: [
      "Strategic Planning & Business Model Design",
      "Market Analysis & Competitive Intelligence",
      "Business Case Development",
      "Performance Management Framework",
      "Strategic Partnership Development",
      "Business Transformation Strategy",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Advisory",
    description:
      "Strategic guidance for comprehensive digital transformation initiatives",
    features: [
      "Digital Strategy & Roadmap Development",
      "Digital Maturity Assessment",
      "Technology Enablement Planning",
      "Change Management & Adoption",
      "Digital Governance Framework",
      "Innovation Program Design",
    ],
  },
  {
    id: "tqm",
    title: "Total Quality Management",
    description:
      "Comprehensive quality management systems and continuous improvement",
    features: [
      "Quality Management System Design",
      "ISO Standards Implementation",
      "Process Quality Improvement",
      "Quality Assurance Framework",
      "Six Sigma & Lean Methodologies",
      "Continuous Improvement Programs",
    ],
  },
  {
    id: "ea",
    title: "Enterprise Architecture (EA)",
    description:
      "Comprehensive EA frameworks and governance for digital transformation",
    features: [
      "EA Office Establishment & Charter",
      "Architecture Domain Modeling",
      "Tool Enablement (Alfabet, Orbus, LeanIX)",
      "Regulatory & Standard Alignment",
      "Architecture Planning & Roadmapping",
      "EA Operations & Continuous Governance",
    ],
  },
  {
    id: "grc",
    title: "Governance, Risk & Compliance",
    description:
      "Comprehensive GRC frameworks and risk management strategies",
    features: [
      "GRC Framework Implementation",
      "Risk Assessment & Mitigation",
      "Compliance Management System",
      "Internal Controls & Audit",
      "Policy & Procedure Development",
      "Regulatory Compliance Alignment",
    ],
  },
  {
    id: "cx",
    title: "Customer Experience (CX)",
    description:
      "Human-centered design and omnichannel experience optimization",
    features: [
      "CX Strategy & Vision Development",
      "Customer Journey Mapping",
      "Experience Audits & Assessment",
      "CX Measurement & Feedback Loops",
      "Omnichannel Experience Design",
      "UX & Service Design Prototyping",
    ],
  },
  {
    id: "bpm",
    title: "Business Process Management (BPM)",
    description:
      "Process optimization and automation for operational excellence",
    features: [
      "BPM Office Establishment",
      "Business Process Mapping & Analysis",
      "Process Reengineering & Optimization",
      "BPM Tool Implementation (Orbus, ARIS)",
      "Process Mining & Bottleneck Analysis",
      "BPM Training & Best Practices",
    ],
  },
  {
    id: "data-management",
    title: "Data Management",
    description: "Comprehensive data governance and analytics frameworks",
    features: [
      "Data Governance & Quality Management",
      "Data Strategy & Roadmap",
      "Master Data Management",
      "Data Architecture Design",
      "Analytics & BI Implementation",
      "Data Privacy & Security",
    ],
  },
  {
    id: "ai-governance",
    title: "AI Management & Governance",
    description:
      "Comprehensive framework to establish, implement, maintain, and improve the AIMS",
    features: [
      "Robotic Process Automation (RPA)",
      "Workflow Automation Design",
      "Intelligent Document Processing",
      "Low-Code/No-Code Platforms",
      "Process Orchestration",
      "Automation Strategy & ROI",
    ],
  },
  {
    id: "digital-innovation",
    title: "Digital Innovation Lab",
    description:
      "Innovation labs, product incubation, and venture co-building",
    features: [
      "Innovation Strategy & Opportunity Scouting",
      "Design Thinking Workshops",
      "Proof of Concept Development",
      "Emerging Technology Adoption",
      "Innovation Culture Building",
      "Startup Partnership Programs",
    ],
  },
];

