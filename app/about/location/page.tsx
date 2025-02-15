import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About SUPCON | Industrial Automation Solutions",
  description:
    "Learn about SUPCON's journey in revolutionizing industrial automation and our commitment to driving customer success through innovative technologies.",
};

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
          <div>
            <h3 className="text-2xl font-medium text-gray-400 mb-4">Offices</h3>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
              5S Stores
            </h3>
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
            {/* China HQ Office */}
            <div className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/china-office.jpg"
                  alt="SUPCON China HQ Office"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-2xl text-blue-900 font-semibold">
                China, HQ
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-blue-900">Contact</h5>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">A</span> No.309 Liuhe Road,
                    Binjiang District, Hangzhou, China, 310053
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">T</span> +86 400-887-6000
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">E</span> overseas@supcon.com
                  </p>
                </div>
              </div>
            </div>

            {/* Singapore IHQ Office */}
            <div className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/singapore-office.jpg"
                  alt="SUPCON Singapore IHQ Office"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-2xl text-blue-900 font-semibold">
                Singapore, IHQ
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-blue-900">Contact</h5>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">A</span> 1 Fusionopolis Link
                    03-03 & 03-04 Nexus @ One- North Singapore 138542
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">T</span> +86 400-887-6000
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">E</span> singapore@supcon.com
                  </p>
                </div>
              </div>
            </div>
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
