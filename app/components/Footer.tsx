import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import LinkEffect from "./ui/LinkEffect";
import { FiArrowUpRight } from "react-icons/fi";

const data = [
  {
    title: "About SUPCON",
    links: [
      { name: "Who Are We", href: "#" },
      { name: "Location", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Resources", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Career", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        name: "Next Gen Automation",
        href: "/solutions/next-generation-automation",
      },
      {
        name: "Control & Instrumentation",
        href: "/solutions/automation-and-instrumentation",
      },
      { name: "Digital Solutions", href: "/solutions/digital-industry" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Oil & Gas", href: "#" },
      { name: "Chemical", href: "#" },
      { name: "Power", href: "#" },
      { name: "Building Material", href: "#" },
      { name: "Pulp & Paper", href: "#" },
      { name: "Metallurgy", href: "#" },
      { name: "Life Science", href: "#" },
      { name: "Food & Beverage", href: "#" },
      { name: "Utility", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full md:[clipPath:polygon(0%_0,100%_0%,100%_100%,0_100%)] relative h-fit md:h-[min(51rem,100vh)]"
      style={{
        "--footer-height": "min(51rem,100vh)",
      }}
    >
      <div className="font-light text-[#F5F5F5] bg-[#111111] relative md:h-[calc(100vh+var(--footer-height))] md:-top-[100vh]">
        <div className="h-fit md:h-[var(--footer-height)] md:sticky md:top-[calc(100vh-var(--footer-height))]">
          <div className="py-8 sm:py-16 max-w-screen-2xl mx-auto flex flex-col gap-10 md:gap-4 px-5 h-full w-full justify-between">
            {/* Top section with logo and contact */}
            <div className="flex max-sm:flex-col justify-between items-start max-sm:gap-3">
              <Link href="/" className="hidden sm:block">
                <Image
                  src="/LOGO.svg"
                  alt="SUPCON"
                  width={150}
                  height={40}
                  className="h-8 md:h-11 w-auto"
                  priority
                />
              </Link>
              <div className="flex flex-col items-start sm:gap-1 md:gap-4">
                <Link href="#" className="flex items-center gap-2">
                  <LinkEffect
                    textClass={
                      "text-xl sm:text-3xl md:text-4xl leading-[32px] font-light"
                    }
                    text={"CONTACT US"}
                  ></LinkEffect>
                  <div
                    data-svg-wrapper
                    className="w-7 h-7 sm:w-5 sm:h-5 md:w-10 md:h-10"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 25L26 2M26 2H3M26 2V25"
                        stroke="#F5F5F5"
                        strokeWidth="3.44462"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  {/* <FiArrowUpRight className="text-xl sm:text-3xl md:text-4xl" /> */}
                </Link>
                <div className="flex gap-3 sm:gap-6 text-xl md:text-3xl">
                  <Link
                    href="https://www.linkedin.com/company/%E4%B8%AD%E6%8E%A7%E6%8A%80%E6%9C%AF/"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://youtube.com/@supcon742?si=4HX_1FCXM0aABxDH"
                    className="hover:text-red-600 transition-colors"
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    <LuMessageCircleMore />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 pt-8 border-t border-[#F5F5F550]">
              <p className="col-span-1 md:col-span-2 text-xl leading-normal">
                Leading Industrial AI To
                <br className="max-md:hidden" />
                Sustainable Growth
              </p>

              {data.map((section, index) => (
                <div className="col-span-1" key={index}>
                  <h3 className="text-grayD mb-2 md:mb-4 uppercase text-base tracking-wider">
                    {section.title}
                  </h3>
                  <div className="max-md:text-sm flex md:flex-col max-md:flex-wrap max-md:gap-x-3">
                    {section.links.map((link, linkIndex) => (
                      <Link href={link.href} key={linkIndex}>
                        <LinkEffect
                          textClass={"p-0.5 sm:p-1"}
                          noicon
                          text={link.name}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom section with copyright and legal links */}
            <div className="flex gap-2 max-md:flex-col justify-between items-start sm:items-center pt-4 border-t border-[#F5F5F550]">
              <p className="text-xs">© 2025 SUPCON. All Rights Reserved.</p>
              <div className="flex max-sm:flex-wrap gap-1 sm:gap-2 text-xs">
                <Link href="#">
                  <LinkEffect
                    textClass={"p-1"}
                    noicon
                    text={"Privacy Policy"}
                  />
                </Link>
                <Link href="#">
                  <LinkEffect
                    textClass={"p-1"}
                    noicon
                    text={"Terms Of Service"}
                  />
                </Link>
                <Link href="#">
                  <LinkEffect textClass={"p-1"} noicon text={"Accessibility"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
