// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: false, // 👈 / हटाएगा (Clean URL: /paradise)
//   images: {
//     unoptimized: true,
//     qualities: [75, 90, 100],
//   },
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false, // 👈 इससे URL में आख़िर का / नहीं आएगा
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;