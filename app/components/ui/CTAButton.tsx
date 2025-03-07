"use client";

import React from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "filled" | "transparent";
  showArrow?: boolean;
  className?: string;
}

const CTAButton = ({ 
  text, 
  href, 
  variant = "filled", 
  showArrow = true,
  className = "" 
}: CTAButtonProps) => {
  // Base styles
  const baseStyles = "group flex items-center gap-2 h-11 rounded-full px-6 transition-all duration-200 font-sans text-base font-normal";
  
  // Variant-specific styles
  const variantStyles = {
    filled: "bg-[var(--color-SIB-blue)] text-white hover:bg-[var(--color-SIB-blue-hover)] hover:text-slate-100",
    transparent: "bg-transparent border border-white text-white hover:bg-[var(--color-SIB-blue-hover)] hover:text-slate-100 hover:border-[var(--color-SIB-blue-hover)]"
  };

  return (
    <Link
      href={href}
      className={className}
      aria-label={text}
    >
      <button className={`${baseStyles} ${variantStyles[variant]}`}>
        <span>{text}</span>
        {showArrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <circle cx="11.5" cy="11" r="11" fill={variant === "filled" ? "white" : "currentColor"} />
            <path
              d="M13.341 11.4444L10.2681 15L9.5 14.1113L12.1888 11L9.5 7.88875L10.2681 7L13.341 10.5556C13.4428 10.6735 13.5 10.8333 13.5 11C13.5 11.1667 13.4428 11.3265 13.341 11.4444Z"
              fill={variant === "filled" ? "#0057E3" : "var(--color-SIB-blue-hover)"}
            />
          </svg>
        )}
      </button>
    </Link>
  );
};

export default CTAButton;
