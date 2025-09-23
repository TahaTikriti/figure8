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
      { threshold: 0.2 }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB5824] bg-[#EB5824]/10 mb-6">
            <div className="w-2 h-2 bg-[#EB5824] rounded-full"></div>
            <span
              className="text-sm font-medium text-[#EB5824]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Who We Are
            </span>
          </div>

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
            Pioneering digital transformation since 2017, we empower
            organizations across three continents with innovative solutions and
            strategic expertise.
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
            <h3
              className="text-3xl font-bold mb-6 text-[#212E3F]"
              style={{ fontFamily: "Rufina, serif" }}
            >
              Our Mission
            </h3>

            <p
              className="text-lg mb-6 text-[#212E3F]/80 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Founded in 2017, Figure8 DX has emerged as a trusted partner in
              digital transformation, enabling sustainable growth for
              governments, NGOs, startups, and enterprises across the EU, GCC,
              and MENA regions.
            </p>

            <p
              className="text-lg mb-8 text-[#212E3F]/80 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our mission is simple yet profound: to bridge the gap between
              traditional business operations and cutting-edge digital
              solutions, ensuring every transformation we lead creates lasting
              value and competitive advantage.
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
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#EB5824]/5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#EB5824] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span
                    className="text-[#212E3F] font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats & Achievements */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-[#212E3F] to-[#2a3750] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border border-[#EB5824] rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#EB5824] rounded-full"></div>
              </div>

              <h3
                className="text-2xl font-bold mb-8 relative z-10"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Our Impact by Numbers
              </h3>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  {
                    number: "1625+",
                    label: "Projects Completed",
                    color: "text-[#EB5824]",
                  },
                  {
                    number: "30+",
                    label: "Years Combined Expertise",
                    color: "text-white",
                  },
                  {
                    number: "3",
                    label: "Continents Served",
                    color: "text-[#EB5824]",
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    color: "text-white",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
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

              {/* Achievement Badge */}
              <div className="mt-8 p-4 bg-[#EB5824]/20 rounded-lg border border-[#EB5824]/30 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EB5824] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-white"
                      style={{ fontFamily: "Rufina, serif" }}
                    >
                      Certified Excellence
                    </h4>
                    <p
                      className="text-sm text-[#DDDFE0]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      ISO compliant & industry certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3
            className="text-3xl font-bold text-center mb-12 text-[#212E3F]"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Why Choose Figure8 DX
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
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
                title: "Strategic Focus",
                description:
                  "End-to-end transformation services tailored to your business goals",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
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
                title: "Global Standards",
                description:
                  "Compliance with international and national regulatory frameworks",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Proven Results",
                description:
                  "Track record of successful implementations across diverse sectors",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                ),
                title: "Expert Partnership",
                description:
                  "30+ years of combined expertise in digital transformation",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-[#DDDFE0] hover:border-[#EB5824] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#EB5824]/10 rounded-xl flex items-center justify-center mb-4 text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h4
                  className="text-xl font-bold mb-3 text-[#212E3F]"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-[#212E3F]/70 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
