import { ContentBlock } from "@/config/blog";

/**
 * Renders an article's content blocks. Manual typographic styling (no prose
 * plugin) keeps full control over the brand's editorial look.
 */
export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold text-[#212E3F] tracking-tight mt-14 mb-5"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className="text-lg text-[#212E3F]/80 leading-[1.8] mb-6"
              >
                {block.text}
              </p>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 pl-6 border-l-[3px] border-[#EB5824]"
              >
                <p className="text-xl md:text-2xl font-light italic text-[#212E3F] leading-snug">
                  “{block.text}”
                </p>
                {block.cite && (
                  <cite className="block mt-3 font-mono text-xs not-italic uppercase tracking-widest text-[#212E3F]/40">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );

          case "list":
            return (
              <ul key={i} className="space-y-3 mb-8">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EB5824] mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-[#212E3F]/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={i} className="my-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-2xl border border-[#212E3F]/10"
                />
                {block.caption && (
                  <figcaption className="mt-3 font-mono text-xs text-[#212E3F]/40 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
