"use client";
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import fs from 'fs/promises';
import path from 'path';

// Partner interface
interface Partner {
  name: string;
  imagePath: string;
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fetch partners dynamically
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners');
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-48 h-48 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#212E3F]"
            style={{ fontFamily: "Rufina, serif" }}
          >
            Technology <span className="text-[#EB5824]">Partners</span>
          </h2>
          <p
            className="text-lg text-[#212E3F]/60 max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Collaborating with leading technology providers to deliver exceptional solutions.
          </p>
        </div>

        {/* Partners Logos Marquee */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Marquee
            gradient={true}
            speed={30}
            pauseOnHover={true}
            gradientColor={"#f9fafb"}
            gradientWidth={50}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center mx-6">
                <div className="w-44 h-20 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                  <img 
                    src={`/images/partners/${partner.imagePath}`}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>  
        </div>  
    </section>
    );
    } 
