
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signature Group - Premium Real Estate Developer",
  description:
    "Signature Group - Leading Real Estate Developer in Bhopal offering premium residential and commercial projects.",
  keywords: [
    "Signature Group",
    "Real Estate Bhopal",
    "Premium Flats",
    "Ultimate Heights",
    "Luxury Apartments Bhopal",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}