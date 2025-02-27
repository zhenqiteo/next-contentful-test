"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./ui/NavItem";
import ContactButton from "./ui/ContactButton";
import { motion, AnimatePresence } from "framer-motion";
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
          label: "Next Generation Automation",
          href: "/solutions/next-generation-automation",
          description: "NYX OUR ALL AMAZING UCS",
        },
        {
          label: "Automation & Instrumentation",
          href: "/solutions/automation-and-instrumentation",
          description: "Tailored Solutions for Automation and Instrumentation",
        },
        {
          label: "Digital Industry",
          href: "/solutions/digital-industry",
          description: "Running Digital Transformation in the Process Industry",
        },
      ],
    },
    {
      text: "Industries",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Chemical",
          href: "/industries/chemical",
          description: "For chemical manufacturing",
        },
        {
          label: "Life Sciences",
          href: "/industries/life-sciences",
          description: "For pharmaceutical and biotech industries",
        },
        {
          label: "Education",
          href: "/industries/education",
          description: "Educational technology solutions",
        },
        {
          label: "Oil and Gas",
          href: "/industries/Oil and Gas",
          description: "OnG solutions",
        },
      ],
    },
    {
      text: "Resources",
      href: "/resources",
    },
    {
      text: "Newsroom",
      href: "/newsroom",
    },
    {
      text: "Career",
      href: "https://www.linkedin.com/company/%E4%B8%AD%E6%8E%A7%E6%8A%80%E6%9C%AF/jobs/",
    },
    {
      text: "About Us",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Who We Are",
          href: "/about",
          description: "Learn about our journey",
        },
        {
          label: "Team",
          href: "/about/team",
          description: "Meet our leadership team",
        },
        {
          label: "Our Offices",
          href: "/about/location",
          description: "Our Global Offices",
        },
        {
          label: "Sustainability",
          href: "/about/sustainability",
          description: "Our commitment to sustainability",
        },
      ],
    },
  ];

  // const headerStyle = {
  //   background: scrolled
  //     ? "rgb(0,0,0, 0.6)"
  //     : "none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",
  //   transition: "all 0.3s ease-in-out",
  // };

  const navStyle = {
    opacity: 1,
    transform: "none",
    color: scrolled ? "white" : "inherit", // Add this line to change color when scrolled
  };

  return (
    <header className="fixed top-0 w-full z-[1000] py-5">
      <nav className="relative w-full flex max-w-full" style={navStyle}>
        <div className="max-w-screen-2xl mx-auto px-5 flex-1 flex items-center justify-between rounded-xl text-light">
          <Link href="/" aria-label="home link">
            <AnimatePresence mode="wait">
              {scrolled ? (
                <motion.div
                  key="white-logo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/LOGO.svg"
                    alt="Logo blue and white"
                    width={300}
                    height={200}
                    className="h-5 w-auto"
                    priority
                    style={{ color: "transparent" }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="blue-logo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/LOGO_blue.svg"
                    alt="Logo White"
                    width={300}
                    height={200}
                    className="h-5 w-auto"
                    priority
                    style={{ color: "transparent" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
