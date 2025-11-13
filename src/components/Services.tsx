"use client";

import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
      className="bg-white text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 left-20 w-32 h-32 border border-[#212E3F] rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 lg:mb-6 text-[#212E3F]"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Our <span className="text-[#EB5824]">Services</span>
          </h2>

          <p
            className="text-base lg:text-lg text-[#212E3F]/60 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Comprehensive digital transformation services designed for governmental and enterprise excellence.
          </p>
        </div>

        {/* Services Grid - Desktop: Cards with Tab Selection, Mobile: Accordion */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Desktop Pyramid Grid View - Hidden on Mobile */}
          <div className="hidden lg:block mb-12 lg:mb-16">
            <div className="flex justify-center gap-8 mb-8">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer flex-1 max-w-xs transform transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setActiveService(index)}
                >
                  <div className={`bg-[#f9fafb] rounded-xl p-6 lg:p-8 border transition-all duration-300 h-full ${
                    activeService === index 
                      ? "border-[#EB5824] shadow-lg" 
                      : "border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md"
                  }`}>
                    {/* Service Icon */}
                    <div
                      className="w-12 h-12 lg:w-14 lg:h-14 bg-[#EB5824]/10 rounded-lg flex items-center justify-center mb-5 lg:mb-6 text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300"
                    >
                      {service.icon}
                    </div>
                    {/* Service Title */}
                    <h3
                      className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-[#212E3F]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {service.title}
                    </h3>
                    {/* Service Description */}
                    <p
                      className="text-[#212E3F]/60 leading-relaxed text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8">
              {services.slice(3, 5).map((service, index) => (
                <div
                  key={index + 3}
                  className="group cursor-pointer flex-1 max-w-xs transform transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setActiveService(index + 3)}
                >
                  <div className={`bg-[#f9fafb] rounded-xl p-6 lg:p-8 border transition-all duration-300 h-full ${
                    activeService === index + 3
                      ? "border-[#EB5824] shadow-lg"
                      : "border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md"
                  }`}>
                    {/* Service Icon */}
                    <div
                      className="w-12 h-12 lg:w-14 lg:h-14 bg-[#EB5824]/10 rounded-lg flex items-center justify-center mb-5 lg:mb-6 text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300"
                    >
                      {service.icon}
                    </div>
                    {/* Service Title */}
                    <h3
                      className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-[#212E3F]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {service.title}
                    </h3>
                    {/* Service Description */}
                    <p
                      className="text-[#212E3F]/60 leading-relaxed text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion View - Hidden on Desktop */}
          <div className="lg:hidden space-y-3 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { accordionRefs.current[index] = el; }}
                className="bg-[#f9fafb] rounded-xl border border-[#212E3F]/10 overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Accordion Header - Always Visible */}
                <button
                  onClick={() => {
                    const newIndex = activeService === index ? -1 : index;
                    setActiveService(newIndex);
                    
                    if (newIndex >= 0 && window.innerWidth < 1024) {
                      setTimeout(() => {
                        accordionRefs.current[newIndex]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'nearest'
                        });
                      }, 100);
                    }
                  }}
                  className="w-full text-left p-6 flex items-center gap-4 hover:bg-white transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#EB5824]"
                  >
                    {service.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base font-bold text-[#212E3F] mb-1"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs text-[#212E3F]/60 line-clamp-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <svg
                    className={`w-5 h-5 text-[#EB5824] flex-shrink-0 transition-transform duration-300 ${
                      activeService === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeService === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-6 pt-4 border-t border-[#212E3F]/10">
                    <p
                      className="text-[#212E3F]/70 leading-relaxed mb-6 text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.description}
                    </p>

                    {/* Service Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                          <span
                            className="text-sm text-[#212E3F]/70 leading-relaxed"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Service Features (Desktop Only) */}
        {activeService >= 0 && (
          <div
            className={`hidden lg:block transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-[#f9fafb] rounded-xl p-8 lg:p-10 border border-[#212E3F]/10 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                {/* Left: Service Details */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-5 lg:mb-6">
                    <div
                      className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824]"
                    >
                      {services[activeService].icon}
                    </div>
                    <h3
                      className="text-xl lg:text-2xl font-bold text-[#212E3F]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      {services[activeService].title}
                    </h3>
                  </div>

                  <p
                    className="text-sm lg:text-base text-[#212E3F]/70 mb-6 lg:mb-8 leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {services[activeService].description}
                  </p>

                  {/* Service Features List */}
                  <div className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                        <span
                          className="text-[#212E3F]/70 text-sm"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Service Navigation */}
                <div className="order-1 lg:order-2 relative">
                  <div className="flex items-center gap-3 mb-5 lg:mb-6">
                    <h4
                      className="text-base lg:text-lg font-bold text-[#212E3F]"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      All Services
                    </h4>
                  </div>

                  <div className="space-y-3 relative">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`group relative w-full text-left p-4 rounded-lg transition-all duration-300 border ${
                          activeService === index
                            ? "bg-white text-[#212E3F] shadow-md border-[#EB5824]"
                            : "bg-white/50 text-[#212E3F]/70 hover:bg-white hover:shadow-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              activeService === index
                                ? "bg-[#EB5824]/10 text-[#EB5824]"
                                : "bg-[#212E3F]/5 text-[#212E3F]/60 group-hover:bg-[#EB5824]/10 group-hover:text-[#EB5824]"
                            }`}
                          >
                            {service.icon}
                          </div>
                          <span
                            className="font-semibold flex-1 text-sm"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {service.title}
                          </span>
                          {activeService === index && (
                            <svg className="w-5 h-5 text-[#EB5824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tools & Technologies */}
        <div
          className={`mt-16 lg:mt-20 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3
            className="text-xl lg:text-2xl font-bold text-[#212E3F] mb-6 lg:mb-8"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Technology Platforms
          </h3>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
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
                className="relative px-4 lg:px-5 py-2.5 lg:py-3 bg-gradient-to-br from-white to-[#EB5824]/[0.02] border border-[#212E3F]/10 rounded-lg hover:border-[#EB5824]/40 hover:shadow-md transition-all duration-300"
              >
                <span
                  className="text-xs lg:text-sm font-medium text-[#212E3F]"
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
