import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Lets you paste ANY https image URL into content/site.ts and still get
    // resizing + modern formats. To lock it down once your URLs are final,
    // replace the wildcard with your real hosts, e.g.
    //   { protocol: "https", hostname: "i.ytimg.com" },
    //   { protocol: "https", hostname: "your-cdn.example.com" },
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
