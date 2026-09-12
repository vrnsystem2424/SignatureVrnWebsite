export const siteConfig = {
  projectName: "Signature Heritage",
  tagline: "Premium Living Designed For Modern Families",
  location: "Kolar Road, Bhopal",
  phone: "+919999999999",
  whatsappNumber: "919999999999",
  email: "info@signatureheritage.in",
  brochureUrl: "/images/signatureheritage/signature%20heritage%20brochure%20SALES.pdf",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234567.123!2d77.3833!3d23.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3N8KwMjMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Overview",
    href: "#overview",
    children: [
      { label: "Statement of Area", href: "#overview" },
      { label: "Master Plan", href: "#overview" },
    ],
  },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Location",
    href: "#location",
    children: [
      { label: "Map & Distances", href: "#location" },
      { label: "Nearby Landmarks", href: "#location" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];

export const heroContent = {
  backgroundImage: "/images/signatureheritage/6%20DUPLEX%20ELEVATION.jpg",
  eyebrow: "LOOKING FOR A DUPLEX IN BHOPAL?",
  headlineLines: ["OWN YOUR DREAM DUPLEX AT", "SIGNATURE HERITAGE"],
  subheadline: "PREMIUM LIVING DESIGNED FOR MODERN FAMILIES",
  supportingLine:
    "Ready Lifestyle Amenities. Premium Duplex Homes. Limited Inventory Available.",
  ctaPrimary: {
    label: "Download Brochure",
    href: "/images/signatureheritage/signature%20heritage%20brochure%20SALES.pdf",
  },
  ctaSecondary: {
    label: "Book Site Visit",
    href: "#contact",
  },
};

export const overviewStats = [
  { id: "area", label: "Total Project Area", value: "45254", unit: "Sq.Ft." },
  { id: "clubhouse", label: "Clubhouse Area", value: "2281", unit: "Sq.Ft." },
  { id: "pool", label: "Swimming Pool", value: "1390", unit: "Sq.Ft." },
  { id: "possession", label: "RERA Approved", value: "100%", unit: "Legal & Clear Titles" },
];

export const overviewContent = {
  eyebrow: "The Statement of Area",
  title: "Premium Duplex Community, Thoughtfully Planned",
  description:
    "Signature Heritage is a meticulously master-planned gated duplex community on Kolar Road, Bhopal. Designed for comfortable family living, it offers spacious homes, ready lifestyle amenities, and a secure environment.",
  highlights: [
    "Duplex Homes Starting From 1356 Sq.ft",
    "Plot Sizes From 765 Sq.ft Onwards",
    "Grand 29.5 Ft Main Entrance",
    "Secure Community Environment",
  ],
};

export type Amenity = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const amenities: Amenity[] = [
  { id: "clubhouse", icon: "🏛️", title: "Luxury Club House", description: "A Premium Space For Recreation & Social Gatherings." },
  { id: "gym", icon: "🏋️", title: "Fully Equipped Gym", description: "Stay Active With Modern Fitness Facilities." },
  { id: "pool", icon: "🏊", title: "Swimming Pool", description: "Designed For Leisure & Relaxation." },
  { id: "party", icon: "🎉", title: "Party Hall", description: "Perfect Venue For Family Celebrations & Events." },
  { id: "kids", icon: "🎠", title: "Kids Play Area", description: "Safe & Dedicated Space For Children." },
  { id: "temple", icon: "🛕", title: "Community Temple", description: "A Peaceful Spiritual Space Within The Community." },
];

export type GalleryImage = {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { id: 1, title: "Grand Entry Gate", category: "Exterior", src: "/images/signatureheritage/2%20ENTRY%20GATE.jpg", alt: "Signature Heritage Grand Entrance Gate" },
  { id: 2, title: "Resort-Style Clubhouse", category: "Amenities", src: "/images/signatureheritage/3%20CLUB%20HOUSE%20ELEVATION.jpg", alt: "Clubhouse Elevation" },
  { id: 3, title: "Clubhouse Swimming Pool", category: "Amenities", src: "/images/signatureheritage/4%20CLUB%20HOUSE%20POOL.jpg", alt: "Swimming Pool Area" },
  { id: 4, title: "Royal Duplex Villa Elevation", category: "Exterior", src: "/images/signatureheritage/6%20DUPLEX%20ELEVATION.jpg", alt: "Duplex Elevation View" },
  { id: 5, title: "Scenic Temple View", category: "Temple", src: "/images/signatureheritage/10%20TEMPLE%20VIEW.jpg", alt: "Grand Temple View" },
  { id: 6, title: "Temple Elevation", category: "Temple", src: "/images/signatureheritage/7%20TEMPLE%20ELEVATION.jpg", alt: "Temple Architecture" },
  { id: 7, title: "Lush Green Landscaped Garden", category: "Amenities", src: "/images/signatureheritage/5%20GARDEN.jpg", alt: "Garden Area" },
  { id: 8, title: "Luxury Drawing Room", category: "Interior", src: "/images/signatureheritage/11%20Drawing%20room%20%20(1).jpg", alt: "Drawing Room Interior" },
  { id: 9, title: "Spacious Living Area", category: "Interior", src: "/images/signatureheritage/12%20Drawing%20room%20%20(2).jpg", alt: "Living Room Interior" },
  { id: 10, title: "Elegant Dining Space", category: "Interior", src: "/images/signatureheritage/16%20Dining%20(2).jpg", alt: "Dining Area" },
];

export type Landmark = {
  id: string;
  name: string;
  distance: string;
  category: string;
};

export const nearbyLandmarks: Landmark[] = [
  { id: "aiims", name: "AIIMS Bhopal", distance: "8.5 km", category: "Healthcare" },
  { id: "shahpura", name: "Shahpura Lake", distance: "6 km", category: "Leisure" },
  { id: "aura-mall", name: "Aura Mall", distance: "9 km", category: "Shopping" },
  { id: "kolar-road", name: "Kolar Road Main Junction", distance: "1.2 km", category: "Connectivity" },
  { id: "airport", name: "Raja Bhoj Airport", distance: "18 km", category: "Travel" },
  { id: "railway", name: "Habibganj Railway Station", distance: "12 km", category: "Travel" },
];

export const locationContent = {
  eyebrow: "The Address",
  title: "Perfectly Positioned on Kolar Road, Bhopal",
  description:
    "Kolar Road is Bhopal's most sought-after residential corridor — well connected to the city's healthcare, education, and retail hubs, while still offering the calm of a planned, green neighbourhood.",
};

export const leadFormContent = {
  eyebrow: "Enquire Now",
  title: "Book Your Site Visit Today",
  description:
    "Share your details and our team will get in touch to schedule a personalised site visit at Signature Heritage.",
  interestOptions: [
    "Premium Duplex Home",
    "Commercial Plaza Unit",
    "Investment Enquiry",
    "General Enquiry",
  ],
};

export const footerContent = {
  disclaimer:
    "This is not an official offer or contract of any kind. All images are for representation purposes only and are indicative of the design intent. Prices, plans, specifications, and other details are subject to change without prior notice at the sole discretion of the developer. RERA registration details will be shared on request.",
  address: "Signature Heritage, Kolar Road, Bhopal, Madhya Pradesh, India",
  popularSearches:
    "Duplex in Bhopal | Duplex on Kolar Road Bhopal | Premium Duplex Homes Bhopal | Signature Heritage Bhopal | Signature Heritage Kolar Road | Gated Community Kolar Road Bhopal | Luxury Duplex Bhopal | 3 BHK Duplex Bhopal | 4 BHK Duplex Bhopal | Clubhouse Duplex Bhopal | Residential Plots Kolar Road | Plots in Kolar Road Bhopal | Property on Kolar Road Bhopal | Buy Duplex in Bhopal | Premium Gated Community Bhopal | Swimming Pool Community Bhopal | Family Duplex Homes Bhopal | Investment Property Kolar Road | Real Estate Kolar Road Bhopal | Duplex for Sale Bhopal | Luxury Homes Kolar Road | RERA Approved Project Bhopal | Independent Duplex Bhopal | Township Living Bhopal | Best Duplex in Bhopal | Signature Heritage Duplex | Commercial Plaza Kolar Road",
};

export const heritagePopularSearches = footerContent.popularSearches;

// MAIN HERITAGE DATA OBJECT (Fixes all missing property crashes)
export const heritageData = {
  hero: {
    eyebrow: "LOOKING FOR A DUPLEX IN BHOPAL?",
    title: "Own Your Dream Duplex At Signature Heritage",
    subtitle: "PREMIUM LIVING DESIGNED FOR MODERN FAMILIES",
    usps: [
      "Ready Lifestyle Amenities",
      "Premium Duplex Homes",
      "Limited Inventory Available",
    ],
    image: "/images/signatureheritage/6%20DUPLEX%20ELEVATION.jpg",
  },

  highlights: [
    "Premium Duplex Community",
    "Grand Entrance Experience",
    "Luxury Club House",
    "Swimming Pool With Deck Area",
    "Landscaped Open Spaces",
    "Excellent Connectivity",
  ],

  strip: {
    features: [
      { title: "Premium Duplex Homes", desc: "Spacious Family Living" },
      { title: "Premium Clubhouse", desc: "Modern Lifestyle Amenities" },
      { title: "Swimming Pool", desc: "Luxury Living Experience" },
      { title: "Prime Location", desc: "Excellent Connectivity" },
    ],
  },

  whyChoose: [
    {
      title: "Premium Duplex Community",
      desc: "Designed For Comfortable Family Living",
      icon: "🏡",
    },
    {
      title: "Luxury Club House",
      desc: "2281 Sq.ft Lifestyle & Recreation Hub",
      icon: "🏛️",
    },
    {
      title: "Swimming Pool & Lawn Area",
      desc: "Perfect For Relaxation & Community Activities",
      icon: "🏊",
    },
    {
      title: "Prime Bhopal Location",
      desc: "Excellent Connectivity To Daily Conveniences",
      icon: "📍",
    },
  ],

  communityFeatures: [
    "Duplex Homes Starting From 1356 Sq.ft",
    "Plot Sizes From 765 Sq.ft Onwards",
    "Grand 29.5 Ft Main Entrance",
    "Premium Club House",
    "Fully Equipped Gym",
    "2 Floor Party Hall",
    "Dedicated Restrooms",
    "Secure Community Environment",
  ],

  lifestyleAdvantages: [
    "Premium Swimming Pool With Deck Area",
    "4045+ Sq.ft Open Lawn Area",
    "Dedicated Kids Play Area",
    "Community Temple Inside Campus",
    "Green & Peaceful Environment",
    "Family-Friendly Community",
    "Premium Residential Living",
    "Excellent Future Value Potential",
  ],

  didYouKnow: [
    "Duplex Homes Offer More Privacy & Space Than Traditional Apartments.",
    "Gated Communities Create A Safer Environment For Families.",
    "Premium Amenities Enhance Lifestyle And Long-Term Value.",
    "Independent Duplex Living Gives You Greater Freedom And Comfort.",
  ],

  buyerProblems: [
    "Limited Living Space",
    "Lack Of Amenities",
    "Poor Community Planning",
    "Limited Open Areas",
    "Lack Of Recreational Facilities",
  ],

  heritageSolutions: [
    "Spacious Duplex Homes",
    "Premium Lifestyle Amenities",
    "Open Green Spaces",
    "Family-Friendly Community",
    "Well-Planned Development",
  ],

  reasons: [
    "Duplex Homes Starting From 1356 Sq.ft",
    "Plot Sizes From 765 Sq.ft Onwards",
    "Grand 29.5 Ft Main Entry",
    "Luxury 2281 Sq.ft Club House",
    "Fully Equipped Gym",
    "2 Floor Party Hall",
    "Premium Swimming Pool",
    "4045+ Sq.ft Lawn Area",
    "Dedicated Kids Play Area",
    "Community Temple",
    "Family-Oriented Community",
    "Premium Lifestyle Living",
    "Spacious Open Areas",
    "Modern Infrastructure",
    "Excellent Investment Potential",
  ],

  lifestyle: [
    { title: "Premium Duplex Homes", icon: "🏡" },
    { title: "Luxury Club House", icon: "🏛️" },
    { title: "Swimming Pool & Deck Area", icon: "🏊" },
    { title: "Landscaped Lawn Spaces", icon: "🌳" },
    { title: "Kids Play Area", icon: "🎠" },
    { title: "Community Living Experience", icon: "👨‍👩‍👧‍👦" },
  ],

  testimonials: [
    {
      quote:
        "The spacious duplex layout and premium amenities made Signature Heritage the perfect choice for our family.",
      name: "Happy Homeowner",
    },
    {
      quote:
        "The luxury clubhouse and swimming pool give us a resort-like feel every day.",
      name: "Resident",
    },
    {
      quote:
        "A well-planned community with great open spaces for kids to play safely.",
      name: "Family Resident",
    },
  ],

  amenities: amenities,

  vacantInventory: [
    {
      type: "Premium 3 BHK Duplex",
      area: "1,356 SQ. FT.",
      price: "Request Details",
      features: [
        "Spacious Living & Dining",
        "Private Terrace & Balconies",
        "Covered Car Parking",
        "Vastu Compliant Layout",
      ],
    },
    {
      type: "Luxury 4 BHK Duplex",
      area: "1,800+ SQ. FT.",
      price: "Request Details",
      features: [
        "Double Height Ceiling",
        "Personal Garden Space",
        "Premium Fixtures & Fittings",
        "Corner Options Available",
      ],
    },
    {
      type: "Commercial Plaza Shops",
      area: "350 - 900 SQ. FT.",
      price: "Request Details",
      features: [
        "Main Road Facing",
        "High Footfall Corridor",
        "Ample Visitor Parking",
        "Ideal for Retails & Clinics",
      ],
    },
  ],
};