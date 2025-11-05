"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#212E3F]"
            style={{ fontFamily: "Rufina, serif" }}
          >
            About <span className="text-[#EB5824]">Figure8 DX</span>
          </h2>

          <p
            className="text-lg text-[#212E3F]/60 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Leading digital transformation consultancy established in 2017, serving governmental and enterprise clients across EU, GCC, and MENA regions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Company Story */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p
              className="text-lg mb-10 text-[#212E3F]/70 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Figure8 DX partners with governments, NGOs, startups, and international organizations to drive digital excellence and operational transformation across multiple sectors.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Strategic digital transformation advisory",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Global presence across EU, GCC & MENA",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  text: "30+ strategic partnerships worldwide",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  text: "ISO 9001 certified with proven compliance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span
                    className="text-[#212E3F]/80 font-medium text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo Display */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl p-12 border border-[#212E3F]/10 shadow-lg flex items-center justify-center">
                <img 
                  src="/Figure8-12.png" 
                  alt="Figure8 DX Logo" 
                  className="w-full h-auto max-w-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators Section */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-10 border border-[#212E3F]/10 shadow-sm">
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Our Expertise
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "30+",
                  label: "Technology Partners",
                  description: "Strategic alliances with leading technology providers",
                },
                {
                  metric: "Multi-Domain",
                  label: "Leadership",
                  description: "Expert team across DT, EA, CX, BPM domains",
                },
                {
                  metric: "Platform",
                  label: "Expertise",
                  description: "Certified in Alfabet, Orbus, LeanIX, ARIS",
                },
                {
                  metric: "Embedded",
                  label: "Operations",
                  description: "Continuous support beyond advisory",
                },
              ].map((diff, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-[#f9fafb] border border-[#212E3F]/5 hover:border-[#EB5824]/20 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="text-2xl font-bold text-[#EB5824] mb-2"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {diff.metric}
                  </div>
                  <div
                    className="font-semibold text-[#212E3F] mb-2 text-sm"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {diff.label}
                  </div>
                  <p
                    className="text-xs text-[#212E3F]/60 leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
