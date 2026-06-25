import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ilah Technologies" },
      {
        name: "description",
        content:
          "Get in touch with ilah Technologies. Call +91 744 855 2778 or email ilahtechnologies@gmail.com.",
      },
      { property: "og:title", content: "Contact — ilah Technologies" },
      {
        property: "og:description",
        content: "Call +91 744 855 2778 or email ilahtechnologies@gmail.com.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Marketing sites: 2–3 weeks. Custom apps and CRMs: 6–12 weeks depending on scope. We share a fixed timeline after discovery.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we currently serve clients in the UK and across India. All collaboration happens over async tools, weekly demos, and scheduled calls.",
  },
  {
    q: "What does a project cost?",
    a: "Fixed-scope work starts from ₹25k. Full product builds are quoted after a free discovery call. No hidden retainers.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Every project includes 30 days of post-launch support. Long-term retainers are available for continuous delivery and monitoring.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Often, yes. We start with a free code audit to assess complexity, debt, and feasibility before quoting any rework.",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-5 pt-12 pb-10 border-b border-border md:px-10 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            Direct Terminal
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Start the conversation.
          </h1>
          <p className="text-muted text-sm md:text-base max-w-[52ch] leading-relaxed">
            Reach us directly. We respond within one business day.
          </p>
        </div>
      </header>

      {/* SLA strip */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            { icon: Clock, k: "< 24h", v: "Response time" },
            { icon: MessageSquare, k: "FREE", v: "Discovery call" },
            { icon: Globe2, k: "2", v: "Countries served" },
            { icon: MapPin, k: "07", v: "Cities active" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5 flex flex-col gap-3">
              <s.icon className="size-4 text-accent" strokeWidth={1.5} />
              <div className="text-2xl md:text-3xl font-extrabold tracking-tighter">{s.k}</div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact channels */}
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-border border border-border">
          <a
            href="tel:+917448552778"
            className="bg-background p-8 flex flex-col gap-4 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center justify-between">
              <Phone className="size-5 text-accent" strokeWidth={1.5} />
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Telephone
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
              +91 744 855 2778
            </div>
            <div className="text-xs text-muted mt-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available Mon–Sat · 09:00–19:00 IST
            </div>
          </a>
          <a
            href="mailto:ilahtechnologies@gmail.com"
            className="bg-background p-8 flex flex-col gap-4 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center justify-between">
              <Mail className="size-5 text-accent" strokeWidth={1.5} />
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Electronic Mail
              </div>
            </div>
            <div className="text-xl md:text-2xl font-extrabold tracking-tight break-all">
              ilahtechnologies@gmail.com
            </div>
            <div className="text-xs text-muted mt-auto">Replies within one business day</div>
          </a>
          <div className="bg-background p-8 flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center justify-between">
              <MapPin className="size-5 text-accent" strokeWidth={1.5} />
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Office
              </div>
            </div>
            <div className="text-xl md:text-2xl font-extrabold tracking-tight">
              Vaniyambadi, Tamil Nadu, India
            </div>
            <div className="text-xs text-muted">
              By appointment · Remote engagements served globally.
            </div>
            <div className="mt-3 grid grid-cols-3 gap-px bg-border border border-border max-w-md">
              <div className="bg-background p-2.5">
                <div className="text-[9px] font-mono text-muted">LAT</div>
                <div className="text-[11px] font-bold">12.6841° N</div>
              </div>
              <div className="bg-background p-2.5">
                <div className="text-[9px] font-mono text-muted">LON</div>
                <div className="text-[11px] font-bold">78.6111° E</div>
              </div>
              <div className="bg-background p-2.5">
                <div className="text-[9px] font-mono text-muted">TZ</div>
                <div className="text-[11px] font-bold">UTC+05:30</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoping helper */}
      <section className="bg-foreground text-background px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            What to include
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 max-w-2xl">
            Help us scope faster.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { t: "Problem", d: "What are you trying to solve or improve?" },
              { t: "Audience", d: "Who uses this system — customers, staff, partners?" },
              { t: "Timeline", d: "When do you need a first usable version?" },
              { t: "Budget range", d: "Even a rough range helps us recommend the right path." },
            ].map((p) => (
              <div key={p.t} className="bg-foreground p-6 flex flex-col gap-2">
                <h3 className="font-bold text-base">{p.t}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14 md:px-10 md:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-3">
            FAQ · 05 Entries
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 max-w-2xl">
            Frequently asked.
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-accent font-bold pt-1.5">
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-base md:text-lg">{f.q}</h3>
                  </div>
                  <span className="font-mono text-accent text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-sm text-muted leading-relaxed mt-4 pl-[60px] max-w-[62ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
