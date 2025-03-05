import React from "react";

interface LogoScrollSectionProps {
  title?: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  logoCount?: number;
  logoWidth?: string;
  logoHeight?: string;
}

const LogoScrollSection = ({
  title = {
    prefix: "Trusted By ",
    highlight: "250+",
    suffix: " Leading Companies",
  },
  logoCount,
  logoWidth = "192px",
  logoHeight = "h-[72px]",
}: LogoScrollSectionProps) => {
  const LOGOS = Array.from({ length: logoCount }, (_, i) => i + 1);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-center text-[32px] font-medium mb-16">
          {title.prefix}
          <span className="text-[var(--color-SIB-blue)]">
            {title.highlight}
          </span>
          {title.suffix}
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {[...LOGOS, ...LOGOS].map((index, arrayIndex) => (
            <div
              key={`logo-${arrayIndex < logoCount ? "" : "duplicate-"}${index}`}
              className="flex-shrink-0 w-[192px] h mx-8 flex items-center justify-center"
            >
              <img
                src={`/logos/placeholder-logo-${index}.png`}
                alt={`Company ${index}`}
                className={`${logoHeight} w-auto grayscale hover:grayscale-0 transition-all`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScrollSection;
