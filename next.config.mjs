/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("@node-rs/bcrypt");

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alcllvgtfjbpxgwmreyx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
