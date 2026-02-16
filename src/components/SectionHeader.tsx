"use client";

import React from "react";

type SectionHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 text-[#212E3F] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg text-[#212E3F]/60 max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

