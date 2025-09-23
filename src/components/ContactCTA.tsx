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
      { threshold: 0.2 }
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
      className="bg-gradient-to-br from-[#212E3F] via-[#2a3750] to-[#212E3F] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#EB5824] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#EB5824] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-[#DDDFE0] rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-[#EB5824]/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main CTA */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB5824] bg-[#EB5824]/10 mb-6">
              <div className="w-2 h-2 bg-[#EB5824] rounded-full animate-pulse"></div>
              <span
                className="text-sm font-medium text-[#EB5824]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ready to Transform?
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Rufina, serif" }}
            >
              Let&apos;s Start Your
              <span className="text-[#EB5824]"> Digital Journey</span>
            </h2>

            <p
              className="text-xl text-[#DDDFE0] mb-8 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Schedule a strategic consultation with our digital transformation
              experts. Discover how Figure8 DX can accelerate your
              organization&apos;s digital evolution.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "30-minute strategic consultation",
                "Tailored transformation roadmap discussion",
                "Direct access to our leadership team",
                "No-obligation initial assessment",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EB5824] rounded-full flex-shrink-0"></div>
                  <span
                    className="text-[#DDDFE0]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Main CTA Button */}
            <button
              onClick={handleScheduleMeeting}
              className="group relative bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#ff6b3d] hover:to-[#EB5824] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Schedule Your Meeting
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>

            {/* Integration Badge */}
            <div className="flex items-center gap-3 mt-6 text-sm text-[#DDDFE0]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#EB5824]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Integrated with Google Meet
                </span>
              </div>
              <div className="w-1 h-1 bg-[#DDDFE0] rounded-full"></div>
              <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                Instant calendar booking
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
            {/* Meeting Preview Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#EB5824]/20 mb-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#EB5824]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-[#EB5824]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Strategic Consultation
                </h3>
                <p
                  className="text-[#DDDFE0] text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Meet with our digital transformation experts
                </p>
              </div>

              {/* Meeting Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-[#EB5824] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-[#DDDFE0]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    30 minutes • Virtual meeting
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-[#EB5824] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-[#DDDFE0]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Available across MENA & GCC regions
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-[#EB5824] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span
                    className="text-[#DDDFE0]"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Immediate calendar confirmation
                  </span>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div>
              <h4
                className="text-lg font-bold text-white mb-6"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Or Connect Directly
              </h4>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#EB5824]/20 rounded-lg flex items-center justify-center text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <div
                        className="font-semibold text-white text-sm"
                        style={{ fontFamily: "Rufina, serif" }}
                      >
                        {method.label}
                      </div>
                      <div
                        className="text-[#DDDFE0] text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {method.value}
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-[#EB5824] ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Urgency & Trust Signals */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-[#EB5824]/20 to-[#EB5824]/10 rounded-2xl p-8 border border-[#EB5824]/30">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Trust Signal 1 */}
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-[#EB5824] mb-2"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  1625+
                </div>
                <div
                  className="text-sm text-[#DDDFE0]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Successful Projects
                </div>
              </div>

              {/* Main Message */}
              <div className="text-center">
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  Transform. Build. Thrive.
                </h3>
                <p
                  className="text-[#DDDFE0] text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your digital transformation journey starts with a conversation
                </p>
              </div>

              {/* Trust Signal 2 */}
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-[#EB5824] mb-2"
                  style={{ fontFamily: "Rufina, serif" }}
                >
                  30+
                </div>
                <div
                  className="text-sm text-[#DDDFE0]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Years Combined Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
