import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { services } from "@/lib/services-data";
import { serviceIcons } from "@/lib/service-icons";
import { ArrowUpRight } from "lucide-react";
import blueprintImg from "@/assets/blueprint-hero.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilah Technologies | Premier Web, Mobile & Custom Software Engineering" },
      {
        name: "description",
        content:
          "Ilah Technologies engineers high-performance websites, mobile apps, CRMs and custom business software from Vaniyambadi, Tamil Nadu. We deliver robust digital infrastructure for ambitious businesses worldwide.",
      },
      { name: "keywords", content: "software development, web development, mobile apps, CRM, React, Next.js, Vaniyambadi, Tamil Nadu, Ilah Technologies, custom software" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ilah Technologies | Web, Mobile & Custom Software" },
      {
        property: "og:description",
        content: "Engineering high-performance digital infrastructure for ambitious businesses.",
      },
      { property: "og:url", content: "https://ilahtech.in/" },
      { property: "og:image", content: "https://ilahtech.in/ilahtech_logo.jpg" },
      { property: "og:site_name", content: "Ilah Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ilah Technologies | Web, Mobile & Custom Software" },
      { name: "twitter:description", content: "Engineering high-performance digital infrastructure for ambitious businesses." },
      { name: "twitter:image", content: "https://ilahtech.in/ilahtech_logo.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://ilahtech.in/" },
      { rel: "icon", href: "/ilahtech_logo.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ilah Technologies",
          "url": "https://ilahtech.in",
          "logo": "https://ilahtech.in/ilahtech_logo.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-744-855-2778",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/ilah-technologies/",
            "https://www.instagram.com/ilahtechnologies/"
          ]
        })
      }
    ]
  }),
  component: Index,
});

const techStack = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "EXPRESS.JS", "POSTGRES", "TAILWIND",
  "REACT NATIVE", "SUPABASE", "AWS", "STRIPE", "TWILIO", "SENDGRID", "RAZORPAY",
  "FIREBASE", "MONGODB", "VERCEL", "CLOUDFLARE",
];

const locations = [
  { city: "UNITED STATES", country: "USA", code: "USA" },
  { city: "MUMBAI", country: "IN", code: "BOM" },
  { city: "HYDERABAD", country: "IN", code: "HYD" },
  { city: "KOLKATA", country: "IN", code: "CCU" },
  { city: "KASHMIR", country: "IN", code: "SXR" },
  { city: "CHENNAI", country: "IN", code: "MAA" },
  { city: "VANIYAMBADI", country: "IN", code: "HQ" },
];

const testimonials = [
  {
    quote:
      "ilah Technologies rebuilt our entire optical store workflow with Optical CRM. Inventory, prescriptions, billing — every counter runs on it now. Zero downtime since launch.",
    author: "Dr. Imran A.",
    role: "Director, Optical Retail Chain",
    location: "Hyderabad, IN",
  },
  {
    quote:
      "We engaged ilah for a custom logistics dashboard. Delivered on time, fixed price, and the code is genuinely clean. Rare combination.",
    author: "Sarah Whitford",
    role: "Operations Lead",
    location: "London, UK",
  },
  {
    quote:
      "Our website traffic tripled in four months after their SEO and rebuild. They actually understand search, not just keywords.",
    author: "Rohan Mehta",
    role: "Founder, D2C Brand",
    location: "Mumbai, IN",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent">
      <SiteNav />

      {/* Hero */}
      <header className="relative px-5 pt-12 pb-10 border-b border-border md:px-10 md:pt-20 md:pb-16 overflow-hidden">
        {/* Grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4 animate-reveal">
            <div className="inline-block px-2 py-0.5 border border-accent text-accent text-[10px] font-mono font-bold">
              SYSTEMS ARCHITECTURE / INDIA
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 border border-border text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted">LIVE · ACCEPTING Q3 / 2026</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-balance mb-6 animate-reveal max-w-7xl">
            Engineering High-Performance Digital Infrastructure
            <span className="inline-block w-3 h-[0.8em] ml-1 bg-accent translate-y-1 animate-blink" />
          </h1>

          <p className="text-muted text-sm md:text-base max-w-[48ch] leading-relaxed mb-8 animate-reveal">
            ilah Technologies delivers custom software, scalable web apps, mobile apps and
            enterprise CRM solutions from the heart of Vaniyambadi.
          </p>

          <div className="flex flex-col md:flex-row gap-3 animate-reveal md:max-w-xl">
            <Link
              to="/contact"
              className="bg-foreground text-background text-center py-4 px-6 font-bold text-sm hover:bg-accent transition-colors md:flex-1"
            >
              START A PROJECT
            </Link>
            <Link
              to="/services"
              className="border border-border text-center py-4 px-6 font-bold text-sm hover:border-foreground transition-colors md:flex-1"
            >
              VIEW SERVICES
            </Link>
          </div>

          {/* Tech telemetry strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-2xl">
            <div className="border border-border p-3">
              <div className="text-[10px] font-mono text-muted mb-1">PROJECTS</div>
              <div className="text-xs font-bold">20+ DELIVERED</div>
            </div>
            <div className="border border-border p-3">
              <div className="text-[10px] font-mono text-muted mb-1">SUCCESS RATE</div>
              <div className="text-xs font-bold">100.00%</div>
            </div>
            <div className="border border-border p-3">
              <div className="text-[10px] font-mono text-muted mb-1">REACH</div>
              <div className="text-xs font-bold">7 CITIES · 2 COUNTRIES</div>
            </div>
            <div className="border border-border p-3">
              <div className="text-[10px] font-mono text-muted mb-1">UPTIME</div>
              <div className="text-xs font-bold">99.98% SLA</div>
            </div>
          </div>

          {/* Terminal preview card */}
          <div className="mt-10 border border-border bg-foreground text-background font-mono text-[11px] md:text-xs animate-reveal max-w-2xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-background/50">ilah@core:~</span>
            </div>
            <div className="p-4 leading-relaxed space-y-1">
              <div><span className="text-accent">$</span> ilah deploy --client="optical-crm" --env=prod</div>
              <div className="text-background/60">→ building bundle ............ ok</div>
              <div className="text-background/60">→ running migrations ......... ok</div>
              <div className="text-background/60">→ health checks .............. 200</div>
              <div><span className="text-green-400">✓</span> deployed in 42.7s · region: ap-south-1</div>
              <div className="flex items-center gap-1"><span className="text-accent">$</span> <span className="inline-block w-2 h-3.5 bg-background/80 animate-blink" /></div>
            </div>
          </div>
        </div>


        {/* Blueprint visual */}
        <div className="max-w-5xl mx-auto mt-12 relative border border-border overflow-hidden">
          <img
            src={blueprintImg}
            alt="Engineering blueprint of ilah Technologies systems architecture"
            width={1920}
            height={900}
            loading="lazy"
            className="w-full h-auto aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 bg-background/80 backdrop-blur border border-border font-mono text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            BLUEPRINT · REV.024
          </div>
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-background/80 backdrop-blur border border-border font-mono text-[9px]">
            SCALE 1:1 · MM
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                Systems Architecture
              </div>
              <div className="text-lg md:text-2xl font-extrabold tracking-tighter">
                Built for scale. Drawn with intent.
              </div>
            </div>
            <div className="font-mono text-[9px] text-muted hidden md:block">
              DWG · ILAH/CORE/2025
            </div>
          </div>
        </div>


        {/* Tech marquee */}
        <div className="relative mt-12 border-y border-border -mx-5 md:-mx-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="font-mono text-[11px] font-bold tracking-widest px-6 text-muted">
                {t} <span className="text-accent">●</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-8 gap-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase">
              Capabilities
            </h2>
            <span className="text-[10px] font-mono text-muted shrink-0">08 CORE SERVICES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.num}
                  to="/services"
                  className="bg-background p-5 flex flex-col gap-4 min-h-[180px] group hover:bg-secondary/60 transition-colors relative"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] text-accent font-bold">{s.num}</span>
                    <div className="size-9 border border-border grid place-items-center group-hover:border-accent group-hover:text-accent transition-colors">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{s.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mt-auto">{s.short}</p>
                  <ArrowUpRight
                    className="size-3.5 text-muted absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-opacity"
                    strokeWidth={2}
                  />
                </Link>
              );
            })}
          </div>


          <Link
            to="/services"
            className="inline-block mt-8 text-xs font-mono uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Full service breakdown →
          </Link>
        </div>
      </section>

      {/* Track record / Global reach */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-y border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-10 gap-4">
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
                Track Record
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter max-w-2xl">
                20+ products shipped across 2 countries.
              </h2>
            </div>
            <span className="text-[10px] font-mono text-muted shrink-0 hidden md:block">GLOBAL_REACH.LOG</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-10">
            {[
              { k: "20+", v: "PROJECTS DELIVERED" },
              { k: "100%", v: "SUCCESS RATE" },
              { k: "07", v: "CITIES SERVED" },
              { k: "24/7", v: "MONITORING" },
            ].map((s) => (
              <div key={s.v} className="bg-background p-5 md:p-6">
                <div className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-2">{s.k}</div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="border border-border bg-background">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/60">
              <span className="text-[10px] font-mono font-bold">DEPLOYMENT_NODES.TSV</span>
              <span className="text-[10px] font-mono text-muted">{locations.length} ACTIVE</span>
            </div>
            <div className="divide-y divide-border font-mono text-xs">
              {locations.map((l, i) => (
                <div key={l.code} className="grid grid-cols-[40px_1fr_auto_auto] items-center gap-4 px-4 py-3">
                  <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-bold">{l.city}</span>
                  <span className="text-muted text-[10px]">{l.country}</span>
                  <span className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {l.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product: Optical CRM */}
      {/* <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
            Featured Product
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 max-w-3xl">
            Optical CRM — the operating system for modern optical stores.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,1.2fr)] gap-px bg-border border border-border">
            <div className="bg-background p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-accent font-bold">PRODUCT / 01</span>
                <span className="font-mono text-[10px] text-muted">v2.4 · STABLE</span>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight mb-2">Optical CRM</div>
                <p className="text-sm text-muted leading-relaxed">
                  Purpose-built for optical retail — prescription tracking, lens & frame inventory,
                  GST billing, customer history, and multi-counter sync. Battle-tested across live
                  stores.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border border border-border mt-auto">
                {[
                  ["UPTIME", "99.98%"],
                  ["STORES", "LIVE"],
                  ["BILLING", "GST READY"],
                  ["SYNC", "REAL-TIME"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background p-3">
                    <div className="text-[9px] font-mono text-muted mb-1">{k}</div>
                    <div className="text-xs font-bold">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-background p-6 md:p-8">
              <div className="font-mono text-[10px] text-background/50 mb-4">FEATURE_MATRIX.MD</div>
              <ul className="space-y-3 text-sm">
                {[
                  "Prescription & eye-test history per customer",
                  "Frame, lens & contact-lens inventory with low-stock alerts",
                  "GST-compliant invoicing & thermal print",
                  "Multi-counter, multi-branch real-time sync",
                  "Daily / monthly sales analytics & exports",
                  "Customer reminders via SMS / WhatsApp",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-accent font-mono shrink-0">▸</span>
                    <span className="text-background/85">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-8 text-[11px] font-mono uppercase tracking-widest border-b border-background pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Request a demo →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-10 gap-4">
            <div>
              <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
                Client Signal
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter max-w-2xl">
                What teams say after we ship.
              </h2>
            </div>
            <span className="text-[10px] font-mono text-muted shrink-0 hidden md:block">VERIFIED · 100% CSAT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-background p-6 flex flex-col gap-5 min-h-[260px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent font-bold">
                    TESTIMONIAL / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-accent">★★★★★</span>
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground">
                  <span className="text-accent font-mono mr-1">“</span>
                  {t.quote}
                  <span className="text-accent font-mono ml-1">”</span>
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-border">
                  <div className="text-xs font-bold">{t.author}</div>
                  <div className="text-[11px] text-muted">{t.role}</div>
                  <div className="text-[10px] font-mono text-muted mt-1">{t.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-foreground text-background px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            How We Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-12 max-w-2xl">
            Discovery to deployment, with a real engineer on every call.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { n: "01", t: "Discovery", d: "Workflows, constraints, success metrics." },
              { n: "02", t: "Architecture", d: "Stack, data model, integrations." },
              { n: "03", t: "Build", d: "Iterative delivery with weekly demos." },
              { n: "04", t: "Deploy & Support", d: "Launch, monitor, evolve." },
            ].map((p) => (
              <div key={p.n} className="bg-foreground p-5 flex flex-col gap-3 min-h-[140px]">
                <span className="font-mono text-[10px] text-accent font-bold">{p.n}</span>
                <h3 className="font-bold text-base">{p.t}</h3>
                <p className="text-xs text-background/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 md:px-10 md:py-24 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 max-w-3xl">
            Have a system to build? Let's scope it.
          </h2>
          <p className="text-muted text-sm md:text-base max-w-[48ch] mb-8">
            Tell us the problem. We'll come back with a plan, a timeline, and a fixed quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-foreground text-background py-4 px-8 font-bold text-sm hover:bg-accent transition-colors"
          >
            START A PROJECT
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
