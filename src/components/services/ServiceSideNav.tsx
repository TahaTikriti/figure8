"use client";

import { useEffect, useState } from "react";

export type NavSection = { id: string; label: string };

/**
 * Sticky in-page navigation for service detail pages.
 * Tracks the section currently in view (scroll-spy) and keeps a persistent
 * CTA visible while reading. Desktop only — rendered inside the left rail.
 */
export default function ServiceSideNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleSchedule = () => {
    window.open(
      "https://www.cal.eu/connect-figure8dx/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="sticky top-28">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#212E3F]/40 mb-5">
        On this page
      </div>

      <nav className="flex flex-col">
        {sections.map((s, i) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-center gap-3 py-2 pl-4 border-l-2 transition-all duration-300 ${
                isActive
                  ? "border-[#EB5824] text-[#212E3F]"
                  : "border-[#212E3F]/10 text-[#212E3F]/50 hover:text-[#212E3F] hover:border-[#212E3F]/30"
              }`}
            >
              <span
                className={`font-mono text-[11px] tabular-nums transition-colors ${
                  isActive ? "text-[#EB5824]" : "text-[#212E3F]/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{s.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Persistent CTA */}
      <div className="mt-10 rounded-2xl bg-[#212E3F] p-6 text-white">
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Have a challenge in this area? Let&apos;s talk it through.
        </p>
        <button
          onClick={handleSchedule}
          className="w-full bg-[#EB5824] hover:bg-[#d54d1e] text-white text-sm font-bold py-3 rounded-lg transition-colors duration-300"
        >
          Book a meeting
        </button>
      </div>
    </div>
  );
}
