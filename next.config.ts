import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,   // ✅ false कर दो — URL में / नहीं आएगा
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;