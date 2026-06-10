import Link from "next/link";
import { FullService, getCaseStudies } from "@/config/serviceDetails";
import ServiceCTAButtons from "./ServiceCTAButtons";
import ServiceSideNav, { NavSection } from "./ServiceSideNav";

/* -- Small presentational helpers ---------------------------------------- */

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: number;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#EB5824] mb-3">
        {String(index).padStart(2, "0")} &nbsp;/&nbsp; {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#212E3F] tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

/* -- Main view ------------------------------------------------------------ */

export default function ServiceDetailView({ service }: { service: FullService }) {
  const { title, description, detail } = service;
  const caseStudies = getCaseStudies(detail.caseStudies);

  // Build the in-page nav from sections that actually have content.
  const sections: (NavSection & { render: boolean })[] = [
    { id: "overview", label: "Overview", render: true },
    { id: "audience", label: "Who it's for", render: detail.targetSegments.length > 0 },
    { id: "approach", label: "Approach", render: detail.approach.length > 0 },
    { id: "capabilities", label: "Sub-services", render: detail.subServices.length > 0 },
    {
      id: "standards",
      label: "Frameworks & tools",
      render: detail.frameworks.length > 0 || detail.tools.length > 0,
    },
    { id: "whyus", label: "Why Figure8 DX", render: detail.whyUs.length > 0 },
    { id: "cases", label: "Case studies", render: caseStudies.length > 0 },
  ];
  const nav = sections.filter((s) => s.render).map(({ id, label }) => ({ id, label }));
  const indexOf = (id: string) => nav.findIndex((s) => s.id === id) + 1;

  return (
    <main>
      {/* ============================ HERO ============================ */}
      <section className="relative bg-[#212E3F] text-white overflow-hidden pt-20">
        {/* dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* warm glow */}
        <div className="absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-[#EB5824]/20 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20">
          {/* Breadcrumb */}
          <nav className="font-mono text-xs text-white/50 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              services
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-[#EB5824]">{detail.slug}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#EB5824] mb-5">
              Service
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-2xl text-white/75 leading-relaxed font-light mb-10">
              {detail.tagline}
            </p>

            {detail.frameworks.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {detail.frameworks.slice(0, 5).map((f) => (
                  <span
                    key={f}
                    className="font-mono text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full border border-white/15 text-white/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}

            <ServiceCTAButtons />
          </div>
        </div>

        {/* bottom fade into content */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5824]/40 to-transparent" />
      </section>

      {/* ===================== BODY (rail + content) ===================== */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-[230px_1fr] lg:gap-16 xl:gap-24">
            {/* Left rail */}
            <aside className="hidden lg:block py-20">
              <ServiceSideNav sections={nav} />
            </aside>

            {/* Content column */}
            <div className="py-16 lg:py-20 divide-y divide-[#212E3F]/8">
              {/* ---------- OVERVIEW ---------- */}
              <section id="overview" className="scroll-mt-28 pb-16 lg:pb-20">
                <SectionHeading
                  index={indexOf("overview")}
                  eyebrow="Overview"
                  title={`What ${title} means at Figure8 DX`}
                />
                <p className="text-xl text-[#212E3F]/70 leading-relaxed font-light max-w-2xl mb-10">
                  {description}.
                </p>

                {detail.valueDelivered.length > 0 && (
                  <div className="relative rounded-2xl bg-[#f9fafb] border border-[#212E3F]/10 p-8 lg:p-10 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB5824]" />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-6">
                      What you walk away with
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                      {detail.valueDelivered.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <ArrowIcon className="w-5 h-5 text-[#EB5824] flex-shrink-0 mt-0.5" />
                          <span className="text-[#212E3F]/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* ---------- AUDIENCE ---------- */}
              {detail.targetSegments.length > 0 && (
                <section id="audience" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("audience")}
                    eyebrow="Who it's for"
                    title="Built for your context"
                  />
                  <div className="space-y-px">
                    {detail.targetSegments.map((segment, i) => (
                      <div
                        key={segment}
                        className="group flex items-center gap-6 py-5 border-t border-[#212E3F]/8 first:border-t-0 hover:pl-2 transition-all duration-300"
                      >
                        <span className="font-mono text-sm text-[#EB5824] tabular-nums w-8 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-lg text-[#212E3F]/80 leading-snug">{segment}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ---------- APPROACH (timeline) ---------- */}
              {detail.approach.length > 0 && (
                <section id="approach" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("approach")}
                    eyebrow="How we work"
                    title="Our approach"
                  />
                  <ol className="relative ml-4 border-l border-[#212E3F]/15 space-y-10">
                    {detail.approach.map((step, i) => (
                      <li key={step.phase} className="relative pl-10">
                        <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white border-2 border-[#EB5824] flex items-center justify-center font-mono text-xs font-bold text-[#EB5824]">
                          {i + 1}
                        </span>
                        <h3 className="text-xl font-bold text-[#212E3F] mb-1.5">
                          {step.phase}
                        </h3>
                        <p className="text-[#212E3F]/70 leading-relaxed max-w-xl">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* ---------- SUB-SERVICES ---------- */}
              {detail.subServices.length > 0 && (
                <section id="capabilities" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("capabilities")}
                    eyebrow="What we deliver"
                    title="Sub-services"
                  />
                  <div className="grid sm:grid-cols-2 gap-px bg-[#212E3F]/8 rounded-2xl overflow-hidden border border-[#212E3F]/8">
                    {detail.subServices.map((sub, i) => (
                      <div
                        key={sub.title}
                        className="group bg-white p-7 hover:bg-[#f9fafb] transition-colors duration-300"
                      >
                        <span className="font-mono text-xs text-[#EB5824] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-bold text-[#212E3F] mt-3 mb-2 group-hover:text-[#EB5824] transition-colors">
                          {sub.title}
                        </h3>
                        <p className="text-sm text-[#212E3F]/65 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ---------- FRAMEWORKS & TOOLS ---------- */}
              {(detail.frameworks.length > 0 || detail.tools.length > 0) && (
                <section id="standards" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("standards")}
                    eyebrow="Standards & enablement"
                    title="Frameworks & tools"
                  />
                  <div className="grid md:grid-cols-2 gap-10">
                    {detail.frameworks.length > 0 && (
                      <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-5">
                          Frameworks & best practices
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {detail.frameworks.map((f) => (
                            <span
                              key={f}
                              className="px-4 py-2 rounded-lg bg-[#f9fafb] border border-[#212E3F]/10 text-sm font-medium text-[#212E3F]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {detail.tools.length > 0 && (
                      <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-5">
                          Tools we use
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {detail.tools.map((t) => (
                            <span
                              key={t}
                              className="px-4 py-2 rounded-lg bg-white border border-[#EB5824]/30 text-sm font-medium text-[#212E3F]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* ---------- WHY US ---------- */}
              {detail.whyUs.length > 0 && (
                <section id="whyus" className="scroll-mt-28 py-16 lg:py-20">
                  <div className="relative rounded-3xl bg-[#212E3F] text-white p-8 lg:p-12 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative z-10">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#EB5824] mb-3">
                        {String(indexOf("whyus")).padStart(2, "0")} &nbsp;/&nbsp; The
                        difference
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        Why Figure8 DX
                      </h2>
                      <div className="grid md:grid-cols-3 gap-8">
                        {detail.whyUs.map((reason, i) => (
                          <div key={reason}>
                            <div className="font-mono text-2xl text-[#EB5824] mb-3">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <p className="text-white/80 leading-relaxed">{reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* ---------- CASE STUDIES ---------- */}
              {caseStudies.length > 0 && (
                <section id="cases" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("cases")}
                    eyebrow="Proof"
                    title="Reference case studies"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    {caseStudies.map((cs) => (
                      <div
                        key={cs.id}
                        className="group rounded-2xl border border-[#212E3F]/10 p-7 hover:border-[#EB5824]/40 hover:shadow-[0_20px_40px_-20px_rgba(33,46,63,0.25)] transition-all duration-300 flex flex-col"
                      >
                        <div className="font-mono text-[11px] uppercase tracking-wide text-[#EB5824] mb-3">
                          {cs.sector}
                        </div>
                        <h3 className="text-lg font-bold text-[#212E3F] leading-snug">
                          {cs.client}
                        </h3>
                        <div className="font-mono text-xs text-[#212E3F]/40 mt-1 mb-5">
                          {cs.country}
                        </div>
                        <p className="text-[#212E3F] font-semibold leading-snug mb-5">
                          {cs.result}
                        </p>
                        <ul className="space-y-2 mt-auto pt-5 border-t border-[#212E3F]/8">
                          {cs.highlights.slice(0, 3).map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2.5 text-sm text-[#212E3F]/65"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5824] mt-1.5 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================ CLOSING CTA ============================ */}
      <section className="relative bg-[#EB5824] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70 mb-5">
            Next step
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Let&apos;s talk about {title}
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-10 font-light">
            A short, no-pressure conversation to explore how we can help — or
            browse our other services.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButtons variant="onColor" />
          </div>
        </div>
      </section>
    </main>
  );
}
