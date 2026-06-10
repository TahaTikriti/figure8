import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Byline from "@/components/blog/Byline";
import ArticleBody from "@/components/blog/ArticleBody";
import PostCard from "@/components/blog/PostCard";
import {
  getAllPostSlugs,
  getPostBySlug,
  getAuthor,
  getRelatedPosts,
  formatDate,
  readingTime,
  authorInitials,
} from "@/config/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  const url = `https://www.figure8dx.com/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Figure8 DX`,
      description: post.excerpt,
      url,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthor(post.authorId);
  const related = getRelatedPosts(post);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Article header */}
        <article>
          <header className="bg-white">
            <div className="max-w-3xl mx-auto px-6 pt-14 pb-10">
              <nav
                className="font-mono text-xs text-[#212E3F]/40 mb-8"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-[#EB5824] transition-colors">
                  home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/blog"
                  className="hover:text-[#EB5824] transition-colors"
                >
                  insights
                </Link>
              </nav>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#EB5824]/10 text-[#EB5824]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#212E3F] leading-[1.08] mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-[#212E3F]/60 leading-relaxed font-light mb-8">
                {post.excerpt}
              </p>

              <Byline
                author={author}
                date={formatDate(post.date)}
                readingMins={readingTime(post)}
                size="lg"
              />
            </div>
          </header>

          {/* Cover */}
          <div className="max-w-5xl mx-auto px-6 mb-12">
            {post.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-[280px] md:h-[440px] object-cover rounded-3xl border border-[#212E3F]/10"
              />
            ) : (
              <div className="relative w-full h-[280px] md:h-[440px] rounded-3xl bg-gradient-to-br from-[#212E3F] to-[#33445c] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
                <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#EB5824]/30 blur-3xl" />
              </div>
            )}
          </div>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-6">
            <ArticleBody blocks={post.body} />

            {/* Author bio */}
            <div className="mt-16 pt-10 border-t border-[#212E3F]/10">
              <div className="flex items-start gap-5 rounded-2xl bg-[#f9fafb] border border-[#212E3F]/10 p-7">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#EB5824] to-[#d54d1e] text-white font-bold text-lg flex items-center justify-center">
                  {authorInitials(author.name)}
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[#212E3F]/40 mb-1">
                    Written by
                  </div>
                  <div className="text-lg font-bold text-[#212E3F]">
                    {author.name}
                  </div>
                  <div className="text-sm text-[#EB5824] font-medium mb-2">
                    {author.role}
                  </div>
                  <p className="text-sm text-[#212E3F]/70 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-8">
                Keep reading
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative bg-[#212E3F] text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a transformation challenge?
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-8 font-light">
              Let&apos;s turn these ideas into outcomes for your organization.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#EB5824] hover:bg-[#d54d1e] text-white px-8 py-4 rounded-lg font-bold transition-colors duration-300"
            >
              Let&apos;s Connect
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
