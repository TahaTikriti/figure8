"use client";

import { useState, useEffect, useRef } from "react";

export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const valuePropositions = [
    {
      title: "Regional Expertise",
      subtitle: "30+ Years Combined Experience",
      description:
        "Deep understanding of MENA and GCC market dynamics, regulatory environments, and cultural nuances that drive successful digital transformation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      stats: "3 Regions",
      color: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      title: "End-to-End Excellence",
      subtitle: "Strategy to Operations",
      description:
        "Comprehensive transformation journey from initial strategy formulation through implementation to ongoing operational embedding and continuous improvement.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      stats: "Full Lifecycle",
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Standards Mastery",
      subtitle: "Global & National Compliance",
      description:
        "Certified expertise in international frameworks (ISO, TOGAF) and national standards (DGA, Qiyas) ensuring compliant and sustainable transformations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      stats: "Multi-Standard",
      color: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      title: "Innovation Catalyst",
      subtitle: "Future-Ready Solutions",
      description:
        "Proven track record in digital innovation, product incubation, and venture co-building that transforms organizations into digital-first enterprises.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "Innovation Labs",
      color: "from-[#212E3F] to-[#2a3750]",
    },
  ];

  const differentiators = [
    {
      metric: "30+",
      label: "Ecosystem Partners",
      description:
        "Strategic alliances across technology, consulting, and implementation partners",
    },
    {
      metric: "Multi-Domain",
      label: "Leadership Team",
      description:
        "Specialized expertise across DT, EA, CX, BPM, and Digital Innovation",
    },
    {
      metric: "Tool-Agnostic",
      label: "Platform Expertise",
      description:
        "Proficient in leading EA, BPM, and CX platforms for seamless integration",
    },
    {
      metric: "Embedded",
      label: "Operations Model",
      description:
        "Not just advisory - we embed specialists for sustained transformation",
    },
  ];

  return (
    <section
      id="value-proposition"
      ref={sectionRef}
      className="bg-[#DDDFE0] text-[#212E3F] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#EB5824] rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#212E3F] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#212E3F] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB5824] bg-[#EB5824]/10 mb-6">
            <div className="w-2 h-2 bg-[#EB5824] rounded-full animate-pulse"></div>
            <span
              className="text-sm font-medium text-[#EB5824]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Why Choose Figure8 DX
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Rufina, serif" }}
          >
            What Sets Us <span className="text-[#EB5824]">Apart</span>
          </h2>

          <p
            className="text-xl text-[#212E3F]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Beyond consulting - we&apos;re your transformation partner with
            proven methodologies, regional expertise, and a commitment to
            sustainable digital excellence.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {valuePropositions.map((value, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                activeValue === index ? "scale-105" : ""
              }`}
              onClick={() => setActiveValue(index)}
              onMouseEnter={() => setActiveValue(index)}
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#EB5824] transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                {/* Value Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>

                    <h3
                      className="text-2xl font-bold mb-2 text-[#212E3F] group-hover:text-[#EB5824] transition-colors duration-300"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {value.title}
                    </h3>

                    <div
                      className="text-[#EB5824] font-semibold mb-4"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {value.subtitle}
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className="text-lg font-bold text-[#EB5824]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {value.stats}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[#212E3F]/70 leading-relaxed text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {value.description}
                </p>

                {/* Hover Indicator */}
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${
                    value.color
                  } rounded-full transform origin-left transition-transform duration-300 ${
                    activeValue === index ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 border border-[#EB5824]/20 shadow-xl">
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Key Differentiators
              </h3>
              <p
                className="text-[#212E3F]/70 max-w-2xl mx-auto"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                What makes Figure8 DX the preferred digital transformation
                partner in the region
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-[#212E3F]/5 rounded-xl hover:bg-[#EB5824]/10 transition-colors duration-300 group"
                >
                  <div
                    className="text-3xl font-bold text-[#EB5824] mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {diff.metric}
                  </div>
                  <div
                    className="font-semibold text-[#212E3F] mb-3"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {diff.label}
                  </div>
                  <p
                    className="text-sm text-[#212E3F]/70 leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology Highlight */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-[#212E3F] to-[#2a3750] rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Our Proven <span className="text-[#EB5824]">Methodology</span>
                </h3>

                <div className="space-y-4">
                  {[
                    "Structured frameworks with clear governance models",
                    "Holistic integration across all business domains",
                    "Industry-leading tool deployment and customization",
                    "Continuous operations with embedded specialists",
                    "Human-centered design principles throughout",
                    "Agile and lean implementation approaches",
                  ].map((method, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                      <span
                        className="text-[#DDDFE0]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#EB5824]/20 rounded-full w-48 h-48 mx-auto flex items-center justify-center mb-6">
                  <div className="bg-[#EB5824] rounded-full w-32 h-32 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className="text-4xl font-bold text-[#EB5824] mb-2"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Transform
                </div>
                <div
                  className="text-xl text-[#DDDFE0]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Build. Thrive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
