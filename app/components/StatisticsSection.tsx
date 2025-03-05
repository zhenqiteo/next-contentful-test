import { FC } from "react";
import { IoEllipse } from "react-icons/io5";
import CTAButton from "./ui/CTAButton";

interface StatNumberProps {
  number: string;
  description: string;
}

const StatNumber: FC<StatNumberProps> = ({ number, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[91px] text-center font-poppins text-[104px] font-light text-[var(--sib-blue-main,#0057E3)] tracking-[-2.08px] mb-4">
        {number}
      </div>
      <div className="mt-4 text-base text-[var(--color-SIB-black)] max-w-[211px] leading-relaxed font-normal font-sans">
        {description}
      </div>
    </div>
  );
};

const StatisticsSection: FC = () => {
  const stats: StatNumberProps[] = [
    {
      number: "50+",
      description: "Countries, Enabling Global Digital Transformation",
    },
    {
      number: "30k+",
      description: "Customers with Next-Gen Industrial Intelligence",
    },
    {
      number: "100k+",
      description: "Deployments Driving AI-Powered Smart Factories",
    },
    {
      number: "4k+",
      description: "AI-Powered Smart Plant Projects",
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background Pattern/Globe */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/HomePage_GlobeBackground.png')",
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/HomePage_GlobeBackground.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-medium">
        <div className="mb-16">
          <span className="text-[var(--color-SIB-black)] text-base font-poppins flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#0057E3" />
            </svg>
            About SUPCON
          </span>
          <h1 className="mt-4 text-[56px] leading-[64px]">
            Leading{" "}
            <span className="text-[var(--color-SIB-blue)]">Industrial AI</span>{" "}
            To
            <br />
            <span className="text-[var(--color-SIB-blue)]">
              Sustainable Growth
            </span>
          </h1>
          <div className="mt-10">
            <CTAButton text="Learn More" href="/" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatNumber
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
