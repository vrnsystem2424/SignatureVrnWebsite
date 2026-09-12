// import { heritageData } from "../../data/signatureheritage";

// export default function HeritageFooter() {
//   return (
//     <footer className="bg-[#0a0f1c] text-indigo-200 py-12 text-center border-t border-indigo-900/50">
//       <h2 className="text-2xl font-serif text-amber-400 mb-4">{heritageData.name}</h2>
//       <p className="text-sm mb-4">📍 {heritageData.location}</p>
//       <p className="text-xs opacity-60">RERA: {heritageData.rera} | © {new Date().getFullYear()} Signature Group</p>
//     </footer>
//   );
// }



import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks, footerContent } from "../../data/signatureheritage";

export default function HeritageFooter() {
  // Google SEO Keywords (Popular Searches for Bhopal & Kolar Road)
  const popularSearches =
    "Duplex in Bhopal | Duplex on Kolar Road Bhopal | Premium Duplex Homes Bhopal | Signature Heritage Bhopal | Signature Heritage Kolar Road | Gated Community Kolar Road Bhopal | Luxury Duplex Bhopal | 3 BHK Duplex Bhopal | 4 BHK Duplex Bhopal | Clubhouse Duplex Bhopal | Residential Plots Kolar Road | Plots in Kolar Road Bhopal | Property on Kolar Road Bhopal | Buy Duplex in Bhopal | Premium Gated Community Bhopal | Swimming Pool Community Bhopal | Family Duplex Homes Bhopal | Investment Property Kolar Road | Real Estate Kolar Road Bhopal | Duplex for Sale Bhopal | Luxury Homes Kolar Road | RERA Approved Project Bhopal | Independent Duplex Bhopal | Township Living Bhopal | Best Duplex in Bhopal | Signature Heritage Duplex | Commercial Plaza Kolar Road";

  return (
    <footer className="bg-indigo-950 border-t border-amber-400/20">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-white">
              Signature <span className="text-amber-400">Heritage</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              A premium gated residential community on Kolar Road, Bhopal.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-400">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-400">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400 shrink-0" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400 shrink-0" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />
                {footerContent.address}
              </li>
            </ul>
          </div>

          {/* Brochure */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-400">
              Resources
            </p>
            <a
              href={siteConfig.brochureUrl}
              download
              className="inline-block rounded-full border border-amber-400 px-5 py-2.5 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-400 hover:text-indigo-950"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Bottom Section with SEO Keywords & Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-8">
          {/* SEO Popular Searches */}
          <div className="mb-6">
            <p className="text-[11px] leading-relaxed text-neutral-400">
              <strong className="text-amber-400 uppercase tracking-wider block mb-1">
                Popular Searches:
              </strong>
              {popularSearches}
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed text-neutral-500">
            {footerContent.disclaimer}
          </p>

          {/* Copyright */}
          <p className="mt-4 text-xs text-neutral-500">
            © {new Date().getFullYear()} Signature Heritage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}