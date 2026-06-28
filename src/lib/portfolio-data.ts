// Template portfolio entries — the owner will replace image, url, and copy
// with real client work. Keep the shape stable so updates are mechanical.
export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  url?: string; // live link — fill in manually
  image?: string; // photo URL — fill in manually
  description?: string;
  status?: string; // live link — fill in manually
};

export const portfolio: PortfolioItem[] = [
  {
    id: "proj-01",
    title: "Madrasah Fatimatuz Zahrah Al-Athariyyah Lil Banaat",
    category: "Website",
    year: "2026",
    image: "/portfolio/fatima.png",
    status: "On-going"
  },
  {
    id: "proj-12",
    title: "Mutahharah - Tajweed & Quran Academy",
    category: "Website",
    year: "2026",
    image: "/portfolio/mutahharah.png",
    url: "https://mutahharah.com",
    status: "Deployed"
  },
  {
    id: "proj-02",
    title: "Salafi Maktabah - Authentic Islamic books by scholars of the Salaf",
    category: "E-Commerce",
    year: "2026",
    image: "/portfolio/salafimaktabah.png",
    url: "https://salafimaktabah.com",
    status: "Deployed"
  },
  {
    id: "proj-03",
    title: "Hillmount Villa - Luxury Rental Property in Yelagiri",
    category: "Website",
    year: "2026",
    image: "/portfolio/hillmountvilla.png",
    url: "https://hillmountvilla.in",
    status: "Deployed"
  },
  {
    id: "proj-04",
    title: "Salt N Cure - Low Sodium Foods",
    category: "Shopify",
    year: "2026",
    image: "/portfolio/saltncure.png",
    url: "https://saltncure.com",
    status: "Deployed"
  },
  {
    id: "proj-05",
    title: "Allies of Movement - Tamil Nadu’s first dedicated Classical Pilates studio",
    category: "Website",
    year: "2026",
    image: "/portfolio/alliesofmovement.png",
    url: "https://alliesofmovement.com",
    status: "Deployed"
  },
  {
    id: "proj-06",
    title: "Arishomes - Premium Villa Plots in Chennai",
    category: "Website",
    year: "2026",
    image: "/portfolio/arishomes.png",
    url: "https://arishomes.in",
    status: "Deployed"
  },
  {
    id: "proj-07",
    title: "Salt Recycing - Salt Recycing Company",
    category: "Website",
    year: "2026",
    image: "/portfolio/saltrecycing.png",
    url: "https://saltrecycing.com",
    status: "Deployed"
  },
  {
    id: "proj-08",
    title: "WOW Tech -  ZLD and Advanced Salt Recycling",
    category: "Website",
    year: "2025",
    image: "/portfolio/wowtech.png",
    url: "https://wowtech.in/",
    status: "Deployed"
  },
  {
    id: "proj-09",
    title: "Asfar Clinic - Multi Speciality Clinic Unani Clinic",
    category: "Website",
    year: "2025",
    image: "/portfolio/asfarclinic.png",
    url: "https://asfarclinic.com",
    status: "Deployed"
  },
  {
    id: "proj-10",
    title: "Chan Basha - Portfolio development",
    category: "Portfolio",
    year: "2025",
    image: "/portfolio/chanbasha.png",
    url: "https://cbk.co.in",
    status: "Deployed"
  },
  {
    id: "proj-11",
    title: "Sano Tech - Cyber Security & Digital Transformation",
    category: "Website",
    year: "2025",
    image: "/portfolio/sanovatech.png",
    url: "https://sanovatechnologies.com",
    status: "Deployed"
  }
];
