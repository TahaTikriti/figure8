"use client";

import { useEffect, useState } from "react";

/**
 * GCCMapBackground Component
 * 
 * This is the original GCC map background with animated countries and cities.
 * Preserved here for future use.
 * 
 * To use this instead of the stock image:
 * In Hero.tsx, replace:
 *   import HeroBackground from "./HeroBackground";
 * With:
 *   import HeroBackground from "./GCCMapBackground";
 */
export default function GCCMapBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(33, 46, 63, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33, 46, 63, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Enhanced Accent Shapes */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#EB5824]/[0.08] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#212E3F]/[0.05] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#EB5824]/[0.04] rounded-full blur-3xl"></div>

      {/* Clearer GCC Map SVG */}
      <svg
        viewBox="0 0 1200 800"
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          {/* Clean Gradient for Countries */}
          <linearGradient id="countryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EB5824', stopOpacity: 0.08 }} />
            <stop offset="100%" style={{ stopColor: '#ff6b3d', stopOpacity: 0.12 }} />
          </linearGradient>

          <radialGradient id="pulseGradient">
            <stop offset="0%" style={{ stopColor: '#EB5824', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#EB5824', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Connection Lines - More Subtle */}
        <g className="connection-lines" opacity="0.15">
          <line x1="500" y1="300" x2="650" y2="450" stroke="#EB5824" strokeWidth="1.5" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="650" y1="450" x2="750" y2="400" stroke="#EB5824" strokeWidth="1.5" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="300" x2="550" y2="500" stroke="#EB5824" strokeWidth="1.5" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="550" y1="500" x2="650" y2="450" stroke="#EB5824" strokeWidth="1.5" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="650" y1="450" x2="780" y2="500" stroke="#EB5824" strokeWidth="1.5" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.3s" repeatCount="indefinite" />
          </line>
        </g>

        {/* More Realistic GCC Country Shapes */}
        
        {/* Saudi Arabia (Dominant, Central) */}
        <path
          d="M 380 250 L 450 190 L 560 170 L 660 200 L 730 260 L 760 340 L 750 440 L 720 520 L 650 580 L 550 600 L 450 590 L 370 530 L 340 450 L 350 350 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="Saudi Arabia"
        />

        {/* UAE (Eastern Coast) */}
        <path
          d="M 750 470 L 800 450 L 840 470 L 850 510 L 820 540 L 770 550 L 750 520 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="UAE"
        />

        {/* Qatar (Peninsula) */}
        <path
          d="M 660 410 L 685 390 L 705 410 L 710 445 L 690 465 L 660 455 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="Qatar"
        />

        {/* Bahrain (Small Island) */}
        <ellipse
          cx="640"
          cy="400"
          rx="12"
          ry="18"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="Bahrain"
        />

        {/* Kuwait (Northern) */}
        <path
          d="M 630 260 L 670 250 L 695 280 L 690 315 L 665 330 L 635 320 L 625 290 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="Kuwait"
        />

        {/* Oman (Eastern, Extended) */}
        <path
          d="M 770 550 L 850 510 L 900 540 L 930 600 L 910 670 L 850 690 L 790 680 L 760 630 L 750 580 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2.5"
          className="country-shape"
          data-country="Oman"
        />

        {/* City Markers - Clean and Professional */}
        {[
          { x: 520, y: 380, name: "Riyadh", country: "KSA" },
          { x: 680, y: 430, name: "Doha", country: "Qatar" },
          { x: 665, y: 295, name: "Kuwait", country: "Kuwait" },
          { x: 480, y: 470, name: "Jeddah", country: "KSA" },
          { x: 810, y: 490, name: "Dubai", country: "UAE" },
          { x: 860, y: 620, name: "Muscat", country: "Oman" },
        ].map((city, index) => (
          <g key={index} className="city-marker">
            {/* Subtle Pulse */}
            <circle
              cx={city.x}
              cy={city.y}
              r="12"
              fill="url(#pulseGradient)"
              opacity="0.4"
            >
              <animate
                attributeName="r"
                values="12;20;12"
                dur="3s"
                repeatCount="indefinite"
                begin={`${index * 0.4}s`}
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="3s"
                repeatCount="indefinite"
                begin={`${index * 0.4}s`}
              />
            </circle>

            {/* City Pin */}
            <circle
              cx={city.x}
              cy={city.y}
              r="5"
              fill="#EB5824"
              stroke="white"
              strokeWidth="2"
            />

            {/* City Label with Background */}
            <g>
              <rect
                x={city.x - 28}
                y={city.y - 30}
                width="56"
                height="18"
                rx="9"
                fill="white"
                opacity="0.95"
                stroke="#EB5824"
                strokeWidth="1"
              />
              <text
                x={city.x}
                y={city.y - 19}
                fill="#212E3F"
                fontSize="11"
                fontWeight="700"
                textAnchor="middle"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {city.name}
              </text>
            </g>
          </g>
        ))}

        {/* Regional Label */}
        <text
          x="600"
          y="150"
          fill="#212E3F"
          fontSize="32"
          fontWeight="700"
          textAnchor="middle"
          style={{ fontFamily: "Rufina, serif" }}
          opacity="0.15"
        >
          GCC REGION
        </text>
      </svg>

      <style jsx>{`
        .country-shape {
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .country-shape:hover {
          fill: rgba(235, 88, 36, 0.2);
          stroke-width: 3.5;
          filter: drop-shadow(0 4px 12px rgba(235, 88, 36, 0.3));
        }

        .city-marker {
          transition: all 0.3s ease;
        }

        .city-marker:hover {
          transform: translateY(-2px);
          filter: drop-shadow(0 2px 8px rgba(235, 88, 36, 0.4));
        }
      `}</style>
    </div>
  );
}
