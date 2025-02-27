"use client";
import { createClient } from "contentful";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <main>
      {/* Hero Video Banner - Uncomment when ready
      <section className="relative w-full h-[80vh]">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      */}

      {/* Trusted Companies Logo Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center text-3xl font-semibold mb-8">
            Trusted By 250+ Leading Companies
          </h2>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center"
              >
                <img
                  src={`/placeholder-logo-${index}.png`}
                  alt={`Company ${index}`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div
                key={`logo-duplicate-${index}`}
                className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center"
              >
                <img
                  src={`/placeholder-logo-${index}.png`}
                  alt={`Company ${index}`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider mb-2">Solutions</h2>
          <h3 className="text-4xl font-semibold mb-6">
            Building Smart Industries
            <br />
            With Solutions
          </h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Next Generation Automation Card */}
          <div className="border p-8 hover:shadow-lg transition-shadow group cursor-pointer">
            <h4 className="text-2xl font-bold mb-8">
              NEXT GENERATION AUTOMATION
            </h4>
            <div className="mt-auto">
              <div className="transform group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          </div>

          {/* Automation & Instrument Card */}
          <div className="border p-8 hover:shadow-lg transition-shadow group cursor-pointer">
            <h4 className="text-2xl font-bold mb-8">AUTOMATION & INSTRUMENT</h4>
            <div className="mt-auto">
              <div className="transform group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          </div>

          {/* Digital Industry Card */}
          <div className="border p-8 hover:shadow-lg transition-shadow group cursor-pointer">
            <h4 className="text-2xl font-bold mb-8">DIGITAL INDUSTRY</h4>
            <div className="mt-auto">
              <div className="transform group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider mb-2">Industries</h2>
          <h3 className="text-4xl font-semibold mb-6">
            Empowering Safety,
            <br />
            Driving Innovation
          </h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>

        {/* Industries Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar">
            {[
              {
                title: "OIL & GAS",
                image: "/oil-gas-illustration.png",
                stats: "30+",
                description:
                  "years of experience in the oil and gas industry, we deliver innovative and reliable solutions.",
              },
              {
                title: "PETROL CHEMICAL",
                image: "/petrol-chemical-illustration.png",
                stats: "25+",
                description:
                  "years serving the petrochemical industry with cutting-edge solutions.",
              },
              {
                title: "CHLOR ALKALI",
                image: "/chlor-alkali-illustration.png",
                stats: "20+",
                description:
                  "years of expertise in chlor-alkali process optimization.",
              },
              {
                title: "FOOD",
                image: "/food-illustration.png",
                stats: "15+",
                description:
                  "years ensuring food safety and process efficiency.",
              },
              {
                title: "POWER",
                image: "/power-illustration.png",
                stats: "28+",
                description: "years powering sustainable energy solutions.",
              },
              {
                title: "PHARMACEUTICAL",
                image: "/pharma-illustration.png",
                stats: "22+",
                description:
                  "years of precision in pharmaceutical manufacturing.",
              },
              {
                title: "WATER TREATMENT",
                image: "/water-illustration.png",
                stats: "18+",
                description:
                  "years of water treatment and management solutions.",
              },
              {
                title: "MINING",
                image: "/mining-illustration.png",
                stats: "25+",
                description: "years of mining automation and safety solutions.",
              },
              {
                title: "CEMENT",
                image: "/cement-illustration.png",
                stats: "20+",
                description: "years optimizing cement production processes.",
              },
              {
                title: "STEEL",
                image: "/steel-illustration.png",
                stats: "24+",
                description:
                  "years of excellence in steel manufacturing solutions.",
              },
            ].map((industry, index) => (
              <div
                key={index}
                id={`industry-${index}`}
                ref={
                  index === activeIndustry
                    ? (el) => {
                        el?.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                          inline: "center",
                        });
                      }
                    : null
                }
                className={`flex-shrink-0 w-[400px] h-[600px] border p-8 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-all ${
                  activeIndustry === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <h4 className="text-3xl font-bold text-gray-300 mb-8">
                  {industry.title}
                </h4>
                <div className="mb-8 h-[300px]">
                  <img
                    src={industry.image}
                    alt={`${industry.title} Industry`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-bold mb-2">
                    {industry.stats}
                  </div>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Navigation */}
          <div className="hidden md:flex gap-4 justify-center mt-8 flex-wrap">
            {[
              "Oil & Gas",
              "Petrol Chemical",
              "Chlor Alkali",
              "Food",
              "Power",
              "Pharmaceutical",
              "Water Treatment",
              "Mining",
              "Cement",
              "Steel",
            ].map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`text-sm px-4 py-2 ${
                  index === activeIndustry
                    ? "text-black font-medium border-t-2 border-blue-500"
                    : "text-gray-400 border-t-2 border-transparent"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
