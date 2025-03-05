"use client";
import { createClient } from "contentful";
import Link from "next/link";
import { useState } from "react";
import HomePageHero from "./components/HomePageHero";
import StatisticsSection from "./components/StatisticsSection";
import LogoScrollSection from "./components/LogoScrollSection";
import StatementSection from "./components/StatementSection";

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <main>
      <HomePageHero />
      <StatisticsSection />
      {/* Trusted Companies Logo Section */}
      <StatementSection />
      <LogoScrollSection logoCount={6} />
    </main>
  );
}
