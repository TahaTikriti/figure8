import { Author, authorInitials } from "@/config/blog";

/**
 * Author byline with an initials-avatar fallback (no photo required).
 * `size="lg"` is used on the article page; the default is for cards.
 */
export default function Byline({
  author,
  date,
  readingMins,
  size = "sm",
  onDark = false,
}: {
  author: Author;
  date: string;
  readingMins?: number;
  size?: "sm" | "lg";
  onDark?: boolean;
}) {
  const lg = size === "lg";
  const nameColor = onDark ? "text-white" : "text-[#212E3F]";
  const metaColor = onDark ? "text-white/60" : "text-[#212E3F]/50";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex-shrink-0 rounded-full bg-gradient-to-br from-[#EB5824] to-[#d54d1e] text-white font-bold flex items-center justify-center ${
          lg ? "w-12 h-12 text-base" : "w-9 h-9 text-xs"
        }`}
        aria-hidden="true"
      >
        {author.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={author.avatar}
            alt={author.name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          authorInitials(author.name)
        )}
      </div>
      <div className="leading-tight">
        <div className={`font-semibold ${lg ? "text-sm" : "text-xs"} ${nameColor}`}>
          {author.name}
        </div>
        <div className={`font-mono text-[11px] ${metaColor}`}>
          {date}
          {readingMins ? ` · ${readingMins} min read` : ""}
        </div>
      </div>
    </div>
  );
}
