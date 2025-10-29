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
      className="bg-[#FFFFFF] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#EB5824] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-[#EB5824] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB5824] bg-[#EB5824]/10 mb-6">
            <div className="w-2 h-2 bg-[#EB5824] rounded-full animate-pulse"></div>
            <span
              className="text-sm font-medium text-[#EB5824]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Trusted Digitalization Partner
            </span>
          </div> */}

          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-[#212E3F]"
            style={{ fontFamily: "Rufina, serif" }}
          >
            About <span className="text-[#EB5824]">Figure8 DX</span>
          </h2>

          <p
            className="text-xl text-[#212E3F]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Leading technology consultancy pioneering digital transformation since 2017, empowering
            organizations with professional solutions and strategic expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Company Story */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <p
              className="text-lg mb-8 text-[#212E3F]/80 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Bridging traditional business and cutting-edge digital solutions since 2017, 
              we enable sustainable growth for governments and enterprises across EU, GCC, and MENA regions.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  text: "Strategic digital transformation advisory",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  text: "Global presence across EU, GCC & MENA",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  ),
                  text: "30+ strategic partnerships worldwide",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  text: "Proven compliance with international standards",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-[#212E3F]/10 hover:bg-white/60 hover:border-[#EB5824] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EB5824] to-[#ff6b3d] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <span
                    className="text-[#212E3F] font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo Display - Glassmorphism */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Glassmorphism Container */}
              <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-12 border border-[#212E3F]/10 shadow-2xl hover:bg-white/50 hover:shadow-3xl transition-all duration-500 flex items-center justify-center">
                {/* Logo */}
                <img 
                  src="/Figure8-12.png" 
                  alt="Figure8 DX Logo" 
                  className="w-full h-auto max-w-md opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#EB5824]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#212E3F]/10 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>

        {/* Key Differentiators Section */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 border border-[#EB5824]/20 shadow-xl">
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                What Sets Us Apart
              </h3>
              <p
                className="text-[#212E3F]/70 max-w-2xl mx-auto"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our key differentiators that make us the preferred digital transformation partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((diff, index) => (
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

      </div>
    </section>
  );
}
