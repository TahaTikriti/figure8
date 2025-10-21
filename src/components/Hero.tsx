"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen text-[#FFFFFF] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/fig8tech.jpeg" 
          alt="Digital Transformation Technology"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212E3F]/60 via-[#212E3F]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full max-w-3xl">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Company Badge - Frosted Glass */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl mt-12 mb-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg">
              <svg className="w-4 h-4 text-[#EB5824] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span
                className="text-xs sm:text-sm font-semibold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="hidden sm:inline">Professional Consultancy • GCC Technology Leader • Since 2017</span>
                <span className="sm:hidden">GCC Tech Leader • Since 2017</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Rufina, serif" }}
            >
              <span className="block">Transform.</span>
              <span className="block text-[#EB5824]">Build.</span>
              <span className="block">Thrive.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl mb-8 text-[#DDDFE0] leading-relaxed max-w-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span className="text-white font-semibold">Trusted governmental</span> and enterprise{" "}
              <span className="text-[#EB5824] font-bold">technology consultancy</span>{" "}
              driving <span className="text-white font-semibold">digital transformation</span> across the{" "}
              <span className="text-[#EB5824] font-bold">GCC</span> region with{" "}
              <span className="text-white font-semibold">credibility</span> and{" "}
              <span className="text-white font-semibold">professionalism</span>.
            </p>

            {/* Stats Row - Premium Frosted Glass */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center group">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#EB5824] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    30+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Years Technology Expertise
                  </div>
                </div>
                <div className="text-center group">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#EB5824] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    1625+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Transformation Projects
                  </div>
                </div>
                <div className="text-center group">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#EB5824] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    GCC
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Regional Leader
                  </div>
                </div>
                <div className="text-center group">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#EB5824] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    Gov+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Governmental Trust
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility Badges - Glass Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { 
                  icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" /></svg>,
                  text: "Governmental Partner" 
                },
                { 
                  icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
                  text: "ISO Certified" 
                },
                { 
                  icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" /></svg>,
                  text: "GCC Presence" 
                },
                { 
                  icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
                  text: "Professional Excellence" 
                }
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:border-[#EB5824] hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="text-[#EB5824]">{badge.icon}</div>
                  <span
                    className="text-xs text-white font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Glass Design */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={scrollToContact}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] text-white rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#EB5824]/40 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/50 transform hover:-translate-y-1 hover:scale-105"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                View Our Work
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#DDDFE0] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#EB5824] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
