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
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import EnquiryPopup from "../components/ui/EnquiryPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ultimateheights.in"),
  title: "Ultimate Heights - Only 5 Luxury Flats Left in Bhopal",
  description:
    "96.3% Sold Out! Premium flats near Aura Mall, Shahpura. Book your dream home today at Ultimate Heights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W73ZN7LM');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W73ZN7LM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <EnquiryPopup />
      </body>
    </html>
  );
}