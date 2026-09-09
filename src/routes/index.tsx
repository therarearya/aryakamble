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
        <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <p className="kicker reveal-up">{site.role}</p>
          <h1 className="display reveal-up mt-6 text-[15vw] leading-[0.84] sm:text-[11vw] lg:text-[9.5rem]">
            Arya
            <br />
            Kamble
          </h1>
          <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{site.intro}</p>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {site.location}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="work"
                  className="bg-accent px-6 py-3 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-85"
                >
                  See the work →
                </Link>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <Marquee words={marqueeWords} />

        {/* About */}
        <section id="about" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-24 sm:px-8">
          <SectionLabel num="01" label="About" />
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <h2 className="display text-4xl sm:text-6xl">
              Marketing that thinks.
              <br />
              <span className="text-accent">Content that moves.</span>
            </h2>
            <div className="space-y-6">
              {aboutCopy.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mx-auto max-w-[1240px] px-5 pb-24 sm:px-8">
          <SectionLabel num="02" label="Impact" />
          <div className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="border-b border-r border-t border-border p-7">
                <div className="display text-5xl text-accent">{m.value}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pb-24 sm:px-8">
          <SectionLabel num="03" label="Selected work" />
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-xl text-4xl sm:text-6xl">
              Real briefs. Real budgets. Real posts.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
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
                className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-card md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:px-4"
              >
                <span className="kicker text-muted-foreground">{c.num}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.client} · {c.discipline}
                  </p>
                  <h3 className="display mt-3 text-3xl transition-colors group-hover:text-accent sm:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent">
                  Case study ↗
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pb-24 sm:px-8">
          <SectionLabel num="04" label="Journey" />
          <h2 className="display mb-12 text-4xl sm:text-6xl">Where the work happened.</h2>
          <div className="space-y-0">
            {experience.map((e) => (
              <div
                key={e.role + e.company}
                className="grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr] md:gap-12"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{e.date}</p>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{e.role}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                    {e.company}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1240px] px-5 pb-24 sm:px-8">
          <SectionLabel num="05" label="What I can do" />
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border-t border-foreground/40 pt-5">
                <h3 className="display text-xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-border bg-card">
          <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8">
            <p className="kicker">06 / Contact</p>
            <h2 className="display mt-6 text-5xl sm:text-8xl">
              Let's make something
              <br />
              people remember.
            </h2>
            <p className="mt-8 max-w-lg text-base text-muted-foreground">
              For marketing, social media, content, campaign or brand projects, reach me directly.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="bg-accent px-7 py-4 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-85"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
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
