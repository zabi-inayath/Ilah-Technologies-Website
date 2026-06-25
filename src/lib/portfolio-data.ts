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
    title: "Project Title 01",
    category: "Custom Software",
    year: "2025",
  },
  {
    id: "proj-02",
    title: "Project Title 02",
    category: "Web Application",
    year: "2025",
  },
  {
    id: "proj-03",
    title: "Project Title 03",
    category: "CRM Development",
    year: "2024",
  },
  {
    id: "proj-04",
    title: "Project Title 04",
    category: "App Development",
    year: "2024",
  },
  {
    id: "proj-05",
    title: "Project Title 05",
    category: "Business Software",
    year: "2024",
  },
  {
    id: "proj-06",
    title: "Project Title 06",
    category: "SEO & Growth",
    year: "2023",
  },
];
