import Link from "next/link";

const HomePageHero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/HomePage_Hero.png")', // Add your industrial background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tag line */}
        <p className="text-blue-400 font-semibold mb-4">
          Next Generation Automation
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6">
          Minimise Costs,
          <br />
          Maximise Control
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-xl font-normal max-w-2xl mb-8">
          At SUPCON, we transform the process industry with AI-driven
          automation, empowering businesses in chemicals, energy, and new
          materials.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/request-demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Request a demo
          </Link>
          <Link
            href="/learn-more"
            className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
          >
            Learn more
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
