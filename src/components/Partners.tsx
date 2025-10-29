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
      className="bg-[#F9F9F9] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#EB5824] rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-[#EB5824] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-[#212E3F]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Trusted Partners
          </h2>
          <p
            className="text-lg md:text-xl text-[#555555] max-w-3xl mx-auto"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            We collaborate with industry leaders to bring you the best solutions.
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
            speed={40}
            pauseOnHover={true}
            gradientColor={"#F9F9F9"}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center mx-8">
                <div className="w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
                  <img 
                    src={`/images/partners/${partner.imagePath}`}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[80%] object-contain"
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
