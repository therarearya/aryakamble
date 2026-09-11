import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const navLink =
  "rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-foreground hover:text-background";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="display text-2xl tracking-tight">
          {site.name}
          <span className="ml-2 text-coral">✳</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Link to="/" hash="work" className={navLink}>
            Work
          </Link>
          <Link to="/" hash="about" className={navLink}>
            About
          </Link>
          <Link to="/" hash="experience" className={navLink}>
            Journey
          </Link>
          <Link to="/" hash="contact" className={navLink}>
            Contact
          </Link>
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] text-background transition-opacity hover:opacity-80"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-12 text-xs uppercase tracking-[0.16em] text-ivory/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ivory"
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
    <div className="mb-12 flex items-center gap-6 border-t border-border pt-5">
      <span className="kicker">({num})</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="kicker text-foreground">{label}</span>
    </div>
  );
}
