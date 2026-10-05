import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { caseStudies } from "@/lib/case-studies";
import { capabilities, metrics, site } from "@/lib/site";

const title = "Arya Kamble — Marketing & Creative Portfolio";
const description =
  "Marketing and creative work by Arya Kamble across social media, content strategy, branding, campaigns and creative direction.";

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

function ProjectStory({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  const stat = study.blocks.find((block) => block.kind === "stats");
  const proof = stat?.kind === "stats" ? stat.items[0] : undefined;
  const reverse = index % 2 === 1;

  return (
    <article className="group border-t border-border py-10 sm:py-14">
      <Link
        to="/work/$slug"
        params={{ slug: study.slug }}
        className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10"
        aria-label={`View ${study.title} case study`}
      >
        <div className={`min-w-0 lg:col-span-5 ${reverse ? "lg:order-2 lg:pl-8" : ""}`}>
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
            <span className="text-xs text-coral">{study.num}</span>
            <span className="h-px bg-border" aria-hidden="true" />
            <ArrowUpRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {study.client} / {study.discipline}
          </p>
          <h3 className="display mt-4 text-4xl transition-transform duration-200 group-hover:translate-x-1 sm:text-6xl">
            {study.title}
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
          {proof && (
            <div className="mt-8 border-l border-coral pl-4">
              <strong className="display block text-3xl">{proof.value}</strong>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{proof.label}</span>
            </div>
          )}
          <span className="mt-9 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
            Read case study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
        <div className={`overflow-hidden bg-card lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          <img
            src={study.cover}
            alt={study.title}
            loading={index < 2 ? "eager" : "lazy"}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </Link>
    </article>
  );
}

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <SiteNav />
      <main id="main-content">
        <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="reveal-up flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-coral">Portfolio / 2026</span>
                <span className="h-px w-12 bg-coral" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Mumbai, India</span>
              </div>
              <h1 className="display reveal-up mt-8 text-[clamp(4.5rem,13vw,11rem)] leading-[0.78]">
                Arya<br /><em className="font-normal text-coral">Kamble</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-[10px] uppercase tracking-[0.22em] text-coral">Marketing & Creative</p>
              <p className="mt-5 max-w-md text-xl leading-snug sm:text-2xl">
                I build content, campaigns and brand experiences where strategy meets creativity.
              </p>
              <Button asChild className="mt-8 h-12 rounded-none px-6 text-[10px] uppercase tracking-[0.18em] shadow-none">
                <Link to="/" hash="work">View selected work <ArrowDownRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 border-y border-border sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((capability) => (
              <div key={capability} className="flex min-h-16 items-center border-b border-r border-border px-3 py-3 text-[9px] uppercase leading-relaxed tracking-[0.16em] last:border-r-0 sm:min-h-20 sm:px-4 lg:border-b-0">
                {capability}
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="kicker text-coral">01 / Selected work</p>
                <h2 className="display mt-5 text-6xl sm:text-8xl">The work,<br /><em className="font-normal">and the thinking.</em></h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-4">
                Eight projects across events, social media, campaigns, podcasts, branding and content production—shown through the decisions behind the output.
              </p>
            </div>
            {caseStudies.map((study, index) => <ProjectStory key={study.slug} study={study} index={index} />)}
          </div>
        </section>

        <section className="blush-wash border-y border-border">
          <div className="mx-auto grid max-w-[1400px] gap-px px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-t border-border py-7 sm:px-6 sm:first:pl-0 lg:border-l lg:border-t-0">
                <strong className="display text-5xl sm:text-6xl">{metric.value}</strong>
                <p className="mt-3 max-w-[12rem] text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12">
          <p className="kicker text-coral lg:col-span-3">02 / About</p>
          <div className="lg:col-span-7">
            <h2 className="display text-5xl sm:text-7xl">Strategy gives the work direction. Creativity makes it worth noticing.</h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{site.intro}</p>
            <Link to="/about" className="editorial-link mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">More about me <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}