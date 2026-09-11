import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { caseStudies, getCaseStudy, type Block } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found — Arya Kamble" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — ${study.client} | Arya Kamble`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
});

function SectionHead({ num, kicker, heading }: { num: string; kicker: string; heading: string }) {
  return (
    <div className="mb-10 border-t border-border pt-5">
      <div className="flex items-center gap-6">
        <span className="kicker">({num})</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
        <span className="kicker text-foreground">{kicker}</span>
      </div>
      <h2 className="display mt-8 max-w-3xl text-4xl sm:text-6xl">{heading}</h2>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          <div className="grid gap-6 md:grid-cols-2">
            {block.paras.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </section>
      );

    case "stats":
      return (
        <section className="grid gap-px bg-border sm:grid-cols-3">
          {block.items.map((s) => (
            <div key={s.label} className="blush-wash bg-background p-8">
              <div className="display text-6xl">{s.value}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>
      );

    case "bullets":
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          <ul className="grid gap-0 border-t border-border">
            {block.items.map((i) => (
              <li
                key={i}
                className="border-b border-border py-5 text-base leading-relaxed text-muted-foreground"
              >
                <span className="mr-4 text-coral">✳</span>
                {i}
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {block.items.map((s, i) => (
              <div key={s.title} className="bg-background p-8">
                <span className="display block text-5xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "phases":
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          <div className="grid gap-px bg-border md:grid-cols-3">
            {block.items.map((p) => (
              <div key={p.tag} className="flex flex-col justify-between gap-6 bg-background p-8">
                <div>
                  <span className="kicker">{p.tag}</span>
                  <h3 className="display mt-5 text-3xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] uppercase tracking-[0.18em] text-coral hover:underline"
                  >
                    {p.cta} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case "media":
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          <div className="blush-wash flex flex-col items-start gap-6 border border-border p-10">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {block.body}
            </p>
            <a
              href={block.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-85"
            >
              {block.cta} ↗
            </a>
          </div>
        </section>
      );

    case "gallery": {
      const cols =
        block.columns === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : block.columns === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2";
      return (
        <section className="py-14">
          <SectionHead num={block.num} kicker={block.kicker} heading={block.heading} />
          {block.note && (
            <p className="-mt-2 mb-8 max-w-2xl text-sm text-muted-foreground">{block.note}</p>
          )}
          <div className={`grid gap-5 ${cols}`}>
            {block.items.map((item, i) => {
              const media = (
                <figure className="group">
                  <div className="overflow-hidden rounded-sm border border-border bg-card">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  {(item.label || item.caption) && (
                    <figcaption className="mt-3">
                      {item.label && (
                        <p className="text-xs uppercase tracking-[0.16em]">{item.label}</p>
                      )}
                      {item.caption && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.caption}
                        </p>
                      )}
                      {item.href && (
                        <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.16em] text-coral">
                          {item.cta ?? "Open"} ↗
                        </span>
                      )}
                    </figcaption>
                  )}
                </figure>
              );
              return item.href ? (
                <a key={`${item.src}-${i}`} href={item.href} target="_blank" rel="noreferrer">
                  {media}
                </a>
              ) : (
                <div key={`${item.src}-${i}`}>{media}</div>
              );
            })}
          </div>
        </section>
      );
    }
  }
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length]!;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="pt-14">
          <Link
            to="/"
            hash="work"
            className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-coral"
          >
            ← Back to selected work
          </Link>
        </div>

        <header className="reveal-up border-b border-border py-16">
          <div className="flex items-center gap-6">
            <span className="kicker">({study.num})</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="kicker text-foreground">
              {study.client} · {study.discipline}
            </span>
          </div>
          <h1 className="display mt-10 max-w-4xl text-6xl sm:text-8xl">{study.title}</h1>
          <p className="mt-10 max-w-2xl text-sm uppercase leading-relaxed tracking-[0.06em] text-muted-foreground">
            {study.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {study.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}

        <section className="border-t border-border py-20">
          <p className="kicker">Next project ✳</p>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="group mt-8 block">
            <h2 className="display text-5xl transition-colors group-hover:text-coral sm:text-7xl">
              {next.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {next.summary}
            </p>
          </Link>
        </section>

        <section className="border-t border-border py-16">
          <p className="text-sm text-muted-foreground">
            Want something like this?{" "}
            <a href={`mailto:${site.email}`} className="text-coral hover:underline">
              {site.email}
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
