"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";

type PhilosophyId = "xOps" | "eightyTwenty" | "kaizen";

type PhilosophyPill = {
  leftLabel: string;
  rightLabel: string;
  emphasizeRight?: boolean;
};

type PhilosophyCardConfig = {
  id: PhilosophyId;
  title: string;
  borderColorClass: string;
  hoverBorderColorClass: string;
  backgroundClass: string;
  titleBadge: React.ReactNode;
  pills: PhilosophyPill;
  bullets: string[];
  extraColClasses?: string;
};

const PHILOSOPHY_CARDS: PhilosophyCardConfig[] = [
  {
    id: "xOps",
    title: "X Ops",
    borderColorClass: "border-[#212E3F]/6",
    hoverBorderColorClass: "hover:border-[#212E3F]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">X</span> Ops
      </>
    ),
    pills: {
      leftLabel: "X",
      rightLabel: "Ops",
    },
    bullets: [
      "Everything Ops",
      "Holistic Digital Ops Framework",
      "Digital Factory",
      "Ops Visibility",
      "Ops Continuous Improvement",
    ],
  },
  {
    id: "eightyTwenty",
    title: "80 / 20 Rule",
    borderColorClass: "border-[#EB5824]/8",
    hoverBorderColorClass: "hover:border-[#EB5824]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">80 / 20</span> Rule
      </>
    ),
    pills: {
      leftLabel: "20%",
      rightLabel: "80%",
      emphasizeRight: false,
    },
    bullets: [
      "Roughly 80% of results come from 20% of causes",
      "Focus on what Matters",
      "Smart Prioritization",
      "Faster time-to-market",
      "Value Realization",
    ],
  },
  {
    id: "kaizen",
    title: "Kaizen",
    borderColorClass: "border-[#212E3F]/6",
    hoverBorderColorClass: "hover:border-[#212E3F]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">Kai</span>zen
      </>
    ),
    pills: {
      leftLabel: "i1",
      rightLabel: "i2",
    },
    bullets: [
      "Good Change",
      "Small, Incremental Change",
      "Employee Involvement",
      "Waste Reduction",
      "Continuous Improvement",
    ],
    extraColClasses: "md:col-span-2 lg:col-span-1",
  },
];

function PhilosophyCard({ config }: { config: PhilosophyCardConfig }) {
  const {
    borderColorClass,
    hoverBorderColorClass,
    backgroundClass,
    titleBadge,
    pills,
    bullets,
    extraColClasses,
  } = config;

  return (
    <div
      className={`group p-6 sm:p-8 rounded-xl ${backgroundClass} border ${borderColorClass} ${hoverBorderColorClass} transition-all duration-300 hover:shadow-lg ${
        extraColClasses ?? ""
      }`}
    >
      <div className="text-center mb-6">
        <div className="transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
          <div className="relative flex items-center justify-center mx-auto mb-4 w-56 h-32">
            <img
              src="/Figure8-cropped.png"
              alt="Figure8 Logo"
              className="w-full h-full object-contain"
            />
            <span className="absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md text-[#EB5824]">
              {pills.leftLabel}
            </span>
            <span className="absolute left-[74%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
              {pills.rightLabel}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
            <span className="inline-block bg-white text-[#212E3F] ring-1 ring-gray-100 px-3 py-1 rounded-md shadow-sm">
              {titleBadge}
            </span>
          </h4>
          <div className="space-y-3 text-sm text-[#212E3F]/70 text-center">
            {bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { sectionRef, isVisible } = useSectionInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <SectionHeader
            title={
              <>
                About <span className="text-[#EB5824]">Figure8 DX</span>
              </>
            }
            subtitle={
              <>
                Established in 2019, Figure8 DX works with governments,
                enterprises, startups, and NGOs across the GCC, MENA, and EU.
              </>
            }
          />
        </div>

        {/* Main Content Grid */}

        {/* Our Philosophy Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-10 border border-[#212E3F]/10 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#212E3F] mb-6">
                Our <span className="text-[#EB5824]">Philosophy</span>
              </h3>
              <p className="text-lg text-[#212E3F]/70 mb-4">
                Our philosophy sits at the intersection of{" "}
                <span className="text-[#EB5824] font-bold">X Ops</span> ,{" "}
                <span className="text-[#EB5824] font-bold"> 80/20 </span>
                Rule, and{" "}
                <span className="font-bold">
                  <span className="text-[#EB5824]">Kai</span>zen
                </span>
                .
              </p>
              <p className="text-base text-[#212E3F]/60">
                We focus on value-driven digital work built through{" "}
                <span className="font-semibold">
                  small, meaningful, and continuous improvement.
                </span>
              </p>
            </div>

            {/* <div className="text-center mb-8">
              <p className="text-lg text-[#212E3F]/70 leading-relaxed">
                <span className="text-[#EB5824] font-semibold">Figure8Dx</span>{" "}
                represents a continuous loop between strategy and execution,
                where learning and improvement are built into delivery, not
                added later.
              </p>
            </div> */}

            {/* Philosophy Framework */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PHILOSOPHY_CARDS.map((card) => (
                <PhilosophyCard key={card.id} config={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
