// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import EnquiryPopup from "../components/ui/EnquiryPopup";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.ultimateheights.in"),
//   title: "Ultimate Heights - Only 5 Luxury Flats Left in Bhopal",
//   description: "96.3% Sold Out! Premium flats near Aura Mall, Shahpura. Book your dream home today at Ultimate Heights.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//         <EnquiryPopup />
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import EnquiryPopup from "../components/ui/EnquiryPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ultimateheights.in"),
  title: "Ultimate Heights - Only 5 Luxury Flats Left in Bhopal",
  description: "96.3% Sold Out! Premium flats near Aura Mall, Shahpura. Book your dream home today at Ultimate Heights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <EnquiryPopup />
      </body>
    </html>
  );
}