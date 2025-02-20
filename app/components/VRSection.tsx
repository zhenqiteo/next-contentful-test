import { FC } from "react";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";

interface VRSectionProps {
  heading?: string;
  linkText?: string;
  linkUrl?: string;
  images?: {
    left: {
      src: string;
      alt: string;
    };
    right: {
      src: string;
      alt: string;
    };
  };
}

const VRSection: FC<VRSectionProps> = ({
  heading = "Wish to know us more?",
  linkText = "VISIT OUR ONLINE SHOW ROOM",
  linkUrl = "https://www.720yun.com/t/eevkcbf7s2w?scene_id=68516194",
  images = {
    left: {
      src: "/api/placeholder/600/450",
      alt: "VR Experience Left",
    },
    right: {
      src: "/api/placeholder/600/450",
      alt: "VR Experience Right",
    },
  },
}) => {
  return (
    <section className="relative w-full min-h-screen bg-white py-24">
      {/* Background Globe Image */}
      <div className="absolute bottom-0 left-0 w-full h-4/5 opacity-20 pointer-events-none">
        <img
          src="/api/placeholder/1200/800"
          alt="Globe background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Left Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images.left.src}
              alt={images.left.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images.right.src}
              alt={images.right.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-900 mb-12">
            {heading}
          </h2>

          <Link
            href={linkUrl}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium group"
          >
            {linkText}
            <BsBoxArrowInUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VRSection;
