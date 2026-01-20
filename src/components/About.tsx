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
        rootMargin: "0px 0px -50px 0px",
      },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#212E3F]">
            About <span className="text-[#EB5824]">Figure8 DX</span>
          </h2>

          <p className="text-lg text-[#212E3F]/60 max-w-2xl mx-auto leading-relaxed">
            Established in 2019, Figure8 Dx works with governments, enterprises,
            startups, and NGOs across the EU, GCC, and MENA.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Company Story */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-6 text-[#212E3F]/70 leading-relaxed">
              We help organizations make digital change useful in practice. That
              means focusing on value, keeping costs under control, and
              designing solutions that people can actually adopt and use.
            </p>

            <p className="text-lg mb-10 text-[#212E3F]/70 leading-relaxed">
              We stay involved beyond strategy and planning, supporting
              organizations through execution and adoption until digital
              initiatives start delivering real outcomes.
            </p>
          </div>

          {/* Trust Image */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#212E3F]/10 shadow-lg">
              <img
                src="/images/business-people-board-room-meeting.jpg"
                alt="Saudi Arabian leadership team in a strategy meeting"
                className="w-full h-[320px] sm:h-[360px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#212E3F]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                Trusted advisory partners for public and enterprise teams
              </div>
            </div>
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-10 border border-[#212E3F]/10 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#212E3F] mb-6">
                Our <span className="text-[#EB5824]">Philosophy</span>
              </h3>
              <p className="text-lg text-[#212E3F]/70 mb-4">
                Our philosophy sits at the intersection of X Ops, the 80/20
                rule, and Kaizen.
              </p>
              <p className="text-base text-[#212E3F]/60">
                We focus on value-driven digital work built through{" "}
                <span className="text-[#EB5824] font-semibold">
                  small, meaningful, and continuous improvement.
                </span>
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-[#212E3F]/70 leading-relaxed">
                <span className="text-[#EB5824] font-semibold">Figure8Dx</span>{" "}
                represents a continuous loop between strategy and execution,
                where learning and improvement are built into delivery, not
                added later.
              </p>
            </div>

            {/* Philosophy Framework */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* X Ops */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#212E3F]/5 to-[#212E3F]/10 border border-[#212E3F]/10 hover:border-[#212E3F]/20 transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mx-auto mb-4">
                    <div className="w-8 h-8 bg-[#212E3F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">×</span>
                    </div>
                    <div className="w-12 h-12 bg-[#EB5824] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xs">Ops</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                  X <span className="text-[#EB5824]">Ops</span>
                </h4>
                <div className="space-y-3 text-sm text-[#212E3F]/70">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Everything Ops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Holistic Digital Ops Framework</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Digital Factory</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Ops Visibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Ops Continuous Improvement</p>
                  </div>
                </div>
              </div>

              {/* 80/20 Rule */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#EB5824]/5 to-[#EB5824]/10 border border-[#EB5824]/10 hover:border-[#EB5824]/20 transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mx-auto mb-4">
                    <div className="w-8 h-8 bg-[#212E3F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xs">20%</span>
                    </div>
                    <div className="w-16 h-16 bg-[#EB5824] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">80%</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                  <span className="text-[#EB5824]">80 / 20</span> Rule
                </h4>
                <div className="space-y-3 text-sm text-[#212E3F]/70">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#212E3F] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Roughly 80% of results come from 20% of causes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#212E3F] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Focus on what Matters</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#212E3F] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Smart Prioritization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#212E3F] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Faster time-to-market</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#212E3F] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Value Realization</p>
                  </div>
                </div>
              </div>

              {/* Kaizen */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#212E3F]/5 to-[#EB5824]/5 border border-[#212E3F]/10 hover:border-[#EB5824]/20 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mx-auto mb-4">
                    <div className="w-8 h-8 bg-[#212E3F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">i1</span>
                    </div>
                    <div className="w-16 h-16 bg-[#EB5824] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">i2</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                  <span className="text-[#EB5824]">Kaizen</span>
                </h4>
                <div className="space-y-3 text-sm text-[#212E3F]/70">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Good Change</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Small, Incremental Change</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Employee Involvement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Waste Reduction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0 mt-1.5"></div>
                    <p>Continuous Improvement</p>
                  </div>
                </div>
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
              <h3 className="text-3xl font-bold text-[#212E3F] mb-4">
                Our Expertise
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "30+",
                  label: "Technology Partners",
                  description:
                    "Strategic alliances with leading technology providers",
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
                  <div className="text-2xl font-bold text-[#EB5824] mb-2">
                    {diff.metric}
                  </div>
                  <div className="font-semibold text-[#212E3F] mb-2 text-sm">
                    {diff.label}
                  </div>
                  <p className="text-xs text-[#212E3F]/60 leading-relaxed">
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
