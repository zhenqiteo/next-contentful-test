import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RegionDropdown from "@/components/RegionDropdown";
import LocationSection from "./LocationSection";

export const metadata: Metadata = {
  title: "About SUPCON | Industrial Automation Solutions",
  description:
    "Learn about SUPCON's journey in revolutionizing industrial automation and our commitment to driving customer success through innovative technologies.",
};

// JSON Data for Offices
const officeData = [
  {
    id: 1,
    country: "China, HQ",
    image: "/images/china-office.jpg",
    address: "No.309 Liuhe Road, Binjiang District, Hangzhou, China, 310053",
    phone: "+86 400-887-6000",
    email: "overseas@supcon.com",
  },
  {
    id: 2,
    country: "Singapore, IHQ",
    image: "/images/singapore-office.jpg",
    address:
      "1 Fusionopolis Link 03-03 & 03-04 Nexus @ One- North Singapore 138542",
    phone: "+86 400-887-6000",
    email: "singapore@supcon.com",
  },
  {
    id: 3,
    country: "Saudi Arabia",
    image: "/images/saudi-office.jpg",
    address:
      "1 Fusionopolis Link 03-03 & 03-04 Nexus @ One- North Singapore 138542",
    phone: "+86 400-887-6000",
    email: "singapore@supcon.com",
  },
  {
    id: 4,
    country: "Kazakhstan",
    image: "/images/kazakhstan-office.jpg",
    address: "Almaty, Medeu District, Dostyk Ave., 192/2, Green Tower",
    phone: "+7 776-170-8555",
    email: "info.kz@supcon.com",
  },
  // Add more offices as needed
];

// Previous components remain the same (Hero, CoreValues, GlobalPresence)
// ...

// Location Components
const LocationHeader: React.FC = () => {
  return (
    <section className="relative min-h-[550px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/supcon_dji_7.jpg" // Make sure to add this image to your public folder
          alt="SUPCON Global Presence"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Our Location
          </h2>
          <p className="text-gray-100 max-w-3xl">
            SUPCON has established a global network of offices and partners to
            provide local support and expertise to our customers worldwide. Our
            presence spans across Asia-Pacific, Middle East, Africa, and Europe,
            enabling us to deliver timely solutions and services regardless of
            location.
          </p>
        </div>
      </div>
    </section>
  );
};

const OfficeCategories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-8 mb-16">
          <Link href="#offices">
            <div className="cursor-pointer">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 hover:border-b-2 hover:border-gray-900 pb-2">
                Corporate Offices
              </h3>
            </div>
          </Link>
          <Link href="#5s-stores">
            <div className="cursor-pointer">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 hover:border-b-2 hover:border-gray-900 pb-2">
                5S Retail Stores
              </h3>
            </div>
          </Link>
        </div>

        <p className="text-gray-700 mb-16">
          Our 5S Retail Stores serve as innovation hubs and customer experience
          centers, showcasing SUPCON's latest technologies and solutions. These
          locations offer hands-on demonstrations, training sessions, and
          technical support to help our customers maximize the value of their
          SUPCON systems and solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <RegionDropdown />
          </div>

          <div className="">
            {/* This area is dynamically populated by the RegionDropdown component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f2f2f2]">
      {/* <Hero />
      <CoreValues />
      <GlobalPresence /> */}
      <LocationHeader />
      <LocationSection />
    </main>
  );
}
