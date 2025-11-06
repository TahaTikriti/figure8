"use client";

import { useEffect, useState } from "react";

/**
 * GCCMapBackground Component - Enhanced Professional Version
 * 
 * Clear purpose: Shows Figure8's regional presence across all major GCC cities
 * Features: Radar animations, pulse effects, connection network
 * Positioned to work harmoniously with hero text on the left
 */
export default function GCCMapBackground() {
  const [mounted, setMounted] = useState(false);
  const [activeCity, setActiveCity] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Cycle through cities for radar effect
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % 15);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(33, 46, 63, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33, 46, 63, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#EB5824]/[0.06] rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-[#212E3F]/[0.04] rounded-full blur-3xl"></div>

      {/* Enhanced GCC Map - Right-aligned, doesn't overlap hero text */}
      <svg
        viewBox="0 0 1000 900"
        className={`absolute right-[5%] top-1/2 -translate-y-1/2 w-[50%] max-w-[700px] h-[85%] transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          {/* Gradient for Countries */}
          <linearGradient id="countryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EB5824', stopOpacity: 0.06 }} />
            <stop offset="100%" style={{ stopColor: '#ff6b3d', stopOpacity: 0.10 }} />
          </linearGradient>

          {/* Radar Pulse Gradient */}
          <radialGradient id="radarGradient">
            <stop offset="0%" style={{ stopColor: '#EB5824', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#EB5824', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#EB5824', stopOpacity: 0 }} />
          </radialGradient>

          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection Network Lines - Subtle */}
        <g className="network-lines" opacity="0.12" stroke="#EB5824" strokeWidth="1" fill="none">
          {/* Major routes connecting key cities */}
          <path d="M 400,280 Q 450,300 500,320" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 500,320 Q 550,340 600,360" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path d="M 600,360 Q 650,380 700,420" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2.2s" repeatCount="indefinite" />
          </path>
          <path d="M 400,450 Q 500,430 600,410" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M 600,410 Q 650,450 700,500" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2.3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Simplified GCC Country Shapes - More Recognizable */}
        
        {/* Saudi Arabia (Largest, Central) */}
        <path
          d="M 300,200 L 400,150 L 550,140 L 680,180 L 750,250 L 770,350 L 750,470 L 700,560 L 600,620 L 480,640 L 360,610 L 280,530 L 260,420 L 270,300 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* UAE (Eastern Coast) */}
        <path
          d="M 730,470 L 800,450 L 850,480 L 860,530 L 830,570 L 770,580 L 740,550 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* Qatar (Peninsula) */}
        <path
          d="M 640,390 L 670,370 L 695,395 L 700,435 L 675,455 L 645,445 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* Bahrain (Island) */}
        <ellipse
          cx="610"
          cy="380"
          rx="15"
          ry="22"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* Kuwait (Northern) */}
        <path
          d="M 620,220 L 670,205 L 705,240 L 700,285 L 670,305 L 630,295 L 615,260 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* Oman (Eastern, L-shaped) */}
        <path
          d="M 770,580 L 860,530 L 920,570 L 950,640 L 930,720 L 860,750 L 790,735 L 750,680 L 740,620 Z M 830,470 L 860,450 L 880,465 L 875,490 L 850,505 L 825,495 Z"
          fill="url(#countryGradient)"
          stroke="#EB5824"
          strokeWidth="2"
          className="country-shape"
        />

        {/* Major Cities with Radar Animations - 15 key cities */}
        {[
          // Saudi Arabia
          { x: 500, y: 360, name: "Riyadh", size: "large", country: "Saudi Arabia" },
          { x: 380, y: 450, name: "Jeddah", size: "large", country: "Saudi Arabia" },
          { x: 420, y: 520, name: "Mecca", size: "medium", country: "Saudi Arabia" },
          { x: 680, y: 240, name: "Dammam", size: "medium", country: "Saudi Arabia" },
          { x: 360, y: 290, name: "Medina", size: "medium", country: "Saudi Arabia" },
          
          // UAE
          { x: 810, y: 510, name: "Dubai", size: "large", country: "UAE" },
          { x: 800, y: 480, name: "Abu Dhabi", size: "large", country: "UAE" },
          { x: 830, y: 530, name: "Sharjah", size: "medium", country: "UAE" },
          
          // Other GCC
          { x: 665, y: 250, name: "Kuwait City", size: "large", country: "Kuwait" },
          { x: 670, y: 415, name: "Doha", size: "large", country: "Qatar" },
          { x: 610, y: 380, name: "Manama", size: "medium", country: "Bahrain" },
          { x: 870, y: 665, name: "Muscat", size: "large", country: "Oman" },
          { x: 905, y: 700, name: "Salalah", size: "small", country: "Oman" },
          { x: 860, y: 475, name: "Sohar", size: "small", country: "Oman" },
          { x: 750, y: 550, name: "Al Ain", size: "small", country: "UAE" },
        ].map((city, index) => {
          const isActive = index === activeCity;
          const sizeMap = { large: 6, medium: 5, small: 4 };
          const dotSize = sizeMap[city.size as keyof typeof sizeMap];
          
          return (
            <g key={index} className="city-marker">
              {/* Radar Sweep Effect - Only on active city */}
              {isActive && (
                <>
                  {/* Expanding Radar Rings */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="0"
                    fill="none"
                    stroke="#EB5824"
                    strokeWidth="2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="0"
                      to="40"
                      dur="2s"
                      repeatCount="1"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      repeatCount="1"
                    />
                  </circle>
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="0"
                    fill="none"
                    stroke="#EB5824"
                    strokeWidth="1.5"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="r"
                      from="0"
                      to="40"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="1"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="1"
                    />
                  </circle>
                  
                  {/* Radar Glow */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="25"
                    fill="url(#radarGradient)"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="2s"
                      repeatCount="1"
                    />
                  </circle>
                </>
              )}

              {/* Continuous Pulse - All cities */}
              <circle
                cx={city.x}
                cy={city.y}
                r={dotSize + 3}
                fill="#EB5824"
                opacity="0.2"
              >
                <animate
                  attributeName="r"
                  values={`${dotSize + 3};${dotSize + 8};${dotSize + 3}`}
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.05;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>

              {/* City Pin Dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={dotSize}
                fill="#EB5824"
                stroke="white"
                strokeWidth="2"
                filter="url(#glow)"
                className={isActive ? "active-city" : ""}
              />

              {/* City Label - Cleaner design */}
              <g className="city-label" opacity={city.size === "small" ? "0.7" : "0.85"}>
                <text
                  x={city.x}
                  y={city.y - (dotSize + 12)}
                  fill="#212E3F"
                  fontSize={city.size === "large" ? "11" : city.size === "medium" ? "10" : "9"}
                  fontWeight="600"
                  textAnchor="middle"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {city.name}
                </text>
              </g>

              {/* Pinpoint Drop Animation - Active city */}
              {isActive && (
                <g>
                  <path
                    d={`M ${city.x},${city.y - 50} L ${city.x},${city.y}`}
                    stroke="#EB5824"
                    strokeWidth="2"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="1s"
                      repeatCount="1"
                    />
                  </path>
                  <circle
                    cx={city.x}
                    cy={city.y - 50}
                    r="4"
                    fill="#EB5824"
                    opacity="0"
                  >
                    <animate
                      attributeName="cy"
                      from={city.y - 50}
                      to={city.y}
                      dur="1s"
                      repeatCount="1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0.8;0"
                      dur="1s"
                      repeatCount="1"
                    />
                  </circle>
                </g>
              )}
            </g>
          );
        })}

        {/* Clear Title with Purpose - Better positioned */}
        <g className="map-title">
          <text
            x="500"
            y="80"
            fill="#212E3F"
            fontSize="22"
            fontWeight="700"
            textAnchor="middle"
            style={{ fontFamily: "Rufina, serif" }}
            opacity="0.25"
          >
            OUR REGIONAL PRESENCE
          </text>
          <text
            x="500"
            y="105"
            fill="#EB5824"
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            opacity="0.4"
          >
            Serving 15+ Major Cities Across the GCC
          </text>
        </g>

        {/* Stats Badge - Shows scale */}
        <g className="stats-badge" opacity="0.8">
          <rect
            x="720"
            y="750"
            width="220"
            height="70"
            rx="10"
            fill="white"
            opacity="0.95"
            stroke="#EB5824"
            strokeWidth="1.5"
          />
          <text
            x="830"
            y="775"
            fill="#EB5824"
            fontSize="24"
            fontWeight="700"
            textAnchor="middle"
            style={{ fontFamily: "Rufina, serif" }}
          >
            6 Countries
          </text>
          <text
            x="830"
            y="800"
            fill="#212E3F"
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            opacity="0.7"
          >
            15+ Major Cities • 1,625+ Projects
          </text>
        </g>
      </svg>

      <style jsx>{`
        .country-shape {
          transition: all 0.3s ease;
        }

        .country-shape:hover {
          fill: rgba(235, 88, 36, 0.15);
          stroke-width: 3;
          filter: drop-shadow(0 2px 8px rgba(235, 88, 36, 0.2));
        }

        .city-marker {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .city-marker:hover .city-label {
          opacity: 1 !important;
        }

        .active-city {
          animation: activeGlow 2s ease-out;
        }

        @keyframes activeGlow {
          0%, 100% { filter: url(#glow); }
          50% { filter: url(#glow) brightness(1.5); }
        }

        .city-label text {
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        .map-title text {
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
