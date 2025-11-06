"use client";

import { useEffect, useState } from "react";
import GCCMapBackground from "./GCCMapBackground";

/**
 * HeroBackground - Dynamic Professional Background Images
 * 
 * TO ADD NEW IMAGES:
 * Simply add a new entry to the imageOptions array below with:
 * - id: unique number
 * - name: descriptive name
 * - url: image URL (preferably from Unsplash with quality parameters)
 * - alt: accessibility description
 * - position: CSS object-position value
 * - type: (optional) "svg-component" for special SVG components like GCC Map
 */

// 🎨 ADD OR EDIT IMAGE OPTIONS HERE - Easy to manage!
export const imageOptions = [
  {
    id: 1,
    name: "Dubai Skyline",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    alt: "Dubai Skyline - Modern GCC Architecture",
    position: "object-center"
  },
  {
    id: 2,
    name: "Tech Data Visualization",
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop",
    alt: "Modern Technology Data Visualization",
    position: "object-center"
  },
  {
    id: 3,
    name: "Globe Space View",
    url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2074&auto=format&fit=crop",
    alt: "Earth from Space - Global Connectivity",
    position: "object-center"
  },
  {
    id: 4,
    name: "Abstract Technology",
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    alt: "Abstract Technology Background with Light Trails",
    position: "object-center"
  },
  {
    id: 5,
    name: "Modern Office Space",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern Office Space with Technology",
    position: "object-center"
  },
  {
    id: 6,
    name: "Riyadh Kingdom Tower",
    url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2070&auto=format&fit=crop",
    alt: "Kingdom Centre Tower Riyadh - GCC Architecture",
    position: "object-center"
  },
  {
    id: 7,
    name: "Digital Network",
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    alt: "Digital Network and Connectivity",
    position: "object-center"
  },
  {
    id: 8,
    name: "Business Handshake",
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    alt: "Professional Business Partnership",
    position: "object-center"
  },
  {
    id: 9,
    name: "Modern Architecture",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern Glass Architecture - Corporate Building",
    position: "object-bottom"
  },
  {
    id: 10,
    name: "Digital Transformation",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    alt: "Digital Transformation Dashboard Analytics",
    position: "object-center"
  },
  {
    id: 11,
    name: "Abu Dhabi Skyline",
    url: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop",
    alt: "Abu Dhabi Modern Skyline - UAE Architecture",
    position: "object-center"
  },
  {
    id: 12,
    name: "Server Technology",
    url: "https://images.unsplash.com/photo-1558494403-d7dfa67e75f3?q=80&w=2071&auto=format&fit=crop",
    alt: "Modern Server Infrastructure Technology",
    position: "object-center"
  },
  {
    id: 13,
    name: "GCC Animated Map",
    url: "", // No URL - this is an SVG component
    alt: "GCC Regional Interactive Map",
    position: "object-center",
    type: "svg-component" // Special type to indicate this requires special handling
  },
  {
    id: 14,
    name: "GCC Detailed Map",
    url: "/svg/gccmap.svg", // High-detail map
    alt: "GCC Countries Detailed Map",
    position: "object-center",
    type: "detailed-svg" // Detailed SVG map
  }
  ,
  {
    id: 15,
    name: "GCC Alternative Map",
    url: "/svg/gccmap2.svg", // Alternative detailed map
    alt: "GCC Countries Alternative Detailed Map",
    position: "object-center",
    type: "detailed-svg" // Detailed SVG map
  }
];
    
interface HeroBackgroundProps {
  currentOption?: number;
}

export default function HeroBackground({ currentOption = 1 }: HeroBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find the selected image by id
  const selectedImage = imageOptions.find(opt => opt.id === currentOption) || imageOptions[0];

  // Special handling for GCC Map (SVG component)
  if (selectedImage.type === "svg-component") {
    return <GCCMapBackground />;
  }

  // Special handling for detailed GCC SVG map
  if (selectedImage.type === "detailed-svg") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-white">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Detailed GCC Map SVG - positioned right, smaller and more refined */}
          <div 
            className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[38%] max-w-[500px] h-[60%]"
            style={{
              backgroundImage: `url(${selectedImage.url})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.75,
              filter: 'drop-shadow(0 10px 30px rgba(33, 46, 63, 0.08))',
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Enhanced gradient overlay for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/35 to-white/10"></div>
          
          {/* Soft edge fade on the right to blend SVG edges */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/30 via-transparent to-transparent"></div>
        </div>

        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(33, 46, 63, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(33, 46, 63, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
    );
  }

  // Regular image handling
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className={`absolute inset-0 w-full h-full object-cover ${selectedImage.position}`}
        />
        {/* OPTIMIZED: Lighter overlay - image is visible but text remains readable */}
        {/* Left side has more overlay (60%) for text, right side shows more image (20%) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/20"></div>
        {/* Subtle brand color tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EB5824]/[0.02] via-transparent to-[#212E3F]/[0.03]"></div>
      </div>

      {/* Very subtle grid pattern - almost invisible */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(33, 46, 63, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33, 46, 63, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </div>
  );
}
