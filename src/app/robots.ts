import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "[ultimateheights.in](https://www.ultimateheights.in/sitemap.xml)",
  };
}
