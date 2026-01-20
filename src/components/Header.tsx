"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    handleScroll(); // Initial calculation
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
    { label: "Home", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#212E3F] backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-[#212E3F]/95 backdrop-blur-xl border-b border-white/5"
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
                className="relative text-[#DDDFE0] hover:text-white transition-colors duration-300 group cursor-pointer"
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
              className="group relative px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-brand-600)",
                boxShadow: "0 0 0 0 var(--color-brand-500)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-brand-hover)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(235, 88, 36, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-brand-600)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 0 var(--color-brand-500)";
              }}
            >
              <span className="relative z-10">Talk to us</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-600), #ff6b3d)",
                }}
              ></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
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
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="pt-6 pb-6 border-t border-[#EB5824]/20 mt-4">
            <nav
              className="flex flex-col space-y-3"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[#DDDFE0] hover:text-white hover:bg-[#EB5824]/10 px-4 py-3 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <span className="font-medium group-hover:translate-x-1 transform transition-transform duration-300 inline-block">
                    {item.label}
                  </span>
                </button>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 w-full px-6 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-600), #ff6b3d)",
                  boxShadow: "0 0 0 0 rgba(235, 88, 36, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 15px -3px rgba(235, 88, 36, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(235, 88, 36, 0.3)";
                }}
              >
                Talk to us
              </button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#212E3F]/30">
          <div
            className="h-full bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] transition-all duration-150"
            style={{
              width: `${scrollProgress}%`,
            }}
          ></div>
        </div>
      )}
    </header>
  );
}
