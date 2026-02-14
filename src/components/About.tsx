"use client";

import { useState, useEffect, useRef } from "react";
import ExpertiseLogos from "./ExpertiseLogos";

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
            Established in 2019, Figure8 DX works with governments, enterprises,
            startups, and NGOs across the GCC, MENA, and EU.
          </p>
        </div>

        {/* Main Content Grid */}

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
                Our philosophy sits at the intersection of{" "}
                <span className="text-[#EB5824] font-bold">X Ops</span> ,{" "}
                <span className="text-[#EB5824] font-bold"> 80/20 </span>
                Rule, and{" "}
                <span className="text-[#EB5824] font-bold">Kaizen</span>.
              </p>
              <p className="text-base text-[#212E3F]/60">
                We focus on value-driven digital work built through{" "}
                <span className="font-semibold">
                  small, meaningful, and continuous improvement.
                </span>
              </p>
            </div>

            {/* <div className="text-center mb-8">
              <p className="text-lg text-[#212E3F]/70 leading-relaxed">
                <span className="text-[#EB5824] font-semibold">Figure8Dx</span>{" "}
                represents a continuous loop between strategy and execution,
                where learning and improvement are built into delivery, not
                added later.
              </p>
            </div> */}

            {/* Philosophy Framework */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* X Ops */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gray-50 border border-[#212E3F]/6 hover:border-[#212E3F]/20 transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-6">
                  <div className="transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
                    <div className="relative flex items-center justify-center mx-auto mb-4 w-56 h-32">
                      <img
                        src="/Figure8-cropped.png"
                        alt="Figure8 Logo"
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        X
                      </span>
                      <span className="absolute left-[74%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        Ops
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                      <span className="inline-block bg-white text-[#212E3F] ring-1 ring-gray-100 px-3 py-1 rounded-md shadow-sm">
                        X <span className="text-[#EB5824]">Ops</span>
                      </span>
                    </h4>
                    <div className="space-y-3 text-sm text-[#212E3F]/70 text-center">
                      <p>Everything Ops</p>
                      <p>Holistic Digital Ops Framework</p>
                      <p>Digital Factory</p>
                      <p>Ops Visibility</p>
                      <p>Ops Continuous Improvement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 80/20 Rule */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gray-50 border border-[#EB5824]/8 hover:border-[#EB5824]/20 transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-6">
                  <div className="transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
                    <div className="relative flex items-center justify-center mx-auto mb-4 w-56 h-32">
                      <img
                        src="/Figure8-cropped.png"
                        alt="Figure8 Logo"
                        className="w-full h-full object-contain"
                      />
                      <span className="text-[#EB5824] absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        20%
                      </span>
                      <span className="absolute left-[74%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        80%
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                      <span className="inline-block bg-white text-[#212E3F] ring-1 ring-gray-100 px-3 py-1 rounded-md shadow-sm">
                        <span className="text-[#EB5824]">80 / 20</span> Rule
                      </span>
                    </h4>
                    <div className="space-y-3 text-sm text-[#212E3F]/70 text-center">
                      <p>Roughly 80% of results come from 20% of causes</p>
                      <p>Focus on what Matters</p>
                      <p>Smart Prioritization</p>
                      <p>Faster time-to-market</p>
                      <p>Value Realization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kaizen */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gray-50 border border-[#212E3F]/6 hover:border-[#212E3F]/20 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
                    <div className="relative flex items-center justify-center mx-auto mb-4 w-56 h-32">
                      <img
                        src="/Figure8-cropped.png"
                        alt="Figure8 Logo"
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        i1
                      </span>
                      <span className="absolute left-[74%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                        i2
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
                      <span className="inline-block bg-white text-[#212E3F] ring-1 ring-gray-100 px-3 py-1 rounded-md shadow-sm">
                        Kaizen
                      </span>
                    </h4>
                    <div className="space-y-3 text-sm text-[#212E3F]/70 text-center">
                      <p>Good Change</p>
                      <p>Small, Incremental Change</p>
                      <p>Employee Involvement</p>
                      <p>Waste Reduction</p>
                      <p>Continuous Improvement</p>
                    </div>
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

            {/* Expertise Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  metric: "Frameworks",
                  label: "Expertise",
                  description:
                    "Expertise in international and national standards and best practices like TOGAF, ITIL, COBIT, ISO42010, ISO20000, CMMI, QIYAS, DXMI, NDI, NAII",
                },
                {
                  metric: "Platforms",
                  label: "Expertise",
                  description:
                    "Deep expertise in platforms like Alfabet, Orbus iServer, BizzDesign, ARIS, OvalEdge, and more.",
                },
                {
                  metric: "Industries",
                  label: "Expertise",
                  description:
                    "Expertise in industries like Government, Healthcare, Education, Energy, Telecom, Hospitality, Transportation & Logistics, and Manufacturing",
                },
                {
                  metric: "Regional",
                  label: "Expertise",
                  description:
                    "Proven experience delivering transformation initiatives across KSA, UAE, Oman, Kuwait, Qatar, and Lebanon.",
                },
              ].map((diff, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center p-6 rounded-lg bg-[#f9fafb] border border-[#212E3F]/10 hover:border-[#EB5824]/20 hover:shadow-md transition-all duration-300 min-h-[220px]"
                >
                  <div className="text-2xl font-bold text-[#EB5824] mb-1">
                    {diff.metric}
                  </div>
                  <div className="text-sm font-medium text-[#212E3F]/80 mb-3 tracking-wide">
                    {diff.label}
                  </div>
                  <hr className="w-10 border-t border-[#EB5824]/30 mb-3" />
                  <p className="text-sm text-[#212E3F]/70 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise Logos */}
            <ExpertiseLogos
              internationalLogos={[
                { name: "TOGAF", imagePath: "/images/standards/Togaf.png" },
                { name: "ITIL", imagePath: "/images/standards/ITIL.png" },
                { name: "COBIT", imagePath: "/images/standards/cobit.png" },
                {
                  name: "ISO 20000",
                  imagePath: "/images/standards/iso2000.png",
                },
                {
                  name: "ISO 27001",
                  imagePath: "/images/standards/iso27001.png",
                },
                {
                  name: "ISO 38500",
                  imagePath: "/images/standards/iso38500.png",
                },
                {
                  name: "ISO 22301",
                  imagePath: "/images/standards/iso22301.png",
                },
                { name: "CMMI", imagePath: "/images/standards/cmmi.png" },
                {
                  name: "ArchiMate",
                  imagePath: "/images/standards/archimate.png",
                },
                { name: "SAFe", imagePath: "/images/standards/SAFe.png" },
                { name: "DevOps", imagePath: "/images/standards/devops.png" },
                { name: "DAMA", imagePath: "/images/standards/DAMA.png" },
                { name: "GDPR", imagePath: "/images/standards/gdpr.png" },
                { name: "NIST", imagePath: "/images/standards/NIST.png" },
                { name: "Prosci", imagePath: "/images/standards/prosci.png" },
                { name: "W3C", imagePath: "/images/standards/W3C.png" },
                { name: "SOA", imagePath: "/images/standards/SOA.png" },
                { name: "EFQM", imagePath: "/images/standards/EFQM.png" },
                { name: "GII", imagePath: "/images/standards/GII.png" },
                { name: "OMG", imagePath: "/images/standards/omg.png" },
                {
                  name: "The Open Group",
                  imagePath: "/images/standards/the open group.png",
                },
              ]}
              ksaLogos={
                [
                  // Add KSA-specific standards when available in /images/ksa-standards/
                ]
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
