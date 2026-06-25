export type Service = {
  num: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  icon: "globe" | "smartphone" | "layoutDashboard" | "boxes" | "users" | "briefcase" | "search" | "server";
  stack: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    short: "Marketing sites, e-commerce, content platforms.",
    description:
      "High-performance, SEO-optimized websites built on modern frameworks. From corporate sites to full e-commerce storefronts.",
    deliverables: ["Responsive design", "CMS integration", "Performance budget", "Analytics setup"],
    icon: "globe",
    stack: ["Next.js", "React", "Tailwind", "Sanity", "Vercel"],
  },
  {
    num: "02",
    title: "App Development",
    short: "Native iOS & Android applications.",
    description:
      "Cross-platform and native mobile applications engineered for reliability, smooth UX, and store-ready deployment.",
    deliverables: ["iOS & Android", "Offline-first sync", "Push notifications", "Store deployment"],
    icon: "smartphone",
    stack: ["React Native", "Firebase"],
  },
  {
    num: "03",
    title: "Web App Development",
    short: "SaaS dashboards, internal tools, portals.",
    description:
      "Complex web applications with authentication, role-based access, and real-time data — built to scale with your team.",
    deliverables: ["Auth & roles", "Real-time data", "Admin dashboards", "API integrations"],
    icon: "layoutDashboard",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    num: "04",
    title: "Custom Software",
    short: "Bespoke systems built around your workflow.",
    description:
      "Tailored software where off-the-shelf doesn't fit — automation tools, internal platforms, and integration layers.",
    deliverables: ["Discovery & spec", "Modular architecture", "Third-party integrations", "Long-term support"],
    icon: "boxes",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Vercel", "AWS", "Redis"],
  },
  {
    num: "05",
    title: "CRM Development",
    short: "Customer relationship platforms.",
    description:
      "Custom CRM systems matched to your sales pipeline, reporting needs, and team structure — not generic templates.",
    deliverables: ["Pipeline design", "Reporting & dashboards", "Email & SMS hooks", "Role-based access"],
    icon: "users",
    stack: ["React", "Node.js", "PostgreSQL", "Twilio", "SendGrid", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Vercel", "Redis", "Stripe", "Razorpay"],
  },
  {
    num: "06",
    title: "Business Software",
    short: "ERP, inventory, billing & operations.",
    description:
      "Operational software for inventory, billing, HR, and reporting. Reduce manual work and centralize your data.",
    deliverables: ["Inventory & billing", "HR & payroll modules", "Custom reports", "Multi-user access"],
    icon: "briefcase",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Vercel", "Redis", "Stripe", "Razorpay"],
  },
  {
    num: "07",
    title: "SEO",
    short: "Search visibility & organic growth.",
    description:
      "Technical SEO audits, on-page optimization, and content strategy to grow qualified organic traffic over time.",
    deliverables: ["Technical audit", "Keyword strategy", "On-page optimization", "Monthly reporting"],
    icon: "search",
    stack: ["GSC", "GA4", "Ahrefs", "Semrush", "Schema.org"],
  },
  {
    num: "08",
    title: "Domain & Hosting",
    short: "Reliable infrastructure & deployments.",
    description:
      "Domain registration, managed hosting, SSL, email setup, and ongoing infrastructure maintenance.",
    deliverables: ["Domain registration", "Managed hosting", "SSL & email", "Backups & monitoring"],
    icon: "server",
    stack: ["Cloudflare", "AWS", "Vercel", "Hostinger", "Let's Encrypt"],
  },
];
