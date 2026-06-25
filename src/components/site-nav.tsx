import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/ilahtech_logo.jpg" alt="Logo" className="h-8 w-auto" />
          <span className="font-extrabold tracking-tighter text-lg ">Ilah Technologies</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              activeProps={{ className: "text-xs font-mono uppercase tracking-widest text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-[10px] font-mono font-medium bg-foreground text-background px-2 py-1"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-5 py-4 border-b border-border text-sm font-bold uppercase tracking-tight"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
