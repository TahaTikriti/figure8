import React from "react";

interface Logo {
  name: string;
  imagePath: string;
}

interface ExpertiseLogosProps {
  internationalLogos: Logo[];
  ksaLogos: Logo[];
}

const ExpertiseLogos: React.FC<ExpertiseLogosProps> = ({
  internationalLogos,
  ksaLogos,
}) => {
  return (
    <div className="mt-6">
      {/* International Standards & Best Practices */}
      {internationalLogos && internationalLogos.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg md:text-xl font-semibold text-[#212E3F]/70 mb-4 tracking-wide">
            International Standards & Best Practices
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
            {internationalLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-1 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300"
                title={logo.name}
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  title={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="max-w-[80px] max-h-[56px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* KSA National Standards */}
      {ksaLogos && ksaLogos.length > 0 && (
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-[#212E3F]/70 mb-4 tracking-wide">
            KSA National Standards
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
            {ksaLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-1 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300"
                title={logo.name}
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  title={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="max-w-[80px] max-h-[56px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseLogos;
