"use client";

import { useState, useEffect, useRef } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";
import { SERVICES, ServiceId, ServiceConfig } from "@/config/services";

type ServiceWithIcon = ServiceConfig & {
  icon: React.ReactNode;
};

const SERVICE_ICONS: Record<ServiceId, React.ReactNode> = {
  "business-strategy": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  ),
  "digital-transformation": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 7H7v6h6V7z" />
      <path
        fillRule="evenodd"
        d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  tqm: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ea: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
        clipRule="evenodd"
      />
    </svg>
  ),
  grc: (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM15.0595 10.4995C15.3353 10.1905 15.3085 9.71642 14.9995 9.44055C14.6905 9.16467 14.2164 9.19151 13.9405 9.50049L10.9286 12.8739L10.0595 11.9005C9.78358 11.5915 9.30947 11.5647 9.00049 11.8405C8.69151 12.1164 8.66467 12.5905 8.94055 12.8995L10.3691 14.4995C10.5114 14.6589 10.7149 14.75 10.9286 14.75C11.1422 14.75 11.3457 14.6589 11.488 14.4995L15.0595 10.4995Z"
        fill="currentColor"
      />
    </svg>
  ),
  cx: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  ),
  bpm: (
    <svg
      className="w-8 h-8"
      viewBox="0 0 18.566 18.566"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.705,11.452h-0.73v-3.65c0.929-0.352,1.591-1.247,1.591-2.299c0-1.359-1.102-2.46-2.461-2.46
		c-1.044,0-1.936,0.651-2.291,1.568h-1.668V4.522c0-0.475-0.384-0.86-0.859-0.86h-5.2c-0.475,0-0.859,0.386-0.859,0.86V4.61H3.566
		V2.924c0-0.475-0.385-0.86-0.859-0.86H1.24c-0.475,0-0.859,0.385-0.859,0.86v5.199c0,0.476,0.385,0.859,0.859,0.859h1.467
		c0.474,0,0.859-0.384,0.859-0.859V5.9h1.663v0.089c0,0.475,0.384,0.86,0.859,0.86h5.199c0.476,0,0.859-0.385,0.859-0.86V5.9h1.533
		c0.168,1.032,0.977,1.848,2.006,2.025v3.527h-3.179c-0.475,0-0.859,0.385-0.859,0.858v0.089H9.851v-1.955
		c0-0.474-0.386-0.859-0.86-0.859H7.524c-0.475,0-0.859,0.386-0.859,0.859v1.955H4.833c-0.284-1.046-1.237-1.815-2.372-1.815
		C1.102,10.584,0,11.686,0,13.044c0,1.359,1.102,2.46,2.461,2.46c1.136,0,2.088-0.769,2.372-1.815h1.832v1.955
		c0,0.476,0.385,0.859,0.859,0.859h1.467c0.474,0,0.86-0.384,0.86-0.859v-1.955h1.796v0.089c0,0.476,0.385,0.859,0.859,0.859h5.199
		c0.476,0,0.86-0.384,0.86-0.859v-1.467C18.565,11.837,18.18,11.452,17.705,11.452z"
        fill="currentColor"
      />
    </svg>
  ),
  "data-management": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
    </svg>
  ),
  "ai-governance": (
    <svg
      className="w-8 h-8"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="currentColor" transform="translate(64 64)">
        <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" />
      </g>
    </svg>
  ),
  "digital-innovation": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const services: ServiceWithIcon[] = SERVICES.map((service) => ({
  ...service,
  icon: SERVICE_ICONS[service.id],
}));

const FeatureList = ({
  features,
  mobile = false,
}: {
  features: string[];
  mobile?: boolean;
}) => (
  <div className={mobile ? "space-y-3" : "space-y-4 pl-1 lg:pl-2"}>
    {features.map((feature, idx) => (
      <div key={idx} className="flex items-start gap-3 lg:gap-4">
        <div
          className={`bg-[#EB5824] rounded-full mt-2 flex-shrink-0 ${mobile ? "w-1.5 h-1.5" : "w-2 h-2"}`}
        />
        <span
          className={`text-[#212E3F]/70 leading-relaxed ${mobile ? "text-sm" : "text-base lg:text-lg"}`}
        >
          {feature}
        </span>
      </div>
    ))}
  </div>
);

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const { sectionRef, isVisible } = useSectionInView<HTMLElement>();
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024)
        setActiveService((prev) => Math.max(0, prev));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animateClass = (show: boolean) =>
    `transform transition-all duration-1000 ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;

  const handleAccordionClick = (index: number) => {
    const newIndex = activeService === index ? -1 : index;
    setActiveService(newIndex);
    if (newIndex >= 0 && window.innerWidth < 1024) {
      setTimeout(
        () =>
          accordionRefs.current[newIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          }),
        100,
      );
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 left-20 w-32 h-32 border border-[#212E3F] rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-36 pb-20 relative z-10">
        {/* Section Header */}
        <div className={`mb-16 lg:mb-20 ${animateClass(isVisible)}`}>
          <SectionHeader
            title={
              <>
                Our <span className="text-[#EB5824]">Services</span>
              </>
            }
            subtitle={
              <>
                Comprehensive digital transformation services designed for
                governmental and enterprise excellence.
              </>
            }
          />
        </div>
        {/* Mobile Accordion View */}
        <div
          className={`${animateClass(isVisible)} delay-300 lg:hidden space-y-3 mb-12`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                accordionRefs.current[index] = el;
              }}
              className="bg-[#f9fafb] rounded-xl border border-[#212E3F]/10 overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full text-left p-6 flex items-center gap-4 hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#EB5824]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#EB5824]">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#212E3F] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#212E3F]/60 line-clamp-1">
                    {service.description}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-[#EB5824] flex-shrink-0 transition-transform duration-300 ${
                    activeService === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeService === index
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-6 pt-4 border-t border-[#212E3F]/10">
                  <p className="text-[#212E3F]/70 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <FeatureList features={service.features} mobile />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Interactive View */}
        {activeService >= 0 && (
          <div
            className={`hidden lg:block ${animateClass(isVisible)} delay-500`}
          >
            <div className="bg-[#f9fafb] rounded-xl p-8 lg:p-10 border border-[#212E3F]/10 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                <div className="relative">
                  <h4 className="text-base lg:text-lg font-bold text-[#212E3F] mb-5 lg:mb-6">
                    All Services
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, idx) => {
                      const isActive = activeService === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveService(idx)}
                          className={`group w-full text-left rounded-lg border focus:outline-none transition-all duration-300 ${
                            isActive
                              ? "bg-white shadow-md border-[#EB5824]"
                              : "bg-white/50 text-[#212E3F]/70 hover:bg-white hover:shadow-sm border-[#212E3F]/10 hover:border-[#EB5824]/30"
                          }`}
                          style={{ minHeight: "72px", padding: "16px 18px" }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isActive
                                  ? "bg-[#EB5824]/10 text-[#EB5824]"
                                  : "bg-[#212E3F]/5 text-[#212E3F]/60 group-hover:bg-[#EB5824]/10 group-hover:text-[#EB5824]"
                              }`}
                            >
                              {service.icon}
                            </div>
                            <span className="font-semibold flex-1 text-xs lg:text-[13px] leading-tight tracking-tight">
                              {service.title}
                            </span>
                            <span
                              className={`inline-block w-4 h-4 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-[#EB5824]"
                                  : "bg-[#212E3F]/20 group-hover:bg-[#EB5824]/60"
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div key={activeService} className="fade-slide-in">
                  <div className="flex items-center gap-5 mb-8 lg:mb-10 pl-1 lg:pl-2">
                    <div className="w-14 h-14 bg-[#EB5824]/10 rounded-lg flex items-center justify-center text-[#EB5824]">
                      {services[activeService].icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#212E3F]">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <p className="text-base lg:text-lg text-[#212E3F]/70 mb-8 lg:mb-10 leading-relaxed pl-1 lg:pl-2">
                    {services[activeService].description}
                  </p>
                  <FeatureList features={services[activeService].features} />
                </div>
              </div>
            </div>
            <style>{`
              .fade-slide-in { animation: fadeSlideIn 0.5s cubic-bezier(0.4,0,0.2,1); }
              @keyframes fadeSlideIn { 0% { opacity: 0; transform: translateY(16px); } 100% { opacity: 1; transform: translateY(0); } }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
