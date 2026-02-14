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
    <div className="mt-10">
      {/* International Standards & Best Practices */}
      {internationalLogos && internationalLogos.length > 0 && (
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#212E3F] mb-4">
            International Standards & Best Practices
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {internationalLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  className="max-w-full max-h-16 object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xs text-[#212E3F]/70 text-center">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* KSA National Standards */}
      {ksaLogos && ksaLogos.length > 0 && (
        <div>
          <h4 className="text-xl font-bold text-[#212E3F] mb-4">
            KSA National Standards
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {ksaLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  className="max-w-full max-h-16 object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xs text-[#212E3F]/70 text-center">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseLogos;
