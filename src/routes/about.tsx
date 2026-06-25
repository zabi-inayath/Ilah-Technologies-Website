import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  GitBranch,
  Award,
  MapPin,
  Calendar,
  Target,
  ArrowUpRight,
} from "lucide-react";
import workspaceImg from "@/assets/workspace.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ilah Technologies" },
      {
        name: "description",
        content:
          "ilah Technologies is an IT services and software engineering studio based in Vaniyambadi, Tamil Nadu, India.",
      },
      { property: "og:title", content: "About — ilah Technologies" },
      {
        property: "og:description",
        content: "Engineering studio based in Vaniyambadi, Tamil Nadu.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stackCategories = [
  { icon: Code2, label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "TanStack"] },
  { icon: Database, label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "tRPC"] },
  { icon: Smartphone, label: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { icon: Cloud, label: "Infra", items: ["AWS", "Cloudflare", "Vercel", "Docker", "Supabase"] },
  { icon: Palette, label: "Design", items: ["Figma", "Framer", "Lottie", "Spline"] },
  { icon: GitBranch, label: "Tooling", items: ["Git", "GitHub Actions", "Linear", "Sentry", "Plausible"] },
];

const timeline = [
  { year: "2024", title: "Studio Founded", desc: "ilah Technologies established in Vaniyambadi, Tamil Nadu." },
  { year: "2024", title: "First 10 Deployments", desc: "Shipped initial cohort across web, CRM, and business software." },
  { year: "2025", title: "Optical CRM v1", desc: "Released our flagship vertical product for optical retail." },
  { year: "2025", title: "International Reach", desc: "First UK client onboarded. Expanded to 7 cities." },
  { year: "2026", title: "20+ Projects · 100% Success", desc: "Crossed the 20-project milestone with zero failed deployments." },
];

const stats = [
  { icon: Award, k: "100%", v: "Project success rate" },
  { icon: MapPin, k: "07", v: "Cities served · 2 countries" },
  { icon: Calendar, k: "24h", v: "Response time, business days" },
  { icon: Target, k: "20+", v: "Products in production" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-5 pt-12 pb-10 border-b border-border md:px-10 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            About the studio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Software engineered from Tamil Nadu.
          </h1>
          <p className="text-muted text-sm md:text-base max-w-[52ch] leading-relaxed">
            ilah Technologies is a small, senior team building production software for businesses
            that take their digital systems seriously.
          </p>
        </div>
      </header>

      {/* Stats strip */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.v} className="bg-background p-5 md:p-6 flex flex-col gap-3">
              <s.icon className="size-4 text-accent" strokeWidth={1.5} />
              <div className="text-3xl md:text-4xl font-extrabold tracking-tighter">{s.k}</div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission + image */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <div className="space-y-8">
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
                Mission
              </div>
              <p className="text-base leading-relaxed">
                Build digital infrastructure that quietly works — software you stop thinking about
                because it just runs.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
                How we engage
              </div>
              <p className="text-base leading-relaxed">
                Direct communication, weekly demos, fixed milestones. No middlemen, no inflated
                estimates, no surprise invoices.
              </p>
            </div>
          </div>
          <div className="relative border border-border">
            <img
              src={workspaceImg}
              alt="Engineer workspace with code and notebook"
              width={1600}
              height={1024}
              loading="lazy"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 border border-background bg-foreground text-background font-mono text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ILAH/CORE · LIVE
            </div>
            <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-background border border-border font-mono text-[9px]">
              VANIYAMBADI · 12.68°N
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-b border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-10 gap-4">
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
                Technology
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter max-w-2xl">
                The stack we deploy with.
              </h2>
            </div>
            <span className="text-[10px] font-mono text-muted shrink-0 hidden md:block">
              STACK_MANIFEST.JSON
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {stackCategories.map((c) => (
              <div key={c.label} className="bg-background p-5 flex flex-col gap-4 min-h-[160px]">
                <div className="flex items-center gap-3">
                  <div className="size-9 border border-border grid place-items-center">
                    <c.icon className="size-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">{c.label}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {c.items.map((i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
            Timeline
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 max-w-2xl">
            Where we've been.
          </h2>
          <ol className="relative border-l-2 border-border pl-6 md:pl-10 space-y-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] md:-left-[47px] top-1 size-3 bg-accent border-2 border-background" />
                <div className="font-mono text-[10px] text-accent font-bold mb-1">{t.year}</div>
                <h3 className="text-lg font-extrabold tracking-tight mb-1">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[52ch]">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-b border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase mb-10">
            Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                n: "01",
                t: "Engineer first",
                d: "Code quality, performance, and maintainability are non-negotiable.",
              },
              {
                n: "02",
                t: "Honest scope",
                d: "If a feature isn't worth building, we say so before you pay for it.",
              },
              {
                n: "03",
                t: "Own the outcome",
                d: "Shipping is the start. We stay engaged for support and iteration.",
              },
            ].map((p) => (
              <div key={p.n} className="bg-background p-6 min-h-[180px] flex flex-col gap-3">
                <span className="font-mono text-[10px] text-accent font-bold">{p.n}</span>
                <h3 className="font-bold text-lg">{p.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 max-w-2xl">
            Let's build something that lasts.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-background py-4 px-8 font-bold text-sm hover:bg-background hover:text-foreground transition-colors"
          >
            GET IN TOUCH <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
