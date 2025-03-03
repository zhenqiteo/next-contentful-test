import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./ui/NavItem";
import ContactButton from "./ui/ContactButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { text: "Solutions", hasDropdown: true },
    { text: "Industries", hasDropdown: true },
    { text: "Resources", href: "/resources" },
    { text: "Newsroom", href: "/newsroom" },
    { text: "Career", href: "/career" },
    { text: "About Us", hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] py-5 bg-transparent">
      <nav className="relative w-full flex max-w-full">
        <div className="max-w-screen-2xl mx-auto px-5 flex-1 flex items-center justify-between rounded-xl text-light">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={200}
              className="h-5 w-auto"
              priority
            />
          </Link>

          <div className="max-lg:hidden">
            <div className="flex items-center gap-0 font-normal text-sm xl:text-xs">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  text={item.text}
                  href={item.href}
                  hasDropdown={item.hasDropdown}
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
