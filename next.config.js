/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    nextScriptWorkers: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atstore.id",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "adminpanel.sacode.web.id",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
