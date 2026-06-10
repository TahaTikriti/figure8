import Link from "next/link";
import { Post, getAuthor, formatDate, readingTime } from "@/config/blog";
import Byline from "./Byline";

/**
 * Cover visual: uses the post's image if present, otherwise a branded
 * gradient with a dot-grid texture so cards look intentional without art.
 */
function Cover({ post, tall = false }: { post: Post; tall?: boolean }) {
  const height = tall ? "h-72 lg:h-full" : "h-48";

  if (post.coverImage) {
    return (
      <div className={`relative ${height} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#212E3F]/40 to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${height} bg-gradient-to-br from-[#212E3F] to-[#33445c] overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#EB5824]/30 blur-2xl" />
      <span className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-widest text-white/70">
        {post.tags[0]}
      </span>
    </div>
  );
}

export default function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  const author = getAuthor(post.authorId);

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-[#212E3F]/10 hover:border-[#EB5824]/40 hover:shadow-[0_30px_60px_-30px_rgba(33,46,63,0.3)] transition-all duration-300 bg-white"
      >
        <Cover post={post} tall />
        <div className="p-8 lg:p-10 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#EB5824]">
              Featured
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#212E3F] leading-tight mb-4 group-hover:text-[#EB5824] transition-colors">
            {post.title}
          </h2>
          <p className="text-[#212E3F]/65 leading-relaxed mb-8">{post.excerpt}</p>
          <div className="mt-auto">
            <Byline
              author={author}
              date={formatDate(post.date)}
              readingMins={readingTime(post)}
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-[#212E3F]/10 hover:border-[#EB5824]/40 hover:shadow-[0_24px_48px_-28px_rgba(33,46,63,0.3)] transition-all duration-300 bg-white"
    >
      <Cover post={post} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EB5824]/10 text-[#EB5824]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-[#212E3F] leading-snug mb-2 group-hover:text-[#EB5824] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-[#212E3F]/60 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-5 border-t border-[#212E3F]/8">
          <Byline
            author={author}
            date={formatDate(post.date)}
            readingMins={readingTime(post)}
          />
        </div>
      </div>
    </Link>
  );
}
