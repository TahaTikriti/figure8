import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllServices } from "@/config/serviceDetails";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Figure8 DX services across digital transformation, enterprise architecture, customer experience, BPM, data, AI governance, and innovation.",
  alternates: { canonical: "https://www.figure8dx.com/services" },
};

export default function ServicesIndexPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#212E3F] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]">
            <div className="absolute top-16 right-24 w-72 h-72 border border-[#EB5824] rounded-full" />
            <div className="absolute -bottom-10 left-10 w-48 h-48 border border-white rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 relative z-10">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 max-w-3xl">
              Our <span className="text-[#EB5824]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              Comprehensive digital transformation services designed for
              governmental and enterprise excellence.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.detail.slug}`}
                  className="group bg-[#f9fafb] rounded-xl p-7 border border-[#212E3F]/10 hover:border-[#EB5824]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <h2 className="text-xl font-bold text-[#212E3F] mb-2 group-hover:text-[#EB5824] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#212E3F]/70 leading-relaxed mb-6">
                    {service.detail.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#EB5824]">
                    Learn more
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
