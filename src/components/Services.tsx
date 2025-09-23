"use client";

import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      title: "Digital Transformation Advisory",
      description:
        "Strategic guidance for comprehensive digital transformation initiatives",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Digital Strategy & Roadmap Development",
        "Governance & Operating Model Design",
        "Capability & Maturity Assessment",
        "National Standards Alignment (DGA/Qiyas)",
        "Change Management & Enablement",
        "Transformation Program Oversight",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Enterprise Architecture",
      description:
        "Comprehensive EA frameworks and governance for digital transformation",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path
            fillRule="evenodd"
            d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "EA Office Establishment & Charter",
        "Architecture Domain Modeling",
        "Tool Enablement (Alfabet, Orbus, LeanIX)",
        "Regulatory & Standard Alignment",
        "Architecture Planning & Roadmapping",
        "EA Operations & Continuous Governance",
      ],
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Customer Experience (CX)",
      description:
        "Human-centered design and omnichannel experience optimization",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "CX Strategy & Vision Development",
        "Customer Journey Mapping",
        "Experience Audits & Assessment",
        "CX Measurement & Feedback Loops",
        "Omnichannel Experience Design",
        "UX & Service Design Prototyping",
      ],
      color: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      title: "Business Process Management",
      description:
        "Process optimization and automation for operational excellence",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "BPM Office Establishment",
        "Business Process Mapping & Analysis",
        "Process Reengineering & Optimization",
        "BPM Tool Implementation (Orbus, ARIS)",
        "Process Mining & Bottleneck Analysis",
        "BPM Training & Best Practices",
      ],
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Digital Innovation",
      description:
        "Innovation labs, product incubation, and venture co-building",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Innovation Strategy & Opportunity Scouting",
        "Venture Co-Building & Partnerships",
        "Product Incubation & Validation",
        "Go-to-Market Strategy & MVP Development",
        "SaaS Platform Development",
        "Innovation Lab Setup & Operations",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#212E3F] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-32 h-32 border border-[#EB5824] rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-[#EB5824] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-[#DDDFE0] rounded-full"></div>
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
              What We Do
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Core <span className="text-[#EB5824]">Services</span>
          </h2>

          <p
            className="text-xl text-[#DDDFE0] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Comprehensive digital transformation services designed to enable
            sustainable growth across governments, NGOs, startups, and
            enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                  activeService === index ? "scale-105" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-br from-[#2a3750] to-[#212E3F] rounded-2xl p-8 border border-[#EB5824]/20 hover:border-[#EB5824] transition-all duration-300 h-full">
                  {/* Service Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3
                    className="text-2xl font-bold mb-4 text-white group-hover:text-[#EB5824] transition-colors duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    className="text-[#DDDFE0] leading-relaxed mb-6"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center gap-2 text-[#EB5824] font-medium group-hover:gap-4 transition-all duration-300">
                    <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Learn More
                    </span>
                    <svg
                      className="w-4 h-4"
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
        </div>

        {/* Detailed Service Features */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-[#2a3750] to-[#212E3F] rounded-2xl p-8 border border-[#EB5824]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Service Details */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${services[activeService].color} rounded-lg flex items-center justify-center text-white`}
                  >
                    {services[activeService].icon}
                  </div>
                  <h3
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {services[activeService].title}
                  </h3>
                </div>

                <p
                  className="text-lg text-[#DDDFE0] mb-8 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {services[activeService].description}
                </p>

                {/* Service Features List */}
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EB5824] rounded-full"></div>
                      <span
                        className="text-[#DDDFE0]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Service Navigation */}
              <div>
                <h4
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Explore Our Services
                </h4>

                <div className="space-y-3">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeService === index
                          ? "bg-[#EB5824] text-white"
                          : "bg-[#212E3F]/50 text-[#DDDFE0] hover:bg-[#EB5824]/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            activeService === index
                              ? "bg-white/20"
                              : "bg-[#EB5824]/20"
                          }`}
                        >
                          {service.icon}
                        </div>
                        <span
                          className="font-medium"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {service.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3
            className="text-2xl font-bold text-white mb-8"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Industry-Leading Tools & Platforms
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Software AG Alfabet",
              "Orbus iServer",
              "LeanIX",
              "ARIS",
              "MEGA",
              "TOGAF",
              "DGA Standards",
              "Qiyas Compliance",
            ].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#EB5824]/10 border border-[#EB5824]/30 rounded-full text-[#EB5824] hover:bg-[#EB5824] hover:text-white transition-all duration-300"
              >
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
