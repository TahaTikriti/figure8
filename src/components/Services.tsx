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
        rootMargin: "0px 0px -50px 0px",
      },
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
    {
      title: "Data Strategy & Analytics",
      description:
        "Data-driven insights and analytics frameworks for informed decision-making",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: [
        "Data Governance & Quality Management",
        "Analytics Strategy & Roadmap",
        "Business Intelligence Implementation",
        "Data Warehouse & Lake Architecture",
        "Advanced Analytics & AI/ML",
        "Data Literacy & Training Programs",
      ],
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Cloud Transformation",
      description:
        "Cloud migration, modernization, and optimization strategies",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
      features: [
        "Cloud Strategy & Roadmap",
        "Multi-Cloud & Hybrid Architecture",
        "Migration Planning & Execution",
        "Cloud Cost Optimization",
        "Security & Compliance",
        "Cloud-Native Application Development",
      ],
      color: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      title: "Cybersecurity & Risk Management",
      description:
        "Comprehensive security frameworks and risk mitigation strategies",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Security Assessment & Audits",
        "Risk Management Framework",
        "Security Architecture Design",
        "Incident Response Planning",
        "Compliance & Regulatory Alignment",
        "Security Operations Center (SOC) Setup",
      ],
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Digital Government Services",
      description:
        "E-government platforms and citizen-centric digital services",
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
        "E-Government Strategy Development",
        "Citizen Portal Design & Development",
        "Digital Service Integration",
        "Smart City Solutions",
        "Government API Management",
        "Public Sector Digital Transformation",
      ],
      color: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      title: "API Management & Integration",
      description:
        "Enterprise integration platforms and API strategy development",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "API Strategy & Governance",
        "API Gateway Implementation",
        "Microservices Architecture",
        "Integration Platform Setup",
        "API Security & Monitoring",
        "Developer Portal & Documentation",
      ],
      color: "from-[#212E3F] to-[#2a3750]",
    },
    {
      title: "Agile Transformation",
      description: "Agile methodologies and organizational change management",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      features: [
        "Agile Assessment & Roadmap",
        "Scrum & Kanban Implementation",
        "Agile Coaching & Training",
        "DevOps Integration",
        "Product Management Excellence",
        "Continuous Improvement Practices",
      ],
      color: "from-[#EB5824] to-[#ff6b3d]",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:mb-6 text-[#212E3F]">
            Our <span className="text-[#EB5824]">Services</span>
          </h2>

          <p className="text-base lg:text-lg text-[#212E3F]/60 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital transformation services designed for
            governmental and enterprise excellence.
          </p>
        </div>

        {/* Services Grid - Desktop: Interactive List, Mobile: Accordion */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Desktop Interactive View - Hidden on Mobile */}
          <div className="hidden lg:block mb-12 lg:mb-16">
            <div className="grid grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setActiveService(index)}
                >
                  <div
                    className={`bg-[#f9fafb] rounded-xl p-6 border transition-all duration-300 h-full ${
                      activeService === index
                        ? "border-[#EB5824] shadow-lg"
                        : "border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md"
                    }`}
                  >
                    {/* Service Icon */}
                    <div className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center mb-4 text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    {/* Service Title */}
                    <h3 className="text-lg font-bold mb-3 text-[#212E3F]">
                      {service.title}
                    </h3>
                    {/* Service Description */}
                    <p className="text-[#212E3F]/60 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details Panel - Disabled for now */}
            {/* {activeService >= 0 && (
              <div className="bg-[#f9fafb] rounded-xl p-8 border border-[#212E3F]/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824]">
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#212E3F]">
                    {services[activeService].title}
                  </h3>
                </div>

                <p className="text-base text-[#212E3F]/70 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#212E3F]/70 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          {/* Mobile Accordion View - Hidden on Desktop */}
          <div className="lg:hidden space-y-3 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  accordionRefs.current[index] = el;
                }}
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
                          behavior: "smooth",
                          block: "nearest",
                        });
                      }, 100);
                    }
                  }}
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

                  {/* Expand/Collapse Icon */}
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

                {/* Accordion Content - Expandable */}
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

                    {/* Service Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-[#212E3F]/70 leading-relaxed">
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

        {/* Tools & Technologies */}
        <div
          className={`mt-16 lg:mt-20 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
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
              { name: "Qiyas Compliance", logo: null },
            ].map((tool, index) => (
              <div
                key={index}
                className="relative px-4 lg:px-5 py-2.5 lg:py-3 bg-gradient-to-br from-white to-[#EB5824]/[0.02] border border-[#212E3F]/10 rounded-lg hover:border-[#EB5824]/40 hover:shadow-md transition-all duration-300 flex items-center justify-center"
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
