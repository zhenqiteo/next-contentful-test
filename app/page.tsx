"use client";
import { createClient } from "contentful";
import Link from "next/link";
import { useState } from "react";
import HomePageHero from "./components/HomePageHero";
import StatisticsSection from "./components/StatisticsSection";
import LogoScrollSection from "./components/LogoScrollSection";
import StatementSection from "./components/StatementSection";
import Divider from "./components/ui/Divider";
import IndustriesSection from "./components/IndustriesSection";

// Create a layout wrapper component in the same file or as a separate component
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <main>
      <HomePageHero />
      <SectionWrapper>
        <StatisticsSection />
        <StatementSection />
        <Divider />
      </SectionWrapper>
      <LogoScrollSection logoCount={6} />
      <SectionWrapper>
        <IndustriesSection />
      </SectionWrapper>
    </main>
  );
}
