"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface NavItemProps {
  text: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    label: string;
    href: string;
    description?: string;
  }[];
  isScrolled?: boolean;
}

const NavItem = ({
  text,
  href,
  hasDropdown,
  dropdownItems = [],
  isScrolled,
}: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // The content of the nav item, including the sliding text effect
  const content = (
    <span className="inline-flex items-center gap-[0.3em] text-inherit font-[inherit] leading-[1.5] whitespace-nowrap relative group py-2">
      <span className="relative flex overflow-hidden">
        <span className="duration-500 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease group-hover:translate-y-0">
          {text}
        </span>
      </span>
      {hasDropdown && (
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="m112 184 144 144 144-144"
            />
          </svg>
        </div>
      )}
    </span>
  );

  // Common classes for nav items
  const commonClasses =
    "group flex items-center gap-2 text-center transition-all duration-300 py-2 px-3 xl:px-4 rounded-lg select-none leading-[1.1]";

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setIsOpen(true)}
      onMouseLeave={() => hasDropdown && setIsOpen(false)}
    >
      {href ? (
        <Link href={href} className={commonClasses}>
          {content}
        </Link>
      ) : (
        <div className={`${commonClasses} cursor-pointer`}>{content}</div>
      )}

      {/* Dropdown Menu */}
      {hasDropdown && dropdownItems.length > 0 && (
        <div
          className={`
            absolute left-0 min-w-[280px] pt-4
            transition-all duration-300 origin-top-left
            ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="bg-black/80 backdrop-blur-md rounded-xl overflow-hidden">
            <div className="py-2">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="text-sm font-medium text-white">
                    {item.label}
                  </div>
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
      )}
    </div>
  );
};

export default NavItem;
