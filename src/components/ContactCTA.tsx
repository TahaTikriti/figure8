"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactCTA() {
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
        threshold: 0.01,
        rootMargin: '50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScheduleMeeting = () => {
    window.open(
      "https://cal.com/taha-tekriti-45rjge",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: "Email",
      value: "connect@figure8dx.com",
      link: "mailto:connect@figure8dx.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "UAE",
      value: "+971 525 705 539",
      link: "tel:+971525705539",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "KSA",
      value: "+966 551 882 204",
      link: "tel:+966551882204",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#212E3F] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#EB5824] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main CTA */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Rufina, serif" }}
            >
              Start Your
              <span className="text-[#EB5824]"> Transformation</span>
            </h2>

            {/* Main CTA Button */}
            <button
              onClick={handleScheduleMeeting}
              className="group w-full sm:w-auto bg-[#EB5824] text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-[#d54d1e] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>

            {/* Integration Badge */}
            <div className="flex items-center gap-3 mt-6 text-sm text-white/60">
              <svg
                className="w-5 h-5 text-[#EB5824] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                Instant calendar booking • Virtual meeting
              </span>
            </div>
          </div>

          {/* Right Side - Contact Info & Visual */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Contact Methods */}
            <div>
              <h4
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Contact Information
              </h4>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 hover:border-[#EB5824]/50 transition-all duration-300 group border border-white/10"
                  >
                    <div className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div
                        className="font-semibold text-white text-sm mb-1"
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        {method.label}
                      </div>
                      <div
                        className="text-white/60 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {method.value}
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-[#EB5824] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
