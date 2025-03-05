import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  dimensions: {
    mobile: { width: string; height: string };
    desktop: { width: string; height: string };
  };
  gridArea: string; // Instead of position, we'll use grid areas
}

const StatementSection = () => {
  const images: ImageData[] = [
    {
      src: "/images/homepage-1.png",
      alt: "3D cross structure",
      dimensions: {
        mobile: { width: "w-full", height: "h-[300px]" },
        desktop: { width: "w-[1015px]", height: "h-[417px]" },
      },
      gridArea: "top",
    },
    {
      src: "/images/homepage-2.png",
      alt: "Industrial Corridor",
      dimensions: {
        mobile: { width: "w-full", height: "h-[300px]" },
        desktop: { width: "w-[440px]", height: "h-[440px]" },
      },
      gridArea: "right",
    },
    {
      src: "/images/homepage-3.png",
      alt: "Team Discussion",
      dimensions: {
        mobile: { width: "w-full", height: "h-[300px]" },
        desktop: { width: "w-[670px]", height: "h-[447px]" },
      },
      gridArea: "left",
    },
  ];

  return (
    <section className="py-20 min-h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div
          className={`
          grid
          grid-cols-1 gap-8                    /* Mobile: single column */
          md:grid-cols-12 md:grid-rows-[auto_auto_auto] md:gap-12  /* Desktop: 12 columns */
          min-h-screen
        `}
        >
          {/* Top Image: spans 8 columns */}
          <div className="md:col-span-8 md:col-start-2 relative h-[300px] md:h-[417px]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Tagline: spans full width */}
          <div className="md:col-span-full md:row-start-2">
            <h2 className="text-center text-2xl md:text-6xl font-medium">
              <span className="text-[var(--color-SIB-blue)]">Elevate</span>{" "}
              Industrial Intelligence,
              <br />
              Drive Customer Success
            </h2>
          </div>

          {/* Bottom Images */}
          <div className="md:col-span-5 md:col-start-7 md:row-start-3 relative h-[300px] md:h-[440px]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="md:col-span-6 md:col-start-2 md:row-start-[3.5] relative h-[300px] md:h-[447px]">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
