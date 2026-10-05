import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { aboutCopy, experience, metrics, site, skills } from "@/lib/site";
import { toolLogos } from "@/lib/logos";

const title = "About Arya Kamble — Marketing & Creative";
const description = "About Arya Kamble's experience across marketing, social media, content, creative direction and branding.";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <SiteNav />
      <main id="main-content" className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <header className="grid gap-10 border-b border-border py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8"><p className="kicker text-coral">About / Arya Kamble</p><h1 className="display mt-7 text-7xl sm:text-9xl">Marketing<br /><em className="font-normal text-coral">+ Creative</em></h1></div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:self-end">{aboutCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </header>

        <section className="grid gap-8 border-b border-border py-16 lg:grid-cols-12">
          <p className="kicker text-coral lg:col-span-3">Selected achievements</p>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4">{metrics.map((metric) => <div key={metric.label} className="bg-background p-6"><strong className="display text-5xl">{metric.value}</strong><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{metric.label}</p></div>)}</div>
        </section>

        <section className="grid gap-8 border-b border-border py-16 lg:grid-cols-12">
          <p className="kicker text-coral lg:col-span-3">Experience</p>
          <div className="lg:col-span-9">{experience.map((item, index) => <article key={item.role + item.company} className="grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[7rem_1fr] md:gap-10"><span className="display text-4xl text-muted-foreground">0{index + 1}</span><div><p className="text-[10px] uppercase tracking-[0.18em] text-coral">{item.company} / {item.date}</p><h2 className="display mt-3 text-4xl">{item.role}</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.body}</p></div></article>)}</div>
        </section>

        <section className="grid gap-8 border-b border-border py-16 lg:grid-cols-12">
          <p className="kicker text-coral lg:col-span-3">Skills & tools</p>
          <div className="lg:col-span-9"><div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4">{skills.map((skill) => <span key={skill} className="border-b border-r border-border px-4 py-5 text-[10px] uppercase tracking-[0.14em]">{skill}</span>)}</div><div className="mt-10 flex flex-wrap items-center gap-4">{toolLogos.map((tool) => <figure key={tool.name} className="w-14"><img src={tool.url} alt={`${tool.name} logo`} className="h-10 w-10 object-contain" loading="lazy" /><figcaption className="mt-2 truncate text-[8px] uppercase tracking-[0.08em] text-muted-foreground">{tool.name}</figcaption></figure>)}</div></div>
        </section>

        <section className="grid gap-8 py-16 lg:grid-cols-12"><p className="kicker text-coral lg:col-span-3">Resume</p><div className="lg:col-span-7"><h2 className="display text-5xl">The resume file isn’t attached yet.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Once the real file is added, the Resume link will open it directly. Nothing placeholder has been created.</p><a href={`mailto:${site.email}`} className="editorial-link mt-7 inline-block text-[10px] uppercase tracking-[0.18em]">Request details by email</a></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}