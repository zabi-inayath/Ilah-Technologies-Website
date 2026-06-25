import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ilah-technologies/" },
  { label: "Instagram", href: "https://www.instagram.com/ilahtechnologies/" },
  { label: "WhatsApp", href: "https://wa.me/917448552778" },
];

export function SiteFooter() {
  return (
    <footer className="px-5 py-16 border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/ilahtech_logo.jpg" alt="Logo" className="h-8 w-auto" />
              <span className="font-extrabold tracking-tighter text-lg">Ilah Technologies</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Engineering high-performance digital infrastructure and robust software solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <div className="text-[10px] font-mono text-accent font-bold mb-6 uppercase tracking-widest">
              Directory
            </div>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm font-medium hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono text-accent font-bold mb-6 uppercase tracking-widest">
              Direct Terminal
            </div>
            <div className="space-y-6">
              <a href="tel:+917448552778" className="block group">
                <div className="text-[10px] text-muted font-mono mb-1 group-hover:text-accent transition-colors">TELEPHONE</div>
                <div className="text-sm font-bold tracking-tight">+91 744 855 2778</div>
              </a>
              <a href="mailto:hello@ilahtech.in" className="block group">
                <div className="text-[10px] text-muted font-mono mb-1 group-hover:text-accent transition-colors">ELECTRONIC MAIL</div>
                <div className="text-sm font-bold tracking-tight break-all">hello@ilahtech.in</div>
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono text-accent font-bold mb-6 uppercase tracking-widest">
              Location
            </div>
            <div className="text-sm text-muted leading-relaxed uppercase font-mono mb-8">
              Ilah Technologies
              <br />
              Vaniyambadi, Tamil Nadu
              <br />
              India
            </div>
            <div className="text-[10px] font-mono text-accent font-bold mb-4 uppercase tracking-widest">
              Network
            </div>
            <ul className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold hover:text-accent transition-colors">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="size-2 bg-green-500 animate-pulse rounded-full" />
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
              System Status: Optimal
            </span>
          </div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Ilah Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
