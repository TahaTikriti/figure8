"use client";

import ExpertiseLogos from "./ExpertiseLogos";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ExpertiseSection() {
  const { sectionRef, isVisible } = useSectionInView<HTMLElement>();

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-10 border border-[#212E3F]/10 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#212E3F] mb-4">
                Our Expertise
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  metric: "Frameworks",
                  label: "Expertise",
                  description:
                    "Expertise in international and national standards and best practices like TOGAF, ITIL, COBIT, ISO42010, ISO20000, CMMI, QIYAS, DXMI, NDI, NAII",
                },
                {
                  metric: "Platforms",
                  label: "Expertise",
                  description:
                    "Deep expertise in platforms like Alfabet, Orbus iServer, BizzDesign, ARIS, OvalEdge, and more.",
                },
                {
                  metric: "Industries",
                  label: "Expertise",
                  description:
                    "Expertise in industries like Government, Healthcare, Education, Energy, Telecom, Hospitality, Transportation & Logistics, and Manufacturing",
                },
                {
                  metric: "Regional",
                  label: "Expertise",
                  description:
                    "Proven experience delivering transformation initiatives across KSA, UAE, Oman, Kuwait, Qatar, and Lebanon.",
                },
              ].map((diff, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center p-6 rounded-lg bg-[#f9fafb] border border-[#212E3F]/10 hover:border-[#EB5824]/20 hover:shadow-md transition-all duration-300 min-h-[220px]"
                >
                  <div className="text-2xl font-bold text-[#EB5824] mb-1">
                    {diff.metric}
                  </div>
                  <div className="text-sm font-medium text-[#212E3F]/80 mb-3 tracking-wide">
                    {diff.label}
                  </div>
                  <hr className="w-10 border-t border-[#EB5824]/30 mb-3" />
                  <p className="text-sm text-[#212E3F]/70 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>

            <ExpertiseLogos
              internationalLogos={[
                { name: "TOGAF", imagePath: "/images/standards/Togaf.png" },
                { name: "ITIL", imagePath: "/images/standards/ITIL.png" },
                { name: "COBIT", imagePath: "/images/standards/cobit.png" },
                {
                  name: "ISO 20000",
                  imagePath: "/images/standards/iso2000.png",
                },
                {
                  name: "ISO 27001",
                  imagePath: "/images/standards/iso27001.png",
                },
                {
                  name: "ISO 38500",
                  imagePath: "/images/standards/iso38500.png",
                },
                {
                  name: "ISO 22301",
                  imagePath: "/images/standards/iso22301.png",
                },
                { name: "CMMI", imagePath: "/images/standards/cmmi.png" },
                {
                  name: "ArchiMate",
                  imagePath: "/images/standards/archimate.png",
                },
                { name: "SAFe", imagePath: "/images/standards/SAFe.png" },
                { name: "DevOps", imagePath: "/images/standards/devops.png" },
                { name: "DAMA", imagePath: "/images/standards/DAMA.png" },
                { name: "GDPR", imagePath: "/images/standards/gdpr.png" },
                { name: "NIST", imagePath: "/images/standards/NIST.png" },
                { name: "Prosci", imagePath: "/images/standards/prosci.png" },
                { name: "W3C", imagePath: "/images/standards/W3C.png" },
                { name: "SOA", imagePath: "/images/standards/SOA.png" },
                { name: "EFQM", imagePath: "/images/standards/EFQM.png" },
                { name: "GII", imagePath: "/images/standards/GII.png" },
                { name: "OMG", imagePath: "/images/standards/omg.png" },
                {
                  name: "The Open Group",
                  imagePath: "/images/standards/the open group.png",
                },
              ]}
              ksaLogos={[
                { name: "CST", imagePath: "/images/ksa-standards/CST.png" },
                { name: "DE", imagePath: "/images/ksa-standards/DE.png" },
                { name: "DGA", imagePath: "/images/ksa-standards/dga.png" },
                { name: "DT", imagePath: "/images/ksa-standards/DT.png" },
                { name: "ET", imagePath: "/images/ksa-standards/ET.png" },
                { name: "NCA", imagePath: "/images/ksa-standards/NCA.png" },
                { name: "NDI", imagePath: "/images/ksa-standards/NDI.jpg" },
                { name: "NDMO", imagePath: "/images/ksa-standards/NDMO.png" },
                { name: "NORA", imagePath: "/images/ksa-standards/NORA.png" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
