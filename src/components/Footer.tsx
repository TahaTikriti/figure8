"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Leadership", href: "#leadership" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Digital Transformation Advisory",
    "Enterprise Architecture",
    "Customer Experience",
    "Business Process Management",
    "Digital Innovation",
  ];

  return (
    <footer className="bg-[#DDDFE0] text-[#212E3F] relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#EB5824] rounded-full"></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#212E3F] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div
          className={`py-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info & Logo Section */}
            <div>
              <div className="mb-6">
                <img 
                  src="/Figure8-12.png"
                  alt="Figure8 DX Logo"
                  className="h-12 w-auto mb-4"
                />
                <p
                  className="text-[#EB5824] font-semibold text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Transform. Build. Thrive.
                </p>
              </div>

              <p
                className="text-[#212E3F]/70 text-sm leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Digital transformation partner since 2017, operating across EU,
                GCC, and MENA regions.
              </p>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4
                className="text-lg font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-[#212E3F]/70 hover:text-[#EB5824] transition-colors duration-300 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-lg font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Services
              </h4>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="text-[#212E3F]/70 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="text-lg font-bold text-[#212E3F] mb-4"
                style={{ fontFamily: "Rufina, serif" }}
              >
                Contact
              </h4>

              <div className="space-y-3">
                <div>
                  <div
                    className="text-[#212E3F]/70 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:connect@figure8dx.com"
                    className="text-[#EB5824] hover:text-[#ff6b3d] transition-colors duration-300 text-sm font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    connect@figure8dx.com
                  </a>
                </div>

                <div>
                  <div
                    className="text-[#212E3F]/70 text-sm mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Phone
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+971525705539"
                      className="block text-[#212E3F] hover:text-[#EB5824] transition-colors duration-300 text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      UAE: +971 525 705 539
                    </a>
                    <a
                      href="tel:+966551882204"
                      className="block text-[#212E3F] hover:text-[#EB5824] transition-colors duration-300 text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      KSA: +966 551 882 204
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <div
                    className="text-[#212E3F]/70 text-sm mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Connect
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#EB5824]/20 rounded-lg flex items-center justify-center hover:bg-[#EB5824] transition-colors duration-300 cursor-pointer group">
                      <svg
                        className="w-4 h-4 text-[#EB5824] group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-[#212E3F]/20 py-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div
              className="text-[#212E3F]/70 text-sm"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              © {currentYear} Figure8 DX. All rights reserved.
            </div>

            {/* Compliance & Standards */}
            <div className="flex items-center gap-4 text-sm">
              <span
                className="text-[#212E3F]/70"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                ISO Compliant • TOGAF Certified • DGA Standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
