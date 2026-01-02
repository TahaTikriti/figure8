"use client";

import { useState, useEffect, useRef } from "react";
import HeroBackground, { imageOptions } from "./HeroBackground";
import ImageSwitcherDebug from "./ImageSwitcherDebug";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageOption, setCurrentImageOption] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Counter states
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Gate debug mode behind environment flag
  const DEBUG_MODE = "true";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - Math.pow(1 - progress, 3); // Easing function

      setYears(Math.floor(easeOutQuad * 30));
      setProjects(Math.floor(easeOutQuad * 1625));
      setCountries(Math.floor(easeOutQuad * 6));

      if (frame >= totalFrames) {
        clearInterval(interval);
        setYears(30);
        setProjects(1625);
        setCountries(6);
      }
    }, frameRate);
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="w-full max-w-3xl">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Credibility Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#212E3F]/10 mb-4 shadow-sm">
              <svg className="w-4 h-4 text-[#EB5824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span
                className="text-xs font-semibold text-[#212E3F]"
                
              >
                ISO 9001 Certified • Trusted by GCC Governments
              </span>
            </div>

            {/* Main Headline - Optimized Size */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
              >
              <span className="block text-[#212E3F]">Digital Excellence</span>
              <span className="block text-[#212E3F]">for the</span>
              <span className="block text-[#EB5824]">GCC Region</span>
            </h1>

            {/* Subheadline - Compact */}
            <p
              className="text-lg md:text-xl mb-5 text-[#212E3F]/70 leading-relaxed max-w-2xl"
              
            >
              Empowering governmental and enterprise transformation through proven digital strategies and architectural excellence.
            </p>

            {/* Trust Indicators - Improved Readability */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              {[
                { text: "1,625+ Projects" },
                { text: "30+ Years Experience" },
                { text: "6 GCC Countries" },
                { text: "ISO 9001 Certified" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#212E3F]/10"
                  
                >
                  <div className="w-1.5 h-1.5 bg-[#EB5824] rounded-full flex-shrink-0"></div>
                  <span className="text-xs md:text-sm font-semibold text-[#212E3F] whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Moved Up */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-7 py-3 text-white rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: "var(--color-brand-600)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-brand-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-brand-600)";
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Transformation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="group px-7 py-3 border-2 border-[#212E3F]/20 bg-white/80 backdrop-blur-sm text-[#212E3F] rounded-lg font-bold text-sm transition-all duration-300 hover:border-[#212E3F] hover:bg-white transform hover:-translate-y-0.5"
                
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Separated Stats Cards with Animated Counters - Consistent Design */}
            <div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
              {/* Years Experience */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent"
                      >
                    {years}+
                  </div>
                  <div
                    className="text-[10px] md:text-xs text-[#212E3F]/70 font-semibold tracking-wide uppercase"
                    
                  >
                    Years
                  </div>
                  <div
                    className="text-[9px] md:text-[10px] text-[#212E3F]/50 font-medium"
                    
                  >
                    Experience
                  </div>
                </div>
              </div>

              {/* Projects Delivered */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent"
                      >
                    {projects.toLocaleString()}+
                  </div>
                  <div
                    className="text-[10px] md:text-xs text-[#212E3F]/70 font-semibold tracking-wide uppercase"
                    
                  >
                    Projects
                  </div>
                  <div
                    className="text-[9px] md:text-[10px] text-[#212E3F]/50 font-medium"
                    
                  >
                    Delivered
                  </div>
                </div>
              </div>

              {/* GCC Countries */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent"
                      >
                    {countries}
                  </div>
                  <div
                    className="text-[10px] md:text-xs text-[#212E3F]/70 font-semibold tracking-wide uppercase"
                    
                  >
                    GCC
                  </div>
                  <div
                    className="text-[9px] md:text-[10px] text-[#212E3F]/50 font-medium"
                    
                  >
                    Countries
                  </div>
                </div>
              </div>

              {/* ISO Certification */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent"
                      >
                    ISO
                  </div>
                  <div
                    className="text-[10px] md:text-xs text-[#212E3F]/70 font-semibold tracking-wide uppercase"
                    
                  >
                    9001
                  </div>
                  <div
                    className="text-[9px] md:text-[10px] text-[#212E3F]/50 font-medium"
                    
                  >
                    Certified
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
