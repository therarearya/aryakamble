import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/marquee";
import { SectionLabel, SiteFooter, SiteNav } from "@/components/site-chrome";
import { caseStudies } from "@/lib/case-studies";
import {
  aboutCopy,
  experience,
  marqueeWords,
  metrics,
  services,
  site,
  skills,
} from "@/lib/site";

const title = "Arya Kamble — Growth Marketing, Content & Social Portfolio";
const description =
  "Portfolio of Arya Kamble, a Mumbai-based marketer working across growth marketing, branding, content strategy and social media. Campaigns, events, podcasts and brand work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="ink-panel">
          <div className="mx-auto max-w-[1320px] px-5 pb-28 pt-20 sm:px-8 sm:pb-40 sm:pt-28">
            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <div className="reveal-up flex items-center gap-5">
                  <span className="h-px w-16 bg-ivory/40" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[0.26em] text-ivory/70">
                    {site.role}
                  </p>
                </div>
                <h1 className="display reveal-up mt-8 text-[17vw] leading-[0.86] text-ivory sm:text-[11vw] lg:text-[9.5rem]">
                  Arya
                  <span className="px-4 align-middle text-[0.45em] text-ivory/80">✳</span>
                  <br />
                  Kamble
                </h1>
              </div>
              <div className="flex flex-col justify-start gap-8 lg:pt-6">
                <p className="max-w-md text-sm uppercase leading-relaxed tracking-[0.06em] text-ivory/75">
                  {site.intro}
                </p>
                <p className="text-[11px] uppercase tracking-[0.26em] text-ivory/60">
                  {site.location}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/"
                    hash="work"
                    className="rounded-full bg-ivory px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-85"
                  >
                    ↗ See the work
                  </Link>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ivory/40 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory hover:text-ink"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee words={marqueeWords} />

        {/* About */}
        <section id="about" className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-28 sm:px-8">
          <SectionLabel num="01" label="About" />
          <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
            <h2 className="display text-5xl sm:text-7xl">
              Marketing
              <br />
              that thinks.
              <br />
              <span className="text-coral">✳</span> Content that moves.
            </h2>
            <div className="space-y-6 md:pt-3">
              {aboutCopy.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mx-auto max-w-[1320px] px-5 pb-28 sm:px-8">
          <SectionLabel num="02" label="Impact" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="blush-wash bg-background p-8">
                <div className="display text-6xl">{m.value}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pb-28 sm:px-8">
          <SectionLabel num="03" label="Selected work" />
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-2xl text-5xl sm:text-7xl">
              Real briefs. Real budgets.
              <br />
              Real posts.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Eight projects, each with its own case study — the thinking, the execution and the
              work as it actually shipped.
            </p>
          </div>

          <div className="border-t border-border">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group grid gap-4 border-b border-border py-10 transition-colors hover:bg-card md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-12 md:px-5"
              >
                <span className="kicker">({c.num})</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.client} · {c.discipline}
                  </p>
                  <h3 className="display mt-4 text-4xl transition-colors group-hover:text-coral sm:text-6xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-coral">
                  Case study ↗
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pb-28 sm:px-8">
          <SectionLabel num="04" label="Journey" />
          <h2 className="display mb-14 text-5xl sm:text-7xl">Where the work happened.</h2>
          <div className="space-y-0">
            {experience.map((e) => (
              <div
                key={e.role + e.company}
                className="grid gap-5 border-t border-border py-10 md:grid-cols-[240px_1fr] md:gap-14"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {e.date}
                </p>
                <div>
                  <h3 className="display text-3xl sm:text-4xl">{e.role}</h3>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-coral">
                    {e.company}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1320px] px-5 pb-28 sm:px-8">
          <SectionLabel num="05" label="What I can do" />
          <div className="grid gap-px bg-border md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="bg-background p-8">
                <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-6 text-3xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="ink-panel scroll-mt-20">
          <div className="mx-auto max-w-[1320px] px-5 py-28 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.26em] text-ivory/70">06 / Contact</p>
            <h2 className="display mt-8 text-6xl text-ivory sm:text-8xl">
              Let's make something
              <br />
              people remember.
              <span className="ml-4 inline-block text-[0.5em] text-ivory/70">✳</span>
            </h2>
            <p className="mt-10 max-w-lg text-sm uppercase leading-relaxed tracking-[0.06em] text-ivory/75">
              For marketing, social media, content, campaign or brand projects, reach me directly.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ivory px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-85"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ivory/40 px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-ivory hover:text-ink"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
