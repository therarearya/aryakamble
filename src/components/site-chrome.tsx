import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="display text-sm tracking-[0.18em]">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex">
          <Link to="/" hash="work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link to="/" hash="about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/" hash="experience" className="transition-colors hover:text-foreground">
            Journey
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="border border-foreground/30 px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-10 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-t border-border pt-4">
      <span className="kicker">
        {num} / {label}
      </span>
    </div>
  );
}
