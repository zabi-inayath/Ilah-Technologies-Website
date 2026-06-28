import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/lib/portfolio-data";
import { ArrowUpRight, CheckCircle2, Globe2, Layers, Trophy } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ilah Technologies" },
      {
        name: "description",
        content:
          "Selected deployments and case studies by ilah Technologies — custom software, web apps, CRMs and more.",
      },
      { property: "og:title", content: "Portfolio — ilah Technologies" },
      {
        property: "og:description",
        content: "Selected client deployments by ilah Technologies.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const categories = ["ALL", "WEB", "MOBILE", "CRM", "SOFTWARE", "SEO"];

function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(portfolio.length / itemsPerPage);

  const currentProjects = portfolio.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-5 pt-12 pb-10 border-b border-border md:px-10 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest mb-4">
            The Archive
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Selected work.
          </h1>
          <p className="text-muted text-sm md:text-base max-w-[52ch] leading-relaxed">
            A growing record of deployments for regional and global partners. New case studies are
            added as projects ship.
          </p>
        </div>
      </header>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            { icon: Layers, k: "20+", v: "Products shipped" },
            { icon: Trophy, k: "100%", v: "Success rate" },
            { icon: Globe2, k: "UK · IN", v: "Active regions" },
            { icon: CheckCircle2, k: "0", v: "Failed deployments" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5 flex flex-col gap-3">
              <s.icon className="size-4 text-accent" strokeWidth={1.5} />
              <div className="text-2xl md:text-3xl font-extrabold tracking-tighter">{s.k}</div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category strip */}
      <section className="px-5 py-6 md:px-10 border-b border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest mr-2 shrink-0">
            FILTER /
          </span>
          {categories.map((c, i) => (
            <span
              key={c}
              className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 border shrink-0 ${i === 0
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted"
                }`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-foreground text-background px-5 py-14 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-y-16">
            {currentProjects.map((item, i) => {
              const card = (
                <div className="group">
                  <div className="w-full aspect-video bg-neutral-800 outline outline-1 -outline-offset-1 outline-white/5 grid place-items-center mb-4 overflow-hidden relative">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 size-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                          }}
                        />
                        <div className="text-center relative">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                            PROJ_{String((currentPage - 1) * itemsPerPage + i + 1).padStart(2, "0")}_PENDING
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block mt-2">
                            IMAGE PLACEHOLDER
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 bg-background/10 backdrop-blur border border-white/10 font-mono text-[9px] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      {item.status}
                    </div>
                    {item.url && (
                      <div className="absolute top-3 right-3 size-7 bg-background/10 backdrop-blur border border-white/10 grid place-items-center group-hover:bg-accent transition-colors">
                        <ArrowUpRight className="size-3.5 text-white" strokeWidth={2} />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                      <h4 className="font-bold truncate">{item.title}</h4>
                      <p className="text-[10px] font-mono text-background/50 uppercase tracking-wider mt-1">
                        {item.category} / {item.year}
                      </p>
                    </div>
                    <div className="size-8 border border-white/20 grid place-items-center shrink-0">
                      <div className="size-1.5 bg-accent" />
                    </div>
                  </div>
                </div>
              );

              return item.url ? (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <div key={item.id}>{card}</div>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-background/50">
            {totalPages > 1 ? (
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 1}
                  className="hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-background/50"
                >
                  &larr; PREV
                </button>
                <span className="text-white">
                  PAGE {currentPage} / {totalPages}
                </span>
                <button 
                  onClick={handleNextPage} 
                  disabled={currentPage === totalPages}
                  className="hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-background/50"
                >
                  NEXT &rarr;
                </button>
              </div>
            ) : (
              <span>More case studies in progress · check back soon</span>
            )}
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ARCHIVE_SYNC · LIVE
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 max-w-2xl">
            Your project, next in the archive.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background py-4 px-8 font-bold text-sm hover:bg-accent transition-colors"
          >
            START A PROJECT <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
