import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const navLink =
  "editorial-link text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
        Skip to content
      </a>
      <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between sm:px-8 lg:px-12">
        <Link to="/" className="display min-w-0 truncate text-2xl" onClick={() => setOpen(false)}>
          {site.name}<span className="ml-2 text-coral" aria-hidden="true">/</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link to="/" hash="work" className={navLink}>
            Work
          </Link>
          <Link to="/about" className={navLink}>
            About
          </Link>
          <span className={`${navLink} cursor-not-allowed opacity-45`} aria-disabled="true" title="Resume coming soon">
            Resume
          </span>
          <a href={`mailto:${site.email}`} className={navLink}>
            Contact
          </a>
        </nav>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {open && (
        <nav className="grid border-t border-border px-5 py-3 md:hidden" aria-label="Mobile navigation">
          <Link to="/" hash="work" className="border-b border-border py-4 text-sm" onClick={() => setOpen(false)}>Work</Link>
          <Link to="/about" className="border-b border-border py-4 text-sm" onClick={() => setOpen(false)}>About</Link>
          <span className="border-b border-border py-4 text-sm text-muted-foreground" aria-disabled="true">Resume — coming soon</span>
          <a href={`mailto:${site.email}`} className="py-4 text-sm" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <p className="kicker">Have a project, role or idea in mind?</p>
          <a href={`mailto:${site.email}`} className="display mt-6 block max-w-4xl break-words text-5xl transition-colors hover:text-coral sm:text-7xl">Let’s talk.</a>
        </div>
        <div className="flex items-end gap-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
              className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
        <div className="border-t border-border pt-5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-2">© {new Date().getFullYear()} {site.name} · {site.location}</div>
      </div>
    </footer>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-12 flex items-center gap-6 border-t border-border pt-5">
      <span className="kicker">({num})</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="kicker text-foreground">{label}</span>
    </div>
  );
}
