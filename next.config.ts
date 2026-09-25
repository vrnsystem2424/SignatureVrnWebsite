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
  trailingSlash: false, // 👈 यह false ही रहना चाहिए
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;