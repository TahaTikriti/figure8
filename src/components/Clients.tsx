"use client";

import { useState, useEffect, useRef } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClient, setActiveClient] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: "Royal Commission of Jubail & Yanbu",
      shortName: "RCJY",
      industry: "Public, Health, Real Estate, Education",
      country: "Saudi Arabia",
      logo: "RCJY", // Placeholder for actual logo
      description:
        "Comprehensive enterprise architecture transformation across multiple sectors including health, education, and real estate.",
      achievements: [
        "Established EA office and operating model, running for 2 years",
        "Built business capability models for health, education, and real estate",
        "Automated demand lifecycle for technology adoption",
        "Rationalized application portfolio",
        "Delivered Business Process Catalogue in under 6 weeks",
      ],
      objectives: [
        "Improve IT performance",
        "Operationalize transformation management",
        "Optimize IT assets",
        "Enhance compliance",
      ],
      impact: "2+ Years",
      sector: "Government",
      gradient: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      name: "Saudi Center for International Strategic Partnerships",
      shortName: "SCISP",
      industry: "Public, Strategic Partnerships",
      country: "Saudi Arabia",
      logo: "SCISP",
      description:
        "Digital transformation strategy development and enterprise architecture implementation for strategic partnerships.",
      achievements: [
        "Developed comprehensive digital transformation and IT strategy",
        "Built detailed business capability models",
        "Designed integrated DT/IT operating model",
        "Rationalized application portfolio",
        "Implemented MEGA EA tool for architecture",
      ],
      objectives: [
        "Define EA taxonomy",
        "Establish baseline and future architecture",
        "Create transformation roadmap",
        "Budget planning",
      ],
      impact: "Full DT Strategy",
      sector: "Government",
      gradient: "from-[#212E3F] to-[#2a3750]",
    },
    {
      name: "Elm",
      shortName: "Elm",
      industry: "Semi-Governmental",
      country: "Saudi Arabia",
      logo: "ELM",
      description:
        "Enterprise architecture office establishment with comprehensive governance framework and ongoing operational support.",
      achievements: [
        "Established EA Office with Orbus iServer tool",
        "Documented comprehensive As-Is architecture",
        "Designed strategic To-Be vision",
        "Defined EA principles and governance",
        "Provided ongoing EA operations support",
      ],
      objectives: [
        "Centralized architecture repository",
        "Enhanced decision-making",
        "Sustainable governance framework",
      ],
      impact: "Ongoing Support",
      sector: "Semi-Government",
      gradient: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      name: "King Faisal Specialist Hospital & Research Center",
      shortName: "KFSH&RC",
      industry: "Health",
      country: "Saudi Arabia",
      logo: "KFSH",
      description:
        "Healthcare transformation through enterprise architecture and business process optimization under confederated model.",
      achievements: [
        "Established EA office under confederated model",
        "Improved strategic alignment and performance KPIs",
        "Enhanced collaboration between business and IT",
        "Delivered Business Process Catalogue in under 6 weeks",
        "Defined outcomes-based roadmap",
      ],
      objectives: [
        "Support organizational growth",
        "Standardize processes",
        "Enable IT portfolio management",
        "Ensure ISO and TOGAF compliance",
      ],
      impact: "6 Weeks Delivery",
      sector: "Healthcare",
      gradient: "from-[#212E3F] to-[#2a3750]",
    },
  ];

  const sectors = [
    {
      name: "Government",
      count: "60%",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      count: "25%",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Enterprise",
      count: "15%",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="bg-[#212E3F] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-64 h-64 border border-[#EB5824] rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#EB5824] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#DDDFE0] rotate-45"></div>
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
              Proven Track Record
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Client <span className="text-[#EB5824]">Success Stories</span>
          </h2>

          <p
            className="text-xl text-[#DDDFE0] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Transforming organizations across governments, healthcare, and
            enterprises in the MENA and GCC regions with measurable results and
            lasting impact.
          </p>
        </div>

        {/* Client Showcase Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                activeClient === index ? "scale-105" : ""
              }`}
              onClick={() => setActiveClient(index)}
            >
              <div className="bg-gradient-to-br from-[#2a3750] to-[#212E3F] rounded-2xl p-8 border border-[#EB5824]/20 hover:border-[#EB5824] transition-all duration-300 h-full">
                {/* Client Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 bg-[#EB5824]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#EB5824]/30 transition-colors duration-300">
                      <span
                        className="text-[#EB5824] font-bold text-sm"
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        {client.logo}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold mb-2 text-white group-hover:text-[#EB5824] transition-colors duration-300"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {client.shortName}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-[#EB5824]/20 text-[#EB5824] rounded-full">
                        {client.sector}
                      </span>
                      <span className="text-xs px-2 py-1 bg-[#DDDFE0]/20 text-[#DDDFE0] rounded-full">
                        {client.country}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className="text-2xl font-bold text-[#EB5824]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {client.impact}
                    </div>
                    <div
                      className="text-xs text-[#DDDFE0]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Impact Timeline
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[#DDDFE0] leading-relaxed mb-6 text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {client.description}
                </p>

                {/* Key Achievements Preview */}
                <div className="space-y-2 mb-4">
                  {client.achievements
                    .slice(0, 3)
                    .map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                        <span
                          className="text-[#DDDFE0] text-xs leading-relaxed"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {achievement}
                        </span>
                      </div>
                    ))}
                  {client.achievements.length > 3 && (
                    <div className="text-[#EB5824] text-xs font-medium">
                      +{client.achievements.length - 3} more achievements
                    </div>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center gap-2 text-[#EB5824] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    View Full Case Study
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Client Case Study */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-[#2a3750] to-[#212E3F] rounded-2xl p-8 border border-[#EB5824]/20 mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Client Details */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#EB5824]/20 rounded-lg flex items-center justify-center">
                    <span
                      className="text-[#EB5824] font-bold text-sm"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {clients[activeClient].logo}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {clients[activeClient].name}
                    </h3>
                    <div
                      className="text-[#EB5824] font-semibold"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {clients[activeClient].industry}
                    </div>
                  </div>
                </div>

                <p
                  className="text-lg text-[#DDDFE0] mb-8 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {clients[activeClient].description}
                </p>

                {/* Achievements */}
                <h4
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {clients[activeClient].achievements.map(
                    (achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                        <span
                          className="text-[#DDDFE0] text-sm"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {achievement}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Objectives */}
                <h4
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Project Objectives
                </h4>
                <div className="flex flex-wrap gap-3">
                  {clients[activeClient].objectives.map((objective, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#EB5824]/20 text-[#EB5824] rounded-full text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {objective}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Navigation */}
              <div>
                <h4
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Client Portfolio
                </h4>

                <div className="space-y-3">
                  {clients.map((client, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveClient(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeClient === index
                          ? "bg-[#EB5824] text-white"
                          : "bg-[#212E3F]/50 text-[#DDDFE0] hover:bg-[#EB5824]/20"
                      }`}
                    >
                      <div
                        className="font-semibold text-sm mb-1"
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        {client.shortName}
                      </div>
                      <div
                        className="text-xs opacity-75"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {client.sector} • {client.impact}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Distribution & Stats */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sector Breakdown */}
            <div>
              <h3
                className="text-3xl font-bold text-white mb-8"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Client Sector Distribution
              </h3>

              <div className="space-y-6">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EB5824]/20 rounded-lg flex items-center justify-center text-[#EB5824]">
                      {sector.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className="font-semibold text-white"
                          style={{ fontFamily: "Rufina, serif" }}
                        >
                          {sector.name}
                        </span>
                        <span
                          className="text-[#EB5824] font-bold"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {sector.count}
                        </span>
                      </div>
                      <div className="w-full bg-[#212E3F]/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] h-2 rounded-full transition-all duration-1000"
                          style={{ width: sector.count }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Impact Stats */}
            <div>
              <h3
                className="text-3xl font-bold text-white mb-8"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Impact Metrics
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: "1625+",
                    label: "Projects Delivered",
                    color: "text-[#EB5824]",
                  },
                  {
                    number: "30+",
                    label: "Strategic Partners",
                    color: "text-white",
                  },
                  {
                    number: "3",
                    label: "Regional Markets",
                    color: "text-[#EB5824]",
                  },
                  {
                    number: "6",
                    label: "Weeks Avg Delivery",
                    color: "text-white",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-[#212E3F]/50 rounded-xl border border-[#EB5824]/20"
                  >
                    <div
                      className={`text-3xl font-bold mb-2 ${stat.color}`}
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-sm text-[#DDDFE0]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Highlights */}
              <div className="mt-8 p-6 bg-[#EB5824]/20 rounded-xl border border-[#EB5824]/30">
                <h4
                  className="font-bold text-white mb-4"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Client Success Highlights
                </h4>
                <div className="space-y-3">
                  {[
                    "2+ years of continuous EA operations",
                    "Business Process Catalogue delivered in 6 weeks",
                    "Full DT strategy implementations",
                    "ISO & TOGAF compliance achievements",
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-[#EB5824] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-[#DDDFE0] text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
