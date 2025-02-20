"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md"; // Material Design chevron
import { BsTelephone } from "react-icons/bs"; // Bootstrap phone
import { IoLocationOutline } from "react-icons/io5"; // Ionicons location pin

const LocationDropdown = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = [
    {
      name: "Asia Pacific",
      locations: [
        {
          country: "Bangladesh",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+88 000 000 0000",
            address: "Sample address",
          },
        },
        {
          country: "India",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+91 000 000 0000",
            address: "Sample address, India",
          },
        },
        {
          country: "Indonesia",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+62 000 000 0000",
            address: "Sample address",
          },
        },
        {
          country: "Japan",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+81 000 000 0000",
            address: "Sample address, Japan",
          },
        },
        {
          country: "Malaysia",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+60 000 000 0000",
            address: "Sample address",
          },
        },
        {
          country: "Thailand",
          image: "/api/placeholder/400/200",
          contact: {
            phone: "+66 000 000 0000",
            address: "Sample address",
          },
        },
      ],
    },
    {
      name: "Middle East",
      count: 4,
      locations: [],
    },
    {
      name: "Africa",
      count: 1,
      locations: [],
    },
    {
      name: "Europe",
      count: 1,
      locations: [],
    },
    {
      name: "Americas",
      count: 1,
      locations: [],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {regions.map((region) => (
        <div key={region.name} className="mb-2">
          <button
            onClick={() =>
              setActiveRegion(activeRegion === region.name ? null : region.name)
            }
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 border rounded-lg text-left"
          >
            <span className="font-medium">
              {region.name} {region.count && `(${region.count})`}
            </span>
            <MdKeyboardArrowDown
              className={`w-5 h-5 transition-transform ${
                activeRegion === region.name ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeRegion === region.name && region.locations.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mt-2">
              {region.locations.map((location) => (
                <div
                  key={location.country}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={location.image}
                    alt={`${location.country} office`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-4">
                      {location.country}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <BsTelephone className="w-4 h-4" />
                        <span>{location.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationOutline className="w-4 h-4" />
                        <span>{location.contact.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LocationDropdown;
