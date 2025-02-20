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
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
