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
};

export const portfolio: PortfolioItem[] = [
  {
    id: "proj-01",
    title: "Mutahharah - Tajweed & Quran Academy",
    category: "Website",
    year: "2026",
    image: "/portfolio/mutahharah.png",
    url: "https://mutahharah.com"
  },
  {
    id: "proj-02",
    title: "Salafi Maktabah - Authentic Islamic books by scholars of the Salaf",
    category: "E-Commerce",
    year: "2026",
    image: "/portfolio/salafimaktabah.png",
    url: "https://salafimaktabah.com"
  },
  {
    id: "proj-03",
    title: "Hillmount Villa - Luxury Rental Property in Yelagiri",
    category: "Website",
    year: "2026",
    image: "/portfolio/hillmountvilla.png",
    url: "https://hillmountvilla.in"
  },
  {
    id: "proj-04",
    title: "Salt N Cure - Low Sodium Foods",
    category: "Website",
    year: "2026",
    image: "/portfolio/saltncure.png",
    url: "https://saltncure.com"
  },
  {
    id: "proj-05",
    title: "Allies of Movement - Tamil Nadu’s first dedicated Classical Pilates studio",
    category: "Website",
    year: "2026",
    image: "/portfolio/alliesofmovement.png",
    url: "https://alliesofmovement.com"
  },
  {
    id: "proj-06",
    title: "Arishomes - Premium Villa Plots in Chennai",
    category: "Website",
    year: "2026",
    image: "/portfolio/arishomes.png",
    url: "https://arishomes.in"
  },
];
