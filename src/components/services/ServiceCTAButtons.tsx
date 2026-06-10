"use client";

import Link from "next/link";

/**
 * Call-to-action buttons used on service detail pages.
 * `variant="onColor"` renders light buttons for use on the orange CTA band.
 */
export default function ServiceCTAButtons({
  variant = "default",
}: {
  variant?: "default" | "onColor";
}) {
  const handleScheduleMeeting = () => {
    window.open(
      "https://www.cal.eu/connect-figure8dx/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const onColor = variant === "onColor";

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleScheduleMeeting}
        className={`group px-7 py-4 rounded-lg font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg ${
          onColor
            ? "bg-white text-[#212E3F] hover:bg-white/90"
            : "bg-[#EB5824] text-white hover:bg-[#d54d1e]"
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          Let&apos;s Connect
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </button>

      <Link
        href="/services"
        className={`px-7 py-4 rounded-lg font-bold text-base text-center transition-all duration-300 border ${
          onColor
            ? "border-white/60 text-white hover:bg-white/10"
            : "border-[#212E3F]/20 text-[#212E3F] hover:border-[#EB5824] hover:text-[#EB5824]"
        }`}
      >
        View All Services
      </Link>
    </div>
  );
}
