import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { services } from "@/lib/services-data";
import { serviceIcons } from "@/lib/service-icons";
import { ArrowUpRight, CheckCircle2, Cpu, GitBranch, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ilah Technologies" },
      {
        name: "description",
        content:
          "Web & app development, custom software, CRM, business software, SEO, and domain & hosting from ilah Technologies.",
      },
      { property: "og:title", content: "Services — ilah Technologies" },
      {
        property: "og:description",
        content: "Eight core capabilities: web, app, custom software, CRM, SEO, hosting and more.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const pillars = [
  { icon: Cpu, t: "Performance", d: "Sub-second loads, optimized bundles, edge delivery." },
  { icon: ShieldCheck, t: "Security", d: "OWASP-aligned, encrypted at rest & in transit." },
  { icon: GitBranch, t: "Version Control", d: "Every line in Git. Full audit trail, always." },
  { icon: Zap, t: "CI/CD", d: "Automated tests, preview deploys, zero-downtime releases." },
];

const engagements = [
  {
    tag: "STARTER",
    title: "Fixed Scope",
    price: "From ₹25k",
    desc: "Marketing site, landing page, or single-feature build. Flat fee, 2–3 weeks.",
    features: ["Up to 6 pages", "Responsive design", "SEO baseline", "1 round of revisions"],
  },
  {
    tag: "GROWTH",
    title: "Product Build",
    price: "Quote",
    desc: "Full web/mobile app, CRM, or business software. Scoped per project.",
    features: ["Discovery & spec", "Iterative weekly demos", "Auth, DB, integrations", "30-day post-launch support"],
    highlight: true,
  },
  {
    tag: "RETAINER",
    title: "Long-term Partner",
    price: "Monthly",
    desc: "Ongoing development, maintenance, and feature delivery. Capacity-based.",
    features: ["Dedicated engineer hours", "Priority response", "Monthly roadmap", "Quarterly reviews"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-5 pt-12 pb-10 border-b border-border md:px-10 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            Capabilities · 08 Services
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            What we build.
          </h1>
          <p className="text-muted text-sm md:text-base max-w-[52ch] leading-relaxed">
            End-to-end engineering across the full digital stack. Each engagement starts with a
            discovery call and ends with software in production.
          </p>
        </div>
      </header>

      {/* Engineering pillars */}
      <section className="px-5 py-10 md:px-10 md:py-14 border-b border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-6">
            Engineering Pillars
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {pillars.map((p) => (
              <div key={p.t} className="bg-background p-5 flex flex-col gap-3">
                <p.icon className="size-5 text-accent" strokeWidth={1.5} />
                <h3 className="font-bold text-sm">{p.t}</h3>
                <p className="text-[11px] text-muted leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service list */}
      <section className="px-5 py-10 md:px-10 md:py-16">
        <div className="max-w-5xl mx-auto space-y-px bg-border border border-border">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article
                key={s.num}
                className="bg-background p-6 md:p-8 grid md:grid-cols-[80px_1fr_1fr] gap-6"
              >
                <div className="flex md:flex-col gap-3 md:gap-4 items-start">
                  <span className="font-mono text-[10px] text-accent font-bold">{s.num}</span>
                  <div className="size-10 border border-border grid place-items-center">
                    <Icon className="size-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-2">
                    {s.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed max-w-[40ch] mb-4">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs font-mono uppercase tracking-wider flex items-start gap-2"
                    >
                      <CheckCircle2 className="size-3.5 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engagement models */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-y border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
            Engagement Models
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 max-w-2xl">
            Three ways to work together.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {engagements.map((e) => (
              <div
                key={e.tag}
                className={`p-6 flex flex-col gap-4 min-h-[320px] ${
                  e.highlight ? "bg-foreground text-background" : "bg-background"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] font-bold ${e.highlight ? "text-accent" : "text-accent"}`}>
                    {e.tag}
                  </span>
                  {e.highlight && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 bg-accent text-background">
                      POPULAR
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">{e.title}</h3>
                  <div className="text-2xl font-extrabold tracking-tighter mt-1">{e.price}</div>
                </div>
                <p className={`text-xs leading-relaxed ${e.highlight ? "text-background/70" : "text-muted"}`}>
                  {e.desc}
                </p>
                <ul className={`space-y-2 mt-auto pt-4 border-t ${e.highlight ? "border-white/15" : "border-border"}`}>
                  {e.features.map((f) => (
                    <li key={f} className="text-[11px] font-mono uppercase flex gap-2">
                      <span className="text-accent">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 max-w-2xl">
            Not sure which service fits?
          </h2>
          <p className="text-muted text-sm mb-8 max-w-[48ch]">
            Tell us about your project — we'll recommend a path and a realistic budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background py-4 px-8 font-bold text-sm hover:bg-accent transition-colors"
          >
            START A CONVERSATION <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
