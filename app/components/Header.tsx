"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./ui/NavItem";
import ContactButton from "./ui/ContactButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 50;
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with their dropdown contents
  const navItems = [
    {
      text: "Solutions",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Universal Control System",
          href: "/solutions/ucs",
          description: "NYX THE ALL AMAZING UCS",
        },
        {
          label: "TPT",
          href: "/solutions/tpt",
          description:
            "Tailored solutions for predictive analytics and maintenance",
        },
        {
          label: "Custom Development",
          href: "/solutions/custom",
          description: "Bespoke solutions for unique needs",
        },
      ],
    },
    {
      text: "Industries",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Healthcare",
          href: "/industries/healthcare",
          description: "Solutions for healthcare providers",
        },
        {
          label: "Finance",
          href: "/industries/finance",
          description: "Financial services solutions",
        },
        {
          label: "Education",
          href: "/industries/education",
          description: "Educational technology solutions",
        },
      ],
    },
    {
      text: "Resources",
      href: "/Resources",
    },
    {
      text: "Newsroom",
      href: "/newsroom",
    },
    {
      text: "Career",
      href: "/Career",
    },
    {
      text: "About Us",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Our Story",
          href: "/about/story",
          description: "Learn about our journey",
        },
        {
          label: "Team",
          href: "/about/team",
          description: "Meet our leadership team",
        },
        {
          label: "Contact",
          href: "/about/contact",
          description: "Get in touch with us",
        },
      ],
    },
  ];

  const headerStyle = {
    background: scrolled
      ? "rgb(3, 44, 166, 0.7)"
      : "none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",
    transition: "all 0.3s ease-in-out",
  };

  const navStyle = {
    opacity: 1,
    transform: "none",
  };

  return (
    <header className="fixed top-0 w-full z-[1000] py-5" style={headerStyle}>
      <nav className="relative w-full flex max-w-full" style={navStyle}>
        <div className="max-w-screen-2xl mx-auto px-5 flex-1 flex items-center justify-between rounded-xl text-light">
          <Link href="/" aria-label="home link">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={200}
              className="h-5 w-auto"
              priority
              style={{ color: "transparent" }}
            />
          </Link>

          <div className="max-lg:hidden">
            <div className="flex items-center gap-0 font-medium text-xs xl:text-sm">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  text={item.text}
                  href={item.href}
                  hasDropdown={item.hasDropdown}
                  dropdownItems={item.dropdownItems}
                  isScrolled={scrolled}
                />
              ))}
            </div>
          </div>

          <ContactButton />

          <button
            className="lg:hidden transition-all duration-300 hover:bg-white/10 h-10 w-10 grid place-content-center rounded-lg text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
