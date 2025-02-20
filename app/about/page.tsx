import { Metadata } from "next";
import Image from "next/image";
import VRSection from "@/components/VRSection";

// The metadata helps with SEO and social sharing
export const metadata: Metadata = {
  title: "About SUPCON | Industrial Automation Solutions",
  description:
    "Learn about SUPCON's journey in revolutionizing industrial automation and our commitment to driving customer success through innovative technologies.",
};

// We're creating a dedicated Hero component within the same file for simplicity
const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-screen min-h-[600px] bg-blue-600 overflow-hidden">
        {/* Gradient overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-600" />

        <div className="relative container mx-auto px-4 pt-24 lg:pt-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Industry Intelligence
              <br />
              Drive Customer Success
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              We&apos;re committed to the continuous improvement of the
              world&apos;s industry and human life. We have innovated
              technologies and solutions in industrial automation and
              digitalization, reshaping the way people work and live.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                <Image
                  src="/images/industrial-stock-1.jpg"
                  alt="Industrial workers collaborating"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Trusted Partner for
                  <br />
                  Intelligent Manufacturing
                </h2>

                <p className="text-gray-700">
                  Established 1999, SUPCON Technology Co., Ltd. (SUPCON,
                  688777.SH, SUPCON.SW) has been a leading global provider of
                  overall solutions for intelligent manufacturing. Leveraging
                  the integration of advanced products and extensive industry
                  know-how, the company is committed to promoting the
                  breakthrough and innovation of AI technology. With robust R&D
                  and cutting-edge AI, we serve more than 30,000 customers
                  across 50 countries, empowering businesses across key
                  industries like Oil & Gas, Petrochemical, Power, Chemical and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Core Values Section Component
const CoreValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation Excellence",
              description:
                "Pushing boundaries in industrial automation through continuous research and development.",
            },
            {
              title: "Customer Success",
              description:
                "Dedicated to delivering solutions that drive real business value and growth for our clients.",
            },
            {
              title: "Global Impact",
              description:
                "Committed to creating sustainable solutions that benefit industry and society worldwide.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Global Presence Section
const GlobalPresence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
            <p className="text-gray-700 mb-6">
              With operations spanning across multiple continents, SUPCON
              provides localized support while maintaining global standards of
              excellence. Our international network enables us to serve clients
              worldwide with innovative solutions tailored to regional needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-3xl font-bold text-blue-600 mb-2">30+</p>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-3xl font-bold text-blue-600 mb-2">1000+</p>
                <p className="text-gray-600">Global Employees</p>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[400px]">
            <Image
              src="/images/join-us-planet.webp"
              alt="SUPCON's global presence"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoreValues />
      <GlobalPresence />
      <VRSection />
    </main>
  );
}
