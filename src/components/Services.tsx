"use client";

import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024)
        setActiveService((prev) => Math.max(0, prev));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      title: "Business Strategy Advisory",
      description:
        "Strategic planning and business model optimization for long-term success",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      features: [
        "Strategic Planning & Business Model Design",
        "Market Analysis & Competitive Intelligence",
        "Business Case Development",
        "Performance Management Framework",
        "Strategic Partnership Development",
        "Business Transformation Strategy",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Digital Transformation Advisory",
      description:
        "Strategic guidance for comprehensive digital transformation initiatives",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Digital Strategy & Roadmap Development",
        "Digital Maturity Assessment",
        "Technology Enablement Planning",
        "Change Management & Adoption",
        "Digital Governance Framework",
        "Innovation Program Design",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Total Quality Management",
      description:
        "Comprehensive quality management systems and continuous improvement",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Quality Management System Design",
        "ISO Standards Implementation",
        "Process Quality Improvement",
        "Quality Assurance Framework",
        "Six Sigma & Lean Methodologies",
        "Continuous Improvement Programs",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Enterprise Architecture (EA)",
      description:
        "Comprehensive EA frameworks and governance for digital transformation",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
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
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Governance, Risk & Compliance",
      description:
        "Comprehensive GRC frameworks and risk management strategies",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "GRC Framework Implementation",
        "Risk Assessment & Mitigation",
        "Compliance Management System",
        "Internal Controls & Audit",
        "Policy & Procedure Development",
        "Regulatory Compliance Alignment",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Customer Experience (CX)",
      description:
        "Human-centered design and omnichannel experience optimization",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
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
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Business Process Management (BPM)",
      description:
        "Process optimization and automation for operational excellence",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4a1 1 0 011-1h3zm-1 2v1h-1V5h1zM11 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z"
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
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Data Management",
      description: "Comprehensive data governance and analytics frameworks",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      features: [
        "Data Governance & Quality Management",
        "Data Strategy & Roadmap",
        "Master Data Management",
        "Data Architecture Design",
        "Analytics & BI Implementation",
        "Data Privacy & Security",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "AI Management & Governance",
      description:
        "Comprehensive framework to establish, implement, maintain, and improve the AIMS",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow Automation Design",
        "Intelligent Document Processing",
        "Low-Code/No-Code Platforms",
        "Process Orchestration",
        "Automation Strategy & ROI",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "Digital Innovation Lab",
      description:
        "Innovation labs, product incubation, and venture co-building",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Innovation Strategy & Opportunity Scouting",
        "Design Thinking Workshops",
        "Proof of Concept Development",
        "Emerging Technology Adoption",
        "Innovation Culture Building",
        "Startup Partnership Programs",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
  ];

  const animateClass = (show: boolean) =>
    `transform transition-all duration-1000 ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;

  const FeatureList = ({
    features,
    mobile = false,
  }: {
    features: string[];
    mobile?: boolean;
  }) => (
    <div className={mobile ? "space-y-3" : "space-y-4 pl-1 lg:pl-2"}>
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3 lg:gap-4">
          <div
            className={`bg-[#EB5824] rounded-full mt-2 flex-shrink-0 ${mobile ? "w-1.5 h-1.5" : "w-2 h-2"}`}
          />
          <span
            className={`text-[#212E3F]/70 leading-relaxed ${mobile ? "text-sm" : "text-base lg:text-lg"}`}
          >
            {feature}
          </span>
        </div>
      ))}
    </div>
  );

  const handleAccordionClick = (index: number) => {
    const newIndex = activeService === index ? -1 : index;
    setActiveService(newIndex);
    if (newIndex >= 0 && window.innerWidth < 1024) {
      setTimeout(
        () =>
          accordionRefs.current[newIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          }),
        100,
      );
    }
  };

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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 ${animateClass(isVisible)}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:mb-6 text-[#212E3F]">
            Our <span className="text-[#EB5824]">Services</span>
          </h2>
          <p className="text-base lg:text-lg text-[#212E3F]/60 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital transformation services designed for
            governmental and enterprise excellence.
          </p>
        </div>
        {/* Mobile Accordion View */}
        <div
          className={`${animateClass(isVisible)} delay-300 lg:hidden space-y-3 mb-12`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                accordionRefs.current[index] = el;
              }}
              className="bg-[#f9fafb] rounded-xl border border-[#212E3F]/10 overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full text-left p-6 flex items-center gap-4 hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#EB5824]">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#212E3F] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#212E3F]/60 line-clamp-1">
                    {service.description}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-[#EB5824] flex-shrink-0 transition-transform duration-300 ${
                    activeService === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeService === index
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-6 pt-4 border-t border-[#212E3F]/10">
                  <p className="text-[#212E3F]/70 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <FeatureList features={service.features} mobile />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Interactive View */}
        {activeService >= 0 && (
          <div
            className={`hidden lg:block ${animateClass(isVisible)} delay-500`}
          >
            <div className="bg-[#f9fafb] rounded-xl p-8 lg:p-10 border border-[#212E3F]/10 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                <div className="relative">
                  <h4 className="text-base lg:text-lg font-bold text-[#212E3F] mb-5 lg:mb-6">
                    All Services
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, idx) => {
                      const isActive = activeService === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveService(idx)}
                          className={`group w-full text-left rounded-lg border focus:outline-none transition-all duration-300 ${
                            isActive
                              ? "bg-white shadow-md border-[#EB5824]"
                              : "bg-white/50 text-[#212E3F]/70 hover:bg-white hover:shadow-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                          }`}
                          style={{ minHeight: "72px", padding: "16px 18px" }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isActive
                                  ? "bg-[#EB5824]/10 text-[#EB5824]"
                                  : "bg-[#212E3F]/5 text-[#212E3F]/60 group-hover:bg-[#EB5824]/10 group-hover:text-[#EB5824]"
                              }`}
                            >
                              {service.icon}
                            </div>
                            <span className="font-semibold flex-1 text-sm">
                              {service.title}
                            </span>
                            <span
                              className={`inline-block w-4 h-4 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-[#EB5824]"
                                  : "bg-[#212E3F]/20 group-hover:bg-[#EB5824]/60"
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div key={activeService} className="fade-slide-in">
                  <div className="flex items-center gap-5 mb-8 lg:mb-10 pl-1 lg:pl-2">
                    <div className="w-14 h-14 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824]">
                      {services[activeService].icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#212E3F]">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <p className="text-base lg:text-lg text-[#212E3F]/70 mb-8 lg:mb-10 leading-relaxed pl-1 lg:pl-2">
                    {services[activeService].description}
                  </p>
                  <FeatureList features={services[activeService].features} />
                </div>
              </div>
            </div>
            <style>{`
              .fade-slide-in { animation: fadeSlideIn 0.5s cubic-bezier(0.4,0,0.2,1); }
              @keyframes fadeSlideIn { 0% { opacity: 0; transform: translateY(16px); } 100% { opacity: 1; transform: translateY(0); } }
            `}</style>
          </div>
        )}

        {/* Tools & Technologies */}
        <div
          className={`mt-16 lg:mt-20 text-center ${animateClass(isVisible)} delay-700`}
        >
          <h3 className="text-xl lg:text-2xl font-bold text-[#212E3F] mb-6 lg:mb-8">
            Technology Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {[
              { name: "Software AG Alfabet", logo: "/logos/software-ag.svg" },
              { name: "Orbus iServer", logo: "/logos/orbus.svg" },
              { name: "LeanIX", logo: "/logos/SAP_LeanIX_R_grad_blu.svg" },
              { name: "ARIS", logo: "/logos/aris-logo-sm.png" },
              { name: "MEGA", logo: "/logos/logo-mega.png" },
              { name: "TOGAF", logo: "/logos/togaf.png" },
              { name: "DGA Standards", logo: "/logos/DGA-Logo.svg" },
            ].map((tool, idx) => (
              <div
                key={idx}
                title={tool.name}
                className="px-4 lg:px-5 py-2.5 lg:py-3 bg-gradient-to-br from-white to-[#EB5824]/[0.02] border border-[#212E3F]/10 rounded-lg hover:border-[#EB5824]/40 hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                {tool.logo ? (
                  <img src={tool.logo} alt={tool.name} className="h-5 w-auto" />
                ) : (
                  <span className="text-xs lg:text-sm font-medium text-[#212E3F]">
                    {tool.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
