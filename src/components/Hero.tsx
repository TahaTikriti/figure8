'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#212E3F] via-[#2a3750] to-[#212E3F] text-[#FFFFFF] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#EB5824] rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#EB5824] rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-[#DDDFE0] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-[#EB5824] to-transparent rotate-45 animate-pulse"></div>
      </div>

      {/* Geometric Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB5824] bg-[#EB5824]/10 mb-8">
              <div className="w-2 h-2 bg-[#EB5824] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Digital Transformation Partner since 2017
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
              Empowering organizations across <span className="text-[#EB5824] font-semibold">1625+ projects</span> with cutting-edge digital solutions and strategic innovation.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EB5824]" style={{ fontFamily: "Rufina, serif" }}>30+</div>
                <div className="text-sm text-[#DDDFE0]" style={{ fontFamily: "Montserrat, sans-serif" }}>Years Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EB5824]" style={{ fontFamily: "Rufina, serif" }}>1625+</div>
                <div className="text-sm text-[#DDDFE0]" style={{ fontFamily: "Montserrat, sans-serif" }}>Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EB5824]" style={{ fontFamily: "Rufina, serif" }}>3</div>
                <div className="text-sm text-[#DDDFE0]" style={{ fontFamily: "Montserrat, sans-serif" }}>Regions Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-[#EB5824] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#d64a1f] hover:shadow-lg hover:shadow-[#EB5824]/25 transform hover:-translate-y-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                className="px-8 py-4 border-2 border-[#DDDFE0] text-[#DDDFE0] rounded-lg font-semibold transition-all duration-300 hover:bg-[#DDDFE0] hover:text-[#212E3F] transform hover:-translate-y-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className={`transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative w-full h-96 md:h-[500px]">
                {/* Floating Cards representing services */}
                <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-[#EB5824] to-[#d64a1f] rounded-xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <div className="p-4">
                    <div className="w-8 h-8 bg-white rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EB5824]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Rufina, serif" }}>Digital Strategy</h3>
                  </div>
                </div>

                <div className="absolute top-16 right-0 w-44 h-28 bg-white text-[#212E3F] rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="p-4">
                    <div className="w-8 h-8 bg-[#EB5824] rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm" style={{ fontFamily: "Rufina, serif" }}>Innovation</h3>
                  </div>
                </div>

                <div className="absolute bottom-20 left-12 w-52 h-36 bg-gradient-to-br from-[#212E3F] to-[#2a3750] border border-[#EB5824] rounded-xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="p-4">
                    <div className="w-8 h-8 bg-[#EB5824] rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Rufina, serif" }}>Enterprise Solutions</h3>
                    <p className="text-[#DDDFE0] text-xs" style={{ fontFamily: "Montserrat, sans-serif" }}>Scalable Architecture</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-8 w-40 h-32 bg-[#DDDFE0] text-[#212E3F] rounded-xl shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <div className="p-4">
                    <div className="w-8 h-8 bg-[#212E3F] rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm" style={{ fontFamily: "Rufina, serif" }}>Transformation</h3>
                  </div>
                </div>

                {/* Central connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EB5824" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#DDDFE0" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M120 60 Q200 180 280 120 Q320 200 380 160"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
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
