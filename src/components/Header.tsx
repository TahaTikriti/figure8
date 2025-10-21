"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Leadership", id: "leadership" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#212E3F]/80 backdrop-blur-2xl shadow-2xl border-b border-white/10"
          : "bg-white/5 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <img 
              src="/Figure8-05.png"
              alt="Figure8 DX Logo"
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-[#DDDFE0] hover:text-white transition-colors duration-300 group"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="relative z-10 font-medium">{item.label}</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EB5824] group-hover:w-full transition-all duration-300"></div>
                {/* Hover background glow */}
                <div className="absolute inset-0 rounded-md bg-[#EB5824]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-6 py-3 bg-[#EB5824] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#d64a1f] hover:shadow-lg hover:shadow-[#EB5824]/25 transform hover:-translate-y-0.5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-6 border-t border-[#EB5824]/20 mt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[#DDDFE0] hover:text-white hover:bg-[#EB5824]/10 px-4 py-3 rounded-lg transition-all duration-300 group"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="font-medium group-hover:translate-x-1 transform transition-transform duration-300 inline-block">
                    {item.label}
                  </span>
                </button>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 w-full px-6 py-4 bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#EB5824]/30 transform hover:scale-105"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#212E3F]/30">
          <div
            className="h-full bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] transition-all duration-300"
            style={{
              width: `${Math.min(
                (window.scrollY /
                  (document.body.scrollHeight - window.innerHeight)) *
                  100,
                100
              )}%`,
            }}
          ></div>
        </div>
      )}
    </header>
  );
}
