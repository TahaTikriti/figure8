import Link from "next/link";
import { Industry } from "@/config/industries";
import { getCaseStudies, getServicesByIds } from "@/config/serviceDetails";
import ServiceCTAButtons from "@/components/services/ServiceCTAButtons";
import ServiceSideNav, {
  NavSection,
} from "@/components/services/ServiceSideNav";

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

export default function IndustryDetailView({ industry }: { industry: Industry }) {
  const caseStudies = getCaseStudies(industry.caseStudies);
  const relatedServices = getServicesByIds(industry.relatedServices);

  const sections: (NavSection & { render: boolean })[] = [
    { id: "overview", label: "Overview", render: true },
    { id: "challenges", label: "Challenges", render: industry.challenges.length > 0 },
    { id: "capabilities", label: "What we deliver", render: industry.capabilities.length > 0 },
    { id: "services", label: "Related services", render: relatedServices.length > 0 },
    { id: "cases", label: "Case studies", render: caseStudies.length > 0 },
  ];
  const nav = sections.filter((s) => s.render).map(({ id, label }) => ({ id, label }));
  const indexOf = (id: string) => nav.findIndex((s) => s.id === id) + 1;

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#212E3F] text-white overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-[#EB5824]/20 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20">
          <nav className="font-mono text-xs text-white/50 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <Link href="/industries" className="hover:text-white transition-colors">
              industries
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-[#EB5824]">{industry.slug}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#EB5824] mb-5">
              Sector
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
              {industry.name}
            </h1>
            <p className="text-lg md:text-2xl text-white/75 leading-relaxed font-light mb-10">
              {industry.tagline}
            </p>
            <ServiceCTAButtons />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5824]/40 to-transparent" />
      </section>

      {/* BODY */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-[230px_1fr] lg:gap-16 xl:gap-24">
            <aside className="hidden lg:block py-20">
              <ServiceSideNav sections={nav} />
            </aside>

            <div className="py-16 lg:py-20 divide-y divide-[#212E3F]/8">
              {/* OVERVIEW */}
              <section id="overview" className="scroll-mt-28 pb-16 lg:pb-20">
                <SectionHeading
                  index={indexOf("overview")}
                  eyebrow="Overview"
                  title={`How we partner in ${industry.name.toLowerCase()}`}
                />
                <p className="text-xl text-[#212E3F]/70 leading-relaxed font-light max-w-2xl">
                  {industry.description}
                </p>
              </section>

              {/* CHALLENGES */}
              {industry.challenges.length > 0 && (
                <section id="challenges" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("challenges")}
                    eyebrow="The problem space"
                    title="Challenges we solve"
                  />
                  <div className="space-y-px">
                    {industry.challenges.map((c, i) => (
                      <div
                        key={c}
                        className="group flex items-center gap-6 py-5 border-t border-[#212E3F]/8 first:border-t-0 hover:pl-2 transition-all duration-300"
                      >
                        <span className="font-mono text-sm text-[#EB5824] tabular-nums w-8 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-lg text-[#212E3F]/80 leading-snug">{c}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CAPABILITIES */}
              {industry.capabilities.length > 0 && (
                <section id="capabilities" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("capabilities")}
                    eyebrow="Our role"
                    title="What we deliver"
                  />
                  <div className="grid sm:grid-cols-2 gap-px bg-[#212E3F]/8 rounded-2xl overflow-hidden border border-[#212E3F]/8">
                    {industry.capabilities.map((cap, i) => (
                      <div
                        key={cap}
                        className="bg-white p-7 hover:bg-[#f9fafb] transition-colors duration-300"
                      >
                        <span className="font-mono text-xs text-[#EB5824] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[#212E3F] font-semibold mt-3 leading-snug">
                          {cap}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* RELATED SERVICES */}
              {relatedServices.length > 0 && (
                <section id="services" className="scroll-mt-28 py-16 lg:py-20">
                  <SectionHeading
                    index={indexOf("services")}
                    eyebrow="Capabilities applied"
                    title="Related services"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.detail.slug}`}
                        className="group rounded-2xl border border-[#212E3F]/10 p-7 hover:border-[#EB5824]/40 hover:shadow-[0_20px_40px_-20px_rgba(33,46,63,0.25)] transition-all duration-300 flex flex-col"
                      >
                        <h3 className="text-lg font-bold text-[#212E3F] group-hover:text-[#EB5824] transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#212E3F]/65 leading-relaxed mb-6">
                          {service.detail.tagline}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#EB5824]">
                          View service
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CASE STUDIES */}
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

      {/* CLOSING CTA */}
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
            Transforming {industry.name.toLowerCase()}?
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-10 font-light">
            Let&apos;s explore what transformation looks like for your
            organization.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButtons variant="onColor" />
          </div>
        </div>
      </section>
    </main>
  );
}
