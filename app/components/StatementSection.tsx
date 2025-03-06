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
    <section className="py-20">
        {/* Grid Container */}
        <div
          className={`
          grid
          grid-cols-1 gap-4                  /* Mobile: single column */
          md:grid-cols-6 md:grid-rows-[1fr_1fr_2fr] /* Desktop: 4 columns */
        `}
        >
          {/* Top Image: spans 8 columns */}
          <div className="w-full md:col-start-1 md:col-span-4 relative aspect-[1015/417]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 75vw"
              priority
            />
          </div>

          {/* Tagline: spans full width */}
          <div className="md:col-span-full h-full flex items-center justify-center px-8">
            <h2 className="text-center text-2xl md:text-6xl font-medium">
              <span className="text-[var(--color-SIB-blue)]">Elevate</span>{" "}
              Industrial Intelligence,
              <br />
              Drive Customer Success
            </h2>
          </div>

          {/* Right Image - takes up last column */}
          <div className="w-full h-full md:col-start-5 md:col-span-2 md:row-start-3 relative aspect-square">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={440}
              height={440}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="w-full h-full md:col-start-1 md:col-span-3 md:row-start-3 md:translate-y-1/3 relative aspect-[670/447]">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={670}
              height={447}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>
        </div>
    </section>
  );
};

export default StatementSection;
