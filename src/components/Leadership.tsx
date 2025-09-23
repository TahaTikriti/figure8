'use client';

import { useState, useEffect, useRef } from 'react';

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
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

  const leaders = [
    {
      name: "Dr. Mohammad Hani El Jamal",
      role: "Digital Innovation Partner",
      expertise: "Innovation Strategy & Digital Ventures",
      description:
        "Leading digital innovation initiatives, venture co-building, and strategic technology partnerships across the MENA region.",
      specializations: [
        "Innovation Strategy",
        "Venture Co-building",
        "Digital Product Development",
        "Strategic Partnerships",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      name: "Ahmad Tekriti",
      role: "Digital Products Partner",
      expertise: "Product Strategy & Development",
      description:
        "Driving digital product innovation and SaaS platform development with focus on scalable, user-centric solutions.",
      specializations: [
        "Product Strategy",
        "SaaS Development",
        "Platform Architecture",
        "User Experience Design",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-[#212E3F] to-[#2a3750]",
    },
    {
      name: "Bahaa Elzohbi",
      role: "Digital Transformation Managing Partner",
      expertise: "Strategic Transformation Leadership",
      description:
        "Orchestrating comprehensive digital transformation programs for government and enterprise clients across EU, GCC, and MENA.",
      specializations: [
        "Digital Strategy",
        "Transformation Leadership",
        "Change Management",
        "Governance Design",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-[#EB5824] to-[#d64a1f]",
    },
    {
      name: "Wael Sayadi",
      role: "Enterprise Architecture Practice Lead",
      expertise: "EA Frameworks & Governance",
      description:
        "Establishing enterprise architecture functions and leading complex EA implementations using industry-standard tools and methodologies.",
      specializations: [
        "EA Governance",
        "Architecture Modeling",
        "TOGAF Implementation",
        "Tool Enablement",
      ],
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
      gradient: "from-[#212E3F] to-[#2a3750]",
    },
    {
      name: "Charbel Akkad",
      role: "Customer Experience Practice Lead",
      expertise: "CX Strategy & Design",
      description:
        "Designing human-centered experiences and leading omnichannel customer journey optimization initiatives.",
      specializations: [
        "Customer Journey Mapping",
        "UX Design",
        "Service Design",
        "Experience Strategy",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-[#EB5824] to-[#ff6b3d]",
    },
    {
      name: "Lina Chahal",
      role: "Project Management Practice Lead",
      expertise: "Program & Portfolio Management",
      description:
        "Leading complex transformation programs and ensuring successful delivery of large-scale digital initiatives.",
      specializations: [
        "Program Management",
        "Portfolio Governance",
        "Agile Delivery",
        "Stakeholder Management",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-[#212E3F] to-[#2a3750]",
    },
  ];

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="bg-[#FFFFFF] text-[#212E3F] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-48 h-48 border border-[#EB5824] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#212E3F] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-[#DDDFE0] rotate-45"></div>
        <div className="absolute top-40 right-1/4 w-16 h-16 bg-[#EB5824] rounded-full"></div>
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
              Leadership Excellence
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Meet Our <span className="text-[#EB5824]">Leadership Team</span>
          </h2>

          <p
            className="text-xl text-[#212E3F]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Multidisciplinary experts with specialized digital domain expertise,
            driving transformation across governments, NGOs, and enterprises.
          </p>
        </div>

        {/* Leadership Grid */}
        <div
          className={`grid lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-white rounded-2xl p-8 border border-[#DDDFE0] hover:border-[#EB5824] hover:shadow-xl transition-all duration-300 h-full">
                {/* Leader Photo Section */}
                <div className="flex flex-col items-center mb-6">
                  {/* Profile Photo Placeholder - Ready for actual images */}
                  <div className="w-24 h-24 bg-[#DDDFE0] rounded-full mb-4 group-hover:bg-[#EB5824]/20 transition-colors duration-300 flex items-center justify-center overflow-hidden">
                    {/* This is where the actual photo will go */}
                    <svg className="w-12 h-12 text-[#212E3F]/30" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Practice Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${leader.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {leader.icon}
                  </div>
                </div>

                {/* Leader Info */}
                <div className="text-center">
                  <h3
                    className="text-xl font-bold mb-2 text-[#212E3F] group-hover:text-[#EB5824] transition-colors duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    {leader.name}
                  </h3>

                  <div
                    className="text-[#EB5824] font-semibold mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {leader.role}
                  </div>

                  <div
                    className="text-sm text-[#212E3F]/60 mb-4 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {leader.expertise}
                  </div>

                  <p
                    className="text-sm text-[#212E3F]/70 leading-relaxed mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {leader.description}
                  </p>

                  {/* Specializations */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.specializations.slice(0, 3).map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="text-xs px-2 py-1 bg-[#EB5824]/10 text-[#EB5824] rounded-full"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {spec}
                      </span>
                    ))}
                    {leader.specializations.length > 3 && (
                      <span
                        className="text-xs px-2 py-1 bg-[#212E3F]/10 text-[#212E3F] rounded-full"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        +{leader.specializations.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Excellence Summary */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#212E3F] to-[#2a3750] rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Team Overview */}
              <div>
                <h3 
                  className="text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Collective Leadership Excellence
                </h3>

                <p 
                  className="text-lg text-[#DDDFE0] mb-8 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our leadership team brings together decades of specialized expertise across digital transformation, 
                  enterprise architecture, customer experience, and innovation. Together, they have successfully 
                  orchestrated over 1625 projects across three continents.
                </p>

                {/* Key Leadership Strengths */}
                <h4 
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Leadership Strengths
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Multi-disciplinary expertise across all digital domains",
                    "Proven track record in government and enterprise sectors",
                    "Deep knowledge of MENA, GCC, and EU markets",
                    "Hands-on experience with industry-leading tools and frameworks"
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0"></div>
                      <span 
                        className="text-[#DDDFE0] text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Team Stats */}
              <div>
                <h4 
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Leadership Impact
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "30+", label: "Years Combined Experience", color: "text-[#EB5824]" },
                    { number: "6", label: "Practice Leaders", color: "text-white" },
                    { number: "1625+", label: "Projects Successfully Led", color: "text-[#EB5824]" },
                    { number: "3", label: "Regional Markets", color: "text-white" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-[#212E3F]/50 rounded-lg">
                      <div 
                        className={`text-2xl font-bold mb-2 ${stat.color}`}
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="text-xs text-[#DDDFE0]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Leadership CTA */}
                <div className="mt-8 p-4 bg-[#EB5824]/20 rounded-lg border border-[#EB5824]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EB5824] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 
                        className="font-bold text-white"
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        Connect with Our Leadership
                      </h5>
                      <p 
                        className="text-sm text-[#DDDFE0]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Ready to discuss your transformation journey?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}