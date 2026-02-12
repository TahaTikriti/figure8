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
        rootMargin: "50px 0px",
      },
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
      "noopener,noreferrer",
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
      value: "+971 52 570 55 39",
      link: "tel:+971525705539",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "KSA",
      value: "+966 55 188 22 04",
      link: "tel:+966551882204",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#212E3F] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#EB5824] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-32 h-32 border border-[#EB5824] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#EB5824]/30 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EB5824]/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Main CTA */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Book a Quick
              <span className="text-[#EB5824]"> Meeting</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Choose a time that works for you. Simple, fast, and completely
              free. Just a friendly conversation to explore how we can help.
            </p>

            {/* Main CTA Button */}
            <button
              onClick={handleScheduleMeeting}
              className="group w-full sm:w-auto text-white px-10 py-5 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl relative overflow-hidden"
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
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

              <div className="flex items-center justify-center gap-3 relative z-10">
                <svg
                  className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule a Meeting
              </div>
            </button>

            {/* Procurement-Ready CTAs */}
            <div className="mt-6 space-y-3">
              {/* Privacy Assurance */}
              <div className="flex items-start gap-2 text-white/70 text-xs p-3 bg-white/5 rounded-lg border border-white/10">
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>
                  <strong className="text-white">
                    Privacy & Security Assured:
                  </strong>{" "}
                  All inquiries are handled with strict confidentiality. We
                  comply with international data protection standards and
                  maintain ISO 9001 certification for quality assurance in
                  public sector engagements.
                </span>
              </div>
            </div>

            {/* Meeting Benefits with Person Element */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Person Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EB5824] to-[#d54d1e] rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#212E3F] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="flex-1 w-full">
                  <h5 className="text-base font-bold text-white mb-4">
                    What to expect:
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EB5824] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70 text-sm leading-relaxed">
                        15-30 minute casual conversation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EB5824] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70 text-sm leading-relaxed">
                        100% confidential discussion
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#EB5824] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70 text-sm leading-relaxed">
                        No pressure or obligation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
            {/* Decorative Element */}
            <div className="relative">
              {/* Floating Card Effect */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#EB5824]/10 rounded-2xl transform rotate-12 animate-pulse"></div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Contact Methods */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#EB5824]/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#EB5824]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Get in Touch</h4>
                </div>

                <div className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 hover:border-[#EB5824]/50 transition-all duration-300 group border border-white/10 hover:translate-x-1 transform"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="w-12 h-12 bg-[#EB5824]/10 rounded-xl flex items-center justify-center text-[#EB5824] group-hover:bg-[#EB5824] group-hover:text-white transition-all duration-300">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white text-sm mb-1">
                          {method.label}
                        </div>
                        <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                          {method.value}
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-[#EB5824] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
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
                    </a>
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-white/60">
                  <svg
                    className="w-5 h-5 text-[#EB5824]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Available: Sunday to Friday, 9 AM - 5 PM GST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
