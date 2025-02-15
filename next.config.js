/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/b6we9iv2jxae/**",
      },
    ],
  },
};

module.exports = nextConfig;
