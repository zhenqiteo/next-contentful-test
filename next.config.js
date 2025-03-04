/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Comment out or remove this line for dev
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/b6we9iv2jxae/**",
      },
    ],
    domains: ["images.ctfassets.net"], // or whatever domains you need
  },
  experimental: {
    // other experimental features if needed
  },
  typescript: {
    // Temporarily enable this to test if it's a type checking issue
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
