import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CTAButton from "./ui/CTAButton";

const HomePageHero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/HomePage_Hero.png")', // Add your industrial background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Container - Updated with grid layout */}
      <div className="relative z-10 flex items-end pb-24 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[1fr_auto] gap-y-6 gap-x-8 w-full">
          {/* Tag line - First row, spanning all columns */}
          <div className="col-span-full px-4 sm:px-6 lg:px-8">
            <h4 className="text-white font-light text-lg mb-0 font-poppins">
              Next Generation Automation
            </h4>
          </div>

          {/* Left Section - Second row, spans full width on mobile/tablet, 2 columns on desktop */}
          <div className="col-span-full lg:col-span-2 row-start-2 flex flex-col items-start px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight">
              Minimise Costs,
              <br />
              Maximise Control
            </h1>
          </div>

          {/* Right Section - Third row on mobile/tablet, second row's third column on desktop */}
          <div className="col-span-full lg:col-span-1 row-start-3 lg:row-start-2 flex flex-col items-start px-4 sm:px-6 lg:px-8">
            {/* Description */}
            <p className="text-gray-200 text-xl font-normal mb-8 text-left">
              At SUPCON, we transform the process industry with AI-driven
              automation, empowering businesses in chemicals, energy, and new
              materials.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-row gap-4">
              <CTAButton 
                text="Request a demo" 
                href="/request-demo" 
                variant="filled" 
                showArrow={false} 
                className="block" 
              />
              <CTAButton 
                text="Learn more" 
                href="/learn-more" 
                variant="transparent" 
                showArrow={true} 
                className="block" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
