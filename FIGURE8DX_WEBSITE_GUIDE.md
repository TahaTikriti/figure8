# 📘 Figure8 DX – Website Project Guide

## 1. Project Overview
- **Goal**: Replace outdated WordPress site with a modern, professional **single-page landing site**.  
- **Style**: Clean, corporate, high-impact first impression. Must reflect expertise in digital transformation, innovation, and consultancy.  
- **Scope**: One-page landing site with clear sections, no routing. Future-proofed for potential CMS integration.  
- **Hosting**: Vercel (recommended).  
- **Tech Stack**:  
  - Next.js (App Router)  
  - Tailwind CSS (for fast, consistent styling)  
  - TypeScript (optional, but recommended)  
  - Static content initially, CMS-ready structure for later.  

---

## 2. Branding & Design System
- **Logo**: Use existing Figure8 DX logo (Futura-Bold).  
- **Fonts**:  
  - Logo: `Futura-Bold` (image only, don’t web-embed).  
  - Headings/Section Titles: `Rufina-Bold`  
  - Body Text: `Montserrat-Regular`  
- **Color Palette**:  
  - Primary (75–80%): `#212E3F` (deep navy/charcoal)  
  - Secondary (15%): `#EB5824` (orange accent)  
  - Neutral White (5%): `#FFFFFF`  
  - Light Gray (5%): `#DDDFE0`  
- **Style Guidelines**:  
  - Use **dark navy background** with white/light text for most sections.  
  - Accent orange for CTAs and highlights.  
  - Maintain **plenty of whitespace**, large readable headings.  

---

## 3. Site Structure (Sections)
**Order of sections on landing page:**

1. **Hero**  
   - Headline: *“Transform. Build. Thrive.”*  
   - Subheadline: Digital Transformation & Innovation Partner since 2017.  
   - CTA: “Let’s Talk” → links to contact section.  
   - Background: Subtle dark gradient with brand color.  

2. **About Figure8 DX (Who We Are)**  
   - Summary: Founded in 2017, 1625+ projects, 30+ partners, presence in EU/GCC/MENA.  
   - Mission: Enabling digital growth for governments, NGOs, startups, enterprises.  
   - Short “value proposition bullets” (from profile doc).  

3. **Core Services (What We Do)**  
   Display as **cards with icons** for quick scanning:  
   - Digital Transformation Advisory  
   - Enterprise Architecture  
   - Customer Experience (CX)  
   - Business Process Management (BPM)  
   - Digital Innovation  

4. **Leadership Team (Optional, Condensed)**  
   - Photos/names (if provided later) OR just names/titles.  
   - Emphasis on multidisciplinary expertise.  

5. **Client References (Proof & Credibility)**  
   - Showcase notable clients (RCJY, SCISP, Elm, KFSH&RC).  
   - Key achievements as short bullet points.  
   - Optional: add client logos.  

6. **Value Proposition**  
   - Clear 3–4 bullet points:  
     - 30+ years of digital domain expertise  
     - End-to-end transformation services  
     - Compliance with global/national standards  
     - Proven results in government & enterprise  

7. **Contact CTA (Final Call to Action)**  
   - Email: `connect@figure8dx.com`  
   - Phone: UAE +971525705539 / KSA +966551882204  
   - Button: “Get in Touch” (opens mailto or scrolls to contact info).  

8. **Footer**  
   - Logo, company name  
   - Contact info repeated  
   - Socials (LinkedIn recommended if available)  
   - Copyright  

---

## 4. Component Breakdown
Each section → separate React component in `/components`:  
- `Hero.tsx`  
- `About.tsx`  
- `Services.tsx`  
- `Leadership.tsx` (optional)  
- `Clients.tsx`  
- `ValueProposition.tsx`  
- `ContactCTA.tsx`  
- `Footer.tsx`  

---

## 5. Content Handling (Static → Future Dynamic)
- **Now**: Hardcode text in components (fast delivery).  
- **Later**: Swap to JSON or CMS (Sanity, Contentful, WordPress API).  
- Example:
  ```tsx
  import content from "@/content/services.json";
  export default function Services() {
    return (
      <section>
        {content.map((service) => (
          <div key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>
    );
  }
  ```

---

## 6. Deployment Checklist
- [ ] Push repo to GitHub.  
- [ ] Deploy to Vercel.  
- [ ] Set custom domain (figure8dx.com).  
- [ ] Add metadata (SEO: title, description, keywords).  
- [ ] Add favicon/logo.  
- [ ] Test responsiveness (desktop, tablet, mobile).  
- [ ] Verify performance (Lighthouse > 90).  
