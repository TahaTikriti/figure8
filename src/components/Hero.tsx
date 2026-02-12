"use client";

import { useState, useEffect, useRef } from "react";
import HeroBackground, { imageOptions } from "./HeroBackground";
import ImageSwitcherDebug from "./ImageSwitcherDebug";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageOption, setCurrentImageOption] = useState(16); // Start with blue background
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter states
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);

  const statsRef = useRef<HTMLDivElement>(null);

  // Gate debug mode behind environment flag
  const DEBUG_MODE = false; // Set to true to enable image switcher

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
      { threshold: 0.5 },
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
        setYears(25);
        setProjects(30);
        setCountries(300);
      }
    }, frameRate);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Check if current background is dark (needs light text)
  const isDarkBackground = currentImageOption === 16; // Blue Tech Wave Background

  // Dynamic text colors based on background
  const textColor = isDarkBackground ? "text-white" : "text-[#212E3F]";
  const textColorMuted = isDarkBackground
    ? "text-white/80"
    : "text-[#212E3F]/70";
  const orangeColor = "text-[#EB5824]"; // Orange stays the same

  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden bg-white ${textColor}`}
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <HeroBackground currentOption={currentImageOption} />

      {DEBUG_MODE && (
        <ImageSwitcherDebug
          currentOption={currentImageOption}
          onOptionChange={setCurrentImageOption}
          imageOptions={imageOptions}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center justify-center lg:justify-between pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="w-full max-w-4xl">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Main Headline - Optimized Size */}
            <h1
              className={`font-black tracking-tight text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 max-w-4xl leading-[1.1] ${textColor}`}
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block mb-1 sm:mb-2">
                <span className={orangeColor}>D</span> for
                <span className={textColor}> Digital</span>
                {} <br />
                <span className={orangeColor}>x</span> for Everything
              </span>
            </h1>

            {/* Slogan Tags/Chips */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 mb-4 sm:mb-6">
              {[
                { text: "X for Excellence" },
                { text: "X for Transformation" },
                { text: "X for Innovation" },
                { text: "X for Product" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-full sm:w-auto gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 ${
                    isDarkBackground
                      ? "bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40"
                      : "bg-white/90 backdrop-blur-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                  }`}
                >
                  <span
                    className={`text-xs sm:text-sm font-semibold ${isDarkBackground ? "text-white" : "text-[#212E3F]"}`}
                  >
                    <span className="text-[#EB5824] font-bold">X</span> for{" "}
                    {item.text.replace("X for ", "")}
                  </span>
                </div>
              ))}
            </div>

            {/* Subheadline - Compact */}
            <p
              className={`text-base sm:text-lg md:text-xl mb-5 sm:mb-8 leading-relaxed max-w-3xl ${textColorMuted}`}
            >
              We partner with government entities, enterprises, and startups to
              deliver digital transformation that creates real value,{" "}
              <span
                className={`${orangeColor} font-medium bg-[#EB5824] px-1 rounded text-white`}
              >
                without eliminating the human factor
              </span>
              .
            </p>

            {/* CTA Buttons - Moved Up */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5 sm:mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-7 py-3 sm:py-4 text-white rounded-lg font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-brand-600)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-brand-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-brand-600)";
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Let's Connect
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Cards - Repositioned */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6"
            >
              {/* Years Experience */}
              <div
                className={`group relative rounded-md p-2 sm:p-3 border transition-all duration-300 hover:scale-105 ${
                  isDarkBackground
                    ? "bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40"
                    : "bg-white/95 backdrop-blur-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                } hover:shadow-md`}
              >
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center">
                  <div className="text-xl sm:text-xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent">
                    {years}+
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase leading-tight ${textColorMuted}`}
                  >
                    Years Of Industry Experience
                  </div>
                </div>
              </div>

              {/* Projects Delivered */}
              <div
                className={`group relative rounded-md p-2 sm:p-3 border transition-all duration-300 hover:scale-105 ${
                  isDarkBackground
                    ? "bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40"
                    : "bg-white/95 backdrop-blur-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                } hover:shadow-md`}
              >
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center">
                  <div className="text-xl sm:text-xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent">
                    {projects.toLocaleString()}+
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase leading-tight ${textColorMuted}`}
                  >
                    Successful Projects
                  </div>
                </div>
              </div>

              {/* GCC Countries */}
              <div
                className={`group relative rounded-md p-2 sm:p-3 border transition-all duration-300 hover:scale-105 ${
                  isDarkBackground
                    ? "bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40"
                    : "bg-white/95 backdrop-blur-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                } hover:shadow-md`}
              >
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center">
                  <div className="text-xl sm:text-xl font-bold bg-gradient-to-br from-[#EB5824] to-[#d54d1e] bg-clip-text text-transparent">
                    {countries}+
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase leading-tight ${textColorMuted}`}
                  >
                    Provided Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Figure8 Logo */}
        <div
          className={`hidden lg:flex items-center justify-end w-full max-w-md transform transition-all duration-1000 delay-300 ml-auto ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/images/newFigure8_3d_logo-Photoroom.png"
              alt="Figure8 3D Brand Logo"
              className="w-full h-auto max-w-[450px] object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on desktop, with more bottom spacing */}
      {/* <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-[#212E3F]/20 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-[#EB5824] rounded-full mt-2"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
