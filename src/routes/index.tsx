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
        <section id="work" className="scroll-mt-20 pb-28">
          {/* Dark editorial header */}
          <div className="ink-panel">
            <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
              <div className="flex items-center gap-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-ivory/70">
                  03 / Selected work
                </p>
                <span className="h-px flex-1 bg-ivory/25" aria-hidden="true" />
                <p className="hidden text-[11px] uppercase tracking-[0.26em] text-ivory/70 sm:block">
                  Ideas → Content → Impact
                </p>
              </div>
              <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                <h2 className="display text-[15vw] leading-[0.9] text-ivory sm:text-[10vw] lg:text-[8rem]">
                  Selected
                  <br />
                  <span className="mr-4 inline-block align-middle text-[0.5em] text-ivory/80">✳</span>
                  Work
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-ivory/80">
                  Eight projects, each with its own case study — the thinking, the execution and the
                  work as it actually shipped. Real briefs. Real budgets. Real posts.
                </p>
              </div>
            </div>
          </div>

          {/* Card grid */}
          <div className="mx-auto max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c, i) => {
                const dark = (i + Math.floor(i / 3)) % 2 === 1;
                return (
                  <Link
                    key={c.slug}
                    to="/work/$slug"
                    params={{ slug: c.slug }}
                    className={`group flex flex-col overflow-hidden border transition-transform duration-300 hover:-translate-y-1 ${
                      dark ? "ink-panel border-transparent" : "blush-wash border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-4 px-7 pt-7">
                      <span
                        className={`display text-4xl sm:text-5xl ${dark ? "text-ivory" : "text-foreground"}`}
                      >
                        {c.num}
                      </span>
                      <span
                        className={`h-px flex-1 ${dark ? "bg-ivory/30" : "bg-border"}`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-[10px] uppercase leading-tight tracking-[0.18em] ${
                          dark ? "text-ivory/70" : "text-muted-foreground"
                        }`}
                      >
                        {c.discipline}
                      </span>
                    </div>
                    <div className="mt-6 overflow-hidden px-7">
                      <img
                        src={c.cover}
                        alt={c.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                      <h3
                        className={`display text-2xl leading-tight sm:text-[1.7rem] ${
                          dark ? "text-ivory" : "text-foreground"
                        }`}
                      >
                        {c.title}
                      </h3>
                      <p
                        className={`mt-3 text-[13px] leading-relaxed ${
                          dark ? "text-ivory/70" : "text-muted-foreground"
                        }`}
                      >
                        {c.summary}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-7">
                        <span
                          className={`text-[10px] uppercase tracking-[0.22em] transition-colors ${
                            dark ? "text-ivory/75 group-hover:text-ivory" : "text-foreground/75 group-hover:text-coral"
                          }`}
                        >
                          View project
                        </span>
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full border text-base transition-all duration-300 group-hover:rotate-45 ${
                            dark
                              ? "border-ivory/50 text-ivory"
                              : "border-foreground/40 text-foreground group-hover:border-coral group-hover:text-coral"
                          }`}
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
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
