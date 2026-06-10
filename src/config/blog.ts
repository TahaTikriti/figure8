/**
 * File-based content layer for the Insights / blog section.
 *
 * This acts as a lightweight "CMS": authors and posts are authored here as
 * data. The shape is deliberately decoupled from rendering (body is an array
 * of typed content blocks) so this can later be swapped for a headless CMS
 * (Sanity, Contentful, a database, MDX, etc.) without touching the pages.
 */

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Optional avatar image; falls back to initials when absent. */
  avatar?: string;
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string */
  date: string;
  authorId: string;
  tags: string[];
  /** Optional cover image; falls back to a branded gradient when absent. */
  coverImage?: string;
  body: ContentBlock[];
  featured?: boolean;
};

/* -------------------------------------------------------------------------- */
/*  Authors                                                                    */
/* -------------------------------------------------------------------------- */

export const AUTHORS: Record<string, Author> = {
  bahaa: {
    id: "bahaa",
    name: "Bahaa Elzohbi",
    role: "Digital Transformation Managing Partner",
    bio: "Orchestrates large-scale digital transformation programs for government and enterprise clients across the EU, GCC, and MENA.",
  },
  ahmad: {
    id: "ahmad",
    name: "Ahmad Tekriti",
    role: "Digital Products Partner",
    bio: "Leads digital product and SaaS platform development with a focus on scalable, user-centric solutions.",
  },
};

/* -------------------------------------------------------------------------- */
/*  Posts                                                                      */
/* -------------------------------------------------------------------------- */

export const POSTS: Post[] = [
  {
    slug: "enterprise-architecture-that-earns-its-keep",
    title: "Enterprise Architecture That Earns Its Keep",
    excerpt:
      "Too many EA functions become documentation graveyards. Here's how we keep architecture tied to real decisions and measurable value.",
    date: "2026-05-12",
    authorId: "bahaa",
    tags: ["Enterprise Architecture", "Governance"],
    featured: true,
    coverImage: "/blue-background.jpeg",
    body: [
      {
        type: "paragraph",
        text: "Enterprise Architecture has an image problem. In many organizations it has become a back-office function that produces diagrams nobody reads and standards nobody follows. The result is an expensive capability that delivers little visible value — and is the first thing cut when budgets tighten.",
      },
      {
        type: "heading",
        text: "The shift from documentation to decisions",
      },
      {
        type: "paragraph",
        text: "The architecture functions that survive and thrive are the ones wired directly into how the organization makes decisions. Instead of modeling for the sake of completeness, they model to answer questions: Which applications should we retire? Where is our capability overlap? What does this new initiative depend on?",
      },
      {
        type: "quote",
        text: "Architecture only matters when it changes a decision. Everything else is decoration.",
        cite: "Figure8 DX EA Practice",
      },
      {
        type: "heading",
        text: "What good looks like",
      },
      {
        type: "list",
        items: [
          "A clear charter that defines the questions EA exists to answer",
          "A living repository, not a one-time documentation exercise",
          "Roadmaps co-created with the business, not handed down",
          "Governance that is lightweight enough to actually be used",
        ],
      },
      {
        type: "image",
        src: "/blue-background.jpeg",
        alt: "Abstract technology background representing connected systems",
        caption: "Placeholder image — replace with article imagery.",
      },
      {
        type: "paragraph",
        text: "When we established the EA office at the Royal Commission of Jubail & Yanbu, the breakthrough was not the tooling — it was anchoring the function to the demand lifecycle. Every technology request flowed through architecture, which made the value obvious and the function indispensable.",
      },
    ],
  },
  {
    slug: "the-80-20-rule-in-digital-transformation",
    title: "The 80/20 Rule in Digital Transformation",
    excerpt:
      "Most transformation programs try to do everything at once. Focusing on the vital few initiatives is how you realize value faster.",
    date: "2026-04-28",
    authorId: "bahaa",
    tags: ["Digital Transformation", "Strategy"],
    body: [
      {
        type: "paragraph",
        text: "Digital transformation programs fail less from a lack of ambition and more from an excess of it. Trying to transform everything simultaneously spreads teams thin, delays value, and erodes the executive confidence that keeps programs funded.",
      },
      {
        type: "heading",
        text: "Find the vital few",
      },
      {
        type: "paragraph",
        text: "The Pareto principle is uncomfortably accurate in transformation: roughly 80% of the value comes from 20% of the initiatives. The discipline is identifying that 20% early — and having the courage to sequence everything else behind it.",
      },
      {
        type: "list",
        items: [
          "Map initiatives against value and feasibility, not just appetite",
          "Sequence for early, visible wins that build momentum",
          "Protect the critical few from scope creep",
          "Measure value realized, not activity completed",
        ],
      },
      {
        type: "quote",
        text: "Faster time-to-value beats comprehensive plans that never ship.",
        cite: "Figure8 DX",
      },
      {
        type: "paragraph",
        text: "This is not about doing less — it is about doing the right things first. Combined with continuous improvement, focused prioritization turns transformation from a multi-year leap of faith into a series of compounding, measurable wins.",
      },
    ],
  },
  {
    slug: "governing-ai-before-it-governs-you",
    title: "Governing AI Before It Governs You",
    excerpt:
      "As AI moves from pilots to production, governance is what separates responsible scale from reputational risk. An ISO 42001 primer.",
    date: "2026-03-30",
    authorId: "ahmad",
    tags: ["AI Governance", "Compliance"],
    body: [
      {
        type: "paragraph",
        text: "AI has crossed the threshold from experimentation to operations. Models now make or shape decisions that affect citizens, customers, and employees. That shift changes the risk profile entirely — and most organizations have not updated their governance to match.",
      },
      {
        type: "heading",
        text: "Why ISO 42001 matters",
      },
      {
        type: "paragraph",
        text: "ISO 42001 provides the first international standard for an AI Management System (AIMS). It gives organizations a structured way to manage AI risk, accountability, and lifecycle controls — the same way ISO 27001 did for information security.",
      },
      {
        type: "list",
        items: [
          "Establish clear accountability for AI outcomes",
          "Assess and treat AI-specific risks continuously",
          "Govern models across their full lifecycle",
          "Align to emerging national and international regulation",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is not to slow innovation — it is to make responsible scale possible. Pragmatic governance gives leadership the confidence to deploy AI broadly, knowing the guardrails are in place.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllPostSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
  return POSTS.find((post) => post.slug === slug) ?? null;
}

export function getFeaturedPost(): Post {
  return POSTS.find((post) => post.featured) ?? getAllPosts()[0];
}

export function getAuthor(id: string): Author {
  return AUTHORS[id];
}

export function getRelatedPosts(post: Post, limit = 2): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => post.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => post.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function readingTime(post: Post): number {
  const words = post.body.reduce((count, block) => {
    if (block.type === "paragraph" || block.type === "quote") {
      return count + block.text.split(/\s+/).length;
    }
    if (block.type === "list") {
      return count + block.items.join(" ").split(/\s+/).length;
    }
    return count;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export function authorInitials(name: string): string {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
