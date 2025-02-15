"use client";

import React from "react";
import Link from "next/link";

interface NavItemProps {
  text: string;
  href?: string;
  hasDropdown?: boolean;
}

const NavItem = ({ text, href, hasDropdown }: NavItemProps) => {
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
        <div className="transition-transform duration-300 group-hover:rotate-180">
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

  const commonClasses =
    "group flex items-center gap-2 text-center transition-all duration-300 py-2 px-3 xl:px-4 rounded-lg select-none leading-[1.1]";

  return href ? (
    <Link href={href} className={commonClasses}>
      {content}
    </Link>
  ) : (
    <div className={commonClasses}>{content}</div>
  );
};

export default NavItem;
