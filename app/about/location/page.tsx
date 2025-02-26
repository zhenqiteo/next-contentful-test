import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

// New Location Components
const LocationHeader = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
        <p className="text-gray-700 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
      </div>
    </section>
  );
};

const OfficeCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-32 gap-y-8 mb-16">
          <div className="grid grid-cols-2">
            <Link href="#offices">
              <div className="cursor-pointer">
                <h3 className="text-2xl font-medium text-gray-400 mb-4 hover:border-b-2 hover:border-gray-900 pb-2">
                  Corporate Offices
                </h3>
              </div>
            </Link>
            <Link href="#5s-stores">
              <div className="cursor-pointer">
                <h3 className="text-2xl font-medium text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  5S Retail Stores
                </h3>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-gray-700 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        <div>
          <h3 className="text-3xl font-medium mb-8">Asia-Pacific (8)</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeData.map((office) => (
              <div key={office.id} className="space-y-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={office.image}
                    alt={`SUPCON ${office.country} Office`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-2xl text-blue-900 font-semibold">
                  {office.country}
                </h4>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <div className="space-y-2">
                  <h5 className="font-medium text-blue-900">Contact</h5>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-medium text-blue-900">A</span>{" "}
                      {office.address}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-blue-900">T</span>{" "}
                      {office.phone}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-blue-900">E</span>{" "}
                      {office.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* <Hero />
      <CoreValues />
      <GlobalPresence /> */}
      <LocationHeader />
      <OfficeCategories />
    </main>
  );
}
