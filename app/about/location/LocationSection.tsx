"use client";

import React from "react";
import ToggleTabs from "@/components/ui/ToggleTabs";
import RegionDropdown from "@/components/RegionDropdown";
import StoresDropdown from "@/components/StoresDropdown";

const LocationSection: React.FC = () => {
  // Define tab options with custom labels and components
  const tabOptions = [
    {
      id: "corporate",
      label: "Corporate Offices",
      component: <RegionDropdown />,
    },
    {
      id: "retail",
      label: "5S Retail Stores",
      component: <StoresDropdown />,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ToggleTabs options={tabOptions} defaultActiveTab="corporate" />
      </div>
    </section>
  );
};

export default LocationSection;
