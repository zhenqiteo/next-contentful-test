"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

interface Office {
  id: number;
  country: string;
  region: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

interface Region {
  name: string;
  count: number;
  offices: Office[];
}

const officeData: Office[] = [
  {
    id: 1,
    country: "China, HQ",
    region: "Asia-Pacific",
    image: "/images/china-office.jpg",
    address: "No.309 Liuhe Road, Binjiang District, Hangzhou, China, 310053",
    phone: "+86 400-887-6000",
    email: "overseas@supcon.com",
  },
  {
    id: 2,
    country: "Singapore, IHQ",
    region: "Asia-Pacific",
    image: "/images/singapore-office.jpg",
    address:
      "1 Fusionopolis Link 03-03 & 03-04 Nexus @ One-North Singapore 138542",
    phone: "+65 6123-4567",
    email: "singapore@supcon.com",
  },
  {
    id: 3,
    country: "Bangladesh",
    region: "Asia-Pacific",
    image: "/images/bangladesh-office.jpg",
    address: "123 Main Street, Dhaka, Bangladesh",
    phone: "+880 123-456-7890",
    email: "bangladesh@supcon.com",
  },
  {
    id: 4,
    country: "India",
    region: "Asia-Pacific",
    image: "/images/india-office.jpg",
    address: "456 Tech Park, Bangalore, India",
    phone: "+91 987-654-3210",
    email: "india@supcon.com",
  },
  {
    id: 5,
    country: "Indonesia",
    region: "Asia-Pacific",
    image: "/images/indonesia-office.jpg",
    address: "789 Business Center, Jakarta, Indonesia",
    phone: "+62 123-456-7890",
    email: "indonesia@supcon.com",
  },
  {
    id: 6,
    country: "Japan",
    region: "Asia-Pacific",
    image: "/images/japan-office.jpg",
    address: "101 Tech Center, Tokyo, Japan",
    phone: "+81 123-456-7890",
    email: "japan@supcon.com",
  },
  {
    id: 7,
    country: "Malaysia",
    region: "Asia-Pacific",
    image: "/images/malaysia-office.jpg",
    address: "202 Business Hub, Kuala Lumpur, Malaysia",
    phone: "+60 123-456-7890",
    email: "malaysia@supcon.com",
  },
  {
    id: 8,
    country: "Thailand",
    region: "Asia-Pacific",
    image: "/images/thailand-office.jpg",
    address: "303 Innovation Center, Bangkok, Thailand",
    phone: "+66 123-456-7890",
    email: "thailand@supcon.com",
  },
  {
    id: 9,
    country: "Saudi Arabia",
    region: "Middle East",
    image: "/images/saudi-office.jpg",
    address: "King Fahd Road, Riyadh, Saudi Arabia",
    phone: "+966 123-456-7890",
    email: "saudi@supcon.com",
  },
  {
    id: 10,
    country: "UAE",
    region: "Middle East",
    image: "/images/uae-office.jpg",
    address: "Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 123-456-7890",
    email: "uae@supcon.com",
  },
  {
    id: 11,
    country: "Egypt",
    region: "Africa",
    image: "/images/egypt-office.jpg",
    address: "Cairo Business District, Egypt",
    phone: "+20 123-456-7890",
    email: "egypt@supcon.com",
  },
  {
    id: 12,
    country: "Germany",
    region: "Europe",
    image: "/images/germany-office.jpg",
    address: "Technology Park, Berlin, Germany",
    phone: "+49 123-456-7890",
    email: "germany@supcon.com",
  },
];

// Group offices by region
const getRegions = (): Region[] => {
  const regionMap: Record<string, Office[]> = {};
  officeData.forEach((office) => {
    if (!regionMap[office.region]) {
      regionMap[office.region] = [];
    }
    regionMap[office.region].push(office);
  });
  return Object.entries(regionMap).map(([name, offices]) => ({
    name,
    count: offices.length,
    offices,
  }));
};

const RegionDropdown: React.FC = () => {
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
        <h2 className="text-xl font-medium">Offices</h2>
        <div className="text-sm text-gray-500 mt-1">
          {officeData.length} Locations
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
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </button>

            {openRegions.includes(region.name) && (
              <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {region.offices.map((office) => (
                  <div key={office.id} className="mb-6 border-2 bg-slate-50">
                    <div className="relative h-64 w-full mb-3">
                      <Image
                        src={office.image}
                        alt={`${office.country} office`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-blue-900 mb-2">
                      {office.country}
                    </h3>
                    <div className="text-sm space-y-2">
                      <div className="mt-3">
                        {/* <div className="font-thin text-sm text-blue-900">
                          Contact
                        </div> */}
                        <p className=" text-sm mt-1">
                          <span className="font-medium text-blue-900">A:</span>{" "}
                          {office.address}
                        </p>
                        <p>
                          <span className="font-medium text-blue-900">T:</span>{" "}
                          {office.phone}
                        </p>
                        <p>
                          <span className="font-medium text-blue-900">E:</span>{" "}
                          {office.email}
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

export default RegionDropdown;
