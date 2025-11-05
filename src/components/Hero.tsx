"use client";

import { useState, useEffect } from "react";
import HeroBackground, { imageOptions } from "./HeroBackground";
import ImageSwitcherDebug from "./ImageSwitcherDebug";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageOption, setCurrentImageOption] = useState(1);
  
  const DEBUG_MODE = false;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen text-[#212E3F] overflow-hidden bg-white"
    >
      <HeroBackground currentOption={currentImageOption} />

      {DEBUG_MODE && (
        <ImageSwitcherDebug
          currentOption={currentImageOption}
          onOptionChange={setCurrentImageOption}
          imageOptions={imageOptions}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-40 min-h-screen flex items-center">
        <div className="w-full max-w-3xl">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Credibility Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-[#212E3F]/10 mb-8 shadow-sm">
              <svg className="w-5 h-5 text-[#EB5824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span
                className="text-sm font-semibold text-[#212E3F]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                ISO 9001 Certified • Trusted by GCC Governments
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]"
              style={{ fontFamily: "Rufina, serif" }}
            >
              <span className="block text-[#212E3F]">Digital Excellence</span>
              <span className="block text-[#212E3F]">for the</span>
              <span className="block text-[#EB5824]">GCC Region</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl mb-10 text-[#212E3F]/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Empowering governmental and enterprise transformation through proven digital strategies and architectural excellence.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              {[
                { text: "1,625+ Projects" },
                { text: "30+ Years Experience" },
                { text: "6 GCC Countries" },
                { text: "ISO 9001 Certified" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-semibold text-[#212E3F]/60"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full"></div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-[#EB5824] text-white rounded-lg font-bold text-base transition-all duration-300 hover:bg-[#d54d1e] hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Transformation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="group px-8 py-4 border-2 border-[#212E3F]/20 bg-white/80 backdrop-blur-sm text-[#212E3F] rounded-lg font-bold text-base transition-all duration-300 hover:border-[#212E3F] hover:bg-white transform hover:-translate-y-0.5"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-[#212E3F]/10 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold text-[#EB5824] mb-2"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    30+
                  </div>
                  <div
                    className="text-xs text-[#212E3F]/60 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold text-[#EB5824] mb-2"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    1,625+
                  </div>
                  <div
                    className="text-xs text-[#212E3F]/60 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold text-[#EB5824] mb-2"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    6
                  </div>
                  <div
                    className="text-xs text-[#212E3F]/60 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    GCC Countries
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#EB5824] mb-2"
                    style={{ fontFamily: "Rufina, serif" }}
                  >
                    ISO
                  </div>
                  <div
                    className="text-xs text-[#212E3F]/60 font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    9001 Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-[#212E3F]/20 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-[#EB5824] rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
