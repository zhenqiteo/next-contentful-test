import { FC } from "react";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";

interface VRSectionProps {
  heading?: string;
  linkText?: string;
  linkUrl?: string;
}

const VRSection: FC<VRSectionProps> = ({
  heading = "Wish to know us more?",
  linkText = "VISIT OUR ONLINE SHOW ROOM",
  linkUrl = "https://www.720yun.com/t/eevkcbf7s2w?scene_id=68516194",
}) => {
  return (
    <section className="relative w-full min-h-screen bg-white py-24">
      {/* Background Globe Image */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img
          src="/images/supcon_dji_3.jpg"
          alt="SUPCON Building in Hangzhou, China"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-screen">
        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-900 mb-12">
            {heading}
          </h2>

          <Link
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium group"
          >
            {linkText}
            <BsBoxArrowInUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VRSection;
