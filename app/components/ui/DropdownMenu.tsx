"use client";

import React from "react";
import Link from "next/link";

interface DropdownItemType {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  items: DropdownItemType[];
  isOpen: boolean;
}

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => {
  return (
    <div
      className={`
        absolute top-[calc(100%-0.1rem)] left-1/2 -translate-x-1/2 w-80
        bg-white/10 backdrop-blur-md rounded-lg 
        shadow-lg transition-all duration-100
        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }
      `}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-black/80" />
      <div className="relative max-h-[calc(100vh-100px)] overflow-y-auto rounded-lg">
        <div className="p-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block p-3 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <div className="text-sm font-medium text-white">{item.label}</div>
              {item.description && (
                <div className="text-xs text-white/70 mt-1">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
