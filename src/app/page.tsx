import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Group | Website Launching Soon",
  description:
    "Signature Group's official website is coming soon. Explore our premium residential & commercial projects.",
};

/* ───────── Project Data ───────── */
const projects = [
  {
    name: "Signature Heritage",
    type: "Luxury Duplex Township",
    desc: "Grand club house, swimming pool, lush gardens & 24×7 gated security in a royal heritage theme.",
    img: "/images/signatureheritage/2 ENTRY GATE.jpg",
    href: "/signatureheritage",
    badge: "Featured",
  },
  {
    name: "Paradise",
    type: "Modern Family Residences",
    desc: "Thoughtfully planned homes with world-class amenities, green spaces & seamless connectivity.",
    img: "/images/exterior.jpg",
    href: "/paradise",
    badge: "Selling Fast",
  },
  {
    name: "Ultimate Height",
    type: "Premium High-Rise Towers",
    desc: "Sky-high living with panoramic city views, rooftop infinity pool & smart home automation.",
    img: "/images/living-room.jpg",
    href: "/ultimateheight",
    badge: "Upcoming",
  },
];

/* ───────── Page ───────── */
export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f4] text-slate-800 selection:bg-amber-200 overflow-x-hidden">
      {/* ═══ Subtle BG Pattern ═══ */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-200/30 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(180,140,80,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ═══ Top Bar ═══ */}
      <header className="relative z-20 border-b border-amber-900/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-lg font-black text-white shadow-md shadow-amber-500/20">
              S
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-slate-900">
                Signature <span className="text-amber-600">Group</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Real Estate Developers
              </span>
            </div>
          </div>

          {/* Status Pill */}
          <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
              Building
            </span>
          </div>
        </div>
      </header>

      {/* ═══ Hero ═══ */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-20 text-center md:pt-28">
        {/* Chip */}
        {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 shadow-sm">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Official Website Launching Soon
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
          Official{" "}
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Website
          </span>
          <br />
          Launching Soon
        </h1>

        {/* <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Our official corporate website is under development and will be live
          shortly. Meanwhile, explore Signature Group&apos;s exclusive real-estate
          projects directly through the links below.
        </p> */}

        {/* Divider */}
        <div className="mx-auto mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/15 to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Our Projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-900/15 to-transparent" />
        </div>
      </section>

      {/* ═══ Project Cards ═══ */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-600/30"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow-md">
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-amber-600">
                  {p.type}
                </p>
                <h3 className="text-2xl font-bold leading-snug text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>

                {/* CTA */}
                <Link
                  href={p.href}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-600/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/40 hover:brightness-110"
                >
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="relative z-10 border-t border-amber-900/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-800">Signature Group</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href="tel:+919999999999" className="transition hover:text-amber-700">
              +91 99999 99999
            </a>
            <a href="mailto:info@signaturegroup.com" className="transition hover:text-amber-700">
              info@signaturegroup.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}