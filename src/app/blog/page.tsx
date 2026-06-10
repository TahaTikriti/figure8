import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, getFeaturedPost } from "@/config/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from Figure8 DX on digital transformation, enterprise architecture, AI governance, and innovation across the GCC and MENA.",
  alternates: { canonical: "https://www.figure8dx.com/blog" },
};

export default function BlogIndexPage() {
  const featured = getFeaturedPost();
  const rest = getAllPosts().filter((p) => p.slug !== featured.slug);

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
            <nav className="font-mono text-xs text-white/50 mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                home
              </Link>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-[#EB5824]">insights</span>
            </nav>

            <div className="max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#EB5824] mb-5">
                Insights
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
                Ideas worth building on
              </h1>
              <p className="text-lg md:text-2xl text-white/75 leading-relaxed font-light">
                Perspectives on digital transformation, enterprise architecture,
                and innovation from the Figure8 DX team.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB5824]/40 to-transparent" />
        </section>

        {/* Featured */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20">
            <PostCard post={featured} featured />
          </div>
        </section>

        {/* Latest grid */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-8">
              Latest articles
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
