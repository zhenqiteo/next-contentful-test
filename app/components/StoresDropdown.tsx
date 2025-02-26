"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Store {
  id: number;
  name: string;
  region: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

interface Region {
  name: string;
  count: number;
  stores: Store[];
}

const storeData: Store[] = [
  {
    id: 1,
    name: "Beijing 5S Store",
    region: "Asia-Pacific",
    image: "/api/placeholder/400/250",
    address: "123 Technology Park, Beijing, China",
    phone: "+86 100-123-4567",
    email: "beijing-store@supcon.com",
  },
  {
    id: 2,
    name: "Shanghai 5S Store",
    region: "Asia-Pacific",
    image: "/api/placeholder/400/250",
    address: "456 Innovation Hub, Shanghai, China",
    phone: "+86 200-123-4567",
    email: "shanghai-store@supcon.com",
  },
  {
    id: 3,
    name: "Singapore 5S Store",
    region: "Asia-Pacific",
    image: "/api/placeholder/400/250",
    address: "789 Business Park, Singapore",
    phone: "+65 6123-4567",
    email: "singapore-store@supcon.com",
  },
  {
    id: 4,
    name: "Dubai 5S Store",
    region: "Middle East",
    image: "/api/placeholder/400/250",
    address: "321 Tech Center, Dubai, UAE",
    phone: "+971 400-123-4567",
    email: "dubai-store@supcon.com",
  },
  {
    id: 5,
    name: "Frankfurt 5S Store",
    region: "Europe",
    image: "/api/placeholder/400/250",
    address: "654 Innovation District, Frankfurt, Germany",
    phone: "+49 300-123-4567",
    email: "frankfurt-store@supcon.com",
  },
];

// Group stores by region
const getRegions = (): Region[] => {
  const regionMap: Record<string, Store[]> = {};
  storeData.forEach((store) => {
    if (!regionMap[store.region]) {
      regionMap[store.region] = [];
    }
    regionMap[store.region].push(store);
  });
  return Object.entries(regionMap).map(([name, stores]) => ({
    name,
    count: stores.length,
    stores,
  }));
};

const StoresDropdown: React.FC = () => {
  const regions = getRegions();
  const [openRegions, setOpenRegions] = useState<string[]>(["Asia-Pacific"]);

  const toggleRegion = (region: string) => {
    setOpenRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-xl font-medium">5S Stores</h2>
        <div className="text-sm text-gray-500 mt-1">
          {storeData.length} Stores
        </div>
      </div>

      <div className="space-y-4">
        {regions.map((region) => (
          <div key={region.name} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left py-2"
              onClick={() => toggleRegion(region.name)}
            >
              <div className="flex items-baseline">
                <span className="text-lg font-medium">{region.name}</span>
                <span className="text-gray-500 ml-2">({region.count})</span>
              </div>
              <div className="text-gray-400">
                {openRegions.includes(region.name) ? (
                  <span>▲</span>
                ) : (
                  <span>▼</span>
                )}
              </div>
            </button>

            {openRegions.includes(region.name) && (
              <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {region.stores.map((store) => (
                  <div key={store.id} className="mb-6">
                    <div className="relative h-40 w-full mb-3">
                      <Image
                        src={store.image}
                        alt={`${store.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-blue-900 mb-2">
                      {store.name}
                    </h3>
                    <div className="text-sm space-y-2">
                      <div className="mt-3">
                        <div className="font-medium text-blue-900">Contact</div>
                        <p className="mt-1">
                          <span className="font-medium text-blue-900">A</span>{" "}
                          {store.address}
                        </p>
                        <p>
                          <span className="font-medium text-blue-900">T</span>{" "}
                          {store.phone}
                        </p>
                        <p>
                          <span className="font-medium text-blue-900">E</span>{" "}
                          {store.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresDropdown;
