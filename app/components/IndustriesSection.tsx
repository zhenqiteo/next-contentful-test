"use client";

import Link from "next/link";
import Image from "next/image";
import SectionBadge from "./ui/SectionBadge";
import CTAButton from "./ui/CTAButton";
import Divider from "./ui/Divider";

interface Industry {
  title: string;
  image: string;
  href: string;
}

const industries: Industry[] = [
  {
    title: "Oil & Gas",
    image: "/images/industries/oil-and-gas.png",
    href: "/industries/oil-gas",
  },
  {
    title: "Petrochemical",
    image: "/images/industries/petrochemical.png",
    href: "/industries/petrochemical",
  },
    {
        title: "Chlor Alkali",
        image: "/images/industries/chlor-alkali.png",
        href: "/industries/chlor-alkali",
    },
    {
        title: "Chemical",
        image: "/images/industries/oil-and-gas.png",
        href: "/industries/chemical",
    },

  // Add more industries as needed
];

const IndustriesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left Column - Header Content */}
          <div>
            <SectionBadge text="About SUPCON" />
            <h2 className="text-[56px] leading-[64px] font-medium mt-4">
              Empowering <span className="text-[var(--color-SIB-blue)]">Safety</span>,<br />
              Driving Innovation
            </h2>
            <div className="mt-10">
              <CTAButton text="View All Industries" href="/industries" />
            </div>
          </div>

          {/* Right Column - Text Box */}
          <div className="lg:mt-24">
            <p className="text-[var(--color-SIB-black)] text-lg leading-relaxed">
              At SUPCON, we prioritize industrial safety and innovation to drive 
              the future of smart manufacturing. Demonstrating strong 
              adaptation capabilities across different units and conditions. It 
              offers higher accuracy and inclusiveness for production 
              optimization.
            </p>
          </div>
        </div>
        
        <Divider className="bg-[#17171B]" />

        {/* Scrolling Industries */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4">
              {industries.map((industry, index) => (
                <Link 
                  href={industry.href} 
                  key={index}
                  className="flex-none w-[440px] group"
                >
                  <div className="relative h-[560px] w-full overflow-hidden rounded-sm">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-contain transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-xl font-medium">{industry.title}</h3>
                    
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <circle cx="11.5" cy="11" r="11" fill="#0057E3" />
                      <path
                        d="M13.341 11.4444L10.2681 15L9.5 14.1113L12.1888 11L9.5 7.88875L10.2681 7L13.341 10.5556C13.4428 10.6735 13.5 10.8333 13.5 11C13.5 11.1667 13.4428 11.3265 13.341 11.4444Z"
                        fill="white"
                      />
                    </svg> */}
                    <div className="transform transition-all duration-300 group-hover:rotate-45">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.2991 13.9348L12.3174 11.2931L12.649 9.45639L30.7544 12.6489L27.562 30.7543L25.7226 30.4377L28.3643 15.4561L9.9891 28.3225L8.92388 26.8012L27.2991 13.9348Z" fill="#0057E3"/>
                    </svg>
                    </div>
                  </div>
                  <Divider className="bg-[#17171B]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;