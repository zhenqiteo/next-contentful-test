"use client";

import React from "react";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact-us" className="max-lg:hidden" aria-label="Contact Us">
      <button className="group cursor-pointer border-opacity-0 bg-transparent transition-all duration-500 hover:border-opacity-100 text-light font-medium max-w-fit rounded-full border-white/50 hover:border-white hover:text-white border-[2px] p-[2px]">
        <div className="relative transition-all duration-500 overflow-hidden !leading-[1.1] flex items-center max-w-fit rounded-full bg-transparent gap-2 h-7 md:h-8 px-5 text-xs md:text-sm">
          Contact Us
          <div className="absolute rotate-[30deg] scale-y-150 bg-light/20 transition-all duration-700 -left-16 top-1/2 -translate-y-1/2 h-[200%] w-12 group-hover:left-[calc(100%+1rem)] group-active::-left-16" />
        </div>
      </button>
    </Link>
  );
};

export default ContactButton;
