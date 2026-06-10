import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { INDUSTRIES } from "@/config/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Figure8 DX experience across government, healthcare, education, energy, telecom, and transportation & logistics.",
  alternates: { canonical: "https://www.figure8dx.com/industries" },
};

export default function IndustriesIndexPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
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
            <nav
              className="font-mono text-xs text-white/50 mb-10"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                home
              </Link>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-[#EB5824]">industries</span>
            </nav>

            <div className="max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#EB5824] mb-5">
                Sectors
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
                Industries we serve
              </h1>
              <p className="text-lg md:text-2xl text-white/75 leading-relaxed font-light">
                Proven experience delivering transformation across the public and
                private sectors of the GCC and MENA region.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5824]/40 to-transparent" />
        </section>

        {/* Grid */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#212E3F]/8 rounded-2xl overflow-hidden border border-[#212E3F]/8">
              {INDUSTRIES.map((industry, i) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white p-8 hover:bg-[#f9fafb] transition-colors duration-300 flex flex-col min-h-[220px]"
                >
                  <span className="font-mono text-xs text-[#EB5824] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-[#212E3F] mt-4 mb-2 group-hover:text-[#EB5824] transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-sm text-[#212E3F]/65 leading-relaxed mb-6">
                    {industry.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#212E3F] group-hover:text-[#EB5824] transition-colors">
                    Explore sector
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
