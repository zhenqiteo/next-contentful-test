"use client";

import CTAButton from "./ui/CTAButton";

const CTASection = () => {
  return (
    <section className="relative h-screen w-full max-h-[70vh] md:max-h-[40vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/compressed_video.mp4" type="video/mp4" />
          {/* Add WebM version for better browser support */}
          <source src="/videos/compressed_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-normal mb-6 leading-[125%]">
          Kickstart Your Digitalization Journey by<br />
          Harnessing the Power of AI to<br />
          Optimize Your Operations
        </h2>
        <CTAButton text="Contact Us" href="/contact" className="text-white" />
      </div>
    </section>
  );
};

export default CTASection;