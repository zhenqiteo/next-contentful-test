"use client";

import React, { useState } from "react";

interface TabOption {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface ToggleTabsProps {
  options: TabOption[];
  defaultActiveTab?: string;
}

const ToggleTabs: React.FC<ToggleTabsProps> = ({
  options,
  defaultActiveTab,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || (options.length > 0 ? options[0].id : "")
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-x-8 mb-16">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveTab(option.id)}
            className="text-left focus:outline-none"
          >
            <div className="cursor-pointer">
              <h3
                className={`text-2xl font-medium mb-4 pb-2 ${
                  activeTab === option.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-slate-300 hover:border-b-2 hover:border-gray-900 hover:text-slate-500"
                }`}
              >
                {option.label}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {options.find((option) => option.id === activeTab)?.component}
    </>
  );
};

export default ToggleTabs;
