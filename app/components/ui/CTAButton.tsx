"use client";

import React from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
}

const CTAButton = ({ text, href, className = "" }: CTAButtonProps) => {
  return (
    <Link
      href={href}
      className={`max-lg:hidden ${className}`}
      aria-label={text}
    >
      <button className="group flex items-center gap-2 h-11 bg-[var(--color-SIB-blue)] text-white rounded-full px-6 hover:bg-[var(--color-SIB-blue-hover)] hover:text-slate-100 hover:border-[1px] transition-all duration-200">
        <span className="font-sans text-base font-normal">{text}</span>
        {/* <MdArrowForwardIos size={22} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
        >
          <circle cx="11.5" cy="11" r="11" fill="white" />
          <path
            d="M13.341 11.4444L10.2681 15L9.5 14.1113L12.1888 11L9.5 7.88875L10.2681 7L13.341 10.5556C13.4428 10.6735 13.5 10.8333 13.5 11C13.5 11.1667 13.4428 11.3265 13.341 11.4444Z"
            fill="#0057E3"
          />
        </svg>
      </button>
    </Link>
  );
};

export default CTAButton;
